import { useState } from 'react'

const reviews = [
  {
    quote: "Idan showed up exactly when he said he would. Not 10 minutes late, not a text saying he's running behind. Right on time, did the job properly, sent photos after. This is exactly what you want from a local service company.",
    name: "Mark T.",
    neighbourhood: "River Heights",
    service: "Window Cleaning",
    date: "May 2025",
  },
  {
    quote: "Best our lawn has looked in years. Not a lazy cut — edged properly, trimmed the borders, cleaned up after themselves. You can tell they actually take pride in the work. We booked them for the whole season.",
    name: "Sarah & James K.",
    neighbourhood: "Tuxedo",
    service: "Lawn Care",
    date: "June 2025",
  },
  {
    quote: "Actually answers the phone. I called three other companies and got voicemail every single time. Tristin picked up on the second ring, gave me a quote right there, job was done two days later.",
    name: "David R.",
    neighbourhood: "St. Vital",
    service: "Property Maintenance",
    date: "April 2025",
  },
  {
    quote: "I wasn't home but got before and after photos while I was still at work. My windows hadn't looked like that since we moved in. Screens cleaned too — didn't even ask them to.",
    name: "Linda P.",
    neighbourhood: "Fort Garry",
    service: "Window Cleaning",
    date: "March 2025",
  },
  {
    quote: "Full spring cleanup after a brutal winter. The yard was a mess — debris, dead patches, salt damage everywhere. They cleared the whole thing and the property looked incredible by the time they left.",
    name: "Tom & Carla M.",
    neighbourhood: "Charleswood",
    service: "Spring Cleanup",
    date: "April 2025",
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e8a020" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [active, setActive] = useState(0)
  const r = reviews[active]

  return (
    <section id="reviews" style={{ background: 'var(--cream)', padding: '100px 32px' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>

        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px', marginBottom: '56px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--forest)' }} />
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest)',
              }}>What clients say</span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(30px, 3.8vw, 52px)',
              fontWeight: 600, color: 'var(--charcoal)',
              lineHeight: 1.08, letterSpacing: '-0.03em',
            }}>
              Real Winnipeg homeowners.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Real results.</em>
            </h2>
          </div>

          {/* Google badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            background: 'white', border: '1px solid var(--border-light)',
            borderRadius: '6px', padding: '16px 24px',
          }}>
            <div style={{
              fontFamily: 'Playfair Display, serif', fontSize: '40px',
              fontWeight: 700, color: 'var(--charcoal)', lineHeight: 1,
            }}>5.0</div>
            <div>
              <Stars />
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                color: 'var(--text-muted)', letterSpacing: '0.06em',
                textTransform: 'uppercase', marginTop: '5px',
              }}>Google Rating</div>
            </div>
          </div>
        </div>

        {/* Featured large quote */}
        <div style={{
          background: 'var(--forest-deep)',
          borderRadius: '6px',
          padding: '64px 72px 56px',
          marginBottom: '16px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40px', left: '48px',
            fontFamily: 'Georgia, serif', fontSize: '280px', fontWeight: 700,
            color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none',
            pointerEvents: 'none',
          }}>"</div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Service + date tags */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.07)',
                padding: '5px 12px', borderRadius: '40px',
              }}>{r.service}</span>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)',
                padding: '5px 12px', borderRadius: '40px',
              }}>{r.date}</span>
            </div>

            <blockquote style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(19px, 2.3vw, 30px)',
              fontWeight: 400, fontStyle: 'italic',
              color: 'white', lineHeight: 1.5,
              letterSpacing: '-0.015em',
              maxWidth: '800px', marginBottom: '44px',
            }}>
              "{r.quote}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Playfair Display, serif', fontSize: '17px',
                  fontWeight: 600, color: 'white', flexShrink: 0,
                }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: 'white' }}>
                    {r.name}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                    {r.neighbourhood}, Winnipeg
                  </div>
                </div>
              </div>
              <Stars />
            </div>
          </div>
        </div>

        {/* Selector tabs */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '56px' }}>
          {reviews.map((rev, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0,
                background: active === i ? 'var(--forest)' : 'white',
                color: active === i ? 'white' : 'var(--charcoal-mid)',
                border: `1px solid ${active === i ? 'var(--forest)' : 'var(--border-light)'}`,
                padding: '10px 18px', borderRadius: '40px',
                fontFamily: 'Inter, sans-serif', fontSize: '12px',
                fontWeight: active === i ? 600 : 400,
                cursor: 'pointer', transition: 'all 0.15s',
                letterSpacing: '0.02em',
              }}
            >
              {rev.name} · {rev.neighbourhood}
            </button>
          ))}
        </div>

        {/* Secondary mini reviews */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { text: '"Idan showed up exactly on time."', name: 'Mark T.', area: 'River Heights' },
            { text: '"Best lawn it\'s looked in years."', name: 'Sarah K.', area: 'Tuxedo' },
            { text: '"Actually answers the phone."', name: 'David R.', area: 'St. Vital' },
          ].map((m, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '6px',
              padding: '24px',
              border: '1px solid var(--border-light)',
            }}>
              <Stars />
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '16px', fontStyle: 'italic',
                color: 'var(--charcoal)', lineHeight: 1.5,
                margin: '12px 0 16px',
              }}>{m.text}</p>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
                {m.name} — {m.area}, Winnipeg
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #reviews .featured-review { padding: 40px 28px !important; }
          #reviews-mini { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
