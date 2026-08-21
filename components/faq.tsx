'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import { Container, Eyebrow } from '@/components/site-shell'

export type FaqItem = { question: string; answer: string }

export function Faq({ items, title = 'Frequently Asked Questions', tan = false }: { items: FaqItem[]; title?: string; tan?: boolean }) {
  return (
    <section className={tan ? 'section section-tan faq-section' : 'section faq-section'}>
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <h2>{title}</h2>
        <Accordion.Root className="faq-list" multiple>
          {items.map((item) => (
            <Accordion.Item key={item.question} value={item.question} className="faq-item">
              <Accordion.Header render={<h3 />}>
                <Accordion.Trigger className="faq-trigger">
                  {item.question}
                  <ChevronDown className="faq-chevron" aria-hidden="true" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="faq-panel">
                <p className="faq-answer">{item.answer}</p>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  )
}
