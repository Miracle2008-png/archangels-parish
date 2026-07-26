import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Users, Calendar, ChevronRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const MINISTRIES_DATA: Record<string, {
  name: string; acronym: string; category: string
  fullDescription: string; shortDescription: string
  leader: { name: string; title: string; phone: string; email: string }
  meetingDay: string; meetingTime: string; meetingLocation: string
  openToAll: boolean; requirements: string
  joinInfo: string
}> = {
  cyon: {
    name: 'Catholic Youth Organisation of Nigeria', acronym: 'CYON', category: 'Youth',
    shortDescription: 'Forming young Catholics in faith, leadership, and service.',
    fullDescription: '[PLACEHOLDER — Full CYON description. Include the history, aims, activities, and what makes this ministry unique at Archangels Catholic Church.]',
    leader: { name: '[PLACEHOLDER]', title: 'President', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Parish Hall',
    openToAll: true, requirements: 'Open to all Catholic youths aged 13–35 registered in the parish.',
    joinInfo: 'Come to any meeting or speak to the President after Sunday Mass.',
  },
  cmo: {
    name: 'Catholic Men Organisation', acronym: 'CMO', category: 'Men',
    shortDescription: 'A fraternity of Catholic men committed to prayer and service.',
    fullDescription: '[PLACEHOLDER — Full CMO description.]',
    leader: { name: '[PLACEHOLDER]', title: 'President', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Parish Hall',
    openToAll: true, requirements: 'Open to all Catholic men in the parish.',
    joinInfo: 'Speak to the President or any CMO member after Sunday Mass.',
  },
  cwo: {
    name: 'Catholic Women Organisation', acronym: 'CWO', category: 'Women',
    shortDescription: 'Empowering women of faith through prayer, charity, and community.',
    fullDescription: '[PLACEHOLDER — Full CWO description.]',
    leader: { name: '[PLACEHOLDER]', title: 'President', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Parish Hall',
    openToAll: true, requirements: 'Open to all Catholic women in the parish.',
    joinInfo: 'Speak to any CWO member or visit the parish office.',
  },
  'legion-of-mary': {
    name: 'Legion of Mary', acronym: 'LOM', category: 'Prayer',
    shortDescription: 'Apostolic service and Marian devotion at the heart of parish evangelisation.',
    fullDescription: '[PLACEHOLDER — Full Legion of Mary description. Include the praesidium structure, meeting format, and apostolic works carried out.]',
    leader: { name: '[PLACEHOLDER]', title: 'Praesidium President', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Church / Parish Hall',
    openToAll: true, requirements: 'Open to all practising Catholics. Must be willing to commit to weekly meetings and apostolic work.',
    joinInfo: 'Attend a meeting as a guest or contact the President.',
  },
  choir: {
    name: 'Parish Choir', acronym: '', category: 'Music',
    shortDescription: 'Lifting hearts and minds to God through sacred music.',
    fullDescription: '[PLACEHOLDER — Full choir description. Include voice parts needed, rehearsal schedule, and which Masses the choir ministers at.]',
    leader: { name: '[PLACEHOLDER]', title: 'Choirmaster / Choirmistress', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER — Rehearsal Day]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Church',
    openToAll: true, requirements: 'Open to all parishioners with a love of music. No formal training required, though prior singing experience is welcome.',
    joinInfo: 'Attend a rehearsal or speak to the Choirmaster.',
  },
  'altar-servers': {
    name: 'Altar Servers', acronym: '', category: 'Liturgy',
    shortDescription: 'Young Catholics serving at the altar and developing a love for the liturgy.',
    fullDescription: '[PLACEHOLDER — Full Altar Servers description.]',
    leader: { name: '[PLACEHOLDER]', title: 'Master of Servers', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Sacristy / Church',
    openToAll: false, requirements: 'Open to children and youth who have received First Holy Communion.',
    joinInfo: 'Speak to the Master of Servers or contact the parish office.',
  },
  catechism: {
    name: 'Catechism / Faith Formation', acronym: '', category: 'Formation',
    shortDescription: 'Nurturing the faith of children and young people through systematic Catholic teaching.',
    fullDescription: '[PLACEHOLDER — Full Catechism/Faith Formation description. Include what ages are catered for, curriculum used, and how to enrol a child.]',
    leader: { name: '[PLACEHOLDER]', title: 'Chief Catechist', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER — e.g., Every Sunday after Mass]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Catechism Classrooms',
    openToAll: false, requirements: 'For children aged [PLACEHOLDER] preparing for First Communion and Confirmation.',
    joinInfo: 'Contact the Chief Catechist or visit the parish office to enrol your child.',
  },
  'charismatic-renewal': {
    name: 'Catholic Charismatic Renewal', acronym: 'CCR', category: 'Charismatic',
    shortDescription: 'A vibrant prayer community drawing on the gifts of the Holy Spirit.',
    fullDescription: '[PLACEHOLDER — Full CCR description. Include the nature of meetings, Life in the Spirit seminar, and how the group serves the parish.]',
    leader: { name: '[PLACEHOLDER]', title: 'Coordinator', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Parish Hall / Church',
    openToAll: true, requirements: 'Open to all parishioners.',
    joinInfo: 'Come to any prayer meeting or speak to the Coordinator.',
  },
  'st-vincent-de-paul': {
    name: 'St Vincent de Paul Society', acronym: 'SVdP', category: 'Service',
    shortDescription: 'Serving the poor and marginalised with practical help and a compassionate presence.',
    fullDescription: '[PLACEHOLDER — Full SVdP description. Include the types of assistance provided, how the society operates, and how people in need can contact them.]',
    leader: { name: '[PLACEHOLDER]', title: 'President', phone: '[PLACEHOLDER]', email: '[PLACEHOLDER]' },
    meetingDay: '[PLACEHOLDER]', meetingTime: '[PLACEHOLDER]', meetingLocation: 'Parish Hall',
    openToAll: true, requirements: 'Open to all parishioners with a heart for serving the poor.',
    joinInfo: 'Speak to the President or any SVdP member, or contact the parish office.',
  },
}

export async function generateStaticParams() {
  return Object.keys(MINISTRIES_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const ministry = MINISTRIES_DATA[slug]
  if (!ministry) return { title: 'Ministry Not Found' }
  return {
    title: ministry.acronym ? `${ministry.acronym} — ${ministry.name}` : ministry.name,
    description: ministry.shortDescription,
    openGraph: { title: `${ministry.name} — Archangels Catholic Church`, url: `/ministries/${slug}` },
  }
}

export default async function MinistryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ministry = MINISTRIES_DATA[slug]

  if (!ministry) {
    return (
      <div className="container-site section-py" style={{ textAlign: 'center' }}>
        <h1 className="font-serif" style={{ color: 'var(--color-navy)' }}>Ministry not found</h1>
        <Link href="/ministries" className="btn btn-primary mt-6">All Ministries</Link>
      </div>
    )
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Ministries', href: '/ministries' }, { label: ministry.acronym || ministry.name }]} />
          {ministry.acronym && (
            <p className="section-label" style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }}>{ministry.category}</p>
          )}
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '0.75rem' }}>
            {ministry.name}
          </h1>
          {ministry.acronym && (
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', letterSpacing: '0.1em' }}>{ministry.acronym}</p>
          )}
        </div>
      </section>

      <div className="container-site section-py">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(300px, 30%)', gap: '3rem', alignItems: 'start' }}>

          {/* Main */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* Cover image */}
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '16/7' }}>
              <ImagePlaceholder label={`${ministry.acronym || ministry.name} Photo`} height="100%" />
            </div>

            {/* About */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                About {ministry.acronym || ministry.name}
              </h2>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.85, fontSize: '1.0625rem' }}>
                {ministry.fullDescription}
              </p>
            </div>

            {/* How to Join */}
            <div
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '0.75rem',
                padding: '2rem',
                border: '1px solid var(--color-border)',
              }}
            >
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                How to Join
              </h2>
              <p style={{ color: 'var(--color-stone)', marginBottom: '1rem', lineHeight: 1.75 }}>
                {ministry.requirements}
              </p>
              <p style={{ color: 'var(--color-near-black)', fontWeight: 500 }}>{ministry.joinInfo}</p>
            </div>

            {/* Gallery placeholder */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.25rem' }}>Gallery</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ borderRadius: '0.5rem', overflow: 'hidden', aspectRatio: '4/3' }}>
                    <ImagePlaceholder label={`Photo ${i}`} height="100%" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Meeting info */}
            <div className="card-base" style={{ padding: '1.75rem' }}>
              <p className="section-label" style={{ marginBottom: '1.25rem' }}>Meeting Schedule</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Calendar size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.875rem' }}>{ministry.meetingDay}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-stone)' }}>{ministry.meetingTime}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Users size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)' }}>{ministry.meetingLocation}</p>
                </div>
              </div>
            </div>

            {/* Leader contact */}
            <div style={{ backgroundColor: 'var(--color-navy)', borderRadius: '0.75rem', padding: '1.75rem' }}>
              <p className="section-label" style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }}>Ministry Leader</p>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                {ministry.leader.name}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
                {ministry.leader.title}
              </p>
              <a href={`tel:${ministry.leader.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', marginBottom: '0.625rem', textDecoration: 'none' }}>
                <Phone size={14} color="var(--color-gold)" />{ministry.leader.phone}
              </a>
              <a href={`mailto:${ministry.leader.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', textDecoration: 'none' }}>
                <Mail size={14} color="var(--color-gold)" />{ministry.leader.email}
              </a>
            </div>

            <Link href="/ministries" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              ← All Ministries
            </Link>
          </aside>
        </div>
      </div>
    </>
  )
}
