'use client'

import { useState } from 'react'
import { Cross, Heart, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

// Note: metadata export doesn't work in 'use client' components
// The metadata is set in the parent layout

const BOOKING_TYPES = [
  {
    id: 'mass',
    label: 'Mass Intention',
    icon: '✝',
    description: 'Offer a Holy Mass for a living or deceased person',
    color: 'var(--color-navy)',
  },
  {
    id: 'thanksgiving',
    label: 'Thanksgiving Mass',
    icon: '🙏',
    description: 'Give thanks to God for blessings received',
    color: '#b45309',
  },
]

export default function BookingPage() {
  const [type, setType] = useState<'mass' | 'thanksgiving' | ''>('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    intention: '',
    date: '',
    forWhom: '',
    livingOrDeceased: 'living',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="section-py container-site"
        style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <div style={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <CheckCircle size={40} color="var(--color-gold)" />
        </div>
        <h2 className="font-serif" style={{ color: 'var(--color-navy)', marginBottom: '1rem' }}>
          Your Booking Request Has Been Received!
        </h2>
        <p style={{ color: 'var(--color-stone)', maxWidth: '520px', lineHeight: 1.75, marginBottom: '2rem' }}>
          Thank you, <strong>{form.name}</strong>. The parish office will confirm your{' '}
          <strong>{type === 'thanksgiving' ? 'Thanksgiving Mass' : 'Mass Intention'}</strong> booking and get in touch with you shortly.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', opacity: 0.7 }}>
          For urgent enquiries, call: <a href="tel:+2348065690094" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>+234 806 569 0094</a>
        </p>
        <button
          onClick={() => { setSubmitted(false); setType(''); setForm({ name: '', phone: '', email: '', intention: '', date: '', forWhom: '', livingOrDeceased: 'living', message: '' }) }}
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            backgroundColor: 'var(--color-navy)',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Make Another Booking
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Page Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <div className="container-site" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>
            Parish Services
          </span>
          <h1
            className="font-serif"
            style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}
          >
            Book a Mass or Thanksgiving
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
            Request a Holy Mass to be offered for a loved one, or schedule a Thanksgiving Mass to give glory to God for His blessings.
          </p>
        </div>
      </div>

      <div className="container-site section-py">
        {/* Step 1 — Choose Type */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ color: 'var(--color-navy)', textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem' }}
          >
            Step 1: What would you like to book?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {BOOKING_TYPES.map((bt) => (
              <button
                key={bt.id}
                id={`booking-type-${bt.id}`}
                onClick={() => setType(bt.id as 'mass' | 'thanksgiving')}
                style={{
                  padding: '2rem 1.5rem',
                  border: type === bt.id ? `2px solid ${bt.color}` : '2px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  backgroundColor: type === bt.id ? `${bt.color}10` : '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: type === bt.id ? `0 0 0 4px ${bt.color}20` : 'none',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{bt.icon}</div>
                <p style={{ fontWeight: 700, color: bt.color, fontSize: '1.125rem', marginBottom: '0.375rem' }}>{bt.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-stone)', lineHeight: 1.6 }}>{bt.description}</p>
              </button>
            ))}
          </div>

          {/* Step 2 — Form */}
          {type && (
            <form onSubmit={handleSubmit} id="booking-form">
              <h2
                className="font-serif"
                style={{ color: 'var(--color-navy)', fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}
              >
                Step 2: Fill in your details
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                {/* Full Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label htmlFor="booking-name" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>Full Name *</label>
                  <input
                    id="booking-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label htmlFor="booking-phone" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>Phone Number *</label>
                  <input
                    id="booking-phone"
                    name="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 8XX XXX XXXX"
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label htmlFor="booking-email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>Email Address</label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>

                {/* Preferred Date */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label htmlFor="booking-date" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>Preferred Date *</label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Mass Intention specific */}
              {type === 'mass' && (
                <div style={{ marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label htmlFor="booking-forWhom" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>For Whom? *</label>
                    <input
                      id="booking-forWhom"
                      name="forWhom"
                      required
                      value={form.forWhom}
                      onChange={handleChange}
                      placeholder="Name of person to pray for"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label htmlFor="booking-livingOrDeceased" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>Living or Deceased?</label>
                    <select
                      id="booking-livingOrDeceased"
                      name="livingOrDeceased"
                      value={form.livingOrDeceased}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="living">Living</option>
                      <option value="deceased">Deceased (Repose of Soul)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Intention / Reason */}
              <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <label htmlFor="booking-intention" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                  {type === 'thanksgiving' ? 'Reason for Thanksgiving *' : 'Mass Intention *'}
                </label>
                <textarea
                  id="booking-intention"
                  name="intention"
                  required
                  rows={3}
                  value={form.intention}
                  onChange={handleChange}
                  placeholder={type === 'thanksgiving' ? 'Describe what you are giving thanks for...' : 'State your intention for this Mass...'}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Additional Notes */}
              <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <label htmlFor="booking-message" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)' }}>Additional Notes</label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={2}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any other information you'd like the parish to know..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Info Box */}
              <div
                style={{
                  marginTop: '2rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '0.625rem',
                  fontSize: '0.875rem',
                  color: 'var(--color-stone)',
                  lineHeight: 1.7,
                }}
              >
                📌 <strong>Please note:</strong> This form sends your request to the parish office. You will be contacted to confirm your booking and arrange the Mass stipend (if applicable). For urgent requests, call <a href="tel:+2348065690094" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>+234 806 569 0094</a>.
              </div>

              <button
                type="submit"
                id="booking-submit"
                style={{
                  marginTop: '2rem',
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'var(--color-navy)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.625rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  letterSpacing: '0.03em',
                }}
              >
                Submit Booking Request →
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1.5px solid #d1d5db',
  borderRadius: '0.5rem',
  fontSize: '0.9375rem',
  color: '#111827',
  backgroundColor: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}
