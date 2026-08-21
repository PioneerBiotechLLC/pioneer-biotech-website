import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get in Touch With Our Team',
  description: 'Contact Pioneer Biotech to source pharmaceutical materials, evaluate the NeuroTech A1 Stereotactic Frame, or explore our Innovation Hub.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
