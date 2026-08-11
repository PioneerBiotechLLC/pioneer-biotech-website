import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { asset } from '@/lib/utils'

export function Software() {
  return (
    <section id="software" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: text + CTA */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
              Surgical planning software
            </p>
            <h2 className="mt-4 text-balance text-3xl md:text-4xl font-medium leading-tight text-surface-dark">
              Planning for Better Outcomes
            </h2>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              NeuroTech A1 Surgical Planning — CT/MRI fusion built to establish precise
              stereotactic reference before the frame ever touches the patient.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Button
              render={<a href="/medical-devices/software" />}
              nativeButton={false}
              variant="outline"
              className="group mt-8 h-auto gap-2 rounded-sm border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white"
            >
              Explore the software
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </Reveal>
        </div>

        {/* Right: software screenshot */}
        <Reveal className="order-1 lg:order-2" delay={100}>
          <img
            src={asset('/images/software-planning.jpg')}
            alt="NeuroTech A1 Surgical Planning software interface"
            className="w-full rounded-2xl border border-border object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
