'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Globe, Lock } from 'lucide-react'

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
      <div className="cta-bg" aria-hidden="true">
        <div className="bg-gradient" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      <div className="cta-container">
        <div className="cta-pills reveal">
          <span className="pill">
            <Zap size={14} />
            Open protocol
          </span>
          <span className="pill">
            <Globe size={14} />
            Self-hostable
          </span>
          <span className="pill">
            <Lock size={14} />
            Apache-2.0
          </span>
        </div>

        <div className="cta-content reveal">
          <h2 className="cta-title">Ready to build?</h2>
          <p className="cta-description">
            Deploy the reference stack or use hosted Originary for production SLAs.
            Open source and self-hostable.
          </p>
          <div className="cta-actions">
            <Link href="/developers" className="cta-btn-primary">
              <span>Start building</span>
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
          position: relative;
          padding: 160px 0;
          background: linear-gradient(180deg, #fafafa 0%, #f0f0f5 50%, #fafafa 100%);
          overflow: hidden;
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 50% 30%, rgba(99, 91, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 30% 70%, rgba(0, 212, 170, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 70% 70%, rgba(99, 91, 255, 0.04) 0%, transparent 50%);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          top: 10%;
          left: 10%;
          background: rgba(99, 91, 255, 0.1);
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          bottom: 10%;
          right: 15%;
          background: rgba(0, 212, 170, 0.08);
        }

        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .cta-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #635bff;
          background: rgba(99, 91, 255, 0.08);
          border: 1px solid rgba(99, 91, 255, 0.15);
          border-radius: 100px;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .cta-title {
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 600;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 0;
          line-height: 1.05;
        }

        .cta-description {
          font-size: 18px;
          line-height: 1.6;
          color: #525252;
          max-width: 480px;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
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
          background: #635bff;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-primary:hover {
          background: #5349e8;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99, 91, 255, 0.25);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: #0a0a0a;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-secondary:hover {
          border-color: rgba(0, 0, 0, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .cta-trust {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          padding: 32px 48px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .trust-value {
          font-size: 24px;
          font-weight: 700;
          color: #0a0a0a;
          letter-spacing: -0.02em;
        }

        .trust-label {
          font-size: 12px;
          font-weight: 500;
          color: #737373;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trust-sep {
          width: 1px;
          height: 40px;
          background: rgba(0, 0, 0, 0.08);
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal:nth-child(1) { transition-delay: 0s; }
        .reveal:nth-child(2) { transition-delay: 0.1s; }
        .reveal:nth-child(3) { transition-delay: 0.2s; }

        @media (max-width: 768px) {
          .cta {
            padding: 120px 0;
          }

          .cta-pills {
            margin-bottom: 32px;
          }

          .pill {
            font-size: 12px;
            padding: 6px 12px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .cta-trust {
            flex-direction: column;
            gap: 24px;
            padding: 24px 32px;
          }

          .trust-sep {
            width: 60px;
            height: 1px;
          }

          .orb-1,
          .orb-2 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .cta {
            padding: 80px 0;
          }

          .cta-container {
            padding: 0 16px;
          }

          .cta-content {
            margin-bottom: 40px;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            padding: 14px 24px;
            font-size: 14px;
          }

          .trust-value {
            font-size: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
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
