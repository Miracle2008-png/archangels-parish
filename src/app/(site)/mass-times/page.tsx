import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Download, Info, MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { jsonLd, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Mass Times & Schedule',
  description:
    'Mass times at Archangels Catholic Church — Sunday, weekday, and holy day Masses, Confession, Adoration, and office hours in Satellite Town, Lagos.',
  openGraph: {
    title: 'Mass Times — Archangels Catholic Church',
    description: 'Sunday, weekday, and holy day Mass schedules, Confession times, and Adoration.',
    url: '/mass-times',
  },
}

const SUNDAY_MASSES = [
  { time: '6:30am', notes: 'Main Church' },
  { time: '9:00am', notes: 'Main Church' },
  { time: '11:30am', notes: 'Main Church' },
  { time: '6:30pm', notes: 'Main Church' },
]

const WEEKDAY_MASSES = [
  { day: 'Monday', time: '6:30am, 12noon, 6:30pm', notes: '' },
  { day: 'Tuesday', time: '6:30am, 12noon', notes: 'SCC 7pm / Wake Keep 6pm' },
  { day: 'Wednesday', time: '6:30am, 12noon, 6:30pm', notes: '' },
  { day: 'Thursday', time: '6:30am', notes: '' },
  { day: 'Friday', time: '6:30am, 12noon, 6:30pm', notes: '' },
  { day: 'Saturday', time: '6:30am, 6:00pm', notes: 'No mid-day Mass. Evening Mass fulfils the Sunday obligation' },
]

const CONFESSION_TIMES = [
  { day: 'Monday – Friday', time: 'After the morning Mass', notes: '' },
  { day: 'Saturday', time: 'After the morning Mass & 5:00pm', notes: '' },
  { day: 'Sick calls', time: 'Anytime', notes: 'Call the parish office' },
]

const HOLY_DAYS = [
  { name: 'The Assumption of Mary', date: 'August 15', time: '[PLACEHOLDER]' },
  { name: 'All Saints Day', date: 'November 1', time: '[PLACEHOLDER]' },
  { name: 'Immaculate Conception', date: 'December 8', time: '[PLACEHOLDER]' },
  { name: 'Christmas Day', date: 'December 25', time: '[PLACEHOLDER]' },
  { name: 'New Year / Mary, Mother of God', date: 'January 1', time: '[PLACEHOLDER]' },
]

const ADORATION = [
  { day: 'Sunday', time: '5:45pm', notes: 'Benediction of the Blessed Sacrament' },
  { day: 'Wednesday', time: '6:00pm', notes: 'Mother of Perpetual Help Devotion with Rosary Procession' },
]

const OFFICE_HOURS = [
  { days: 'Mon, Tue, Wed, Fri', hours: '9:00am–2:00pm, 3:00pm–5:00pm' },
  { days: 'Thursday', hours: 'Closed' },
  { days: 'Sunday', hours: 'Closed (worship day)' },
]

function ScheduleTable({ rows, columns }: { rows: Record<string, string>[]; columns: { key: string; label: string }[] }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: '0.625rem', border: '1px solid var(--color-border)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--color-navy)' }}>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  padding: '0.875rem 1.25rem',
                  textAlign: 'left',
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: i % 2 === 0 ? '#fff' : 'var(--color-cream)',
                borderBottom: '1px solid var(--color-border-light)',
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{
                    padding: '0.875rem 1.25rem',
                    color: row[col.key] ? 'var(--color-near-black)' : 'var(--color-stone-light)',
                    fontWeight: col.key === 'time' || col.key === 'day' || col.key === 'name' ? 600 : 400,
                  }}
                >
                  {row[col.key] || '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function MassTimesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: 'Mass Times', href: '/mass-times' }]))}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Mass Times' }]} />
          <Clock size={36} color="var(--color-gold)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            Mass Times &amp; Schedule
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7 }}>
            All Mass, Confession, and Adoration times for Archangels Catholic Church, Satellite Town, Lagos.
          </p>
        </div>
      </section>

      {/* Location reminder */}
      <div style={{ backgroundColor: 'var(--color-gold)' }}>
        <div
          className="container-site"
          style={{ paddingTop: '0.875rem', paddingBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}
        >
          <MapPin size={16} color="var(--color-navy-dark)" />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy-dark)' }}>
            1 Mission Street, Satellite Town, Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* ── SUNDAY MASS ────────────────────────────────────────────── */}
      <section id="sunday" className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <SectionHeader label="Weekend Liturgy" heading="Sunday Mass" />
            <Link href="#download" className="btn btn-outline shrink-0" style={{ marginTop: '0.5rem' }}>
              <Download size={16} />
              Download Timetable
            </Link>
          </div>

          <ScheduleTable
            rows={SUNDAY_MASSES}
            columns={[
              { key: 'time', label: 'Time' },
              { key: 'notes', label: 'Notes' },
            ]}
          />

          <div
            style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              backgroundColor: 'var(--color-cream)',
              borderRadius: '0.5rem',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            <Info size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.7 }}>
              Please arrive a few minutes early. The church opens 15 minutes before each Mass. 
              Children&rsquo;s Liturgy is available at the [PLACEHOLDER] Mass on Sundays.
            </p>
          </div>
        </div>
      </section>

      {/* ── WEEKDAY MASS ───────────────────────────────────────────── */}
      <section id="weekday" className="section-py" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-site">
          <SectionHeader label="Daily Prayer" heading="Weekday Mass" />
          <ScheduleTable
            rows={WEEKDAY_MASSES}
            columns={[
              { key: 'day', label: 'Day' },
              { key: 'time', label: 'Time' },
              { key: 'notes', label: 'Notes' },
            ]}
          />
        </div>
      </section>

      {/* ── HOLY DAYS ──────────────────────────────────────────────── */}
      <section id="holy-days" className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <SectionHeader label="Liturgical Calendar" heading="Holy Days of Obligation" />
          <ScheduleTable
            rows={HOLY_DAYS}
            columns={[
              { key: 'name', label: 'Holy Day' },
              { key: 'date', label: 'Date' },
              { key: 'time', label: 'Mass Time' },
            ]}
          />
          <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-stone)' }}>
            * Schedules may change for major feasts. Check the parish notice board or contact the office.
          </p>
        </div>
      </section>

      {/* ── CONFESSION & ADORATION ─────────────────────────────────── */}
      <section id="confession" className="section-py" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Confession */}
            <div>
              <SectionHeader label="Sacrament of Reconciliation" heading="Confession" />
              <ScheduleTable
                rows={CONFESSION_TIMES}
                columns={[
                  { key: 'day', label: 'Day' },
                  { key: 'time', label: 'Time' },
                  { key: 'notes', label: 'Notes' },
                ]}
              />
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-navy)',
                  borderRadius: '0.625rem',
                }}
              >
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                  Confession is also available by appointment. Contact the parish office or speak 
                  to a priest after Mass.
                </p>
                <Link
                  href="/contact"
                  style={{ color: 'var(--color-gold)', fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginTop: '0.75rem' }}
                >
                  Book an appointment →
                </Link>
              </div>
            </div>

            {/* Adoration */}
            <div>
              <SectionHeader label="Eucharistic Devotion" heading="Adoration" />
              <ScheduleTable
                rows={ADORATION}
                columns={[
                  { key: 'day', label: 'Day' },
                  { key: 'time', label: 'Time' },
                  { key: 'notes', label: 'Notes' },
                ]}
              />
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1.25rem',
                  borderRadius: '0.625rem',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#fff',
                }}
              >
                <p style={{ color: 'var(--color-stone)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                  Eucharistic Adoration is a time of silent prayer before the Blessed Sacrament. 
                  All are welcome to spend time in the presence of Our Lord.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICE HOURS ───────────────────────────────────────────── */}
      <section id="office-hours" className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            <div>
              <SectionHeader label="Parish Administration" heading="Office Hours" />
              <ScheduleTable
                rows={OFFICE_HOURS}
                columns={[
                  { key: 'days', label: 'Days' },
                  { key: 'hours', label: 'Hours' },
                ]}
              />
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)' }}>
                  📞 <strong>+234 806 569 0094</strong>
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)' }}>
                  ✉️ <strong>archangels_sat@yahoo.com</strong>
                </p>
                <Link href="/contact" className="btn btn-primary mt-2" style={{ width: 'fit-content' }}>
                  Contact the Parish
                </Link>
              </div>
            </div>

            {/* Download timetable */}
            <div
              id="download"
              style={{
                backgroundColor: 'var(--color-navy)',
                borderRadius: '0.75rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <Download size={32} color="var(--color-gold)" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Download the Timetable
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                  Print or save the full Mass schedule including all special events, 
                  holy days, and parish activities.
                </p>
              </div>
              <button
                className="btn btn-gold"
              >
                <Download size={16} />
                Download PDF Timetable
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
