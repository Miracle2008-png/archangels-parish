import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Images, Calendar } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Album — ${slug}`,
    description: 'Parish photo album from Archangels Catholic Church.',
    openGraph: { url: `/gallery/${slug}` },
  }
}

export default async function GalleryAlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const placeholderPhotos = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Gallery', href: '/gallery' }, { label: 'Album' }]} />
          <span style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.875rem' }}>
            Photo Album
          </span>
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            [PLACEHOLDER — Album Title]
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
              <Calendar size={14} /> [Placeholder Date]
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
              <Images size={14} /> {placeholderPhotos.length} photos
            </span>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-site">

          <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', textDecoration: 'none', marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Back to Gallery
          </Link>

          {/* Masonry-style photo grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {placeholderPhotos.map((i) => (
              <div
                key={i}
                style={{
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  aspectRatio: i % 5 === 0 ? '4/5' : i % 3 === 0 ? '16/9' : '4/3',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
              >
                <ImagePlaceholder label={`Photo ${i}`} height="100%" />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--color-stone)', fontSize: '0.875rem', marginBottom: '1rem' }}>
              Real photos will appear here once uploaded via Admin → Gallery
            </p>
            <Link href="/gallery" className="btn btn-outline">
              ← Back to All Albums
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
