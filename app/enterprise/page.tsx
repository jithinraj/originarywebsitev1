import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, Shield, Key, Server, FileCheck, Lock, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'Enterprise deployment guide for Originary. Self-hosted verification, key management, compliance evidence, and deployment options.',
  robots: 'index,follow',
  alternates: { canonical: '/enterprise' },
  openGraph: {
    title: 'Enterprise | Originary',
    description: 'Enterprise deployment guide for Originary. Self-hosted verification, key management, and compliance evidence.',
    url: '/enterprise',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise | Originary',
    description: 'Enterprise deployment guide for Originary. Self-hosted verification, key management, and compliance evidence.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const deploymentOptions = [
  {
    name: 'Self-hosted',
    description: 'Run the full stack in your own infrastructure. All signing keys, policy, and records stay in your environment.',
    icon: <Server size={20} />,
    features: ['Your keys, your infrastructure', 'No data leaves your environment', 'Apache-2.0, no CLA', 'Full source access'],
  },
  {
    name: 'Managed keys',
    description: 'Originary manages key lifecycle, rotation, and attestation. You control policy and deployment.',
    icon: <Key size={20} />,
    features: ['Key generation and rotation', 'Hardware-backed attestation', 'Policy stays with you', 'Support SLA included'],
  },
  {
    name: 'Full managed',
    description: 'Originary operates the verification layer. You integrate via SDK or gateway.',
    icon: <Shield size={20} />,
    features: ['Deployment and operations', 'Monitoring and alerting', 'Compliance evidence bundles', 'Dedicated support'],
  },
]

const securityPoints = [
  { label: 'Signing', detail: 'Ed25519 (RFC 8032). Keys generated locally or via managed HSM.' },
  { label: 'Verification', detail: 'Offline via JWKS public keys. No callback to Originary or any vendor.' },
  { label: 'Key management', detail: '5-state rotation lifecycle. 30-day overlap. Revocation support.' },
  { label: 'Data boundary', detail: 'Records contain policy hash and decision, not raw request payloads.' },
  { label: 'Transport', detail: 'Compact JWS (RFC 7515). Fits in HTTP headers, MCP metadata, A2A envelopes.' },
  { label: 'Network', detail: 'No implicit fetch. No SSRF. URL fields are locator hints only.' },
]

const compliancePoints = [
  'Verifiable evidence of what was accessed, under what terms, and what decision was made',
  'Records are portable: export to any audit, dispute, or partner workflow',
  'Policy binding: records reference the exact policy version in force at decision time',
  'Third-party verifiable: any party with the public key can check the signature',
  'No vendor dependency for verification: works offline, no phone-home',
]

export default function EnterprisePage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)',
            }}>
              Enterprise Deployment
            </h1>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-10)',
              maxWidth: '600px',
              margin: '0 auto var(--space-10) auto',
            }}>
              Self-hosted verification, managed key infrastructure, and compliance evidence for teams that need to prove what agents did.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Talk to us
                <ArrowRight size={18} />
              </Link>
              <Link href="/trust" className="btn btn-secondary btn-lg">
                Trust Center
              </Link>
            </div>
          </div>
        </section>

        {/* Deployment options */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-10)', color: 'var(--text-primary)' }}>
              Deployment Options
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'var(--space-6)' }}>
              {deploymentOptions.map((opt) => (
                <div key={opt.name} style={{
                  background: 'var(--glass-card-bg)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
                      background: 'var(--accent-brand-subtle)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', color: 'var(--accent-brand)',
                    }}>
                      {opt.icon}
                    </div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)' }}>{opt.name}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                    {opt.description}
                  </p>
                  <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 2, paddingLeft: 'var(--space-5)', margin: 0 }}>
                    {opt.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security model */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <Lock size={28} style={{ color: 'var(--accent-brand)', margin: '0 auto var(--space-4) auto' }} />
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Security Model
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                What stays in your environment, what travels, and how verification works.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
              {securityPoints.map((pt) => (
                <div key={pt.label} style={{
                  background: 'var(--glass-card-bg)', border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
                  display: 'flex', gap: 'var(--space-4)', alignItems: 'baseline',
                }}>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-brand)', minWidth: '120px' }}>{pt.label}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{pt.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance evidence */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <FileCheck size={28} style={{ color: 'var(--accent-brand)', margin: '0 auto var(--space-4) auto' }} />
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Compliance and Procurement Evidence
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                How verifiable interaction records help in audits, disputes, and procurement review.
              </p>
            </div>
            <div style={{
              background: 'var(--glass-card-bg)', border: '1px solid var(--glass-card-border)',
              borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
            }}>
              <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-5)', margin: 0 }}>
                {compliancePoints.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <Link href="/contact" className="btn btn-primary">
                Discuss enterprise deployment
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
              Example: Agent Access Audit
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              An agent calls your booking API. Three months later, a partner disputes the transaction.
            </p>
            <div style={{
              background: 'var(--glass-card-bg)', border: '1px solid var(--glass-card-border)',
              borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
            }}>
              <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                {[
                  { step: '1', title: 'At request time', detail: 'Originary evaluates the agent request, applies the booking policy, and returns a signed interaction record with the decision, policy hash, and timestamp.' },
                  { step: '2', title: 'Record is stored', detail: 'The signed record is stored by both parties. It is portable: no vendor lock-in, no proprietary format.' },
                  { step: '3', title: 'Dispute arises', detail: 'The partner retrieves the record and verifies the Ed25519 signature using your published JWKS. No callback to Originary. No network required.' },
                  { step: '4', title: 'Evidence holds', detail: 'The record proves: who acted, what policy applied, what decision was made, and when. The policy hash confirms the terms were not changed after the fact.' },
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                      background: 'var(--accent-brand-subtle)', color: 'var(--accent-brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 'var(--text-xs)', fontWeight: 700,
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>{item.title}</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
