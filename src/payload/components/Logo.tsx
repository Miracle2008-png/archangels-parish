import React from 'react'

export const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <img 
      src="/logo.jpg" 
      alt="Archangels Catholic Church Logo" 
      style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} 
    />
    <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Archangels Admin</span>
  </div>
)

export const Icon = () => (
  <img 
    src="/logo.jpg" 
    alt="Archangels Icon" 
    style={{ height: '32px', width: '32px', borderRadius: '50%', objectFit: 'cover' }} 
  />
)
