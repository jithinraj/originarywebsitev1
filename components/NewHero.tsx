'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
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

// Floating particles with stable positions
const generateParticles = () => {
  return [...Array(30)].map((_, i) => ({
    id: i,
    cx: (i * 37 + 13) % 100,
    cy: (i * 23 + 7) % 100,
    r: 0.15 + (i % 3) * 0.1,
    delay: i * 0.4,
    duration: 8 + (i % 5) * 2
  }))
}

export default function NewHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)
  const particles = useMemo(() => generateParticles(), [])

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const parallaxOffset = scrollY * 0.15

  return (
    <section ref={heroRef} className="hero" style={{ background: '#fafafa' }}>
      {/* Enhanced Animated Background */}
      <div className="hero-bg" aria-hidden="true" style={{ zIndex: 0 }}>
        {/* Multi-layer gradient with parallax */}
        <div
          className="bg-gradient"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />

        {/* Animated aurora effect */}
        <div className="aurora-layer" />

        {/* Enhanced animated grid with perspective */}
        <div
          className="grid-pattern"
          style={{
            transform: `translateY(${parallaxOffset * 0.5}px)`,
            backgroundPosition: `${mousePosition.x * 20}px ${mousePosition.y * 20}px`
          }}
        />

        {/* Glowing orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* SVG Network Animation */}
        <svg
          className="network-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        >
          <defs>
            {/* Enhanced gradient for connections */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 91, 255, 0.2)">
                <animate attributeName="stop-color" values="rgba(99, 91, 255, 0.2);rgba(0, 212, 170, 0.3);rgba(99, 91, 255, 0.2)" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="rgba(0, 212, 170, 0.5)">
                <animate attributeName="stop-color" values="rgba(0, 212, 170, 0.5);rgba(99, 91, 255, 0.6);rgba(0, 212, 170, 0.5)" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgba(99, 91, 255, 0.2)">
                <animate attributeName="stop-color" values="rgba(99, 91, 255, 0.2);rgba(0, 212, 170, 0.3);rgba(99, 91, 255, 0.2)" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            {/* Node glow gradient */}
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="rgba(99, 91, 255, 1)" />
              <stop offset="50%" stopColor="rgba(99, 91, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(99, 91, 255, 0)" />
            </radialGradient>

            {/* Glow filter */}
            <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Stronger glow for active elements */}
            <filter id="strongGlow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
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

            {/* Cyan glow for particles */}
            <radialGradient id="particleGlow">
              <stop offset="0%" stopColor="rgba(0, 212, 170, 0.8)" />
              <stop offset="100%" stopColor="rgba(0, 212, 170, 0)" />
            </radialGradient>
          </defs>

          {/* Connection lines with enhanced animation */}
          {connections.map((conn, i) => {
            const fromNode = agentNodes.find(n => n.id === conn.from)!
            const toNode = agentNodes.find(n => n.id === conn.to)!
            const midX = (fromNode.x + toNode.x) / 2
            const midY = (fromNode.y + toNode.y) / 2 - 5

            return (
              <g key={`conn-${i}`}>
                {/* Glow layer */}
                <path
                  className="connection-glow"
                  d={`M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${toNode.x} ${toNode.y}`}
                  fill="none"
                  stroke="rgba(0, 212, 170, 0.3)"
                  strokeWidth="0.8"
                  filter="url(#glow)"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <path
                  className="connection-line"
                  d={`M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${toNode.x} ${toNode.y}`}
                  fill="none"
                  stroke="url(#connectionGradient)"
                  strokeWidth="0.2"
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

          {/* Agent nodes with enhanced effects */}
          {agentNodes.map((node, i) => {
            const radius = node.size === 'large' ? 2 : node.size === 'medium' ? 1.5 : 1

            return (
              <g key={node.id} className="agent-node" style={{ animationDelay: `${i * 0.2}s` }}>
                {/* Outer glow ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 3}
                  fill="url(#nodeGlow)"
                  className="node-glow"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />

                {/* Outer pulse ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 2}
                  fill="none"
                  stroke="rgba(99, 91, 255, 0.4)"
                  strokeWidth="0.15"
                  className="pulse-ring"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />

                {/* Secondary pulse ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 1.5}
                  fill="none"
                  stroke="rgba(0, 212, 170, 0.3)"
                  strokeWidth="0.1"
                  className="pulse-ring-alt"
                  style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
                />

                {/* Main node */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill="rgba(99, 91, 255, 0.9)"
                  filter="url(#strongGlow)"
                  className="node-core"
                />

                {/* Inner glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 0.6}
                  fill="rgba(139, 131, 255, 0.95)"
                />

                {/* Center highlight */}
                <circle
                  cx={node.x - radius * 0.2}
                  cy={node.y - radius * 0.2}
                  r={radius * 0.25}
                  fill="rgba(255, 255, 255, 0.6)"
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

          {/* Enhanced floating particles */}
          {particles.map((particle) => (
            <g key={`particle-${particle.id}`}>
              <circle
                className="floating-particle-glow"
                cx={particle.cx}
                cy={particle.cy}
                r={particle.r * 4}
                fill="url(#particleGlow)"
                style={{
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
              <circle
                className="floating-particle"
                cx={particle.cx}
                cy={particle.cy}
                r={particle.r}
                fill="rgba(0, 212, 170, 0.7)"
                style={{
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            </g>
          ))}
        </svg>

        {/* Overlay gradient for text readability */}
        <div className="content-overlay" />
      </div>

      <div className="hero-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          {/* Badge */}
          <div className="hero-badge">
            <CheckCircle size={14} strokeWidth={2} />
            <span>Open source protocol</span>
          </div>

          {/* Headline */}
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

          {/* Enhanced CTAs */}
          <div className="hero-actions">
            <Link
              href="/developers"
              className="hero-btn-primary"
            >
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

          {/* Feature Pills */}
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

        {/* 3D Code Window */}
        <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
          <div className="code-window-wrapper">
            <div className="code-window">
              <div className="code-window-shine" />
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
                  <div className="verify-icon-wrapper">
                    <Shield size={14} strokeWidth={2} className="verify-shield" />
                    <div className="verify-pulse" />
                  </div>
                  <span className="verify-text">Cryptographically verified</span>
                  <div className="verify-checkmark">
                    <CheckCircle size={14} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="code-glow" aria-hidden="true" />
            <div className="code-reflection" aria-hidden="true" />
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
          background: linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%);
        }

        /* Enhanced Animated Background */
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 30% 20%, rgba(99, 91, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 35% at 70% 80%, rgba(0, 212, 170, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 91, 255, 0.05) 0%, transparent 40%);
          transition: transform 0.1s ease-out;
        }

        /* Aurora effect */
        .aurora-layer {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              125deg,
              transparent 0%,
              rgba(99, 91, 255, 0.02) 20%,
              transparent 40%,
              rgba(0, 212, 170, 0.02) 60%,
              transparent 80%,
              rgba(99, 91, 255, 0.01) 100%
            );
          animation: auroraShift 15s ease-in-out infinite;
        }

        @keyframes auroraShift {
          0%, 100% {
            opacity: 0.5;
            transform: translateX(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(5%) scale(1.05);
          }
        }

        /* Glowing orbs - positioned on right side only */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: orbFloat 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          top: 20%;
          right: 15%;
          left: auto;
          background: rgba(99, 91, 255, 0.08);
          animation-delay: 0s;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          top: 55%;
          right: 25%;
          left: auto;
          background: rgba(0, 212, 170, 0.06);
          animation-delay: -7s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          bottom: 25%;
          right: 5%;
          left: auto;
          background: rgba(99, 91, 255, 0.05);
          animation-delay: -14s;
        }

        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(15px, -20px) scale(1.05);
          }
          50% {
            transform: translate(-8px, 15px) scale(0.97);
          }
          75% {
            transform: translate(20px, 8px) scale(1.03);
          }
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99, 91, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 91, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 70% 50% at 65% 50%, black 20%, transparent 70%);
          transition: background-position 0.3s ease-out;
        }

        .network-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          transition: transform 0.1s ease-out;
        }

        .content-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0.98) 30%, rgba(250, 250, 250, 0.85) 50%, rgba(250, 250, 250, 0.4) 100%);
          z-index: 1;
        }

        /* Connection lines */
        .connection-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 3s ease forwards;
        }

        .connection-glow {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 3s ease forwards, glowPulse 3s ease-in-out infinite 3s;
          opacity: 0.5;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* Node glow */
        .node-glow {
          opacity: 0.3;
          animation: nodeGlowPulse 4s ease-in-out infinite;
        }

        @keyframes nodeGlowPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }

        /* Traveling receipt packets */
        .traveling-receipt {
          offset-distance: 0%;
          opacity: 0;
          animation: travelReceipt 4s ease-in-out infinite;
          filter: drop-shadow(0 0 4px rgba(74, 222, 128, 0.8));
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
          animation: nodeAppear 0.8s ease forwards;
        }

        @keyframes nodeAppear {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .node-core {
          animation: nodeGlow 3s ease-in-out infinite;
        }

        @keyframes nodeGlow {
          0%, 100% {
            opacity: 0.9;
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

        .pulse-ring-alt {
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

        /* Enhanced floating particles */
        .floating-particle {
          animation: floatParticle 10s ease-in-out infinite;
        }

        .floating-particle-glow {
          animation: floatParticle 10s ease-in-out infinite, glowBreath 3s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          25% {
            transform: translate(8px, -12px);
            opacity: 0.7;
          }
          50% {
            transform: translate(-4px, -20px);
            opacity: 0.5;
          }
          75% {
            transform: translate(12px, -8px);
            opacity: 0.6;
          }
        }

        @keyframes glowBreath {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* Hero Container */
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
          gap: 28px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-content.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        /* Badge */
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

        /* Headline */
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

        /* Enhanced CTAs */
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 650;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, var(--brand-primary) 0%, #4f46e5 100%);
          border-radius: 14px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 0 0 1px rgba(99, 91, 255, 0.3),
            0 4px 20px -4px rgba(99, 91, 255, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(99, 91, 255, 0.4),
            0 8px 30px -4px rgba(99, 91, 255, 0.5),
            0 0 40px -10px rgba(99, 91, 255, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .hero-btn-primary :global(.arrow-icon) {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-btn-primary:hover :global(.arrow-icon) {
          transform: translateX(4px);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: var(--gray-700);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 91, 255, 0.15);
          border-radius: 14px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .hero-btn-secondary:hover {
          transform: translateY(-3px);
          border-color: rgba(99, 91, 255, 0.25);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(99, 91, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          color: var(--gray-900);
        }

        /* Feature Pills */
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
          line-height: 1.5;
          color: var(--gray-400);
          max-width: 90%;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0;
        }

        .trademark-label {
          color: var(--gray-500);
          font-weight: 500;
        }

        .trademark-link {
          color: var(--gray-500);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .trademark-link:hover {
          color: var(--brand-primary);
          border-bottom-color: rgba(99, 91, 255, 0.3);
        }

        /* 3D Code Window */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(40px) perspective(1000px) rotateY(-5deg);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .hero-visual.loaded {
          opacity: 1;
          transform: translateY(0) perspective(1000px) rotateY(0deg);
        }

        .code-window-wrapper {
          position: relative;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }

        .code-window-wrapper:hover {
          transform: translateY(-8px) perspective(1000px) rotateX(2deg) rotateY(-2deg);
        }

        .code-glow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.2) 0%, rgba(0, 212, 170, 0.1) 40%, transparent 70%);
          filter: blur(50px);
          z-index: -1;
          transition: all 0.6s ease;
        }

        .code-window-wrapper:hover .code-glow {
          inset: -80px;
          filter: blur(60px);
          background: radial-gradient(ellipse at center, rgba(99, 91, 255, 0.25) 0%, rgba(0, 212, 170, 0.15) 40%, transparent 70%);
        }

        .code-reflection {
          position: absolute;
          bottom: -50%;
          left: 5%;
          right: 5%;
          height: 50%;
          background: linear-gradient(180deg, rgba(99, 91, 255, 0.08) 0%, transparent 50%);
          filter: blur(20px);
          transform: scaleY(-1);
          opacity: 0.3;
          z-index: -1;
        }

        .code-window {
          position: relative;
          width: 100%;
          max-width: 520px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 4px 20px rgba(0, 0, 0, 0.2),
            0 20px 60px -10px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: box-shadow 0.4s ease;
        }

        .code-window-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
          animation: windowShine 4s ease-in-out infinite 2s;
        }

        @keyframes windowShine {
          0%, 100% { left: -100%; }
          50% { left: 150%; }
        }

        .code-window-wrapper:hover .code-window {
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.15),
            0 8px 30px rgba(0, 0, 0, 0.25),
            0 30px 80px -10px rgba(0, 0, 0, 0.5),
            0 0 100px -20px rgba(99, 91, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .code-header {
          display: flex;
          align-items: center;
          padding: 16px 22px;
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
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .code-window-wrapper:hover .dot {
          transform: scale(1.15);
        }

        .dot-red {
          background: linear-gradient(135deg, #ff5f57 0%, #ff3b30 100%);
          box-shadow: 0 0 8px rgba(255, 95, 87, 0.4);
        }
        .dot-yellow {
          background: linear-gradient(135deg, #febc2e 0%, #ffcc00 100%);
          box-shadow: 0 0 8px rgba(254, 188, 46, 0.4);
        }
        .dot-green {
          background: linear-gradient(135deg, #28c840 0%, #34c759 100%);
          box-shadow: 0 0 8px rgba(40, 200, 64, 0.4);
        }

        .code-title {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.03em;
        }

        .code-body {
          padding: 28px 26px;
        }

        .code-line {
          display: flex;
          align-items: baseline;
          gap: 0;
          margin-bottom: 16px;
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          opacity: 0;
          transform: translateX(-15px);
          animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .line-1 { animation-delay: 0.9s; }
        .line-2 { animation-delay: 1.15s; }
        .line-3 { animation-delay: 1.4s; }

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
          text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
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
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 16px;
          background: linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%);
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
          box-shadow: 0 0 8px rgba(251, 191, 36, 0.6);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .code-value.success {
          color: #4ade80;
          font-weight: 600;
          text-shadow: 0 0 25px rgba(74, 222, 128, 0.5);
        }

        .code-footer {
          padding: 18px 22px;
          background: linear-gradient(90deg, rgba(74, 222, 128, 0.08) 0%, rgba(74, 222, 128, 0.04) 100%);
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

        .verify-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .verify-shield {
          filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.6));
          animation: shieldGlow 2s ease-in-out infinite;
        }

        @keyframes shieldGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.6)); }
          50% { filter: drop-shadow(0 0 16px rgba(74, 222, 128, 0.9)); }
        }

        .verify-pulse {
          position: absolute;
          inset: -8px;
          border: 2px solid rgba(74, 222, 128, 0.4);
          border-radius: 50%;
          animation: verifyPulse 2s ease-out infinite 1.8s;
          opacity: 0;
        }

        @keyframes verifyPulse {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .verify-text {
          opacity: 0;
          animation: fadeIn 0.6s ease 1.7s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .verify-checkmark {
          margin-left: auto;
          color: #4ade80;
          opacity: 0;
          transform: scale(0);
          animation: checkmarkPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 2.2s forwards;
        }

        @keyframes checkmarkPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-10deg);
          }
          70% {
            transform: scale(1.2) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        .verify-checkmark :global(svg) {
          filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.8));
        }

        /* Responsive */
        @media (max-width: 1440px) {
          .hero-headline-main {
            font-size: clamp(44px, 5.5vw, 68px);
          }

          .hero-headline-sub {
            font-size: clamp(28px, 3.5vw, 44px);
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
              radial-gradient(ellipse 100% 100% at 50% 50%, rgba(250, 250, 250, 0.92) 0%, rgba(250, 250, 250, 0.97) 100%);
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

          .hero-visual {
            transform: translateY(40px) perspective(1000px);
          }

          .hero-visual.loaded {
            transform: translateY(0) perspective(1000px);
          }

          .code-window-wrapper:hover {
            transform: translateY(-8px);
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
            padding: 16px 28px;
          }

          .code-window {
            max-width: 100%;
          }

          .orb {
            display: none;
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
            padding: 16px 24px;
          }

          .hero-features {
            gap: 8px;
          }

          .feature-pill {
            font-size: 12px;
            padding: 6px 12px;
          }

          .code-header {
            padding: 14px 18px;
          }

          .code-body {
            padding: 18px;
          }

          .code-line {
            font-size: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }

          .code-footer {
            padding: 14px 18px;
          }

          .verify-status {
            font-size: 12px;
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
            padding: 8px 14px;
          }

          .hero-description {
            font-size: 15px;
          }

          .code-line {
            font-size: 10px;
          }

          .feature-pill {
            font-size: 11px;
            padding: 5px 10px;
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

          .headline-char,
          .headline-char-sub {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .desc-line {
            background-size: 100% 100%;
            animation: none;
          }

          .hero-clarifier {
            opacity: 1;
            animation: none;
          }

          .aurora-layer {
            animation: none;
            opacity: 0.6;
          }

          .orb {
            animation: none;
          }

          .badge-glow {
            animation: none;
            opacity: 0.6;
          }

          .connection-line,
          .connection-glow {
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

          .node-glow {
            animation: none;
            opacity: 0.3;
          }

          .pulse-ring,
          .pulse-ring-alt {
            animation: none;
            opacity: 0.3;
          }

          .payment-pulse {
            display: none;
          }

          .floating-particle,
          .floating-particle-glow {
            animation: none;
            opacity: 0.4;
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

          .verify-checkmark {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .verify-pulse {
            display: none;
          }

          .verify-shield {
            animation: none;
          }

          .code-window-shine {
            display: none;
          }

          .code-window-wrapper:hover {
            transform: none;
          }

          .hero-btn-primary,
          .hero-btn-secondary,
          .hero-badge,
          .feature-pill {
            transition: none;
          }

          .hero-btn-primary:hover,
          .hero-btn-secondary:hover,
          .hero-badge:hover,
          .feature-pill:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
