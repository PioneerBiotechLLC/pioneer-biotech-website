import type { Metadata } from 'next'
import { AccordionGroup, AccordionSection } from '@/components/accordion-section'
import { ClosingCta, Container, Eyebrow, PageHero, SiteShell, TrustStrip } from '@/components/site-shell'
import { Faq } from '@/components/faq'

const faqItems = [
  { question: 'What certifications does your supply chain carry?', answer: "Our pharmaceutical supply chain is built around GMP, ISO, USP, BP, and EP compliance, covering raw materials, lab equipment, and turnkey facility infrastructure." },
  { question: 'Do you supply both raw materials and turnkey facility infrastructure?', answer: "Yes — from APIs and excipients to clean rooms, HVAC, and full turnkey manufacturing facilities. Whatever stage your line is at, we can source or build for it." },
  { question: 'Can you source custom or specialty excipients and APIs?', answer: 'Our portfolio extends well beyond what\'s listed on this page — tell us what your formulation calls for and we will source it.' },
  { question: 'What is the typical lead time for orders?', answer: 'Lead times vary by product and order volume. Contact a specialist with your specifications and timeline and we\'ll give you an accurate estimate.' },
  { question: 'Do you work with distributors as well as manufacturers?', answer: 'Yes — we partner directly with manufacturers and support distributors across our network of trusted partners like BEA Technologies and Tisla.' },
]

export const metadata: Metadata = {
  title: 'Pharma Solutions: Raw Materials & Lab Equipment',
  description: 'Microbiology, lab equipment, and pharmaceutical raw materials for manufacturers worldwide — GMP, ISO, USP, BP & EP certified supply chain.',
  alternates: { canonical: '/pharma-biopharma' },
}

const downstream = [
  ['Tangential Flow Filtration (TFF) System', ['Gentle, low-shear separation', 'Concentrates and exchanges buffer', 'Less fouling, less clogging', 'Scalable, single or multi-use'], '/images/pharma/tff-system.webp'],
  ['Disc Stack Centrifuge', ['High-throughput, continuous clarification', 'Separates cells and debris', 'Low shear, protects cells', 'Scalable, semi-continuous discharge'], '/images/pharma/disc-stack-centrifuge.png'],
]

const turnkey = [
  ['Clean Rooms', ['ISO/GMP classified, ISO 5–8', 'Modular panels, fast to install', 'Built for aseptic manufacturing'], '/images/pharma/clean-rooms.jpeg'],
  ['HVAC Systems', ['Precise temp, humidity & pressure control', 'HEPA-filtered air handling', 'Directional airflow prevents cross-contamination'], '/images/pharma/hvac-systems.jpeg'],
  ['MEP (Mechanical, Electrical & Plumbing) Systems', ['Single-source integration', 'Engineered for GMP & cleanroom needs', 'Redundant power ensures uptime'], '/images/pharma/mep-systems.jpeg'],
]

const labEquipment = [
  ['Isolator', ['Full barrier, highest sterility', 'Protects staff from hazards', 'Less gowning, less risk'], '/images/pharma/isolator.png'],
  ['Laminar Air Flow (LAF) Cabinet', ['HEPA/ULPA airflow, contamination-free zone', 'Protects products during compounding, filling'], '/images/pharma/laf-cabinet.png'],
  ['-80°C Freezer', ['Reliable -80°C ultra-low storage', 'Digital monitoring, audit-ready alarms', 'Battery backup for power loss'], '/images/pharma/freezer-80c.png'],
  ['Ultracentrifuge', ['Compact benchtop footprint', 'Interchangeable rotors, multiple sizes', 'Digital speed and time control'], '/images/pharma/ultracentrifuge.png'],
  ['Incubator', ['Stable temp and humidity', 'Digital, audit-ready monitoring', 'Built-in contamination control'], '/images/pharma/incubator.png'],
  ['Pipettes, Tubes & Tips', ['Precise, reproducible liquid handling', 'Wide range of volume capacities', 'Single-use tips reduce contamination'], '/images/pharma/pipettes-tubes-tips.png'],
]

const tislaProducts = [
  ['Sterility Canisters', '/images/pharma/tisla-canisters.png'],
  ['Sterility Pump', '/images/pharma/tisla-pump.png'],
  ['Microbiology Media Plates', '/images/pharma/tisla-media-plates.png'],
  ['Biological Indicators', '/images/pharma/tisla-indicators.png'],
  ['Silicone Tubing', '/images/pharma/tisla-tubing.png'],
  ['Sterilization Bags', '/images/pharma/tisla-bags.png'],
  ['Sterile Wipes', '/images/pharma/tisla-wipes.png'],
]

const filterValidation = ['Filter selection and sizing', 'Validation strategy and protocols', 'Bacterial challenge testing', 'Extractables analysis']

const apiList = [
  ['Paracetamol', 'Non-opioid Analgesic'],
  ['Amoxicillin', 'Penicillin Antibiotic'],
  ['Metformin HCl', 'Biguanide Antidiabetic Agent'],
  ['Levetiracetam', 'Antiepileptic'],
  ['Pantoprazole Sodium', 'Proton Pump Inhibitor'],
  ['Empagliflozin', 'SGLT2 Inhibitor'],
  ['Rosuvastatin', 'Statin (HMG-CoA)'],
  ['Vonoprazan', 'Acid Blocker (P-CAB)'],
  ['Amlodipine Besylate', 'CCB Blocker'],
  ['Apixaban', 'Factor Xa Inhibitor (DOAC)'],
  ['Resmetirom', 'THR-Beta Agonist'],
  ['Fexofenadine', 'Antihistamine (H1)'],
]

const excipients = ['Sucrose (USP/BP/EP)', 'Sorbitol (All Grade)', 'Glycerol (USP/BP/EP)', 'Propylene Glycol', '2-Propanol', 'Talc Powder', 'Ethanol', 'Magnesium Stearate', 'Sodium Saccharin', 'Hydrochloric Acid 25%', 'Tween (All Grades)', 'Lactose (All Grades)', 'MCC (All Grades)', 'Polyethylene Glycol', 'Phosphoric Acid 75%', 'Zinc Oxide', 'Pregelatinised Starch', 'Colloidal SiO2', 'Mg Stearate', 'Glycerol Distearate']

const partners = [
  ['BEA Technologies', 'Italy — filtration', '/logos/pharma-partners/bea.png', 'https://www.bea-italy.com/'],
  ['Tisla', 'Culture media', '/logos/pharma-partners/tisla.png', 'https://tislagroup.com/'],
  ['Biotactical', 'Netherlands', '/logos/pharma-partners/biotactical.png', 'http://www.biotactical.nl/'],
  ['Apitoria', 'APIs and Excipients', '/logos/pharma-partners/apitoria.png', 'https://www.apitoria.com/'],
  ['Indenta', '', '/logos/pharma-partners/indenta.png', 'https://www.indenta.com/'],
  ['Halogens', '', '/logos/pharma-partners/halogens.png', 'https://www.halogens.co.in/'],
]

function SpecCard({ name, bullets, image, fit = 'cover' }: { name: string; bullets: string[]; image?: string; fit?: 'cover' | 'contain' | 'wide' }) {
  return <div className="spec-card">
    {image && <div className={`spec-card-image ${fit}`}><img src={image} alt={name} loading="lazy" /></div>}
    <div className="spec-card-body"><h4>{name}</h4><ul className="spec-list">{bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>
  </div>
}

export default function PharmaPage() {
  return <SiteShell><main className="pharma-page"><PageHero className="hero-type-match" eyebrow="PHARMA SOLUTIONS" title={<>Everything Your<br /> <span className="accent">Pharma Line Needs.</span></>} description="From active pharmaceutical ingredients to turnkey cleanroom infrastructure, Pioneer Biotech supplies the raw materials, equipment, and engineered facilities pharmaceutical manufacturers depend on." image="/images/pharma-hero.jpeg" />

    <AccordionGroup defaultValue={[]}>
      <AccordionSection value="upstream-downstream" header={<><Eyebrow>01 — UPSTREAM & DOWNSTREAM</Eyebrow><h2>Process systems for every stage of production.</h2></>}>
        <div className="spec-group">
          <p className="spec-group-label">Upstream Solutions</p>
          <div className="spec-grid one"><SpecCard name="Bioreactor Systems" bullets={['Available in 5L, 100L, 1000L']} image="/images/pharma/bioreactor-systems.jpeg" fit="wide" /></div>
        </div>
        <div className="spec-group">
          <p className="spec-group-label">Downstream Solutions</p>
          <div className="spec-grid two bordered">{downstream.map(([name, bullets, image]) => <SpecCard key={name as string} name={name as string} bullets={bullets as string[]} image={image as string} fit="contain" />)}</div>
        </div>
      </AccordionSection>

      <AccordionSection value="turnkey-projects" tan header={<><Eyebrow>02 — TURNKEY PROJECTS</Eyebrow><h2>Facility infrastructure, delivered end to end.</h2></>}>
        <div className="spec-grid three">{turnkey.map(([name, bullets, image]) => <SpecCard key={name as string} name={name as string} bullets={bullets as string[]} image={image as string} />)}</div>
      </AccordionSection>

      <AccordionSection value="lab-equipment" header={<><Eyebrow>03 — LAB EQUIPMENT</Eyebrow><h2>Instruments built for GMP-grade reliability.</h2></>}>
        <div className="spec-grid three bordered">{labEquipment.map(([name, bullets, image]) => <SpecCard key={name as string} name={name as string} bullets={bullets as string[]} image={image as string} fit="contain" />)}</div>
        <div className="spec-group">
          <p className="spec-group-label">Tisla Products</p>
          <div className="tisla-grid">{tislaProducts.map(([name, image]) => <article className="tisla-card" key={name}><div className="tisla-card-image"><img src={image} alt={name} loading="lazy" /></div><span>{name}</span></article>)}</div>
        </div>
      </AccordionSection>

      <AccordionSection value="membrane-filtration" tan header={<><Eyebrow>04 — BEA · ITALY</Eyebrow><h2>Membrane filtration solutions.</h2></>} attribution={<span className="category-attribution">Partner: BEA Technologies, Italy</span>}>
        <div className="spec-group">
          <p className="spec-group-label">Membrane Filters</p>
          <div className="spec-grid two">
            <div className="spec-card"><div className="spec-card-image contain"><img src="/images/pharma/bea-hydrophilic-filters.png" alt="Hydrophilic Filters" loading="lazy" /></div><div className="spec-card-body"><h4>Hydrophilic Filters</h4><div className="filter-tag-list">{['Propylene', 'PES', 'PVDF', 'Glass Fiber', 'Nylon'].map((t) => <span className="filter-tag" key={t}>{t}</span>)}</div></div></div>
            <div className="spec-card"><div className="spec-card-image contain"><img src="/images/pharma/bea-hydrophobic-filters.png" alt="Hydrophobic Filters" loading="lazy" /></div><div className="spec-card-body"><h4>Hydrophobic Filters</h4><div className="filter-tag-list">{['PTFE', 'Expanded PTFE'].map((t) => <span className="filter-tag" key={t}>{t}</span>)}</div></div></div>
          </div>
        </div>
        <div className="spec-group">
          <p className="spec-group-label">Filter Validation</p>
          <div className="spec-grid two">
            <div className="spec-card"><div className="spec-card-image contain"><img src="/images/pharma/bea-validation.png" alt="Filter validation process" loading="lazy" /></div><div className="spec-card-body"><h4>Validation Services</h4><ul className="spec-list">{filterValidation.map((v) => <li key={v}>{v}</li>)}</ul></div></div>
            <article className="tisla-card"><div className="tisla-card-image dual"><img src="/images/pharma/bea-integrity-test-benchtop.png" alt="Integrity Test Machine — benchtop unit" loading="lazy" /><img src="/images/pharma/bea-integrity-test-handheld.png" alt="Integrity Test Machine — handheld reader" loading="lazy" /></div><span>Integrity Test Machine — benchtop unit + handheld reader</span></article>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection value="apis-excipients" header={<><Eyebrow>05 — RAW MATERIAL</Eyebrow><h2>APIs and excipients, sourced and certified.</h2></>}>
        <div className="spec-group">
          <p className="spec-group-label">Active Pharmaceutical Ingredients (API)</p>
          <div className="api-table-wrap"><table className="api-table"><thead><tr><th>Ingredient</th><th>Category</th></tr></thead><tbody>{apiList.map(([name, cat]) => <tr key={name}><td>{name}</td><td>{cat}</td></tr>)}</tbody></table></div>
        </div>
        <div className="spec-group">
          <p className="spec-group-label">Excipients</p>
          <div className="excipient-grid">{excipients.map((e, i) => <span className="excipient-chip" key={`${e}-${i}`}>{e}</span>)}</div>
          <p className="excipient-note">And a great deal more. Our excipient portfolio extends well beyond this selection. Tell us what your formulation calls for and we will source it.</p>
        </div>
      </AccordionSection>
    </AccordionGroup>

    <section id="trusted-partners" className="section section-tan"><Container><Eyebrow>TRUSTED PARTNERS</Eyebrow><h2>Specialists behind every supply chain.</h2><div className="card-grid three">{partners.map(([name, detail, logo, url]) => <a className="partner-card" href={url} target="_blank" rel="noreferrer" key={name}><div className="partner-logo"><img src={logo} alt={name} loading="lazy" /></div><h3>{name}</h3>{detail && <p>{detail}</p>}</a>)}</div></Container></section>
    <TrustStrip />
    <Faq items={faqItems} />
    <ClosingCta title="Source With Confidence" description="Tell us what your line needs — raw materials, lab equipment, or turnkey facility infrastructure — and a specialist will get back to you with a quote." buttons={['Contact Us', 'Contact a Specialist']} links={['/contact']} /></main></SiteShell>
}
