import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'About the Parish', href: '/about' },
  { label: 'Mass Times', href: '/mass-times' },
  { label: 'Sacraments', href: '/sacraments' },
  { label: 'Ministries', href: '/ministries' },
  { label: 'News & Announcements', href: '/news' },
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

const SACRAMENTS = [
  { label: 'Baptism', href: '/sacraments/baptism' },
  { label: 'First Holy Communion', href: '/sacraments/first-communion' },
  { label: 'Confirmation', href: '/sacraments/confirmation' },
  { label: 'Marriage', href: '/sacraments/marriage' },
  { label: 'RCIA', href: '/sacraments/rcia' },
  { label: 'Funeral & Anointing', href: '/sacraments/funeral' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--color-navy-dark)', color: '#fff' }} role="contentinfo">
      {/* Main footer content */}
      <div className="container-site section-py-sm">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Column 1 — Parish Identity */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201,168,76,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ color: 'var(--color-gold)', fontFamily: 'serif', fontSize: '1.25rem', fontStyle: 'italic' }}>A</span>
              </div>
              <div>
                <p
                  className="font-serif"
                  style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}
                >
                  Archangels
                </p>
                <p style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', letterSpacing: '0.06em' }}>
                  Catholic Church
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Archangels Catholic Church is a vibrant parish in the Archdiocese of Lagos, 
              serving the faithful in Satellite Town and the surrounding communities.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="https://maps.google.com/?q=1+Mission+Street+Satellite+Town+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-opacity hover:opacity-100"
                style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
              >
                <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-gold)' }} />
                1 Mission Street, Satellite Town, Lagos, Nigeria
              </a>
              <a
                href="tel:+2348065690094"
                className="flex items-center gap-2.5 transition-opacity hover:opacity-100"
                style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)' }}
              >
                <Phone size={15} style={{ color: 'var(--color-gold)' }} />
                +234 806 569 0094
              </a>
              <a
                href="mailto:archangels_sat@yahoo.com"
                className="flex items-center gap-2.5 transition-opacity hover:opacity-100"
                style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)' }}
              >
                <Mail size={15} style={{ color: 'var(--color-gold)' }} />
                archangels_sat@yahoo.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { 
                  icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, 
                  label: 'Facebook', 
                  href: '#' 
                },
                { 
                  icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, 
                  label: 'YouTube', 
                  href: '#' 
                },
                { 
                  icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
                  label: 'Instagram', 
                  href: '#' 
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Archangels Catholic Church on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-gold)'
                    el.style.color = 'var(--color-gold)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(255,255,255,0.15)'
                    el.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="section-label mb-5"
              style={{ color: 'var(--color-gold)' }}
            >
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.65)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Sacraments */}
          <div>
            <h3 className="section-label mb-5" style={{ color: 'var(--color-gold)' }}>
              Sacraments
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SACRAMENTS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.65)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mass Times Quick Ref */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.25rem',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(201,168,76,0.05)',
              }}
            >
              <p className="section-label mb-3" style={{ color: 'var(--color-gold)' }}>
                Sunday Masses
              </p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                [PLACEHOLDER — Mass times to be updated]
              </p>
              <Link
                href="/mass-times"
                style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', marginTop: '0.75rem', display: 'block' }}
              >
                Full schedule →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div
          className="container-site"
          style={{
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            © {currentYear} Archangels Catholic Church, Satellite Town, Lagos. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Admin', href: '/admin' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.35)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
