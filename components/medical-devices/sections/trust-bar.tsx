'use client'

import { useState } from 'react'
import { Reveal } from '@/components/medical-devices/reveal'
import { ShieldCheck, X } from 'lucide-react'
import { asset } from '@/lib/utils'

const BADGES = [
  { label: 'Patented', icon: true },
  { label: 'Available globally', icon: false },
  { label: 'Institutional evaluation open', icon: false },
]

type Logo = {
  src: string
  alt: string
  name: string
  description: string
}

const LOGOS: Logo[] = [
  {
    src: asset('/logos/saudi-german-hospital.png'),
    alt: 'Saudi German Hospital Dubai',
    name: 'Saudi German Hospital Dubai',
    description:
      'One of the largest private hospital groups in the Middle East, Saudi German Hospital Dubai has been a key clinical partner in evaluating the A1 Frame in bilateral stereotactic procedures.',
  },
  {
    src: asset('/logos/mansoura-university.png'),
    alt: 'Mansoura University',
    name: 'Mansoura University',
    description:
      'A leading research and academic institution in Egypt, Mansoura University has contributed to the clinical validation of the A1 Stereotactic Frame through its neurosurgery department.',
  },
  {
    src: asset('/logos/hospital-placeholder.png'),
    alt: 'Partner hospital',
    name: 'Partner Hospital',
    description:
      'A trusted institutional partner contributing to the global adoption of the A1 Frame across surgical centres.',
  },
  {
    src: asset('/logos/salam-hospital.png'),
    alt: 'Salam Hospital',
    name: 'Salam Hospital',
    description:
      'Salam Hospital has been an early adopter of the A1 Frame system, integrating it into their neurosurgical protocols for improved bilateral procedure outcomes.',
  },
  {
    src: asset('/logos/world-map.webp'),
    alt: 'International reach',
    name: 'International Reach',
    description:
      'The A1 Frame is currently available across 50+ countries, with institutional evaluations open globally. Pioneer Biotech supports surgical teams from the UAE to Europe, Africa, and beyond.',
  },
]

export function TrustBar() {
  const [active, setActive] = useState<Logo | null>(null)

  return (
    <>
      <section className="border-b border-black/8 bg-surface-alt py-8 md:py-10">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Trusted by surgical teams at
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8">
              {LOGOS.map((logo, i) => (
                <li key={logo.alt} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setActive(logo)}
                    className="cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    aria-label={`Learn more about ${logo.name}`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-7 max-w-[110px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0 sm:h-8"
                    />
                  </button>
                  {i < LOGOS.length - 1 && (
                    <span aria-hidden="true" className="ml-6 hidden h-5 w-px bg-black/12 sm:ml-8 sm:inline-block" />
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-7 max-w-xs border-t border-black/8" />
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground/60 transition-all duration-200 hover:scale-110 hover:border-primary/40 hover:bg-primary/8 hover:text-accent-foreground-strong"
                >
                  {badge.icon && <ShieldCheck className="size-3 shrink-0 text-foreground/40" strokeWidth={2} />}
                  {badge.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-surface-dark"
            >
              <X className="size-4" />
            </button>

            <div className="flex justify-center">
              <img
                src={active.src}
                alt={active.alt}
                className="h-16 max-w-[200px] object-contain"
              />
            </div>

            <h3 className="mt-6 text-center text-base font-semibold text-surface-dark">
              {active.name}
            </h3>

            <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
              {active.description}
            </p>

            <div className="mt-5 h-px bg-border" />

            <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.1em] text-accent-foreground-strong">
              A1 Frame Partner
            </p>
          </div>
        </div>
      )}
    </>
  )
}
