'use client'

import Link from 'next/link'
import { ArrowRight, Shield, FileText, Eye } from 'lucide-react'
import { useEffect } from 'react'

const items = [
  {
    num: '01',
    title: 'Conformance',
    desc: 'Reference tests and artifacts to validate independent implementations.',
    href: '/conformance',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Governance',
    desc: 'Open governance process for protocol evolution and ecosystem alignment.',
    href: '/governance',
    icon: Shield,
  },
  {
    num: '03',
    title: 'Trust Center',
    desc: 'Security posture, incident response, and operational transparency.',
    href: '/trust',
    icon: Eye,
  },
]

export default function TrustPosture() {
  useEffect(() => {
    const cards = document.querySelectorAll('.trust-card')
    cards.forEach((card) => {
      const el = card as HTMLElement
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        el.style.setProperty('--mouse-x', `${x}px`)
        el.style.setProperty('--mouse-y', `${y}px`)
      })
    })
  }, [])

  return (
    <section className="trust home-section">
      <div className="home-container">
        <div className="trust-header reveal">
          <span className="home-eyebrow">Governance</span>
          <h2 className="home-title">
            Neutral by design.
            <br />
            <span className="dim">Conformance-driven by default.</span>
          </h2>
          <p className="home-lede">
            Standards adoption requires verifiable primitives, not marketing claims.
            We publish governance, conformance, and security artifacts so PEAC can be
            trusted and independently implemented.
          </p>
        </div>

        <div className="trust-grid stagger-reveal">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.num} href={item.href} className="trust-card tilt-card">
                <div className="card-spotlight" />
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="trust-num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="card-arrow">
                  <ArrowRight size={16} strokeWidth={2} />
                </div>
                <div className="card-border" />
              </Link>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .trust {
          position: relative;
          background: var(--gray-50);
          border-top: 1px solid var(--gray-200);
          border-bottom: 1px solid var(--gray-200);
          overflow: hidden;
        }

        .trust-header {
          max-width: 640px;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .dim {
          color: var(--gray-500);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .trust-card {
          --mouse-x: 50%;
          --mouse-y: 50%;
          position: relative;
          padding: 36px 32px;
          border-radius: 20px;
          border: 1px solid var(--gray-200);
          background: var(--white);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .trust-card:hover {
          border-color: var(--gray-300);
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .card-spotlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            350px circle at var(--mouse-x) var(--mouse-y),
            rgba(99, 91, 255, 0.05),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .trust-card:hover .card-spotlight {
          opacity: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%);
          border: 1px solid rgba(99, 91, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-primary);
          margin-bottom: 8px;
        }

        .trust-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--brand-primary);
          opacity: 0.7;
          letter-spacing: 0.1em;
        }

        .trust-card h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-900);
          letter-spacing: -0.01em;
        }

        .trust-card p {
          margin: 0;
          font-size: 0.9375rem;
          color: var(--gray-600);
          line-height: 1.6;
        }

        .card-arrow {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--gray-50);
          border: 1px solid var(--gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-500);
          opacity: 0;
          transform: translateX(-8px) rotate(-45deg);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .trust-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0) rotate(0deg);
          color: var(--brand-primary);
          border-color: var(--gray-300);
        }

        .card-border {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.04) 0%,
            transparent 40%,
            transparent 60%,
            rgba(99, 91, 255, 0.06) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .trust-card:hover .card-border {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .trust-card {
            padding: 28px 24px;
          }

          .card-arrow {
            top: 24px;
            right: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-spotlight,
          .card-border,
          .card-arrow {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}
