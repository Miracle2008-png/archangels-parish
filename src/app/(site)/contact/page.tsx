import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactForm from './ContactForm'
import { jsonLd, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Archangels Catholic Church — 1 Mission Street, Satellite Town, Lagos. Phone, WhatsApp, email, office hours, and online contact form.',
  openGraph: {
    title: 'Contact — Archangels Catholic Church',
    description: 'Get in touch with the parish office. Phone, WhatsApp, email, and office hours.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: 'Contact', href: '/contact' }]))}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="font-serif" style={{ color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', maxWidth: '480px', lineHeight: 1.7 }}>
            We would love to hear from you. The parish office is here to help.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
