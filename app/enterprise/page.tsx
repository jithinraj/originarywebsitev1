import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, Shield, Key, Server, FileCheck, Lock, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise | Originary',
  description: 'Evaluate Originary for enterprise agent, API, MCP, and automated workflows with self-hosted, hybrid, and managed deployment options.',
  robots: 'index,follow',
  alternates: { canonical: '/enterprise' },
  openGraph: {
    title: 'Enterprise | Originary',
    description: 'Evaluate Originary for enterprise agent, API, MCP, and automated workflows with self-hosted, hybrid, and managed deployment options.',
    url: '/enterprise',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise | Originary',
    description: 'Evaluate Originary for enterprise agent, API, MCP, and automated workflows with self-hosted, hybrid, and managed deployment options.',
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
              Enterprise deployment for signed records
            </h1>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-10)',
              maxWidth: '600px',
              margin: '0 auto var(--space-10) auto',
            }}>
              Deploy Originary for agent, API, MCP, and automated workflows with self-hosted, hybrid, or managed options designed for review, procurement, and high-trust operations.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/products/verify" className="btn btn-primary btn-lg">
                Originary Verify
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Talk to us
              </Link>
              <Link href="/trust" className="btn btn-secondary btn-lg">
                Trust Center
              </Link>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
              Who this is for
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--space-10)', maxWidth: '560px', margin: '0 auto var(--space-10) auto' }}>
              Teams that need signed records to survive audits, disputes, partner review, and cross-boundary automated workflows.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 'var(--space-5)' }}>
              {[
                {
                  label: 'Enterprise AI platform teams',
                  detail: 'Give agent-driven actions a signed record that can be reviewed outside the runtime and verified without a callback to a vendor service.',
                },
                {
                  label: 'API operators and tool publishers',
                  detail: 'Return a signed record on important responses so another party can verify what was authorized, under what terms, and when.',
                },
                {
                  label: 'Security and compliance teams',
                  detail: 'Export records for audit, review, disputes, and procurement without relying on screenshots or internal dashboards.',
                },
                {
                  label: 'Governed runtime operators',
                  detail: 'Use signed records to carry runtime decisions, tool actions, and cross-boundary interactions into review workflows that outlive the original system.',
                },
              ].map((item) => (
                <div key={item.label} style={{
                  background: 'var(--glass-card-bg)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                }}>
                  <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)' }}>{item.label}</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.detail}</p>
                </div>
              ))}
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

        {/* Data boundary table */}
        <section className="section" style={{ background: 'var(--surface-elevated)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                What Leaves Your Environment?
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                Verification never depends on Originary being online.
              </p>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-default)' }}>
                    <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--text-tertiary)', fontWeight: 600 }}>Data</th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 700 }}>Self-hosted</th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 700 }}>Managed keys</th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 700 }}>Full managed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Signing keys', 'Stays local', 'Managed by Originary', 'Managed by Originary'],
                    ['Policy files', 'Stays local', 'Stays local', 'Originary hosts'],
                    ['Request payloads', 'Never collected', 'Never collected', 'Never collected'],
                    ['Signed records', 'Stays local', 'Stays local', 'Originary stores'],
                    ['Verification', 'Local, offline', 'Local, offline', 'Local, offline'],
                    ['Network calls to Originary', 'None', 'Key lifecycle only', 'Record storage only'],
                  ].map(([data, self, managed, full], idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: 'var(--space-3)', color: 'var(--text-secondary)', fontWeight: 500 }}>{data}</td>
                      <td style={{ padding: 'var(--space-3)', textAlign: 'center', color: 'var(--text-secondary)' }}>{self}</td>
                      <td style={{ padding: 'var(--space-3)', textAlign: 'center', color: 'var(--text-secondary)' }}>{managed}</td>
                      <td style={{ padding: 'var(--space-3)', textAlign: 'center', color: 'var(--text-secondary)' }}>{full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How evaluation usually starts */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
              How evaluation usually starts
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Start with a technical review, architecture walkthrough, or pilot scope. Teams usually begin with one workflow where signed records help with review, disputes, audit export, or cross-boundary verification.
            </p>
          </div>
        </section>

        {/* Procurement CTAs */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-8)' }}>
              Ready to Evaluate?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 'var(--space-4)' }}>
              {[
                { label: 'Book a technical review', href: '/contact?subject=Technical%20Review' },
                { label: 'Request architecture walkthrough', href: '/contact?subject=Architecture%20Walkthrough' },
                { label: 'Discuss pilot scope', href: '/contact?subject=Pilot%20Scope' },
              ].map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
                    padding: 'var(--space-4)', background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-brand)',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                  }}
                >
                  {cta.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
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
