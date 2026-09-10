'use client'

import { Reveal } from '@/components/medical-devices/reveal'
import { FaqAccordionList, type FaqItem } from '@/components/faq-accordion-list'

export type { FaqItem }

export function Faq({ items, title = 'Frequently asked questions' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-accent-foreground-strong">FAQ</p>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-surface-dark md:text-4xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <FaqAccordionList
            items={items}
            rootClassName="mt-10 border-t border-border"
            itemClassName="border-b border-border"
            triggerClassName="group flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-semibold text-surface-dark transition-colors hover:text-accent-foreground-strong"
            chevronClassName="size-5 shrink-0 text-accent-foreground-strong transition-transform duration-300 group-data-[panel-open]:rotate-180"
            panelClassName="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-300 ease-out data-[starting-style]:h-0 data-[ending-style]:h-0"
            answerClassName="max-w-xl pb-8 text-sm leading-relaxed text-muted-foreground"
          />
        </Reveal>
      </div>
    </section>
  )
}
