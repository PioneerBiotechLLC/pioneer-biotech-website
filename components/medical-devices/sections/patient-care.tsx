import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { Sparkles, Shield, Clock, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { asset } from '@/lib/utils'

const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: 'Cosmetically appealing',
    description: 'No visible pin scars — every contact point sits behind the hairline, so nothing about the procedure shows afterward.',
  },
  {
    icon: Shield,
    title: 'Reliable software fallback',
    description: 'A dependable manual fallback keeps your procedure moving safely even if the guidance software fails.',
  },
  // TODO: client to confirm the third patient benefit — kept from the previous set for now
  {
    icon: Clock,
    title: 'Faster recovery',
    description: 'A shorter time under anesthesia and a simpler setup can mean less time in the operating room and a smoother recovery.',
  },
]

export function PatientCare() {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-accent-foreground">
              For patients &amp; families
            </p>
            <h2 className="mt-4 text-balance text-3xl md:text-4xl font-medium leading-snug text-accent-foreground-strong">
              Designed with your comfort and safety in mind.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-foreground">
              If your treatment plan includes stereotactic surgery, the A1 Frame is built to
              make the experience simpler, gentler, and shorter — without compromising the
              precision your care team relies on.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 space-y-5">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-white">
                    <benefit.icon className="size-[18px]" fill="currentColor" strokeWidth={0} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-accent-foreground-strong">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            {/* TODO: testimonial wording drafted from the client's notes — needs their sign-off */}
            <blockquote className="mt-8 border-l-2 border-secondary bg-white/60 py-4 pl-5 pr-4 text-sm italic leading-relaxed text-foreground">
              I expected what everyone expects from brain surgery — visible scars and a long
              recovery. The frame surprised me: no scars I can see, and I was back on my feet
              far sooner than I imagined.
            </blockquote>
          </Reveal>

          <Reveal delay={260}>
            <Button
              render={<a href="#patients" />}
              nativeButton={false}
              variant="outline"
              className="mt-8 h-auto gap-2 rounded-sm border-secondary bg-transparent px-6 py-3 text-sm font-medium text-secondary hover:bg-secondary hover:text-white"
            >
              For patients and families
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        {/* Right: photo */}
        <Reveal className="order-1 lg:order-2" delay={100}>
          <img
            src={asset('/images/patient-care.jpeg')}
            alt="Patient and family"
            className="w-full rounded-2xl object-contain"
          />
        </Reveal>
      </div>
    </section>
  )
}
