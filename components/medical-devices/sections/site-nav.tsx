'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLenis } from 'lenis/react'
import { asset, cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { label: 'About', href: '/medical-devices/about' },
  { label: 'Products', href: '/medical-devices/products' },
  { label: 'Features', href: '#how-it-works' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Distributors', href: '#distributors' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    // Lenis intercepts wheel/touch on window directly, so body overflow alone
    // doesn't stop it from still scrolling the page behind the open drawer.
    lenis?.stop()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      lenis?.start()
      document.body.style.overflow = previousOverflow
    }
  }, [open, lenis])

  return (
    <>
      {/* Outer fixed layer just provides the inset margin once scrolled — the
          pill/bar itself (and its backdrop-blur) lives one level down, as its
          own element. Scroll controls the shape (full bar vs. floating
          island); hover controls the color (glass vs. solid black) —
          independently of each other. */}
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
          scrolled ? 'px-3 pt-2 sm:px-4 sm:pt-3' : 'px-0 pt-0',
        )}
      >
        <header
          className={cn(
            'mx-auto bg-black transition-all duration-500 ease-out',
            scrolled
              ? 'max-w-6xl rounded-full border border-white/10 shadow-xl shadow-black/60'
              : 'max-w-full rounded-none border-b border-white/10 shadow-none',
          )}
        >
          <nav className="flex h-16 items-center justify-between px-5 md:px-8">
            {/* Logo */}
            <a href="/medical-devices" className="flex items-center">
              <img src={asset('/logos/logo.jpeg')} alt="A1 Frame" className="h-12 w-auto max-w-[180px] object-contain brightness-125" />
            </a>

            {/* Center links */}
            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right CTA */}
            <div className="hidden lg:block">
              <Button
                render={<a href="/medical-devices/contact" />}
                nativeButton={false}
                variant="outline"
                className="h-auto rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-surface-dark"
              >
                Speak To Our Team
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="text-white transition-colors lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile drawer — rendered as a sibling of <header>, not a child.
          <header> gets backdrop-blur-md once scrolled, and backdrop-filter
          creates a new containing block for fixed-position descendants,
          which collapsed this drawer to the header's own height. */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-surface-dark/60 transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-white shadow-xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-border/60 px-5">
            <img src={asset('/logos/logo.jpeg')} alt="A1 Frame" className="h-9 w-auto max-w-[140px] object-contain" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-foreground"
            >
              <X className="size-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-3 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-3 text-base text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5">
            <Button
              render={<a href="/medical-devices/contact" />}
              nativeButton={false}
              variant="secondary"
              onClick={() => setOpen(false)}
              className="h-auto w-full justify-center rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-white hover:bg-primary/90"
            >
              Speak with our team
            </Button>
          </div>
          <div className="mt-auto border-t border-border/60 px-5 py-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <button type="button" className="font-medium text-primary">
                EN
              </button>
              <span className="text-border">|</span>
              <button type="button" className="hover:text-primary">
                عربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
