import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, Heart, Flame, BookOpen, ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Sacraments',
  description:
    'The seven sacraments celebrated at Archangels Catholic Church — Baptism, First Holy Communion, Confirmation, Marriage, RCIA, and Funeral/Anointing of the Sick.',
  openGraph: {
    title: 'Sacraments — Archangels Catholic Church',
    url: '/sacraments',
  },
}

const SACRAMENTS = [
  {
    name: 'Baptism',
    slug: 'baptism',
    icon: Droplets,
    summary: 'The door to the sacramental life of the Church. Welcome new members into the Body of Christ.',
    colour: '#1B4F8A',
  },
  {
    name: 'First Holy Communion',
    slug: 'first-communion',
    icon: Heart,
    summary: 'The Eucharist — the source and summit of the Christian life. Receive the Body and Blood of Christ for the first time.',
    colour: '#6B2737',
  },
  {
    name: 'Confirmation',
    slug: 'confirmation',
    icon: Flame,
    summary: 'Sealed with the gift of the Holy Spirit. Deepening and strengthening of baptismal grace.',
    colour: '#8B4A0A',
  },
  {
    name: 'Marriage',
    slug: 'marriage',
    icon: Heart,
    summary: 'The covenant of love between a man and a woman, elevated by Christ to the dignity of a sacrament.',
    colour: '#6B2737',
  },
  {
    name: 'RCIA',
    slug: 'rcia',
    icon: BookOpen,
    summary: 'Rite of Christian Initiation of Adults — the journey of adults entering into full communion with the Catholic Church.',
    colour: '#1B4A2A',
  },
  {
    name: 'Funeral & Anointing',
    slug: 'funeral',
    icon: ChevronRight,
    summary: 'The Church accompanies the faithful through illness and death with prayer, anointing, and the hope of the resurrection.',
    colour: '#3A3A3A',
  },
]

export default function SacramentsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Sacraments' }]} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            The Sacraments
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7 }}>
            Through the sacraments, God&rsquo;s grace is made visible in our lives — from birth 
            to death and at every significant moment in between.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-py-sm" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-navy)', lineHeight: 1.75, fontStyle: 'italic' }}>
            &ldquo;The sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church, 
            by which divine life is dispensed to us.&rdquo;
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', marginTop: '0.75rem' }}>— Catechism of the Catholic Church, §1131</p>
        </div>
      </section>

      {/* Sacraments Grid */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <SectionHeader
            label="Parish Sacraments"
            heading="How can we help you?"
            align="center"
            subheading="Select a sacrament below to learn about requirements, the process, downloadable forms, and who to contact."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {SACRAMENTS.map(({ name, slug, icon: Icon, summary }) => (
              <Link
                key={slug}
                href={`/sacraments/${slug}`}
                className="card-base"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '0.5rem', overflow: 'hidden' }}>
                  <ImagePlaceholder label={`${name} Image`} height="100%" />
                </div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={22} color="var(--color-navy)" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif" style={{ fontSize: '1.375rem', color: 'var(--color-navy)', marginBottom: '0.625rem' }}>
                    {name}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.75 }}>{summary}</p>
                </div>
                <span
                  style={{
                    marginTop: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                  }}
                >
                  Learn more &amp; requirements <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py-sm" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <h2 className="font-serif" style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
            Not sure where to start?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Contact the parish office and we will guide you through the process, step by step.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Contact the Parish Office
          </Link>
        </div>
      </section>
    </>
  )
}
