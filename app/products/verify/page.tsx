import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import Breadcrumb from '@/components/Breadcrumb'
import { ArrowRight, CheckCircle, Shield, Server, Key, FileCheck, Lock, Globe } from 'lucide-react'
import { FACTS } from '@/lib/facts'

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Originary Verify',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Cross-platform',
  description: 'AI agent verification and tamper-evident audit trails. Validate signatures, policy binding, and evidence exports at scale.',
  url: 'https://www.originary.xyz/products/verify',
  provider: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://www.originary.xyz',
  },
  offers: [
    { '@type': 'Offer', name: 'Open Source', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Supported Self-Host', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', price: 'Custom' } },
    { '@type': 'Offer', name: 'Managed Verification', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', price: 'Custom' } },
  ],
  featureList: 'Ed25519 signature verification, Policy binding, Key management, Evidence exports, Offline verification, Transport support',
}

export const metadata: Metadata = {
  title: 'Originary Verify | AI Agent Verification and Tamper-Evident Audit Trails',
  description: 'The fastest way to operationalize PEAC in production. Validate signatures, policy binding, and evidence exports at scale. Hosted or self-hosted. Offline verification with no vendor dependency.',
  keywords: [
    'Originary Verify',
    'AI agent verification',
    'MCP security',
    'MCP governance',
    'tamper-evident audit trail',
    'verifiable audit trail',
    'offline verification',
    'signed interaction records',
    'portable evidence',
    'PEAC Protocol',
  ],
  robots: 'index,follow',
  alternates: { canonical: '/products/verify' },
  openGraph: {
    title: 'Originary Verify | AI Agent Verification',
    description: 'Validate signatures, policy binding, and evidence exports at scale. The fastest way to operationalize PEAC in production.',
    url: '/products/verify',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Verify | AI Agent Verification',
    description: 'Validate signatures, policy binding, and evidence exports at scale. The fastest way to operationalize PEAC in production.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const useCases = [
  {
    title: 'Enterprise AI platform teams',
    description: 'Verify every agent interaction across your platform. Export tamper-evident audit trails for compliance reviews and incident investigations.',
    icon: <Server size={20} />,
  },
  {
    title: 'API operators and MCP hosts',
    description: 'Issue signed records on every response. Give consumers portable proof of what happened, verifiable without calling you back.',
    icon: <Globe size={20} />,
  },
  {
    title: 'Security and procurement teams',
    description: 'Evaluate vendor agent interactions with third-party-verifiable records. No proprietary tooling required for verification.',
    icon: <Shield size={20} />,
  },
  {
    title: 'Cross-boundary workflows',
    description: 'When agents act across organizational boundaries, both sides need proof. Originary Verify creates records that survive vendors, audits, disputes, and time.',
    icon: <FileCheck size={20} />,
  },
]

const deploymentModes = [
  {
    name: 'Self-hosted (OSS)',
    price: '$0 forever',
    description: 'Run the full verification stack in your own infrastructure. All signing keys, policy, and records stay in your environment.',
    features: [
      'Your keys, your infrastructure',
      'No data leaves your environment',
      `${FACTS.publishedPackageCount} packages on npm`,
      `${FACTS.license} license, no CLA`,
      'Community support via GitHub',
    ],
    cta: { label: 'Get started on GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
    highlight: false,
  },
  {
    name: 'Supported self-host',
    price: 'Custom',
    description: 'Self-hosted deployment with Originary integration support, architecture review, and SLA.',
    features: [
      'Guided integration and rollout',
      'Self-managed or KMS-backed keys',
      'Dedicated engineering access',
      'Defined response windows',
      'Compliance evidence guidance',
    ],
    cta: { label: 'Talk to us', href: '/contact?subject=Supported%20Self-Host' },
    highlight: false,
  },
  {
    name: 'Managed verification',
    price: 'Custom',
    description: 'Originary operates the verification layer. You integrate via SDK or gateway. Evidence exports and key lifecycle included.',
    features: [
      'Originary operates the stack',
      'KMS-backed attested signing keys',
      'Pre-packaged evidence bundles',
      'Monitoring and alerting',
      'Full SLA and priority support',
    ],
    cta: { label: 'Talk to us', href: '/contact?subject=Managed%20Verification' },
    highlight: true,
  },
]

const capabilities = [
  { label: 'Signature verification', detail: 'Ed25519 (RFC 8032). Compact JWS (RFC 7515). Offline with issuer public key only.' },
  { label: 'Policy binding', detail: 'JCS (RFC 8785) + SHA-256 digest. Three-state result: verified, failed, unavailable.' },
  { label: 'Key management', detail: '5-state rotation lifecycle. 30-day overlap. Revocation tracking. KMS integration.' },
  { label: 'Evidence exports', detail: 'Signed records, policy hashes, timestamps. Portable across vendors, audits, and disputes.' },
  { label: 'Offline verification', detail: 'No callback to Originary or any vendor. Verifiers need only the issuer public key via JWKS.' },
  { label: 'Network posture', detail: 'No implicit fetch. No SSRF. URL fields are locator hints only, never auto-dereferenced.' },
  { label: 'Transport support', detail: 'HTTP headers, MCP metadata, A2A envelopes, gRPC carriers. 8 KB header / 64 KB embed limits.' },
  { label: 'Wire format', detail: 'interaction-record+jwt (current stable). Legacy peac-receipt/0.1 decoded but not issued.' },
]

export default function OriginaryVerifyPage() {
  return (
    <div className="wrap">
      <Script id="verify-product-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(productJsonLd)}
      </Script>
      <NavigationHeader />
      <main id="main-content" style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: '96px', paddingBottom: '40px' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Breadcrumb items={[
              { label: 'Products', href: '/products' },
              { label: 'Originary Verify' },
            ]} />

            <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-5)',
                background: 'var(--accent-brand-subtle)', border: '1px solid var(--accent-brand)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-brand)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: 'var(--space-6)',
              }}>
                <Shield size={13} />
                Flagship product
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)', color: 'var(--text-primary)',
              }}>
                Originary Verify
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)', color: 'var(--text-secondary)',
                lineHeight: 1.7, marginBottom: 'var(--space-4)',
                maxWidth: '640px', margin: '0 auto var(--space-4) auto',
              }}>
                The fastest way to operationalize PEAC in production. Validate signatures, policy binding, and evidence exports at scale.
              </p>

              <p style={{
                fontSize: 'var(--text-base)', color: 'var(--text-tertiary)',
                lineHeight: 1.7, marginBottom: 'var(--space-8)',
                maxWidth: '560px', margin: '0 auto var(--space-8) auto',
              }}>
                Hosted or self-hosted. Offline verification with no vendor dependency. Tamper-evident audit trails that work across teams, vendors, and audits.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary btn-lg">
                  Start here
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact?subject=Originary%20Verify" className="btn btn-secondary btn-lg">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What it solves */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Logs explain what your systems observed
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                They do not create portable proof another party can verify independently. Originary Verify does.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'var(--space-6)',
            }}>
              {useCases.map((uc) => (
                <div key={uc.title} style={{
                  background: 'var(--surface-elevated)', border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
                    background: 'var(--accent-brand-subtle)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: 'var(--accent-brand)',
                    marginBottom: 'var(--space-4)',
                  }}>
                    {uc.icon}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <Lock size={28} style={{ color: 'var(--accent-brand)', margin: '0 auto var(--space-4) auto' }} />
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Verification capabilities
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                What Originary Verify handles under the hood.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
              {capabilities.map((cap) => (
                <div key={cap.label} style={{
                  background: 'var(--surface-elevated)', border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
                  display: 'flex', gap: 'var(--space-4)', alignItems: 'baseline',
                }}>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-brand)', minWidth: '140px', flexShrink: 0 }}>{cap.label}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{cap.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment modes */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Three ways to deploy
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                Start with open source. Add support or managed verification when needed.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'var(--space-6)',
            }}>
              {deploymentModes.map((mode) => (
                <div key={mode.name} style={{
                  background: 'var(--surface-elevated)',
                  border: mode.highlight ? '2px solid var(--accent-brand)' : '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
                  display: 'flex', flexDirection: 'column', position: 'relative',
                }}>
                  {mode.highlight && (
                    <div style={{
                      position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--accent-brand)', color: 'white',
                      fontSize: 'var(--text-xs)', fontWeight: 700,
                      padding: '4px 16px', borderRadius: 'var(--radius-full)',
                      textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
                    }}>
                      Recommended
                    </div>
                  )}
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    {mode.name}
                  </h3>
                  <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }}>
                    {mode.price}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-5)' }}>
                    {mode.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-6)', flex: 1 }}>
                    {mode.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {mode.cta.external ? (
                    <a href={mode.cta.href} target="_blank" rel="noopener noreferrer"
                      className={mode.highlight ? 'btn btn-primary' : 'btn btn-secondary'}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', justifyContent: 'center' }}
                    >
                      {mode.cta.label}
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link href={mode.cta.href}
                      className={mode.highlight ? 'btn btn-primary' : 'btn btn-secondary'}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', justifyContent: 'center' }}
                    >
                      {mode.cta.label}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data boundaries */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                What leaves your environment?
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
                    <th style={{ textAlign: 'center', padding: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 700 }}>Supported</th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 700 }}>Managed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Signing keys', 'Stays local', 'Self-managed or KMS', 'Originary KMS'],
                    ['Policy files', 'Stays local', 'Stays local', 'Originary hosts'],
                    ['Request payloads', 'Never collected', 'Never collected', 'Never collected'],
                    ['Signed records', 'Stays local', 'Stays local', 'Originary stores'],
                    ['Verification', 'Local, offline', 'Local, offline', 'Local, offline'],
                    ['Calls to Originary', 'None', 'Key lifecycle only', 'Record storage only'],
                  ].map(([data, self, supported, managed], idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: 'var(--space-3)', color: 'var(--text-secondary)', fontWeight: 500 }}>{data}</td>
                      <td style={{ padding: 'var(--space-3)', textAlign: 'center', color: 'var(--text-secondary)' }}>{self}</td>
                      <td style={{ padding: 'var(--space-3)', textAlign: 'center', color: 'var(--text-secondary)' }}>{supported}</td>
                      <td style={{ padding: 'var(--space-3)', textAlign: 'center', color: 'var(--text-secondary)' }}>{managed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Relationship to PEAC and other products */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{
              padding: 'var(--space-8)', border: '2px solid var(--accent-brand)',
              borderRadius: 'var(--radius-2xl)', background: 'var(--accent-brand-faint)', textAlign: 'center',
            }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                How it fits together
              </h3>
              <div style={{ display: 'grid', gap: 'var(--space-4)', textAlign: 'left', maxWidth: '480px', margin: '0 auto' }}>
                {[
                  { bold: 'PEAC Protocol', rest: 'defines the open standard for verifiable interaction records.', href: '/peac' },
                  { bold: 'Originary Verify', rest: 'operationalizes it at production scale.', href: '/products/verify' },
                  { bold: 'Agent Auditor', rest: 'inspects and verifies individual records.', href: '/agent-auditor' },
                  { bold: 'Gateway 402', rest: 'enforces policy and issues records at the edge.', href: '/products/gateway-402' },
                  { bold: 'Proof Check', rest: 'evaluates what your logs can and cannot prove.', href: '/agent-proof-check' },
                ].map((item) => (
                  <p key={item.bold} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    <Link href={item.href} style={{ color: 'var(--text-primary)', fontWeight: 700, textDecoration: 'none' }}>{item.bold}</Link> {item.rest}
                  </p>
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/peac" className="btn btn-secondary btn-sm">
                  View the protocol
                </Link>
                <Link href="/products" className="btn btn-secondary btn-sm">
                  All products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div style={{
              maxWidth: '720px', margin: '0 auto', padding: 'var(--space-10)',
              background: 'var(--surface-elevated)', border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)', textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Ready to evaluate?
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto var(--space-8) auto' }}>
                Start with the open-source packages. Add support, managed keys, or hosted verification when you need it.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  Start here
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact?subject=Originary%20Verify%20Evaluation" className="btn btn-secondary btn-lg">
                  Book a technical review
                </Link>
                <Link href="/trust" className="btn btn-ghost btn-lg">
                  Trust Center
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
