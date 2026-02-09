'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, ShieldCheck, BarChart3, Layers } from 'lucide-react'

const products = [
  {
    id: 'gateway',
    title: 'Gateway',
    tagline: 'Edge enforcement for AI agents',
    desc: 'Enable HTTP 402 payment-required flows and issue PEAC receipts at the edge or origin.',
    href: '/products/gateway-402',
    icon: Zap,
    features: ['Edge deployment', 'HTTP 402 flows', 'Signed receipts'],
    status: 'available' as const,
    npmUrl: 'https://www.npmjs.com/package/@peac/rails-x402',
  },
  {
    id: 'verify',
    title: 'Verify',
    tagline: 'Cryptographic verification',
    desc: 'Offline and hosted receipt verification with JWKS support and policy validation.',
    href: '/products/verify',
    icon: ShieldCheck,
    features: ['Offline verification', 'JWKS support', 'Policy validation'],
    status: 'available' as const,
    npmUrl: 'https://www.npmjs.com/package/@peac/protocol',
  },
  {
    id: 'trace',
    title: 'Trace',
    tagline: 'Audit trails and provenance',
    desc: 'Comprehensive audit exports and evidence views derived from PEAC receipts.',
    href: '/trace',
    icon: BarChart3,
    features: ['Audit exports', 'Evidence views', 'Compliance tools'],
    status: 'coming-soon' as const,
  },
  {
    id: 'studio',
    title: 'Studio',
    tagline: 'Policy dashboard',
    desc: 'Policy management, receipt analytics, and governance views for PEAC deployments.',
    href: '/products/studio',
    icon: Layers,
    features: ['Policy editing', 'Receipt analytics', 'Governance views'],
    status: 'coming-soon' as const,
  },
]

export default function ProductSuite() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Guard against SSR and browsers without IntersectionObserver
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true) // Fallback: assume visible
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="products">
      <div className="products-container">
        <div className={`products-header ${isVisible ? 'visible' : ''}`}>
          <span className="products-label">Product Suite</span>
          <h2 className="products-title">Built for AI agents</h2>
          <p className="products-subtitle">
            Open-source packages for policy enforcement, optional settlement flows, and receipt verification.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => {
            const Icon = product.icon
            const isAvailable = product.status === 'available'

            const cardContent = (
              <>
                <div className="card-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <div className="card-content">
                  <div className="card-title-row">
                    <h3 className="card-title">{product.title}</h3>
                    <span className={`card-status ${product.status}`}>
                      {isAvailable ? 'Available' : 'Coming Soon'}
                    </span>
                  </div>
                  <p className="card-tagline">{product.tagline}</p>
                  <p className="card-desc">{product.desc}</p>
                </div>

                <div className="card-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  {isAvailable ? (
                    <span className="card-link">
                      {product.npmUrl ? 'View on npm' : 'Learn more'}
                      <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  ) : (
                    <span className="card-link card-link-muted">
                      In development
                    </span>
                  )}
                </div>
              </>
            )

            if (isAvailable) {
              return (
                <a
                  key={product.id}
                  href={product.npmUrl || product.href}
                  target={product.npmUrl ? '_blank' : undefined}
                  rel={product.npmUrl ? 'noopener noreferrer' : undefined}
                  className={`product-card ${isVisible ? 'visible' : ''}`}
                  style={{ '--delay': `${i * 100 + 200}ms` } as React.CSSProperties}
                >
                  {cardContent}
                </a>
              )
            }

            return (
              <div
                key={product.id}
                className={`product-card product-card-muted ${isVisible ? 'visible' : ''}`}
                style={{ '--delay': `${i * 100 + 200}ms` } as React.CSSProperties}
              >
                {cardContent}
              </div>
            )
          })}
        </div>

        <div className={`products-footer ${isVisible ? 'visible' : ''}`}>
          <div className="footer-badges">
            <span className="badge">
              <span className="badge-dot" />
              Open Protocol
            </span>
            <span className="badge-sep" />
            <span className="badge">
              <span className="badge-dot" />
              Apache-2.0 Licensed
            </span>
            <span className="badge-sep" />
            <span className="badge">
              <span className="badge-dot" />
              Self-Hostable
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products {
          position: relative;
          padding: var(--section-padding) 0;
          background: var(--surface-base);
        }

        .products-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .products-header {
          text-align: center;
          margin-bottom: var(--space-12);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity var(--duration-700) var(--ease-out), transform var(--duration-700) var(--ease-out);
        }

        .products-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .products-label {
          display: inline-block;
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent-brand);
          text-transform: uppercase;
          margin-bottom: var(--space-4);
        }

        .products-title {
          font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin: 0 0 var(--space-4);
          line-height: 1.1;
        }

        .products-subtitle {
          font-size: var(--text-lg);
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0 auto;
          max-width: 500px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-12);
        }

        .products-grid :global(.product-card) {
          display: flex;
          flex-direction: column;
          padding: var(--space-7);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          text-decoration: none;
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity var(--duration-500) var(--ease-out),
            transform var(--duration-500) var(--ease-out),
            border-color var(--duration-200) ease,
            box-shadow var(--duration-200) ease;
          transition-delay: var(--delay);
        }

        .products-grid :global(.product-card.visible) {
          opacity: 1;
          transform: translateY(0);
        }

        .products-grid :global(.product-card:hover) {
          border-color: var(--border-brand);
          box-shadow: var(--glow-brand);
        }

        .products-grid :global(.product-card:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .card-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-brand-muted);
          border-radius: var(--radius-xl);
          color: var(--accent-brand);
          margin-bottom: var(--space-5);
          transition: all var(--duration-300) ease;
        }

        .products-grid :global(.product-card:hover) .card-icon {
          background: var(--accent-brand);
          color: white;
        }

        .card-content {
          flex: 1;
          margin-bottom: var(--space-4);
        }

        .card-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-3);
          margin-bottom: var(--space-1);
        }

        .card-title {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .card-status {
          font-size: var(--text-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .card-status.available {
          background: var(--accent-success-muted, rgba(34, 197, 94, 0.1));
          color: var(--accent-success, #22c55e);
        }

        .card-status.coming-soon {
          background: var(--surface-subtle);
          color: var(--text-tertiary);
        }

        .products-grid :global(.product-card-muted) {
          opacity: 0.7;
          cursor: default;
        }

        .products-grid :global(.product-card-muted:hover) {
          border-color: var(--border-default);
          box-shadow: none;
        }

        .card-link-muted {
          color: var(--text-tertiary) !important;
        }

        .card-tagline {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-tertiary);
          margin: 0 0 var(--space-3);
        }

        .card-desc {
          font-size: var(--text-sm);
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
        }

        .feature-tag {
          padding: var(--space-1) var(--space-3);
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--text-tertiary);
          background: var(--surface-subtle);
          border-radius: var(--radius-sm);
        }

        .card-footer {
          padding-top: var(--space-4);
          border-top: 1px solid var(--border-subtle);
        }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--duration-200) ease, gap var(--duration-200) ease;
        }

        .products-grid :global(.product-card:hover) .card-link {
          color: var(--accent-brand);
          gap: var(--space-3);
        }

        .products-footer {
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity var(--duration-700) var(--ease-out) 0.4s, transform var(--duration-700) var(--ease-out) 0.4s;
        }

        .products-footer.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-5);
        }

        .badge {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-secondary);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-brand);
        }

        .badge-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--border-default);
        }

        @media (max-width: 768px) {
          .products {
            padding: var(--space-20) 0;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: var(--space-3);
          }

          .products-grid :global(.product-card) {
            padding: var(--space-5);
          }

          .card-title {
            font-size: var(--text-lg);
          }
        }

        @media (max-width: 480px) {
          .products-container {
            padding: 0 var(--space-4);
          }

          .products-title {
            font-size: var(--text-2xl);
          }

          .products-subtitle {
            font-size: var(--text-base);
          }

          .footer-badges {
            flex-direction: column;
            gap: var(--space-3);
          }

          .badge-sep {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .products-header,
          .products-footer,
          .products-grid :global(.product-card) {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
