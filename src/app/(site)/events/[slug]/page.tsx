import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowLeft, Users } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Event — ${slug}`,
    description: 'Parish event at Archangels Catholic Church, Satellite Town, Lagos.',
    openGraph: { url: `/events/${slug}` },
  }
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Event' }]} />
          <span style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.875rem' }}>
            Parish Event
          </span>
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1.5rem', maxWidth: '680px' }}>
            [PLACEHOLDER — Event Title]
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {[
              { icon: Calendar, text: '[Placeholder Date]' },
              { icon: Clock, text: '[Placeholder Time]' },
              { icon: MapPin, text: 'Archangels Catholic Church' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                <Icon size={15} color="var(--color-gold)" /> {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site section-py">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(300px, 30%)', gap: '3rem', alignItems: 'start' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Event image */}
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '16/9' }}>
              <ImagePlaceholder label="Event Photo" height="100%" />
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.25rem' }}>About This Event</h2>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.85, fontSize: '1.0625rem' }}>
                [PLACEHOLDER — Event description. Full details about this event will appear here once it has been entered in the CMS by the parish administrator.]
              </p>
            </div>

            <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Events
            </Link>
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ backgroundColor: 'var(--color-navy)', borderRadius: '0.75rem', padding: '1.75rem' }}>
              <p className="section-label" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Event Details</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Calendar, label: 'Date', value: '[PLACEHOLDER]' },
                  { icon: Clock, label: 'Time', value: '[PLACEHOLDER]' },
                  { icon: MapPin, label: 'Location', value: 'Archangels Catholic Church' },
                  { icon: Users, label: 'Organiser', value: '[PLACEHOLDER]' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Icon size={15} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{label}</p>
                      <p style={{ color: '#fff', fontSize: '0.875rem', marginTop: '0.125rem' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn btn-gold" style={{ justifyContent: 'center' }}>
              Contact the Parish
            </Link>
            <Link href="/events" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              All Events
            </Link>
          </aside>
        </div>
      </div>
    </>
  )
}
