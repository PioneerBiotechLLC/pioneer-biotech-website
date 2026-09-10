/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Migrating call sites from <img> to next/image incrementally (see
    // scripts/compress-images.mjs comment history); once every usage is
    // migrated this flag becomes unnecessary. Left as real optimization
    // (not unoptimized) so each migrated <Image> gets Vercel's on-demand
    // resize/format negotiation immediately as it lands.
  },
  async headers() {
    // Applied to every route. No Content-Security-Policy here on purpose: a useful
    // one needs per-request nonces for Next's inline hydration scripts, which means
    // middleware, and a CSP with `unsafe-inline` bought nothing. Tracked as follow-up.
    const securityHeaders = [
      // Vercel already redirects http→https; HSTS closes the downgrade window on
      // the very first request, before that redirect is ever seen.
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ]

    // Static assets under public/ aren't filename-hashed, so we deliberately avoid
    // `immutable` + a year-long max-age — swapping a file at the same path (as we
    // did this session) would otherwise leave returning visitors stuck on the old
    // version for up to a year. A day of caching + revalidate-on-expiry (Next
    // already sends ETags, so a stale hit is a cheap 304) is a safer default.
    const cacheControl = { key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }
    return [
      { source: '/:path*', headers: securityHeaders },
      { source: '/images/:path*', headers: [cacheControl] },
      { source: '/logos/:path*', headers: [cacheControl] },
      { source: '/videos/:path*', headers: [cacheControl] },
      // Scoped to the actual asset subfolders, not a bare `/medical-devices/:path*` —
      // that broader pattern would also match the real page routes under
      // /medical-devices/(about|products|...), which must not get this treatment.
      { source: '/medical-devices/images/:path*', headers: [cacheControl] },
      { source: '/medical-devices/logos/:path*', headers: [cacheControl] },
      { source: '/medical-devices/videos/:path*', headers: [cacheControl] },
      { source: '/medical-devices/features/:path*', headers: [cacheControl] },
    ]
  },
}

export default nextConfig
