import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '@/components/medical-devices/sections/site-nav'
import { SiteFooter } from '@/components/medical-devices/sections/site-footer'
import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { asset, cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us — Pioneer Biotech',
  description:
    'Pioneer Biotech is a global pharmaceutical company committed to bringing precision medical technology to healthcare teams worldwide. Manufacturers of the A1 Stereotactic Frame.',
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────────────────────────────────────

function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-2xl bg-surface-muted px-4 text-center text-[13px] font-medium italic text-muted-foreground',
        className,
      )}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — Page hero
// ─────────────────────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-14 pt-32 md:pb-20 md:pt-44">
      <img
        src={asset('/images/about-us-background.jpeg')}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-linear-to-b from-surface-dark/60 via-surface-dark/40 to-surface-dark/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
            About us
          </p>
          <h1 className="mt-4 text-balance text-[clamp(1.875rem,4vw,3rem)] font-medium leading-tight text-white">
            Built on Science. Driven by Innovation.
          </h1>
          <p className="mx-auto mt-5 max-w-[580px] text-pretty text-[15px] leading-relaxed text-white/55">
            Pioneer Biotech is a global pharmaceutical company committed to bringing precision
            medical technology to healthcare teams worldwide.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — Stats bar
// ─────────────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '15+', label: 'Years in Operation' },
  { value: '50+', label: 'Countries Served' },
  { value: '10,000+', label: 'Products in Portfolio' },
  { value: '500+', label: 'B2B Partners Worldwide' },
]

function StatsBar() {
  return (
    <section className="border-b border-black/8 bg-surface-alt py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-mono text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-primary">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[12px] leading-snug text-muted-foreground">
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
// Section 3 — Our story
// ─────────────────────────────────────────────────────────────────────────────

function OurStorySection() {
  const milestones = [
    { year: '2009', label: 'Founded in the UAE' },
    { year: '2015', label: 'Expanded to 25 countries' },
    { year: '2024', label: 'A1 Frame — patented globally' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
            Our story
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.625rem,3vw,2rem)] font-medium leading-snug text-surface-dark">
            From Regional Supplier to Global Partner
          </h2>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground">
            Over 15 years, Pioneer Biotech grew from a regional supplier into a trusted partner
            for hospitals, distributors, and healthcare companies across 50+ countries.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-center gap-4">
                <span className="shrink-0 font-mono text-[13px] font-semibold text-primary">
                  {m.year}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-[14px] font-medium text-surface-dark">{m.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <img
            src={asset('/images/our_story.jpeg')}
            alt="Pioneer Biotech team"
            className="w-full rounded-2xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4 — Mission and vision
// ─────────────────────────────────────────────────────────────────────────────

function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 md:py-24">
      {/* Ambient background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 size-[600px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-primary/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Section label */}
        <Reveal className="mb-10 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
            What drives us
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Mission card */}
          <Reveal className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-dark p-8 transition-all duration-500 hover:border-primary/30 md:p-10">
            {/* Animated corner accent */}
            <span
              aria-hidden="true"
              className="absolute right-0 top-0 size-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/20"
            />
            <div className="relative">
              {/* Icon */}
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
                <svg className="size-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
                Our mission
              </p>
              <h2 className="mt-3 text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium leading-snug text-white">
                Enabling better patient outcomes through science and innovation.
              </h2>
              <div className="mt-5 h-px w-12 bg-primary/40 transition-all duration-500 group-hover:w-24 group-hover:bg-primary/70" />
              <p className="mt-5 flex-1 text-pretty text-[14px] leading-relaxed text-white/55">
                Reliable access to high-quality pharmaceutical products and supply-chain expertise —
                so healthcare teams everywhere can focus on what matters most: patients.
              </p>
            </div>
          </Reveal>

          {/* Vision card */}
          <Reveal delay={100} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-dark p-8 transition-all duration-500 hover:border-primary/30 md:p-10">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 size-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/20"
            />
            <div className="relative">
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
                <svg className="size-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
                Our vision
              </p>
              <h2 className="mt-3 text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium leading-snug text-white">
                The most trusted pharmaceutical partner in emerging and established markets.
              </h2>
              <div className="mt-5 h-px w-12 bg-primary/40 transition-all duration-500 group-hover:w-24 group-hover:bg-primary/70" />
              <p className="mt-5 flex-1 text-pretty text-[14px] leading-relaxed text-white/55">
                Recognized globally for quality, compliance, and the strength of our partnerships —
                in every market, at every stage.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 5 — Core values
// ─────────────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    title: "Quality First",
    description: "No shortcuts. Every product meets the highest pharmaceutical standards.",
  },
  {
    title: "Scientific Integrity",
    description: "Decisions grounded in evidence and regulatory best practices, not convenience.",
  },
  {
    title: "Reliable Partnership",
    description: "Long-term relationships built on transparency and genuine commitment.",
  },
  {
    title: "Global Responsibility",
    description: "We take seriously the role pharmaceuticals play in public health worldwide.",
  },
  {
    title: "Continuous Innovation",
    description: "Investing in technology and people to stay ahead of evolving standards.",
  },
  {
    title: "Compliance & Ethics",
    description: "Full transparency and strict regulatory adherence across every market.",
  },
]

function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-16 md:py-24">
      {/* Grid texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
            Our values
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-white">
            What We Stand For
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.title}
              delay={(i % 3) * 60}
              className="group relative flex flex-col bg-surface-dark p-8 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {/* Hover top border accent */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
              />
              {/* Index */}
              <span className="font-mono text-[11px] text-primary/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Title */}
              <h3 className="mt-4 text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                {value.title}
              </h3>
              {/* Divider line that expands on hover */}
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-8 bg-white/15 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/60"
              />
              {/* Description */}
              <p className="mt-4 flex-1 text-[13px] leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/70">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 6 — The inventor
// ─────────────────────────────────────────────────────────────────────────────

const CREDENTIALS = ['Neurosurgeon', 'Inventor', 'A1 Frame Designer']

function InventorSection() {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: portrait + name + credentials */}
        <Reveal>
          <ImagePlaceholder
            label="Dr. Abdelwahab Portrait"
            className="aspect-[3/4] w-full"
          />
          <p className="mt-5 text-lg font-bold text-accent-foreground-strong">
            Dr. Ahmed Abdelwahab
          </p>
          <p className="mt-1 text-[13px] text-foreground">
            Neurosurgeon &amp; Inventor of the A1 Stereotactic Frame
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {CREDENTIALS.map((credential) => (
              <span
                key={credential}
                className="inline-flex items-center rounded-sm bg-white/70 px-2.5 py-1 text-[11px] font-medium text-secondary"
              >
                {credential}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Right: editorial copy + pull quote */}
        <Reveal delay={100}>
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent-foreground">
            The inventor
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.625rem,3vw,2rem)] font-medium leading-snug text-accent-foreground-strong">
            The Inventor Behind the Innovation
          </h2>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-foreground">
            The A1 Stereotactic Frame was conceived by Dr. Ahmed Abdelwahab, a neurosurgeon who
            spent years working with existing stereotactic systems and identifying their
            fundamental limitations. His clinical experience — and his refusal to accept the
            status quo — led to the design of the world&apos;s first bilateral trajectory
            stereotactic frame.
          </p>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-foreground">
            Pioneer Biotech was built to bring his invention to neurosurgeons worldwide.
          </p>

          <blockquote className="mt-8 border-l-2 border-primary bg-white/60 py-4 pl-5 pr-4">
            <p className="text-[15px] italic leading-relaxed text-foreground">
              &ldquo;The A1 frame was not designed in an engineering lab. It was designed in an
              operating room.&rdquo;
            </p>
            <footer className="mt-2 text-[13px] font-medium not-italic text-secondary">
              — Dr. Ahmed Abdelwahab, Neurosurgeon &amp; Inventor
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 7 — Pioneer Biotech + A1 Frame connection
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// Section 7 — Bridge (hidden, kept for reference)
// ─────────────────────────────────────────────────────────────────────────────

{/* function BridgeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.25rem)] font-medium leading-tight text-surface-dark">
            Where Pharmaceutical Expertise Meets Neurosurgical Innovation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
            Pioneer Biotech's global manufacturing infrastructure and regulatory expertise
            provide the backbone that brings the A1 Stereotactic Frame from concept to operating
            room. Our commitment to quality, compliance, and partnership means every frame that
            reaches a surgical team meets the highest standards of precision and reliability.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <Button
              render={<a href="/medical-devices/products" />}
              nativeButton={false}
              variant="secondary"
              className="h-auto gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary/90"
            >
              Learn More About Our Products
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
} */}

// ─────────────────────────────────────────────────────────────────────────────
// Section 8 — CTA
// ─────────────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-surface-dark py-20 md:py-28">
      <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2rem)] font-medium leading-tight text-white">
            Ready to Learn More?
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-white/55">
            Speak with our team about the A1 Stereotactic Frame or{' '}
            {/* TODO(placeholder): swap for the real Pioneer Biotech production domain once live */}
            <a
              href="https://www.pbio.tech"
              target="_blank"
              rel="noopener"
              className="text-white/70 underline underline-offset-2 hover:text-primary"
            >
              Pioneer Biotech&apos;s broader pharmaceutical capabilities
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="/medical-devices/contact" />}
              nativeButton={false}
              variant="secondary"
              className="h-auto w-full rounded-sm bg-white px-6 py-3 text-sm font-medium text-surface-dark hover:bg-muted sm:w-auto"
            >
              Speak to a Specialist
            </Button>
            <Button
              render={<a href="/medical-devices#spec-sheet" />}
              nativeButton={false}
              variant="outline"
              className="h-auto w-full rounded-sm border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Download Spec Sheet
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 text-[11px] leading-relaxed text-faint">
            Pioneer Biotech &middot; +971 50 385 9559 &middot; info@Pbio.tech &middot;{' '}
            <a href="https://www.pbio.tech" target="_blank" rel="noopener" className="hover:text-primary">
              www.Pbio.tech
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero />
        <StatsBar />
        <OurStorySection />
        <MissionVisionSection />
        <CoreValuesSection />
        <InventorSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
