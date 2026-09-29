import { useState, type ReactNode } from 'react'
import './Accordion.css'

export interface AccordionItem { id: string; question: string; answer: ReactNode }

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  return (
    <div className="accordion">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id} className="accordion__item">
            <button className="accordion__trigger" aria-expanded={open} aria-controls={`acc-${item.id}`} onClick={() => setOpenId(open ? null : item.id)}>
              <span>{item.question}</span>
              <svg className={`accordion__icon ${open ? 'accordion__icon--open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div id={`acc-${item.id}`} className="accordion__panel" hidden={!open}>
              <div className="accordion__content">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}