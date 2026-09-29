import { useEffect, useState } from 'react'
import { Button } from './ui/Button'
import { useTheme } from '../hooks/useTheme'
import { NAV_LINKS } from '../data/content'
import './Navbar.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" aria-label="Lumen home">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#34D399" />
            <path d="M9 22V10l7 8 7-8v12" fill="none" stroke="#0f172a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="nav__brand-name">Lumen</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="nav__link">{l.label}</a>)}
        </nav>

        <div className="nav__actions">
          <button className="nav__theme" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            )}
          </button>

          <a href="#login" className="nav__login">Login</a>
          <a href="#pricing" className="nav__cta"><Button size="sm">Get Started</Button></a>

          <button className="nav__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span className={`nav__burger-line ${open ? 'is-open' : ''}`} />
            <span className={`nav__burger-line ${open ? 'is-open' : ''}`} />
            <span className={`nav__burger-line ${open ? 'is-open' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        <nav className="nav__mobile-links" aria-label="Mobile">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="#login" className="nav__mobile-link" onClick={() => setOpen(false)}>Login</a>
          <a href="#pricing" onClick={() => setOpen(false)}><Button fullWidth>Get Started</Button></a>
        </nav>
      </div>
    </header>
  )
}