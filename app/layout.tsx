import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = { title: 'Pioneer Biotech | Engineering the Future of Healthcare', description: 'Pioneer Biotech builds the technology, materials, and expertise behind modern healthcare.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1A1A1A', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background"><body className={`${inter.variable} ${manrope.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
