'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'

export type FaqItem = { question: string; answer: string }

// The Accordion.Root/Item/Header/Trigger/Panel wiring shared by both FAQ
// components (components/faq.tsx for the main site, medical-devices/sections/faq.tsx
// for the A1 Frame sub-brand). The two brands render genuinely different
// surrounding chrome (Reveal animation, heading markup, class systems), so only
// this inner list — identical in shape between them — is shared; each caller
// supplies its own classNames to keep its exact existing look.
export function FaqAccordionList({
  items,
  rootClassName,
  itemClassName,
  triggerClassName,
  chevronClassName,
  panelClassName,
  answerClassName,
}: {
  items: FaqItem[]
  rootClassName?: string
  itemClassName?: string
  triggerClassName?: string
  chevronClassName?: string
  panelClassName?: string
  answerClassName?: string
}) {
  return (
    <Accordion.Root className={rootClassName} multiple>
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question} className={itemClassName}>
          <Accordion.Header render={<h3 />}>
            <Accordion.Trigger className={triggerClassName}>
              {item.question}
              <ChevronDown className={chevronClassName} aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className={panelClassName}>
            <p className={answerClassName}>{item.answer}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
