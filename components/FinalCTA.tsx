'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
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
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="cta">
      <div className="cta-container">
        <div className="cta-content reveal">
          <h2 className="cta-title">Adopt the standard or ship with the stack</h2>
          <p className="cta-description">
            Open source and self-hostable. Deploy the reference stack
            or use hosted Originary for production SLAs.
          </p>
          <div className="cta-actions">
            <Link href="/developers" className="cta-btn-primary">
              <span>Get started</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link href="/contact" className="cta-btn-secondary">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding: 180px 0 200px;
          background: linear-gradient(180deg, #f5f5f7 0%, #fafafa 30%, white 60%, #fafafa 100%);
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(99, 91, 255, 0.08) 0%, transparent 50%);
          filter: blur(80px);
          pointer-events: none;
        }

        .cta::after {
          content: '';
          position: absolute;
          bottom: 30%;
          right: 20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 212, 170, 0.05) 0%, transparent 50%);
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .cta-title {
          font-size: clamp(40px, 6vw, 60px);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--gray-900);
          margin: 0;
          line-height: 1.1;
        }

        .cta-description {
          font-size: 20px;
          line-height: 1.75;
          color: var(--gray-600);
          max-width: 540px;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, var(--brand-primary) 0%, #4f46e5 100%);
          border-radius: 14px;
          box-shadow:
            0 0 0 1px rgba(99, 91, 255, 0.2),
            0 6px 20px -4px rgba(99, 91, 255, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .cta-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(99, 91, 255, 0.3),
            0 12px 32px -6px rgba(99, 91, 255, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .cta-btn-primary:hover::before {
          opacity: 1;
        }

        .cta-btn-primary svg {
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .cta-btn-primary span {
          position: relative;
          z-index: 1;
        }

        .cta-btn-primary:hover svg {
          transform: translateX(4px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 18px 36px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          color: var(--gray-700);
          background: white;
          border: 1px solid var(--gray-200);
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-btn-secondary:hover {
          border-color: var(--gray-300);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
          transform: translateY(-3px);
          color: var(--gray-900);
        }

        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .cta {
            padding: 120px 0 140px;
          }

          .cta-title {
            font-size: clamp(32px, 7vw, 44px);
          }

          .cta-description {
            font-size: 17px;
          }
        }

        @media (max-width: 640px) {
          .cta {
            padding: 100px 0 120px;
          }

          .cta-content {
            gap: 24px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-actions {
            flex-direction: column;
            width: 100%;
            gap: 12px;
            margin-top: 8px;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 16px 28px;
          }
        }

        @media (max-width: 480px) {
          .cta {
            padding: 80px 0 100px;
          }

          .cta-title {
            font-size: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            transition: none;
          }

          .cta-btn-primary:hover,
          .cta-btn-secondary:hover {
            transform: none;
          }

          .cta-btn-primary svg {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
