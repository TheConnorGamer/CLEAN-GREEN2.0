import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setVal(Math.round(ease * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function TrustBar() {
  return (
    <section style={{
      background: 'var(--offwhite)',
      borderBottom: '1px solid var(--border-light)',
      padding: '0 32px',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div id="trust-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>

          {/* 500+ */}
          <div style={{
            padding: '52px 48px 52px 0',
            borderRight: '1px solid var(--border-light)',
          }}>
            <div style={{
              width: '32px', height: '3px',
              background: 'var(--forest)',
              borderRadius: '2px',
              marginBottom: '20px',
            }} />
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 700, color: 'var(--charcoal)',
              lineHeight: 1, letterSpacing: '-0.04em',
              marginBottom: '10px',
            }}>
              <CountUp target={500} suffix="+" />
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '4px' }}>
              Properties serviced
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>
              Across Winnipeg
            </div>
          </div>

          {/* 5 Star */}
          <div style={{
            padding: '52px 48px',
            borderRight: '1px solid var(--border-light)',
          }}>
            <div style={{
              width: '32px', height: '3px',
              background: '#e8a020',
              borderRadius: '2px',
              marginBottom: '20px',
            }} />
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 700, color: 'var(--charcoal)',
              lineHeight: 1, letterSpacing: '-0.04em',
              marginBottom: '10px',
              display: 'flex', alignItems: 'baseline', gap: '8px',
            }}>
              <span>5.0</span>
              <span style={{ fontSize: '28px', color: '#e8a020' }}>★</span>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '4px' }}>
              Google rating
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>
              Consistently top-rated
            </div>
          </div>

          {/* 2023 */}
          <div style={{
            padding: '52px 48px',
            borderRight: '1px solid var(--border-light)',
          }}>
            <div style={{
              width: '32px', height: '3px',
              background: 'var(--forest)',
              borderRadius: '2px',
              marginBottom: '20px',
            }} />
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 700, color: 'var(--charcoal)',
              lineHeight: 1, letterSpacing: '-0.04em',
              marginBottom: '10px',
            }}>
              2023
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '4px' }}>
              Founded
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>
              Locally owned from day one
            </div>
          </div>

          {/* Phone */}
          <div style={{ padding: '52px 0 52px 48px' }}>
            <div style={{
              width: '32px', height: '3px',
              background: 'var(--forest)',
              borderRadius: '2px',
              marginBottom: '20px',
            }} />
            <a href="tel:2048993566" style={{ textDecoration: 'none' }}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(26px, 2.8vw, 38px)',
                fontWeight: 700, color: 'var(--forest)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '10px',
              }}>
                204-899-3566
              </div>
            </a>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '4px' }}>
              Direct line
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>
              Idan or Tristin picks up
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #trust-grid > div:nth-child(2) { border-right: none !important; }
          #trust-grid > div:nth-child(3) {
            border-right: 1px solid var(--border-light) !important;
            border-top: 1px solid var(--border-light) !important;
          }
          #trust-grid > div:nth-child(4) {
            border-top: 1px solid var(--border-light) !important;
            padding-left: 48px !important;
          }
        }
        @media (max-width: 520px) {
          #trust-grid { grid-template-columns: 1fr !important; }
          #trust-grid > div {
            border-right: none !important;
            border-top: 1px solid var(--border-light) !important;
            padding: 32px 0 !important;
          }
          #trust-grid > div:first-child { border-top: none !important; }
        }
      `}</style>
    </section>
  )
}
