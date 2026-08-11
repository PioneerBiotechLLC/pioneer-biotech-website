'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useState, type ReactNode } from 'react'

// Lenis's own anchor-click handling only covers same-page hash links (it checks
// pathname === pathname), so a fresh load at a URL that already has a hash —
// e.g. clicking a plain <a href="/products#a1-hemo"> from another page — never
// goes through it. The browser's native scroll-to-fragment-on-load *can* respect
// scroll-margin-top, but it races against CSS loading and isn't reliable, so we
// re-apply the scroll explicitly once Lenis (and its offset-aware scrollTo) is ready.
function InitialHashScrollFix() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis || !window.location.hash) return
    lenis.scrollTo(window.location.hash, { immediate: true })
  }, [lenis])

  return null
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(query.matches)
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  if (reduceMotion !== false) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        wheelMultiplier: 0.7,
        anchors: true,
      }}
    >
      <InitialHashScrollFix />
      {children}
    </ReactLenis>
  )
}
