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

          <div className="hero-footer-strip">
            <p className="strip-brand">
              <span className="strip-item">ORIGINARY&trade;</span>
              <span className="strip-dot">&middot;</span>
              <span className="strip-item strip-platforms">Open software for macOS, Windows, Linux</span>
              <span className="strip-dot">&middot;</span>
              <span className="strip-links">
                <a href="/downloads" className="strip-link-inline">Download</a>
                <span className="strip-dot-inline">&middot;</span>
                <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="strip-link-inline">Source code</a>
              </span>
            </p>
            <p className="strip-clarifier">
              Originary maintains PEAC and ships production tools to issue and verify interaction records.
            </p>
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
        .hero-content > *:nth-child(6) { animation-delay: 0.6s; }  /* Footer strip */

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

        .hero-footer-strip {
          margin-top: var(--space-6);
        }

        .strip-brand {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          margin: 0;
          font-size: 11px;
          color: var(--gray-400);
          letter-spacing: 0.01em;
        }

        .strip-dot {
          color: var(--gray-300);
        }

        .strip-dot-inline {
          color: var(--gray-300);
          margin: 0 var(--space-1);
        }

        .strip-item {
          white-space: nowrap;
        }

        .strip-links {
          display: inline-flex;
          align-items: center;
        }

        .strip-brand :global(.strip-link-inline) {
          color: var(--gray-500);
          text-decoration: none;
          transition: color var(--duration-150) ease;
        }

        .strip-brand :global(.strip-link-inline:hover) {
          color: var(--gray-700);
        }

        .strip-clarifier {
          font-size: 11px;
          color: var(--gray-400);
          margin: var(--space-2) 0 0;
          line-height: 1.5;
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
          .hero-solution {
            max-width: 560px;
          }

          .strip-brand {
            justify-content: center;
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

          .strip-brand {
            font-size: 10px;
            line-height: 1.6;
            flex-direction: column;
            gap: 2px;
          }

          .strip-clarifier {
            font-size: 10px;
            text-align: center;
          }

          .strip-dot {
            display: none;
          }

          .strip-platforms {
            font-size: 9px;
            color: var(--gray-400);
          }

          .strip-links {
            margin-top: 4px;
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

          .strip-brand {
            font-size: 9px;
          }

          .strip-clarifier {
            font-size: 9px;
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

          .strip-brand {
            font-size: 9px;
            gap: 2px;
          }

          .strip-platforms {
            font-size: 8px;
          }

          .strip-clarifier {
            font-size: 9px;
            max-width: 260px;
            margin-left: auto;
            margin-right: auto;
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
