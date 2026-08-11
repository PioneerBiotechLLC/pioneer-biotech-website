import { Arrow, ButtonLink, ClosingCta, Container, Eyebrow, IconMark, PageHero, SiteShell } from '@/components/site-shell'

const programs = [
  ['[Program type 1 — e.g. hands-on workshops]', '[short description]'],
  ['[Program type 2 — e.g. certification courses]', '[short description]'],
  ['[Program type 3 — e.g. hospital/university partnerships]', '[short description]'],
]

export default function InnovationPage() { return <SiteShell><main><PageHero breadcrumb="Pioneer Biotech / Innovation Center" eyebrow="INNOVATION CENTER" title="Advancing Skills. Advancing Care." description="[1–2 sentences on the Innovation Center's mission — training and clinical education arm of Pioneer Biotech]" />
  <section className="section"><Container><Eyebrow>OUR PROGRAMS</Eyebrow><h2>Training Built Around Real Practice</h2><p className="section-intro">[Paragraph describing the Innovation Center's role — clinical and technical education supporting healthcare teams across [region]]</p><div className="card-grid three">{programs.map(([title, body], i) => <article className="program-card" key={title}><IconMark>{String(i + 1).padStart(2, '0')}</IconMark><h3>{title}</h3><p>{body}</p></article>)}</div></Container></section>
  <section className="section section-tan"><Container><Eyebrow>WHO WE TRAIN</Eyebrow><h2>[Headline naming target audience — clinicians, technicians, or both — TBC]</h2><p className="section-intro">[1–2 sentences describing the audience(s) served]</p></Container></section>
  <section className="section"><Container><Eyebrow>FEATURED PROGRAM</Eyebrow><div className="featured-program"><div><h2>[Name of flagship program]</h2><p>[1–2 sentences on what it covers and who it's for]</p><ButtonLink href="#contact">Request Program Info <Arrow /></ButtonLink></div><div className="image-placeholder" role="img" aria-label="Image placeholder">[IMAGE PLACEHOLDER]</div></div></Container></section>
  <ClosingCta dark title="Invest in Your Team" description="[1 sentence inviting hospitals, institutions, or individuals to enroll or inquire]" buttons={['Request Program Info', 'Contact Us']} /></main></SiteShell> }
