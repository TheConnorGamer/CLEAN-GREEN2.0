export default function About() {
  return (
    <section id="about" style={{ background: 'var(--forest-deep)', padding: '0 0 100px' }}>

      {/* Full-width photo bar */}
      <div style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '80px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(15,36,24,0.3) 0%, rgba(15,36,24,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '48px', left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '100%', padding: '0 32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
            }}>Who we are</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4.5vw, 60px)',
            fontWeight: 600, color: 'white',
            lineHeight: 1.08, letterSpacing: '-0.03em',
          }}>
            Meet the people<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>behind Clean &amp; Green.</em>
          </h2>
        </div>
      </div>

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>

        {/* Two-column story */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginBottom: '80px',
        }}>

          {/* Left — story */}
          <div>
            {/* Pull quote */}
            <blockquote style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(20px, 2.2vw, 28px)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.45,
              letterSpacing: '-0.01em',
              borderLeft: '3px solid rgba(74,222,128,0.5)',
              paddingLeft: '28px',
              marginBottom: '40px',
            }}>
              "We started this because we wanted to build something real.
              Not a side job. A proper business — the kind where you're proud
              of every property you leave behind."
            </blockquote>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)', marginBottom: '36px',
            }}>
              — Idan &amp; Tristin, Founders
            </div>

            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '20px',
            }}>
              Clean &amp; Green Services started in Winnipeg in 2023. No investors. No franchise fee. Just two people who decided to do the work properly and let the results speak.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.65)', lineHeight: 1.75,
            }}>
              Every property gets treated like it matters — because to the person who lives there, it does. That's the standard Idan and Tristin hold themselves to on every single visit.
            </p>

            {/* Founders row */}
            <div style={{
              display: 'flex', gap: '32px', marginTop: '48px',
              paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              {[
                { name: 'Idan', role: 'Co-Founder · Operations' },
                { name: 'Tristin', role: 'Co-Founder · Client Relations' },
              ].map(f => (
                <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'rgba(74,222,128,0.1)',
                    border: '2px solid rgba(74,222,128,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: 'Playfair Display, serif', fontSize: '20px',
                      fontWeight: 700, color: 'white',
                    }}>{f.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '3px' }}>
                      {f.name}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                      {f.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — how they operate */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginBottom: '32px',
            }}>
              How they operate
            </div>
            {[
              {
                label: 'They show up on time.',
                detail: "If we say 9am, we're there at 9am. Not 9:20. Not 'running a bit behind'. On time, every time.",
              },
              {
                label: 'They answer the phone.',
                detail: "Call 204-899-3566 right now. Idan or Tristin picks up. Not an answering service. Not a call back in 48 hours.",
              },
              {
                label: 'The price they quote is the price.',
                detail: "No surprises when the invoice arrives. What we say it will cost is what it costs.",
              },
              {
                label: 'They send photos when it\'s done.',
                detail: "Every job. Before and after photos sent directly to the homeowner — even if they weren't home.",
              },
              {
                label: 'The same people, every time.',
                detail: "You book Idan and Tristin. You get Idan and Tristin. Not a different crew each week.",
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: '24px 0',
                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'rgba(74,222,128,0.12)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '1px',
                }}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <polyline points="2 6 5 9 10 3" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600,
                    color: 'white', marginBottom: '5px',
                  }}>{item.label}</div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)', lineHeight: 1.6,
                  }}>{item.detail}</div>
                </div>
              </div>
            ))}

            {/* Instagram */}
            <a
              href="https://instagram.com/cleanandgreenservices"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                marginTop: '32px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px', padding: '18px 20px',
                textDecoration: 'none',
              }}
            >
              <div style={{
                width: '36px', height: '36px', flexShrink: 0, borderRadius: '9px',
                background: 'linear-gradient(135deg, #f09433,#dc2743,#bc1888)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: 'white' }}>@cleanandgreenservices</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Follow our work on Instagram</div>
              </div>
              <div style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: '18px' }}>→</div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  )
}
