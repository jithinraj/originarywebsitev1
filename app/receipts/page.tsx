'use client'

import { useState, useEffect } from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Shield, FileText, CheckCircle, Lock, Clock, Key, Zap, Database, Globe, Eye, Fingerprint } from 'lucide-react'

export default function ReceiptsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 8)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Lock size={24} />,
      title: 'Signature-Verified',
      description: 'JWS payloads with Ed25519 signatures. Tamper-evident by design.',
      color: '#635BFF'
    },
    {
      icon: <FileText size={24} />,
      title: 'Policy Binding',
      description: 'Each receipt binds to a specific policy version via SHA-256 hash.',
      color: '#00D4AA'
    },
    {
      icon: <Key size={24} />,
      title: 'Offline Verification',
      description: 'Verify against published JWKS endpoints. No API call required.',
      color: '#FF6B6B'
    },
    {
      icon: <Clock size={24} />,
      title: 'Timestamped',
      description: 'Precise iat/exp claims establish when interactions occurred.',
      color: '#4ECDC4'
    },
    {
      icon: <Database size={24} />,
      title: 'Payment Evidence',
      description: 'Transaction references and payment rail details included.',
      color: '#9B59B6'
    },
    {
      icon: <Shield size={24} />,
      title: 'Audit Ready',
      description: 'Export logs in standard formats for internal review.',
      color: '#F39C12'
    },
    {
      icon: <Eye size={24} />,
      title: 'Privacy Modes',
      description: 'Strict, balanced, or custom identifier handling for compliance.',
      color: '#10B981'
    },
    {
      icon: <Fingerprint size={24} />,
      title: 'Attestations',
      description: 'Extensible evidence types for risk, consent, and compliance.',
      color: '#8B5CF6'
    }
  ]

  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" className="receipts-main">
        {/* Hero Section */}
        <section className="receipts-hero">
          <div className="receipts-hero-bg" />
          <div className="receipts-hero-grid" />

          <div className="container receipts-hero-content">
            <div className="receipts-hero-text">
              <div
                className="receipts-badge"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <span className="receipts-badge-dot" />
                PEAC-RECEIPTS
              </div>

              <h1
                className="receipts-headline"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                }}
              >
                Originary Receipts:
                <span className="receipts-headline-gradient"> verifiable records for every AI interaction</span>
              </h1>

              <p
                className="receipts-subhead"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}
              >
                Originary generates tamper-evident proofs of policy, consent, attribution, and payment events.
                Audit usage, resolve disputes, and demonstrate compliance with verifiable evidence.
              </p>

              <div
                className="receipts-cta-row"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                }}
              >
                <Link href="/developers" className="btn btn-primary btn-lg receipts-cta-primary">
                  <span>Start Building</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/demo" className="btn btn-secondary btn-lg">
                  View Demo
                </Link>
              </div>

              <div
                className="receipts-trust-row"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}
              >
                <span>Ed25519 signatures</span>
                <span className="receipts-trust-dot" />
                <span>JWKS verification</span>
                <span className="receipts-trust-dot" />
                <span>Open standard</span>
              </div>
            </div>

            <div
              className="receipts-hero-visual"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              <ReceiptVisual />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="receipts-features">
          <div className="container">
            <div className="receipts-section-header">
              <h2 className="receipts-section-title">What receipts provide</h2>
              <p className="receipts-section-subtitle">
                Signed records for every interaction, verifiable against published public keys.
              </p>
            </div>

            <div className="receipts-features-grid">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`receipts-feature-card ${activeFeature === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}
                  style={{
                    '--feature-color': feature.color
                  } as React.CSSProperties}
                >
                  <div className="receipts-feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="receipts-feature-title">{feature.title}</h3>
                  <p className="receipts-feature-desc">{feature.description}</p>
                  <div className="receipts-feature-glow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Receipt Structure */}
        <section className="receipts-structure">
          <div className="container">
            <div className="receipts-structure-layout">
              <div className="receipts-structure-info">
                <h2 className="receipts-section-title">Receipt anatomy</h2>
                <p className="receipts-section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                  Each PEAC-Receipt is a signed JWS payload containing interaction metadata, policy bindings, and optional payment evidence.
                </p>

                <div className="receipts-anatomy-list">
                  <div className="receipts-anatomy-item">
                    <div className="receipts-anatomy-marker" style={{ background: '#635BFF' }} />
                    <div>
                      <strong>Header</strong>
                      <span>Algorithm, type, and key identifier</span>
                    </div>
                  </div>
                  <div className="receipts-anatomy-item">
                    <div className="receipts-anatomy-marker" style={{ background: '#00D4AA' }} />
                    <div>
                      <strong>Claims</strong>
                      <span>Issuer, subject, audience, timestamps</span>
                    </div>
                  </div>
                  <div className="receipts-anatomy-item">
                    <div className="receipts-anatomy-marker" style={{ background: '#FF6B6B' }} />
                    <div>
                      <strong>PEAC payload</strong>
                      <span>Version, resource, policy hash, AIPREF snapshot</span>
                    </div>
                  </div>
                  <div className="receipts-anatomy-item">
                    <div className="receipts-anatomy-marker" style={{ background: '#F39C12' }} />
                    <div>
                      <strong>Payment (optional)</strong>
                      <span>Rail, amount, currency, transaction reference</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="receipts-code-container">
                <div className="receipts-code-header">
                  <div className="receipts-code-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="receipts-code-filename">receipt.json</span>
                  <span className="receipts-code-badge">peac-receipt/0.1</span>
                </div>
                <pre className="receipts-code-body">
                  <code>{`{
  `}<span className="code-key">{`"header"`}</span>{`: {
    `}<span className="code-key">{`"alg"`}</span>{`: `}<span className="code-string">{`"EdDSA"`}</span>{`,
    `}<span className="code-key">{`"typ"`}</span>{`: `}<span className="code-string">{`"peac-receipt/0.1"`}</span>{`,
    `}<span className="code-key">{`"kid"`}</span>{`: `}<span className="code-string">{`"originary-2025-01"`}</span>{`
  },
  `}<span className="code-key">{`"payload"`}</span>{`: {
    `}<span className="code-key">{`"iss"`}</span>{`: `}<span className="code-string">{`"https://originary.xyz"`}</span>{`,
    `}<span className="code-key">{`"iat"`}</span>{`: `}<span className="code-number">{`1734048000`}</span>{`,
    `}<span className="code-key">{`"jti"`}</span>{`: `}<span className="code-string">{`"rcpt_7f92ab31"`}</span>{`,
    `}<span className="code-key">{`"peac"`}</span>{`: {
      `}<span className="code-key">{`"version"`}</span>{`: `}<span className="code-string">{`"0.10.0"`}</span>{`,
      `}<span className="code-key">{`"resource"`}</span>{`: `}<span className="code-string">{`"/api/content"`}</span>{`,
      `}<span className="code-key">{`"policy_hash"`}</span>{`: `}<span className="code-string">{`"sha256:9f3c..."`}</span>{`
    },
    `}<span className="code-key">{`"payment"`}</span>{`: {
      `}<span className="code-key">{`"rail"`}</span>{`: `}<span className="code-string">{`"x402"`}</span>{`,
      `}<span className="code-key">{`"amount"`}</span>{`: `}<span className="code-string">{`"0.10"`}</span>{`
    }
  },
  `}<span className="code-key">{`"signature"`}</span>{`: `}<span className="code-string">{`"base64url..."`}</span>{`
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="receipts-usecases">
          <div className="container">
            <div className="receipts-section-header">
              <h2 className="receipts-section-title">Built for real workflows</h2>
              <p className="receipts-section-subtitle">
                From internal audits to dispute resolution, receipts provide the evidence trail you need.
              </p>
            </div>

            <div className="receipts-usecases-grid">
              {[
                { title: 'Internal Audits', desc: 'Detailed records of AI interactions for governance and risk management.' },
                { title: 'Content Licensing', desc: 'Verify content was accessed according to licensing terms.' },
                { title: 'Dispute Resolution', desc: 'Verifiable evidence when disputes arise about terms.' },
                { title: 'Usage Analytics', desc: 'Track AI access patterns with verifiable records.' },
                { title: 'Payment Reconciliation', desc: 'Match payments to specific API interactions.' },
                { title: 'Policy Compliance', desc: 'Demonstrate interactions occurred under specific policies.' }
              ].map((usecase) => (
                <div key={usecase.title} className="receipts-usecase-card">
                  <CheckCircle size={20} className="receipts-usecase-icon" />
                  <h3 className="receipts-usecase-title">{usecase.title}</h3>
                  <p className="receipts-usecase-desc">{usecase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Flow */}
        <section className="receipts-flow">
          <div className="container">
            <div className="receipts-section-header">
              <h2 className="receipts-section-title">Verification in 3 steps</h2>
              <p className="receipts-section-subtitle">
                Verify any receipt against published keys, no API required.
              </p>
            </div>

            <div className="receipts-flow-steps">
              <div className="receipts-flow-step">
                <div className="receipts-flow-number">1</div>
                <h3>Extract header</h3>
                <p>Parse the JWS header to get the key ID (kid)</p>
              </div>
              <div className="receipts-flow-connector" />
              <div className="receipts-flow-step">
                <div className="receipts-flow-number">2</div>
                <h3>Fetch public key</h3>
                <p>Retrieve the key from /.well-known/jwks.json</p>
              </div>
              <div className="receipts-flow-connector" />
              <div className="receipts-flow-step">
                <div className="receipts-flow-number">3</div>
                <h3>Verify signature</h3>
                <p>Validate Ed25519 signature against payload</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="receipts-disclaimer">
          <div className="container">
            <div className="receipts-disclaimer-box">
              <Globe size={20} />
              <div>
                <strong>A note on legal interpretation</strong>
                <p>
                  PEAC-Receipts provide signed evidence of interactions and policy snapshots.
                  How this evidence is interpreted in legal or regulatory contexts depends on jurisdiction
                  and specific circumstances. Consult legal counsel for compliance guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="receipts-cta">
          <div className="container">
            <div className="cta-card receipts-cta-card">
              <div className="receipts-cta-glow" />
              <h2>Ready to add Originary Receipts?</h2>
              <p>Start generating verifiable records for every AI interaction with Originary.</p>
              <div className="receipts-cta-buttons">
                <Link href="/developers" className="btn btn-lg btn-primary">
                  <span>Start Building</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="mailto:contact@originary.xyz" className="btn btn-lg btn-secondary">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .receipts-main {
          padding-top: 80px;
        }

        /* Hero */
        .receipts-hero {
          position: relative;
          padding: clamp(60px, 10vh, 120px) 0;
          overflow: hidden;
        }

        .receipts-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-elevated) 100%);
          z-index: 0;
        }

        .receipts-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--accent-brand-faint) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-brand-faint) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        .receipts-hero-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .receipts-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: var(--accent-brand-subtle);
          border: 1px solid var(--accent-brand-muted);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent-brand);
          margin-bottom: var(--space-6);
        }

        .receipts-badge-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-brand);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .receipts-headline {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: var(--space-6);
        }

        .receipts-headline-gradient {
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .receipts-subhead {
          font-size: var(--text-lg);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--space-8);
          max-width: 500px;
        }

        .receipts-cta-row {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-8);
        }

        .receipts-trust-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: 12px;
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .receipts-trust-dot {
          width: 3px;
          height: 3px;
          background: var(--border-default);
          border-radius: 50%;
        }

        .receipts-hero-visual {
          display: flex;
          justify-content: center;
        }

        /* Features */
        .receipts-features {
          padding: clamp(60px, 10vh, 100px) 0;
          background: var(--surface-elevated);
        }

        .receipts-section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .receipts-section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-4);
          letter-spacing: -0.02em;
        }

        .receipts-section-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .receipts-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .receipts-feature-card {
          position: relative;
          padding: var(--space-8);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .receipts-feature-card:hover,
        .receipts-feature-card.active {
          border-color: var(--feature-color);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .receipts-feature-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--feature-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .receipts-feature-card:hover .receipts-feature-glow,
        .receipts-feature-card.active .receipts-feature-glow {
          transform: scaleX(1);
        }

        .receipts-feature-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .receipts-feature-title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .receipts-feature-desc {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Structure */
        .receipts-structure {
          padding: clamp(60px, 10vh, 100px) 0;
          background: var(--surface-subtle);
        }

        .receipts-structure-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--space-12);
          align-items: start;
        }

        .receipts-anatomy-list {
          margin-top: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .receipts-anatomy-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .receipts-anatomy-marker {
          width: 4px;
          height: 40px;
          border-radius: 2px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .receipts-anatomy-item div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .receipts-anatomy-item strong {
          font-size: var(--text-base);
          color: var(--text-primary);
        }

        .receipts-anatomy-item span {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .receipts-code-container {
          background: #0D0D0D;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .receipts-code-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4) var(--space-5);
          background: #1A1A1A;
          border-bottom: 1px solid #2A2A2A;
        }

        .receipts-code-dots {
          display: flex;
          gap: 6px;
        }

        .receipts-code-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .receipts-code-dots .red { background: #FF5F57; }
        .receipts-code-dots .yellow { background: #FFBD2E; }
        .receipts-code-dots .green { background: #28CA42; }

        .receipts-code-filename {
          flex: 1;
          font-size: 12px;
          color: #666;
          font-family: var(--font-mono);
        }

        .receipts-code-badge {
          font-size: 10px;
          padding: 3px 8px;
          background: var(--accent-brand-muted);
          color: #635BFF;
          border-radius: 4px;
          font-weight: 600;
        }

        .receipts-code-body {
          padding: var(--space-6);
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: #E0E0E0;
          overflow-x: auto;
        }

        .receipts-code-body :global(.code-key) { color: #7C75FF; }
        .receipts-code-body :global(.code-string) { color: #22C55E; }
        .receipts-code-body :global(.code-number) { color: #F59E0B; }

        /* Use Cases */
        .receipts-usecases {
          padding: clamp(60px, 10vh, 100px) 0;
          background: var(--surface-elevated);
        }

        .receipts-usecases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
        }

        .receipts-usecase-card {
          padding: var(--space-6);
          background: var(--surface-subtle);
          border-radius: var(--radius-xl);
          transition: all 0.2s ease;
        }

        .receipts-usecase-card:hover {
          background: var(--surface-elevated);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .receipts-usecase-icon {
          color: var(--accent-brand);
          margin-bottom: var(--space-3);
        }

        .receipts-usecase-title {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .receipts-usecase-desc {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Flow */
        .receipts-flow {
          padding: clamp(60px, 10vh, 100px) 0;
          background: var(--surface-subtle);
        }

        .receipts-flow-steps {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: var(--space-4);
          max-width: 900px;
          margin: 0 auto;
        }

        .receipts-flow-step {
          flex: 1;
          text-align: center;
          max-width: 240px;
        }

        .receipts-flow-number {
          width: 48px;
          height: 48px;
          background: var(--accent-brand);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-lg);
          font-weight: 700;
          margin: 0 auto var(--space-4);
        }

        .receipts-flow-step h3 {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .receipts-flow-step p {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .receipts-flow-connector {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-brand), var(--accent-secondary));
          margin-top: 24px;
          flex-shrink: 0;
        }

        /* Disclaimer */
        .receipts-disclaimer {
          padding: var(--space-12) 0;
          background: var(--surface-elevated);
        }

        .receipts-disclaimer-box {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          background: var(--surface-subtle);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .receipts-disclaimer-box svg {
          flex-shrink: 0;
          color: var(--text-muted);
        }

        .receipts-disclaimer-box strong {
          display: block;
          font-size: var(--text-sm);
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .receipts-disclaimer-box p {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        /* CTA */
        .receipts-cta {
          padding: clamp(60px, 10vh, 100px) 0;
          background: var(--surface-elevated);
        }

        .receipts-cta-card {
          position: relative;
        }

        .receipts-cta-glow {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .receipts-cta-buttons {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          position: relative;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .receipts-hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .receipts-hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .receipts-subhead {
            max-width: 100%;
          }
          .receipts-cta-row {
            justify-content: center;
          }
          .receipts-trust-row {
            justify-content: center;
          }
          .receipts-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4);
          }
          .receipts-structure-layout {
            grid-template-columns: 1fr;
          }
          .receipts-usecases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .receipts-features-grid {
            grid-template-columns: 1fr;
          }
          .receipts-usecases-grid {
            grid-template-columns: 1fr;
          }
          .receipts-flow-steps {
            flex-direction: column;
            align-items: center;
          }
          .receipts-flow-connector {
            width: 2px;
            height: 30px;
            margin: 0;
          }
          .receipts-cta-row {
            flex-direction: column;
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .receipts-badge-dot {
            animation: none;
          }
          .receipts-feature-card,
          .receipts-usecase-card {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}

function ReceiptVisual() {
  return (
    <div className="receipt-visual">
      <div className="receipt-card">
        <div className="receipt-header">
          <div className="receipt-icon">
            <Zap size={20} />
          </div>
          <div className="receipt-meta">
            <span className="receipt-label">PEAC-Receipt</span>
            <span className="receipt-id">rcpt_7f92ab31</span>
          </div>
          <div className="receipt-status">
            <CheckCircle size={16} />
            Verified
          </div>
        </div>

        <div className="receipt-body">
          <div className="receipt-row">
            <span className="receipt-key">Resource</span>
            <span className="receipt-value">/api/content</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-key">Policy</span>
            <span className="receipt-value receipt-hash">sha256:9f3c...c2ab</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-key">Payment</span>
            <span className="receipt-value receipt-payment">$0.10 via x402</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-key">Timestamp</span>
            <span className="receipt-value">2026-01-02T12:00:00Z</span>
          </div>
        </div>

        <div className="receipt-footer">
          <div className="receipt-sig">
            <Lock size={12} />
            <span>Ed25519 signature verified</span>
          </div>
        </div>

        <div className="receipt-glow" />
      </div>

      <style jsx>{`
        .receipt-visual {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .receipt-card {
          position: relative;
          background: white;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 20px 40px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .receipt-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 30%, var(--accent-brand-subtle) 0%, transparent 50%);
          pointer-events: none;
        }

        .receipt-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: var(--space-4);
          position: relative;
        }

        .receipt-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--accent-brand), var(--accent-secondary));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .receipt-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .receipt-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .receipt-id {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .receipt-status {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 600;
          color: #22C55E;
          padding: 4px 10px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: var(--radius-full);
        }

        .receipt-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          position: relative;
        }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .receipt-key {
          font-size: 13px;
          color: var(--text-tertiary);
        }

        .receipt-value {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .receipt-hash {
          color: var(--accent-brand);
        }

        .receipt-payment {
          color: #22C55E;
        }

        .receipt-footer {
          margin-top: var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px solid var(--border-subtle);
          position: relative;
        }

        .receipt-sig {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--text-tertiary);
        }

        .receipt-sig svg {
          color: var(--accent-brand);
        }
      `}</style>
    </div>
  )
}
