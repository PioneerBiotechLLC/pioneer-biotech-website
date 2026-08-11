import { SiteNav } from '@/components/medical-devices/sections/site-nav'
import { Hero } from '@/components/medical-devices/sections/hero'
import { TrustBar } from '@/components/medical-devices/sections/trust-bar'
import { Problem } from '@/components/medical-devices/sections/problem'
import { Features } from '@/components/medical-devices/sections/features'
import { Software } from '@/components/medical-devices/sections/software'
import { Products } from '@/components/medical-devices/sections/products'
import { Evidence } from '@/components/medical-devices/sections/evidence'
import { PatientCare } from '@/components/medical-devices/sections/patient-care'
import { FinalCta } from '@/components/medical-devices/sections/final-cta'
import { SiteFooter } from '@/components/medical-devices/sections/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Features />
        <Software />
        <Evidence />
        <Products />
        <PatientCare />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
