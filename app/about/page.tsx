import Link from 'next/link'
import { Arrow, ButtonLink, ClosingCta, Container, Eyebrow, IconMark, MEDICAL_DEVICES_URL, PageHero, SiteShell } from '@/components/site-shell'

const stats = [
  ['15+', 'Years in Operation'],
  ['50+', 'Countries Served'],
  ['10,000+', 'Products in Portfolio'],
  ['500+', 'B2B Partners Worldwide'],
]

const divisions = [
  ['Pharmaceutical Solutions', 'Microbiology, lab equipment, and pharmaceutical raw materials for manufacturers worldwide.', '/pharma-biopharma', false],
  ['Medical Devices', "Home of the A1 Stereotactic Frame — the world's first bilateral trajectory neurosurgical frame.", MEDICAL_DEVICES_URL, false],
  ['Innovation Hub', 'Technology-driven R&D advancing pharmaceutical formulation, manufacturing, and clinical solutions.', '/innovation-center', false],
]

const values = [
  ['Quality First', 'Every product we manufacture or supply meets the highest quality standards. There are no shortcuts in pharmaceutical quality.'],
  ['Scientific Integrity', 'Our decisions are grounded in science, evidence, and regulatory best practices — not commercial convenience.'],
  ['Reliable Partnership', "We build long-term relationships based on transparency, consistency, and a genuine commitment to our partners' success."],
  ['Global Responsibility', 'We recognize the critical role pharmaceuticals play in public health and take that responsibility seriously in everything we do.'],
  ['Continuous Innovation', 'We invest in technology, processes, and people to stay ahead of evolving pharmaceutical standards and market needs.'],
  ['Compliance & Ethics', 'We operate with full transparency and strict adherence to regulatory requirements across all markets we serve.'],
]

export default function AboutPage() {
  return <SiteShell><main>
    <PageHero breadcrumb="Pioneer Biotech / About Us" eyebrow="ABOUT PIONEER BIOTECH" title="About Pioneer Biotech" description="A forward-thinking pharmaceutical company built on science, quality, and a commitment to improving global healthcare access." />

    <section className="section" id="glance">
      <Container>
        <div className="stats">
          {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </Container>
    </section>

    <section className="section section-tan">
      <Container>
        <Eyebrow>ONE COMPANY, THREE DIVISIONS</Eyebrow>
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
        <Eyebrow>OUR STORY</Eyebrow>
        <h2>Our Story</h2>
        <p className="section-intro">Pioneer Biotech was founded with a clear mission: to bridge the gap between pharmaceutical manufacturing excellence and global healthcare supply needs. Over more than 15 years, we have grown from a regional supplier into a trusted international partner for healthcare companies, distributors, hospitals, and pharmacies across five continents.</p>
        <p className="section-intro">Our operations are built on a foundation of scientific rigor, regulatory compliance, and a deep understanding of the complex pharmaceutical supply chain. We combine advanced manufacturing capabilities with a global sourcing network to deliver reliable, high-quality pharmaceutical products to markets that need them most.</p>
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
        <Eyebrow>OUR CORE VALUES</Eyebrow>
        <h2>What Guides Us</h2>
        <div className="card-grid three">
          {values.map(([title, body], i) => <article className="program-card" key={title as string}><IconMark>{String(i + 1).padStart(2, '0')}</IconMark><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </Container>
    </section>

    <ClosingCta title="Let's Work Together" description="Whether you're sourcing pharmaceutical materials, adopting next-generation surgical technology, or training your clinical team — we're ready to help." buttons={['Contact Us', 'Request a Quote', 'Speak to a Specialist']} links={['/contact']} />
  </main></SiteShell>
}
