import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, IBM_Plex_Mono, Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-fraunces' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-plex-mono' })

export const metadata: Metadata = { title: 'Pioneer Biotech | Engineering the Future of Healthcare', description: 'Pioneer Biotech builds the technology, materials, and expertise behind modern healthcare.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1A1A1A', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background" data-scroll-behavior="smooth"><body className={`${inter.variable} ${manrope.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
