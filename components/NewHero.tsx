'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'
import HeroPeacFlowBg from './HeroPeacFlowBg'

export default function NewHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-base" />
        <HeroPeacFlowBg className="peac-flow-bg" />
        <div className="content-overlay" />
      </div>

      <div className="hero-container">
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-badge">
            <CheckCircle size={14} strokeWidth={2} />
            <span>Open source protocol</span>
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-main">System of record</span>
            <span className="hero-headline-sub">for agent interactions</span>
          </h1>

          <p className="hero-description">
            Originary<span className="tm">&#8482;</span> builds and stewards an open standard for publishing interaction terms and issuing verifiable receipts as durable evidence of what happened under those terms. Receipts can bind policy, consent, attribution, and optional settlement signals while preserving privacy. This makes agent interactions verifiable and auditable across the open internet.
          </p>

          <p className="hero-clarifier-bold">
            Not a centralized platform. PEAC records are portable receipts that anyone can verify independently.
          </p>

          <p className="hero-clarifier">
            Designed for independent implementations and adapter-based interoperability across protocols and rails.
          </p>

          <div className="hero-actions">
            <Link href="/developers" className="hero-btn-primary">
              Start building
              <ArrowRight size={18} strokeWidth={2.5} className="arrow-icon" />
            </Link>
            <Link
              href="https://github.com/peacprotocol/peac"
              className="hero-btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
          <div className="code-window-wrapper">
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
                  <Shield size={14} strokeWidth={2} className="verify-shield" />
                  <span className="verify-text">Cryptographically verified</span>
                  <CheckCircle size={14} strokeWidth={2.5} className="verify-check" />
                </div>
              </div>
            </div>
            <div className="code-glow" />
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
          background: #ffffff;
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
          background: #ffffff;
        }

        .hero :global(.peac-flow-bg) {
          position: absolute;
          inset: 0;
          color: #635bff;
          opacity: 0.9;
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
          gap: 32px;
        }

        .hero-content > * {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-content.loaded > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .hero-content.loaded > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .hero-content.loaded > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
        .hero-content.loaded > *:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.35s; }
        .hero-content.loaded > *:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        .hero-content.loaded > *:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.45s; }
        .hero-content.loaded > *:nth-child(7) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(99, 91, 255, 0.06);
          border: 1px solid rgba(99, 91, 255, 0.12);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: #635bff;
          width: fit-content;
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
          color: #0a0a0a;
        }

        .hero-headline-sub {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #6b6b6b;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: #404040;
          max-width: 480px;
          margin: 0;
        }

        .tm {
          font-size: 0.6em;
          vertical-align: super;
          color: #737373;
        }

        .hero-clarifier-bold {
          font-size: 15px;
          line-height: 1.6;
          color: #404040;
          font-weight: 600;
          max-width: 480px;
          margin: -16px 0 0 0;
        }

        .hero-clarifier {
          font-size: 15px;
          line-height: 1.6;
          color: #737373;
          max-width: 480px;
          margin: -8px 0 0 0;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
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
          background: #635bff;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-btn-primary:hover {
          background: #5349e8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 91, 255, 0.25);
        }

        .hero-btn-primary :global(.arrow-icon) {
          transition: transform 0.3s ease;
        }

        .hero-btn-primary:hover :global(.arrow-icon) {
          transform: translateX(4px);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: #0a0a0a;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-btn-secondary:hover {
          border-color: rgba(0, 0, 0, 0.2);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .hero-features {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .feature {
          font-size: 13px;
          font-weight: 500;
          color: #737373;
        }

        .feature-sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #d4d4d4;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .hero-visual.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .code-window-wrapper {
          position: relative;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .code-window-wrapper:hover {
          transform: translateY(-4px);
        }

        .code-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.12) 0%, transparent 70%);
          filter: blur(40px);
          z-index: -1;
          transition: all 0.4s ease;
        }

        .code-window-wrapper:hover .code-glow {
          inset: -50px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.15) 0%, transparent 70%);
        }

        .code-window {
          width: 100%;
          max-width: 480px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 20px 50px -10px rgba(0, 0, 0, 0.4);
          transition: box-shadow 0.4s ease;
        }

        .code-window-wrapper:hover .code-window {
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 24px 60px -10px rgba(0, 0, 0, 0.5);
        }

        .code-header {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .code-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green { background: #28c840; }

        .code-title {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
        }

        .code-body {
          padding: 24px 20px;
        }

        .code-line {
          display: flex;
          align-items: baseline;
          margin-bottom: 14px;
          font-family: var(--font-mono);
          font-size: 13px;
          opacity: 0;
          transform: translateX(-10px);
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .line-1 { animation-delay: 0.6s; }
        .line-2 { animation-delay: 0.75s; }
        .line-3 { animation-delay: 0.9s; }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .code-line:last-child { margin-bottom: 0; }

        .code-key {
          color: #60a5fa;
          white-space: nowrap;
          font-weight: 500;
        }

        .code-colon {
          color: rgba(255, 255, 255, 0.3);
          margin-right: 10px;
        }

        .code-value {
          color: rgba(255, 255, 255, 0.8);
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
        }

        .code-footer {
          padding: 14px 20px;
          background: rgba(74, 222, 128, 0.06);
          border-top: 1px solid rgba(74, 222, 128, 0.12);
        }

        .verify-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: #4ade80;
        }

        .verify-status :global(.verify-shield) {
          opacity: 0;
          animation: fadeIn 0.4s ease 1.1s forwards;
        }

        .verify-text {
          opacity: 0;
          animation: fadeIn 0.4s ease 1.2s forwards;
        }

        .verify-status :global(.verify-check) {
          margin-left: auto;
          opacity: 0;
          transform: scale(0);
          animation: pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes pop {
          to {
            opacity: 1;
            transform: scale(1);
          }
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

          .hero-description {
            max-width: 560px;
          }

          .hero-clarifier-bold {
            max-width: 560px;
          }

          .hero-clarifier {
            max-width: 560px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-features {
            justify-content: center;
          }

          .code-window {
            max-width: 440px;
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
        }

        @media (max-width: 640px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero-container {
            padding: 0 20px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .hero-features {
            flex-wrap: wrap;
            gap: 8px 16px;
          }

          .code-window {
            max-width: 100%;
          }

          .code-body {
            padding: 18px 16px;
          }

          .code-line {
            font-size: 11px;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 380px) {
          .hero {
            padding: 90px 0 50px;
          }

          .hero-container {
            padding: 0 16px;
          }

          .hero-headline-main {
            font-size: 36px;
          }

          .hero-headline-sub {
            font-size: 24px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-clarifier-bold {
            font-size: 14px;
          }

          .hero-clarifier {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-content > *,
          .hero-visual {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .code-line {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .cursor {
            animation: none;
          }

          .verify-status :global(.verify-shield),
          .verify-text,
          .verify-status :global(.verify-check) {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .code-window-wrapper:hover {
            transform: none;
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
