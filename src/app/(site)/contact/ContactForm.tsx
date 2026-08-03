'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, MessageCircle, AlertTriangle, MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'

const OFFICE_HOURS = [
  { days: 'Mon, Tue, Wed, Fri', hours: '9:00am–2:00pm, 3:00pm–5:00pm' },
  { days: 'Thursday', hours: 'Closed' },
  { days: 'Sunday', hours: 'Closed (worship day)' },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // TODO: Connect to Payload form submission endpoint or Resend / Nodemailer
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1.5px solid var(--color-border)',
    borderRadius: '0.375rem',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: '#fff',
    color: 'var(--color-near-black)',
    transition: 'border-color 0.2s',
  }

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* ── Contact Info ─────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {[
              {
                icon: MapPin, bg: 'var(--color-navy)', iconColor: 'var(--color-gold)',
                label: 'Address',
                content: (
                  <>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-stone)', lineHeight: 1.7 }}>
                      1 Mission Street, P.O. Box 541<br />Satellite Town, Lagos<br />Nigeria
                    </p>
                    <a href="https://maps.google.com/?q=1+Mission+Street+Satellite+Town+Lagos"
                      target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '0.8125rem', color: 'var(--color-navy)', fontWeight: 600, display: 'block', marginTop: '0.75rem' }}>
                      Get directions →
                    </a>
                  </>
                ),
              },
              {
                icon: Phone, bg: 'var(--color-navy)', iconColor: 'var(--color-gold)',
                label: 'Phone',
                content: (
                  <p style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="tel:+2348065690094" style={{ fontSize: '1rem', color: 'var(--color-near-black)', fontWeight: 500 }}>
                      0806 569 0094
                    </a>
                    <a href="tel:+2348161548538" style={{ fontSize: '1rem', color: 'var(--color-near-black)', fontWeight: 500 }}>
                      0816 154 8538
                    </a>
                  </p>
                ),
              },
              {
                icon: Mail, bg: 'var(--color-navy)', iconColor: 'var(--color-gold)',
                label: 'Email',
                content: (
                  <p style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="mailto:info@archangelsparishsat.com" style={{ fontSize: '0.9375rem', color: 'var(--color-near-black)' }}>
                      info@archangelsparishsat.com
                    </a>
                    <a href="mailto:archangels_sat@yahoo.com" style={{ fontSize: '0.9375rem', color: 'var(--color-near-black)' }}>
                      archangels_sat@yahoo.com
                    </a>
                  </p>
                ),
              },
              {
                icon: Globe, bg: 'var(--color-navy)', iconColor: 'var(--color-gold)',
                label: 'Facebook',
                content: (
                  <a href="https://www.facebook.com/archangelsparishsat1" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.9375rem', color: 'var(--color-near-black)' }}>
                    facebook.com/archangelsparishsat1
                  </a>
                ),
              },
            ].map(({ icon: Icon, bg, iconColor, label, content }) => (
              <div key={label} className="card-base" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color={iconColor} strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.375rem' }}>{label}</p>
                  {content}
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <div className="card-base" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageCircle size={18} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.375rem' }}>WhatsApp</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-near-black)', marginBottom: '0.75rem' }}>+234 806 569 0094 or +234 816 154 8538</p>
                <a href="https://wa.me/2348065690094" target="_blank" rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ display: 'inline-flex', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none' }}>
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card-base" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={18} color="var(--color-navy)" strokeWidth={1.5} />
                </div>
                <p style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Office Hours</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {OFFICE_HOURS.map((row) => (
                  <div key={row.days} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--color-stone)' }}>{row.days}</span>
                    <span style={{ color: 'var(--color-near-black)', fontWeight: 500 }}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--color-cream)', borderLeft: '4px solid var(--color-burgundy)', borderRadius: '0.375rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <AlertTriangle size={18} style={{ color: 'var(--color-burgundy)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-burgundy)', fontSize: '0.875rem', marginBottom: '0.375rem' }}>Emergency — Priest on Call</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-stone)', lineHeight: 1.6 }}>
                  For anointing of the sick or urgent pastoral emergencies, call <strong>+234 806 569 0094</strong>. Please reserve this for genuine emergencies only.
                </p>
              </div>
            </div>
          </div>

          {/* ── Contact Form ──────────────────────────────────────── */}
          <div>
            <h2 className="font-serif" style={{ color: 'var(--color-navy)', fontSize: '2rem', marginBottom: '0.75rem' }}>
              Send us a message
            </h2>
            <p style={{ color: 'var(--color-stone)', marginBottom: '2rem', fontSize: '0.9375rem' }}>
              We aim to respond to all enquiries within two working days.
            </p>

            {status === 'sent' ? (
              <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-cream)', borderRadius: '0.75rem', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>✓</div>
                <h3 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '0.625rem' }}>Message Sent</h3>
                <p style={{ color: 'var(--color-stone)', fontSize: '0.9rem' }}>
                  Thank you for getting in touch. We will respond within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Full Name *</label>
                    <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-navy)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-navy)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Phone Number</label>
                  <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 ..." style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-navy)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')} />
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Subject *</label>
                  <select id="contact-subject" name="subject" required value={form.subject} onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none', color: form.subject ? 'var(--color-near-black)' : 'var(--color-stone)' } as React.CSSProperties}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-navy)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}>
                    <option value="">Select a subject</option>
                    <option value="sacraments">Sacraments enquiry</option>
                    <option value="mass">Mass times</option>
                    <option value="ministries">Ministries</option>
                    <option value="general">General enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Message *</label>
                  <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="How can we help you?"
                    style={{ ...inputStyle, resize: 'vertical' } as React.CSSProperties}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-navy)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')} />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}
                  style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
                  <Send size={16} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ height: '400px', marginTop: '4rem', backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <MapPin size={36} style={{ color: 'var(--color-stone-light)' }} strokeWidth={1} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-stone)', fontWeight: 600 }}>Google Maps</p>
          <p style={{ color: 'var(--color-stone-light)', fontSize: '0.875rem' }}>
            Paste your Google Maps embed URL via Admin → Settings → Contact Info
          </p>
        </div>
        <a href="https://maps.google.com/?q=1+Mission+Street+Satellite+Town+Lagos"
          target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          Open in Google Maps
        </a>
      </div>
    </section>
  )
}
