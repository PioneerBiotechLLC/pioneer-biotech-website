'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const MEDICAL_DEVICES_URL = '/medical-devices'

const NAV_LINKS = [
  { label: 'Pharma & Biopharma', href: '/pharma-biopharma' },
  { label: 'Medical Devices', href: MEDICAL_DEVICES_URL },
  { label: 'Innovation Center', href: '/innovation-center' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  return (
    <>
      <div className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out', scrolled ? 'px-3 pt-2 sm:px-4 sm:pt-3' : 'px-0 pt-0')}>
        <header className={cn('mx-auto bg-black transition-all duration-500 ease-out', scrolled ? 'max-w-6xl rounded-full border border-white/10 shadow-xl shadow-black/60' : 'max-w-full rounded-none border-b border-white/10 shadow-none')}>
          <nav className="flex h-16 items-center justify-between px-5 md:px-8">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img src="/logos/logo.jpeg" alt="Pioneer Biotech" className="h-12 w-auto max-w-[180px] object-contain brightness-125" />
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="text-sm text-white/90 transition-colors hover:text-primary">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="text-sm text-white/90 transition-colors hover:text-primary">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button
                render={<a href="/#contact" />}
                nativeButton={false}
                variant="outline"
                className="h-auto rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Button>
            </div>

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

      <div className={cn('fixed inset-0 z-50 lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}>
        <div
          className={cn('absolute inset-0 bg-black/60 transition-opacity duration-300', open ? 'opacity-100' : 'opacity-0')}
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
            <img src="/logos/logo.jpeg" alt="Pioneer Biotech" className="h-9 w-auto max-w-[140px] object-contain" />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="text-foreground">
              <X className="size-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-3 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="block rounded-sm px-3 py-3 text-base text-foreground hover:bg-muted">{link.label}</a>
                ) : (
                  <Link href={link.href} onClick={() => setOpen(false)} className="block rounded-sm px-3 py-3 text-base text-foreground hover:bg-muted">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="px-5">
            <Button
              render={<a href="/#contact" />}
              nativeButton={false}
              variant="secondary"
              onClick={() => setOpen(false)}
              className="h-auto w-full justify-center rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-white hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  return <footer className="site-footer" id="contact">
    <div className="container footer-grid">
      <div><Link href="/" className="wordmark footer-mark">Pioneer <span>Biotech</span></Link><p className="footer-note">Engineering the future of healthcare through materials, technology, and expertise.</p></div>
      <div><p className="footer-label">Divisions</p><div className="footer-links"><Link href="/pharma-biopharma">Pharma & Biopharma</Link><Link href={MEDICAL_DEVICES_URL}>Medical Devices</Link><Link href="/innovation-center">Innovation Center</Link></div></div>
      <div><p className="footer-label">Company</p><div className="footer-links"><a href="#">[About]</a><a href="#">[Careers]</a></div></div>
      <div><p className="footer-label">Contact</p><div className="footer-links"><a href="tel:+971503859559">+971 50 385 9559</a><a href="mailto:info@pbio.tech">info@pbio.tech</a><span>[International Business District — confirm full address]</span></div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Pioneer Biotech. All rights reserved.</span><span>[LinkedIn] &nbsp; [Instagram]</span></div>
  </footer>
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`container ${className}`}>{children}</div> }
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{children}</p> }
export function Breadcrumb({ children }: { children: React.ReactNode }) { return <p className="breadcrumb">{children}</p> }
export function ButtonLink({ children, href, outline = false, external = false }: { children: React.ReactNode; href: string; outline?: boolean; external?: boolean }) { return external ? <a className={outline ? 'button button-outline' : 'button'} href={href} target="_blank" rel="noreferrer">{children}</a> : <a className={outline ? 'button button-outline' : 'button'} href={href}>{children}</a> }
export function Arrow() { return <span aria-hidden="true"> →</span> }
export function TrustStrip({ label = '[division-specific certifications — confirm]' }: { label?: string }) {
  const items = ['GMP Certified', 'ISO Compliant', label]
  return <section className="trust-strip"><Container><div className="trust-items">{items.map((item) => <span className="trust-item" key={item}><ShieldCheck aria-hidden="true" /> {item}</span>)}</div></Container></section>
}

export function SectionDivider({ children }: { children: React.ReactNode }) { return <section className="section-divider"><Container><p>{children}</p></Container></section> }

const PARTNER_LOGOS = [
  { name: 'BEA Technologies', src: '/logos/pharma-partners/bea.png' },
  { name: 'Tisla', src: '/logos/pharma-partners/tisla.png' },
  { name: 'Biotactical', src: '/logos/pharma-partners/biotactical.png' },
  { name: 'Apitoria', src: '/logos/pharma-partners/apitoria.png' },
]

export function PartnerBar() {
  const track = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  return (
    <section className="partner-bar">
      <Container>
        <Eyebrow>Trusted By Leading Partners</Eyebrow>
      </Container>
      <div className="partner-track">
        {track.map((partner, i) => <img key={`${partner.name}-${i}`} src={partner.src} alt={partner.name} loading="lazy" />)}
      </div>
    </section>
  )
}

export function PageHero({ breadcrumb, eyebrow, title, description, image }: { breadcrumb?: string; eyebrow: string; title: string; description: string; image?: string }) { return <section className={image ? 'page-hero has-image' : 'page-hero'}>{image && <img src={image} alt="" aria-hidden="true" />}<Container>{breadcrumb && <Breadcrumb>{breadcrumb}</Breadcrumb>}<Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p className="hero-copy">{description}</p></Container></section> }

export function ClosingCta({ title, description, buttons, dark = false }: { title: string; description: string; buttons: string[]; dark?: boolean }) { return <section className={dark ? 'closing closing-dark' : 'closing'}><Container><span className="closing-mark" aria-hidden="true" /><h2>{title}</h2><p>{description}</p><div className="button-row">{buttons.map((button, i) => <ButtonLink key={button} href="#contact" outline={i > 0}>{button}</ButtonLink>)}</div></Container></section> }

export function IconMark({ children }: { children: React.ReactNode }) { return <div className="icon-mark" aria-hidden="true">{children}</div> }
