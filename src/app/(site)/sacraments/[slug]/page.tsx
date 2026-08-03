import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Phone, Mail } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const SACRAMENT_DATA: Record<string, {
  name: string
  summary: string
  introduction: string
  requirements: string[]
  process: { step: number; title: string; description: string }[]
  contact: { name: string; role: string; phone: string; email: string }
  faq: { question: string; answer: string }[]
}> = {
  baptism: {
    name: 'Baptism',
    summary: 'The first sacrament of initiation, through which one becomes a member of the Body of Christ.',
    introduction: 'Baptism is the gateway to the other sacraments. Through the waters of Baptism, original sin is washed away and the new Christian is born into the life of God. At Archangels Catholic Church, we celebrate infant and adult baptism with great joy and solemnity.',
    requirements: [
      'Completed Baptism registration form',
      'Birth certificate of the child',
      'Baptism certificate of parents (if Catholic)',
      'Marriage certificate of parents (if applicable)',
      'Godparents must be practising Catholics, confirmed, and not under any canonical impediment',
      'Attendance at Baptism preparation session (for parents and godparents)',
    ],
    process: [
      { step: 1, title: 'Contact the Parish Office', description: 'Call or visit the parish office to express your intention and collect a registration form.' },
      { step: 2, title: 'Complete Registration', description: 'Register Monday–Friday, 9:00am–2:00pm or 3:00pm–5:00pm, with all required documents.' },
      { step: 3, title: 'Attend Pre-Baptism Class', description: 'Parents and godparents attend the Pre-Baptism Class on the 2nd and last Saturday of the month at 8:00am.' },
      { step: 4, title: 'Baptism Ceremony', description: 'Baptism is celebrated on the 1st and 3rd Saturdays of the month at 8:00am.' },
    ],
    contact: { name: '[PLACEHOLDER]', role: 'Baptism Coordinator', phone: '+234 806 569 0094', email: 'archangels_sat@yahoo.com' },
    faq: [
      { question: 'How often is Baptism celebrated?', answer: 'Baptism is celebrated on the 1st and 3rd Saturdays of each month at 8:00am. Registration runs Monday–Friday (9am–2pm and 3pm–5pm), and the Pre-Baptism Class for parents and godparents is held on the 2nd and last Saturday of the month at 8:00am.' },
      { question: 'Can non-Catholic godparents be chosen?', answer: 'A non-Catholic Christian may serve as a Christian Witness, but at least one godparent must be a practising Catholic.' },
      { question: 'What should we wear?', answer: 'The child is traditionally dressed in white to symbolise purity and new life in Christ. Family members may dress smartly.' },
    ],
  },
  'first-communion': {
    name: 'First Holy Communion',
    summary: 'Receiving the Body and Blood of Christ for the first time — the source and summit of Christian life.',
    introduction: 'First Holy Communion is a landmark moment in a Catholic child\'s life. At Archangels Catholic Church, children are carefully prepared through the Catechism programme to receive Our Lord worthily and with understanding.',
    requirements: [
      'Must have received Baptism',
      'Must be enrolled in the parish Catechism class',
      'Regular Sunday Mass attendance',
      'Must have received the Sacrament of Penance (Confession) before First Communion',
      'Parent/guardian participation in preparation meetings',
    ],
    process: [
      { step: 1, title: 'Enrol in Catechism', description: 'Register the child in the parish Catechism programme. Classes are held weekly.' },
      { step: 2, title: 'Complete Two Years of Formation', description: 'Children attend formation over two years to ensure readiness.' },
      { step: 3, title: 'First Confession', description: 'Children receive the Sacrament of Penance before their First Communion.' },
      { step: 4, title: 'First Communion Mass', description: 'The celebration takes place at a special Mass, usually in May or November.' },
    ],
    contact: { name: '[PLACEHOLDER]', role: 'Catechism Coordinator', phone: '+234 806 569 0094', email: 'archangels_sat@yahoo.com' },
    faq: [
      { question: 'What age do children receive First Communion?', answer: '[PLACEHOLDER — e.g., Children typically receive First Communion at around age 8–9, after completing the required catechesis.]' },
      { question: 'What if my child was baptised in another parish?', answer: 'Bring the Baptism certificate from your child\'s baptising parish when enrolling.' },
    ],
  },
  confirmation: {
    name: 'Confirmation',
    summary: 'Sealed with the gifts of the Holy Spirit — the completion of baptismal grace.',
    introduction: 'Confirmation is the sacrament through which Catholics receive the fullness of the Holy Spirit, given at Pentecost. Young people are prepared through a dedicated formation programme that deepens their understanding of the faith.',
    requirements: [
      'Received Baptism and First Holy Communion',
      'Enrolled in the Confirmation preparation programme',
      'Regular Mass attendance',
      'Must choose a Confirmation name (a saint\'s name)',
      'Must have a sponsor who is a confirmed, practising Catholic',
      'Letter of recommendation from class teacher or parish minister',
    ],
    process: [
      { step: 1, title: 'Register for Preparation', description: 'Register with the Catechism/Confirmation coordinator in the parish office.' },
      { step: 2, title: 'Formation Programme', description: 'Attend weekly formation sessions over [PLACEHOLDER] months.' },
      { step: 3, title: 'Retreat', description: 'Participate in the Confirmation retreat offered before the sacrament.' },
      { step: 4, title: 'Confirmation Mass', description: 'Celebrated by the Archbishop or his delegate at a special diocesan or parish ceremony.' },
    ],
    contact: { name: '[PLACEHOLDER]', role: 'Confirmation Coordinator', phone: '+234 806 569 0094', email: 'archangels_sat@yahoo.com' },
    faq: [
      { question: 'When is the next Confirmation?', answer: '[PLACEHOLDER — Contact the parish office for the date of the next Confirmation ceremony.]' },
      { question: 'Can adults receive Confirmation?', answer: 'Adults who have not been confirmed are welcome to receive Confirmation through the RCIA process or separately. Contact the parish office.' },
    ],
  },
  marriage: {
    name: 'Marriage',
    summary: 'The holy covenant of love between a man and a woman, raised by Christ to the dignity of a sacrament.',
    introduction: 'Marriage in the Catholic Church is a sacred covenant and a sacrament. Archangels Catholic Church celebrates the beauty of Christian marriage and accompanies couples from engagement through the wedding day and beyond.',
    requirements: [
      'At least one party must be a baptised Catholic',
      'Contact the parish at least six months before the intended wedding date',
      'Baptism and Confirmation certificates for Catholic parties',
      'Letter of freedom from home parish (if not registered here)',
      'Completion of Pre-Cana / Marriage preparation course',
      'Civil marriage certificate (if applicable)',
      'For previously married parties: annulment decree or death certificate of former spouse',
    ],
    process: [
      { step: 1, title: 'Initial Meeting', description: 'Schedule a meeting with the Parish Priest at least six months in advance.' },
      { step: 2, title: 'Register', description: 'Register on Tuesdays, 9:00am–2:00pm or 3:00pm–5:00pm, and submit all required documents.' },
      { step: 3, title: 'Marriage Preparatory Classes', description: 'Attend the parish Marriage Preparatory Classes, held on Saturdays at 8:30am.' },
      { step: 4, title: 'Wedding Ceremony', description: 'Weddings take place on Saturdays at 10:00am. Please note: late arrival attracts a fine.' },
    ],
    contact: { name: 'Rev. Fr. Dr. Godfrey Udeh, C.Ss.R', role: 'Parish Priest', phone: '+234 806 569 0094', email: 'archangels_sat@yahoo.com' },
    faq: [
      { question: 'Can non-Catholics marry in the church?', answer: 'Yes, with a dispensation from the Bishop. One party must be Catholic. Contact the parish priest for guidance.' },
      { question: 'How far in advance should we book?', answer: 'We recommend booking at least six months in advance, especially for popular dates.' },
      { question: 'Can we choose our own music?', answer: 'Yes, within the guidelines of sacred music approved for the liturgy. Discuss this with the parish choir.' },
    ],
  },
  rcia: {
    name: 'RCIA',
    summary: 'Rite of Christian Initiation of Adults — the journey into full communion with the Catholic Church.',
    introduction: 'RCIA is for adults who have never been baptised, those baptised in another Christian tradition who wish to become Catholic, or Catholics who have not received all their sacraments. The programme runs throughout the year, culminating at the Easter Vigil.',
    requirements: [
      'Adults or older teenagers (17+)',
      'Genuine desire to learn about the Catholic faith',
      'Willingness to attend weekly sessions',
      'A sponsor from the parish community',
    ],
    process: [
      { step: 1, title: 'Enquiry Period', description: 'Initial conversations about faith, questions, and what it means to be Catholic.' },
      { step: 2, title: 'Catechumenate', description: 'A period of catechesis, prayer, and formation in the faith. This may last one year or more.' },
      { step: 3, title: 'Purification & Enlightenment', description: 'The final preparation during Lent, including the Scrutinies.' },
      { step: 4, title: 'Easter Vigil', description: 'Reception of the sacraments (Baptism, Confirmation, Eucharist) at the Easter Vigil Mass.' },
      { step: 5, title: 'Mystagogy', description: 'Ongoing formation and integration into parish life after the sacraments.' },
    ],
    contact: { name: '[PLACEHOLDER]', role: 'RCIA Coordinator', phone: '+234 806 569 0094', email: 'archangels_sat@yahoo.com' },
    faq: [
      { question: 'When does RCIA begin?', answer: '[PLACEHOLDER — RCIA typically begins in September/October each year. However, you can join at any time — contact the parish to find out more.]' },
      { question: 'How long does it take?', answer: 'The process typically takes about one year, though this varies depending on each person\'s background and readiness.' },
    ],
  },
  funeral: {
    name: 'Funeral & Anointing',
    summary: 'The Church accompanies the faithful through illness and death with compassion, prayer, and hope.',
    introduction: 'In times of illness and in the face of death, the Church stands with the faithful. Anointing of the Sick brings God\'s healing presence; the Funeral Rites commend the soul of the departed to God\'s mercy with dignity and hope.',
    requirements: [
      'For Anointing of the Sick: the person should be seriously ill or in danger of death. It can be received more than once.',
      'For Funeral Mass: the deceased must be a baptised Catholic in good standing',
      'Contact the parish office as soon as possible',
      'For emergency anointing: call the emergency/priest-on-call number',
    ],
    process: [
      { step: 1, title: 'Contact the Parish', description: 'Call the parish office or the priest on call in an emergency situation.' },
      { step: 2, title: 'Arrange the Vigil', description: 'A prayer vigil (wake service) may be arranged at the family home or church.' },
      { step: 3, title: 'Funeral Mass', description: 'The Funeral Mass is celebrated in the church. We will guide the family through all arrangements.' },
      { step: 4, title: 'Committal', description: 'Prayers at the graveside accompany the body to its place of rest.' },
    ],
    contact: { name: 'Rev. Fr. Dr. Godfrey Udeh, C.Ss.R', role: 'Parish Priest / Parish Office', phone: '+234 806 569 0094', email: 'archangels_sat@yahoo.com' },
    faq: [
      { question: 'Is there an emergency number for anointing of the sick?', answer: 'Yes — sick calls are received anytime. Call the parish on +234 806 569 0094 or +234 816 154 8538 (also on WhatsApp) and a priest will attend.' },
      { question: 'What if the person is not Catholic?', answer: 'Speak to the parish priest who can advise on what the Church is able to provide in these circumstances.' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(SACRAMENT_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const sacrament = SACRAMENT_DATA[slug]
  if (!sacrament) return { title: 'Sacrament Not Found' }
  return {
    title: sacrament.name,
    description: sacrament.summary,
    openGraph: { title: `${sacrament.name} — Archangels Catholic Church`, url: `/sacraments/${slug}` },
  }
}

export default async function SacramentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sacrament = SACRAMENT_DATA[slug]

  if (!sacrament) {
    return (
      <div className="container-site section-py" style={{ textAlign: 'center' }}>
        <h1 className="font-serif" style={{ color: 'var(--color-navy)' }}>Sacrament not found</h1>
        <Link href="/sacraments" className="btn btn-primary mt-6">Back to Sacraments</Link>
      </div>
    )
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Sacraments', href: '/sacraments' }, { label: sacrament.name }]} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            {sacrament.name}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7 }}>
            {sacrament.summary}
          </p>
        </div>
      </section>

      <div className="container-site section-py">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(300px, 30%)', gap: '3rem', alignItems: 'start' }}>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Hero image */}
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '16/7' }}>
              <ImagePlaceholder label={`${sacrament.name} Photo`} height="100%" />
            </div>

            {/* Introduction */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.25rem' }}>About this Sacrament</h2>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.85, fontSize: '1.0625rem' }}>{sacrament.introduction}</p>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.25rem' }}>Requirements &amp; Documents</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {sacrament.requirements.map((req, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ color: 'var(--color-near-black)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.5rem' }}>The Process</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {sacrament.process.map((step) => (
                  <div key={step.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      backgroundColor: 'var(--color-navy)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.875rem', flexShrink: 0,
                    }}>
                      {step.step}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.375rem', fontSize: '1rem' }}>
                        {step.title}
                      </h3>
                      <p style={{ color: 'var(--color-stone)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sacrament.faq.map((item, i) => (
                  <div key={i} className="card-base" style={{ padding: '1.5rem' }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.625rem', fontSize: '0.9375rem' }}>
                      {item.question}
                    </p>
                    <p style={{ color: 'var(--color-stone)', fontSize: '0.875rem', lineHeight: 1.75 }}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Contact card */}
            <div style={{ backgroundColor: 'var(--color-navy)', borderRadius: '0.75rem', padding: '1.75rem' }}>
              <p className="section-label" style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }}>Who to Contact</p>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                {sacrament.contact.name}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
                {sacrament.contact.role}
              </p>
              <a
                href={`tel:${sacrament.contact.phone.replace(/\s/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', marginBottom: '0.625rem', textDecoration: 'none' }}
              >
                <Phone size={14} color="var(--color-gold)" />
                {sacrament.contact.phone}
              </a>
              <a
                href={`mailto:${sacrament.contact.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', textDecoration: 'none' }}
              >
                <Mail size={14} color="var(--color-gold)" />
                {sacrament.contact.email}
              </a>
            </div>

            {/* Back to all sacraments */}
            <Link href="/sacraments" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              ← All Sacraments
            </Link>
          </aside>
        </div>
      </div>
    </>
  )
}
