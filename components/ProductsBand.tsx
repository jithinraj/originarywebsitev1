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
        { label: 'View pricing', href: '/trace/pricing' }
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
              The agentic control plane
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Tools and infrastructure for PEAC-enabled applications - start with Declare, then add Trace, Gateway 402, Verify, and Studio as you scale.
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
                  padding: 'var(--space-8)',
                  background: 'var(--gradient-brand)',
                  border: 'none',
                  borderRadius: 'var(--radius-2xl)',
                  transition: 'all 0.2s ease',
                  marginBottom: 'var(--space-8)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'var(--space-6)',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-2xl)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div>
                  {/* Badge */}
                  {product.badge && (
                    <div
                      style={{
                        display: 'inline-block',
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: 'var(--space-4)'
                      }}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-4)'
                    }}
                  >
                    <Icon size={32} style={{ color: 'var(--white)' }} />
                  </div>

                  {/* Content */}
                  <h3
                    style={{
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-3)',
                      color: 'var(--white)'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-lg)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-6)',
                      maxWidth: '600px'
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Buttons */}
                  {product.buttons && product.buttons.length > 0 && (
                    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
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
                              gap: 'var(--space-2)',
                              padding: 'var(--space-3) var(--space-5)',
                              fontSize: 'var(--text-base)',
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
              </div>
            )
          })}

          {/* Other Products Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: 'var(--space-6)'
            }}
            className="products-grid"
          >
            {products.filter(p => !p.featured).map((product) => {
              const Icon = product.icon
              return (
                <div
                  key={product.name}
                  className="card"
                  style={{
                    padding: 'var(--space-6)',
                    background: product.featured ? 'var(--gradient-brand)' : 'var(--white)',
                    border: product.featured ? 'none' : '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
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
                        background: product.featured ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 91, 255, 0.1)',
                        color: product.featured ? 'var(--white)' : 'var(--brand-primary)',
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
                      marginBottom: 'var(--space-4)',
                      flex: 1
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Buttons */}
                  {product.buttons && product.buttons.length > 0 && (
                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'auto' }}>
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
                              padding: 'var(--space-2) var(--space-3)',
                              fontSize: 'var(--text-sm)',
                              fontWeight: 600,
                              borderRadius: 'var(--radius-md)',
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              background: button.primary
                                ? (product.featured ? 'rgba(255, 255, 255, 0.2)' : 'var(--brand-primary)')
                                : 'transparent',
                              color: button.primary
                                ? (product.featured ? 'var(--white)' : 'var(--white)')
                                : (product.featured ? 'var(--white)' : 'var(--brand-primary)'),
                              border: button.primary ? 'none' : `1px solid ${product.featured ? 'rgba(255, 255, 255, 0.3)' : 'var(--brand-primary)'}`
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
          </div>

          {/* Learn PEAC Link */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
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
              Learn PEAC Protocol
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products-grid {
          grid-template-columns: repeat(1, 1fr) !important;
        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
