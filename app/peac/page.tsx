import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Github, Download, BookOpen, Code, Shield } from 'lucide-react'
import { FACTS } from '@/lib/facts'
import { FaqAccordion, FaqJsonLd } from '@/components/faq'
import { peacFaqs } from '@/content/faqs'

export const metadata: Metadata = {
  title: 'PEAC Protocol | Originary',
  description: 'PEAC is the open standard for verifiable interaction records across AI agents, APIs, MCP, and automated systems. Originary is one product built on top.',
  keywords: [
    'PEAC Protocol',
    'verifiable interaction records',
    'signed records',
    'open protocol',
    'Ed25519',
    'MCP',
    'A2A',
    'HTTP 402',
    'Apache-2.0',
    'open source',
    'interaction-record+jwt',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: '/peac'
  },
  openGraph: {
    title: 'PEAC Protocol | Originary',
    description: 'PEAC is the open standard for verifiable interaction records across AI agents, APIs, MCP, and automated systems. Originary is one product built on top.',
    url: '/peac',
    siteName: 'Originary',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'PEAC Protocol: open standard for verifiable interaction records' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Protocol | Originary',
    description: 'PEAC is the open standard for verifiable interaction records across AI agents, APIs, MCP, and automated systems. Originary is one product built on top.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

export default function PeacPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": "https://www.originary.xyz/peac#protocol",
    "name": "PEAC Protocol",
    "description": "Open standard for verifiable interaction records. Sign API calls, tool runs, and agent handoffs as signed records verifiable independently, offline. Apache-2.0.",
    "codeRepository": "https://github.com/peacprotocol/peac",
    "programmingLanguage": ["TypeScript", "JavaScript"],
    "license": "https://www.apache.org/licenses/LICENSE-2.0",
    "isAccessibleForFree": true,
    "version": FACTS.stableVersion,
    "keywords": ["PEAC Protocol", "verifiable interaction records", "signed records", "Ed25519", "MCP", "A2A", "HTTP 402", "open source", "Apache-2.0"],
    "author": {
      "@type": "Organization",
      "@id": "https://www.originary.xyz/#org",
      "name": "Originary",
      "url": "https://www.originary.xyz"
    }
  }

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqJsonLd items={peacFaqs} />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-5)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-full)', background: 'var(--accent-brand)', display: 'inline-block', flexShrink: 0 }} />
                Open Source &mdash; Apache-2.0
              </div>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                }}
              >
                <span className="text-gradient">Open standard</span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>for verifiable interaction records</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-6)',
                  maxWidth: '640px',
                  margin: '0 auto var(--space-6) auto',
                }}
              >
                PEAC defines how systems publish machine-readable interaction terms, issue signed records for automated requests, and verify them independently, even offline. Originary is one product built on top.
              </p>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  marginBottom: 'var(--space-12)',
                }}
              >
                Originary is one implementation. PEAC remains open, neutral, and implementation-independent.
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
                  Start here
                </Link>
                <Link href="/conformance" className="btn btn-ghost btn-lg">
                  View conformance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What PEAC defines */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              What PEAC defines
            </h2>
            <p style={{ textAlign: 'center', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)', maxWidth: '600px', margin: '0 auto var(--space-16) auto' }}>
              Three protocol surfaces for verifiable automated interactions
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <div className="card">
                <BookOpen size={28} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Policy discovery
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Publish machine-readable interaction terms and rules at a well-known endpoint. Agents and systems discover your policies before making requests.
                </p>
              </div>

              <div className="card">
                <Shield size={28} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Interaction record format
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Issue signed records for automated requests. Ed25519 signatures, compact JWS serialization, and deterministic claim structure.
                </p>
              </div>

              <div className="card">
                <Code size={28} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Verification and conformance
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Verify records independently with the public key alone. Conformance testing ensures cross-implementation compatibility deterministically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What PEAC does not replace */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                What PEAC does not replace
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                PEAC is designed to interoperate with adjacent standards rather than replace them.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  'Auth and identity systems',
                  'Payment rails and commerce layers',
                  'Observability and transport standards',
                ].map((item) => (
                  <span key={item} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-2) var(--space-4)',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--surface-card, var(--surface-elevated))',
                    border: '1px solid var(--border-default)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}>
                    <span style={{ color: 'var(--accent-brand)' }}>&#10003;</span>
                    Works with {item.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PEAC vs Originary boundary */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-10)', color: 'var(--text-primary)' }}>
                PEAC vs Originary
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                <div style={{
                  background: 'var(--glass-card-bg)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                }}>
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }}>PEAC Protocol</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {[
                      'Open standard',
                      'Machine-readable interaction terms',
                      'Signed interaction record format',
                      'Independent verification',
                      'Conformance and interoperability',
                      'Implementation-neutral by design',
                    ].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-brand)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  background: 'var(--glass-card-bg)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                }}>
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>Originary (product)</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {[
                      'Production product surface',
                      'Deployment paths',
                      'Verification workflows',
                      'Inspection and export tools',
                      'Enterprise rollout support',
                      'Optional, not required for the protocol',
                    ].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 700, flexShrink: 0 }}>&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation status */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--accent-brand-faint)', border: '1px solid var(--accent-brand-subtle)', padding: 'var(--space-8)' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)', textAlign: 'center' }}>
                Implementation status
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                PEAC is an open standard under active development. No single implementation has privileged status. Originary is one implementation; independent implementations are welcome. Conformance testing is the interoperability anchor.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/conformance" className="btn btn-primary btn-sm">
                  View conformance suite
                </Link>
                <Link href="/governance" className="btn btn-secondary btn-sm">
                  Governance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Verification domains */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Where PEAC works today
            </h2>
            <p style={{ textAlign: 'center', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)', maxWidth: '600px', margin: '0 auto var(--space-16) auto' }}>
              Protocol capability map for APIs, MCP, A2A, commerce-related workflows, and other verifiable automated interactions
            </p>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {/* Group 1: Access, Identity, Purpose */}
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>
                  Who and why
                </p>
                <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
                  {[
                    { name: 'Access', desc: 'Declare who can use your resources and under what conditions' },
                    { name: 'Identity', desc: 'Cryptographic proof-of-control for agents and operators' },
                    { name: 'Purpose', desc: 'Declared intent of each interaction and purpose-driven access' },
                  ].map((d) => (
                    <div key={d.name} className="card" style={{ padding: 'var(--space-5)' }}>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>{d.name}</h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 2: Consent, Privacy, Compliance, Safety */}
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>
                  Trust and governance
                </p>
                <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                  {[
                    { name: 'Consent', desc: 'Explicit, machine-readable consent before access' },
                    { name: 'Privacy', desc: 'Minimal disclosure and selective transparency' },
                    { name: 'Compliance', desc: 'Audit trails and records for regulatory requirements' },
                    { name: 'Safety', desc: 'Defense-in-depth security and safe-by-default configuration' },
                  ].map((d) => (
                    <div key={d.name} className="card" style={{ padding: 'var(--space-5)' }}>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>{d.name}</h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 3: Attribution, Provenance, Commerce */}
              <div>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>
                  Evidence and value
                </p>
                <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
                  {[
                    { name: 'Attribution', desc: 'Every request carries verifiable identity and intent' },
                    { name: 'Provenance', desc: 'Cryptographic proof of what happened and when' },
                    { name: 'Commerce', desc: 'Payment semantics via HTTP 402 and pricing headers' },
                  ].map((d) => (
                    <div key={d.name} className="card" style={{ padding: 'var(--space-5)' }}>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>{d.name}</h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spec & Reference */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-16)', color: 'var(--text-primary)' }}>
              Spec and reference
            </h2>
            <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
              <a href="/.well-known/peac.txt" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <BookOpen size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  peac.txt specification
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Policy discovery format, headers, and machine-readable rules
                </p>
              </a>
              <a href="https://github.com/peacprotocol/peac/blob/main/docs/receipts.md" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Shield size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Record schema
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  JWS-based verifiable interaction records for audit and compliance
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Reference implementation and tools */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Reference implementation and tools
            </h2>
            <p style={{ textAlign: 'center', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)', maxWidth: '600px', margin: '0 auto var(--space-16) auto' }}>
              Reference implementation, SDKs, and developer tools
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Code size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  PEAC Core ({FACTS.publishedPackageCount} packages)
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  TypeScript/JavaScript: protocol, crypto, schema, MCP server, adapters, and more
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <Github size={14} />
                  <span>View on GitHub</span>
                </div>
              </a>

              <Link href="/downloads" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Download size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  CLI tools
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Command-line utilities for policy validation and record verification
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <Download size={14} />
                  <span>Download</span>
                </div>
              </Link>

              <a href="https://github.com/peacprotocol/peac/tree/main/examples" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Code size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Examples
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Integration patterns, starter templates, and sample implementations
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <Github size={14} />
                  <span>Browse examples</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Interoperability */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)', background: 'var(--surface-elevated)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Interoperability
            </h2>
            <p style={{ textAlign: 'center', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)', maxWidth: '640px', margin: '0 auto var(--space-16) auto' }}>
              PEAC is designed to interoperate with adjacent standards rather than replace them
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <Link href="/integrations/x402" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  HTTP 402 and x402
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Commerce and signed records for machine-payable APIs
                </p>
              </Link>

              <Link href="/integrations/acp" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Agentic Commerce Protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Agentic commerce and transaction verification
                </p>
              </Link>

              <Link href="/integrations/aipref" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  AIPREF
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  AI preference standard for policy discovery and consent
                </p>
              </Link>

              <Link href="/integrations/mcp" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Model Context Protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  MCP tool verification and signed records for agent coordination
                </p>
              </Link>

              <Link href="/integrations/a2a" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  A2A Protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Agent-to-agent transactions with verifiable interaction records
                </p>
              </Link>

              <Link href="/developers" className="card" style={{ textDecoration: 'none', display: 'block', border: '2px dashed var(--border-default)', background: 'transparent' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  All integrations
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Explore all supported standards and protocols
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)', background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-8)', color: 'var(--text-primary)' }}>
                Governance and contributing
              </h2>

              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  PEAC is developed in public under the Apache-2.0 license. Originary (Poem, Inc.) is the primary maintainer today. Contributions are welcome. Supply chain hardening includes automated audit gates, lockfile drift detection, and a published security policy.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <a href="https://github.com/peacprotocol/peac/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Contributing guide</a>
                  <a href="https://github.com/peacprotocol/peac/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Code of conduct</a>
                  <a href="https://github.com/peacprotocol/peac/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Security policy</a>
                  <a href="https://github.com/peacprotocol/peac/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">License</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--surface-elevated)' }}>
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

        {/* CTA */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: 'var(--space-10)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Start here on PEAC
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto var(--space-8) auto' }}>
                Apache-2.0. Self-host everything. No sign-up required.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary btn-lg">
                  Quickstart
                </Link>
                <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
