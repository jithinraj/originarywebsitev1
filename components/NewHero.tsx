'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

export default function NewHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="hero">
      {/* Gradient background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="gradient-primary" />
        <div className="gradient-secondary" />
        <div className="noise" />
      </div>

      <div className="hero-container">
        <div className="hero-content reveal in-view">
          <div className="hero-badge">
            <CheckCircle size={14} strokeWidth={2} />
            <span>Open source protocol</span>
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-main">System of record</span>
            <span className="hero-headline-sub">for agent interactions</span>
          </h1>

          <p className="hero-description">
            Originary<span className="tm">™</span> builds and stewards an open standard for publishing terms and verifying receipts as durable evidence for what was accessed, under which preferences, how it was paid for, and by whom, while preserving privacy. This makes AI interactions verifiable and auditable across the open internet.
          </p>

          <p className="hero-clarifier">
            Designed for independent implementations and adapter-based interoperability across all protocols and rails.
          </p>

          <div className="hero-actions">
            <Link href="/developers" className="hero-btn-primary">
              <span>Start building</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link href="https://github.com/peacprotocol/peac" className="hero-btn-secondary" target="_blank" rel="noopener noreferrer">
              Download on GitHub
            </Link>
          </div>

          <div className="hero-features">
            <span className="feature">Apache-2.0 licensed</span>
            <span className="feature-sep" />
            <span className="feature">Self-hostable</span>
            <span className="feature-sep" />
            <span className="feature">Offline verification</span>
          </div>
        </div>

        <div className={`hero-visual reveal in-view ${isLoaded ? 'loaded' : ''}`}>
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="code-title">HTTP Response</span>
            </div>
            <div className="code-body">
              <div className="code-line line-1">
                <span className="code-key">PEAC-Receipt</span>
                <span className="code-colon">:</span>
                <span className="code-value token">eyJhbGciOiJFZDI1NTE5Iiwi<span className="cursor" /></span>
              </div>
              <div className="code-line line-2">
                <span className="code-key">PEAC-Policy</span>
                <span className="code-colon">:</span>
                <span className="code-value">/.well-known/peac.txt</span>
              </div>
              <div className="code-line line-3">
                <span className="code-key">PEAC-Decision</span>
                <span className="code-colon">:</span>
                <span className="code-value success">allow</span>
              </div>
            </div>
            <div className="code-footer">
              <div className="verify-status">
                <Shield size={14} strokeWidth={2} />
                <span className="verify-text">Cryptographically verified</span>
              </div>
            </div>
          </div>
          <div className="code-glow" aria-hidden="true" />
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
          background: #fafafa;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .gradient-primary {
          position: absolute;
          width: 900px;
          height: 900px;
          top: -300px;
          right: -200px;
          background: radial-gradient(circle, rgba(99, 91, 255, 0.08) 0%, transparent 70%);
          filter: blur(100px);
        }

        .gradient-secondary {
          position: absolute;
          width: 700px;
          height: 700px;
          bottom: -200px;
          left: -100px;
          background: radial-gradient(circle, rgba(0, 212, 170, 0.06) 0%, transparent 70%);
          filter: blur(100px);
        }

        .noise {
          display: none;
        }

        .hero-container {
          position: relative;
          z-index: 1;
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
          gap: 28px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(99, 91, 255, 0.08) 0%, rgba(0, 212, 170, 0.04) 100%);
          border: 1px solid rgba(99, 91, 255, 0.15);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: var(--brand-primary);
          width: fit-content;
        }

        .hero-headline {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
        }

        .hero-headline-main {
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--gray-900);
        }

        .hero-headline-sub {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: var(--gray-500);
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.75;
          color: var(--gray-600);
          max-width: 560px;
          margin: 0;
        }

        .hero-description :global(.tm) {
          font-size: 0.7em;
          vertical-align: super;
        }

        .hero-clarifier {
          font-size: 16px;
          line-height: 1.6;
          color: var(--gray-500);
          max-width: 560px;
          margin: 12px 0 0;
          font-style: italic;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 4px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, var(--brand-primary) 0%, #4f46e5 100%);
          border-radius: 12px;
          box-shadow:
            0 0 0 1px rgba(99, 91, 255, 0.2),
            0 4px 16px -2px rgba(99, 91, 255, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .hero-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 1px rgba(99, 91, 255, 0.3),
            0 8px 24px -4px rgba(99, 91, 255, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .hero-btn-primary:hover::before {
          opacity: 1;
        }

        .hero-btn-primary svg {
          transition: transform 0.3s ease;
        }

        .hero-btn-primary:hover svg {
          transform: translateX(3px);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: var(--gray-700);
          background: white;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-btn-secondary:hover {
          border-color: var(--gray-300);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
          color: var(--gray-900);
        }

        .hero-features {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
          padding-top: 24px;
          border-top: 1px solid var(--gray-200);
        }

        .feature {
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-500);
        }

        .feature-sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gray-300);
        }

        /* Code Window */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .code-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.15) 0%, transparent 60%);
          filter: blur(40px);
          z-index: -1;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .hero-visual.loaded .code-glow {
          opacity: 1;
        }

        .code-window {
          width: 100%;
          max-width: 520px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.15),
            0 20px 50px -10px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .hero-visual:hover .code-window {
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 8px 24px rgba(0, 0, 0, 0.2),
            0 30px 60px -10px rgba(0, 0, 0, 0.35);
        }

        .code-header {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .code-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }

        .code-window:hover .dot {
          transform: scale(1.1);
        }

        .dot-red { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green { background: #28c840; }

        .code-title {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.02em;
        }

        .code-body {
          padding: 28px 24px;
        }

        .code-line {
          display: flex;
          align-items: baseline;
          gap: 0;
          margin-bottom: 14px;
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          opacity: 0;
          transform: translateX(-10px);
          animation: slideIn 0.4s ease forwards;
        }

        .line-1 { animation-delay: 0.3s; }
        .line-2 { animation-delay: 0.5s; }
        .line-3 { animation-delay: 0.7s; }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .code-line:last-child {
          margin-bottom: 0;
        }

        .code-key {
          color: #38bdf8;
          white-space: nowrap;
          font-weight: 500;
        }

        .code-colon {
          color: rgba(255, 255, 255, 0.4);
          margin-right: 8px;
        }

        .code-value {
          color: rgba(255, 255, 255, 0.75);
          word-break: break-all;
        }

        .code-value.token {
          color: #fbbf24;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 14px;
          background: #fbbf24;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .code-value.success {
          color: #4ade80;
          font-weight: 600;
          text-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
        }

        .code-footer {
          padding: 16px 20px;
          background: rgba(74, 222, 128, 0.05);
          border-top: 1px solid rgba(74, 222, 128, 0.15);
        }

        .verify-status {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          color: #4ade80;
        }

        .verify-status svg {
          filter: drop-shadow(0 0 6px rgba(74, 222, 128, 0.5));
        }

        .verify-text {
          opacity: 0;
          animation: fadeIn 0.5s ease 1s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Reveal animation */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-visual.reveal {
          transition-delay: 0.2s;
        }

        /* Large desktop */
        @media (max-width: 1440px) {
          .hero-headline-main {
            font-size: clamp(44px, 5.5vw, 64px);
          }

          .hero-headline-sub {
            font-size: clamp(28px, 3.5vw, 42px);
          }
        }

        /* Tablet/laptop */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-content {
            align-items: center;
          }

          .hero-headline-main {
            font-size: clamp(40px, 6vw, 56px);
          }

          .hero-headline-sub {
            font-size: clamp(26px, 4vw, 36px);
          }

          .hero-description {
            max-width: 600px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-features {
            justify-content: center;
            flex-wrap: wrap;
          }

          .code-window {
            max-width: 480px;
          }
        }

        /* Tablet portrait */
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 80px;
            min-height: auto;
          }

          .hero-container {
            gap: 48px;
          }

          .hero-headline-main {
            font-size: clamp(36px, 8vw, 48px);
          }

          .hero-headline-sub {
            font-size: clamp(22px, 5vw, 32px);
          }

          .hero-description {
            font-size: 17px;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            padding: 14px 24px;
          }

          .code-window {
            max-width: 100%;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero-container {
            padding: 0 20px;
            gap: 40px;
          }

          .hero-headline {
            gap: 4px;
          }

          .hero-headline-main {
            font-size: clamp(32px, 10vw, 40px);
          }

          .hero-headline-sub {
            font-size: clamp(20px, 6vw, 26px);
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
          }

          .hero-features {
            gap: 10px;
            flex-wrap: wrap;
          }

          .feature {
            font-size: 12px;
          }

          .feature-sep {
            display: none;
          }

          .code-header {
            padding: 12px 16px;
          }

          .code-body {
            padding: 16px;
          }

          .code-line {
            font-size: 11px;
            flex-wrap: wrap;
            margin-bottom: 10px;
          }

          .code-footer {
            padding: 12px 16px;
          }

          .verify-status {
            font-size: 11px;
          }
        }

        /* Small mobile */
        @media (max-width: 380px) {
          .hero {
            padding: 90px 0 50px;
          }

          .hero-container {
            padding: 0 16px;
          }

          .hero-headline-main {
            font-size: 28px;
          }

          .hero-headline-sub {
            font-size: 18px;
          }

          .hero-badge {
            font-size: 12px;
            padding: 6px 12px;
          }

          .hero-description {
            font-size: 15px;
          }

          .code-line {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .gradient-primary,
          .gradient-secondary {
            animation: none;
          }

          .code-window {
            transition: none;
          }

          .code-line {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .cursor {
            animation: none;
            opacity: 1;
          }

          .verify-text {
            opacity: 1;
            animation: none;
          }

          .code-glow {
            opacity: 1;
            transition: none;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            transition: none;
          }

          .hero-btn-primary:hover,
          .hero-btn-secondary:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
