import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Article — ${slug}`,
    description: 'Parish news article from Archangels Catholic Church.',
    openGraph: { url: `/news/${slug}` },
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // In production, fetch from Payload CMS:
  // const payload = await getPayloadClient()
  // const article = await payload.find({ collection: 'news', where: { slug: { equals: slug } } })

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'News', href: '/news' }, { label: 'Article' }]} />
          <span style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.875rem' }}>
            Announcement
          </span>
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1.25rem', maxWidth: '680px' }}>
            [PLACEHOLDER — Article Title Will Load Here From CMS]
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
              <Calendar size={14} /> 26 July 2026
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>By Parish Office</span>
          </div>
        </div>
      </section>

      <div className="container-site section-py">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(280px, 28%)', gap: '3rem', alignItems: 'start' }}>

          {/* Article body */}
          <article>
            {/* Featured image */}
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '16/9', marginBottom: '2.5rem' }}>
              <ImagePlaceholder label="Article Featured Image" height="100%" />
            </div>

            {/* Body text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.9, fontSize: '1.0625rem' }}>
                [PLACEHOLDER — Article body content. This text will be replaced with the actual article content 
                once the parish administrator publishes it via the Payload CMS admin panel at /admin.]
              </p>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.9, fontSize: '1.0625rem' }}>
                [PLACEHOLDER — Paragraph 2. The article will include all relevant parish information, 
                dates, contact details, and any necessary instructions for parishioners.]
              </p>
              <p style={{ color: 'var(--color-stone)', lineHeight: 1.9, fontSize: '1.0625rem' }}>
                For more information, please contact the parish office at{' '}
                <a href="tel:+2348065690094" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                  +234 806 569 0094
                </a>{' '}
                or email{' '}
                <a href="mailto:archangels_sat@yahoo.com" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                  archangels_sat@yahoo.com
                </a>.
              </p>
            </div>

            {/* Tags */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
              <Tag size={14} style={{ color: 'var(--color-stone)' }} />
              {['Parish News', 'Announcement'].map((tag) => (
                <span key={tag} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-stone)' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation */}
            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href="/news" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to News
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                <Share2 size={16} /> Share
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '7rem' }}>
            <div className="card-base" style={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
              <p className="section-label" style={{ marginBottom: '1rem' }}>More News</p>
              {[1, 2, 3].map((i) => (
                <Link key={i} href="/news" style={{ display: 'block', paddingBlock: '0.75rem', borderBottom: '1px solid var(--color-border-light)', textDecoration: 'none' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-navy)', lineHeight: 1.4 }}>
                    [Placeholder News Item {i}]
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-stone)', marginTop: '0.25rem' }}>July 2026</p>
                </Link>
              ))}
            </div>
            <Link href="/news" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              All News
            </Link>
          </aside>
        </div>
      </div>
    </>
  )
}
