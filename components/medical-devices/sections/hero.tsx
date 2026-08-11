'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/medical-devices/reveal'
import { Button } from '@/components/ui/button'
import { Clock, Boxes, ShieldCheck, Crosshair, ArrowRight, Play, Pause } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { asset } from '@/lib/utils'

type Stat = {
  value: string
  label: string
  icon: LucideIcon
  // When set, the value renders as a count-up from 0 instead of static text.
  count?: number
  suffix?: string
}

const STATS: Stat[] = [
  { value: '50%', count: 50, suffix: '%', label: 'Reduction in bilateral procedure time', icon: Clock },
  { value: '5', count: 5, label: 'Total components\nLowest Number Of Any Stereotactic System', icon: Boxes },
  { value: 'Zero', label: 'Visible scars', icon: ShieldCheck },
  { value: '<0.2mm', label: 'Mean trajectory accuracy', icon: Crosshair },
]

// Counts 0 → target with an ease-out curve. Renders the final value on the
// server (SEO/no-JS keeps the real number); the animation only kicks in
// client-side, and reduced-motion users just see the final value.
function StatCounter({ target, suffix = '', delay = 0 }: { target: number; suffix?: string; delay?: number }) {
  const [display, setDisplay] = useState(target)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const duration = 1200
    let start: number | null = null
    const tick = (t: number) => {
      if (start === null) start = t
      const progress = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    const timer = setTimeout(() => {
      setDisplay(0)
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [target, delay])

  return (
    <>
      {display}
      {suffix}
    </>
  )
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // Respect the user's OS-level motion preference: hold on the poster frame
    // instead of autoplaying the loop.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setPaused(true)
      return
    }
    // Some mobile browsers silently drop the implicit autoplay attempt even
    // with muted+playsInline set — setting `muted` as a JS property (not just
    // the HTML attribute) and explicitly calling play() makes it retry.
    video.muted = true
    video.play().catch(() => {
      // Autoplay can still be blocked by OS-level settings (e.g. iOS Low Power
      // Mode) — nothing further to do client-side in that case.
    })
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {})
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <section id="top" className="relative bg-surface-dark">
      <div className="relative flex min-h-svh flex-col overflow-hidden">
        {/* Background video — slightly inset from the section edges, with a
            wide edge fade so it dissolves into the surface-dark background
            with no visible seam. Decorative, so hidden from screen readers.
            The wrapper owns position + mask; the video inside carries the
            slow breathe zoom (scaling the video directly would clobber the
            centering translate). */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[68%] w-[72%] -translate-x-1/2 -translate-y-1/2 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={asset('/images/hero-poster.jpg')}
            className="video-breathe size-full object-cover"
          >
            <source src={asset('/videos/hero-brain.mp4')} type="video/mp4" />
          </video>
        </div>

        {/* Light legibility gradient — darker at the top where the text sits,
            kept gentle everywhere else so the video stays clearly visible. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-surface-dark/70 via-surface-dark/20 to-surface-dark/45"
        />

        {/* WCAG 2.2.2 — motion that runs longer than 5s needs a pause control. */}
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
          className="absolute bottom-5 right-5 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>

        {/* Scroll cue — a gold segment sliding down a hairline track. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-1/2 z-10 h-10 w-px -translate-x-1/2 overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/15" />
          <span className="scroll-cue-dot absolute left-0 top-0 h-4 w-full bg-primary" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 pb-8 pt-20 text-center md:px-8 md:pb-12 md:pt-24">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
              Less is More
            </span>
          </Reveal>

          {/* Each line rises out of its own overflow-hidden slot; the gold
              rule draws itself once both lines have landed. */}
          <h1 className="mt-8 text-4xl font-semibold leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              <span className="line-rise block" style={{ animationDelay: '100ms' }}>
                Simplest to Use.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="line-rise block text-primary" style={{ animationDelay: '280ms' }}>
                Fastest to Master.
              </span>
            </span>
            <span
              aria-hidden="true"
              className="rule-draw mx-auto mt-5 block h-0.5 w-20 rounded-full bg-primary"
              style={{ animationDelay: '650ms' }}
            />
          </h1>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] md:text-lg">
              The A1 Stereotactic Frame reaches both brain targets in a single session. No visible scars, only 5 components.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <Button
                render={<a href="/medical-devices/contact" />}
                nativeButton={false}
                variant="secondary"
                className="h-auto w-full rounded-sm border border-white/40 bg-white/15 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-surface-dark sm:w-auto"
              >
                Speak To Our Team
              </Button>
              <a
                href="/medical-devices/products"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Learn More
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Stat row — icon and value on one line, label beneath. Labels are
              width-constrained so their line counts stay close and the three
              columns read as one aligned band. */}
          <dl className="mt-8 grid grid-cols-4 items-start gap-2 sm:mt-10 sm:gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.value} delay={320 + i * 100} as="div">
                {/* Hover lift lives on this inner div, not Reveal's own tag — Reveal's
                    entrance animation sets a persistent transform that would otherwise
                    fight with a hover transform on the same element. */}
                <div className="group transition-transform duration-300 hover:-translate-y-1">
                  <dt className="flex items-center justify-center gap-2 font-mono text-2xl font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] sm:gap-3 sm:text-3xl">
                    <stat.icon
                      className="size-5 shrink-0 text-primary transition-colors duration-300 group-hover:text-white sm:size-6"
                      strokeWidth={1.5}
                    />
                    {typeof stat.count === 'number' ? (
                      <StatCounter target={stat.count} suffix={stat.suffix} delay={600 + i * 150} />
                    ) : (
                      stat.value
                    )}
                  </dt>
                  <dd className="mx-auto mt-1 max-w-[220px] whitespace-pre-line text-xs leading-snug text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-white sm:mt-2 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
