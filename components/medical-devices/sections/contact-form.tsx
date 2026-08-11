'use client'

import { useState } from 'react'
import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { Check, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react'

// Central place for the org's contact details — update once, reflected everywhere.
const WHATSAPP_NUMBER = '971503859559' // digits only, international format
const CONTACT_EMAIL = 'info@Pbio.tech'
const CONTACT_PHONE = '+971 50 385 9559'

const ROLES = ['Surgeon', 'Procurement / Hospital admin', 'Distributor', 'Other']
const INTERESTS = ['Clinical evaluation', 'Distribution partnership', 'General enquiry']

const fieldClass =
  'w-full rounded-sm border border-border bg-white px-4 py-2.5 text-sm text-surface-dark placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25'
const labelClass = 'mb-1.5 block text-sm font-medium text-surface-dark'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /*const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I'd like to learn more about the A1 Stereotactic Frame.",
  )}`*/

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    // TODO: wire to a real backend / email service (e.g. an API route or Formspree).
    // Until then, we open the visitor's mail client with the message pre-filled so
    // the form is genuinely functional with no server.
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${data.get('organization') || '—'}`,
      `Role: ${data.get('role') || '—'}`,
      `Country: ${data.get('country') || '—'}`,
      `Interest: ${data.get('interest') || '—'}`,
      '',
      String(data.get('message') || ''),
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `A1 Frame enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    form.reset()
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
      {/* Form */}
      <Reveal>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-7" strokeWidth={2} />
              </span>
              <h2 className="mt-5 text-xl font-semibold text-surface-dark">Thank you</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your message is ready in your email client — send it and our team will get back to
                you shortly. Prefer something faster? Reach us on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-primary hover:text-surface-dark"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full name <span className="text-primary">*</span>
                  </label>
                  <input id="name" name="name" type="text" autoComplete="name" className={fieldClass} placeholder="Dr. Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-primary">*</span>
                  </label>
                  <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="jane@hospital.org" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="organization" className={labelClass}>
                    Organization / Hospital
                  </label>
                  <input id="organization" name="organization" type="text" autoComplete="organization" className={fieldClass} placeholder="City General Hospital" />
                </div>
                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country
                  </label>
                  <input id="country" name="country" type="text" autoComplete="country-name" className={fieldClass} placeholder="United Arab Emirates" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="role" className={labelClass}>
                    I am a…
                  </label>
                  <select id="role" name="role" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a role
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="interest" className={labelClass}>
                    Interested in
                  </label>
                  <select id="interest" name="interest" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a topic
                    </option>
                    {INTERESTS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message <span className="text-primary">*</span>
                </label>
                <textarea id="message" name="message" rows={5} className={fieldClass} placeholder="Tell us how we can help…" />
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  nativeButton
                  variant="secondary"
                  className="h-auto w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 sm:w-auto"
                >
                  Send message
                </Button>
                <p className="text-xs text-muted-foreground">
                  We typically respond within one business day.
                </p>
              </div>
            </form>
          )}
        </div>
      </Reveal>

      {/* Sidebar — WhatsApp + direct details */}
      <Reveal delay={120}>
        <div className="flex flex-col gap-4">
          {/* WhatsApp — the fast alternative */}
          

          {/* Direct details */}
          <div className="rounded-2xl border border-border bg-white p-6">
            <h3 className="text-base font-semibold text-surface-dark">Reach us directly</h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <Mail className="size-4" strokeWidth={1.75} />
                </span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-surface-dark hover:text-primary">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <Phone className="size-4" strokeWidth={1.75} />
                </span>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-sm text-surface-dark hover:text-primary">
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
