'use client'

import Link from 'next/link'
import { ArrowRight, Cross, Sparkles } from 'lucide-react'

export default function BookingCTA() {
  return (
    <section
      aria-label="Book a Mass or Thanksgiving"
      style={{
        background: 'linear-gradient(90deg, var(--color-gold) 0%, #d4a017 100%)',
      }}
    >
      <div
        className="container-site"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
        {/* Mass Intention */}
        <Link
          href="/booking?type=mass"
          id="cta-book-mass"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '2rem 2.5rem',
            textDecoration: 'none',
            backgroundColor: 'rgba(0,0,0,0)',
            borderRight: '1px solid rgba(255,255,255,0.2)',
            transition: 'background 0.25s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.08)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0)')}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              flexShrink: 0,
            }}
          >
            <Cross size={22} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.25rem' }}>
              Book a Mass Intention
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.5 }}>
              Offer a Holy Mass for a living or deceased loved one
            </p>
          </div>
          <ArrowRight size={20} color="rgba(255,255,255,0.7)" style={{ marginLeft: 'auto', flexShrink: 0 }} />
        </Link>

        {/* Thanksgiving */}
        <Link
          href="/booking?type=thanksgiving"
          id="cta-book-thanksgiving"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '2rem 2.5rem',
            textDecoration: 'none',
            backgroundColor: 'rgba(0,0,0,0)',
            transition: 'background 0.25s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.08)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0)')}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              flexShrink: 0,
            }}
          >
            <Sparkles size={22} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.25rem' }}>
              Thanksgiving Mass
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.5 }}>
              Give glory to God for His blessings in your life
            </p>
          </div>
          <ArrowRight size={20} color="rgba(255,255,255,0.7)" style={{ marginLeft: 'auto', flexShrink: 0 }} />
        </Link>
      </div>
    </section>
  )
}
