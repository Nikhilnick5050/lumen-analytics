import { NAV_LINKS } from '../data/content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#34D399" />
              <path d="M9 22V10l7 8 7-8v12" fill="none" stroke="#0f172a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Lumen
          </a>
          <p className="footer__tagline">Product analytics for modern teams.</p>
        </div>

        <nav className="footer__col" aria-label="Product">
          <h4 className="footer__heading">Product</h4>
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="footer__link">{l.label}</a>)}
        </nav>

        <nav className="footer__col" aria-label="Company">
          <h4 className="footer__heading">Company</h4>
          <a href="#about" className="footer__link">About</a>
          <a href="#testimonials" className="footer__link">Customers</a>
          <a href="#faq" className="footer__link">FAQ</a>
          <a href="#contact" className="footer__link">Contact</a>
        </nav>

        <nav className="footer__col" aria-label="Legal">
          <h4 className="footer__heading">Legal</h4>
          <a href="#privacy" className="footer__link">Privacy</a>
          <a href="#terms" className="footer__link">Terms</a>
          <a href="#security" className="footer__link">Security</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Lumen, Inc. All rights reserved.</p>
        <div className="footer__social">
          <a href="#twitter" aria-label="Twitter / X" className="footer__social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"/></svg>
          </a>
          <a href="#github" aria-label="GitHub" className="footer__social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z"/></svg>
          </a>
          <a href="#linkedin" aria-label="LinkedIn" className="footer__social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 112.5 6a2.5 2.5 0 012.48-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}