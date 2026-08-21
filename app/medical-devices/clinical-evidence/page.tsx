import type { Metadata } from 'next'
import { ArrowRight, Crosshair, Clock, HeartPulse, FileText, Quote } from 'lucide-react'
import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { Faq } from '@/components/medical-devices/sections/faq'

const faqItems = [
  { question: 'What clinical evidence supports the A1 Frame\'s accuracy claims?', answer: 'Reported outcomes include sub-millimeter mean trajectory accuracy and a 50% reduction in average operative time compared to conventional bilateral procedures, drawn from surgeon-reported clinical experience.' },
  { question: 'Has it been used in peer-reviewed studies?', answer: 'The evidence base is actively growing as institutional evaluation expands. Contact our team for the latest available data and publications.' },
  { question: 'What outcomes have surgeons reported?', answer: "Faster time from concept to operating room, precision that holds to exact specifications, and simplified bilateral access — see the surgeon testimonials above." },
  { question: 'Can I request full study data or a clinical evaluation kit?', answer: 'Yes — speak with our team to request a clinical evaluation kit or the underlying evidence supporting the A1 Frame.' },
  { question: 'Are surgeon testimonials available?', answer: 'Yes, several are featured on this page, with more available on request as our clinical evaluation program expands.' },
]

export const metadata: Metadata = {
  title: 'Clinical Evidence — NeuroTech A1 Stereotactic Frame',
  description:
    'Clinical outcomes, surgeon experience, and evidence behind the NeuroTech A1 Stereotactic Frame — the world’s first bilateral trajectory stereotactic system.',
  alternates: { canonical: '/medical-devices/clinical-evidence' },
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — Page hero
// ─────────────────────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-14 pt-32 md:pb-20 md:pt-44">
      {/* Dot-grid texture + gold glow, matching the homepage Problem/Features language */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Precision, proven in the operating room.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            The A1 Stereotactic Frame reaches both cerebral hemispheres in a single session — with
            sub-millimetre accuracy, no skull pins, and a patient experience that is measurably
            better from setup to recovery.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — Key outcomes bar
// ─────────────────────────────────────────────────────────────────────────────

const OUTCOMES = [
  { value: '<1mm', label: 'Mean trajectory accuracy' },
  { value: '50%', label: 'Reduction in average operative time' },
  { value: '2', label: 'Hemispheres accessed at the same time' },
  { value: 'Zero', label: 'Visible pin scars' },
]

function OutcomesBar() {
  return (
    <section className="border-b border-black/8 bg-surface-alt py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {OUTCOMES.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-mono text-3xl font-semibold text-accent-foreground-strong md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mx-auto mt-1.5 max-w-[180px] text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3 — Featured surgeon quote
// ─────────────────────────────────────────────────────────────────────────────

function FeaturedQuote() {
  return (
    <section className="bg-surface-dark py-20 md:py-28">
      <div className="mx-auto max-w-[760px] px-5 text-center md:px-8">
        <Reveal>
          <Quote className="mx-auto size-8 text-primary/60" aria-hidden="true" />
        </Reveal>
        <Reveal delay={80}>
          <blockquote className="mt-6 font-serif text-2xl italic leading-[1.45] text-white md:text-3xl lg:text-4xl">
            “What once required two procedures now takes one — with no skull pins, faster setup, and
            a patient experience that is meaningfully better from start to finish.”
          </blockquote>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 text-sm text-border">
            Dr. Mohamed Elsaeed, Director of Functional Neurosurgery
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4 — Outcome focus areas
// ─────────────────────────────────────────────────────────────────────────────

const AREAS = [
  {
    icon: Crosshair,
    title: 'Targeting accuracy',
    description:
      'The frame’s physically reachable reference point and re-zeroing mechanism support consistent sub-millimetre trajectory accuracy, verified mechanically rather than reconstructed from software alone.',
  },
  {
    icon: Clock,
    title: 'Operative efficiency',
    description:
      'Simultaneous bilateral access removes an entire surgical session, a second anaesthesia event, and a separate recovery — cutting average operative time for bilateral procedures roughly in half.',
  },
  {
    icon: HeartPulse,
    title: 'Patient experience',
    description:
      'Pin-free fixation behind the hairline leaves no visible scars, keeps the airway fully accessible for anaesthesia, and suits claustrophobic and awake patients who struggle with enclosing frames.',
  },
]

function OutcomeAreas() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-medium leading-tight text-surface-dark md:text-4xl">
            Where the evidence concentrates.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Across clinical use, the A1 Frame’s advantages cluster in three areas that matter most to
            surgical teams and patients alike.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 80} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
                  <area.icon className="size-5 text-accent-foreground-strong" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-surface-dark">{area.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 5 — Evidence base / studies
// TODO: replace these placeholder entries with real, verifiable studies,
// evaluations, or case reports. Do not present unverified data as clinical fact.
// ─────────────────────────────────────────────────────────────────────────────

const STUDIES = [
  {
    tag: 'Internal evaluation',
    title: 'Bilateral procedure time in functional neurosurgery',
    summary:
      'Placeholder — describe the evaluation setting, number of cases, and the operative-time finding here once confirmed.',
    meta: 'Institution · Year',
  },
  {
    tag: 'Case series',
    title: 'Targeting accuracy with a physically reachable reference point',
    summary:
      'Placeholder — summarise the accuracy methodology and mean deviation once the data is available.',
    meta: 'Institution · Year',
  },
  {
    tag: 'Patient outcomes',
    title: 'Cosmetic and recovery outcomes without skull pins',
    summary:
      'Placeholder — describe patient-reported outcomes on scarring, comfort, and recovery once collected.',
    meta: 'Institution · Year',
  },
]

function StudiesSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-primary/8 blur-[120px]"
      />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl font-medium leading-tight text-surface-dark md:text-4xl">
            The evidence base.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Clinical evaluation of the A1 Frame is ongoing across partner institutions. Published
            findings, case series, and evaluation summaries are listed here as they are confirmed.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {STUDIES.map((study, i) => (
            <Reveal key={study.title} delay={i * 70}>
              <article className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-accent-foreground-strong transition-colors duration-300 group-hover:bg-primary/10">
                  <FileText className="size-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center rounded-sm bg-muted px-2.5 py-1 text-xs font-medium text-accent-foreground-strong">
                    {study.tag}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-surface-dark">{study.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
                </div>
                <span className="shrink-0 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {study.meta}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            Institutional evaluations are open globally. Clinical teams interested in contributing
            data are welcome to contact us.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 6 — Surgeon testimonials
// TODO: confirm every quote and attribution with the named surgeon before launch.
// ─────────────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'Being able to treat both sides in one session changed how I plan bilateral cases entirely.',
    name: 'Placeholder — Surgeon name',
    role: 'Placeholder — Role, Institution',
  },
  {
    quote:
      'The absence of skull pins made the biggest difference for my awake patients — far less anxiety going in.',
    name: 'Placeholder — Surgeon name',
    role: 'Placeholder — Role, Institution',
  },
]

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[160px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-medium leading-tight text-white md:text-4xl">
            In the words of surgeons.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8">
                <Quote className="size-6 text-primary/60" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-pretty text-lg leading-relaxed text-white/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-white/55">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 7 — CTA
// ─────────────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight text-surface-dark md:text-4xl">
            Bring the simplest precision to your operating room.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Request a clinical evaluation kit or speak with our team about the evidence behind the
            A1 Stereotactic Frame.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="/contact" />}
              nativeButton={false}
              variant="secondary"
              className="h-auto w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium text-surface-dark hover:bg-primary/90 sm:w-auto"
            >
              Speak to our team
            </Button>
            <Button
              render={<a href="/medical-devices#products" />}
              nativeButton={false}
              variant="outline"
              className="group h-auto w-full gap-1.5 rounded-sm border-border bg-transparent px-6 py-3 text-sm font-medium text-surface-dark hover:bg-white hover:text-accent-foreground-strong sm:w-auto"
            >
              Explore the product line
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ClinicalEvidencePage() {
  return (
    <>
      <main>
        <PageHero />
        <OutcomesBar />
        <FeaturedQuote />
        <OutcomeAreas />
        <StudiesSection />
        <Testimonials />
        <Faq items={faqItems} />
        <CtaSection />
      </main>
    </>
  )
}
