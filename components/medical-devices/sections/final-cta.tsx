import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'

export function FinalCta() {
  return (
    <section id="distributors" className="bg-surface-dark py-20 md:py-28">
      <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl md:text-4xl font-medium leading-tight text-white">
            Bring the simplest precision to your operating room.
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 text-sm leading-relaxed text-white/55">
            Request a clinical evaluation kit or speak with our team about distribution in your
            region.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="/medical-devices/contact" />}
              nativeButton={false}
              variant="secondary"
              className="h-auto w-full rounded-sm bg-white px-8 py-3.5 text-sm font-medium text-surface-dark hover:bg-muted sm:w-auto"
            >
              Speak with our team
            </Button>
            <Button
              render={<a href="/medical-devices/products" />}
              nativeButton={false}
              variant="outline"
              className="h-auto w-full rounded-sm border-white/30 bg-transparent px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Learn more
            </Button>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 text-xs leading-relaxed text-faint">
             Patented · Available globally · Institutional evaluation open
          </p>
        </Reveal>
      </div>
    </section>
  )
}
