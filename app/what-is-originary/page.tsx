import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Shield, FileText, CheckCircle, Code, Globe, Users, HelpCircle, ExternalLink, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Originary? | Verification for AI Agents',
  description: 'Originary (Poem, Inc.) builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.',
  keywords: 'Originary, PEAC Protocol, verifiable receipts, PEAC-Receipt, peac.txt, agent policy, agentic web, HTTP 402, signed receipts, policy discovery, agent compliance, verification infrastructure',
  robots: 'index,follow',
  alternates: {
    canonical: '/what-is-originary'
  },
  openGraph: {
    title: 'What is Originary? | Verification for AI Agents',
    description: 'Originary (Poem, Inc.) builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.',
    url: '/what-is-originary',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Originary? | Verification for AI Agents',
    description: 'Originary builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

export default function WhatIsOriginaryPage() {
  // Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Originary",
    "legalName": "Poem, Inc.",
    "url": "https://www.originary.xyz",
    "logo": "https://www.originary.xyz/logo.svg",
    "description": "Originary builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.",
    "sameAs": [
      "https://x.com/originaryx",
      "https://www.linkedin.com/company/originary",
      "https://github.com/originaryx",
      "https://github.com/peacprotocol",
      "https://bsky.app/profile/originary.bsky.social"
    ],
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  }

  // WebSite JSON-LD
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Originary",
    "url": "https://www.originary.xyz",
    "description": "Verification infrastructure for agent interactions. Publish terms, check requests, and return verifiable records.",
    "publisher": {
      "@type": "Organization",
      "name": "Originary",
      "legalName": "Poem, Inc."
    }
  }

  // FAQPage JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do receipts replace payment rails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Rails settle value; receipts are portable records that prove what was authorized and what occurred."
        }
      },
      {
        "@type": "Question",
        "name": "Is PEAC-Receipt the canonical HTTP header name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PEAC-Receipt is the canonical receipt header for PEAC."
        }
      },
      {
        "@type": "Question",
        "name": "Does verification require Originary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Receipts are designed for offline verification using public keys and published policy."
        }
      },
      {
        "@type": "Question",
        "name": "Is PEAC stable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEAC is at version 0.10.13; the goal is to earn 1.0 through multi-implementation, conformance, and standards work."
        }
      }
    ]
  }

  // BreadcrumbList JSON-LD for SEO
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.originary.xyz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "What is Originary?",
        "item": "https://www.originary.xyz/what-is-originary"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)'
              }}>
                What is <span className="text-gradient">Originary?</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)',
                  maxWidth: '800px',
                  margin: '0 auto var(--space-4) auto'
                }}
              >
                Originary builds <strong>PEAC</strong>: an open standard for publishing terms and issuing verifiable records for agent interactions.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--text-tertiary)',
                  marginBottom: 'var(--space-10)',
                  maxWidth: '750px',
                  margin: '0 auto var(--space-10) auto'
                }}
              >
                No gatekeepers. No lock-in. No centralized control.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
                <Link href="/peac" className="btn btn-primary btn-lg">
                  Explore PEAC Protocol
                </Link>
                <Link href="/developers" className="btn btn-secondary btn-lg">
                  Read Developer Docs
                </Link>
                <Link href="/demo" className="btn btn-ghost btn-lg">
                  See Demo
                </Link>
              </div>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  margin: 0
                }}
              >
                Open standard. Apache-2.0. Self-hostable. Designed for independent implementations.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}
              >
                The problem
              </h2>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Agents need <strong>accountability</strong>: clear terms, verifiable decisions, and durable evidence of what happened. PEAC provides this through signed records and verifiable policy snapshots.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Without portable records, compliance is screenshots and disputes are opinions. (Common mistake: treating server logs as proof - they&apos;re unilateral and easily altered.)
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  margin: 0
                }}
              >
                PEAC makes interactions inspectable, auditable, and interoperable.
              </p>
            </div>
          </div>
        </section>

        {/* What Originary Does */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}
              >
                What Originary does
              </h2>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-8)'
                }}
              >
                Originary maintains the reference standard and production tooling for turning decisions into verifiable records. Publish terms, check requests, verify independently.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                      Publish terms
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      With a machine-readable policy surface (recommended: <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>/.well-known/peac.txt</code>)
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                      Enforce decisions
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      Using standard HTTP semantics (allow/deny/conditional requirements, including optional 402 flows)
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                      Return a record
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      As a signed receipt (<code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>PEAC-Receipt</code>) that can be verified offline and stored as evidence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How PEAC Makes Records Portable */}
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
              How PEAC makes records portable
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)',
                maxWidth: '800px',
                margin: '0 auto var(--space-6) auto'
              }}
            >
              PEAC is designed so any implementation can produce the same verifiable outcome: a policy snapshot plus a signed receipt. The receipt is the portable artifact; verification does not require Originary to be online.
            </p>
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
              Adapters keep the core standard neutral across protocols and payment rails.
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div
                className="card"
                style={{
                  textAlign: 'left',
                  padding: 'var(--space-8)',
                  border: '2px solid var(--border-default)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-brand)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-4)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)'
                  }}
                >
                  1
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  Policy surface (<code style={{ fontWeight: 400, fontSize: '0.85em' }}>peac.txt</code>)
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Publish terms in one place so agents and services can discover requirements before access.
                </p>
              </div>

              <div
                className="card"
                style={{
                  textAlign: 'left',
                  padding: 'var(--space-8)',
                  border: '2px solid var(--border-default)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-brand)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-4)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)'
                  }}
                >
                  2
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  Receipt format (<code style={{ fontWeight: 400, fontSize: '0.85em' }}>PEAC-Receipt</code>)
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Return a signed record with stable claims for what occurred, under which terms, and with what authorization evidence.
                </p>
              </div>

              <div
                className="card"
                style={{
                  textAlign: 'left',
                  padding: 'var(--space-8)',
                  border: '2px solid var(--border-default)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-brand)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-4)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)'
                  }}
                >
                  3
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  Verification &amp; conformance
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Verify receipts offline or via a verification endpoint, and validate policy conformance to reduce ambiguity in audits and disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
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
              Who this is for
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
              PEAC and Originary are built for teams that need interaction evidence to be durable and verifiable across environments.
            </p>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card">
                <Globe size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  APIs and SaaS platforms
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Prove access decisions and delivery outcomes
                </p>
              </div>

              <div className="card">
                <FileText size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Publishers and data providers
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Publish clear terms and require verifiable compliance
                </p>
              </div>

              <div className="card">
                <Code size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Agent developers
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Rely on a portable receipt that works across rails and environments
                </p>
              </div>

              <div className="card">
                <Shield size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Security, compliance, and policy teams
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Get evidence trails that stand up in reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Originary and PEAC Protocol */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}
              >
                Originary and PEAC Protocol
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                PEAC Protocol is open source and designed for independent implementations.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-6)'
                }}
              >
                Originary is a steward and a production-grade implementer of the standard, not the standard itself. The goal is a credible, interoperable ecosystem where verification works the same way everywhere.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/peac" className="btn btn-secondary">
                  Read the spec
                </Link>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
                <Link href="/governance" className="btn btn-ghost">
                  Governance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Name and Affiliation */}
        <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: 'var(--space-6)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-default)'
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--text-primary)'
                }}
              >
                Name and affiliation
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-3)'
                }}
              >
                Originary is a brand of Poem, Inc. In the U.S., Poem, Inc. is not affiliated with other organizations using similar names.
              </p>
              <Link
                href="/legal/imprint"
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Imprint / Legal
              </Link>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-10)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: 'var(--radius-2xl)',
                  background: 'rgba(255, 107, 53, 0.03)'
                }}
              >
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <AlertTriangle size={20} style={{ color: 'var(--brand-accent)' }} />
                  Limitations
                </h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 'var(--space-6)', marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>PEAC does not enforce compliance. It provides evidence of what the issuer claims occurred.</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Receipt contents are issuer-controlled. Verifiers trust the issuer's representation, not an oracle.</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>The wire format may change before 1.0. Cross-version compatibility is not guaranteed.</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Key compromise invalidates all receipts signed with that key (standard PKI limitation).</li>
                  <li>PEAC provides evidence for disputes, not adjudication. Resolution is out of scope.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                <HelpCircle size={28} style={{ color: 'var(--accent-brand)' }} />
                <h2
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  FAQ
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div
                  className="card"
                  style={{
                    textAlign: 'left',
                    padding: 'var(--space-6)'
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                    Do receipts replace payment rails?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    No. Rails settle value; receipts are portable records that prove what was authorized and what occurred.
                  </p>
                </div>

                <div
                  className="card"
                  style={{
                    textAlign: 'left',
                    padding: 'var(--space-6)'
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                    Is <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>PEAC-Receipt</code> the canonical HTTP header name?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    Yes. <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>PEAC-Receipt</code> is the canonical receipt header for PEAC.
                  </p>
                </div>

                <div
                  className="card"
                  style={{
                    textAlign: 'left',
                    padding: 'var(--space-6)'
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                    Does verification require Originary?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    No. Receipts are designed for offline verification using public keys and published policy.
                  </p>
                </div>

                <div
                  className="card"
                  style={{
                    textAlign: 'left',
                    padding: 'var(--space-6)'
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                    Is PEAC stable?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    PEAC is at version <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>0.10.13</code>; the goal is to earn <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>1.0</code> through multi-implementation, conformance, and standards work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Building CTA */}
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
                Start building
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  marginBottom: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Explore the standard, try the demo, or deploy the reference stack. If you&apos;re integrating at scale, contact us for implementation support and hosted options.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-lg" style={{ background: 'var(--surface-elevated)', color: 'var(--accent-brand)', border: 'none' }}>
                  Get started
                </Link>
                <Link href="/contact" className="btn btn-lg btn-ghost" style={{ color: 'var(--white)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                  Contact
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
