import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { useToast } from '../components/ui/Toast'
import { PRICING } from '../data/content'
import './Pricing.css'

export function Pricing() {
  const { toast } = useToast()

  const handleCta = (plan: string) => {
    if (plan === 'Scale') {
      toast('Opening sales contact form…', 'info')
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      toast(`You selected the ${plan} plan. Redirecting to signup…`, 'success')
    }
  }

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-sub">Start free and scale as you grow. No hidden fees, cancel anytime.</p>
        </div>
        <div className="pricing__grid">
          {PRICING.map((p) => (
            <div key={p.name} className={`pricing__card ${p.featured ? 'pricing__card--featured' : ''}`}>
              {p.featured && <span className="pricing__flag">Most popular</span>}
              <h3 className="pricing__name">{p.name}</h3>
              <div className="pricing__price">
                <span className="pricing__amount">{p.price}</span>
                <span className="pricing__period">/{p.period}</span>
              </div>
              <p className="pricing__desc">{p.desc}</p>
              <ul className="pricing__features">
                {p.features.map((f) => (
                  <li key={f} className="pricing__feature"><Icon name="check" width={16} height={16} />{f}</li>
                ))}
              </ul>
              <Button fullWidth variant={p.featured ? 'primary' : 'outline'} onClick={() => handleCta(p.name)}>{p.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}