'use client'

import { useState, type FormEvent } from 'react'
import { Container, PageHero, SiteShell } from '@/components/site-shell'

const interests = ['General Inquiry', 'Pharmaceutical Solutions', 'Medical Devices', 'Innovation Hub']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return <SiteShell><main>
    <PageHero breadcrumb="Pioneer Biotech / Contact" eyebrow="GET IN TOUCH" title="Let's Start a Conversation." description="Sourcing pharmaceutical materials, adopting the A1 Frame, or exploring our Innovation Hub — tell us what you need and we'll route you to the right specialist." />

    <section className="section">
      <Container>
        {submitted ? (
          <div className="form-success">
            <h3>Message Received.</h3>
            <p>Thanks for reaching out — a member of our team will get back to you shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="interest">I&apos;m Interested In</label>
                <select id="interest" name="interest" defaultValue={interests[0]}>
                  {interests.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>
        )}
      </Container>
    </section>
  </main></SiteShell>
}
