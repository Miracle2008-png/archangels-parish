interface SectionHeaderProps {
  label?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'center' : 'left'
  const alignItems = align === 'center' ? 'center' : 'flex-start'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems,
        textAlign,
        marginBottom: '3rem',
      }}
    >
      {label && (
        <span
          className="section-label"
          style={{
            display: 'block',
            marginBottom: '0.875rem',
            color: light ? 'var(--color-gold)' : 'var(--color-gold)',
          }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-serif"
        style={{
          color: light ? '#fff' : 'var(--color-navy)',
          maxWidth: align === 'center' ? '640px' : undefined,
        }}
      >
        {heading}
      </h2>
      {align === 'center' && !label && (
        <div
          style={{
            width: '3rem',
            height: '2px',
            backgroundColor: 'var(--color-gold)',
            marginTop: '1.25rem',
          }}
        />
      )}
      {subheading && (
        <p
          style={{
            marginTop: '1.25rem',
            fontSize: '1.0625rem',
            color: light ? 'rgba(255,255,255,0.7)' : 'var(--color-stone)',
            maxWidth: align === 'center' ? '560px' : '520px',
            lineHeight: 1.75,
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
