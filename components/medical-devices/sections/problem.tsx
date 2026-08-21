'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/medical-devices/reveal'
import { asset, cn } from '@/lib/utils'

type ComparisonRow = {
  oldText: string
  newText: string
  oldImage: string
  newImage: string
}

// Ordered strongest-first: the four leading rows are what show on the homepage
// by default; the rest reveal behind "Show more".
const COMPARISON: ComparisonRow[] = [
  {
    oldText: 'Single trajectory only',
    newText: 'Simultaneous Bilateral Trajectory',
    oldImage: asset('/features/conventional_02.jpeg'),
    newImage: asset('/features/solution_02.jpeg'),
  },
  {
    oldText: 'Visible pin scars',
    newText: 'No visible scars — pins behind the hairline',
    oldImage: asset('/features/conventional_04.jpeg'),
    newImage: asset('/features/solution_04.jpeg'),
  },
  {
    oldText: 'Complex setup',
    newText: 'Only 5 components',
    oldImage: asset('/features/conventional_01.jpeg'),
    newImage: asset('/features/solution_01.jpeg'),
  },
  {
    oldText: 'Software failure halts surgery',
    newText: 'Reliable software fallback mechanism',
    oldImage: asset('/features/conventional_03.jpeg'),
    newImage: asset('/features/solution_03.jpeg'),
  },
  {
    oldText: 'Complex Imaginary Geometry',
    newText: 'Simplest Geometry For Better Imagery',
    oldImage: asset('/features/conventional_06.jpeg'),
    newImage: asset('/features/solution_06.jpeg'),
  },
  {
    oldText: 'Limited airway access for anesthesia',
    newText: 'Full airway access for anesthesia',
    oldImage: asset('/features/conventional_05.jpeg'),
    newImage: asset('/features/solution_05.jpeg'),
  },
  {
    oldText: 'No physically reachable reference point',
    newText: 'Physically reachable reference point with re-zeroing',
    oldImage: asset('/features/conventional_07.jpeg'),
    newImage: asset('/features/solution_07.jpeg'),
  },
  {
    oldText: 'Not suitable for claustrophobic patients',
    newText: 'Suitable for claustrophobic patients',
    oldImage: asset('/features/conventional_08.jpeg'),
    newImage: asset('/features/solution_08.jpeg'),
  },
]

// Cards cascade down a single vertical column; consecutive cards jut to
// alternating sides for the fanned "deck" look.
const X_OFFSET = [
  'left-[-40px] right-[40px]',
  'left-[40px] right-[-40px]',
]
const CARD_STEP = 150
// Vertical space reserved for the last card in a cascade (rest height + room
// for the hover lift and the expanding solution row).
const CARD_RESERVE = 250

export function Problem() {
  const [showStack, setShowStack] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null)
  useEffect(() => {
    const update = () => setShowStack(window.innerWidth >= 1024)
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const visible = COMPARISON
  // Desktop cascades the visible cards down a single vertical column.
  const stackHeight = (visible.length - 1) * CARD_STEP + CARD_RESERVE

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Soft gold glow behind the card stack — only visible on desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] hidden size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] lg:block"
      />

      {/* Heading */}
      <div className="relative mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl md:text-4xl font-medium leading-tight text-surface-dark">
            Built To Solve Challenges Of Conventional Stereotactic Frame
          </h2>
        </Reveal>

      </div>

      {/* Card area */}
      <div className="relative mx-auto mt-10 max-w-5xl px-5 pb-16 md:mt-12 md:px-8 md:pb-0">
        {!showStack && (
          <div className="flex flex-col gap-4">
            {visible.map((row, i) => (
              <Reveal
                key={row.oldText}
                delay={i * 60}
                className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
              >
                <div className="flex items-stretch">
                  <div className="relative w-24 shrink-0">
                    <img src={row.oldImage} alt={row.oldText} loading="lazy" className="absolute inset-0 size-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-3 p-4">
                      <p className="text-sm text-muted-foreground">{row.oldText}</p>
                    </div>
                    <div className="flex items-center gap-3 border-t border-border bg-primary/5 p-4">
                      <img src={row.newImage} alt={row.newText} loading="lazy" className="size-8 shrink-0 rounded object-cover" />
                      <p className="text-sm font-medium text-surface-dark">{row.newText}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {showStack && (
          <div className="relative mx-auto max-w-lg" style={{ height: `${stackHeight}px` }}>
            {visible.map((row, i) => {
              const id = `${i}`
              const active = hoveredIndex === id
              return (
                <button
                  key={row.oldText}
                  type="button"
                  onMouseEnter={() => setHoveredIndex(id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(id)}
                  onBlur={() => setHoveredIndex(null)}
                  className={cn(
                    'absolute overflow-hidden rounded-2xl border bg-white text-left shadow-lg transition-all duration-300 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                    active
                      ? '-translate-y-3 scale-[1.03] border-primary/40 shadow-2xl shadow-primary/10'
                      : 'translate-y-0 scale-100 border-border',
                    X_OFFSET[i % 2],
                  )}
                  style={{ top: `${i * CARD_STEP}px`, zIndex: active ? 30 : visible.length - i }}
                >
                  {/* Gold left-border accent on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 left-0 top-4 w-[3px] rounded-full bg-primary transition-all duration-300"
                    style={{ opacity: active ? 1 : 0, transform: active ? 'scaleY(1)' : 'scaleY(0)' }}
                  />

                  {/* Conventional row — always visible. Fixed height + clamped
                      text so every card rests at exactly the same size
                      regardless of how many lines the label wraps to. */}
                  <div className="flex h-[92px] items-center gap-3 p-5 pr-10">
                    <div className="size-12 shrink-0 overflow-hidden rounded-lg">
                      <img src={row.oldImage} alt={row.oldText} loading="lazy" className="size-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                        Conventional frames
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-base font-medium text-surface-dark">{row.oldText}</p>
                    </div>
                  </div>

                  {/* A1 solution row — expands on hover */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: active ? '6rem' : '0px',
                      opacity: active ? 1 : 0,
                    }}
                  >
                    <div className="flex items-center gap-3 border-t border-border bg-primary/5 px-5 py-4">
                      <div className="size-12 shrink-0 overflow-hidden rounded-lg">
                        <img src={row.newImage} alt={row.newText} loading="lazy" className="size-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-accent-foreground-strong">
                          A1 Frame
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-base font-semibold text-surface-dark">{row.newText}</p>
                      </div>
                    </div>
                  </div>

                  <p
                    className="px-5 pb-4 text-xs text-muted-foreground transition-opacity duration-200"
                    style={{ opacity: active ? 0 : 1 }}
                  >
                    Hover to see the A1 solution
                  </p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Footer tagline */}
      <Reveal>
        <div className="relative mx-auto flex max-w-5xl items-center gap-4 px-5 pb-16 pt-4 md:px-8 md:pb-24">
          <span className="h-px flex-1 bg-border" />
          <p className="shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground-strong">
            8 problems solved. One frame.
          </p>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
    </section>
  )
}
