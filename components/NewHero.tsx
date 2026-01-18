'use client'

import { useRef } from 'react'
import Link from 'next/link'
import HeroPeacFlowBg from './HeroPeacFlowBg'
import HeroVerifyWidget from './HeroVerifyWidget'

export default function NewHero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-base" />
        <HeroPeacFlowBg className="peac-flow-bg" />
        <div className="content-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Verification for automated requests</span>
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-main">Verify agent interactions.</span>
            <span className="hero-headline-sub">Instantly.</span>
          </h1>

          <p className="hero-problem">
            APIs and sites lack a portable, third-party verifiable way to show what an agent accessed and under which terms.
          </p>

          <p className="hero-solution">
            Originary issues signature-verified records you can verify offline and export for audits.
          </p>

          <div className="hero-actions">
            <Link href="/verify" className="hero-btn-primary">
              Try Verify
            </Link>
            <Link href="/developers" className="hero-btn-secondary">
              Documentation
            </Link>
          </div>

          <p className="hero-clarifier">
            Originary maintains PEAC and ships production tools to issue and verify interaction records.
          </p>

          <div className="evidence-links">
            <a href="/peac" className="evidence-link">Spec</a>
            <span className="evidence-sep" aria-hidden="true" />
            <a href="/conformance" className="evidence-link">Conformance</a>
            <span className="evidence-sep" aria-hidden="true" />
            <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="evidence-link">GitHub</a>
            <span className="evidence-sep" aria-hidden="true" />
            <a href="/security" className="evidence-link">Security</a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="widget-wrapper">
            <HeroVerifyWidget />
            <div className="widget-glow" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 100px;
          overflow: hidden;
          background: var(--white);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-base {
          position: absolute;
          inset: 0;
          background: var(--white);
        }

        .hero :global(.peac-flow-bg) {
          position: absolute;
          inset: 0;
          color: var(--brand-primary);
          opacity: 0.9;
          overflow: hidden;
        }

        .content-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.98) 40%,
            rgba(255, 255, 255, 0.4) 55%,
            rgba(255, 255, 255, 0) 100%);
        }

        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* CSS-only staggered reveal - no JS required */
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content > * {
          opacity: 0;
          animation: heroReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-content > *:nth-child(1) { animation-delay: 0.1s; }  /* Badge */
        .hero-content > *:nth-child(2) { animation-delay: 0.2s; }  /* Headline */
        .hero-content > *:nth-child(3) { animation-delay: 0.3s; }  /* Problem */
        .hero-content > *:nth-child(4) { animation-delay: 0.4s; }  /* Solution */
        .hero-content > *:nth-child(5) { animation-delay: 0.5s; }  /* CTAs */
        .hero-content > *:nth-child(6) { animation-delay: 0.6s; }  /* Clarifier */
        .hero-content > *:nth-child(7) { animation-delay: 0.7s; }  /* Evidence links */

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: rgba(99, 91, 255, 0.06);
          border: 1px solid rgba(99, 91, 255, 0.12);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--brand-primary);
          width: fit-content;
          max-width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-badge span {
          white-space: nowrap;
        }

        .hero-headline {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
        }

        .hero-headline-main {
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 650;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: var(--gray-950);
        }

        .hero-headline-sub {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 550;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: var(--gray-950);
        }

        .hero-problem {
          font-size: var(--text-lg);
          line-height: 1.6;
          color: var(--gray-600);
          max-width: 480px;
          margin: 0;
        }

        .hero-solution {
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--gray-500);
          max-width: 480px;
          margin: 0;
        }

        .hero-clarifier {
          font-size: var(--text-sm);
          font-weight: 500;
          line-height: 1.5;
          color: var(--gray-400);
          max-width: 560px;
          margin: 0;
        }

        .hero-clarifier :global(.strip-link) {
          color: var(--gray-500);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color var(--duration-150) ease, color var(--duration-150) ease;
        }

        .evidence-links {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .evidence-links :global(.evidence-link) {
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--gray-500);
          text-decoration: none;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-md);
          transition: color var(--duration-150) ease, background var(--duration-150) ease;
        }

        .evidence-links :global(.evidence-link:hover) {
          color: var(--gray-700);
          background: var(--gray-100);
        }

        .evidence-sep {
          width: 3px;
          height: 3px;
          border-radius: var(--radius-full);
          background: var(--gray-300);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-actions :global(.hero-btn-primary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          text-decoration: none;
          color: var(--white);
          background: var(--gray-950);
          border-radius: var(--radius-lg);
          transition: background var(--duration-150) ease;
        }

        .hero-actions :global(.hero-btn-primary:hover) {
          background: var(--gray-800);
        }

        .hero-actions :global(.hero-btn-secondary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          text-decoration: none;
          color: var(--gray-600);
          background: transparent;
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          transition: border-color var(--duration-150) ease, color var(--duration-150) ease;
        }

        .hero-actions :global(.hero-btn-secondary:hover) {
          border-color: var(--gray-300);
          color: var(--gray-950);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          opacity: 0;
          animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }

        .widget-wrapper {
          position: relative;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .widget-wrapper:hover {
          transform: translateY(-4px);
        }

        .widget-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.12) 0%, transparent 70%);
          filter: blur(40px);
          z-index: -1;
          transition: all var(--duration-500) ease;
          pointer-events: none;
        }

        .widget-wrapper:hover .widget-glow {
          inset: -50px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.15) 0%, transparent 70%);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-content {
            align-items: center;
          }

          .content-overlay {
            background: radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%);
          }

          .hero-problem,
          .hero-solution,
          .hero-clarifier {
            max-width: 560px;
          }

          .hero-actions {
            justify-content: center;
          }

          .widget-wrapper {
            max-width: 480px;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 80px;
            min-height: auto;
          }

          .hero-container {
            gap: 48px;
          }

          .hero-content {
            gap: 20px;
          }

          .hero-badge {
            font-size: 11px;
            padding: 8px 14px;
            text-align: center;
            max-width: 100%;
            border-radius: 16px;
          }

          .hero-badge span {
            white-space: normal;
            text-align: center;
            line-height: 1.4;
          }

          .hero :global(.peac-flow-bg) {
            opacity: 0.5;
          }

          .hero-problem {
            font-size: 16px;
          }

          .hero-solution {
            font-size: 15px;
          }

          .hero-clarifier {
            font-size: 12px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero-container {
            padding: 0 20px;
            gap: 40px;
          }

          .hero-content {
            gap: 16px;
          }

          .hero-badge {
            font-size: 10px;
            padding: 8px 12px;
            gap: 6px;
            border-radius: 12px;
          }

          .hero-badge span {
            white-space: normal;
            line-height: 1.3;
          }

          .hero-actions {
            flex-wrap: wrap;
            gap: 10px;
          }

          .hero-actions :global(.hero-btn-primary),
          .hero-actions :global(.hero-btn-secondary) {
            padding: 12px 20px;
            font-size: 14px;
          }

          .hero-problem {
            font-size: 15px;
          }

          .hero-solution {
            font-size: 14px;
          }

          .widget-wrapper {
            max-width: 100%;
          }
        }

        @media (max-width: 380px) {
          .hero {
            padding: 90px 0 50px;
          }

          .hero-container {
            padding: 0 16px;
            gap: 32px;
          }

          .hero-content {
            gap: 14px;
          }

          .hero-badge {
            font-size: 9px;
            padding: 6px 10px;
            gap: 4px;
            border-radius: 10px;
          }

          .hero-badge span {
            white-space: normal;
            line-height: 1.3;
          }

          .hero-headline-main {
            font-size: 36px;
          }

          .hero-headline-sub {
            font-size: 24px;
          }

          .hero-problem {
            font-size: 14px;
          }

          .hero-solution {
            font-size: 13px;
          }

          .hero-clarifier {
            font-size: 11px;
          }

          .widget-wrapper {
            transform: scale(0.9);
            transform-origin: center top;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-content > *,
          .hero-visual {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .widget-wrapper:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
