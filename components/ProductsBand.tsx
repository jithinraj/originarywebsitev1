'use client'

import Link from 'next/link'
import { ArrowRight, Activity, Shield, Blocks, Sparkles, FileText } from 'lucide-react'

export default function ProductsBand() {
  const products = [
    {
      name: 'Originary Declare',
      description: 'Define your AI policy once, generate all the right signals. A single peac-policy.yaml generates peac.txt, AIPREF headers, robots AI rules and a human-readable policy page.',
      href: '/declare',
      icon: FileText,
      badge: 'Flagship',
      featured: true,
      buttons: [
        { label: 'Get Declare', href: '/declare', primary: true },
        { label: 'View on GitHub', href: 'https://github.com/peacprotocol/policy-kit', external: true }
      ]
    },
    {
      name: 'Originary Trace',
      description: 'See which AI crawlers access your site, what they took, and generate verifiable evidence. Built on the open PEAC Protocol.',
      href: '/trace',
      icon: Activity,
      badge: 'Coming Soon',
      featured: false,
      buttons: [
        { label: 'Learn more', href: '/trace', primary: true },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    {
      name: 'Gateway 402',
      description: 'HTTP 402 payment gateway with PEAC receipts. Built on PEAC Protocol.',
      href: '/products/gateway-402',
      icon: Blocks,
      badge: 'Waitlist',
      featured: false,
      buttons: [
        { label: 'Join waitlist', href: '/products/gateway-402' }
      ]
    },
    {
      name: 'Verify API',
      description: 'Receipt verification and PEAC policy validation. Built on PEAC Protocol.',
      href: '/products/verify',
      icon: Shield,
      badge: 'Waitlist',
      featured: false,
      buttons: [
        { label: 'Join waitlist', href: '/products/verify' }
      ]
    },
    {
      name: 'Studio',
      description: 'Policy editor and receipt management dashboard',
      href: '/products/studio',
      icon: Sparkles,
      badge: 'Waitlist',
      featured: false,
      buttons: [
        { label: 'Join waitlist', href: '/products/studio' }
      ]
    }
  ]

  return (
    <section
      style={{
        padding: 'var(--space-16) 0',
        background: 'var(--white)',
        borderTop: '1px solid var(--gray-200)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2
              style={{
                fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-4xl))',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-3)',
                color: 'var(--gray-900)'
              }}
            >
              The agentic control plane
            </h2>
            <p
              style={{
                fontSize: 'var(--text-base)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Tools and infrastructure for PEAC-enabled applications
            </p>
          </div>

          {/* Featured Product */}
          {products.filter(p => p.featured).map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="card"
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--gradient-brand)',
                  border: 'none',
                  borderRadius: 'var(--radius-xl)',
                  transition: 'all 0.2s ease',
                  marginBottom: 'var(--space-6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-6)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={28} style={{ color: 'var(--white)' }} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--white)' }}>
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase'
                      }}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                    {product.description}
                  </p>
                </div>

                {/* Buttons */}
                {product.buttons && product.buttons.length > 0 && (
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexShrink: 0 }}>
                    {product.buttons.map((button: any, idx) => {
                      const ButtonComponent = button.external ? 'a' : Link
                      const buttonProps = button.external
                        ? { href: button.href, target: '_blank', rel: 'noopener noreferrer' }
                        : { href: button.href }

                      return (
                        <ButtonComponent
                          key={idx}
                          {...buttonProps}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 'var(--space-1)',
                            padding: 'var(--space-2) var(--space-4)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            borderRadius: 'var(--radius-md)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            background: button.primary ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                            color: button.primary ? 'var(--brand-primary)' : 'var(--white)',
                            border: button.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          {button.label}
                        </ButtonComponent>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}

          {/* Other Products Grid - 4 in a row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-4)'
            }}
            className="products-grid"
          >
            {products.filter(p => !p.featured).map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className="card"
                  style={{
                    padding: 'var(--space-4)',
                    background: 'var(--white)',
                    border: '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-primary)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gray-200)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'var(--space-3)',
                        right: 'var(--space-3)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        color: 'var(--brand-primary)',
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '2px 8px',
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
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--brand-primary)' }} />
                  </div>

                  {/* Content */}
                  <h3
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-1)',
                      color: 'var(--gray-900)'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--gray-600)',
                      lineHeight: 1.5,
                      flex: 1
                    }}
                  >
                    {product.description}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Learn PEAC Link */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Link
              href="https://peacprotocol.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--gray-200)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)'
                e.currentTarget.style.background = 'rgba(99, 91, 255, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gray-200)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Explore PEAC Protocol
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
