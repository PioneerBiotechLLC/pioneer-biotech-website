'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/medical-devices/reveal'

export type FaqItem = { question: string; answer: string }

export function Faq({ items, title = 'Frequently asked questions' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-primary">FAQ</p>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-surface-dark md:text-4xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <Accordion.Root className="mt-10 border-t border-border" multiple>
            {items.map((item) => (
              <Accordion.Item key={item.question} value={item.question} className="border-b border-border">
                <Accordion.Header render={<h3 />}>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-semibold text-surface-dark transition-colors hover:text-primary">
                    {item.question}
                    <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-data-[panel-open]:rotate-180" aria-hidden="true" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-300 ease-out data-[starting-style]:h-0 data-[ending-style]:h-0">
                  <p className="max-w-xl pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  )
}
