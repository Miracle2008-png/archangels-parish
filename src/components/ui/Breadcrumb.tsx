import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.25rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {allItems.map((item, i) => {
          const isLast = i === allItems.length - 1
          return (
            <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {i > 0 && (
                <ChevronRight
                  size={13}
                  style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}
                />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  style={{
                    fontSize: '0.8125rem',
                    color: isLast ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)',
                    fontWeight: isLast ? 500 : 400,
                  }}
                >
                  {i === 0 ? <Home size={13} /> : item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.9)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                >
                  {i === 0 ? <Home size={13} /> : item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
