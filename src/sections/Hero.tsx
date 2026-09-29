import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Icon } from '../components/ui/Icon'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__copy">
          <Badge tone="brand"><Icon name="spark" width={14} height={14} /> New: Session Replay is live</Badge>
          <h1 className="hero__title">Understand your product, <span className="hero__accent">in real time.</span></h1>
          <p className="hero__sub">Lumen turns raw product events into clear, actionable insight — dashboards, funnels, and replays that help your team ship what matters.</p>
          <div className="hero__actions">
            <Button size="lg" onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}>Start free <Icon name="arrow" width={18} height={18} /></Button>
            <Button size="lg" variant="outline" onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}>See how it works</Button>
          </div>
          <p className="hero__note"><Icon name="check" width={15} height={15} /> Free forever plan · No credit card required</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__window">
            <div className="hero__window-bar">
              <span className="hero__dot" /><span className="hero__dot" /><span className="hero__dot" />
              <span className="hero__window-title">Lumen — Overview</span>
            </div>
            <div className="hero__window-body">
              <div className="hero__kpis">
                <div className="hero__kpi"><span className="hero__kpi-label">Active users</span><span className="hero__kpi-value">48,291</span><span className="hero__kpi-delta">+12.4%</span></div>
                <div className="hero__kpi"><span className="hero__kpi-label">Conversion</span><span className="hero__kpi-value">8.7%</span><span className="hero__kpi-delta">+2.1%</span></div>
                <div className="hero__kpi"><span className="hero__kpi-label">Retention</span><span className="hero__kpi-value">64%</span><span className="hero__kpi-delta">+5.0%</span></div>
              </div>
              <div className="hero__chart">
                <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 130 C40 120 60 90 90 95 S140 60 170 70 S220 40 250 45 S300 20 330 25 S380 10 400 12 L400 160 L0 160 Z" fill="url(#heroFill)" />
                  <path d="M0 130 C40 120 60 90 90 95 S140 60 170 70 S220 40 250 45 S300 20 330 25 S380 10 400 12" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}