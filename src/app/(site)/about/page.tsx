import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, BookOpen, Heart, Star } from 'lucide-react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { jsonLd, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About the Parish',
  description:
    'Learn about Archangels Catholic Church — our history, mission, patron saints, parish priests, and the story of our community in Satellite Town, Lagos.',
  openGraph: {
    title: 'About — Archangels Catholic Church',
    description: 'Our history, mission, and the people who make up our parish family.',
    url: '/about',
  },
}

const PRIESTS = [
  {
    name: 'Rev. Fr. Dr. Godfrey Udeh, C.Ss.R',
    title: 'Parish Priest',
    bio: 'A Redemptorist priest serving as Parish Priest of Saints Michael, Raphael & Gabriel Catholic Church. Available at the parish office on Tuesdays.',
  },
  {
    name: 'Rev. Fr. Kingsley Ekezie, C.Ss.R',
    title: 'Associate Priest',
    bio: 'A Redemptorist priest serving the parish community. Available at the parish office on Mondays.',
  },
  {
    name: 'Rev. Fr. Moses Akpough, C.Ss.R',
    title: 'Associate Priest',
    bio: 'A Redemptorist priest serving the parish community. Available at the parish office on Wednesdays.',
  },
  {
    name: 'Rev. Fr. Benedict Anyanwu, C.Ss.R',
    title: 'Associate Priest',
    bio: 'A Redemptorist priest serving the parish community. Available at the parish office on Fridays.',
  },
]

const STAFF = [
  { name: '[PLACEHOLDER]', role: 'Parish Secretary', department: 'Parish Office' },
  { name: '[PLACEHOLDER]', role: 'Finance Officer', department: 'Finance' },
  { name: 'Rev. Sr. Augustina Alozie, RSC', role: 'Director', department: 'Religious Education & Catechetics' },
]

const TIMELINE = [
  { year: '[YEAR]', title: 'Parish Founded', description: 'Archangels Catholic Church was established to serve the faithful of Satellite Town.' },
  { year: '[YEAR]', title: 'Church Building Completed', description: 'The current church building was completed and consecrated.' },
  { year: '[YEAR]', title: 'Archdiocese Expansion', description: 'The parish grew significantly as Satellite Town developed.' },
  { year: '[YEAR]', title: 'New Ministries Established', description: 'Multiple active ministries were formed to serve different segments of the community.' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: 'About', href: '/about' }]))}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'About' }]} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            About Our Parish
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7 }}>
            Our history, our mission, and the people who form the heart of Archangels Catholic Church.
          </p>
        </div>
      </section>

      {/* ── HISTORY & MISSION ──────────────────────────────────────── */}
      <section id="history" className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div
          className="container-site"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div>
            <SectionHeader label="Our Story" heading="A Parish Rooted in Faith" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.85 }}>
                [PLACEHOLDER — Parish history paragraph 1. Describe when and how the parish was founded, 
                who established it, and the early days of the community.]
              </p>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.85 }}>
                [PLACEHOLDER — Parish history paragraph 2. Describe the growth of the parish, 
                significant milestones, and the construction of the church building.]
              </p>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.85 }}>
                [PLACEHOLDER — Parish history paragraph 3. Describe the current state of the parish, 
                the community it serves, and its place in the Archdiocese of Lagos.]
              </p>
            </div>
          </div>

          {/* Church image */}
          <div
            style={{
              position: 'sticky',
              top: '7rem',
            }}
          >
            <div
              style={{
                borderRadius: '0.75rem',
                overflow: 'hidden',
                aspectRatio: '4/3',
                marginBottom: '1.5rem',
              }}
            >
              <ImagePlaceholder label="Church Exterior" height="100%" />
            </div>
            <div
              style={{
                borderRadius: '0.75rem',
                overflow: 'hidden',
                aspectRatio: '16/9',
              }}
            >
              <ImagePlaceholder label="Church Interior" height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PATRON SAINT ─────────────────────────────────────────── */}
      <section id="patron-saints" className="section-py" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-site">
          <SectionHeader
            label="Patron Saints"
            heading="The Archangels"
            align="center"
            subheading="Our parish is named in honour of the three Archangels of Scripture — Michael, Gabriel, and Raphael — each a messenger and servant of God's will."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                name: 'Saint Michael',
                feast: 'September 29',
                role: 'Prince of the Heavenly Host',
                description: 'Defender against evil, patron of soldiers and police. His name means "Who is like God?"',
                prayer: 'Saint Michael the Archangel, defend us in battle.',
              },
              {
                name: 'Saint Gabriel',
                feast: 'September 29',
                role: 'Messenger of God',
                description: 'Announced the birth of Christ to the Virgin Mary. His name means "God is my strength."',
                prayer: 'Saint Gabriel, help us to say yes to God\'s will as Mary did.',
              },
              {
                name: 'Saint Raphael',
                feast: 'September 29',
                role: 'Healer and Guide',
                description: 'Guided Tobias and healed his father. His name means "God has healed."',
                prayer: 'Saint Raphael, guide us safely on our journey.',
              },
            ].map((angel) => (
              <div
                key={angel.name}
                className="card-base"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}
                >
                  <Star size={22} color="var(--color-gold)" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.375rem' }}>
                    {angel.name}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                    Feast Day: {angel.feast}
                  </p>
                </div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone)' }}>
                  {angel.role}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.75 }}>
                  {angel.description}
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-navy)',
                    fontStyle: 'italic',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1rem',
                    marginTop: 'auto',
                  }}
                >
                  &ldquo;{angel.prayer}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────── */}
      <section id="mission" className="section-py" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
            }}
          >
            {[
              {
                icon: BookOpen,
                title: 'Our Mission',
                text: 'As one family of God, our parish exists for faith and human development, parish and community outreach, and living the Gospel of Christ.',
              },
              {
                icon: Heart,
                title: 'Our Vision',
                text: '[PLACEHOLDER — Parish vision statement. Describe what kind of parish community you aspire to be in 5–10 years.]',
              },
              {
                icon: Users,
                title: 'Our Values',
                text: '[PLACEHOLDER — Core parish values: faith, community, service, hospitality, stewardship, etc.]',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={22} color="var(--color-gold)" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.9375rem' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARISH PRIESTS ───────────────────────────────────────── */}
      <section id="priests" className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <SectionHeader label="Our Clergy" heading="Parish Priests" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {PRIESTS.map((priest) => (
              <div key={priest.name} className="card-base" style={{ padding: '0' }}>
                <div style={{ height: '280px', borderRadius: '0.75rem 0.75rem 0 0', overflow: 'hidden' }}>
                  <ImagePlaceholder label={`${priest.title} Photo`} height="100%" />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                    {priest.title}
                  </p>
                  <h3 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.375rem', marginBottom: '0.875rem' }}>
                    {priest.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.75 }}>
                    {priest.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE STAFF ─────────────────────────────────────────── */}
      <section id="staff" className="section-py" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-site">
          <SectionHeader label="Administration" heading="Office Staff" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {STAFF.map((member) => (
              <div
                key={member.name}
                className="card-base"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--color-border)',
                  }}
                >
                  <ImagePlaceholder label="Staff" height="100%" />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>{member.name}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginTop: '0.25rem' }}>{member.role}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-stone)', marginTop: '0.125rem' }}>{member.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section id="timeline" className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-narrow">
          <SectionHeader label="Our Journey" heading="Parish Timeline" align="center" />
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: 'var(--color-border)',
              }}
            />
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  paddingBottom: i < TIMELINE.length - 1 ? '2.5rem' : 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.375rem',
                    top: '0.375rem',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    border: '2px solid #fff',
                    boxShadow: '0 0 0 2px var(--color-gold)',
                  }}
                />
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '0.375rem',
                  }}
                >
                  {item.year}
                </p>
                <h3 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-stone)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
