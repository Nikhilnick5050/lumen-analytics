export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const FEATURES = [
  { icon: 'chart', title: 'Real-time dashboards', desc: 'Live product metrics stream in as events happen. No refresh, no waiting, no stale numbers.' },
  { icon: 'funnel', title: 'Funnels & retention', desc: 'See exactly where users drop off and what keeps them coming back, with cohort-level detail.' },
  { icon: 'flag', title: 'Feature flags', desc: 'Ship behind flags, roll out gradually, and measure impact before going wide.' },
  { icon: 'bell', title: 'Smart alerts', desc: 'Get notified the moment a metric crosses a threshold you care about.' },
  { icon: 'users', title: 'Session replay', desc: 'Watch real user sessions to understand friction and fix it fast.' },
  { icon: 'lock', title: 'Privacy-first', desc: 'Cookieless tracking, EU data residency, and SOC 2 Type II compliance built in.' },
]

export const STEPS = [
  { title: 'Connect your data', desc: 'Drop in a lightweight SDK or pipe events from your existing stack in minutes.' },
  { title: 'Explore insights', desc: 'Query, segment, and visualize with a fast, intuitive interface.' },
  { title: 'Act with confidence', desc: 'Turn insight into action with flags, alerts, and shareable reports.' },
]

export const USE_CASES = [
  { title: 'Product teams', desc: 'Understand feature adoption and prioritize the roadmap with evidence.' },
  { title: 'Growth teams', desc: 'Track activation, retention, and conversion across every channel.' },
  { title: 'Engineering', desc: 'Monitor performance and reliability alongside product behavior.' },
  { title: 'Executives', desc: 'Get a clear, always-current view of the metrics that matter.' },
]

export const STATS = [
  { value: '2.4B+', label: 'Events processed daily' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '12k+', label: 'Teams onboard' },
  { value: '4.9/5', label: 'Average rating' },
]

export const TESTIMONIALS = [
  { quote: 'Lumen replaced three tools for us. We finally have one source of truth for product data.', name: 'Sarah Chen', role: 'VP Product, Northwind', initials: 'SC' },
  { quote: 'The session replay alone paid for itself. We found and fixed a checkout bug in an afternoon.', name: 'Marcus Reid', role: 'Head of Growth, Brightline', initials: 'MR' },
  { quote: 'Setup took under ten minutes. The dashboards are fast, clean, and actually pleasant to use.', name: 'Priya Nair', role: 'Engineering Lead, Loopwork', initials: 'PN' },
]

export const PRICING = [
  { name: 'Starter', price: '$0', period: 'forever', desc: 'For side projects and early experiments.', features: ['Up to 10k events/mo', '3 dashboards', '7-day data retention', 'Community support'], cta: 'Start free', featured: false },
  { name: 'Growth', price: '$49', period: 'per month', desc: 'For growing teams that need real insight.', features: ['Up to 1M events/mo', 'Unlimited dashboards', '12-month retention', 'Funnels & retention', 'Priority support'], cta: 'Start 14-day trial', featured: true },
  { name: 'Scale', price: 'Custom', period: 'annual', desc: 'For organizations with advanced needs.', features: ['Unlimited events', 'SSO & SAML', 'EU data residency', 'Dedicated success manager', 'Custom SLAs'], cta: 'Contact sales', featured: false },
]

export const FAQS = [
  { q: 'How long does setup take?', a: 'Most teams are live in under ten minutes. Drop in our SDK, or pipe events from Segment, RudderStack, or your own backend.' },
  { q: 'Is there a free plan?', a: 'Yes. The Starter plan is free forever with up to 10k events per month — no credit card required.' },
  { q: 'How is Lumen different from other analytics tools?', a: 'We combine real-time dashboards, funnels, feature flags, and session replay in one fast, privacy-first platform.' },
  { q: 'Is my data secure?', a: 'Absolutely. We are SOC 2 Type II compliant, offer EU data residency, and use cookieless tracking by default.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Plans are month-to-month and you can cancel or downgrade at any time from your billing settings.' },
]