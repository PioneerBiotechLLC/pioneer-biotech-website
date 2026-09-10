import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'info@pbio.tech'
// pbio.tech is verified in Resend, so this is a working default rather than a
// sandbox sender. CONTACT_FROM_EMAIL stays available as an override, but any value
// must sit on a domain verified in Resend or the send is rejected outright.
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || 'Pioneer Biotech <noreply@pbio.tech>'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Ceilings so a script can't push megabytes through the form, and through the
// Resend quota with it. Generous enough that no genuine enquiry reaches them.
const LIMITS: Record<string, number> = {
  name: 100,
  email: 254,
  company: 200,
  country: 100,
  interest: 100,
  message: 5000,
}

// Best-effort throttle. Serverless instances don't share memory, so this bounds
// abuse per instance rather than globally — enough to stop a naive script from
// draining the Resend quota and flooding the inbox, but not a replacement for an
// edge/WAF rule if this ever gets targeted properly.
const RATE_WINDOW_MS = 60_000
const RATE_MAX = 5
const recentHits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const hits = (recentHits.get(ip) ?? []).filter((at) => now - at < RATE_WINDOW_MS)
  hits.push(now)
  recentHits.set(ip, hits)

  if (recentHits.size > 5000) {
    for (const [key, times] of recentHits) {
      if (times.every((at) => now - at >= RATE_WINDOW_MS)) recentHits.delete(key)
    }
  }

  return hits.length > RATE_MAX
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many messages. Please try again shortly.' }, { status: 429 })
  }

  if (Number(request.headers.get('content-length')) > 100_000) {
    return NextResponse.json({ error: 'Request body is too large.' }, { status: 413 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const company = String(body.company || '').trim()
  const country = String(body.country || '').trim()
  const interest = String(body.interest || '').trim()
  const message = String(body.message || '').trim()
  const newsletter = Boolean(body.newsletter)
  // Honeypot field — real users never fill this in; bots that autofill every field will.
  const honeypot = String(body.website || '').trim()

  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please fill in your name, email, and message.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const tooLong = Object.entries(LIMITS).find(
    ([field, max]) => String(body[field] ?? '').trim().length > max,
  )
  if (tooLong) {
    return NextResponse.json({ error: `That ${tooLong[0]} is too long.` }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.')
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '—'],
    ['Country', country || '—'],
    ['Interested In', interest || '—'],
    ['Newsletter opt-in', newsletter ? 'Yes' : 'No'],
  ]

  const html = `
    <div style="font-family: sans-serif; font-size: 15px; color: #111;">
      <h2 style="margin-bottom: 16px;">New website enquiry</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows.map(([label, value]) => `<tr><td style="font-weight:600; vertical-align:top;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`).join('')}
      </table>
      <p style="font-weight:600; margin-top:20px;">Message</p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: CONTACT_EMAIL,
      replyTo: email,
      // Newlines stripped: `name` is the one user value that lands in a mail header,
      // where a CR/LF would let a sender append headers of their own.
      subject: `Website enquiry — ${name.replace(/[\r\n]+/g, ' ')}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form send failed:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
  }
}
