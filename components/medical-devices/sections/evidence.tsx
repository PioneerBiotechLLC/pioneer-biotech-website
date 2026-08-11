import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { value: '<0.2mm', label: 'Mean trajectory accuracy' },
  { value: '50%', label: 'Reduction in average operative time' },
  { value: '2', label: 'Hemispheres accessed at the same time' },
]

export function Evidence() {
  return (
    <section id="evidence" className="bg-surface-dark py-20 md:py-28">
      <div className="mx-auto max-w-[760px] px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-border">
            Clinical evidence
          </p>
        </Reveal>

        <Reveal delay={80}>
          <blockquote className="mt-8 font-serif text-2xl md:text-3xl lg:text-4xl italic leading-[1.45] text-white">
            "From concept drawing to operating room faster than any comparable system I've seen, with precision that held up to exact specifications from day one."
          </blockquote>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 text-sm text-border">
            Dr. Tackas, Functional Neurosurgery
          </p>
        </Reveal>

        <Reveal delay={200}>
          <hr className="mx-auto mt-12 max-w-md border-white/20" />
        </Reveal>

        <Reveal delay={240}>
          <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.value}>
                <dt className="font-mono text-4xl font-semibold leading-none text-white">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-border">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={300}>
          <Button
            render={<a href="/medical-devices/clinical-evidence" />}
            nativeButton={false}
            variant="outline"
            className="mt-12 h-auto gap-2 rounded-sm border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:text-white"
          >
            View clinical evidence
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
