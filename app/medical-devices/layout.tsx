import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Geist_Mono } from 'next/font/google'
import { SmoothScroll } from '@/components/medical-devices/smooth-scroll'
import { Header, Footer } from '@/components/site-shell'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['italic', 'normal'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NeuroTech A1 Stereotactic Frame',
  description:
    "The NeuroTech A1 Stereotactic Frame, designed and manufactured by Pioneer Biotech, is the world's first bilateral trajectory stereotactic frame — cutting brain surgery time in half with just 5 components and no skull pins.",
  alternates: { canonical: '/medical-devices' },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0e',
}

export default function MedicalDevicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div className={`${playfair.variable} ${geistMono.variable} a1-scope`}>
        <SmoothScroll>{children}</SmoothScroll>
      </div>
      <Footer />
    </>
  )
}
