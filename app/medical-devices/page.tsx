import { Hero } from '@/components/medical-devices/sections/hero'
import { TrustBar } from '@/components/medical-devices/sections/trust-bar'
import { Problem } from '@/components/medical-devices/sections/problem'
import { Features } from '@/components/medical-devices/sections/features'
import { Software } from '@/components/medical-devices/sections/software'
import { Products } from '@/components/medical-devices/sections/products'
import { Evidence } from '@/components/medical-devices/sections/evidence'
import { PatientCare } from '@/components/medical-devices/sections/patient-care'
import { Faq } from '@/components/medical-devices/sections/faq'
import { FinalCta } from '@/components/medical-devices/sections/final-cta'

const faqItems = [
  { question: 'What makes the A1 Frame different from conventional stereotactic frames?', answer: "It's the world's first bilateral trajectory stereotactic frame — reaching both brain targets in a single session with just 5 components, no skull pins, and no visible scars." },
  { question: 'Is the A1 Frame available for clinical evaluation?', answer: 'Yes — institutional evaluation is open globally. Speak with our team to request a clinical evaluation kit.' },
  { question: 'Which procedures is it designed for?', answer: 'Movement disorders, oncology, hematology, functional neurosurgery, radiation oncology, hydrocephalus, epilepsy, and cerebral palsy — the platform adapts to each procedure\'s trajectory and accuracy demands.' },
  { question: 'How many components does it have, and is training required?', answer: 'Just 5 components, built for the simplest learning curve of any comparable system. Our team provides guidance as part of clinical evaluation and onboarding.' },
  { question: 'How can hospitals or distributors evaluate or purchase it?', answer: 'Contact our team directly — we\'ll walk you through clinical evaluation, distribution partnerships, or general enquiries.' },
]

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Features />
        <Software />
        <Evidence />
        <Products />
        <PatientCare />
        <Faq items={faqItems} />
        <FinalCta />
      </main>
    </>
  )
}
