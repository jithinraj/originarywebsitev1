'use client'

import Link from 'next/link'
import { ArrowRight, Zap, ShieldCheck, BarChart3, Layers } from 'lucide-react'

const products = [
  {
    id: 'gateway',
    title: 'Gateway',
    tagline: 'Edge enforcement for the agentic web',
    desc: 'Enable HTTP 402 payment-required flows and issue PEAC receipts at the edge or origin. Designed for fast verification and consistent evidence generation.',
    href: '/products/gateway-402',
    icon: Zap,
    color: '#635bff',
    features: ['Edge deployment', 'HTTP 402 flows', 'Signed receipts', 'Deterministic verification'],
  },
  {
    id: 'verify',
    title: 'Verify',
    tagline: 'Cryptographic proof validation',
    desc: 'Offline and hosted receipt verification with JWKS support and policy validation.',
    href: '/products/verify',
    icon: ShieldCheck,
    color: '#00d4aa',
    features: ['Offline verification', 'JWKS support', 'Policy validation', 'Evidence chains'],
  },
  {
    id: 'trace',
    title: 'Trace',
    tagline: 'Audit trails and provenance',
    desc: 'Comprehensive audit exports and evidence views derived from PEAC receipts.',
    href: '/trace',
    icon: BarChart3,
    color: '#f59e0b',
    features: ['Audit exports', 'Evidence views', 'Compliance tools', 'Dispute resolution'],
  },
  {
    id: 'studio',
    title: 'Studio',
    tagline: 'Builder dashboard',
    desc: 'Operate receipts at scale with dashboards, exports, and policy tooling built on top of PEAC evidence.',
    href: '/products/studio',
    icon: Layers,
    color: '#8b5cf6',
    features: ['Operational dashboards', 'Scale governance', 'Compliance tools', 'Team management'],
  },
]

export default function ProductSuite() {
  return (
    <section className="products">
      <div className="section-transition-top" aria-hidden="true" />
      <div className="section-transition-bottom" aria-hidden="true" />

      <div className="products-bg" aria-hidden="true">
        <div className="bg-gradient" />
      </div>

      <div className="products-container">
        <div className="products-header">
          <span className="products-label">Product Suite</span>
          <h2 className="products-title">Built for the agentic economy</h2>
          <p className="products-subtitle">
            Production components for policy enforcement, optional settlement flows, and receipt verification.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => {
            const Icon = product.icon

            return (
              <div key={product.id} className="product-card-wrapper" style={{ '--accent': product.color } as React.CSSProperties}>
                <Link href={product.href} className="product-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="card-arrow">
                      <ArrowRight size={18} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
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

                  <div className="card-indicator" />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="products-footer">
          <div className="footer-badges">
            <span className="badge">
              <span className="badge-dot badge-dot-purple" />
              Open Protocol
            </span>
            <span className="badge-sep" />
            <span className="badge">
              <span className="badge-dot badge-dot-green" />
              Apache-2.0 Licensed
            </span>
            <span className="badge-sep" />
            <span className="badge">
              <span className="badge-dot badge-dot-orange" />
              Self-Hostable
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products {
          position: relative;
          padding: 140px 0;
          background: linear-gradient(180deg, #f8f8fc 0%, #fafafa 30%, #fafafa 70%, #f8f8fc 100%);
          overflow: hidden;
        }

        .section-transition-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(180deg, #fafafa 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .section-transition-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(0deg, #fafafa 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .products-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 80% 0%, rgba(99, 91, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 100%, rgba(0, 212, 170, 0.04) 0%, transparent 50%);
        }

        .products-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .products-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .products-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #6b6b6b;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .products-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          margin: 0 0 16px;
          line-height: 1.1;
        }

        .products-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #525252;
          margin: 0 auto;
          max-width: 540px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 56px;
        }

        .product-card-wrapper {
          position: relative;
        }

        .product-card-wrapper :global(.product-card) {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 28px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          text-decoration: none;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          height: 100%;
        }

        .product-card-wrapper :global(.product-card:hover) {
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 10px;
          color: var(--accent);
          transition: background 0.2s ease, color 0.2s ease;
        }

        .product-card-wrapper :global(.product-card:hover) .card-icon {
          background: var(--accent);
          color: white;
        }

        .card-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a3a3a3;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .product-card-wrapper :global(.product-card:hover) .card-arrow {
          color: var(--accent);
          transform: translateX(4px);
        }

        .card-body {
          flex: 1;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .card-tagline {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          margin: 0 0 10px;
        }

        .card-desc {
          font-size: 14px;
          line-height: 1.55;
          color: #525252;
          margin: 0;
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .feature-tag {
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 500;
          color: #525252;
          background: #f5f5f5;
          border-radius: 5px;
        }

        .card-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .product-card-wrapper :global(.product-card:hover) .card-indicator {
          transform: scaleX(1);
        }

        .products-footer {
          text-align: center;
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #525252;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .badge-dot-purple { background: #635bff; }
        .badge-dot-green { background: #00d4aa; }
        .badge-dot-orange { background: #f59e0b; }

        .badge-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #d4d4d4;
        }

        @media (max-width: 900px) {
          .products {
            padding: 100px 0;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 600px) {
          .products {
            padding: 80px 0;
          }

          .products-container {
            padding: 0 16px;
          }

          .products-header {
            margin-bottom: 40px;
          }

          .products-title {
            font-size: 28px;
          }

          .products-subtitle {
            font-size: 16px;
          }

          .products-grid {
            margin-bottom: 40px;
          }

          .product-card-wrapper :global(.product-card) {
            padding: 20px;
          }

          .card-title {
            font-size: 18px;
          }

          .footer-badges {
            flex-direction: column;
            gap: 10px;
          }

          .badge-sep {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
