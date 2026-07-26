import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Clock, Heart, Phone, HandHeart, ChevronRight,
  Calendar, BookOpen, Users, ArrowRight, MapPin,
} from 'lucide-react'
import Image from 'next/image'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionHeader from '@/components/ui/SectionHeader'
import { jsonLd, localBusinessSchema, websiteSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Archangels Catholic Church — Satellite Town, Lagos',
  description:
    'Welcome to Archangels Catholic Church, Satellite Town, Lagos — part of the Archdiocese of Lagos. Find Mass times, sacrament information, parish ministries, and upcoming events.',
  openGraph: {
    title: 'Archangels Catholic Church — Satellite Town, Lagos',
    description: 'A parish family rooted in faith, united in love. Satellite Town, Lagos.',
    url: '/',
  },
}

// ─── Mock data (replaced by Payload CMS in production) ─────────────────────
const UPCOMING_EVENTS = [
  { id: 1, title: '[PLACEHOLDER EVENT]', date: new Date(), location: 'Archangels Catholic Church', category: 'Parish Life', slug: 'placeholder-event-1' },
  { id: 2, title: '[PLACEHOLDER EVENT]', date: new Date(), location: 'Parish Hall', category: 'Ministries', slug: 'placeholder-event-2' },
  { id: 3, title: '[PLACEHOLDER EVENT]', date: new Date(), location: 'Archangels Catholic Church', category: 'Formation', slug: 'placeholder-event-3' },
]

const LATEST_NEWS = [
  { id: 1, title: '[PLACEHOLDER ANNOUNCEMENT]', excerpt: 'Parish announcement content will appear here once the CMS is populated.', category: 'announcement', publishedDate: new Date(), slug: 'placeholder-news-1' },
  { id: 2, title: '[PLACEHOLDER NEWS]', excerpt: 'Parish news and updates from the Archdiocese of Lagos will appear here.', category: 'parish-news', publishedDate: new Date(), slug: 'placeholder-news-2' },
]

const FEATURED_MINISTRIES = [
  { name: 'CYON', description: 'Catholic Youth Organisation of Nigeria — forming young people in faith and service.', slug: 'cyon', icon: '✦' },
  { name: 'Legion of Mary', description: 'Apostolic service and Marian devotion at the heart of parish evangelisation.', slug: 'legion-of-mary', icon: '✦' },
  { name: 'Choir', description: 'Elevating worship through the beauty of sacred music at every Mass.', slug: 'choir', icon: '✦' },
  { name: 'St Vincent de Paul', description: 'Serving the poor and vulnerable in Satellite Town with dignity and compassion.', slug: 'st-vincent-de-paul', icon: '✦' },
]

const QUICK_ACTIONS = [
  { label: 'Mass Times', href: '/mass-times', icon: Clock, desc: 'Sunday & weekday schedule' },
  { label: 'Confession', href: '/mass-times#confession', icon: Heart, desc: 'Times & preparation' },
  { label: 'Contact Us', href: '/contact', icon: Phone, desc: 'Reach the parish office' },
  { label: 'Give Online', href: '#give', icon: HandHeart, desc: 'Support the parish' },
]

const DAILY_SCRIPTURE = {
  verse: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."',
  reference: 'Jeremiah 29:11',
}

// ─── Page Component ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({ '@graph': [localBusinessSchema(), websiteSchema()] })}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Parish hero"
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          marginTop: '-96px',
          paddingTop: '96px',
          backgroundColor: 'var(--color-navy-dark)',
        }}
      >
        {/* Hero image placeholder */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-navy)',
          }}
        >
          <Image
            src="/church-building.jpg"
            alt="Archangels Catholic Church Exterior"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Overlay gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,16,32,0.92) 0%, rgba(10,16,32,0.55) 50%, rgba(10,16,32,0.3) 100%)',
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className="container-site"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingBottom: 'clamp(3rem, 7vw, 6rem)',
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <p className="section-label" style={{ marginBottom: '1.25rem', color: 'var(--color-gold)' }}>
              Archdiocese of Lagos · Satellite Town
            </p>
            <h1
              className="font-serif"
              style={{
                color: '#fff',
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                marginBottom: '1.5rem',
              }}
            >
              Archangels{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Catholic</span>
              <br />Church
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '500px',
              }}
            >
              A parish family rooted in faith, united in love, and called to serve — 
              in Satellite Town, Lagos and beyond.
            </p>

            {/* Quick action cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '0.875rem',
                maxWidth: '680px',
              }}
            >
              {QUICK_ACTIONS.map(({ label, href, icon: Icon, desc }) => (
                <Link
                  key={href}
                  href={href}
                  id={`hero-quick-${label.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '0.625rem',
                    padding: '1.125rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    textDecoration: 'none',
                  }}
                >
                  <Icon size={20} color="var(--color-gold)" strokeWidth={1.5} />
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9375rem' }}>{label}</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem' }}>{desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
          }}
        >
          <span>SCROLL</span>
          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.35)',
            }}
          />
        </div>
      </section>

      {/* ── WELCOME FROM PARISH PRIEST ──────────────────────────────── */}
      <section
        aria-label="Welcome from the Parish Priest"
        style={{ backgroundColor: 'var(--color-cream)' }}
        className="section-py"
      >
        <div
          className="container-site"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Priest photo */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '3/4',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <ImagePlaceholder label="Parish Priest Photo" height="100%" />
            </div>
            {/* Gold accent bar */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '-1rem',
                width: '60%',
                height: '4px',
                backgroundColor: 'var(--color-gold)',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* Message */}
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>
              A Word from our Priest
            </span>
            <h2
              className="font-serif"
              style={{ color: 'var(--color-navy)', marginBottom: '1.75rem' }}
            >
              Welcome to our<br />Parish Family
            </h2>

            <div
              style={{
                borderLeft: '3px solid var(--color-gold)',
                paddingLeft: '1.5rem',
                marginBottom: '1.75rem',
              }}
            >
              <p style={{ fontSize: '1.1rem', color: 'var(--color-stone)', lineHeight: 1.8, fontStyle: 'italic' }}>
                &ldquo;[PLACEHOLDER — Welcome message from the Parish Priest will be added here. 
                Please provide the name and a brief message from the priest.]&rdquo;
              </p>
            </div>

            <p style={{ color: 'var(--color-stone)', fontSize: '0.9375rem', lineHeight: 1.75 }}>
              Whether you are a lifelong Catholic, returning to the faith, or simply seeking 
              a spiritual home — the doors of Archangels Catholic Church are open to you.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '2px solid var(--color-gold)',
                }}
              >
                <ImagePlaceholder label="Priest" height="100%" />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>
                  [PLACEHOLDER — Parish Priest Name]
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-stone)' }}>Parish Priest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST ANNOUNCEMENT + DAILY SCRIPTURE ───────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Announcements */}
            <div>
              <SectionHeader
                label="Latest from the Parish"
                heading="News & Announcements"
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {LATEST_NEWS.map((item) => (
                  <article
                    key={item.id}
                    className="card-base"
                    style={{ padding: '1.5rem' }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold)',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3
                      className="font-serif"
                      style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.625rem' }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.7 }}>
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        marginTop: '1rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--color-navy)',
                      }}
                    >
                      Read more <ArrowRight size={14} />
                    </Link>
                  </article>
                ))}
              </div>
              <Link href="/news" className="btn btn-outline mt-6">
                All Announcements
              </Link>
            </div>

            {/* Daily Scripture + Events */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Scripture */}
              <div
                style={{
                  backgroundColor: 'var(--color-navy)',
                  borderRadius: '0.75rem',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '8rem',
                    color: 'rgba(201,168,76,0.07)',
                    fontFamily: 'Georgia, serif',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  &ldquo;
                </div>
                <p
                  className="section-label"
                  style={{ color: 'var(--color-gold)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <BookOpen size={14} />
                  Daily Scripture
                </p>
                <blockquote
                  className="font-serif"
                  style={{
                    color: '#fff',
                    fontSize: '1.1875rem',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    marginBottom: '1.25rem',
                  }}
                >
                  {DAILY_SCRIPTURE.verse}
                </blockquote>
                <cite
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '0.875rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                  }}
                >
                  — {DAILY_SCRIPTURE.reference}
                </cite>
              </div>

              {/* Upcoming events preview */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.375rem' }}>
                    Upcoming Events
                  </h3>
                  <Link
                    href="/events"
                    style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 600 }}
                  >
                    View all →
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {UPCOMING_EVENTS.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.slug}`}
                      className="card-base"
                      style={{
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: '44px',
                          textAlign: 'center',
                        }}
                      >
                        <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1 }}>
                          {event.date.getDate()}
                        </p>
                        <p style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', fontWeight: 600 }}>
                          {event.date.toLocaleString('default', { month: 'short' })}
                        </p>
                      </div>
                      <div
                        style={{
                          width: '1px',
                          height: '32px',
                          backgroundColor: 'var(--color-border)',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-navy)', lineHeight: 1.3 }}>
                          {event.title}
                        </p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-stone)', marginTop: '0.25rem' }}>
                          <MapPin size={11} style={{ display: 'inline', marginRight: '3px' }} />
                          {event.location}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED MINISTRIES ──────────────────────────────────────── */}
      <section
        aria-label="Parish Ministries"
        className="section-py"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              label="Get Involved"
              heading="Our Ministries"
              subheading="Every parishioner is invited to find their place in the life of this parish."
            />
            <Link href="/ministries" className="btn btn-outline shrink-0" style={{ marginBottom: '3rem' }}>
              All Ministries
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {FEATURED_MINISTRIES.map((ministry) => (
              <Link
                key={ministry.slug}
                href={`/ministries/${ministry.slug}`}
                className="card-base"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  textDecoration: 'none',
                }}
              >
                {/* Ministry image placeholder */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '0.375rem',
                    overflow: 'hidden',
                    marginBottom: '0.5rem',
                  }}
                >
                  <ImagePlaceholder label={`${ministry.name} Photo`} height="100%" />
                </div>
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    backgroundColor: 'var(--color-gold)',
                  }}
                />
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.375rem', color: 'var(--color-navy)' }}
                >
                  {ministry.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.7, flex: 1 }}>
                  {ministry.description}
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                  }}
                >
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ─────────────────────────────────────────── */}
      <section aria-label="Parish Gallery" className="section-py">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionHeader label="Parish Life" heading="Gallery" />
            <Link href="/gallery" className="btn btn-outline shrink-0" style={{ marginBottom: '3rem' }}>
              View All Photos
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: '0.75rem',
            }}
          >
            <div style={{ gridColumn: 'span 7', gridRow: 'span 2', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <ImagePlaceholder label="Parish Photo 1" height="100%" />
            </div>
            <div style={{ gridColumn: 'span 5', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <ImagePlaceholder label="Parish Photo 2" height="100%" />
            </div>
            <div style={{ gridColumn: 'span 5', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <ImagePlaceholder label="Parish Photo 3" height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────────────────────────── */}
      <section
        aria-label="Join the Parish"
        style={{ backgroundColor: 'var(--color-navy)' }}
        className="section-py"
      >
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.25rem' }}>
                You Are Welcome Here
              </span>
              <h2
                className="font-serif"
                style={{ color: '#fff', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
              >
                Join our parish family
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1.25rem', lineHeight: 1.8, fontSize: '1rem' }}>
                Whether you are new to the area, returning to the faith, or simply looking 
                for a spiritual home — you are welcome at Archangels Catholic Church.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn btn-gold btn-lg">
                  Contact the Parish
                </Link>
                <Link href="/mass-times" className="btn btn-outline-white btn-lg">
                  View Mass Times
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {[
                { value: '9+', label: 'Active Ministries' },
                { value: '6', label: 'Sacraments' },
                { value: '7', label: 'Masses Weekly', sub: 'Weekday & Sunday' },
                { value: '∞', label: 'Open Doors', sub: 'All are welcome' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="font-serif"
                    style={{ fontSize: '2.5rem', color: 'var(--color-gold)', lineHeight: 1 }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem', fontWeight: 500 }}>
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>
                      {stat.sub}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
