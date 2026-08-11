import Link from 'next/link'
import { Arrow, ButtonLink, ClosingCta, Container, Eyebrow, MEDICAL_DEVICES_URL, PartnerBar, SectionDivider, SiteShell, TrustStrip } from '@/components/site-shell'

const divisions = [
  ['Pharma & Biopharma', 'Microbiology, lab equipment, and pharmaceutical raw materials for manufacturers worldwide.', '/pharma-biopharma', false, '/images/division-pharma-biopharma.jpeg'],
  ['Medical Devices', "Home of the A1 Stereotactic Frame — the world's first bilateral trajectory neurosurgical frame.", MEDICAL_DEVICES_URL, false, '/images/division-medical-devices.jpeg'],
  ['Innovation Center', '[Short description of training & clinical education programs — pending program specifics]', '/innovation-center', false, '/images/division-innovation-center.jpeg'],
]

export default function Home() {
  return <SiteShell><main>
    <section className="hero"><Container><Eyebrow light>PIONEER BIOTECH</Eyebrow><h1>Engineering the Future of Healthcare.</h1><p className="hero-copy">From pharmaceutical manufacturing to neurosurgical innovation, Pioneer Biotech builds the technology, materials, and expertise behind modern healthcare.</p><div className="button-row"><ButtonLink href="#divisions">Explore Our Divisions <Arrow /></ButtonLink><ButtonLink href="#contact" outline>Contact Us</ButtonLink></div></Container></section>
    <PartnerBar />
    <section className="section section-tan" id="divisions">
      <Container><Eyebrow>WHAT WE DO</Eyebrow><h2>Three Divisions. One Mission.</h2></Container>
      <div className="division-split">
        {divisions.map(([title, body, href, external, image], i) => {
          const panel = <>
            <img src={image as string} alt="" loading="lazy" />
            <div className="panel-content">
              <span className="panel-number">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="panel-cta">View {title} <Arrow /></span>
            </div>
          </>
          return external
            ? <a className="division-panel" href={href as string} target="_blank" rel="noreferrer" key={title as string}>{panel}</a>
            : <Link className="division-panel" href={href as string} key={title as string}>{panel}</Link>
        })}
      </div>
    </section>
    <section className="section" id="glance"><Container><Eyebrow>PIONEER BIOTECH AT A GLANCE</Eyebrow><div className="stats"><div><strong>15+</strong><span>Years in Operation</span></div><div><strong>50+</strong><span>Countries Served</span></div><div><strong>500+</strong><span>Partners Worldwide</span></div><div><strong>GMP / ISO</strong><span>Certified</span></div></div></Container></section>
    <section className="feature"><img src="/images/pharma-hero.jpeg" alt="" aria-hidden="true" /><Container><Eyebrow light>PHARMA & BIOPHARMA</Eyebrow><p className="badge">GMP & ISO Certified Supply Chain</p><div className="feature-layout"><div><h2>Everything Your<br />{' '}<span className="accent">Pharma Line Needs.</span></h2><ButtonLink href="/pharma-biopharma">Explore Pharma & Biopharma <Arrow /></ButtonLink></div><div className="feature-stats"><div><strong>05</strong><span>Product Categories</span></div><div><strong>12</strong><span>APIs Sourced</span></div><div><strong>20+</strong><span>Excipients Available</span></div></div></div></Container></section>

    <SectionDivider>From Raw Materials to the Operating Room.</SectionDivider>

    <section className="feature"><img src="/images/feature-a1-frame.jpeg" alt="" aria-hidden="true" /><Container><Eyebrow light>FEATURED INNOVATION</Eyebrow><p className="badge">World's First Bilateral Trajectory Frame</p><div className="feature-layout"><div><h2>Simplest to Use.<br />{' '}<span className="accent">Fastest to Master.</span></h2><ButtonLink href={MEDICAL_DEVICES_URL}>Explore the A1 Frame <Arrow /></ButtonLink></div><div className="feature-stats"><div><strong>50%</strong><span>Reduction in Bilateral Procedures</span></div><div><strong>5</strong><span>Components</span></div><div><strong>Zero</strong><span>Visible Pin Scars</span></div></div></div></Container></section>

    <SectionDivider>Technology Is Only as Good as the Hands That Use It.</SectionDivider>

    <section className="feature"><img src="/images/division-innovation-center.jpeg" alt="" aria-hidden="true" /><Container><Eyebrow light>INNOVATION CENTER</Eyebrow><p className="badge">Clinical & Technical Education</p><div className="feature-layout"><div><h2>Advancing Skills.<br />{' '}<span className="accent">Advancing Care.</span></h2><ButtonLink href="/innovation-center">Explore Innovation Center <Arrow /></ButtonLink></div><div className="feature-stats"><div><strong>[X+]</strong><span>Clinicians Trained</span></div><div><strong>[X+]</strong><span>Certification Programs</span></div><div><strong>[X+]</strong><span>Partner Institutions</span></div></div></div></Container></section>

    <ClosingCta title="Partner With Pioneer Biotech" description="Whether you're sourcing pharmaceutical materials, adopting next-generation surgical technology, or training your clinical team — we're ready to help." buttons={['Contact Us', 'Request a Quote', 'Speak to a Specialist']} />
    <TrustStrip label="[additional certifications — confirm]" />
  </main></SiteShell>
}
