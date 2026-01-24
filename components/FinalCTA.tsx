'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Globe, Lock } from 'lucide-react'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Guard against SSR and browsers without IntersectionObserver
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      // Fallback: add class immediately
      const elements = sectionRef.current?.querySelectorAll('.reveal')
      elements?.forEach((el) => el.classList.add('in-view'))
      return
    }

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
              Contact
            </Link>
          </div>
        </div>

      </div>

      <style jsx>{`
        .cta {
          position: relative;
          padding: var(--section-padding-lg) 0;
          background: var(--surface-base);
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
            radial-gradient(ellipse 60% 50% at 50% 40%, var(--gradient-mesh-purple) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 25% 60%, var(--gradient-mesh-teal) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 75% 60%, var(--gradient-mesh-light-purple) 0%, transparent 50%);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          animation: ctaFloat 30s ease-in-out infinite alternate;
          opacity: 0.7;
        }

        .orb-1 {
          width: 450px;
          height: 450px;
          top: 5%;
          left: 5%;
          background: var(--orb-purple);
          animation-delay: 0s;
        }

        .orb-2 {
          width: 350px;
          height: 350px;
          bottom: 5%;
          right: 10%;
          background: var(--orb-teal);
          animation-delay: -15s;
        }

        @keyframes ctaFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 10px) scale(1.03); }
          100% { transform: translate(-10px, -5px) scale(0.98); }
        }

        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          text-align: center;
        }

        .cta-pills {
          display: flex;
          justify-content: center;
          gap: var(--space-3);
          margin-bottom: var(--space-10);
          flex-wrap: wrap;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--accent-brand);
          background: var(--accent-brand-muted);
          border: 1px solid var(--border-brand);
          border-radius: var(--radius-full);
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
        }

        .cta-title {
          font-size: clamp(var(--text-5xl), 8vw, var(--text-8xl));
          font-weight: 700;
          letter-spacing: -0.04em;
          margin: 0;
          line-height: 1;
          background: linear-gradient(180deg, var(--text-primary) 0%, var(--text-tertiary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          font-size: var(--text-xl);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          gap: var(--space-5);
          margin-top: var(--space-4);
        }

        .cta-actions :global(.cta-btn-primary) {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-5) var(--space-10);
          font-size: var(--text-base);
          font-weight: 600;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-brand-hover) 100%);
          border-radius: var(--radius-2xl);
          transition: all var(--duration-300) var(--ease-out);
          box-shadow: var(--glow-brand);
          position: relative;
          overflow: hidden;
        }

        .cta-actions :global(.cta-btn-primary)::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left var(--duration-500) ease;
        }

        .cta-actions :global(.cta-btn-primary:hover)::before {
          left: 100%;
        }

        .cta-actions :global(.cta-btn-primary:hover) {
          transform: translateY(-4px) scale(1.02);
          box-shadow: var(--glow-brand-intense);
        }

        .cta-actions :global(.cta-btn-primary:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .cta-actions :global(.cta-btn-secondary) {
          display: inline-flex;
          align-items: center;
          padding: var(--space-5) var(--space-10);
          font-size: var(--text-base);
          font-weight: 600;
          text-decoration: none;
          color: var(--text-primary);
          background: var(--surface-subtle);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          transition: all var(--duration-300) var(--ease-out);
        }

        .cta-actions :global(.cta-btn-secondary:hover) {
          border-color: var(--border-hover);
          background: var(--surface-elevated);
          transform: translateY(-3px);
          box-shadow: var(--shadow-card);
        }

        .cta-actions :global(.cta-btn-secondary:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity var(--duration-700) var(--ease-out),
                      transform var(--duration-700) var(--ease-out);
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
            padding: var(--section-padding) 0;
          }

          .cta-pills {
            margin-bottom: var(--space-8);
          }

          .pill {
            font-size: var(--text-xs);
            padding: var(--space-2) var(--space-3);
          }

          .cta-description {
            font-size: var(--text-base);
          }

          .cta-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }

          .cta-actions :global(.cta-btn-primary),
          .cta-actions :global(.cta-btn-secondary) {
            width: 100%;
            justify-content: center;
          }

          .orb-1,
          .orb-2 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .cta {
            padding: var(--space-20) 0;
          }

          .cta-container {
            padding: 0 var(--space-4);
          }

          .cta-content {
            margin-bottom: var(--space-10);
          }

          .cta-actions :global(.cta-btn-primary),
          .cta-actions :global(.cta-btn-secondary) {
            padding: var(--space-4) var(--space-6);
            font-size: var(--text-sm);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .cta-actions :global(.cta-btn-primary:hover),
          .cta-actions :global(.cta-btn-secondary:hover) {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
