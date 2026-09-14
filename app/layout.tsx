import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, IBM_Plex_Mono, Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-fraunces' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-plex-mono' })

// pbio.tech is the registered, deployed domain. pioneerbiotech.com belongs to an
// unrelated third party — pointing metadataBase there sent every canonical URL and
// OG image to someone else's server.
const SITE_URL = 'https://www.pbio.tech'
const SITE_TITLE = 'Pioneer Biotech | Pharma Manufacturing & Medical Devices'
const SITE_DESCRIPTION = 'Pioneer Biotech supplies GMP-certified pharmaceutical raw materials and lab equipment, and manufactures the NeuroTech A1 Stereotactic Frame for neurosurgery.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | Pioneer Biotech' },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Pioneer Biotech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1A1A1A', userScalable: true }

// "Pioneer Biotech" is a contested name — several unrelated companies (a Chinese
// herbal-extract manufacturer on pioneerbiotech.com, a Maryland biotech, others)
// currently own the query. This entity graph tells Google explicitly which
// company this site is, where it operates, and links it to the LinkedIn page,
// so it can be disambiguated and surfaced as its own Knowledge Panel.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Pioneer Biotech',
      legalName: 'Pioneer Biotech LLC',
      url: SITE_URL,
      logo: `${SITE_URL}/logos/logo.jpeg`,
      description: SITE_DESCRIPTION,
      email: 'info@pbio.tech',
      telephone: '+971503859559',
      sameAs: ['https://www.linkedin.com/company/pioneer-biotech-llc/'],
      address: [
        { '@type': 'PostalAddress', streetAddress: 'FD – First Floor, Incubator Building, Masdar City', addressLocality: 'Abu Dhabi', addressCountry: 'AE' },
        { '@type': 'PostalAddress', streetAddress: 'Trivium Square, Floor 2, Office 207, 5th Settlement', addressLocality: 'New Cairo', addressCountry: 'EG' },
      ],
      contactPoint: { '@type': 'ContactPoint', telephone: '+971503859559', email: 'info@pbio.tech', contactType: 'sales', availableLanguage: ['en', 'ar'] },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Pioneer Biotech',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

// `<` escaped so a value could never terminate the script tag early.
const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c')

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background" data-scroll-behavior="smooth"><body className={`${inter.variable} ${manrope.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />{children}{process.env.NODE_ENV === 'production' && <><Analytics /><SpeedInsights /></>}</body></html> }
