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
      {/* Background gradient mesh */}
      <div className="cta-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
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
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
            <Link href="/contact" className="cta-btn-secondary">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding: 180px 0;
          background: #fafafa;
          position: relative;
        }

        .cta-bg {
          display: none;
        }

        .orb {
          display: none;
        }

        .orb-1 {
          display: none;
        }

        .orb-2 {
          display: none;
        }

        .cta-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 32px;
          text-align: center;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .cta-title {
          font-size: clamp(48px, 7vw, 80px);
          font-weight: 600;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 0;
          line-height: 1.02;
        }

        .cta-description {
          font-size: 20px;
          line-height: 1.6;
          color: #525252;
          max-width: 520px;
          margin: 0;
          font-weight: 400;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          margin-top: 12px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: white;
          background: #0a0a0a;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-primary:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: #0a0a0a;
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-secondary:hover {
          border-color: rgba(0, 0, 0, 0.3);
          background: rgba(0, 0, 0, 0.02);
          transform: translateY(-2px);
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .cta {
            padding: 120px 0;
          }

          .orb-1,
          .orb-2 {
            display: none;
          }

          .cta-description {
            font-size: 17px;
          }
        }

        @media (max-width: 640px) {
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
            margin-top: 4px;
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
            padding: 80px 0;
          }

          .cta-container {
            padding: 0 16px;
          }

          .cta-title {
            font-size: clamp(32px, 10vw, 44px);
          }

          .cta-description {
            font-size: 15px;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            padding: 14px 24px;
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .cta-btn-primary,
          .cta-btn-secondary {
            transition: none;
          }

          .cta-btn-primary:hover,
          .cta-btn-secondary:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
