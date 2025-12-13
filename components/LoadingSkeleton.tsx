'use client'

interface SkeletonProps {
  variant?: 'text' | 'title' | 'card' | 'avatar' | 'button'
  width?: string
  height?: string
  className?: string
}

export default function LoadingSkeleton({
  variant = 'text',
  width,
  height,
  className = ''
}: SkeletonProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    text: { height: '1em', width: width || '100%' },
    title: { height: '2em', width: width || '60%' },
    card: { height: height || '200px', width: width || '100%' },
    avatar: { height: height || '48px', width: width || '48px', borderRadius: '50%' },
    button: { height: height || '40px', width: width || '120px', borderRadius: 'var(--radius-lg)' }
  }

  return (
    <div
      className={`skeleton ${className}`}
      style={variantStyles[variant]}
      role="status"
      aria-label="Loading..."
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="card" style={{ padding: 'var(--space-6)' }}>
      <LoadingSkeleton variant="avatar" />
      <div style={{ marginTop: 'var(--space-4)' }}>
        <LoadingSkeleton variant="title" />
        <LoadingSkeleton variant="text" />
        <LoadingSkeleton variant="text" width="80%" />
      </div>
    </div>
  )
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
          <LoadingSkeleton variant="avatar" width="40px" height="40px" />
          <div style={{ flex: 1 }}>
            <LoadingSkeleton variant="text" width="40%" />
            <LoadingSkeleton variant="text" width="70%" />
          </div>
        </div>
      ))}
    </div>
  )
}
