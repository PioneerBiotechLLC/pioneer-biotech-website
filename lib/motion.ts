'use client'

import { useEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

// One-off, synchronous read for effects that fire once at mount and don't need
// to react to the setting changing mid-session (e.g. deciding whether to start
// an animation at all).
export function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

// Reactive version for consumers whose rendered output depends on the setting.
// Starts at `null` (unknown) so the client's first render matches the
// server-rendered HTML — resolving it inside an effect, rather than a lazy
// useState initializer, avoids a hydration mismatch. Callers should treat
// `null` the same as `true` (the conservative default) until it resolves.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState<boolean | null>(null)

  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY)
    setReduced(query.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}
