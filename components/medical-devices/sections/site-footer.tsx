import { asset } from '@/lib/utils'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Products',
    links: [
      { label: 'A1 Frame', href: '/medical-devices/products#a1-frame' },
      { label: 'A1 Tremor', href: '/medical-devices/products#a1-tremor' },
      { label: 'A1 Hemo', href: '/medical-devices/products#a1-hemo' },
      { label: 'A1 Onco', href: '/medical-devices/products#a1-onco' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Evidence', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Patient care', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Find distributor', href: '#' },
      { label: 'Become a distributor', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-10 md:gap-y-10">
          {/* Column 1: brand */}
          <div className="col-span-2 md:col-span-1">
            <div>
              <img src={asset('/logos/logo_footer.jpeg')} alt="A1 Frame" className="h-16 w-auto object-contain" />
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              The world&apos;s only bilateral trajectory stereotactic frame — engineered for
              precision, simplicity, and speed in cranial surgery.
            </p>
            <span className="mt-4 inline-flex items-center rounded-sm border border-border bg-muted px-2.5 py-1 text-xs font-medium text-primary">
              Patented
            </span>
            <div className="mt-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-surface-dark">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>
            ©{' '}
            <a href="/" className="hover:text-primary">
              {new Date().getFullYear()} Pioneer Biotech
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="font-medium text-primary">
              English
            </button>
            <span className="text-border">/</span>
            <button type="button" className="hover:text-primary">
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
