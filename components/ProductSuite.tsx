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
                '--delay': `${i * 100}ms`
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
          padding: 140px 0;
          background: #fafafa;
        }

        .products-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .products-header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .products-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .products-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #635bff;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .products-title {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          margin: 0 0 16px;
          line-height: 1.15;
        }

        .products-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #525252;
          margin: 0 auto;
          max-width: 540px;
        }

        /* Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }

        /* Product Card */
        .product {
          display: flex;
          flex-direction: column;
          padding: 32px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          text-decoration: none;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .product.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          transition-delay: var(--delay);
        }

        .product:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.12);
          border-color: var(--accent);
        }

        /* Icon */
        .product-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 14px;
          color: var(--accent);
          margin-bottom: 24px;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .product:hover .product-icon {
          background: var(--accent);
          color: #ffffff;
          transform: scale(1.05);
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
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
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
        @media (max-width: 768px) {
          .products {
            padding: 100px 0;
          }

          .products-header {
            margin-bottom: 48px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .product {
            padding: 24px;
          }

          .product-features {
            grid-template-columns: 1fr;
          }

          .footer-badges {
            flex-direction: column;
            gap: 16px;
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
