'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  showHome?: boolean
}

export default function Breadcrumb({ items, showHome = true }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      {showHome && (
        <>
          <Link href="/" aria-label="Home">
            <Home size={16} />
          </Link>
          <ChevronRight size={14} className="breadcrumb-separator" aria-hidden="true" />
        </>
      )}
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            {isLast || !item.href ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link href={item.href}>{item.label}</Link>
                <ChevronRight size={14} className="breadcrumb-separator" aria-hidden="true" />
              </>
            )}
          </span>
        )
      })}
    </nav>
  )
}
