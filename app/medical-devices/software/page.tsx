import type { Metadata } from 'next'
import { Reveal } from '@/components/medical-devices/reveal'
import { Faq } from '@/components/medical-devices/sections/faq'

export const metadata: Metadata = {
  title: 'NeuroTech A1 Surgical Planning Software | Pioneer Biotech',
  description:
    'NeuroTech A1 Surgical Planning fuses CT/MRI imaging to establish precise stereotactic reference before the NeuroTech A1 Stereotactic Frame ever touches the patient.',
  alternates: { canonical: '/medical-devices/software' },
}

const faqItems = [
  { question: 'What does NeuroTech A1 Surgical Planning software do?', answer: 'It fuses CT and MRI imaging to establish a precise stereotactic reference before the A1 Frame ever touches the patient, supporting the planning behind each bilateral trajectory.' },
  { question: 'Does it require special hardware?', answer: 'Contact our team for current system requirements — we\'ll confirm compatibility with your existing imaging and planning workstations.' },
  { question: 'Is training provided?', answer: 'Yes — training on the planning software is included as part of clinical evaluation and onboarding with the A1 Frame.' },
  { question: 'Does it integrate with existing hospital imaging systems?', answer: 'It\'s built around standard CT/MRI fusion workflows. Speak with our team about your specific imaging setup.' },
  { question: 'Is the software included with the A1 Frame or licensed separately?', answer: 'Contact our team for current licensing details as part of your clinical evaluation.' },
]

// Placeholder page — full software content to be added separately.
export default function SoftwarePage() {
  return (
    <>
      <main>
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
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                Planning for Better Outcomes
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
                NeuroTech A1 Surgical Planning — CT/MRI fusion built to establish precise
                stereotactic reference before the frame ever touches the patient.
              </p>
            </Reveal>
          </div>
        </section>

        <Faq items={faqItems} />
      </main>
    </>
  )
}
