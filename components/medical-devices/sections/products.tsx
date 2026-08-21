import { Reveal } from '@/components/medical-devices/reveal'
import {
  ArrowRight,
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
import { asset } from '@/lib/utils'

type Variant = {
  slug: string
  name: string
  tag: string
  useCase: string
  icon: LucideIcon
}

const VARIANTS: Variant[] = [
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

const FLAGSHIP_SPECS = ['5-component system', 'Bilateral trajectories', 'Sub-millimetre accuracy']

export function Products() {
  return (
    <section id="products" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
            The A1 family
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl md:text-4xl font-medium leading-tight text-surface-dark">
            One platform, eight clinical variants.
          </h2>
        </Reveal>

        {/* A1 Frame flagship */}
        <Reveal delay={80} className="mt-10">
          <a
            id="a1-frame"
            href="/contact"
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-dark transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 sm:flex-row sm:items-stretch"
          >
            {/* Ambient gold glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl"
            />
            {/* Subtle grid texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Product image — full height */}
            <div className="relative min-h-64 w-full shrink-0 sm:min-h-0 sm:w-96 md:w-[420px]">
              <img
                src={asset('/images/A1_image.jpg')}
                alt="A1 Frame"
                loading="lazy"
                className="absolute inset-0 size-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 p-8 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-sm bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                  Base system
                </span>
                <span className="inline-flex items-center rounded-sm border border-white/15 px-2.5 py-1 text-xs font-medium text-white/50">
                  Flagship
                </span>
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight text-white">
                A1 Frame
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                The core bilateral trajectory platform for stereotactic cranial procedures.
                Every configuration in the line shares the same 5-component architecture.
              </p>

              <div className="mt-5 flex flex-unwrap gap-2">
                {FLAGSHIP_SPECS.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="relative z-10 flex shrink-0 items-center p-8 md:p-10">
              <span className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/30 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
                <ArrowRight className="size-4" />
              </span>
            </div>
          </a>
        </Reveal>

        {/* Variants */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VARIANTS.map((v, i) => (
            <Reveal key={v.slug} delay={160 + i * 60}>
              <a
                href="/contact"
                className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted transition-colors duration-200 group-hover:bg-primary/10">
                    <v.icon
                      className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="inline-flex items-center rounded-sm bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                    {v.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-surface-dark">{v.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {v.useCase}
                </p>
                <span className="mt-4 flex items-center gap-1 text-xs font-medium text-primary/60 transition-colors duration-200 group-hover:text-primary">
                  Ask about this configuration <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
