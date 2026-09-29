import { Card } from '../components/ui/Card'
import { TESTIMONIALS } from '../data/content'
import './Testimonials.css'

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">Loved by teams who ship</h2>
          <p className="section-sub">Don't take our word for it — here's what our customers say.</p>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="testimonials__card">
              <div className="testimonials__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="testimonials__quote">"{t.quote}"</blockquote>
              <div className="testimonials__person">
                <span className="testimonials__avatar" aria-hidden="true">{t.initials}</span>
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__role">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}