import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { CheckCircle, Github, Download, BookOpen, Code, Shield, Activity, Layers } from 'lucide-react'
import { FaqAccordion, FaqJsonLd } from '@/components/faq'
import { peacFaqs } from '@/content/faqs'

export const metadata: Metadata = {
  title: 'PEAC Protocol | Open Protocol for the Agentic Web',
  description: 'PEAC Protocol is an open protocol for policy, payments, and receipts in the agentic web. HTTP 402 commerce and AI compliance.',
  robots: 'index,follow',
  alternates: {
    canonical: '/peac'
  },
  openGraph: {
    title: 'PEAC Protocol | Open Protocol for the Agentic Web',
    description: 'PEAC Protocol is an open protocol for policy, payments, and receipts in the agentic web. HTTP 402 commerce and AI compliance.',
    url: '/peac',
    siteName: 'Originary',
    type: 'website',
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Protocol | Open Protocol for the Agentic Web',
    description: 'Open protocol for policy, payments, and receipts in the agentic web.',
    images: ['/og'],
  },
}

export default function PeacPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "PEAC Protocol",
    "description": "PEAC Protocol - Open protocol for policy, payments, and verifiable receipts in the agentic web",
    "codeRepository": "https://github.com/peacprotocol/peac",
    "programmingLanguage": ["TypeScript", "JavaScript"],
    "license": "https://www.apache.org/licenses/LICENSE-2.0",
    "isAccessibleForFree": true,
    "keywords": ["PEAC", "agentic web", "HTTP 402", "receipts", "policy", "payments", "open source"],
    "author": {
      "@type": "Organization",
      "name": "Originary"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqJsonLd items={peacFaqs} />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--accent-success-subtle)',
                  border: '1px solid var(--accent-success-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-success)'
                }}
              >
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Open Source • Apache-2.0
              </div>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}
              >
                PEAC Protocol: an open protocol for policy, payments, and receipts
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-12)'
                }}
              >
                Apache-2.0 licensed. Works anywhere. Adopt just the parts you need.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={20} />
                  View on GitHub
                </a>
                <Link href="/developers" className="btn btn-secondary btn-lg">
                  Get started
                </Link>
                <Link href="/.well-known/peac.txt" className="btn btn-ghost btn-lg">
                  Read the spec
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Path to Standard Adoption */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)', background: 'var(--surface-elevated)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  textAlign: 'center',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}
              >
                Path to Standard Adoption
              </h2>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-12)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-12) auto',
                  lineHeight: 1.7
                }}
              >
                We are working toward multiple independent implementations before 1.0
              </p>

              {/* Roadmap */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-12)',
                flexWrap: 'wrap'
              }}>
                <div className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center', background: 'var(--surface-subtle)' }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    Pre-1.0
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Originary reference implementation
                  </p>
                </div>

                <div style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-muted)' }}>→</div>

                <div className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center', background: 'var(--surface-subtle)' }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    Multiple implementations
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Independent conformant implementations
                  </p>
                </div>

                <div style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-muted)' }}>→</div>

                <div className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center', background: 'var(--surface-subtle)' }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    Post-1.0
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Broad adoption and ecosystem
                  </p>
                </div>
              </div>

              {/* Statement */}
              <div className="card" style={{
                background: 'var(--accent-brand-faint)',
                border: '1px solid var(--accent-brand-subtle)',
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-8)'
              }}>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <strong>No single implementation has privileged status.</strong> Originary is one implementation; we welcome others.
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}>
                  PEAC is designed for adapter-based interoperability. Multiple implementations ensure the protocol remains neutral, open, and resilient.
                </p>
              </div>

              {/* Links to governance and conformance */}
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link href="/conformance" className="btn btn-primary">
                  View conformance suite
                </Link>
                <Link href="/governance" className="btn btn-secondary">
                  Learn about governance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why PEAC */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}
            >
              Why PEAC
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-16)',
                maxWidth: '700px',
                margin: '0 auto var(--space-16) auto'
              }}
            >
              Ten verification domains for the agentic web
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              {[
                { name: 'Access', desc: 'Declare who can use your resources and under what conditions' },
                { name: 'Attribution', desc: 'Every request carries verifiable identity and intent' },
                { name: 'Commerce', desc: 'Native payment semantics via HTTP 402 and pricing headers' },
                { name: 'Consent', desc: 'Explicit, machine-readable consent before access' },
                { name: 'Compliance', desc: 'Audit trails and receipts for regulatory requirements' },
                { name: 'Privacy', desc: 'Minimal disclosure and selective transparency' },
                { name: 'Provenance', desc: 'Cryptographic proof of what happened and when' },
                { name: 'Safety', desc: 'Defense-in-depth security and safe-by-default configuration' },
                { name: 'Identity', desc: 'Cryptographic proof-of-control for agents and operators' },
                { name: 'Purpose', desc: 'Declared intent of each interaction and purpose-driven access' },
              ].map((domain) => (
                <div key={domain.name} className="card">
                  <CheckCircle size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    {domain.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {domain.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spec & Reference */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-16)',
                color: 'var(--text-primary)'
              }}
            >
              Spec & Reference
            </h2>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
              <a
                href="/.well-known/peac.txt"
                className="card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <BookOpen size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  peac.txt Specification
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Policy discovery format, headers, and machine-readable rules
                </p>
              </a>

              <a
                href="https://github.com/peacprotocol/peac/blob/main/docs/receipts.md"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Shield size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Receipt Schema
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  JWS-based verifiable receipts for audit and compliance
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* SDKs & Tools */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}
            >
              SDKs & Tools
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-16)',
                maxWidth: '700px',
                margin: '0 auto var(--space-16) auto'
              }}
            >
              Production-ready libraries and command-line tools
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Code size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  PEAC Core (22 packages)
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  TypeScript/JavaScript SDK: protocol, crypto, schema, MCP server, capture-node, OpenClaw adapter, Stripe adapter, and more
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <Github size={14} />
                  <span>View on GitHub →</span>
                </div>
              </a>

              <Link href="/downloads" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Download size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  CLI Tools
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Command-line utilities for policy validation and receipt verification
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <Download size={14} />
                  <span>Download →</span>
                </div>
              </Link>

              <a
                href="https://github.com/peacprotocol/peac/tree/main/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Code size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Examples
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Sample implementations, integration patterns, and starter templates
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <Github size={14} />
                  <span>Browse examples →</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Protocol Capabilities */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}
            >
              Protocol Capabilities
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-16)',
                maxWidth: '700px',
                margin: '0 auto var(--space-16) auto'
              }}
            >
              Built-in features for privacy, observability, and rapid deployment
            </p>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card">
                <Activity size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Telemetry
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  OpenTelemetry integration with privacy-preserving modes. Choose strict, balanced, or custom identifier handling for compliance.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '2px 8px', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', color: 'var(--text-secondary)' }}>W3C Trace Context</span>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '2px 8px', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', color: 'var(--text-secondary)' }}>Privacy modes</span>
                </div>
              </div>

              <div className="card">
                <Layers size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Profiles & Extensions
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Pre-built policy profiles (news-media, api-provider, open-source, saas-docs), RFC 9421 proof capture profile, and extensible registry for interaction types and toolcall operations.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '2px 8px', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', color: 'var(--text-secondary)' }}>Policy profiles</span>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '2px 8px', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', color: 'var(--text-secondary)' }}>RFC 9421</span>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '2px 8px', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', color: 'var(--text-secondary)' }}>Registry v0.3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)', background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-8)',
                  color: 'var(--text-primary)'
                }}
              >
                Governance & Contributing
              </h2>

              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                  Open Development
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Developed in public with community contributions. Originary (Poem, Inc.) is the primary maintainer today. Development happens on GitHub with semantic versioning and public roadmaps. Supply chain hardening includes automated audit gates, lockfile drift detection, and a published security policy.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <a href="https://github.com/peacprotocol/peac/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    Contributing Guide
                  </a>
                  <a href="https://github.com/peacprotocol/peac/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    Code of Conduct
                  </a>
                  <a href="https://github.com/peacprotocol/peac/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    Security Policy
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                  License & Use
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Apache-2.0. No CLA required for small fixes; DCO accepted. PEAC is neutral and adapter-friendly, Originary is one implementation.
                </p>
                <a href="https://github.com/peacprotocol/peac/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  View License
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Use PEAC with other standards */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)', background: 'var(--surface-elevated)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}
            >
              Use PEAC with other standards
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-16)',
                maxWidth: '700px',
                margin: '0 auto var(--space-16) auto'
              }}
            >
              PEAC Protocol integrates with HTTP 402, x402, ACP, AIPREF, MCP, and A2A for seamless agentic commerce and agent-to-agent transactions
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <Link href="/integrations/x402" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  HTTP 402 & x402
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  HTTP 402 commerce and x402 receipts for machine-payable APIs
                </p>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  View integration →
                </div>
              </Link>

              <Link href="/integrations/acp" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Agentic Commerce Protocol (ACP)
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Enable agentic commerce and agentic transactions with ACP
                </p>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  View integration →
                </div>
              </Link>

              <Link href="/integrations/aipref" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  AIPREF
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  AI preference standard for policy discovery and consent
                </p>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  View integration →
                </div>
              </Link>

              <Link href="/integrations/mcp" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Model Context Protocol (MCP)
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  MCP receipts and tools for agent coordination
                </p>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  View integration →
                </div>
              </Link>

              <Link href="/integrations/a2a" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  A2A protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Agent-to-agent transactions with verifiable receipts
                </p>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  View integration →
                </div>
              </Link>

              <Link href="/integrations" className="card" style={{ textDecoration: 'none', display: 'block', border: '2px dashed var(--border-default)', background: 'transparent' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  View all integrations
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Explore all agentic web standards and protocols
                </p>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  See more →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FaqAccordion
                items={peacFaqs}
                title="PEAC Protocol FAQ"
                subtitle="Common questions about the open standard"
              />
            </div>
          </div>
        </section>

        {/* Commercial Path CTA */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)', background: 'var(--gradient-brand)' }}>
          <div className="container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', color: 'var(--white)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--white)'
                }}
              >
                Deploy PEAC yourself, or use Originary Cloud
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  marginBottom: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)'
                }}
              >
                Self-host with the open source stack, or add managed services like Trace, Gateway, Studio, and Verify API.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn btn-lg" style={{ background: 'var(--surface-elevated)', color: 'var(--accent-brand)', border: 'none' }}>
                  View Pricing
                </Link>
                <Link href="/trace" className="btn btn-lg btn-ghost" style={{ color: 'var(--white)', borderColor: 'var(--border-on-brand)' }}>
                  Explore Trace
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
