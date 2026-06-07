import { useState, useRef, useCallback, useEffect } from 'react'

function Slider({ beforeImg, afterImg, service, neighbourhood, title, story }) {
  const [pos, setPos] = useState(50)
  const [hinted, setHinted] = useState(false)
  const sliderRef = useRef(null)
  const dragging = useRef(false)

  // Hint animation — briefly slides to 35% then back to 50%
  useEffect(() => {
    const t = setTimeout(() => {
      setHinted(true)
      setPos(35)
      setTimeout(() => setPos(50), 600)
    }, 800)
    return () => clearTimeout(t)
  }, [])

  const getPos = useCallback((clientX) => {
    const rect = sliderRef.current.getBoundingClientRect()
    setPos(Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98))
  }, [])

  const onMouseDown = (e) => { dragging.current = true; e.preventDefault() }
  const onMouseMove = useCallback((e) => { if (dragging.current) getPos(e.clientX) }, [getPos])
  const onMouseUp = () => { dragging.current = false }
  const onTouchStart = () => { dragging.current = true }
  const onTouchMove = useCallback((e) => { if (dragging.current) getPos(e.touches[0].clientX) }, [getPos])
  const onTouchEnd = () => { dragging.current = false }

  return (
    <div style={{ background: 'white', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 2px 24px rgba(0,0,0,0.07)' }}>
      {/* Slider image area */}
      <div
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          position: 'relative', height: '380px',
          cursor: 'ew-resize', userSelect: 'none', overflow: 'hidden',
        }}
      >
        {/* BEFORE */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${beforeImg}')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />

        {/* AFTER — clipped to pos% width */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: `${pos}%`,
          overflow: 'hidden',
          transition: hinted ? 'width 0.5s ease' : 'none',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0,
            width: `${(100 / Math.max(pos, 1)) * 100}%`,
            backgroundImage: `url('${afterImg}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
        </div>

        {/* Divider */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0,
          left: `${pos}%`,
          width: '2px',
          background: 'white',
          transform: 'translateX(-50%)',
          zIndex: 10,
          boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
          transition: hinted ? 'left 0.5s ease' : 'none',
        }}>
          {/* Premium handle */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '44px', height: '44px',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 4px 20px rgba(0,0,0,0.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12h8M5 8l-3 4 3 4M19 8l3 4-3 4" stroke="#1a3a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* BEFORE label */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'white', background: 'rgba(0,0,0,0.6)',
          padding: '5px 10px', borderRadius: '3px', zIndex: 5,
          backdropFilter: 'blur(6px)',
        }}>Before</div>

        {/* AFTER label */}
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'white', background: 'rgba(26,58,42,0.8)',
          padding: '5px 10px', borderRadius: '3px', zIndex: 5,
          backdropFilter: 'blur(6px)',
        }}>After</div>

        {/* Drag hint */}
        <div style={{
          position: 'absolute', bottom: '16px', left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'white', background: 'rgba(0,0,0,0.45)',
          padding: '5px 12px', borderRadius: '40px', zIndex: 5,
          backdropFilter: 'blur(6px)', whiteSpace: 'nowrap',
          opacity: hinted ? 0 : 1, transition: 'opacity 0.4s',
          pointerEvents: 'none',
        }}>← Drag to compare →</div>
      </div>

      {/* Caption */}
      <div style={{ padding: '24px 28px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forest)',
          }}>{service}</span>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'var(--text-muted)',
          }}>{neighbourhood}</span>
        </div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 600,
          color: 'var(--charcoal)', letterSpacing: '-0.02em', marginBottom: '8px',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '14px',
          color: 'var(--charcoal-light)', lineHeight: 1.6,
        }}>{story}</p>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const examples = [
    {
      beforeImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=75&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&fit=crop',
      service: 'Lawn Care',
      neighbourhood: 'River Heights, Winnipeg',
      title: 'Overgrown to Sharp',
      story: "Neglected from winter, weeds taking over the edges. One visit — mowed, edged, treated. Homeowner texted us that night saying they couldn't believe the difference.",
    },
    {
      beforeImg: 'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?w=800&q=75&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=75&fit=crop',
      service: 'Window Cleaning',
      neighbourhood: 'Tuxedo, Winnipeg',
      title: 'A Season of Grime — Gone',
      story: "Winnipeg winters film every window with salt, dirt, and oxidation. Inside and out, every pane cleaned to optical clarity. Screens too.",
    },
    {
      beforeImg: 'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?w=800&q=75&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=75&fit=crop',
      service: 'Spring Cleanup',
      neighbourhood: 'Fort Garry, Winnipeg',
      title: 'Winter Recovery',
      story: "Dead growth, salt damage, debris everywhere after a hard season. Full spring reset — cleared, tidied, and ready. Took one afternoon.",
    },
    {
      beforeImg: 'https://images.unsplash.com/photo-1589923188651-268a9765e432?w=800&q=75&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=75&fit=crop',
      service: 'Weed Control',
      neighbourhood: 'Charleswood, Winnipeg',
      title: 'Reclaimed Completely',
      story: "Dandelions and creeping weeds had taken over the front lawn. Treated, removed, and maintained — stays clean for the season.",
    },
  ]

  return (
    <section id="before-after" style={{ background: 'var(--cream)', padding: '100px 32px' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--forest)' }} />
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest)',
              }}>Real results · Winnipeg properties</span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 600, color: 'var(--charcoal)',
              lineHeight: 1.08, letterSpacing: '-0.03em',
            }}>
              Drag and see<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>the difference.</em>
            </h2>
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '15px',
            color: 'var(--charcoal-light)', maxWidth: '320px', lineHeight: 1.65,
          }}>
            Every slider is a real property we've worked on. The results speak for themselves.
          </p>
        </div>

        {/* Grid */}
        <div className="ba-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>
          {examples.map((ex, i) => <Slider key={i} {...ex} />)}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '56px',
          background: 'var(--forest)',
          borderRadius: '6px',
          padding: '48px 56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: 600, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '8px',
            }}>
              Want to see what your property could look like?
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}>
              Call or text for a free estimate. No obligation.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:2048993566" style={{
              display: 'inline-block',
              background: 'white', color: 'var(--forest)',
              fontFamily: 'Inter, sans-serif', fontSize: '14px',
              fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '15px 32px', borderRadius: '3px',
            }}>
              Call 204-899-3566
            </a>
            <a href="#contact" style={{
              display: 'inline-block',
              background: 'transparent', color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Inter, sans-serif', fontSize: '14px',
              fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: '3px',
              border: '1.5px solid rgba(255,255,255,0.3)',
            }}>
              Free Estimate Form
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #before-after .ba-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
