import { Card } from '../components/ui/Card'
import { Icon } from '../components/ui/Icon'
import { USE_CASES } from '../data/content'
import './Benefits.css'

export function Benefits() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Use cases</span>
          <h2 className="section-title">Built for every team that ships</h2>
          <p className="section-sub">Lumen gives each part of your organization the view it needs — without the tool sprawl.</p>
        </div>
        <div className="benefits__grid">
          {USE_CASES.map((u) => (
            <Card key={u.title} className="benefits__card">
              <Icon name="check" width={18} height={18} className="benefits__check" />
              <h3 className="benefits__title">{u.title}</h3>
              <p className="benefits__desc">{u.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}