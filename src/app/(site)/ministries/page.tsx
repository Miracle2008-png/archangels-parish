import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Parish Ministries',
  description:
    'Discover the active ministries of Archangels Catholic Church — CYON, CMO, CWO, Legion of Mary, Choir, Altar Servers, Catechism, Charismatic Renewal, and St Vincent de Paul.',
  openGraph: {
    title: 'Ministries — Archangels Catholic Church',
    url: '/ministries',
  },
}

const MINISTRIES = [
  {
    name: 'Catholic Youth Organisation of Nigeria',
    acronym: 'CYON',
    slug: 'cyon',
    category: 'Youth',
    description: 'Forming young Catholics in faith, leadership, and service to God and country. Open to all youths in the parish from ages 13 to 35.',
    leader: '[PLACEHOLDER — Ministry Leader]',
    meetingDay: '[PLACEHOLDER]',
  },
  {
    name: 'Catholic Men Organisation',
    acronym: 'CMO',
    slug: 'cmo',
    category: 'Men',
    description: 'A fraternity of Catholic men committed to prayer, fellowship, and the service of the Church and their families.',
    leader: '[PLACEHOLDER — Ministry Leader]',
    meetingDay: '[PLACEHOLDER]',
  },
  {
    name: 'Catholic Women Organisation',
    acronym: 'CWO',
    slug: 'cwo',
    category: 'Women',
    description: 'Empowering women of faith through prayer, charity, and community — rooted in the example of Our Lady.',
    leader: '[PLACEHOLDER — Ministry Leader]',
    meetingDay: '[PLACEHOLDER]',
  },
  {
    name: 'Legion of Mary',
    acronym: 'LOM',
    slug: 'legion-of-mary',
    category: 'Prayer',
    description: 'An apostolic association dedicated to Marian devotion, prayer, and active evangelisation in the parish and community.',
    leader: '[PLACEHOLDER — Ministry Leader]',
    meetingDay: '[PLACEHOLDER]',
  },
  {
    name: 'Parish Choir',
    acronym: '',
    slug: 'choir',
    category: 'Music',
    description: 'Lifting hearts and minds to God through sacred music. The choir ministers at all principal Masses and parish celebrations.',
    leader: '[PLACEHOLDER — Choirmaster/Choirmistress]',
    meetingDay: '[PLACEHOLDER — Rehearsal Day]',
  },
  {
    name: 'Altar Servers',
    acronym: '',
    slug: 'altar-servers',
    category: 'Liturgy',
    description: 'Young men and women serving at the altar — assisting the priest during Mass and developing a deep love for the liturgy.',
    leader: '[PLACEHOLDER — Master of Servers]',
    meetingDay: '[PLACEHOLDER]',
  },
  {
    name: 'Catechism / Faith Formation',
    acronym: '',
    slug: 'catechism',
    category: 'Formation',
    description: 'Nurturing the faith of children and young people through systematic instruction in Catholic teaching and practice.',
    leader: '[PLACEHOLDER — Chief Catechist]',
    meetingDay: '[PLACEHOLDER — e.g., Every Sunday after Mass]',
  },
  {
    name: 'Catholic Charismatic Renewal',
    acronym: 'CCR',
    slug: 'charismatic-renewal',
    category: 'Charismatic',
    description: 'A vibrant prayer community drawing on the gifts of the Holy Spirit — praise, intercession, healing, and renewal.',
    leader: '[PLACEHOLDER — Ministry Leader]',
    meetingDay: '[PLACEHOLDER]',
  },
  {
    name: 'St Vincent de Paul Society',
    acronym: 'SVdP',
    slug: 'st-vincent-de-paul',
    category: 'Service',
    description: 'Serving the poor and marginalised in Satellite Town with practical help — food, clothing, financial assistance, and a compassionate presence.',
    leader: '[PLACEHOLDER — President]',
    meetingDay: '[PLACEHOLDER]',
  },
]

const CATEGORY_COLOURS: Record<string, string> = {
  Youth: '#1B4F8A',
  Men: '#2D5016',
  Women: '#6B2737',
  Prayer: '#4A2C5E',
  Music: '#8B4A0A',
  Liturgy: '#1B2A4A',
  Formation: '#2D5016',
  Charismatic: '#C0392B',
  Service: '#3A5A3A',
}

export default function MinistriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Ministries' }]} />
          <Users size={36} color="var(--color-gold)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            Parish Ministries
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7 }}>
            Every parishioner has a gift to offer. Find your place in the life of this parish.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-py-sm" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-stone)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
            Archangels Catholic Church has <strong style={{ color: 'var(--color-navy)' }}>9 active ministries</strong> serving our 
            parish family. Whether you feel called to prayer, music, service, or formation — there is a place for you.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {MINISTRIES.map((ministry) => (
              <Link
                key={ministry.slug}
                href={`/ministries/${ministry.slug}`}
                className="card-base"
                style={{
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  overflow: 'hidden',
                }}
              >
                {/* Ministry image */}
                <div style={{ height: '180px', position: 'relative' }}>
                  <ImagePlaceholder label={`${ministry.acronym || ministry.name} Photo`} height="100%" />
                  {/* Category badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      backgroundColor: CATEGORY_COLOURS[ministry.category] ?? 'var(--color-navy)',
                      color: '#fff',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '2rem',
                    }}
                  >
                    {ministry.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                  {ministry.acronym && (
                    <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                      {ministry.acronym}
                    </p>
                  )}
                  <h2 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-navy)', lineHeight: 1.3 }}>
                    {ministry.name}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.7, flex: 1 }}>
                    {ministry.description}
                  </p>

                  {/* Meeting info */}
                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-stone)', fontWeight: 600 }}>
                        Meets
                      </p>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-navy)', fontWeight: 500 }}>
                        {ministry.meetingDay}
                      </p>
                    </div>
                    <ChevronRight size={18} style={{ color: 'var(--color-gold)' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-py-sm" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <h2 className="font-serif" style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
            Ready to get involved?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Visit the parish office or speak to any ministry leader after Sunday Mass.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Contact the Parish
          </Link>
        </div>
      </section>
    </>
  )
}
