import Link from 'next/link'
import type { Metadata } from 'next'
import { FlaskConical, Globe, Handshake, Lightbulb, Scale, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Arrow, ButtonLink, ClosingCta, Container, Eyebrow, IconMark, MEDICAL_DEVICES_URL, PageHero, SiteShell } from '@/components/site-shell'
import { Faq } from '@/components/faq'

const faqItems = [
  { question: 'How long has Pioneer Biotech been operating?', answer: "Over 8 years, growing from a regional supplier into a trusted international partner for healthcare companies, distributors, hospitals, and pharmacies across five continents." },
  { question: 'How is Pioneer Biotech structured?', answer: 'We operate as three divisions under one company: Pharma Solutions (manufacturing and supply), Medical Devices (the A1 Stereotactic Frame), and our upcoming Innovation Hub for pharmaceutical R&D.' },
  { question: 'What markets do you serve?', answer: "Healthcare companies, distributors, hospitals, and pharmacies in 50+ countries, supported from our offices in Egypt and Abu Dhabi." },
  { question: 'Do you offer partnership or distribution opportunities?', answer: 'Yes — across all three divisions. Tell us your market and product interest through our contact form and a specialist will follow up.' },
  { question: 'How can I get in touch with a specific division?', answer: 'Our contact form lets you flag which division you\'re interested in, and we\'ll route your enquiry to the right specialist.' },
]

export const metadata: Metadata = {
  title: 'Our Story & Global Divisions',
  description: 'A global pharmaceutical and medical device company built on science and quality, with 8+ years of healthcare innovation across three divisions.',
  alternates: { canonical: '/about' },
}

const stats = [
  ['8+', 'Years in Operation'],
  ['50+', 'Countries Served'],
  ['10,000+', 'Products in Portfolio'],
  ['500+', 'B2B Partners Worldwide'],
]

const divisions = [
  ['Pharma Solutions', 'Microbiology, lab equipment, and pharmaceutical raw materials for manufacturers worldwide.', '/pharma-biopharma', false],
  ['Medical Devices', "Home of the A1 Stereotactic Frame — the world's first bilateral trajectory neurosurgical frame.", MEDICAL_DEVICES_URL, false],
  ['Innovation Hub', 'Technology-driven R&D advancing pharmaceutical formulation, manufacturing, and clinical solutions.', '/innovation-center', false],
]

const values: [string, string, LucideIcon][] = [
  ['Quality First', 'Every product we manufacture or supply meets the highest quality standards. There are no shortcuts in pharmaceutical quality.', ShieldCheck],
  ['Scientific Integrity', 'Our decisions are grounded in science, evidence, and regulatory best practices — not commercial convenience.', FlaskConical],
  ['Reliable Partnership', "We build long-term relationships based on transparency, consistency, and a genuine commitment to our partners' success.", Handshake],
  ['Global Responsibility', 'We recognize the critical role pharmaceuticals play in public health and take that responsibility seriously in everything we do.', Globe],
  ['Continuous Innovation', 'We invest in technology, processes, and people to stay ahead of evolving pharmaceutical standards and market needs.', Lightbulb],
  ['Compliance & Ethics', 'We operate with full transparency and strict adherence to regulatory requirements across all markets we serve.', Scale],
]

export default function AboutPage() {
  return <SiteShell><main>
    <PageHero className="tight-top" title="About Pioneer Biotech" description="A forward-thinking pharmaceutical company built on science, quality, and a commitment to improving global healthcare access." image="/images/about-hero.jpeg" />

    <section className="section" id="glance">
      <Container>
        <div className="stats">
          {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </Container>
    </section>

    <section className="section section-tan">
      <Container>
        <h2>One Company. Three Divisions.</h2>
        <p className="section-intro">Pioneer Biotech operates across three divisions — pharmaceutical manufacturing and supply, medical devices, and clinical training — united by the same commitment to quality and partnership.</p>
      </Container>
      <Container>
        <div className="division-list">
          {divisions.map(([title, body, href, external], i) => {
            const row = <>
              <strong>{String(i + 1).padStart(2, '0')}</strong>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="text-link">View {title} <Arrow /></span>
              </div>
            </>
            return external
              ? <a className="division-row" href={href as string} target="_blank" rel="noreferrer" key={title as string}>{row}</a>
              : <Link className="division-row" href={href as string} key={title as string}>{row}</Link>
          })}
        </div>
      </Container>
    </section>

    <section className="section">
      <Container>
        <h2>Our Story</h2>
        <div className="featured-program story-layout">
          <div>
            <p className="section-intro" style={{ marginTop: '1.5rem' }}>Pioneer Biotech was founded with a clear mission: to bridge the gap between pharmaceutical manufacturing excellence and global healthcare supply needs. Over more than 8 years, we have grown from a regional supplier into a trusted international partner for healthcare companies, distributors, hospitals, and pharmacies across five continents.</p>
            <p className="section-intro">Our operations are built on a foundation of scientific rigor, regulatory compliance, and a deep understanding of the complex pharmaceutical supply chain. We combine advanced manufacturing capabilities with a global sourcing network to deliver reliable, high-quality pharmaceutical products to markets that need them most.</p>
          </div>
          <div className="story-image">
            <img src="/images/about-our-story.jpeg" alt="Pioneer Biotech technician calibrating precision bioreactor equipment" loading="lazy" />
            <span className="story-caption">Precision at every stage of production</span>
          </div>
        </div>
      </Container>
    </section>

    <section className="section section-tan">
      <Container>
        <Eyebrow>MISSION &amp; VISION</Eyebrow>
        <div className="featured-program">
          <div>
            <h3>Our Mission</h3>
            <p>To provide healthcare companies and partners worldwide with reliable access to high-quality pharmaceutical products, manufacturing solutions, and supply chain expertise — enabling better patient outcomes through science and innovation.</p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>To be the most trusted pharmaceutical manufacturing and supply partner in emerging and established markets globally, recognized for quality, compliance, and the strength of our partnerships.</p>
          </div>
        </div>
      </Container>
    </section>

    <section className="section">
      <Container>
        <h2>What Guides Us</h2>
        <div className="card-grid three">
          {values.map(([title, body, Icon]) => <article className="program-card value-card" key={title as string}><IconMark><Icon className="value-icon" aria-hidden="true" /></IconMark><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </Container>
    </section>

    <Faq items={faqItems} tan />

    <ClosingCta title="Let's Work Together" description="Whether you're sourcing pharmaceutical materials, adopting next-generation surgical technology, or training your clinical team — we're ready to help." buttons={['Contact Us', 'Request a Quote', 'Speak to a Specialist']} links={['/contact']} />
  </main></SiteShell>
}
