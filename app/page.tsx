import Link from 'next/link'
import { BadgeCheck, BookOpenCheck, Boxes, Clock, Crosshair, Factory, FlaskConical, Globe, Handshake, ShieldCheck } from 'lucide-react'
import { Arrow, ButtonLink, ClosingCta, Container, Eyebrow, MEDICAL_DEVICES_URL, PartnerBar, SectionDivider, SiteShell, TrustStrip } from '@/components/site-shell'

const divisions = [
  ['Pharmaceutical Solutions', 'Microbiology, lab equipment, and pharmaceutical raw materials for manufacturers worldwide.', '/pharma-biopharma', false, '/images/division-pharma-biopharma.jpeg'],
  ['Medical Devices', "Home of the A1 Stereotactic Frame — the world's first bilateral trajectory neurosurgical frame.", MEDICAL_DEVICES_URL, false, '/images/division-medical-devices.jpeg'],
  ['Innovation Hub', 'Technology-driven R&D advancing pharmaceutical formulation, manufacturing, and clinical solutions. Coming soon.', '/innovation-center', false, '/images/division-innovation-center.jpeg'],
]

export default function Home() {
  return <SiteShell><main>
    <section className="hero"><Container><Eyebrow light>PIONEER BIOTECH</Eyebrow><h1>Engineering the Future of Healthcare.</h1><p className="hero-copy">From pharmaceutical solutions to neurosurgical innovation, Pioneer Biotech builds the technology, materials, and expertise behind modern healthcare.</p><div className="button-row"><ButtonLink href="/contact">Contact Us <Arrow /></ButtonLink><ButtonLink href="#divisions" outline>Explore Our Divisions</ButtonLink></div></Container></section>
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
    <section className="section" id="glance"><Container><Eyebrow>PIONEER BIOTECH AT A GLANCE</Eyebrow><div className="stats"><div><strong>15+</strong><span>Years in Operation</span></div><div><strong>50+</strong><span>Countries Served</span></div><div><strong>500+</strong><span>Partners Worldwide</span></div><div className="flex flex-col items-start gap-3"><div className="flex w-full flex-row flex-nowrap items-center justify-between"><ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" /><BadgeCheck className="size-5 shrink-0 text-primary" aria-hidden="true" /><FlaskConical className="size-5 shrink-0 text-primary" aria-hidden="true" /><BookOpenCheck className="size-5 shrink-0 text-primary" aria-hidden="true" /><Globe className="size-5 shrink-0 text-primary" aria-hidden="true" /></div><span>GMP · ISO · USP · BP · EP Certified</span></div></div></Container></section>
    <section className="feature"><img src="/images/pharma-hero.jpeg" alt="" aria-hidden="true" /><Container><Eyebrow light>PHARMACEUTICAL SOLUTIONS</Eyebrow><p className="badge">GMP, ISO, USP, BP &amp; EP Certified Supply Chain</p><div className="feature-layout"><div><h2>Everything Your<br />{' '}<span className="accent">Pharma Line Needs.</span></h2><ButtonLink href="/pharma-biopharma">Explore Pharmaceutical Solutions <Arrow /></ButtonLink></div><div className="feature-cards"><div><h4>Product Categories</h4></div><div><h4>APIs Sourced</h4></div><div><h4>Excipients Available</h4></div></div></div></Container></section>

    <SectionDivider>From Raw Materials to the Operating Room.</SectionDivider>

    <section className="feature"><img src="/images/feature-a1-frame.jpeg" alt="" aria-hidden="true" /><Container><Eyebrow light>FEATURED INNOVATION</Eyebrow><p className="badge">World's First Bilateral Trajectory Frame</p><div className="feature-layout"><div><h2>Simplest to Use.<br />{' '}<span className="accent">Fastest to Master.</span></h2><ButtonLink href={MEDICAL_DEVICES_URL}>Explore the A1 Frame <Arrow /></ButtonLink></div><div className="feature-stats four compact"><div><Clock className="stat-icon" aria-hidden="true" /><div><strong>50%</strong><span>Reduction in Bilateral Procedures</span></div></div><div><Boxes className="stat-icon" aria-hidden="true" /><div><strong>5</strong><span>Components</span></div></div><div><ShieldCheck className="stat-icon" aria-hidden="true" /><div><strong>Zero</strong><span>Visible Pin Scars</span></div></div><div><Crosshair className="stat-icon" aria-hidden="true" /><div><strong>&lt;0.2mm</strong><span>Mean trajectory accuracy</span></div></div></div></div></Container></section>

    <SectionDivider>Innovation Doesn&apos;t Stop at Manufacturing.</SectionDivider>

    <section className="feature"><img src="/images/division-innovation-center.jpeg" alt="" aria-hidden="true" /><Container><Eyebrow light>INNOVATION HUB</Eyebrow><p className="badge">Coming Soon</p><div className="feature-layout"><div><h2>Engineering What&apos;s<br />{' '}<span className="accent">Next in Pharma.</span></h2><ButtonLink href="/innovation-center">Explore Innovation Hub <Arrow /></ButtonLink></div><div className="feature-stats compact"><div><FlaskConical className="stat-icon" aria-hidden="true" /><div><strong>R&amp;D</strong><span>Formulation &amp; process science</span></div></div><div><Factory className="stat-icon" aria-hidden="true" /><div><strong>Manufacturing</strong><span>Advanced production technology</span></div></div><div><Handshake className="stat-icon" aria-hidden="true" /><div><strong>Partnerships</strong><span>Research &amp; academic institutions</span></div></div></div></div></Container></section>

    <ClosingCta title="Partner With Pioneer Biotech" description="Whether you're sourcing pharmaceutical materials, adopting next-generation surgical technology, or exploring what's next in pharma innovation — we're ready to help." buttons={['Contact Us', 'Explore Our Divisions']} links={['/contact', '#divisions']} />
    <TrustStrip />
  </main></SiteShell>
}
