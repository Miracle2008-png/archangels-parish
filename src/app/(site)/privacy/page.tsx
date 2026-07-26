import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Archangels Catholic Church',
  description: 'Privacy Policy for Archangels Catholic Church, Satellite Town, Lagos.',
}

const sections = [
  {
    number: '01',
    title: 'Information We Collect',
    content:
      'We may collect personal information such as your name, email address, phone number, and physical address when you register as a parishioner, sign up for a ministry or event, submit a contact or booking form, or make a donation to the parish.',
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    content:
      'The information we collect is used solely for parish-related activities — communicating parish news and events, maintaining parishioner records and sacramental registers, responding to enquiries, providing spiritual support, and processing donations.',
  },
  {
    number: '03',
    title: 'Data Protection & Sharing',
    content:
      'We do not sell, trade, or transfer your personal information to third parties. All data is kept strictly confidential within the parish administration and is protected by reasonable security measures against unauthorised access or disclosure.',
  },
  {
    number: '04',
    title: 'Your Rights',
    content:
      'You have the right to access, update, or request the deletion of your personal information from our records at any time. Please contact the parish office to make such a request and we will respond promptly.',
  },
  {
    number: '05',
    title: 'Changes to This Policy',
    content:
      'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be published on this page with a revised effective date. We encourage you to review it from time to time.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="container-site" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              marginBottom: '1.5rem',
              transition: 'color 0.2s',
            }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
          <span
            style={{
              display: 'block',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              fontWeight: 600,
              marginBottom: '0.875rem',
            }}
          >
            Legal
          </span>
          <h1
            className="font-serif"
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem' }}>
            Effective:{' '}
            {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Intro */}
      <div style={{ borderBottom: '1px solid #f0ede8' }}>
        <div
          className="container-site"
          style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 0' }}
        >
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-stone)',
              lineHeight: 1.85,
            }}
          >
            At <strong style={{ color: 'var(--color-navy)' }}>Archangels Catholic Church</strong>,
            Satellite Town, Lagos, we are committed to protecting your privacy and handling your
            personal information with respect, transparency, and care. This policy explains what
            information we collect and how we use it.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div
        className="container-site"
        style={{ maxWidth: '760px', margin: '0 auto', padding: '3.5rem 0 5rem' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {sections.map((s, i) => (
            <div
              key={s.number}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                gap: '1.5rem',
                paddingTop: i === 0 ? '0' : '2.75rem',
                paddingBottom: '2.75rem',
                borderBottom: i < sections.length - 1 ? '1px solid #f0ede8' : 'none',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '0.08em',
                  paddingTop: '0.25rem',
                }}
              >
                {s.number}
              </div>

              {/* Content */}
              <div>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-navy)',
                    marginBottom: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-stone)',
                    lineHeight: 1.85,
                  }}
                >
                  {s.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2.5rem',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(201,168,76,0.04)',
          }}
        >
          <h3
            className="font-serif"
            style={{ color: 'var(--color-navy)', fontSize: '1.125rem', marginBottom: '1.5rem' }}
          >
            Questions about this policy?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <a
              href="mailto:archangels_sat@yahoo.com"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-stone)', fontSize: '0.9375rem', textDecoration: 'none' }}
            >
              <Mail size={16} color="var(--color-gold)" />
              archangels_sat@yahoo.com
            </a>
            <a
              href="tel:+2348065690094"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-stone)', fontSize: '0.9375rem', textDecoration: 'none' }}
            >
              <Phone size={16} color="var(--color-gold)" />
              +234 806 569 0094
            </a>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-stone)', fontSize: '0.9375rem', margin: 0 }}>
              <MapPin size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              1 Mission Street, Satellite Town, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
