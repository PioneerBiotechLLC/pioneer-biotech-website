'use client'

import { useEffect, useState } from 'react'
import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/site-shell'

export function AccordionGroup({ children, defaultValue }: { children: React.ReactNode; defaultValue: string[] }) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) setValue((prev) => (prev.includes(hash) ? prev : [...prev, hash]))
  }, [])

  return <Accordion.Root multiple keepMounted value={value} onValueChange={setValue}>{children}</Accordion.Root>
}

export function AccordionSection({ value, tan, header, attribution, children }: { value: string; tan?: boolean; header: React.ReactNode; attribution?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Accordion.Item value={value} id={value} className={tan ? 'section section-tan product-category' : 'section product-category'}>
      <Container>
        <Accordion.Header render={<div />}>
          <Accordion.Trigger className="category-trigger">
            <div className="category-head">{header}{attribution}</div>
            <ChevronDown className="category-chevron" aria-hidden="true" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className="category-panel">
          <div className="category-panel-inner">{children}</div>
        </Accordion.Panel>
      </Container>
    </Accordion.Item>
  )
}
