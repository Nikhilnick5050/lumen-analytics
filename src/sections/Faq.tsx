import { Accordion } from '../components/ui/Accordion'
import { FAQS } from '../data/content'
import './Faq.css'

export function Faq() {
  const items = FAQS.map((f) => ({ id: f.q, question: f.q, answer: f.a }))
  return (
    <section className="section" id="faq">
      <div className="container faq__container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-sub">Everything you need to know before getting started.</p>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  )
}