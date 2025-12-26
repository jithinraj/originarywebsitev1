'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, ShieldCheck, BarChart3, Layers } from 'lucide-react'

const products = [
  {
    id: 'gateway',
    title: 'Gateway 402',
    desc: 'Edge enforcement with HTTP 402 payment flows and cryptographically signed receipt issuance',
    href: '/products/gateway-402',
    icon: Zap,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
    badge: 'Core',
    features: ['Edge deployment', 'HTTP 402 flows', 'Signed receipts']
  },
  {
    id: 'verify',
    title: 'Verify',
    desc: 'Offline and hosted receipt verification for policies and cryptographic evidence',
    href: '/products/verify',
    icon: ShieldCheck,
    gradient: 'linear-gradient(135deg, #00d4aa 0%, #00a896 100%)',
    color: '#00d4aa',
    badge: 'Core',
    features: ['Offline verification', 'JWKS support', 'Policy validation']
  },
  {
    id: 'trace',
    title: 'Trace',
    desc: 'Comprehensive audit exports and evidence views derived from PEAC receipts',
    href: '/trace',
    icon: BarChart3,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#f59e0b',
    badge: 'Core',
    features: ['Audit exports', 'Evidence views', 'Compliance tools']
  },
  {
    id: 'studio',
    title: 'Studio',
    desc: 'Monitor and govern receipts at scale with real-time analytics and compliance tools',
    href: '/products/studio',
    icon: Layers,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    color: '#8b5cf6',
    badge: 'Preview',
    features: ['Real-time analytics', 'Scale governance', 'Compliance dashboard']
  },
]

export default function ProductSuite() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="products">
      <div className="products-container">
        <div className="products-header reveal">
          <span className="products-label">Production Stack</span>
          <h2 className="products-title">
            Built for the agentic economy
          </h2>
          <p className="products-subtitle">
            Enterprise-grade components for policy enforcement, payment flows, and cryptographic verification. Deploy on your infrastructure or use managed services.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={product.href}
              className={`product reveal delay-${i}`}
              style={{
                '--accent': product.color,
                '--gradient': product.gradient
              } as React.CSSProperties}
            >
              <div className="product-glow"></div>

              <div className="product-header-section">
                <div className="product-icon-wrapper">
                  <div className="product-icon">
                    <product.icon size={28} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="product-badge-wrapper">
                  <span className="product-badge">{product.badge}</span>
                </div>
              </div>

              <div className="product-content">
                <h3 className="product-name">{product.title}</h3>
                <p className="product-description">{product.desc}</p>

                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="product-feature">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-footer">
                <span className="product-cta">
                  Explore {product.title}
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="products-footer reveal">
          <div className="footer-badges">
            <span className="footer-badge">
              <span className="badge-icon">✓</span>
              Open source
            </span>
            <span className="footer-badge">
              <span className="badge-icon">✓</span>
              Apache-2.0
            </span>
            <span className="footer-badge">
              <span className="badge-icon">✓</span>
              Self-hostable
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products {
          padding: 160px 0;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          position: relative;
        }

        .products-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .products-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #635bff;
          text-transform: uppercase;
          margin-bottom: 24px;
          padding: 8px 16px;
          background: rgba(99, 91, 255, 0.08);
          border-radius: 100px;
        }

        .products-title {
          font-size: 64px;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: #000000;
          margin: 0 0 28px;
          line-height: 1.05;
        }

        .products-subtitle {
          font-size: 20px;
          line-height: 1.7;
          color: #525252;
          margin: 0;
          font-weight: 400;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 80px;
        }

        .product {
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: visible;
          min-height: 420px;
        }

        .product-glow {
          display: none;
        }

        .product:hover .product-glow {
          display: none;
        }

        .product:hover {
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08),
                      0 0 0 1px rgba(0, 0, 0, 0.02);
          transform: translateY(-4px);
        }

        .product-header-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
        }

        .product-icon-wrapper {
          position: relative;
        }

        .product-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          color: var(--accent);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-icon::before {
          display: none;
        }

        .product:hover .product-icon {
          background: var(--accent);
          border-color: var(--accent);
          color: #ffffff;
          transform: scale(1.05);
        }

        .product:hover .product-icon::before {
          display: none;
        }

        .product:hover .product-icon :global(svg) {
          color: #ffffff;
        }

        .product-badge-wrapper {
          display: flex;
          align-items: center;
        }

        .product-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #525252;
          text-transform: uppercase;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .product:hover .product-badge {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .product-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-size: 32px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .product-description {
          font-size: 16px;
          line-height: 1.7;
          color: #525252;
          margin: 0 0 24px;
          font-weight: 400;
        }

        .product-features {
          list-style: none;
          padding: 0;
          margin: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .product-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #737373;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .product-footer {
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .product-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: var(--accent);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product:hover .product-cta {
          gap: 12px;
        }

        .products-footer {
          text-align: center;
          padding: 48px 40px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 20px;
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #525252;
          font-weight: 500;
        }

        .badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: rgba(99, 91, 255, 0.1);
          color: #635bff;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 700;
        }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-0 { transition-delay: 0ms; }
        .delay-1 { transition-delay: 100ms; }
        .delay-2 { transition-delay: 200ms; }
        .delay-3 { transition-delay: 300ms; }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .product {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .products {
            padding: 100px 0;
          }

          .products-container {
            padding: 0 24px;
          }

          .products-header {
            margin-bottom: 60px;
          }

          .products-title {
            font-size: 44px;
          }

          .products-subtitle {
            font-size: 18px;
          }

          .products-grid {
            margin-bottom: 60px;
          }

          .product {
            padding: 32px 28px;
          }

          .product-name {
            font-size: 28px;
          }

          .footer-badges {
            gap: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .product,
          .product-icon,
          .product-cta {
            transition: none;
          }

          .product:hover {
            transform: none;
          }

          .product:hover .product-icon {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
