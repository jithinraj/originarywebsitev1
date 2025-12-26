'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, ShieldCheck, BarChart3, Layers } from 'lucide-react'

const products = [
  {
    id: 'gateway',
    title: 'Gateway',
    tagline: 'Edge enforcement for the agentic web',
    desc: 'Enable HTTP 402 payment flows with instant cryptographic receipt issuance at the network edge.',
    href: '/products/gateway-402',
    icon: Zap,
    color: '#635bff',
    features: ['Edge deployment', 'HTTP 402 flows', 'Signed receipts', 'Sub-ms latency']
  },
  {
    id: 'verify',
    title: 'Verify',
    tagline: 'Cryptographic proof validation',
    desc: 'Offline and hosted receipt verification with JWKS support and policy validation.',
    href: '/products/verify',
    icon: ShieldCheck,
    color: '#00d4aa',
    features: ['Offline verification', 'JWKS support', 'Policy validation', 'Evidence chains']
  },
  {
    id: 'trace',
    title: 'Trace',
    tagline: 'Audit trails and provenance',
    desc: 'Comprehensive audit exports and evidence views derived from PEAC receipts.',
    href: '/trace',
    icon: BarChart3,
    color: '#f59e0b',
    features: ['Audit exports', 'Evidence views', 'Compliance tools', 'Dispute resolution']
  },
  {
    id: 'studio',
    title: 'Studio',
    tagline: 'Builder dashboard',
    desc: 'Monitor and govern receipts at scale with real-time analytics and compliance tools.',
    href: '/products/studio',
    icon: Layers,
    color: '#8b5cf6',
    features: ['Real-time analytics', 'Scale governance', 'Compliance dashboard', 'Team management']
  },
]

export default function ProductSuite() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="products">
      <div className="products-container">
        {/* Header */}
        <div className={`products-header ${isVisible ? 'visible' : ''}`}>
          <span className="products-label">Products</span>
          <h2 className="products-title">
            Built for the agentic economy
          </h2>
          <p className="products-subtitle">
            Enterprise-grade infrastructure for policy enforcement, payment flows, and cryptographic verification.
          </p>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={product.href}
              className={`product ${isVisible ? 'visible' : ''}`}
              style={{
                '--accent': product.color,
                '--delay': `${i * 120 + 150}ms`
              } as React.CSSProperties}
            >
              <div className="product-icon">
                <product.icon size={26} strokeWidth={2} />
              </div>

              <div className="product-body">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <p className="product-desc">{product.desc}</p>

                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <svg className="feature-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-footer">
                <span className="product-link">
                  Learn more
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className={`products-footer ${isVisible ? 'visible' : ''}`}>
          <div className="footer-badges">
            <div className="footer-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8L6.5 11L12.5 5" stroke="#635bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Open source</span>
            </div>
            <div className="footer-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8L6.5 11L12.5 5" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Apache-2.0</span>
            </div>
            <div className="footer-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8L6.5 11L12.5 5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Self-hostable</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products {
          padding: 180px 0;
          background: #ffffff;
          position: relative;
        }

        .products-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header - Theory VC inspired cascade */
        .products-header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .products-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .products-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #6b6b6b;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .products-title {
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 600;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 0 0 24px;
          line-height: 1.05;
        }

        .products-subtitle {
          font-size: 20px;
          line-height: 1.6;
          color: #525252;
          margin: 0 auto;
          max-width: 560px;
        }

        /* Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 72px;
        }

        /* Product Card */
        .product {
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: #fafafa;
          border: 1px solid transparent;
          border-radius: 20px;
          text-decoration: none;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          transition-delay: var(--delay);
        }

        .product:hover {
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }

        /* Icon */
        .product-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 12px;
          color: #0a0a0a;
          margin-bottom: 28px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: border-color 0.2s ease;
        }

        .product:hover .product-icon {
          border-color: rgba(0, 0, 0, 0.12);
        }

        /* Body */
        .product-body {
          flex: 1;
        }

        .product-title {
          font-size: 24px;
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .product-tagline {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
          margin: 0 0 12px;
        }

        .product-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #525252;
          margin: 0 0 20px;
        }

        .product-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #525252;
        }

        .feature-check {
          color: #00d4aa;
          flex-shrink: 0;
        }

        /* Footer */
        .product-footer {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #f0f0f0;
        }

        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
        }

        .product:hover .product-link {
          gap: 12px;
        }

        /* Section Footer */
        .products-footer {
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
        }

        .products-footer.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-badges {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .footer-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #525252;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .products {
            padding: 140px 0;
          }

          .products-title {
            font-size: clamp(36px, 5vw, 48px);
          }

          .products-grid {
            gap: 20px;
          }

          .product {
            padding: 28px;
          }
        }

        @media (max-width: 768px) {
          .products {
            padding: 100px 0;
          }

          .products-container {
            padding: 0 20px;
          }

          .products-header {
            margin-bottom: 40px;
          }

          .products-title {
            font-size: clamp(32px, 8vw, 40px);
          }

          .products-subtitle {
            font-size: 17px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 48px;
          }

          .product {
            padding: 24px;
          }

          .product-title {
            font-size: 20px;
          }

          .product-desc {
            font-size: 14px;
          }

          .product-features {
            grid-template-columns: 1fr;
          }

          .footer-badges {
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .products {
            padding: 80px 0;
          }

          .products-container {
            padding: 0 16px;
          }

          .products-header {
            margin-bottom: 32px;
          }

          .products-title {
            font-size: 28px;
          }

          .products-subtitle {
            font-size: 15px;
          }

          .product {
            padding: 20px;
          }

          .product-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 20px;
          }

          .product-title {
            font-size: 18px;
          }

          .product-tagline {
            font-size: 13px;
          }

          .product-desc {
            font-size: 14px;
            margin-bottom: 16px;
          }

          .product-footer {
            margin-top: 20px;
            padding-top: 16px;
          }

          .feature-item {
            font-size: 12px;
          }

          .footer-badge {
            font-size: 13px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .products-header,
          .product,
          .products-footer,
          .product-icon,
          .product-link {
            transition: none;
          }

          .products-header,
          .product,
          .products-footer {
            opacity: 1;
            transform: none;
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
