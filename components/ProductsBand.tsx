'use client'

import Link from 'next/link'
import { ArrowRight, Activity, Shield, Blocks, Sparkles } from 'lucide-react'

export default function ProductsBand() {
  const products = [
    {
      name: 'Trace',
      description: 'AI crawler analytics and compliance evidence for your website',
      href: '/trace',
      icon: Activity,
      badge: null,
      featured: true
    },
    {
      name: 'Verify API',
      description: 'Receipt verification and PEAC policy validation',
      href: '/products/verify',
      icon: Shield,
      badge: 'Beta',
      featured: false
    },
    {
      name: 'Gateway 402',
      description: 'HTTP 402 payment gateway with PEAC receipts',
      href: '/products/gateway-402',
      icon: Blocks,
      badge: 'Private beta',
      featured: false
    },
    {
      name: 'Studio',
      description: 'Policy editor and receipt management dashboard',
      href: '/products/studio',
      icon: Sparkles,
      badge: 'Waitlist',
      featured: false
    }
  ]

  return (
    <section
      style={{
        padding: 'var(--space-24) 0',
        background: 'var(--white)',
        borderTop: '1px solid var(--gray-200)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2
              style={{
                fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-5xl))',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}
            >
              Products
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Tools and infrastructure for PEAC-enabled applications
            </p>
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className="card"
                  style={{
                    padding: 'var(--space-6)',
                    background: product.featured ? 'var(--gradient-brand)' : 'var(--white)',
                    border: product.featured ? 'none' : '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-xl)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!product.featured) {
                      e.currentTarget.style.borderColor = 'var(--brand-primary)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    } else {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-xl)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!product.featured) {
                      e.currentTarget.style.borderColor = 'var(--gray-200)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    } else {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'var(--space-4)',
                        right: 'var(--space-4)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        color: 'var(--brand-primary)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: product.featured ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-4)'
                    }}
                  >
                    <Icon
                      size={24}
                      style={{
                        color: product.featured ? 'var(--white)' : 'var(--brand-primary)'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-2)',
                      color: product.featured ? 'var(--white)' : 'var(--gray-900)'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: product.featured ? 'rgba(255, 255, 255, 0.9)' : 'var(--gray-600)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-4)'
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Link Arrow */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: product.featured ? 'var(--white)' : 'var(--brand-primary)'
                    }}
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
