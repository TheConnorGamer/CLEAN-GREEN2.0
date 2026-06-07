export default function WhyUs() {
  const points = [
    {
      number: '01',
      headline: 'They show up.',
      body: "If we say Tuesday at 9am, we're there at 9am. No chasing. No rescheduling. No excuses.",
      voice: '"Never once had to follow up." — River Heights homeowner',
    },
    {
      number: '02',
      headline: 'They answer the phone.',
      body: "Call 204-899-3566. Idan or Tristin picks up. Not voicemail. Not a call centre. The people doing the work.",
      voice: '"Tristin picked up on the second ring and gave me a quote right then." — St. Vital',
    },
    {
      number: '03',
      headline: 'The price they say is the price.',
      body: "No invoice surprises. Quoted a number? That's the number. How it should work everywhere.",
      voice: '"Exactly what they said. Not a dollar more." — Fort Garry homeowner',
    },
    {
      number: '04',
      headline: 'They send photos when it\'s done.',
      body: "Every single job. Before and after — sent to you directly, whether you were home or not.",
      voice: '"I was at work. Got photos before I even got home." — Tuxedo property owner',
    },
    {
      number: '05',
      headline: 'You get the same people every time.',
      body: "Not a rotating crew. Not strangers at your door. Idan and Tristin. Every visit.",
      voice: '"You know exactly who\'s coming. That matters." — Charleswood repeat customer',
    },
  ]

  return (
    <section style={{ background: 'var(--offwhite)', padding: '100px 32px' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>

        {/* Header — two col */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'end', marginBottom: '72px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--forest)' }} />
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest)',
              }}>Why they keep calling back</span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 600, color: 'var(--charcoal)',
              lineHeight: 1.08, letterSpacing: '-0.03em',
            }}>
              The basics.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Done properly.</em>
            </h2>
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'var(--charcoal-light)', lineHeight: 1.7,
            paddingBottom: '8px',
          }}>
            Most of our new customers come from referrals. Most of our business is repeat customers.
            That doesn't happen by accident — it happens because we do the simple things right, every time.
          </p>
        </div>

        {/* Points — stacked rows with number accent */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {points.map((p, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr',
              gap: '40px',
              alignItems: 'start',
              padding: '40px 0',
              borderTop: '1px solid var(--border-light)',
            }}>
              {/* Number */}
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '48px', fontWeight: 700,
                color: 'rgba(26,58,42,0.12)',
                lineHeight: 1, letterSpacing: '-0.04em',
              }}>
                {p.number}
              </div>

              {/* Headline + body */}
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  fontWeight: 600, color: 'var(--charcoal)',
                  letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2,
                }}>
                  {p.headline}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px',
                  color: 'var(--charcoal-light)', lineHeight: 1.65,
                }}>
                  {p.body}
                </p>
              </div>

              {/* Customer voice */}
              <div style={{
                background: 'var(--cream)',
                borderRadius: '4px',
                padding: '20px 24px',
                borderLeft: '3px solid var(--forest)',
              }}>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '15px', fontStyle: 'italic',
                  color: 'var(--charcoal-mid)', lineHeight: 1.6,
                }}>
                  {p.voice}
                </p>
              </div>
            </div>
          ))}

          {/* Final row border */}
          <div style={{ borderTop: '1px solid var(--border-light)' }} />
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: '64px', textAlign: 'center',
        }}>
          <a href="tel:2048993566" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'var(--forest)', color: 'white',
            fontFamily: 'Inter, sans-serif', fontSize: '15px',
            fontWeight: 700, letterSpacing: '0.04em',
            padding: '18px 40px', borderRadius: '3px',
            textDecoration: 'none',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call 204-899-3566
          </a>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: 'var(--text-muted)', marginTop: '12px',
          }}>
            Idan or Tristin picks up. Free estimates, no obligation.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #whyus-header { grid-template-columns: 1fr !important; }
          #whyus-header p { padding-bottom: 0 !important; }
        }
        @media (max-width: 700px) {
          #whyus-row { grid-template-columns: 1fr !important; }
          #whyus-row .number { display: none; }
        }
      `}</style>
    </section>
  )
}
