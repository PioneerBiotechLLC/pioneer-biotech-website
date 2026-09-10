'use client'

import { Container, Eyebrow } from '@/components/site-shell'
import { FaqAccordionList, type FaqItem } from '@/components/faq-accordion-list'

export type { FaqItem }

export function Faq({ items, title = 'Frequently Asked Questions', tan = false }: { items: FaqItem[]; title?: string; tan?: boolean }) {
  return (
    <section className={tan ? 'section section-tan faq-section' : 'section faq-section'}>
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <h2>{title}</h2>
        <FaqAccordionList
          items={items}
          rootClassName="faq-list"
          itemClassName="faq-item"
          triggerClassName="faq-trigger"
          chevronClassName="faq-chevron"
          panelClassName="faq-panel"
          answerClassName="faq-answer"
        />
      </Container>
    </section>
  )
}
