import { Card } from '../components/ui/Card'
import { Icon, type IconName } from '../components/ui/Icon'
import { FEATURES } from '../data/content'
import './Features.css'

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2 className="section-title">Everything you need to understand your product</h2>
          <p className="section-sub">A complete analytics toolkit that grows with you — from first event to enterprise scale.</p>
        </div>
        <div className="features__grid">
          {FEATURES.map((f) => (
            <Card key={f.title} interactive className="features__card">
              <div className="features__icon"><Icon name={f.icon as IconName} width={22} height={22} /></div>
              <h3 className="features__title">{f.title}</h3>
              <p className="features__desc">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}