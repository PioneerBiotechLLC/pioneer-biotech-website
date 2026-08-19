import { Arrow, ButtonLink, Container, Eyebrow, SiteShell } from '@/components/site-shell'

const tags = ['R&D & Formulation Science', 'Process & Manufacturing Innovation', 'Institutional Partnerships']

export default function InnovationPage() {
  return <SiteShell><main>
    <section className="page-hero has-image innovation-hero">
      <img src="/images/innovation-center-hero-bg.jpeg" alt="" aria-hidden="true" />
      <Container>
        <p className="badge badge-pulse">Coming Soon</p>
        <Eyebrow light>INNOVATION HUB</Eyebrow>
        <h1>Where Pharmaceutical Science Meets What&apos;s Next.</h1>
        <span className="hero-rule" aria-hidden="true" />
        <p className="hero-copy">Pioneer Biotech is building a dedicated home for technological innovation in pharmaceutical solutions — advancing formulation science, manufacturing technology, and process innovation. Backed by two working divisions, not a research company guessing at theory.</p>
        <div className="hero-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="button-row"><ButtonLink href="/contact">Register Interest <Arrow /></ButtonLink></div>
      </Container>
    </section>
  </main></SiteShell>
}
