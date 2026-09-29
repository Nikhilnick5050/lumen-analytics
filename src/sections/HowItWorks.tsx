import { STEPS } from '../data/content'
import './HowItWorks.css'

export function HowItWorks() {
  return (
    <section className="section section--tight" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">From data to decision in three steps</h2>
          <p className="section-sub">No data team required. Get from raw events to confident decisions fast.</p>
        </div>
        <ol className="how__steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="how__step">
              <span className="how__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="how__title">{s.title}</h3>
              <p className="how__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}