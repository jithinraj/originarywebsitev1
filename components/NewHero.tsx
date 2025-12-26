'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

// Agent node positions for the network visualization
const agentNodes = [
  { id: 1, x: 15, y: 20, size: 'large', label: 'Agent A' },
  { id: 2, x: 75, y: 15, size: 'medium', label: 'Agent B' },
  { id: 3, x: 85, y: 55, size: 'large', label: 'Provider' },
  { id: 4, x: 25, y: 70, size: 'medium', label: 'Agent C' },
  { id: 5, x: 50, y: 40, size: 'small', label: 'Gateway' },
  { id: 6, x: 40, y: 85, size: 'small', label: 'Agent D' },
  { id: 7, x: 65, y: 75, size: 'medium', label: 'Verifier' },
  { id: 8, x: 10, y: 50, size: 'small', label: 'Agent E' },
]

// Connections between nodes
const connections = [
  { from: 1, to: 5 },
  { from: 2, to: 5 },
  { from: 5, to: 3 },
  { from: 4, to: 5 },
  { from: 5, to: 7 },
  { from: 6, to: 7 },
  { from: 7, to: 3 },
  { from: 8, to: 4 },
  { from: 1, to: 8 },
  { from: 2, to: 3 },
]

export default function NewHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={heroRef} className="hero">
      {/* Animated Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-gradient" />

        {/* Animated grid */}
        <div className="grid-pattern" />

        {/* SVG Network Animation */}
        <svg className="network-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Gradient for connections */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 91, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(99, 91, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(99, 91, 255, 0.3)" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Receipt icon */}
            <symbol id="receipt" viewBox="0 0 10 12">
              <rect x="1" y="0" width="8" height="11" rx="1" fill="rgba(74, 222, 128, 0.9)" />
              <line x1="3" y1="3" x2="7" y2="3" stroke="#0f172a" strokeWidth="0.5" />
              <line x1="3" y1="5" x2="7" y2="5" stroke="#0f172a" strokeWidth="0.5" />
              <line x1="3" y1="7" x2="5" y2="7" stroke="#0f172a" strokeWidth="0.5" />
              <path d="M1 11 L2 10 L3 11 L4 10 L5 11 L6 10 L7 11 L8 10 L9 11" fill="none" stroke="rgba(74, 222, 128, 0.9)" strokeWidth="0.3" />
            </symbol>

            {/* Payment pulse */}
            <radialGradient id="pulseGradient">
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.8)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
            </radialGradient>
          </defs>

          {/* Connection lines */}
          {connections.map((conn, i) => {
            const fromNode = agentNodes.find(n => n.id === conn.from)!
            const toNode = agentNodes.find(n => n.id === conn.to)!
            const midX = (fromNode.x + toNode.x) / 2
            const midY = (fromNode.y + toNode.y) / 2 - 5

            return (
              <g key={`conn-${i}`}>
                <path
                  className="connection-line"
                  d={`M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${toNode.x} ${toNode.y}`}
                  fill="none"
                  stroke="url(#connectionGradient)"
                  strokeWidth="0.15"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />

                {/* Traveling receipt packet */}
                <use
                  href="#receipt"
                  className="traveling-receipt"
                  width="2"
                  height="2.4"
                  style={{
                    offsetPath: `path('M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${toNode.x} ${toNode.y}')`,
                    animationDelay: `${i * 0.8 + 2}s`
                  }}
                />
              </g>
            )
          })}

          {/* Agent nodes */}
          {agentNodes.map((node, i) => {
            const radius = node.size === 'large' ? 2 : node.size === 'medium' ? 1.5 : 1

            return (
              <g key={node.id} className="agent-node" style={{ animationDelay: `${i * 0.2}s` }}>
                {/* Outer pulse ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 2}
                  fill="none"
                  stroke="rgba(99, 91, 255, 0.3)"
                  strokeWidth="0.1"
                  className="pulse-ring"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />

                {/* Main node */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill="rgba(99, 91, 255, 0.8)"
                  filter="url(#glow)"
                  className="node-core"
                />

                {/* Inner glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 0.6}
                  fill="rgba(139, 131, 255, 0.9)"
                />

                {/* Payment pulse effect */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill="url(#pulseGradient)"
                  className="payment-pulse"
                  style={{ animationDelay: `${i * 1.2 + 3}s` }}
                />
              </g>
            )
          })}

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={`particle-${i}`}
              className="floating-particle"
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.2"
              fill="rgba(99, 91, 255, 0.5)"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </svg>

        {/* Overlay gradient for text readability */}
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
            Originary<span className="tm">™</span> builds and stewards an open standard for publishing terms and verifying receipts as durable evidence for what was accessed, under which preferences, how it was paid for, and by whom, while preserving privacy. This makes AI interactions verifiable and auditable across the open internet.
          </p>

          <p className="hero-clarifier">
            Designed for independent implementations and adapter-based interoperability across all protocols and rails.
          </p>

          <div className="hero-actions">
            <Link
              href="/developers"
              className="hero-btn-primary"
            >
              Start building
              <ArrowRight size={18} strokeWidth={2.5} />
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

          <div className="hero-trademark">
            <p className="trademark-text">
              <span className="trademark-label">ORIGINARY&#8482;</span> - Open software.{' '}
              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                className="trademark-link"
              >
                Learn, view source, explore &amp; download PEAC Protocol
              </a>
              <br />
              Available for{' '}
              <Link href="/downloads" className="trademark-link">
                macOS, Windows, Linux
              </Link>
            </p>
          </div>
        </div>

        <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
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

        /* Animated Background */
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 91, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0, 212, 170, 0.06) 0%, transparent 50%);
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99, 91, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 91, 255, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%);
        }

        .network-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }

        .content-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(250, 250, 250, 0.95) 0%, rgba(250, 250, 250, 0.8) 40%, rgba(250, 250, 250, 0.6) 100%);
        }

        /* Connection lines */
        .connection-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 3s ease forwards;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Traveling receipt packets */
        .traveling-receipt {
          offset-distance: 0%;
          opacity: 0;
          animation: travelReceipt 4s ease-in-out infinite;
        }

        @keyframes travelReceipt {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }

        /* Agent nodes */
        .agent-node {
          opacity: 0;
          animation: nodeAppear 0.6s ease forwards;
        }

        @keyframes nodeAppear {
          to {
            opacity: 1;
          }
        }

        .node-core {
          animation: nodeGlow 3s ease-in-out infinite;
        }

        @keyframes nodeGlow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        /* Pulse rings */
        .pulse-ring {
          transform-origin: center;
          animation: pulseRing 3s ease-out infinite;
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        /* Payment pulse */
        .payment-pulse {
          opacity: 0;
          animation: paymentFlash 5s ease-in-out infinite;
        }

        @keyframes paymentFlash {
          0%, 80%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          85% {
            opacity: 0.8;
            transform: scale(1.5);
          }
          95% {
            opacity: 0;
            transform: scale(2);
          }
        }

        /* Floating particles */
        .floating-particle {
          animation: floatParticle 10s ease-in-out infinite;
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(10px, -15px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-5px, -25px);
            opacity: 0.4;
          }
          75% {
            transform: translate(15px, -10px);
            opacity: 0.5;
          }
        }

        /* Hero Container */
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
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .hero-content.loaded {
          opacity: 1;
          transform: translateY(0);
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
            0 0 0 1px rgba(99, 91, 255, 0.3),
            0 4px 16px -2px rgba(99, 91, 255, 0.5),
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
            0 0 0 1px rgba(99, 91, 255, 0.4),
            0 8px 24px -4px rgba(99, 91, 255, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .hero-btn-primary:hover::before {
          opacity: 1;
        }

        .hero-btn-primary :global(svg) {
          transition: transform 0.3s ease;
        }

        .hero-btn-primary:hover :global(svg) {
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

        .hero-trademark {
          margin-top: 0;
        }

        .trademark-text {
          font-size: 11px;
          line-height: 1.4;
          color: var(--gray-400);
          max-width: 90%;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0;
        }

        .trademark-label {
          color: var(--gray-500);
        }

        .trademark-link {
          color: var(--gray-500);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }

        .trademark-link:hover {
          border-bottom-color: var(--gray-300);
        }

        /* Code Window */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }

        .hero-visual.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .code-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.15) 0%, transparent 60%);
          filter: blur(40px);
          z-index: -1;
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

        .line-1 { animation-delay: 0.8s; }
        .line-2 { animation-delay: 1s; }
        .line-3 { animation-delay: 1.2s; }

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

        .verify-status :global(svg) {
          filter: drop-shadow(0 0 6px rgba(74, 222, 128, 0.5));
        }

        .verify-text {
          opacity: 0;
          animation: fadeIn 0.5s ease 1.5s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 1440px) {
          .hero-headline-main {
            font-size: clamp(44px, 5.5vw, 64px);
          }

          .hero-headline-sub {
            font-size: clamp(28px, 3.5vw, 42px);
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .content-overlay {
            background:
              radial-gradient(ellipse 100% 100% at 50% 50%, rgba(250, 250, 250, 0.9) 0%, rgba(250, 250, 250, 0.95) 100%);
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

          .hero-trademark {
            text-align: center;
          }

          .trademark-text {
            max-width: 100%;
          }

          .code-window {
            max-width: 480px;
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

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-content,
          .hero-visual {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .connection-line {
            stroke-dashoffset: 0;
            animation: none;
          }

          .traveling-receipt {
            display: none;
          }

          .agent-node {
            opacity: 1;
            animation: none;
          }

          .node-core {
            animation: none;
          }

          .pulse-ring {
            animation: none;
            opacity: 0.3;
          }

          .payment-pulse {
            display: none;
          }

          .floating-particle {
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
            opacity: 1;
          }

          .verify-text {
            opacity: 1;
            animation: none;
          }

          .code-glow {
            opacity: 1;
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
