import type { Metadata } from 'next'
import Link from 'next/link'
import { Images, Play } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos and videos from parish life at Archangels Catholic Church — Masses, events, ministries, and community moments.',
  openGraph: { title: 'Gallery — Archangels Catholic Church', url: '/gallery' },
}

const ALBUMS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `[Placeholder Album ${i + 1}]`,
  description: 'Album description will appear here once real photos are uploaded via the CMS.',
  date: new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000),
  photoCount: Math.floor(Math.random() * 20) + 5,
  category: ['Liturgy', 'Events', 'Parish Life', 'Ministries'][i % 4],
  slug: `album-${i + 1}`,
}))

const CATEGORIES = ['All', 'Liturgy', 'Events', 'Parish Life', 'Ministries', 'Sacraments']

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <Images size={36} color="var(--color-gold)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            Parish Gallery
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '480px', lineHeight: 1.7 }}>
            Glimpses of parish life — worship, community, celebration, and service.
          </p>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">

          {/* Category filter */}
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
                  borderColor: i === 0 ? 'var(--color-navy)' : 'var(--color-border)',
                  backgroundColor: i === 0 ? 'var(--color-navy)' : '#fff',
                  color: i === 0 ? '#fff' : 'var(--color-stone)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Upload reminder */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--color-cream)',
              borderRadius: '0.625rem',
              border: '1px dashed var(--color-gold)',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Images size={20} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)' }}>
              <strong style={{ color: 'var(--color-navy)' }}>Photo placeholders shown.</strong>{' '}
              Real parish photos can be uploaded by the administrator at{' '}
              <Link href="/admin" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>/admin</Link>.
            </p>
          </div>

          {/* Albums grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {ALBUMS.map((album) => (
              <Link
                key={album.id}
                href={`/gallery/${album.slug}`}
                className="card-base"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  overflow: 'hidden',
                }}
              >
                {/* Album cover with count overlay */}
                <div style={{ height: '200px', position: 'relative' }}>
                  <ImagePlaceholder label={`${album.title} Cover`} height="100%" />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.625rem',
                      borderRadius: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                    }}
                  >
                    <Images size={12} />
                    {album.photoCount} photos
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(27,42,74,0.8)',
                      color: 'var(--color-gold)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '2rem',
                    }}
                  >
                    {album.category}
                  </span>
                </div>

                {/* Album info */}
                <div style={{ padding: '1.25rem' }}>
                  <h3 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '1.125rem', marginBottom: '0.375rem' }}>
                    {album.title}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-stone-light)' }}>
                    {album.date.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
