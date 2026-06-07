export default function Footer() {
  return (
    <footer style={{
      background: 'var(--forest-deep)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>

        {/* Top closing statement */}
        <div style={{
          padding: '80px 32px 64px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 600, color: 'white',
              lineHeight: 1.1, letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}>
              Your property.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
                In better hands.
              </em>
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: '380px',
            }}>
              No franchises. No subcontractors. No call centres.
              Just Idan and Tristin — in Winnipeg, doing the work.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <a href="tel:2048993566" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 700, color: 'white',
              letterSpacing: '-0.02em', textDecoration: 'none',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.18 2 2 0 012.1 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              204-899-3566
            </a>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px',
              color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em',
            }}>
              Idan or Tristin picks up. Free estimates.
            </div>
            <a href="#contact" style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '11px 24px', borderRadius: '3px', textDecoration: 'none',
              marginTop: '4px',
            }}>
              Get Free Estimate
            </a>
          </div>
        </div>

        {/* Middle links row */}
        <div style={{
          padding: '48px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              background: 'white',
              borderRadius: '8px',
              padding: '10px 16px',
              display: 'inline-flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}>
              <img
                src="/LOGO.png"
                alt="Clean & Green Services"
                style={{ height: '48px', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}>Winnipeg, Manitoba · Est. 2023</div>
          </div>

          <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: '16px',
              }}>Services</div>
              {['Window Cleaning', 'Lawn Care', 'Spring Cleanup', 'Weed Control', 'Property Maintenance'].map(s => (
                <a key={s} href="#services" style={{
                  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >{s}</a>
              ))}
            </div>

            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: '16px',
              }}>Neighbourhoods</div>
              {['River Heights', 'Tuxedo', 'St. Vital', 'Fort Garry', 'Charleswood', 'All Winnipeg'].map(a => (
                <div key={a} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', marginBottom: '8px',
                }}>{a}</div>
              ))}
            </div>

            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: '16px',
              }}>Connect</div>
              <a href="tel:2048993566" style={{
                display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >204-899-3566</a>
              <a href="https://instagram.com/cleanandgreenservices" target="_blank" rel="noopener noreferrer" style={{
                display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >@cleanandgreenservices</a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          padding: '24px 32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
          }}>
            © {new Date().getFullYear()} Clean &amp; Green Services. Winnipeg, Manitoba.
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            color: 'rgba(255,255,255,0.15)', fontStyle: 'italic',
          }}>
            Owner operated. Always.
          </div>
        </div>
      </div>
    </footer>
  )
}
