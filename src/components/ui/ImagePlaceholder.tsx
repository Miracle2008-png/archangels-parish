import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: string
  className?: string
  height?: string
}

export default function ImagePlaceholder({
  label = 'Photo',
  aspectRatio,
  className = '',
  height,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder ${className}`}
      style={{
        aspectRatio: aspectRatio ?? undefined,
        height: height ?? (aspectRatio ? undefined : '100%'),
        borderRadius: 'inherit',
        minHeight: height ? undefined : '200px',
      }}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      <ImageIcon
        size={28}
        strokeWidth={1}
        style={{ color: 'var(--color-stone-light)' }}
      />
      <span style={{ color: 'var(--color-stone-light)', fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
        {label}
      </span>
    </div>
  )
}
