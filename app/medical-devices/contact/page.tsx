import type { Metadata } from 'next'
import { SiteNav } from '@/components/medical-devices/sections/site-nav'
import { SiteFooter } from '@/components/medical-devices/sections/site-footer'
import { ContactForm } from '@/components/medical-devices/sections/contact-form'
import { Reveal } from '@/components/medical-devices/reveal'

export const metadata: Metadata = {
  title: 'Contact — A1 Stereotactic Frame',
  description:
    'Speak with our team about the A1 Stereotactic Frame — clinical evaluation, distribution partnerships, or general enquiries. Reach us by form or on WhatsApp.',
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-14 pt-32 md:pb-20 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Speak with our team.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            Whether you’re evaluating the A1 Frame for your operating room, exploring distribution,
            or simply have a question — we’d be glad to help.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero />
        <section className="bg-surface-alt py-16 md:py-24">
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
