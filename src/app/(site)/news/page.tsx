import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Parish news, announcements, and weekly bulletins from Archangels Catholic Church, Satellite Town, Lagos.',
  openGraph: { title: 'News — Archangels Catholic Church', url: '/news' },
}

const CATEGORIES = ['All', 'Announcements', 'Parish News', 'Weekly Bulletin', 'Diocese', 'Events', 'Sacraments']

const SAMPLE_NEWS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `[PLACEHOLDER NEWS ITEM ${i + 1}]`,
  excerpt: 'This is a placeholder for a real news item. Once the CMS is populated by the parish administrator, real content will appear here.',
  category: i % 2 === 0 ? 'Announcements' : 'Parish News',
  publishedDate: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000),
  slug: `placeholder-news-${i + 1}`,
  featured: i === 0,
}))

function formatDate(date: Date) {
  return date.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function NewsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'News' }]} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            News &amp; Announcements
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '480px', lineHeight: 1.7 }}>
            Stay informed about parish life, diocesan news, and upcoming events.
          </p>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">

          {/* Category Filter */}
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
                  transition: 'all 0.2s ease',
                  borderColor: i === 0 ? 'var(--color-navy)' : 'var(--color-border)',
                  backgroundColor: i === 0 ? 'var(--color-navy)' : '#fff',
                  color: i === 0 ? '#fff' : 'var(--color-stone)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {SAMPLE_NEWS.filter((n) => n.featured).map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                marginBottom: '3rem',
                textDecoration: 'none',
                backgroundColor: '#fff',
                borderRadius: '1rem',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
              }}
            >
              <div style={{ height: '300px' }}>
                <ImagePlaceholder label="Featured Article" height="100%" />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                    Featured · {article.category}
                  </span>
                </div>
                <h2 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.75rem' }}>
                  {article.title}
                </h2>
                <p style={{ color: 'var(--color-stone)', lineHeight: 1.75 }}>{article.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-stone)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={13} /> {formatDate(article.publishedDate)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* News grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {SAMPLE_NEWS.filter((n) => !n.featured).map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="card-base"
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', overflow: 'hidden' }}
              >
                <div style={{ height: '180px' }}>
                  <ImagePlaceholder label="Article Image" height="100%" />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                    {article.category}
                  </span>
                  <h3 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.25rem', lineHeight: 1.3 }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.7, flex: 1 }}>
                    {article.excerpt}
                  </p>
                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-stone-light)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <Calendar size={12} /> {formatDate(article.publishedDate)}
                    </span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
