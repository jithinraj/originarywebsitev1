'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, FileText, Shield, Receipt } from 'lucide-react'

const steps = [
  {
    id: 'publish',
    num: '01',
    title: 'Publish policy',
    tagline: 'Define your terms',
    desc: 'Deploy a machine-readable policy at /.well-known/peac.txt defining access terms and payment requirements',
    icon: FileText,
    color: '#635bff',
  },
  {
    id: 'enforce',
    num: '02',
    title: 'Enforce at edge',
    tagline: 'Control access',
    desc: 'Allow, deny, or request payment before serving the response with HTTP 402 status codes',
    icon: Shield,
    color: '#00d4aa',
  },
  {
    id: 'receipt',
    num: '03',
    title: 'Return receipt',
    tagline: 'Prove it forever',
    desc: 'Sign and return a cryptographic PEAC-Receipt that verifies offline with your public key',
    icon: Receipt,
    color: '#f59e0b',
  }
]

export default function HowItWorksNew() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [flowProgress, setFlowProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance animation
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
      setFlowProgress((prev) => (prev + 1) % 4)
    }, 2500)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="how">
      {/* Background Effects */}
      <div className="how-bg">
        <div className="bg-gradient" />
        <div className="bg-grid" />
      </div>

      <div className="how-container">
        {/* Header */}
        <div className={`how-header ${isVisible ? 'visible' : ''}`}>
          <div className="label-wrapper">
            <span className="how-label">How it works</span>
          </div>
          <h2 className="how-title">Three steps to verifiable interactions</h2>
        </div>

        {/* Animated Flowchart */}
        <div className={`flowchart ${isVisible ? 'visible' : ''}`}>
          <svg viewBox="0 0 900 300" className="flow-svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Gradients */}
              <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#635bff" />
                <stop offset="100%" stopColor="#00d4aa" />
              </linearGradient>
              <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4aa" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Connection Lines (static base) */}
            <path
              d="M200 150 Q 350 150 450 150"
              className="connection-base"
              stroke="rgba(99, 91, 255, 0.1)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M450 150 Q 550 150 700 150"
              className="connection-base"
              stroke="rgba(0, 212, 170, 0.1)"
              strokeWidth="3"
              fill="none"
            />

            {/* Animated Connection Lines */}
            <path
              d="M200 150 Q 350 150 450 150"
              className={`connection-line line-1 ${flowProgress >= 1 ? 'active' : ''}`}
              stroke="url(#line-gradient-1)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M450 150 Q 550 150 700 150"
              className={`connection-line line-2 ${flowProgress >= 2 ? 'active' : ''}`}
              stroke="url(#line-gradient-2)"
              strokeWidth="3"
              fill="none"
            />

            {/* Particle trails */}
            <g className="particles">
              {[0, 1, 2, 3, 4].map((i) => (
                <circle
                  key={`p1-${i}`}
                  r="3"
                  fill="#635bff"
                  opacity="0.6"
                  className={`particle particle-1 p-${i} ${flowProgress >= 1 ? 'active' : ''}`}
                />
              ))}
              {[0, 1, 2, 3, 4].map((i) => (
                <circle
                  key={`p2-${i}`}
                  r="3"
                  fill="#00d4aa"
                  opacity="0.6"
                  className={`particle particle-2 p-${i} ${flowProgress >= 2 ? 'active' : ''}`}
                />
              ))}
            </g>

            {/* Traveling Receipt Packet */}
            <g className={`receipt-packet ${flowProgress >= 1 ? 'traveling' : ''}`}>
              <rect x="-20" y="-14" width="40" height="28" rx="6" fill="white" stroke="#635bff" strokeWidth="2"/>
              <path d="M-12 -4h24M-12 4h16" stroke="#635bff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              <circle cx="10" cy="6" r="4" fill="#00d4aa"/>
              <path d="M8 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>

            {/* Node 1: Publish */}
            <g className={`node node-1 ${activeStep === 0 ? 'active' : ''}`} onClick={() => setActiveStep(0)}>
              <circle cx="150" cy="150" r="50" className="pulse-ring ring-1" fill="none" stroke="#635bff" strokeWidth="1" opacity="0"/>
              <circle cx="150" cy="150" r="50" className="pulse-ring ring-2" fill="none" stroke="#635bff" strokeWidth="1" opacity="0"/>
              <circle cx="150" cy="150" r="50" className="node-bg" fill="white" stroke="#e5e5e5" strokeWidth="2"/>
              <circle cx="150" cy="150" r="50" className="node-border" fill="none" stroke="#635bff" strokeWidth="3" opacity="0"/>
              <g transform="translate(150, 150)">
                <circle r="24" fill="rgba(99, 91, 255, 0.1)" className="icon-bg"/>
                <g transform="translate(-12, -12)" className="icon" stroke="#635bff" fill="none" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </g>
              </g>
              <text x="150" y="220" textAnchor="middle" className="node-label">Publish</text>
            </g>

            {/* Node 2: Enforce */}
            <g className={`node node-2 ${activeStep === 1 ? 'active' : ''}`} onClick={() => setActiveStep(1)}>
              <circle cx="450" cy="150" r="50" className="pulse-ring ring-1" fill="none" stroke="#00d4aa" strokeWidth="1" opacity="0"/>
              <circle cx="450" cy="150" r="50" className="pulse-ring ring-2" fill="none" stroke="#00d4aa" strokeWidth="1" opacity="0"/>
              <circle cx="450" cy="150" r="50" className="node-bg" fill="white" stroke="#e5e5e5" strokeWidth="2"/>
              <circle cx="450" cy="150" r="50" className="node-border" fill="none" stroke="#00d4aa" strokeWidth="3" opacity="0"/>
              <g transform="translate(450, 150)">
                <circle r="24" fill="rgba(0, 212, 170, 0.1)" className="icon-bg"/>
                <g transform="translate(-12, -12)" className="icon" stroke="#00d4aa" fill="none" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </g>
              </g>
              <text x="450" y="220" textAnchor="middle" className="node-label">Enforce</text>
            </g>

            {/* Node 3: Receipt */}
            <g className={`node node-3 ${activeStep === 2 ? 'active' : ''}`} onClick={() => setActiveStep(2)}>
              <circle cx="750" cy="150" r="50" className="pulse-ring ring-1" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0"/>
              <circle cx="750" cy="150" r="50" className="pulse-ring ring-2" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0"/>
              <circle cx="750" cy="150" r="50" className="node-bg" fill="white" stroke="#e5e5e5" strokeWidth="2"/>
              <circle cx="750" cy="150" r="50" className="node-border" fill="none" stroke="#f59e0b" strokeWidth="3" opacity="0"/>
              <g transform="translate(750, 150)">
                <circle r="24" fill="rgba(245, 158, 11, 0.1)" className="icon-bg"/>
                <g transform="translate(-12, -12)" className="icon" stroke="#f59e0b" fill="none" strokeWidth="2">
                  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/>
                  <path d="M8 10h8M8 14h8"/>
                </g>
              </g>
              <text x="750" y="220" textAnchor="middle" className="node-label">Receipt</text>
            </g>

            {/* Arrow indicators */}
            <g className="arrows">
              <polygon points="295,145 305,150 295,155" fill="#635bff" className={`arrow arrow-1 ${flowProgress >= 1 ? 'active' : ''}`}/>
              <polygon points="595,145 605,150 595,155" fill="#00d4aa" className={`arrow arrow-2 ${flowProgress >= 2 ? 'active' : ''}`}/>
            </g>
          </svg>
        </div>

        {/* Step Cards */}
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`step-card ${isVisible ? 'visible' : ''} ${activeStep === i ? 'active' : ''}`}
              style={{ '--accent': step.color, '--delay': `${i * 120 + 300}ms` } as React.CSSProperties}
              onClick={() => setActiveStep(i)}
              onMouseEnter={() => setActiveStep(i)}
            >
              <div className="card-glow" />

              <div className="card-header">
                <span className="step-num">{step.num}</span>
                <div className="step-icon">
                  <step.icon size={20} strokeWidth={2.5} />
                </div>
              </div>

              <div className="card-body">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-tagline">{step.tagline}</p>
                <p className="step-desc">{step.desc}</p>
              </div>

              <div className="card-indicator" />
            </div>
          ))}
        </div>

        {/* Code Snippet */}
        <div className={`code-section ${isVisible ? 'visible' : ''}`}>
          <div className="code-header-bar">
            <div className="code-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="code-filename">PEAC-Receipt</span>
          </div>
          <pre className="code-block">
            <code>
              <span className="code-comment">{`// Cryptographic proof of interaction`}</span>{'\n'}
              <span className="code-key">PEAC-Receipt</span><span className="code-punct">:</span> <span className="code-string">eyJhbGciOiJFZDI1NTE5...</span>{'\n'}
              {'\n'}
              <span className="code-comment">{`// Decoded payload`}</span>{'\n'}
              <span className="code-punct">{`{`}</span>{'\n'}
              {'  '}<span className="code-key">&quot;v&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;0.9.23&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;iss&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;api.example.com&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;sub&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;agent:gpt-4-turbo&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;iat&quot;</span><span className="code-punct">:</span> <span className="code-number">1703894400</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;action&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;api.query&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;status&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;success&quot;</span>{'\n'}
              <span className="code-punct">{`}`}</span>
            </code>
          </pre>
        </div>

        {/* CTA */}
        <div className={`how-cta ${isVisible ? 'visible' : ''}`}>
          <Link href="/demo" className="cta-primary">
            See it in action
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
          <Link href="/developers" className="cta-secondary">
            Read the docs
          </Link>
        </div>

        {/* Footer Note */}
        <div className={`how-footer ${isVisible ? 'visible' : ''}`}>
          <div className="footer-badges">
            <span className="badge">Works with any payment rail</span>
            <span className="badge-sep" />
            <span className="badge">Protocol agnostic</span>
            <span className="badge-sep" />
            <span className="badge">Offline verification</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .how {
          position: relative;
          padding: 180px 0;
          background: #fafafa;
          overflow: hidden;
        }

        /* Background */
        .how-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 20% 0%, rgba(99, 91, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 30%, rgba(0, 209, 255, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0, 212, 170, 0.04) 0%, transparent 50%);
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%);
        }

        .how-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        /* Header - Theory VC inspired cascade */
        .how-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .how-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .label-wrapper {
          margin-bottom: 20px;
        }

        .how-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #6b6b6b;
          text-transform: uppercase;
        }

        .how-title {
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 600;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 0;
          line-height: 1.05;
        }

        /* Flowchart */
        .flowchart {
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }

        .flowchart.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .flow-svg {
          width: 100%;
          max-width: 900px;
          height: auto;
          margin: 0 auto;
          display: block;
        }

        /* Connection lines */
        .connection-line {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 1s ease;
        }

        .connection-line.active {
          stroke-dashoffset: 0;
        }

        /* Particles */
        .particle {
          opacity: 0;
        }

        .particle-1.active {
          animation: moveParticle1 2s ease-in-out infinite;
        }

        .particle-2.active {
          animation: moveParticle2 2s ease-in-out infinite;
        }

        .particle.p-0 { animation-delay: 0s; }
        .particle.p-1 { animation-delay: 0.2s; }
        .particle.p-2 { animation-delay: 0.4s; }
        .particle.p-3 { animation-delay: 0.6s; }
        .particle.p-4 { animation-delay: 0.8s; }

        @keyframes moveParticle1 {
          0% { transform: translate(200px, 150px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(450px, 150px); opacity: 0; }
        }

        @keyframes moveParticle2 {
          0% { transform: translate(450px, 150px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(700px, 150px); opacity: 0; }
        }

        /* Receipt packet */
        .receipt-packet {
          transform: translate(150px, 150px);
          opacity: 0;
        }

        .receipt-packet.traveling {
          animation: travelReceipt 7.5s ease-in-out infinite;
        }

        @keyframes travelReceipt {
          0%, 10% { transform: translate(150px, 150px); opacity: 1; }
          35%, 45% { transform: translate(450px, 150px); opacity: 1; }
          70%, 80% { transform: translate(750px, 150px); opacity: 1; }
          95%, 100% { transform: translate(750px, 150px); opacity: 0; }
        }

        /* Nodes */
        .node {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .node:hover {
          transform: scale(1.05);
        }

        .node-bg {
          transition: all 0.3s ease;
        }

        .node-border {
          transition: opacity 0.3s ease;
        }

        .node.active .node-border {
          opacity: 1;
        }

        .node.active .node-bg {
          filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
        }

        .icon-bg {
          transition: transform 0.3s ease;
        }

        .node.active .icon-bg {
          transform: scale(1.1);
        }

        /* Pulse rings */
        .pulse-ring {
          transform-origin: center;
        }

        .node.active .pulse-ring.ring-1 {
          animation: pulse 2s ease-out infinite;
        }

        .node.active .pulse-ring.ring-2 {
          animation: pulse 2s ease-out infinite 0.5s;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .node-label {
          font-size: 14px;
          font-weight: 600;
          fill: #525252;
        }

        /* Arrows */
        .arrow {
          opacity: 0.2;
          transition: opacity 0.3s ease;
        }

        .arrow.active {
          opacity: 1;
        }

        /* Step Cards */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 72px;
        }

        .step-card {
          position: relative;
          padding: 36px;
          background: #ffffff;
          border: 1px solid transparent;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(40px);
          overflow: hidden;
        }

        .step-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          transition-delay: var(--delay);
        }

        .step-card:hover,
        .step-card.active {
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, var(--accent) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .step-card:hover .card-glow,
        .step-card.active .card-glow {
          opacity: 0.04;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.5;
          letter-spacing: 0.05em;
        }

        .step-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 10px;
          color: #0a0a0a;
          transition: background 0.2s ease;
        }

        .step-card:hover .step-icon,
        .step-card.active .step-icon {
          background: #ebebeb;
        }

        .card-body {
          position: relative;
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
        }

        .step-tagline {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
          margin: 0 0 12px;
        }

        .step-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #525252;
          margin: 0;
        }

        .card-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .step-card.active .card-indicator {
          transform: scaleX(1);
        }

        /* Code Section */
        .code-section {
          max-width: 600px;
          margin: 0 auto 48px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 20px 50px -10px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s;
        }

        .code-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .code-header-bar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .code-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
        }

        .code-filename {
          flex: 1;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          font-family: var(--font-mono);
        }

        .code-block {
          padding: 20px;
          margin: 0;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.7;
          color: #e5e5e5;
          overflow-x: auto;
        }

        .code-comment { color: #6b7280; }
        .code-key { color: #93c5fd; }
        .code-string { color: #86efac; }
        .code-number { color: #fcd34d; }
        .code-punct { color: #9ca3af; }

        /* CTA */
        .how-cta {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s;
        }

        .how-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 600;
          color: white;
          background: #0a0a0a;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-primary:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 18px 36px;
          font-size: 15px;
          font-weight: 600;
          color: #0a0a0a;
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-secondary:hover {
          border-color: rgba(0, 0, 0, 0.3);
          background: rgba(0, 0, 0, 0.02);
          transform: translateY(-2px);
        }

        /* Footer */
        .how-footer {
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.85s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.85s;
        }

        .how-footer.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .badge {
          font-size: 14px;
          font-weight: 500;
          color: #737373;
        }

        .badge-sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #d4d4d4;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .how {
            padding: 140px 0;
          }

          .how-title {
            font-size: clamp(36px, 5vw, 48px);
          }

          .flow-svg {
            max-width: 700px;
          }

          .steps-grid {
            gap: 20px;
          }
        }

        @media (max-width: 900px) {
          .how {
            padding: 120px 0;
          }

          .how-container {
            padding: 0 20px;
          }

          .flowchart {
            display: none;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .step-card {
            padding: 24px;
          }

          .how-cta {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .footer-badges {
            flex-direction: column;
            gap: 12px;
          }

          .badge-sep {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .how {
            padding: 100px 0;
          }

          .how-header {
            margin-bottom: 40px;
          }

          .how-title {
            font-size: clamp(28px, 8vw, 36px);
          }

          .steps-grid {
            margin-bottom: 40px;
          }

          .step-card {
            padding: 20px;
          }

          .step-title {
            font-size: 18px;
          }

          .step-tagline {
            font-size: 13px;
          }

          .step-desc {
            font-size: 14px;
          }

          .code-section {
            margin-left: -20px;
            margin-right: -20px;
            margin-bottom: 40px;
            border-radius: 0;
          }

          .code-block {
            font-size: 11px;
            padding: 16px;
          }

          .how-cta {
            margin-bottom: 40px;
          }

          .cta-primary,
          .cta-secondary {
            padding: 14px 28px;
            font-size: 14px;
          }

          .badge {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .how {
            padding: 80px 0;
          }

          .how-container {
            padding: 0 16px;
          }

          .how-header {
            margin-bottom: 32px;
          }

          .how-label {
            font-size: 11px;
          }

          .how-title {
            font-size: 26px;
          }

          .step-card {
            padding: 18px;
          }

          .card-header {
            margin-bottom: 16px;
          }

          .step-icon {
            width: 36px;
            height: 36px;
          }

          .step-title {
            font-size: 17px;
          }

          .step-desc {
            font-size: 13px;
          }

          .code-section {
            margin-left: -16px;
            margin-right: -16px;
          }

          .code-block {
            font-size: 10px;
            padding: 14px;
          }

          .cta-primary,
          .cta-secondary {
            max-width: 100%;
            padding: 14px 24px;
          }

          .badge {
            font-size: 12px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .how-header,
          .flowchart,
          .step-card,
          .code-section,
          .how-cta,
          .how-footer,
          .connection-line,
          .particle,
          .receipt-packet,
          .node,
          .pulse-ring,
          .step-icon,
          .card-indicator {
            transition: none;
            animation: none;
          }

          .how-header,
          .flowchart,
          .step-card,
          .code-section,
          .how-cta,
          .how-footer {
            opacity: 1;
            transform: none;
          }

          .connection-line {
            stroke-dashoffset: 0;
          }

          .receipt-packet {
            opacity: 1;
          }

          .step-card:hover,
          .step-card.active,
          .node:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
