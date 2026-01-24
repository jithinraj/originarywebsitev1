'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Github } from 'lucide-react'
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
            <a
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              <Github size={18} />
              Get Started
            </a>
            <Link href="/developers" className="hero-btn-secondary">
              Documentation
            </Link>
          </div>

          <div className="hero-footer-strip">
            <p className="strip-brand">
              <span className="strip-item">ORIGINARY&trade;</span>
              <span className="strip-dot">&middot;</span>
              <a href="/downloads" className="strip-link-inline">Download</a>
              <span className="strip-dot">&middot;</span>
              <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="strip-link-inline strip-link-github">
                <Github size={14} className="github-icon" />
                <span>We&apos;re open source</span>
              </a>
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
          padding: 120px 0 80px;
          overflow: hidden;
          background: var(--surface-base);
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
          background: var(--surface-base);
        }

        /* Subtle gradient mesh - single brand color, reduced intensity */
        .bg-base::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 70%;
          height: 80%;
          background: radial-gradient(ellipse at center,
            var(--gradient-mesh-purple) 0%,
            var(--gradient-mesh-light-purple) 40%,
            transparent 70%);
          filter: blur(120px);
          opacity: 0.6;
        }

        .bg-base::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: -10%;
          width: 60%;
          height: 70%;
          background: radial-gradient(ellipse at center,
            var(--gradient-mesh-light-purple) 0%,
            transparent 60%);
          filter: blur(120px);
          opacity: 0.4;
        }

        .hero :global(.peac-flow-bg) {
          position: absolute;
          inset: 0;
          color: var(--accent-brand);
          opacity: 1;
          overflow: hidden;
        }

        :global([data-theme="light"]) .hero :global(.peac-flow-bg) {
          opacity: 0.5;
        }

        .content-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,
            var(--surface-base) 0%,
            var(--surface-base) 35%,
            transparent 100%);
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
          gap: 20px;
        }

        /* Simple, premium staggered entrance */
        @keyframes heroFadeUp {
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
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-badge { animation-delay: 0.1s; }
        .hero-headline { animation-delay: 0.2s; }
        .hero-problem { animation-delay: 0.3s; }
        .hero-solution { animation-delay: 0.4s; }
        .hero-actions { animation-delay: 0.5s; }
        .hero-footer-strip { animation-delay: 0.6s; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--accent-brand-muted);
          border: 1px solid var(--border-brand);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--accent-brand);
          width: fit-content;
          max-width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          backdrop-filter: blur(8px);
        }

        .hero-badge span {
          white-space: nowrap;
        }

        .hero-headline {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0;
        }

        .hero-headline-main {
          font-size: clamp(56px, 9vw, 104px);
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 0.92;
          background: linear-gradient(180deg, var(--text-primary) 20%, var(--text-tertiary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-headline-sub {
          font-size: clamp(56px, 9vw, 104px);
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 0.92;
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-brand-hover) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-problem {
          font-size: var(--text-lg);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 480px;
          margin: 0;
        }

        .hero-solution {
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--text-tertiary);
          max-width: 480px;
          margin: 0;
        }

        .hero-footer-strip {
          margin-top: var(--space-4);
        }

        .strip-brand {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          margin: 0;
          font-size: 11px;
          color: var(--text-muted);
          letter-spacing: 0.01em;
        }

        .strip-dot {
          color: var(--text-muted);
          opacity: 0.4;
        }

        .strip-dot-inline {
          color: var(--text-muted);
          opacity: 0.4;
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
          color: var(--text-tertiary);
          text-decoration: none;
          transition: color var(--duration-150) ease;
        }

        .strip-brand :global(.strip-link-inline:hover) {
          color: var(--text-secondary);
        }

        .strip-brand :global(.strip-link-github) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .strip-brand :global(.github-icon) {
          flex-shrink: 0;
        }

        .strip-clarifier {
          font-size: 11px;
          color: var(--text-muted);
          margin: var(--space-1) 0 0;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: var(--space-2);
        }

        .hero-actions :global(.hero-btn-primary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-4) var(--space-8);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: var(--white);
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-brand-hover) 100%);
          border-radius: var(--btn-radius);
          transition: all var(--duration-200) var(--ease-out);
          box-shadow: var(--glow-brand);
          position: relative;
          overflow: hidden;
        }

        .hero-actions :global(.hero-btn-primary)::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .hero-actions :global(.hero-btn-primary:hover)::before {
          left: 100%;
        }

        .hero-actions :global(.hero-btn-primary:hover) {
          transform: translateY(-2px);
          box-shadow: var(--glow-brand-intense);
        }

        .hero-actions :global(.hero-btn-primary:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .hero-actions :global(.hero-btn-primary:active) {
          transform: translateY(0);
        }

        .hero-actions :global(.hero-btn-secondary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-4) var(--space-8);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: var(--text-primary);
          background: var(--surface-subtle);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-default);
          border-radius: var(--btn-radius);
          transition: all var(--duration-200) var(--ease-out);
        }

        .hero-actions :global(.hero-btn-secondary:hover) {
          border-color: var(--border-hover);
          background: var(--surface-elevated);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card);
        }

        .hero-actions :global(.hero-btn-secondary:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .hero-actions :global(.hero-btn-secondary:active) {
          transform: translateY(0);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          opacity: 0;
          animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes widgetFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes widgetGlowPulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .widget-wrapper {
          position: relative;
          animation: widgetFloat 6s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .widget-wrapper:hover {
          animation-play-state: paused;
          transform: translateY(-8px) scale(1.02);
        }

        .widget-glow {
          position: absolute;
          inset: -50px;
          background: radial-gradient(ellipse at center, var(--accent-brand-glow) 0%, transparent 60%);
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
          animation: widgetGlowPulse 4s ease-in-out infinite;
        }

        .widget-wrapper:hover .widget-glow {
          animation-play-state: paused;
          inset: -70px;
          opacity: 1;
          filter: blur(100px);
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
            background: radial-gradient(ellipse 100% 100% at 50% 50%, var(--surface-base) 0%, var(--surface-base) 100%);
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
            justify-content: center;
            flex-direction: column;
            gap: 2px;
          }

          .strip-dot {
            display: none;
          }

          .strip-clarifier {
            font-size: 10px;
            text-align: center;
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
