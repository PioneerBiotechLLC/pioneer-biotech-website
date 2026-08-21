'use client'

import type { ReactNode } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { useLenis } from 'lenis/react'
import { Reveal } from '@/components/medical-devices/reveal'
import { asset, cn } from '@/lib/utils'
import { Plus, X } from 'lucide-react'

type Feature = {
  title: string
  description: string
  details: string
  badge: string
  badgeTone: 'accent' | 'muted'
  image: string | null
}

const FEATURES: Feature[] = [
  {
    title: 'Simultaneous bilateral trajectory',
    description: 'Reach both cerebral hemispheres at the same time, in a single uninterrupted session — no repositioning, no second procedure.',
    details:
      "The A1 frame's patented quarter-arc mechanism simultaneously positions bilateral instrument trajectories without removing or resetting the frame between sides. For conditions affecting both hemispheres — including bilateral Parkinson's disease, essential tremor, and select epilepsy syndromes — this eliminates an entire surgical session, a full anesthesia event, and a separate recovery period. The result is a fundamentally safer and more efficient procedure for the patient, the surgeon, and the hospital.",
    badge: 'Only in A1',
    badgeTone: 'accent',
    image: asset('/features/bilateral-trajectory.jpeg'),
  },
  {
    title: 'Only 5 components',
    description: 'Five components — the lowest number of any stereotactic system — ready in under two minutes.',
    details:
      "Where competing systems require surgeons and scrub teams to assemble, verify, and sterilize dozens of interlocking rings, adapters, and carriers, the A1 frame reduces the entire system to five precision-machined parts. Fewer components means fewer points of failure during assembly, a shorter team learning curve, and significantly less cognitive overhead in the operating room. Simplicity here is not a constraint — it is a deliberate engineering decision that directly improves procedural safety.",
    badge: 'Lowest number of any stereotactic system',
    badgeTone: 'accent',
    image: asset('/features/only-5-components.jpeg'),
  },
  {
    title: 'No Visible Pin Scars',
    description: 'Pin-free fixation with every contact point behind the hairline — no visible scars, no skull penetration, no discomfort.',
    details:
      "Traditional stereotactic frames achieve skull fixation by driving three or four sharp metal pins through the scalp and into the outer table of the skull — a process that is painful, anxiety-inducing, and leaves permanent pin-site scars. The A1 frame secures to the patient's head without any penetration of the scalp or skull, removing pin-site infection, pressure necrosis, and intracranial hemorrhage from the procedural risk profile entirely. Every fixation contact sits behind the hairline, so nothing visible remains after the procedure. For awake procedures in particular, the absence of pin-site pain significantly improves patient tolerance and cooperation throughout the session.",
    badge: 'Only in A1',
    badgeTone: 'accent',
    image: asset('/features/no-skull-pins.jpeg'),
  },
  // TODO: add a real image for this feature (currently renders the placeholder)
  {
    title: 'Least learning curve',
    description: 'Every reference point is physical and touchable — nothing has to be imagined, so mastery comes in days, not months.',
    details:
      "Conventional stereotactic systems force surgeons to reason about virtual reference points — imaginary arcs, projected coordinates, and abstract frame space that exist only in software or in the surgeon's head. The A1 frame eliminates that abstraction entirely: every reference the surgeon works with is a physical, reachable point on the frame itself. Because nothing has to be imagined, the mental model matches the hardware from the very first case — residents and experienced surgeons alike reach confident, independent use of the system in a fraction of the time conventional frames demand.",
    badge: 'Fastest to master',
    badgeTone: 'accent',
    image: asset('/features/least-learning-curve.jpeg'),
  },
  // TODO: add a real image for this feature (currently renders the placeholder)
  {
    title: 'Simplest geometry',
    description: 'A physically reachable reference point defines your starting position — no virtual coordinates to reconstruct.',
    details:
      "Every trajectory begins from a reference point the surgeon can physically reach and verify with the frame itself. Instead of reconstructing an abstract coordinate origin from software or imaging annotations, the A1's geometry makes the starting point tangible: touch it, confirm it, and proceed. This simple geometric foundation removes an entire class of setup errors, simplifies imaging interpretation, and turns intraoperative verification into a matter of physical confirmation rather than mental reconstruction.",
    badge: 'Only in A1',
    badgeTone: 'accent',
    image: asset('/features/simplest-geometry.jpg'),
  },
  {
    title: 'Face-free design',
    description: 'Keeps the face and airway fully accessible throughout the procedure for anesthesia and monitoring.',
    details:
      "Conventional stereotactic frames wrap around the entire head — anterior posts, localizer boxes, and arc carriers frequently obstruct the patient's face, forcing anesthesiology teams to work around frame hardware to maintain airway access. The A1 frame is architected from the ground up so that no component crosses the anterior facial plane, giving the anesthesia team unrestricted access at every point in the procedure. In awake surgeries, this open design also eliminates the claustrophobia and distress that facial obstruction commonly causes in conscious patients.",
    badge: 'Only in A1',
    badgeTone: 'accent',
    image: asset('/features/face-free-design.jpeg'),
  },
  {
    title: 'Software-resilient',
    description: 'A reliable manual fallback keeps full trajectory control intact even if guidance software fails mid-procedure.',
    details:
      "Modern stereotactic surgery increasingly depends on digital planning software — introducing a single point of failure that has no equivalent in mechanical surgical instruments. Using the posterior fiducial point as coordinate origin (0,0,0), the A1 frame allows the surgeon to calculate declination and azimuth angles manually from MRI slice annotations, requiring no software, no network, and no electrical power beyond room lighting. The frame's mechanical precision is entirely independent of any digital system — surgery continues regardless of what happens to the screen.",
    badge: 'Only in A1',
    badgeTone: 'accent',
    image: asset('/features/software-resilient.jpeg'),
  },
  /*{
    title: 'Cost-effective',
    description: 'Sub-millimeter precision at a fraction of the lifetime cost of conventional multi-arc stereotactic systems.',
    details:
      "The true cost of a stereotactic system is not its purchase price — it is the lifetime cost across thousands of procedures, including component inventory, sterilization cycles, calibration, and team training. The A1 frame's five-component architecture reduces every one of these cost categories simultaneously: less to sterilize, less to maintain, faster to set up, and faster to teach to new staff. The result is clinically equivalent targeting precision made accessible to hospitals that have historically been priced out of advanced stereotactic neurosurgery.",
    badge: 'Cost advantage',
    badgeTone: 'accent',
    image: '/features/cost.jpeg',
  },*/
]

// ─── Shared helpers ───────────────────────────────────────────────────────────

function FeatureImage({ src, alt, className }: { src: string | null; alt: string; className?: string }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={cn('object-cover', className)} />
  }
  return (
    <div
      className={cn('flex items-center justify-center bg-surface-muted text-surface-muted-foreground/40', className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-1/3 opacity-40" fill="none" stroke="currentColor" strokeWidth={1.25}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  )
}

function Badge({ tone, children }: { tone: 'accent' | 'muted'; children: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium ${
        tone === 'accent' ? 'bg-accent text-accent-foreground' : 'bg-muted text-accent-foreground-strong'
      }`}
    >
      {children}
    </span>
  )
}

// ─── Dialog ───────────────────────────────────────────────────────────────────

function FeatureDialog({
  feature,
  triggerClassName,
  children,
}: {
  feature: Feature
  triggerClassName: string
  children: ReactNode
}) {
  const lenis = useLenis()
  const isAccent = feature.badgeTone === 'accent'

  return (
    <Dialog.Root onOpenChange={(open) => (open ? lenis?.stop() : lenis?.start())}>
      <Dialog.Trigger className={triggerClassName}>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[100] bg-surface-dark/70 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-[100] max-h-[90vh] w-[calc(100%-2.5rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl outline-none transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 md:grid md:grid-cols-2">
          <div
            className={cn('relative min-h-48 overflow-hidden md:min-h-0', isAccent ? 'bg-accent' : 'bg-muted')}
            aria-label={`${feature.title} illustration`}
          >
            <FeatureImage src={feature.image} alt={feature.title} className="absolute inset-0 size-full" />
          </div>

          <div className="flex flex-col overflow-y-auto p-6 md:p-10">
            <Dialog.Title className="text-xl font-semibold leading-tight text-surface-dark md:text-2xl">
              {feature.title}
            </Dialog.Title>
            <div className="mt-3">
              <Badge tone={feature.badgeTone}>{feature.badge}</Badge>
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed text-surface-dark">{feature.description}</p>
            <div className="mt-3 border-t border-border pt-3">
              <Dialog.Description className="text-sm leading-relaxed text-muted-foreground">
                {feature.details}
              </Dialog.Description>
            </div>
          </div>

          <Dialog.Close className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-white/90 text-surface-dark shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// ─── Scroll-stacked cards ─────────────────────────────────────────────────────
// Every feature is a full-width panel that pins near the top of the viewport
// (position: sticky) as it scrolls into place; the next card slides up and
// stacks on top of it. A small cascading top offset per card leaves the top
// edges of earlier cards peeking out, so the pile reads as a growing deck.

const STACK_TOP_BASE = 88 // clears the fixed nav (64px) with breathing room
const STACK_TOP_STEP = 14 // how much of each stacked card's edge stays visible

function StackedFeature({ feature, index }: { feature: Feature; index: number }) {
  const imageRight = index % 2 !== 0

  return (
    <div
      className="sticky"
      style={{ top: `${STACK_TOP_BASE + index * STACK_TOP_STEP}px`, zIndex: index + 1 }}
    >
      <FeatureDialog
        feature={feature}
        triggerClassName="group grid w-full cursor-pointer overflow-hidden rounded-2xl bg-surface-dark text-left shadow-xl shadow-black/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:grid-cols-2"
      >
        <div
          className={cn(
            'relative min-h-52 overflow-hidden md:min-h-[320px]',
            imageRight && 'md:order-2',
          )}
        >
          <FeatureImage
            src={feature.image}
            alt={feature.title}
            className="absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
          <div>
            <Badge tone={feature.badgeTone}>{feature.badge}</Badge>
          </div>
          <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {feature.title}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-white/75 md:text-base">
            {feature.description}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Learn more
            <Plus className="size-4 transition-transform duration-200 group-hover:rotate-90" strokeWidth={2.5} />
          </span>
        </div>
      </FeatureDialog>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Features() {
  return (
    // overflow-x-clip (not overflow-hidden) keeps the glow orbs from causing a
    // horizontal scrollbar WITHOUT creating a scroll container — overflow:
    // hidden on an ancestor would silently disable position: sticky inside.
    <section id="how-it-works" className="relative overflow-x-clip bg-surface-alt py-16 md:py-24">
      {/* Ambient gold glows drifting slowly behind the cards — the section
          moves gently even before any hover. Disabled under reduced motion. */}
      <div
        aria-hidden="true"
        className="ambient-float pointer-events-none absolute -left-32 top-24 size-[420px] rounded-full bg-primary/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="ambient-float pointer-events-none absolute -right-32 bottom-24 size-[380px] rounded-full bg-primary/8 blur-[110px] [animation-delay:-8s]"
      />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl md:text-4xl font-medium leading-tight text-surface-dark">
            Innovated for precision, simplicity, and reliability.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Every component of the A1 Frame is designed to reduce complexity in the operating room
            without compromising trajectory accuracy.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8 md:gap-10">
          {FEATURES.map((feature, i) => (
            <StackedFeature key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
