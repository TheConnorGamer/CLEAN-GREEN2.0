import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#before-after' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(250,248,244,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(26,58,42,0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

            {/* Logo */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '6px 14px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: scrolled ? 'none' : '0 2px 16px rgba(0,0,0,0.25)',
                transition: 'box-shadow 0.3s',
              }}>
                <img
                  src="/LOGO.png"
                  alt="Clean & Green Services"
                  style={{
                    height: '56px',
                    width: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </a>

            {/* Desktop nav */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {links.map(l => {
                const id = l.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={e => handleNavClick(e, l.href)}
                    style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '0.03em',
                      color: scrolled
                        ? (isActive ? 'var(--forest)' : 'var(--charcoal-mid)')
                        : (isActive ? 'white' : 'rgba(255,255,255,0.75)'),
                      transition: 'color 0.2s',
                      textDecoration: 'none',
                      paddingBottom: '2px',
                      borderBottom: isActive
                        ? (scrolled ? '2px solid var(--forest)' : '2px solid rgba(255,255,255,0.6)')
                        : '2px solid transparent',
                    }}
                  >
                    {l.label}
                  </a>
                )
              })}
              <a
                href="tel:2048993566"
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700,
                  letterSpacing: '0.03em',
                  color: scrolled ? 'white' : 'var(--forest-deep)',
                  background: scrolled ? 'var(--forest)' : 'white',
                  padding: '9px 20px', borderRadius: '3px',
                  transition: 'all 0.2s', textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                204-899-3566
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'none', background: 'none', border: 'none',
                cursor: 'pointer', padding: '8px',
                flexDirection: 'column', gap: '5px',
              }}
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#1c1c1c' : 'white'} strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : [0,1,2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: '24px', height: '2px',
                    background: scrolled ? 'var(--charcoal)' : 'white',
                    borderRadius: '2px', transition: 'all 0.2s',
                  }} />
                ))
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'var(--offwhite)',
            borderTop: '1px solid var(--border-light)',
            padding: '8px 24px 28px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => handleNavClick(e, l.href)}
                style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500,
                  color: activeSection === l.href.replace('#', '') ? 'var(--forest)' : 'var(--charcoal)',
                  padding: '14px 0', borderBottom: '1px solid var(--border-light)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:2048993566"
              style={{
                display: 'block', marginTop: '16px',
                background: 'var(--forest)', color: 'white',
                textAlign: 'center', padding: '17px',
                borderRadius: '3px', fontFamily: 'Inter, sans-serif',
                fontSize: '16px', fontWeight: 700, letterSpacing: '0.03em',
                textDecoration: 'none',
              }}
            >
              Call 204-899-3566
            </a>
          </div>
        )}
      </nav>

      {/* Sticky mobile CTA bar — fixed bottom */}
      <div className="mobile-sticky-cta" style={{ display: 'none' }}>
        <a href="tel:2048993566" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '10px', background: 'var(--forest)', color: 'white',
          fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700,
          letterSpacing: '0.03em', padding: '18px',
          textDecoration: 'none', width: '100%',
        }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call 204-899-3566
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-sticky-cta {
            display: block !important;
            position: fixed; bottom: 0; left: 0; right: 0;
            z-index: 99;
            box-shadow: 0 -4px 24px rgba(0,0,0,0.18);
          }
        }
      `}</style>
    </>
  )
}
