import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming parish events at Archangels Catholic Church — Masses, meetings, outreach, and community celebrations.',
  openGraph: { title: 'Events — Archangels Catholic Church', url: '/events' },
}

const CATEGORIES = ['All', 'Mass & Liturgy', 'Youth', 'Outreach', 'Formation', 'Social', 'Fundraising']

const SAMPLE_EVENTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `[PLACEHOLDER EVENT ${i + 1}]`,
  excerpt: 'Event details will appear here once the parish administrator updates the calendar via the CMS.',
  category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
  startDate: new Date(Date.now() + (i + 1) * 7 * 24 * 60 * 60 * 1000),
  location: 'Archangels Catholic Church',
  slug: `placeholder-event-${i + 1}`,
  registrationRequired: i % 3 === 0,
}))

function formatDate(date: Date) {
  return {
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
    full: date.toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

export default function EventsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Events' }]} />
          <Calendar size={36} color="var(--color-gold)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            Upcoming Events
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '480px', lineHeight: 1.7 }}>
            From parish Masses to community outreach — join us in the life of the parish.
          </p>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">

          {/* Category filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                style={{
                  padding: '0.5rem 1.125rem',
                  borderRadius: '2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  border: '1.5px solid',
                  cursor: 'pointer',
                  borderColor: i === 0 ? 'var(--color-navy)' : 'var(--color-border)',
                  backgroundColor: i === 0 ? 'var(--color-navy)' : '#fff',
                  color: i === 0 ? '#fff' : 'var(--color-stone)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {SAMPLE_EVENTS.map((event) => {
              const d = formatDate(event.startDate)
              return (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="card-base"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '1.5rem',
                    alignItems: 'center',
                    padding: '1.5rem',
                    textDecoration: 'none',
                  }}
                >
                  {/* Date block */}
                  <div style={{ textAlign: 'center', minWidth: '56px' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1 }}>{d.day}</p>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.1em' }}>{d.month}</p>
                  </div>

                  {/* Divider */}
                  <div style={{ display: 'contents' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>
                        {event.category}
                        {event.registrationRequired && (
                          <span style={{ marginLeft: '0.625rem', backgroundColor: 'var(--color-burgundy)', color: '#fff', padding: '0.125rem 0.5rem', borderRadius: '2rem' }}>
                            Registration Required
                          </span>
                        )}
                      </span>
                      <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-navy)' }}>{event.title}</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.25rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--color-stone)' }}>
                          <MapPin size={13} /> {event.location}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--color-stone)' }}>
                          <Clock size={13} /> {d.full}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight size={20} style={{ color: 'var(--color-stone-light)', flexShrink: 0 }} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
