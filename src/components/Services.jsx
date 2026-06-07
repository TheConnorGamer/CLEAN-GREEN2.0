const services = [
  {
    id: 'window-cleaning',
    tag: 'Exterior & Interior',
    title: 'Window Cleaning',
    problem: 'Winnipeg winters film every window with salt, oxidation, and grime. Most homeowners don\'t notice until the sun hits at the right angle.',
    result: 'Every pane cleaned to optical clarity. Screens included. Inside and out. No streaks, no film, no excuses.',
    outcomes: ['Crystal-clear glass', 'Screens cleaned', 'Interior & exterior', 'Same-day available'],
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&fit=crop',
  },
  {
    id: 'lawn-care',
    tag: 'Mowing · Edging · Fertilizing · Weed Control',
    title: 'Lawn Care',
    problem: 'A lawn that\'s been neglected for a few weeks looks neglected. It affects how your whole property is perceived.',
    result: 'Mowed clean, edges sharp, borders tight. We treat it like it\'s our own yard — because our name\'s attached to how it looks.',
    outcomes: ['Clean cut every visit', 'Crisp edge lines', 'Fertilizer application', 'Weed control programs'],
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
  },
  {
    id: 'spring-cleanup',
    tag: 'Seasonal · Spring & Fall',
    title: 'Spring Cleanup',
    problem: 'Every Manitoba winter leaves a mess. Debris, dead growth, salt damage, and months of buildup that doesn\'t go away on its own.',
    result: 'Full property reset. Debris cleared, beds cleaned, salt damage treated. One visit and your property is ready for the season.',
    outcomes: ['Full debris removal', 'Dead growth cleared', 'Salt damage treatment', 'Bed & edge cleanup'],
    photo: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=900&q=80&fit=crop',
  },
  {
    id: 'property-maintenance',
    tag: 'Year-Round · Recurring',
    title: 'Property Maintenance',
    problem: 'Most homeowners want one company they can call. Someone consistent. Someone who shows up without being chased.',
    result: 'Scheduled recurring visits, seasonal adjustments, and Idan or Tristin\'s direct number. No call centres. No runaround.',
    outcomes: ['Recurring scheduled visits', 'Seasonal adjustments', 'Consistent results', 'Direct owner contact'],
    photo: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=900&q=80&fit=crop',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--offwhite)', padding: '100px 32px' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--forest)' }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest)',
            }}>What we do</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 600, color: 'var(--charcoal)',
              lineHeight: 1.08, letterSpacing: '-0.03em',
            }}>
              Services built for<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Winnipeg properties.</em>
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'var(--charcoal-light)', maxWidth: '320px', lineHeight: 1.65,
            }}>
              Every service delivered by Idan and Tristin directly. No subcontractors. No strangers at your door.
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className="service-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '400px',
                borderRadius: i === 0 ? '6px 6px 0 0' : i === services.length - 1 ? '0 0 6px 6px' : '0',
                overflow: 'hidden',
              }}
            >
              {/* Text side */}
              <div className="text-side" style={{
                background: i % 2 === 0 ? 'var(--cream)' : 'var(--cream-warm)',
                padding: '56px 60px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                order: i % 2 === 0 ? 0 : 1,
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forest)',
                  marginBottom: '18px', display: 'block',
                }}>
                  {svc.tag}
                </span>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(26px, 2.8vw, 40px)',
                  fontWeight: 600, color: 'var(--charcoal)',
                  letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.1,
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'var(--charcoal-light)', lineHeight: 1.7,
                  marginBottom: '10px',
                }}>
                  <strong style={{ color: 'var(--charcoal-mid)', fontWeight: 500 }}>The problem: </strong>{svc.problem}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'var(--charcoal-mid)', lineHeight: 1.7,
                  marginBottom: '28px', fontWeight: 500,
                }}>
                  <strong style={{ color: 'var(--forest)', fontWeight: 600 }}>The result: </strong>{svc.result}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {svc.outcomes.map(o => (
                    <span key={o} style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500,
                      color: 'var(--forest)', background: 'rgba(26,58,42,0.07)',
                      padding: '5px 13px', borderRadius: '40px',
                      border: '1px solid rgba(26,58,42,0.14)',
                    }}>
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo side */}
              <div className="visual-side" style={{
                backgroundImage: `url('${svc.photo}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                order: i % 2 === 0 ? 1 : 0,
                minHeight: '300px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(15,36,24,0.15)',
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cta-banner" style={{
          marginTop: '4px',
          background: 'var(--forest)',
          borderRadius: '0 0 6px 6px',
          padding: '44px 60px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: 600, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '6px',
            }}>
              Not sure which service you need?
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>
              Call or text Idan directly. He'll tell you exactly what your property needs and give you a free estimate on the spot.
            </p>
          </div>
          <a href="tel:2048993566" style={{
            display: 'inline-block',
            background: 'white', color: 'var(--forest)',
            fontFamily: 'Inter, sans-serif', fontSize: '14px',
            fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '16px 36px', borderRadius: '3px', whiteSpace: 'nowrap',
          }}>
            Call 204-899-3566
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services .service-row { grid-template-columns: 1fr !important; }
          #services .service-row > div { order: unset !important; padding: 40px 28px !important; }
          #services .service-row .visual-side { min-height: 240px !important; }
        }
      `}</style>
    </section>
  )
}
