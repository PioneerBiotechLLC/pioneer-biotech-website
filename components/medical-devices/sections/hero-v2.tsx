import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { asset } from '@/lib/utils'

const STATS = [
  { value: '50%', label: 'Reduction in surgery time' },
  { value: '5', label: 'Total components' },
  { value: '0', label: 'Skull pins required' },
]

export function HeroV2() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-dark">
      {/* Pink brand texture — subtle engineering-grid feel on the dark surface */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column — all messaging */}
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-none lg:text-left">
            <Reveal>
              <span className="inline-flex items-center rounded-sm border border-white/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white">
                World&apos;s first bilateral trajectory frame
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-10 text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-[1.05] text-white">
                <span className="block">One frame.</span>
                <span className="block">Both hemispheres.</span>
                <span className="block text-primary">Half the time.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-[480px] text-pretty text-base leading-relaxed text-white/90 lg:mx-0">
                The A1 Frame is the world&apos;s only bilateral trajectory stereotactic frame — a
                5-component system engineered to access both hemispheres in a single session,
                with no skull pins.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  render={<a href="#distributors" />}
                  nativeButton={false}
                  variant="secondary"
                  className="h-auto w-full rounded-sm bg-white px-6 py-3 text-sm font-medium text-surface-dark hover:bg-muted sm:w-auto"
                >
                  Speak with our team
                </Button>
                <Button
                  render={<a href="#spec-sheet" />}
                  nativeButton={false}
                  variant="outline"
                  className="h-auto w-full rounded-sm border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  Download spec sheet
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right column — product video as a premium showcase, not a background */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/15 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl bg-surface-dark">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]"
                >
                  <source src={asset('/videos/hero-brain.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stat cards — horizontal proof bar beneath the main content */}
        <Reveal delay={360} className="mt-20 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.value}
                delay={400 + i * 100}
                className="bg-white p-6 text-center shadow-lg shadow-surface-dark/10 ring-1 ring-border/40"
              >
                <div className="font-mono text-4xl font-semibold text-primary">{stat.value}</div>
                <div className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
