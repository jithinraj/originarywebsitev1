import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { CheckCircle, Github, Download, BookOpen, Code, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PEAC Protocol: Open Standard for the Agentic Web | Originary',
  description: 'Apache-2.0 standard for policy, payments, and verifiable receipts. Built by Originary; usable anywhere. Open source SDKs, spec, and examples.',
  alternates: {
    canonical: 'https://www.originary.xyz/peac'
  },
  openGraph: {
    title: 'PEAC Protocol: Open Standard for the Agentic Web',
    description: 'Apache-2.0 standard for policy, payments, and verifiable receipts. Built by Originary; usable anywhere.',
    url: 'https://www.originary.xyz/peac',
    type: 'website',
  },
}

export default function PeacPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "PEAC Protocol",
    "description": "Programmable Environment for Agent Coordination - Open standard for policy, payments, and verifiable receipts",
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
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'rgb(34, 197, 94)'
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
                  color: 'var(--gray-900)'
                }}
              >
                PEAC Protocol: the open standard for policy, payments, and receipts
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
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

        {/* Why PEAC */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}
            >
              Why PEAC
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-16)',
                maxWidth: '700px',
                margin: '0 auto var(--space-16) auto'
              }}
            >
              Seven pillars of infrastructure for the agentic web
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              {[
                { name: 'Access', desc: 'Declare who can use your resources and under what conditions' },
                { name: 'Attribution', desc: 'Every request carries verifiable identity and intent' },
                { name: 'Consent', desc: 'Explicit, machine-readable consent before access' },
                { name: 'Commerce', desc: 'Native payment semantics via HTTP 402 and pricing headers' },
                { name: 'Compliance', desc: 'Audit trails and receipts for regulatory requirements' },
                { name: 'Privacy', desc: 'Minimal disclosure and selective transparency' },
                { name: 'Provenance', desc: 'Cryptographic proof of what happened and when' },
              ].map((pillar) => (
                <div key={pillar.name} className="card">
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    {pillar.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    {pillar.desc}
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
                color: 'var(--gray-900)'
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
                <BookOpen size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  peac.txt Specification
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
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
                <Shield size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Receipt Schema
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  JWS-based verifiable receipts for audit and compliance
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* SDKs & Tools */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}
            >
              SDKs & Tools
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
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
                <Code size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  peac-core (Node.js)
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  TypeScript/JavaScript SDK for parsing, validation, and receipt generation
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>
                  <Github size={14} />
                  <span>View on GitHub →</span>
                </div>
              </a>

              <Link href="/downloads" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Download size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  CLI Tools
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Command-line utilities for policy validation and receipt verification
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>
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
                <Code size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Examples
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Sample implementations, integration patterns, and starter templates
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>
                  <Github size={14} />
                  <span>Browse examples →</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-8)',
                  color: 'var(--gray-900)'
                }}
              >
                Governance & Contributing
              </h2>

              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Open Development
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  PEAC is maintained by Originary with community contributions welcome. Development happens in the open on GitHub with semantic versioning and public roadmaps.
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
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  License & Use
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Apache-2.0. No CLA required for small fixes; DCO accepted. PEAC is neutral and adapter-friendly, Originary is one implementation.
                </p>
                <a href="https://github.com/peacprotocol/peac/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  View License
                </a>
              </div>
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
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Self-host with the open source stack, or add managed services like Trace, Gateway, Studio, and Verify API.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}>
                  View Pricing
                </Link>
                <Link href="/trace" className="btn btn-lg btn-ghost" style={{ color: 'var(--white)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
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
