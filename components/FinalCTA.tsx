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
          padding: 140px 0;
          background: #fafafa;
          position: relative;
        }

        .cta-container {
          max-width: 1100px;
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
          font-size: 56px;
          font-weight: 600;
          letter-spacing: -0.04em;
          color: #000000;
          margin: 0;
          line-height: 1.1;
        }

        .cta-description {
          font-size: 19px;
          line-height: 1.6;
          color: #525252;
          max-width: 600px;
          margin: 0;
          font-weight: 400;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          color: #ffffff;
          background: #635bff;
          border: 1px solid #635bff;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-btn-primary:hover {
          background: #4f46e5;
          border-color: #4f46e5;
          box-shadow: 0 8px 32px rgba(99, 91, 255, 0.2);
          transform: translateY(-2px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          color: #000000;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-btn-secondary:hover {
          border-color: rgba(0, 0, 0, 0.24);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .cta {
            padding: 100px 0;
          }

          .cta-title {
            font-size: 40px;
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
