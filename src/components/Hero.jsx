export default function Hero() {
  const trustPoints = [
    'Owner operated — Idan & Tristin do the work',
    'You call, they answer. Every time.',
    'Serving all Winnipeg neighbourhoods',
    'Free estimates, no obligation',
  ]

  return (
    <section style={{
      background: 'var(--forest-deep)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grain texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
      }} />

      {/* Main content — two columns */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1360px', margin: '0 auto',
        padding: '0 32px',
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        alignItems: 'center',
        minHeight: '100vh',
      }}>

        {/* LEFT — copy */}
        <div style={{ padding: '120px 64px 120px 0' }}>

          {/* Location pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '40px',
            padding: '7px 16px 7px 10px',
            marginBottom: '40px',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 0 3px rgba(74,222,128,0.25)',
            }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500,
              color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em',
            }}>
              Winnipeg, Manitoba · Est. 2023
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(40px, 5vw, 76px)',
            fontWeight: 600, color: 'white',
            lineHeight: 1.06, letterSpacing: '-0.025em',
            marginBottom: '24px',
          }}>
            Your property<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>
              deserves better.
            </em>
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7, maxWidth: '440px',
            marginBottom: '40px',
          }}>
            Window cleaning, lawn care, and property maintenance
            across Winnipeg — by two people who take the work seriously.
          </p>

          {/* Trust checkmarks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
            {trustPoints.map((pt, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'rgba(74,222,128,0.15)',
                  border: '1px solid rgba(74,222,128,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <polyline points="2 6 5 9 10 3" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.72)', fontWeight: 400,
                }}>
                  {pt}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
            <a href="#contact" style={{
              display: 'inline-block',
              background: 'white', color: 'var(--forest)',
              fontFamily: 'Inter, sans-serif', fontSize: '14px',
              fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '17px 36px', borderRadius: '3px',
            }}>
              Get Free Estimate
            </a>
            <a href="#before-after" style={{
              display: 'inline-block',
              background: 'transparent', color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Inter, sans-serif', fontSize: '14px',
              fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: '3px',
              border: '1.5px solid rgba(255,255,255,0.25)',
            }}>
              View Our Work
            </a>
          </div>

          {/* Phone — large and obvious */}
          <a href="tel:2048993566" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.18 2 2 0 012.1 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '22px',
              fontWeight: 600, color: 'white', letterSpacing: '-0.02em',
            }}>
              204-899-3566
            </span>
          </a>
        </div>

        {/* RIGHT — transformation visual */}
        <div style={{
          position: 'relative',
          height: '100vh',
          minHeight: '600px',
        }}>
          {/* Main photo — lush green lawn */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          {/* Gradient overlay to blend left edge */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, var(--forest-deep) 0%, transparent 35%)',
          }} />
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
            background: 'linear-gradient(to top, var(--forest-deep) 0%, transparent 100%)',
          }} />

          {/* Floating trust card */}
          <div style={{
            position: 'absolute', bottom: '80px', left: '-20px',
            background: 'white',
            borderRadius: '6px',
            padding: '20px 24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            zIndex: 10,
            minWidth: '220px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--forest)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--charcoal)', lineHeight: 1.2 }}>
                  Job complete
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Photos sent to homeowner
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#e8a020" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'var(--text-muted)', marginLeft: '4px' }}>
                5-star Google review
              </span>
            </div>
          </div>

          {/* Service badge top-right */}
          <div style={{
            position: 'absolute', top: '120px', right: '24px',
            background: 'rgba(15,36,24,0.88)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            padding: '14px 18px',
            zIndex: 10,
          }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginBottom: '4px',
            }}>
              Services
            </div>
            {['Window Cleaning', 'Lawn Care', 'Spring Cleanup', 'Weed Control'].map(s => (
              <div key={s} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '12px',
                color: 'rgba(255,255,255,0.8)', paddingTop: '4px',
              }}>
                — {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            display: none !important;
          }
          .hero-left {
            padding: 120px 0 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
