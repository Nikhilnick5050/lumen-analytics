import { useState, type ReactNode } from 'react'
import './Tabs.css'

export interface Tab { id: string; label: string; content: ReactNode }

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id)
  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} role="tab" id={`tab-${t.id}`} aria-selected={active === t.id} aria-controls={`panel-${t.id}`} className={`tabs__tab ${active === t.id ? 'tabs__tab--active' : ''}`} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== t.id} className="tabs__panel">
          {t.content}
        </div>
      ))}
    </div>
  )
}