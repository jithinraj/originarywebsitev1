import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, FileText, BookOpen, Shield, AlertTriangle, Target, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research | Originary',
  description: 'PEAC protocol research and technical specifications. Problem framing, design goals, threat model, and academic references.',
  alternates: {
    canonical: '/research'
  },
  openGraph: {
    title: 'Research | Originary',
    description: 'PEAC protocol research and technical specifications. Problem framing, design goals, threat model, and academic references.',
    url: 'https://www.originary.xyz/research',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  robots: 'index,follow',
}

export default function ResearchPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--space-6)' }}>

          <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-5)',
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--brand-primary)'
            }}>
              <BookOpen size={16} />
              <span>RESEARCH</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              PEAC Protocol
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)',
              lineHeight: 1.7
            }}>
              Policy, Evidence, Attribution, and Consent - an open standard for verifiable agent interactions.
            </p>
          </div>

          {/* Abstract */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '2px solid var(--brand-primary)',
            borderRadius: 'var(--radius-2xl)',
            background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.03) 0%, rgba(0, 212, 170, 0.03) 100%)',
            marginBottom: 'var(--space-8)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <FileText size={20} style={{ color: 'var(--brand-primary)' }} />
              Abstract
            </h2>
            <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, fontSize: 'var(--text-base)' }}>
              PEAC (Policy, Evidence, Attribution, Consent) is a protocol for publishing interaction terms and issuing cryptographically verifiable receipts as durable evidence of what occurred under those terms. The protocol enables API providers to declare policies via discoverable policy files, issue signed receipts for each interaction, and support offline verification without centralized infrastructure. PEAC is designed for the agentic web - where autonomous software agents interact with APIs on behalf of users and organizations - requiring verifiable records of policy compliance, consent, attribution, and optional settlement.
            </p>
          </div>

          {/* Problem Framing */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-6)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <Target size={20} style={{ color: 'var(--brand-secondary)' }} />
              Problem Framing
            </h2>
            <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
              Current web infrastructure lacks a standardized mechanism for:
            </p>
            <ul style={{ color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Policy discovery:</strong> No standard way for agents to discover what terms apply before accessing a resource</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Verifiable evidence:</strong> No portable proof of what occurred during an interaction that survives beyond the session</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Attribution binding:</strong> No cryptographic link between a resource access and the principal that authorized it</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Consent signals:</strong> No machine-readable consent records for AI training, scraping, or commercial use</li>
              <li><strong>Rail-neutral settlement:</strong> HTTP 402 exists but lacks a standardized payload and verification mechanism</li>
            </ul>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: 'var(--text-sm)' }}>
              These gaps become critical as autonomous agents increasingly access APIs on behalf of users, enterprises, and other agents - requiring verifiable audit trails.
            </p>
          </div>

          {/* Design Goals */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-6)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Design Goals
            </h2>
            <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--brand-primary)', fontWeight: 600, minWidth: '24px' }}>1.</span>
                <div>
                  <strong style={{ color: 'var(--gray-900)' }}>Decentralized verification</strong>
                  <p style={{ color: 'var(--gray-600)', margin: 'var(--space-1) 0 0 0', fontSize: 'var(--text-sm)' }}>Receipts verify offline using JWKS. No central authority required.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--brand-primary)', fontWeight: 600, minWidth: '24px' }}>2.</span>
                <div>
                  <strong style={{ color: 'var(--gray-900)' }}>Rail-neutral</strong>
                  <p style={{ color: 'var(--gray-600)', margin: 'var(--space-1) 0 0 0', fontSize: 'var(--text-sm)' }}>Settlement is optional and adapter-based. PEAC works with any payment rail or none.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--brand-primary)', fontWeight: 600, minWidth: '24px' }}>3.</span>
                <div>
                  <strong style={{ color: 'var(--gray-900)' }}>Privacy-preserving</strong>
                  <p style={{ color: 'var(--gray-600)', margin: 'var(--space-1) 0 0 0', fontSize: 'var(--text-sm)' }}>Identity can be pseudonymous. Receipts contain only what the issuer chooses to include.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--brand-primary)', fontWeight: 600, minWidth: '24px' }}>4.</span>
                <div>
                  <strong style={{ color: 'var(--gray-900)' }}>HTTP-native</strong>
                  <p style={{ color: 'var(--gray-600)', margin: 'var(--space-1) 0 0 0', fontSize: 'var(--text-sm)' }}>Uses standard HTTP headers and status codes. No special transport required.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--brand-primary)', fontWeight: 600, minWidth: '24px' }}>5.</span>
                <div>
                  <strong style={{ color: 'var(--gray-900)' }}>Multiple implementations</strong>
                  <p style={{ color: 'var(--gray-600)', margin: 'var(--space-1) 0 0 0', fontSize: 'var(--text-sm)' }}>Designed for independent implementations. No single vendor has privileged status.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Model */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-6)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <Shield size={20} style={{ color: 'var(--brand-accent)' }} />
              Threat Model
            </h2>
            <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
              PEAC assumes the following adversarial conditions:
            </p>
            <ul style={{ color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Receipt forgery:</strong> Mitigated by Ed25519 signatures with issuer-controlled key rotation</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Replay attacks:</strong> Mitigated by unique receipt IDs (jti) and timestamp validation (iat/exp)</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Key compromise:</strong> Mitigated by JWKS key rotation and short-lived receipts</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Policy tampering:</strong> Receipts bind to policy hash at issuance time; changes don't affect issued receipts</li>
              <li><strong>Denial of evidence:</strong> Receipts are portable and can be stored by any party for later verification</li>
            </ul>
          </div>

          {/* Limitations */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '1px solid rgba(255, 107, 53, 0.3)',
            borderRadius: 'var(--radius-2xl)',
            background: 'rgba(255, 107, 53, 0.03)',
            marginBottom: 'var(--space-6)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <AlertTriangle size={20} style={{ color: 'var(--brand-accent)' }} />
              Limitations
            </h2>
            <ul style={{ color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>PEAC does not enforce policy compliance - it provides evidence of what the issuer claims occurred</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Receipt content is issuer-controlled; verifiers trust the issuer's representation</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Network-level attacks (MITM) require TLS; PEAC operates at the application layer</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Long-term key compromise invalidates receipts signed with that key (standard PKI limitation)</li>
              <li>Dispute resolution is out of scope; PEAC provides evidence, not adjudication</li>
            </ul>
          </div>

          {/* Evaluation */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-8)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Evaluation Plan
            </h2>
            <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
              PEAC is currently at version 0.9.x (preview). Evaluation milestones before 1.0:
            </p>
            <ul style={{ color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Multiple implementations:</strong> At least two independent, conformant implementations</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Production deployment:</strong> Real-world usage across multiple API providers</li>
              <li style={{ marginBottom: 'var(--space-2)' }}><strong>Security audit:</strong> Independent security review of cryptographic components</li>
              <li><strong>Interoperability testing:</strong> Cross-implementation conformance validation</li>
            </ul>
          </div>

          {/* Citation */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-8)'
          }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <Quote size={20} style={{ color: 'var(--brand-primary)' }} />
              How to Cite
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>
              If you reference PEAC in academic work, please use:
            </p>
            <div style={{
              background: 'var(--gray-900)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-4)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--gray-300)',
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6
            }}>
{`@misc{peac2024,
  title   = {PEAC: Policy, Evidence, Attribution, and Consent
             for Verifiable Agent Interactions},
  author  = {PEAC Protocol Contributors},
  year    = {2024},
  url     = {https://github.com/peacprotocol/peac},
  note    = {Open standard, Apache-2.0 license}
}`}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-20)'
          }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Read the specification
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', maxWidth: '400px', margin: '0 auto var(--space-6)' }}>
              Full protocol specification, test vectors, and reference implementation on GitHub.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
              >
                <span>View specification</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/conformance"
                className="btn btn-secondary btn-lg"
              >
                Conformance suite
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
