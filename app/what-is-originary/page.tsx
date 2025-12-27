import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Shield, FileText, CheckCircle, Code, Globe, Users, HelpCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Originary? | Open system of record for agent interactions',
  description: 'Originary (Poem, Inc.) builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.',
  keywords: 'Originary, PEAC Protocol, verifiable receipts, PEAC-Receipt, peac.txt, agent policy, agentic web, HTTP 402, cryptographic receipts, policy discovery, agent compliance, system of record',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/what-is-originary'
  },
  openGraph: {
    title: 'What is Originary? | Open system of record for agent interactions',
    description: 'Originary (Poem, Inc.) builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.',
    url: 'https://www.originary.xyz/what-is-originary',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Originary? | Open system of record for agent interactions',
    description: 'Originary builds and stewards PEAC, an open standard for publishing terms and issuing verifiable records for agent interactions.',
    images: ['https://www.originary.xyz/og.jpg'],
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
    "logo": "https://www.originary.xyz/logo.png",
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
    "description": "Open system of record for agent interactions. Publish terms, enforce decisions, and return verifiable receipts.",
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
          "text": "PEAC is in an active 0.9.x development line; the goal is to earn 1.0 through multi-implementation, conformance, and standards work."
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
                color: 'var(--gray-900)'
              }}>
                What is <span className="text-gradient">Originary?</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-4)',
                  maxWidth: '800px',
                  margin: '0 auto var(--space-4) auto'
                }}
              >
                Originary builds and stewards <strong>PEAC</strong>: an open standard for publishing terms and issuing verifiable records for agent interactions.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-500)',
                  marginBottom: 'var(--space-10)',
                  maxWidth: '750px',
                  margin: '0 auto var(--space-10) auto'
                }}
              >
                It helps the open internet support agents and services without gatekeepers, lock-in, or centralized control.
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
                  color: 'var(--gray-500)',
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
                  color: 'var(--gray-900)'
                }}
              >
                The problem
              </h2>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                As agents begin to act on the web, the missing primitive is not intelligence, but <strong>accountability</strong>: clear terms, enforceable decisions, and durable evidence of what happened.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Without a portable record, compliance becomes screenshots, and disputes become opinions.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  margin: 0
                }}
              >
                Originary exists to make interactions <strong>inspectable</strong>, <strong>auditable</strong>, and <strong>interoperable</strong> by default.
              </p>
            </div>
          </div>
        </section>

        {/* What Originary Does */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}
              >
                What Originary does
              </h2>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-8)'
                }}
              >
                Originary maintains the reference standard and production tooling for turning interaction decisions into verifiable records. You can publish terms, enforce them in real systems, and verify outcomes independently.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)'
                  }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                      Publish terms
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                      With a machine-readable policy surface (recommended: <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>/.well-known/peac.txt</code>)
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)'
                  }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                      Enforce decisions
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
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
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)'
                  }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                      Return a record
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                      As a signed receipt (<code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>PEAC-Receipt</code>) that can be verified offline and stored as evidence
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
                color: 'var(--gray-900)'
              }}
            >
              How PEAC makes records portable
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
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
                color: 'var(--gray-600)',
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
                  border: '2px solid var(--gray-200)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'var(--brand-primary)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-4)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)'
                  }}
                >
                  1
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Policy surface (<code style={{ fontWeight: 400, fontSize: '0.85em' }}>peac.txt</code>)
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                  Publish terms in one place so agents and services can discover requirements before access.
                </p>
              </div>

              <div
                className="card"
                style={{
                  textAlign: 'left',
                  padding: 'var(--space-8)',
                  border: '2px solid var(--gray-200)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'var(--brand-primary)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-4)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)'
                  }}
                >
                  2
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Receipt format (<code style={{ fontWeight: 400, fontSize: '0.85em' }}>PEAC-Receipt</code>)
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                  Return a signed record with stable claims for what occurred, under which terms, and with what authorization evidence.
                </p>
              </div>

              <div
                className="card"
                style={{
                  textAlign: 'left',
                  padding: 'var(--space-8)',
                  border: '2px solid var(--gray-200)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'var(--brand-primary)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-4)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)'
                  }}
                >
                  3
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Verification &amp; conformance
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                  Verify receipts offline or via a verification endpoint, and validate policy conformance to reduce ambiguity in audits and disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
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
              Who this is for
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
              PEAC and Originary are built for teams that need interaction evidence to be durable and verifiable across environments.
            </p>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card">
                <Globe size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  APIs and SaaS platforms
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Prove access decisions and delivery outcomes
                </p>
              </div>

              <div className="card">
                <FileText size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Publishers and data providers
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Publish clear terms and require verifiable compliance
                </p>
              </div>

              <div className="card">
                <Code size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Agent developers
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Rely on a portable receipt that works across rails and environments
                </p>
              </div>

              <div className="card">
                <Shield size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Security, compliance, and policy teams
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
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
                  color: 'var(--gray-900)'
                }}
              >
                Originary and PEAC Protocol
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                PEAC Protocol is open source and designed for independent implementations.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
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
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gray-200)'
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--gray-900)'
                }}
              >
                Name and affiliation
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-3)'
                }}
              >
                Originary is a brand of Poem, Inc. In the U.S., Poem, Inc. is not affiliated with other organizations using similar names.
              </p>
              <Link
                href="/legal/imprint"
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Imprint / Legal
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                <HelpCircle size={28} style={{ color: 'var(--brand-primary)' }} />
                <h2
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--gray-900)',
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
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    Do receipts replace payment rails?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
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
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    Is <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>PEAC-Receipt</code> the canonical HTTP header name?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                    Yes. <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>PEAC-Receipt</code> is the canonical receipt header for PEAC.
                  </p>
                </div>

                <div
                  className="card"
                  style={{
                    textAlign: 'left',
                    padding: 'var(--space-6)'
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    Does verification require Originary?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
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
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    Is PEAC stable?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                    PEAC is in an active <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>0.9.x</code> development line; the goal is to earn <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>1.0</code> through multi-implementation, conformance, and standards work.
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
                <Link href="/developers" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}>
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
