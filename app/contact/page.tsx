'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone } from 'lucide-react'
import { Container, IconMark, PageHero, SiteShell } from '@/components/site-shell'
import { Faq } from '@/components/faq'

const faqItems = [
  { question: 'How quickly will I get a response?', answer: 'We typically respond within one business day. For anything urgent, calling or emailing us directly usually gets the fastest reply.' },
  { question: 'What should I include in my message?', answer: 'Let us know which division you\'re interested in (Pharma Solutions, Medical Devices, or Innovation Hub), your organization, and what you\'re looking to achieve — the more context, the faster we can route you to the right specialist.' },
  { question: 'Can I request a quote directly through this form?', answer: "Yes — select the relevant interest and describe what you need in your message. A specialist will follow up with pricing and next steps." },
  { question: 'Do you have offices I can visit?', answer: 'Yes — our offices are in New Cairo, Egypt, and Masdar City, Abu Dhabi, UAE. Reach out in advance and we\'ll arrange a time.' },
  { question: 'Is there a phone option if I\'d rather not use the form?', answer: 'Yes — you can call or email us directly using the details in the "Reach Us Directly" panel above.' },
]

const CONTACT_EMAIL = 'info@pbio.tech'
const CONTACT_PHONE = '+971 50 385 9559'

const interests = ['Pharma Solutions', 'Medical Devices', 'Innovation Hub']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSending(true)

    const payload = {
      name,
      email,
      company: String(data.get('company') || ''),
      country: String(data.get('country') || ''),
      interest: String(data.get('interest') || ''),
      message,
      newsletter: Boolean(data.get('newsletter')),
      website: String(data.get('website') || ''), // honeypot
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Failed to send message.')
      }

      setSubmitted(true)
      form.reset()
    } catch {
      // Falls back to the visitor's own email client if the API is unreachable
      // or misconfigured, so the form still gets the message through.
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${payload.company || '—'}`,
        `Country: ${payload.country || '—'}`,
        `Interested In: ${payload.interest || '—'}`,
        `Newsletter opt-in: ${payload.newsletter ? 'Yes' : 'No'}`,
        '',
        message,
      ].join('\n')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Website enquiry — ${name}`)}&body=${encodeURIComponent(body)}`
      setSubmitted(true)
      form.reset()
    } finally {
      setSending(false)
    }
  }

  return <SiteShell><main>
    <PageHero breadcrumb="Pioneer Biotech / Contact" eyebrow="GET IN TOUCH" title="Let's Start a Conversation." description="Sourcing pharmaceutical materials, adopting the A1 Frame, or exploring our Innovation Hub — tell us what you need and we'll route you to the right specialist." image="/images/contact-hero.jpeg" />

    <section className="section">
      <Container>
        <div className="contact-layout">
          <div>
            {submitted ? (
              <div className="form-success">
                <h3>Message Sent</h3>
                <p>Thanks for reaching out — our team will get back to you within one business day.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="text-link" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Send another message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                />
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" autoComplete="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" autoComplete="organization" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="country">Country</label>
                    <input id="country" name="country" type="text" autoComplete="country-name" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="interest">I&apos;m Interested In</label>
                  <select id="interest" name="interest" defaultValue={interests[0]}>
                    {interests.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Tell us how we can help…" />
                </div>
                <label className="form-checkbox">
                  <input type="checkbox" name="newsletter" value="yes" />
                  <span>Send me occasional updates from Pioneer Biotech</span>
                </label>
                {error && <p role="alert" className="form-error">{error}</p>}
                <button type="submit" className="button" disabled={sending}>{sending ? 'Sending…' : 'Send Message'}</button>
              </form>
            )}
          </div>

          <div className="contact-sidebar">
            <h3>Reach Us Directly</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>Prefer email or a call? We typically respond within one business day.</p>
            <div className="contact-direct">
              <a href={`mailto:${CONTACT_EMAIL}`}><IconMark><Mail aria-hidden="true" /></IconMark>{CONTACT_EMAIL}</a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}><IconMark><Phone aria-hidden="true" /></IconMark>{CONTACT_PHONE}</a>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <Faq items={faqItems} tan />
  </main></SiteShell>
}
