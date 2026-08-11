import type { Metadata } from 'next'
import { SiteNav } from '@/components/medical-devices/sections/site-nav'
import { SiteFooter } from '@/components/medical-devices/sections/site-footer'
import { Reveal } from '@/components/medical-devices/reveal'

export const metadata: Metadata = {
  title: 'NeuroTech A1 Surgical Planning Software',
  description:
    'NeuroTech A1 Surgical Planning — CT/MRI fusion built to establish precise stereotactic reference before the frame ever touches the patient.',
}

// Placeholder page — full software content to be added separately.
export default function SoftwarePage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="relative overflow-hidden bg-surface-dark pb-14 pt-32 md:pb-20 md:pt-44">
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
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Surgical planning software
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                Planning for Better Outcomes
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
                NeuroTech A1 Surgical Planning — CT/MRI fusion built to establish precise
                stereotactic reference before the frame ever touches the patient.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
