import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'info@pbio.tech'
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || 'Pioneer Biotech Website <onboarding@resend.dev>'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
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
      subject: `Website enquiry — ${name}`,
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
