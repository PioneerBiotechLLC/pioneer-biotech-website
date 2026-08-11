import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Geist_Mono } from 'next/font/google'
import { SmoothScroll } from '@/components/medical-devices/smooth-scroll'

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
  title: 'A1 Frame by Abdelwahab — Bilateral Trajectory Stereotactic Frame',
  description:
    "The Abdelwahab Stereotactic Frame (A1 Frame) is the world's only stereotactic frame with bilateral trajectory — cutting brain surgery time in half with just 5 components and no skull pins.",
}

export const viewport: Viewport = {
  themeColor: '#0c0c0e',
}

export default function MedicalDevicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${playfair.variable} ${geistMono.variable} a1-scope`}>
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  )
}
