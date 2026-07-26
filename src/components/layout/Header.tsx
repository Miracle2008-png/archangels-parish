'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Cross } from 'lucide-react'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our History', href: '/about#history' },
      { label: 'Parish Priests', href: '/about#priests' },
      { label: 'Office Staff', href: '/about#staff' },
      { label: 'Mission & Vision', href: '/about#mission' },
    ],
  },
  { label: 'Mass Times', href: '/mass-times' },
  {
    label: 'Sacraments',
    href: '/sacraments',
    children: [
      { label: 'Baptism', href: '/sacraments/baptism' },
      { label: 'First Holy Communion', href: '/sacraments/first-communion' },
      { label: 'Confirmation', href: '/sacraments/confirmation' },
      { label: 'Marriage', href: '/sacraments/marriage' },
      { label: 'RCIA', href: '/sacraments/rcia' },
      { label: 'Funeral / Anointing', href: '/sacraments/funeral' },
    ],
  },
  {
    label: 'Ministries',
    href: '/ministries',
    children: [
      { label: 'CYON', href: '/ministries/cyon' },
      { label: 'CMO', href: '/ministries/cmo' },
      { label: 'CWO', href: '/ministries/cwo' },
      { label: 'Legion of Mary', href: '/ministries/legion-of-mary' },
      { label: 'Choir', href: '/ministries/choir' },
      { label: 'Altar Servers', href: '/ministries/altar-servers' },
      { label: 'St Vincent de Paul', href: '/ministries/st-vincent-de-paul' },
      { label: 'View All', href: '/ministries' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_0_0_#E8E3DC]'
            : 'bg-white/95 backdrop-blur-sm',
        ].join(' ')}
        role="banner"
      >
        {/* Top bar */}
        <div
          style={{ backgroundColor: 'var(--color-navy)', color: '#fff' }}
          className="hidden lg:block"
        >
          <div className="container-site flex items-center justify-between py-1.5">
            <p style={{ fontSize: '0.75rem', opacity: 0.75 }}>
              Archdiocese of Lagos · Satellite Town, Lagos, Nigeria
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: '0.75rem', opacity: 0.8 }}>
              <a href="tel:+2348065690094" className="hover:opacity-100 transition-opacity">
                +234 806 569 0094
              </a>
              <span style={{ opacity: 0.3 }}>|</span>
              <a href="mailto:archangels_sat@yahoo.com" className="hover:opacity-100 transition-opacity">
                archangels_sat@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="container-site" aria-label="Main navigation">
          <div className="flex items-center justify-between" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Archangels Catholic Church — Home"
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1.5px solid var(--color-gold)',
                  position: 'relative'
                }}
              >
                <Image 
                  src="/logo.jpg" 
                  alt="Archangels Catholic Church Logo"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div>
                <p
                  className="font-serif"
                  style={{ fontSize: '1.0625rem', fontWeight: 600, lineHeight: 1.1, color: 'var(--color-navy)' }}
                >
                  Archangels
                </p>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    color: 'var(--color-stone)',
                    letterSpacing: '0.06em',
                    fontWeight: 500,
                  }}
                >
                  Catholic Church
                </p>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div
              ref={dropdownRef}
              className="hidden xl:flex items-center gap-1"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={['nav-link flex items-center gap-1 px-3 py-2 rounded-md transition-colors', isActive(item.href) ? 'active' : ''].join(' ')}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          style={{
                            transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.2s ease',
                          }}
                        />
                      </button>

                      {openDropdown === item.label && (
                        <div
                          className="absolute top-full left-0 mt-2 py-2 rounded-lg"
                          style={{
                            backgroundColor: '#fff',
                            border: '1px solid var(--color-border)',
                            boxShadow: 'var(--shadow-xl)',
                            minWidth: '200px',
                            zIndex: 100,
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm transition-colors"
                              style={{ color: 'var(--color-near-black)' }}
                              onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = 'var(--color-cream)'
                                ;(e.target as HTMLElement).style.color = 'var(--color-navy)'
                              }}
                              onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = ''
                                ;(e.target as HTMLElement).style.color = 'var(--color-near-black)'
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={['nav-link px-3 py-2 rounded-md', isActive(item.href) ? 'active' : ''].join(' ')}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile button */}
            <div className="flex items-center gap-3">
              <Link
                href="/mass-times"
                className="btn btn-primary btn-sm hidden lg:inline-flex"
                id="nav-mass-times-cta"
              >
                Mass Times
              </Link>
              <button
                className="xl:hidden p-2 rounded-md transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                style={{ color: 'var(--color-navy)' }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 xl:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={[
          'fixed top-0 right-0 bottom-0 z-50 xl:hidden overflow-y-auto transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        style={{ width: '300px', backgroundColor: '#fff', boxShadow: 'var(--shadow-xl)' }}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <p className="font-serif" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
            Navigation
          </p>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ color: 'var(--color-stone)' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="py-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.href) ? 'var(--color-navy)' : 'var(--color-near-black)',
                  borderLeft: isActive(item.href) ? '3px solid var(--color-gold)' : '3px solid transparent',
                }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div style={{ backgroundColor: 'var(--color-cream)' }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-10 py-2 transition-colors"
                      style={{ fontSize: '0.8125rem', color: 'var(--color-stone)' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-6 pb-6">
          <Link href="/mass-times" className="btn btn-primary w-full justify-center">
            View Mass Times
          </Link>
        </div>
      </aside>
    </>
  )
}
