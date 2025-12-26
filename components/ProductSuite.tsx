'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, ShieldCheck, BarChart3, Layers } from 'lucide-react'

const products = [
  {
    id: 'gateway',
    title: 'Gateway',
    desc: 'Edge enforcement with x402 payment flows and receipt issuance',
    href: '/products/gateway-402',
    icon: Zap,
    color: '#635bff',
  },
  {
    id: 'verify',
    title: 'Verify',
    desc: 'Offline and hosted receipt verification for policies and evidence',
    href: '/products/verify',
    icon: ShieldCheck,
    color: '#00d4aa',
  },
  {
    id: 'trace',
    title: 'Trace',
    desc: 'Audit exports and evidence views derived from receipts',
    href: '/trace',
    icon: BarChart3,
    color: '#f59e0b',
  },
  {
    id: 'studio',
    title: 'Studio',
    desc: 'Monitor and govern receipts at scale',
    href: '/products/studio',
    icon: Layers,
    color: '#8b5cf6',
    preview: true,
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
          <h2 className="products-label">Products</h2>
          <p className="products-title">
            A protocol, plus production-grade building blocks
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={product.href}
              className={`product-card reveal delay-${i}`}
              style={{ '--product-color': product.color } as React.CSSProperties}
            >
              <div className="product-icon-wrapper">
                <div className="product-icon-bg" />
                <product.icon size={24} strokeWidth={2} className="product-icon" />
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-title">{product.title}</h3>
                  {product.preview && (
                    <span className="product-badge">Preview</span>
                  )}
                </div>
                <p className="product-desc">{product.desc}</p>
              </div>
              <span className="product-link">
                Learn more
                <ArrowRight size={14} strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products {
          padding: 160px 0;
          background: linear-gradient(180deg, #fafafa 0%, white 40%, white 100%);
          position: relative;
          overflow: hidden;
        }

        .products::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 1000px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(99, 91, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
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
          margin-bottom: 80px;
        }

        .products-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--brand-primary);
          text-transform: uppercase;
          margin: 0 0 20px;
          padding: 8px 16px;
          background: rgba(99, 91, 255, 0.06);
          border: 1px solid rgba(99, 91, 255, 0.12);
          border-radius: 100px;
        }

        .products-title {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          letter-spacing: -0.035em;
          color: var(--gray-900);
          margin: 0;
          line-height: 1.15;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          padding: 32px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--product-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, color-mix(in srgb, var(--product-color) 5%, transparent) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .product-card:hover {
          border-color: color-mix(in srgb, var(--product-color) 30%, transparent);
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--product-color) 15%, transparent),
            0 20px 50px -12px rgba(0, 0, 0, 0.15),
            0 8px 20px -8px color-mix(in srgb, var(--product-color) 20%, transparent);
          transform: translateY(-6px);
        }

        .product-card:hover::before {
          transform: scaleX(1);
        }

        .product-card:hover::after {
          opacity: 1;
        }

        .product-icon-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          margin-bottom: 24px;
          z-index: 1;
        }

        .product-icon-bg {
          position: absolute;
          inset: 0;
          background: color-mix(in srgb, var(--product-color) 12%, transparent);
          border-radius: 14px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-icon-bg {
          background: color-mix(in srgb, var(--product-color) 18%, transparent);
          transform: scale(1.05);
        }

        .product-icon-wrapper :global(.product-icon) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--product-color);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-icon-wrapper :global(.product-icon) {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .product-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .product-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .product-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--gray-900);
          margin: 0;
          letter-spacing: -0.02em;
        }

        .product-badge {
          font-size: 10px;
          font-weight: 600;
          color: var(--gray-500);
          padding: 4px 8px;
          background: var(--gray-100);
          border-radius: 5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .product-desc {
          font-size: 15px;
          line-height: 1.65;
          color: var(--gray-600);
          margin: 0 0 24px;
        }

        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--product-color);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .product-card:hover .product-link {
          gap: 10px;
        }

        .product-link :global(svg) {
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-link :global(svg) {
          transform: translateX(3px);
        }

        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-0 { transition-delay: 0ms; }
        .delay-1 { transition-delay: 100ms; }
        .delay-2 { transition-delay: 200ms; }
        .delay-3 { transition-delay: 300ms; }

        @media (max-width: 900px) {
          .products-grid {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .products {
            padding: 100px 0;
          }

          .products-header {
            margin-bottom: 56px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .product-card {
            padding: 28px;
          }

          .product-icon-wrapper {
            width: 48px;
            height: 48px;
            margin-bottom: 20px;
          }

          .product-icon-bg {
            border-radius: 12px;
          }

          .product-icon-wrapper :global(.product-icon) {
            width: 20px;
            height: 20px;
          }

          .product-title {
            font-size: 19px;
          }

          .product-desc {
            font-size: 14px;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .products {
            padding: 80px 0;
          }

          .products-label {
            font-size: 11px;
            padding: 6px 12px;
          }

          .product-card {
            padding: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .product-card {
            transition: none;
          }

          .product-card:hover {
            transform: none;
          }

          .product-card::after {
            transition: none;
          }

          .product-link,
          .product-link svg {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
