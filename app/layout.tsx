import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, IBM_Plex_Mono, Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-fraunces' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-plex-mono' })

const SITE_URL = 'https://pioneerbiotech.com'
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background" data-scroll-behavior="smooth"><body className={`${inter.variable} ${manrope.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
