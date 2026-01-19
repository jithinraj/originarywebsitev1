'use client'

import { ReactNode } from 'react'

type BadgeVariant = 'featured' | 'neutral' | 'preview' | 'standard'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

// Design tokens for badge variants
// Using brand-accent system: featured uses brand, others use neutrals
const variantStyles: Record<BadgeVariant, { bg: string; color: string; border: string }> = {
  featured: {
    bg: 'rgba(99, 91, 255, 0.08)',
    color: 'var(--brand-primary)',
    border: 'rgba(99, 91, 255, 0.15)'
  },
  neutral: {
    bg: 'var(--gray-100)',
    color: 'var(--gray-600)',
    border: 'var(--gray-200)'
  },
  preview: {
    bg: 'rgba(251, 191, 36, 0.08)',
    color: 'var(--gray-600)',
    border: 'rgba(251, 191, 36, 0.2)'
  },
  standard: {
    bg: 'var(--gray-100)',
    color: 'var(--gray-600)',
    border: 'var(--gray-200)'
  }
}

export default function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  const styles = variantStyles[variant]

  return (
    <span
      className={`badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '10px',
        fontWeight: 600,
        color: styles.color,
        background: styles.bg,
        border: `1px solid ${styles.border}`,
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </span>
  )
}

// Export variant type for external use
export type { BadgeVariant }
