import type { Metadata } from 'next'
import {
  ArrowRight,
  Boxes,
  Activity,
  Microscope,
  Droplet,
  Waves,
  Radiation,
  Droplets,
  Zap,
  PersonStanding,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SiteNav } from '@/components/medical-devices/sections/site-nav'
import { SiteFooter } from '@/components/medical-devices/sections/site-footer'
import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Products — A1 Frame by Abdelwahab',
  description:
    'The A1 Frame product line — a modular bilateral trajectory stereotactic platform configured for hematology, deep brain stimulation, and complex multi-angle cranial procedures.',
}

type Product = {
  slug: string
  name: string
  tag: string
  useCase: string
  details?: string
  icon: LucideIcon
}

const FLAGSHIP: Product = {
  slug: 'a1-frame',
  name: 'A1 Frame',
  tag: 'Base system',
  useCase: 'The core bilateral trajectory platform for stereotactic cranial procedures.',
  details:
    'Every other configuration in the line is built on this same 5-component bilateral trajectory architecture. It ships as a complete kit — frame, arc assembly, and fixation hardware — ready for institutional evaluation.',
  icon: Boxes,
}

const FLAGSHIP_SPECS = [
  { label: 'Components', value: '5' },
  { label: 'Trajectories', value: 'Bilateral' },
  { label: 'Accuracy', value: 'Sub-mm' },
  { label: 'Surgery time reduction', value: '50%' },
]

const PRODUCTS: Product[] = [
  {
    slug: 'a1-tremor',
    name: 'A1 Tremor',
    tag: 'Movement Disorders',
    useCase:
      'Stereotactic targeting of the ventral intermediate nucleus (VIM) of the thalamus for Parkinsonian and essential tremor, including postural and intention tremor.',
    icon: Activity,
  },
  {
    slug: 'a1-onco',
    name: 'A1 Onco',
    tag: 'Oncology',
    useCase:
      'Stereotactic biopsy or targeted debulking of intracranial tumors and lesions — precise, minimally invasive access for diagnostic sampling or resection.',
    icon: Microscope,
  },
  {
    slug: 'a1-hemo',
    name: 'A1 Hemo',
    tag: 'Hematology',
    useCase:
      'Stereotactic-guided aspiration and evacuation of deep intracranial hematomas via a calculated trajectory that minimizes injury to surrounding structures.',
    icon: Droplet,
  },
  {
    slug: 'a1-spastic',
    name: 'A1 Spastic',
    tag: 'Functional Neurosurgery',
    useCase:
      'Stereotactic targeting of the globus pallidus internus (GPi) in the treatment of spasticity and dystonia.',
    icon: Waves,
  },
  {
    slug: 'a1-brachy',
    name: 'A1 Brachy',
    tag: 'Radiation Oncology',
    useCase:
      'Stereotactic implantation of radioactive seeds (brachytherapy) into the intracranial tumor bed for tumors responsive to localized radiotherapy.',
    icon: Radiation,
  },
  {
    slug: 'a1-hydro',
    name: 'A1 Hydro',
    tag: 'Hydrocephalus',
    useCase:
      'Precise stereotactic placement of ventricular catheters in the lateral ventricle for the management of hydrocephalus.',
    icon: Droplets,
  },
  {
    slug: 'a1-epi',
    name: 'A1 Epi',
    tag: 'Epilepsy',
    useCase:
      'Stereotactic targeting of the anterior nucleus of the thalamus (ANT) for deep brain stimulation in drug-resistant, focal-onset epilepsy.',
    icon: Zap,
  },
  {
    slug: 'a1-rig',
    name: 'A1 Rig',
    tag: 'Cerebral Palsy',
    useCase:
      'Stereotactic targeting of the globus pallidus internus (GPi) in the treatment of rigidity and dystonia associated with cerebral palsy.',
    icon: PersonStanding,
  },
]

export default function ProductsPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Intro */}
        <section className="bg-surface-dark pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
                The product line
              </p>
              <h1 className="mt-4 text-balance text-[clamp(1.875rem,4vw,3rem)] font-medium leading-tight text-white">
                A modular platform built for every cranial indication.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-white/55">
                Every configuration shares the same bilateral trajectory architecture as the
                base A1 Frame, adapted for the specific access and accuracy demands of each
                procedure.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Flagship */}
        <section className="bg-white pt-16 md:pt-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div id={FLAGSHIP.slug}>
              <Reveal className="group relative overflow-hidden rounded-2xl bg-surface-dark">
                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-32 -top-32 size-[32rem] rounded-full bg-primary/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />

                <div className="relative z-10 flex flex-col gap-10 p-8 md:flex-row md:items-stretch md:p-0">
                  {/* Left: icon zone */}
                  <div className="flex items-center justify-center md:w-72 md:shrink-0 md:border-r md:border-white/8 md:py-16 md:pl-12 md:pr-10">
                    <div className="flex size-28 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 ring-1 ring-primary/10 ring-offset-8 ring-offset-surface-dark md:size-32">
                      <FLAGSHIP.icon className="size-12 text-primary md:size-14" strokeWidth={1.25} />
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="flex flex-1 flex-col justify-center py-0 md:py-12 md:pr-12">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary">
                        {FLAGSHIP.tag}
                      </span>
                      <span className="inline-flex items-center rounded-sm border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white/50">
                        Flagship
                      </span>
                    </div>

                    <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-white">
                      {FLAGSHIP.name}
                    </h2>
                    <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/65">
                      {FLAGSHIP.useCase}
                    </p>
                    <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-white/45">
                      {FLAGSHIP.details}
                    </p>

                    {/* Spec grid */}
                    <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/8 pt-8 sm:grid-cols-4">
                      {FLAGSHIP_SPECS.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/35">
                            {spec.label}
                          </dt>
                          <dd className="mt-1 font-mono text-lg font-semibold text-white">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Variants */}
            <div className="mt-4 flex flex-col gap-4 pb-16 md:pb-24">
              {PRODUCTS.map((product, i) => (
                <div key={product.slug} id={product.slug}>
                  <Reveal
                    delay={i * 70}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:border-primary/40 hover:shadow-md sm:flex-row sm:items-stretch"
                  >
                    {/* Icon zone */}
                    <div className="flex items-center justify-center border-b border-border bg-muted/40 py-8 transition-colors duration-200 group-hover:bg-primary/5 sm:w-44 sm:shrink-0 sm:border-b-0 sm:border-r sm:py-0">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-border transition-all duration-200 group-hover:ring-primary/30">
                        <product.icon
                          className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center px-7 py-6 sm:py-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-sm bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                          {product.tag}
                        </span>
                      </div>
                      <h3 className="mt-2 text-[17px] font-semibold text-surface-dark">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                        {product.useCase}
                      </p>
                      {product.details && (
                        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground/70">
                          {product.details}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="hidden items-center pr-7 sm:flex">
                      <span className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/8 group-hover:text-primary">
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">
                Get started
              </p>
              <h2 className="mt-4 text-balance text-[clamp(1.75rem,3.5vw,2rem)] font-medium leading-tight text-white">
                Find the right configuration for your procedure.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                Speak with our team about clinical evaluation, distribution, or which
                configuration fits your case mix.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <Button
                render={<a href="/medical-devices/contact" />}
                nativeButton={false}
                variant="secondary"
                className="mt-8 h-auto gap-2 rounded-sm bg-white px-8 py-3.5 text-sm font-medium text-surface-dark hover:bg-muted"
              >
                Speak with our team
                <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
