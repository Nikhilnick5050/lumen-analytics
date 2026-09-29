import { STATS } from '../data/content'
import './Stats.css'

export function Stats() {
  return (
    <section className="section section--tight" id="stats">
      <div className="container">
        <div className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}