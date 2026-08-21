'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Award, BadgeCheck, BookOpenCheck, ChevronDown, FlaskConical, Globe, Menu, ShieldCheck, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const MEDICAL_DEVICES_URL = '/medical-devices'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Pharma Solutions',
    href: '/pharma-biopharma',
    children: [
      { label: 'Overview', href: '/pharma-biopharma' },
      { label: 'Upstream & Downstream', href: '/pharma-biopharma#upstream-downstream' },
      { label: 'Turnkey Projects', href: '/pharma-biopharma#turnkey-projects' },
      { label: 'Lab Equipment', href: '/pharma-biopharma#lab-equipment' },
      { label: 'Membrane Filtration', href: '/pharma-biopharma#membrane-filtration' },
      { label: 'APIs & Excipients', href: '/pharma-biopharma#apis-excipients' },
      { label: 'Trusted Partners', href: '/pharma-biopharma#trusted-partners' },
    ],
  },
  {
    label: 'Medical Devices',
    href: MEDICAL_DEVICES_URL,
    children: [
      { label: 'Overview', href: MEDICAL_DEVICES_URL },
      { label: 'Products', href: '/medical-devices#products' },
      { label: 'Software', href: '/medical-devices/software' },
      { label: 'Clinical Evidence', href: '/medical-devices/clinical-evidence' },
      { label: 'About', href: '/medical-devices/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Innovation Hub',
    href: '/innovation-center',
    children: [
      { label: 'Overview', href: '/innovation-center' },
    ],
  },
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
        <header className={cn('mx-auto bg-black transition-all duration-500 ease-out', scrolled ? 'max-w-6xl rounded-full nav-glow' : 'max-w-full rounded-none border-b border-white/10 shadow-none')}>
          <nav className="flex h-16 items-center justify-between px-5 md:px-8">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Image src="/logos/logo.jpeg" alt="Pioneer Biotech" width={1339} height={747} priority className="h-12 w-auto max-w-[180px] object-contain brightness-125" />
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className={link.children ? 'group relative' : undefined}>
                  <Link href={link.href} className="inline-flex items-center gap-1 text-sm text-white/90 transition-colors hover:text-primary">
                    {link.label}
                    {link.children && <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />}
                  </Link>
                  {link.children && (
                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-xl">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href} className="block px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-primary">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button
                render={<a href="/contact" />}
                nativeButton={false}
                variant="outline"
                // The `outline` variant's dark: classes reference shadcn tokens (--input) that
                // only exist inside .a1-scope (medical-devices); this button renders in the
                // sitewide header, so under OS/browser dark mode those tokens are undefined and
                // the button turns transparent against the black nav bar. Overriding every dark:
                // slot below neutralizes that regardless of cascade order.
                className="h-auto rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black dark:border-primary dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-black"
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
            <Image src="/logos/logo.jpeg" alt="Pioneer Biotech" width={1339} height={747} className="h-9 w-auto max-w-[140px] object-contain" />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="text-foreground">
              <X className="size-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 overflow-y-auto px-3 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block rounded-sm px-3 py-3 text-base text-foreground hover:bg-muted">{link.label}</Link>
                {link.children && (
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-border/60 pl-3">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} onClick={() => setOpen(false)} className="block rounded-sm px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="px-5">
            <Button
              render={<a href="/contact" />}
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
      <div><Link href="/" className="footer-logo"><Image src="/logos/logo-transparent.png" alt="Pioneer Biotech" width={1339} height={747} /></Link><p className="footer-note">Engineering the future of healthcare through materials, technology, and expertise.</p></div>
      <div><p className="footer-label">Divisions</p><div className="footer-links"><Link href="/pharma-biopharma">Pharma Solutions</Link><Link href={MEDICAL_DEVICES_URL}>Medical Devices</Link><Link href="/innovation-center">Innovation Hub</Link></div></div>
      <div><p className="footer-label">Locations</p><div className="footer-links footer-addresses">
        <span><strong>Egypt</strong>Trivium Square, Floor 2, Office 207, 5th Settlement, New Cairo, Egypt</span>
        <span><strong>Abu Dhabi</strong>FD – First Floor, Incubator Building, Masdar City, Abu Dhabi, UAE</span>
      </div></div>
      <div><p className="footer-label">Company</p><div className="footer-links"><Link href="/about">About</Link></div></div>
      <div><p className="footer-label">Contact</p><div className="footer-links"><a href="tel:+971503859559">+971 50 385 9559</a><a href="mailto:info@pbio.tech">info@pbio.tech</a></div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Pioneer Biotech. All rights reserved.</span><a href="https://www.linkedin.com/company/pioneer-biotech-llc/" target="_blank" rel="noreferrer">LinkedIn</a></div>
  </footer>
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`container ${className}`}>{children}</div> }
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{children}</p> }
export function Breadcrumb({ children }: { children: React.ReactNode }) { return <p className="breadcrumb">{children}</p> }
export function ButtonLink({ children, href, outline = false, external = false }: { children: React.ReactNode; href: string; outline?: boolean; external?: boolean }) { return external ? <a className={outline ? 'button button-outline' : 'button'} href={href} target="_blank" rel="noreferrer">{children}</a> : <a className={outline ? 'button button-outline' : 'button'} href={href}>{children}</a> }
export function Arrow() { return <span aria-hidden="true"> →</span> }
const STANDARDS = [
  { label: 'GMP Certified', icon: ShieldCheck },
  { label: 'ISO Compliant', icon: BadgeCheck },
  { label: 'USP Standards', icon: FlaskConical },
  { label: 'BP Compliant', icon: BookOpenCheck },
  { label: 'EP Compliant', icon: Globe },
]

export function TrustStrip({ label }: { label?: string }) {
  const items = label ? [...STANDARDS, { label, icon: Award }] : STANDARDS
  return <section className="trust-strip"><Container><div className="trust-items">{items.map(({ label: itemLabel, icon: Icon }) => <span className="trust-item" key={itemLabel}><Icon aria-hidden="true" /> {itemLabel}</span>)}</div></Container></section>
}

export function SectionDivider({ children }: { children: React.ReactNode }) { return <section className="section-divider"><Container><p>{children}</p></Container></section> }

const PARTNER_LOGOS = [
  { name: 'BEA Technologies', src: '/logos/pharma-partners/bea.png', url: 'https://www.bea-italy.com/', width: 1350, height: 629 },
  { name: 'Tisla', src: '/logos/pharma-partners/tisla.png', url: 'https://tislagroup.com/', width: 1325, height: 381 },
  { name: 'Biotactical', src: '/logos/pharma-partners/biotactical.png', url: 'http://www.biotactical.nl/', width: 451, height: 451 },
  { name: 'Apitoria', src: '/logos/pharma-partners/apitoria.png', url: 'https://www.apitoria.com/', width: 385, height: 189 },
  { name: 'Indenta', src: '/logos/pharma-partners/indenta.png', url: 'https://www.indenta.com/', width: 2000, height: 988 },
  { name: 'Halogens', src: '/logos/pharma-partners/halogens.png', url: 'https://www.halogens.co.in/', width: 1535, height: 1536 },
]

export function PartnerBar() {
  return (
    <section className="partner-bar">
      <Container>
        <Eyebrow>Trusted By Leading Partners</Eyebrow>
        <div className="partner-track">
          {PARTNER_LOGOS.map((partner) => <a key={partner.name} href={partner.url} target="_blank" rel="noreferrer" aria-label={partner.name}><Image src={partner.src} alt={partner.name} width={partner.width} height={partner.height} loading="lazy" /></a>)}
        </div>
      </Container>
    </section>
  )
}

export function PageHero({ breadcrumb, title, description, image, className = '' }: { breadcrumb?: string; title: React.ReactNode; description: string; image?: string; className?: string }) { return <section className={`${image ? 'page-hero has-image' : 'page-hero'} ${className}`.trim()}>{image && <Image src={image} alt="" aria-hidden="true" fill sizes="100vw" priority className="object-cover" />}<Container>{breadcrumb && <Breadcrumb>{breadcrumb}</Breadcrumb>}<h1>{title}</h1><p className="hero-copy">{description}</p></Container></section> }

export function ClosingCta({ title, description, buttons, links, dark = false }: { title: string; description: string; buttons: string[]; links?: string[]; dark?: boolean }) { return <section className={dark ? 'closing closing-dark' : 'closing'}><Container><span className="closing-mark" aria-hidden="true" /><h2>{title}</h2><p>{description}</p><div className="button-row">{buttons.map((button, i) => <ButtonLink key={button} href={links?.[i] ?? '#contact'} outline={i > 0}>{button}</ButtonLink>)}</div></Container></section> }

export function IconMark({ children }: { children: React.ReactNode }) { return <div className="icon-mark" aria-hidden="true">{children}</div> }
