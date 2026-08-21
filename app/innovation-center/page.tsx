import type { Metadata } from 'next'
import { Arrow, ButtonLink, Container, SiteShell } from '@/components/site-shell'
import { Faq } from '@/components/faq'

const faqItems = [
  { question: 'What is the Innovation Hub?', answer: 'A dedicated home for technological innovation in pharmaceutical solutions — advancing formulation science, manufacturing technology, and process innovation, backed by our two working divisions rather than starting from theory.' },
  { question: 'When will it launch?', answer: 'The Innovation Hub is coming soon. Register your interest and we\'ll keep you updated as it takes shape.' },
  { question: 'How can I register interest or stay updated?', answer: 'Use the "Register Interest" button on this page, or reach out through our contact form and mention the Innovation Hub.' },
  { question: 'What kind of R&D will it focus on?', answer: 'Formulation science, process and manufacturing innovation, and institutional partnerships that advance pharmaceutical solutions from concept to clinic.' },
  { question: 'Will it partner with universities or research institutions?', answer: 'Institutional partnerships are a core part of the plan. If you represent a university or research institution interested in collaborating, get in touch.' },
]

export const metadata: Metadata = {
  title: 'Pharmaceutical R&D Innovation Hub',
  description: 'Technology-driven R&D advancing pharmaceutical formulation, manufacturing, and clinical solutions from Pioneer Biotech. Coming soon.',
  alternates: { canonical: '/innovation-center' },
}

const tags = ['R&D & Formulation Science', 'Process & Manufacturing Innovation', 'Institutional Partnerships']

export default function InnovationPage() {
  return <SiteShell><main>
    <section className="page-hero has-image innovation-hero">
      <img src="/images/innovation-center-hero-bg.jpeg" alt="" aria-hidden="true" />
      <Container>
        <p className="badge badge-pulse">Coming Soon</p>
        <h1>Where Pharmaceutical Science Meets What&apos;s Next.</h1>
        <span className="hero-rule" aria-hidden="true" />
        <p className="hero-copy">Pioneer Biotech is building a dedicated home for technological innovation in pharmaceutical solutions — advancing formulation science, manufacturing technology, and process innovation. Backed by two working divisions, not a research company guessing at theory.</p>
        <div className="hero-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="button-row"><ButtonLink href="/contact">Register Interest <Arrow /></ButtonLink></div>
      </Container>
    </section>

    <Faq items={faqItems} />
  </main></SiteShell>
}
