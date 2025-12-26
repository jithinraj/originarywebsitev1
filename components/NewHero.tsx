'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

function generateAgentNodes() {
  return [
    { id: 1, x: 58, y: 30, delay: 0 },
    { id: 2, x: 55, y: 45, delay: 1.5 },
    { id: 3, x: 60, y: 58, delay: 3 },
  ]
}

function generateFlowPaths() {
  return [
    { id: 1, d: 'M 60 30 Q 72 32 78 35', delay: 0 },
    { id: 2, d: 'M 57 45 Q 70 43 78 40', delay: 1.5 },
    { id: 3, d: 'M 62 58 Q 72 52 78 45', delay: 3 },
    { id: 4, d: 'M 82 40 Q 88 42 92 45', delay: 0.8 },
  ]
}

export default function NewHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const agentNodes = useMemo(() => generateAgentNodes(), [])
  const flowPaths = useMemo(() => generateFlowPaths(), [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-base" />
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />

        <svg className="particle-field" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="particle-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 91, 255, 0)" />
              <stop offset="50%" stopColor="rgba(99, 91, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(0, 212, 170, 0)" />
            </linearGradient>

            <symbol id="receipt-icon" viewBox="0 0 10 12">
              <path d="M1 0 L9 0 L9 11 L7 9.5 L5 11 L3 9.5 L1 11 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="3" y1="3" x2="7" y2="3" stroke="currentColor" strokeWidth="0.3" />
              <line x1="3" y1="5" x2="7" y2="5" stroke="currentColor" strokeWidth="0.3" />
              <line x1="3" y1="7" x2="5" y2="7" stroke="currentColor" strokeWidth="0.3" />
            </symbol>
          </defs>

          <g className="flow-lines">
            {flowPaths.map((path) => (
              <g key={path.id}>
                <path
                  d={path.d}
                  fill="none"
                  stroke="rgba(99, 91, 255, 0.06)"
                  strokeWidth="0.2"
                />
                <path
                  className="flow-pulse"
                  d={path.d}
                  fill="none"
                  stroke="url(#flow-gradient)"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  style={{ animationDelay: `${path.delay}s` }}
                />
              </g>
            ))}
          </g>

          <g className="agent-nodes" filter="url(#particle-glow)">
            {agentNodes.map((agent) => (
              <g key={agent.id} className="agent-node" style={{ animationDelay: `${agent.delay}s` }}>
                <circle
                  cx={agent.x}
                  cy={agent.y}
                  r="0.8"
                  fill="rgba(99, 91, 255, 0.4)"
                  className="agent-core"
                />
                <circle
                  cx={agent.x}
                  cy={agent.y}
                  r="1.5"
                  fill="none"
                  stroke="rgba(99, 91, 255, 0.15)"
                  strokeWidth="0.15"
                  className="agent-ring"
                />
              </g>
            ))}
          </g>

          <g className="policy-node">
            <circle cx="80" cy="40" r="2" fill="rgba(99, 91, 255, 0.12)" className="policy-glow" />
            <circle cx="80" cy="40" r="1" fill="rgba(99, 91, 255, 0.35)" className="policy-core" />
          </g>

          <g className="receipts">
            <use href="#receipt-icon" x="91" y="42" width="2.5" height="3.5" className="receipt" style={{ color: 'rgba(99, 91, 255, 0.2)' }} />
          </g>

          <g className="verification-pulses">
            <circle cx="92.5" cy="44" r="0.6" fill="rgba(74, 222, 128, 0.35)" className="verify-pulse" />
          </g>
        </svg>

        <div className="mesh-gradient" />
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
            Originary<span className="tm">&#8482;</span> builds and stewards an open standard for publishing terms and verifying receipts as durable evidence for what was accessed, under which preferences, how it was paid for, and by whom, while preserving privacy. This makes AI interactions verifiable and auditable across the open internet.
          </p>

          <p className="hero-clarifier">
            Designed for independent implementations and adapter-based interoperability across all protocols and rails.
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
          background: #fafafa;
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
          background: linear-gradient(135deg, #fafafa 0%, #f5f5fa 50%, #fafafa 100%);
        }

        .aurora {
          position: absolute;
          width: 120%;
          height: 50%;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: auroraFloat 40s ease-in-out infinite;
        }

        .aurora-1 {
          top: -15%;
          right: -15%;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.08) 0%, transparent 70%);
        }

        .aurora-2 {
          top: 35%;
          right: -5%;
          background: radial-gradient(ellipse at center, rgba(0, 212, 170, 0.05) 0%, transparent 70%);
          animation-delay: -15s;
          animation-duration: 50s;
        }

        .aurora-3 {
          bottom: 0%;
          right: 15%;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.04) 0%, transparent 70%);
          animation-delay: -30s;
          animation-duration: 45s;
        }

        @keyframes auroraFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translate(-15px, 10px) scale(1.02);
            opacity: 0.35;
          }
        }

        .particle-field {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }

        .flow-pulse {
          stroke-dasharray: 15 85;
          stroke-dashoffset: 100;
          animation: flowPulse 8s ease-in-out infinite;
        }

        @keyframes flowPulse {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            stroke-dashoffset: -100;
            opacity: 0;
          }
        }

        .agent-node {
          animation: agentPulse 6s ease-in-out infinite;
        }

        .agent-ring {
          animation: agentRing 6s ease-in-out infinite;
        }

        @keyframes agentPulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes agentRing {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.2);
          }
        }

        .policy-node {
          animation: policyGlow 8s ease-in-out infinite;
        }

        @keyframes policyGlow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .receipt {
          animation: receiptAppear 6s ease-in-out infinite;
        }

        @keyframes receiptAppear {
          0%, 20% {
            opacity: 0.1;
          }
          40%, 80% {
            opacity: 0.25;
          }
          100% {
            opacity: 0.1;
          }
        }

        .verify-pulse {
          animation: verifyPulse 6s ease-in-out infinite;
        }

        @keyframes verifyPulse {
          0%, 30% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 0.4;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .mesh-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 45% at 50% -5%, rgba(99, 91, 255, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 85% 75%, rgba(99, 91, 255, 0.02) 0%, transparent 50%);
        }

        .content-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,
            rgba(250, 250, 250, 1) 0%,
            rgba(250, 250, 250, 0.99) 25%,
            rgba(250, 250, 250, 0.92) 45%,
            rgba(250, 250, 250, 0.5) 100%);
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
        .hero-content.loaded > *:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }

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

        .hero-clarifier {
          font-size: 15px;
          line-height: 1.6;
          color: #737373;
          max-width: 480px;
          margin: -16px 0 0 0;
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
            background: radial-gradient(ellipse 100% 100% at 50% 50%, rgba(250, 250, 250, 0.95) 0%, rgba(250, 250, 250, 0.98) 100%);
          }

          .hero-description {
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

          .particle-field {
            opacity: 0.4;
          }

          .aurora {
            opacity: 0.3;
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

          .aurora {
            animation: none;
            opacity: 0.2;
          }

          .agent-node,
          .agent-ring {
            animation: none;
          }

          .policy-node {
            animation: none;
          }

          .flow-pulse {
            animation: none;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            opacity: 0.4;
          }

          .receipt {
            animation: none;
            opacity: 0.2;
          }

          .verify-pulse {
            animation: none;
            opacity: 0.3;
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
