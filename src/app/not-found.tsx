import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found — Archangels Catholic Church',
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        backgroundColor: 'var(--color-warm-white)',
      }}
    >
      <p className="font-serif" style={{ fontSize: '6rem', color: 'var(--color-navy)', lineHeight: 1, marginBottom: '1rem' }}>404</p>
      <h1 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '2rem', fontWeight: 400, marginBottom: '1rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--color-stone)', maxWidth: '420px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
        The page you are looking for may have been moved, deleted, or does not exist.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary">Return Home</Link>
        <Link href="/contact" className="btn btn-outline">Contact the Parish</Link>
      </div>
    </div>
  )
}
