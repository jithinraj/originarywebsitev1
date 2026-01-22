'use client'

import Link from 'next/link'
import { ArrowRight, Activity, Blocks, FileText } from 'lucide-react'

export default function ProductsBand() {
  const products = [
    {
      name: 'Originary Declare',
      description: 'Define your AI and agent policy once, generate all the right signals. A single peac-policy.yaml generates peac.txt, AIPREF headers, robots AI rules, and a human readable policy page.',
      href: '/declare',
      icon: FileText,
      featured: true,
      buttons: [
        { label: 'Get Declare', href: '/declare', primary: true },
        { label: 'View on GitHub', href: 'https://github.com/peacprotocol/policy-kit', external: true }
      ]
    },
    {
      name: 'Originary Trace',
      description: 'See which agents, crawlers, and bots access your sites and APIs, what they took, and generate verifiable evidence. Built on the open PEAC Protocol.',
      href: '/trace',
      icon: Activity,
      featured: false,
      buttons: [
        { label: 'Learn more', href: '/trace', primary: true },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    {
      name: 'Gateway 402',
      description: 'HTTP 402 payment gateway with PEAC receipts, supporting x402, i402, Stripe, and other rails. Built on PEAC Protocol.',
      href: '/products/gateway-402',
      icon: Blocks,
      featured: false,
      buttons: [
        { label: 'Learn more', href: '/products/gateway-402' }
      ]
    }
  ]

  return (
    <section
      style={{
        padding: 'var(--space-16) 0',
        background: 'var(--surface-elevated)',
        borderTop: '1px solid var(--border-default)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Featured Product */}
          {products.filter(p => p.featured).map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="card featured-card"
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
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-2)' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                    {product.description}
                  </p>
                </div>

                {/* Buttons */}
                {product.buttons && product.buttons.length > 0 && (
                  <div className="featured-buttons" style={{ display: 'flex', gap: 'var(--space-2)', flexShrink: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
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
                            color: button.primary ? 'var(--accent-brand)' : 'var(--white)',
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
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-brand)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-brand-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--accent-brand)' }} />
                  </div>

                  {/* Content */}
                  <h3
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
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
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-default)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-brand)'
                e.currentTarget.style.background = 'var(--accent-brand-faint)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-default)'
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
        .featured-card {
          flex-direction: column !important;
          align-items: stretch !important;
          text-align: center;
        }

        .featured-card > div:first-child {
          margin: 0 auto;
        }

        .products-grid {
          grid-template-columns: 1fr !important;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 768px) {
          .featured-card {
            flex-direction: row !important;
            align-items: center !important;
            text-align: left;
          }

          .featured-card > div:first-child {
            margin: 0;
          }

          .featured-buttons {
            justify-content: flex-end !important;
          }

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
