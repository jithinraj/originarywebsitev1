import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Shield, FileText, CheckCircle, Code, Globe, Users, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Originary? AI Receipts & Policy',
  description: 'Originary builds PEAC Protocol - cryptographic receipts proving what happened in agent interactions. Policy discovery and verification tools.',
  keywords: 'Originary, PEAC Protocol, verifiable receipts, PEAC-Receipt, peac.txt, agent policy, agentic web, HTTP 402, cryptographic receipts, policy discovery, agent compliance',
  robots: 'index,follow',
  alternates: {
    canonical: '/what-is-originary'
  },
  openGraph: {
    title: 'What is Originary? AI Receipts & Policy',
    description: 'Originary builds PEAC Protocol - cryptographic receipts proving what happened in agent interactions.',
    url: 'https://www.originary.xyz/what-is-originary',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Originary? AI Receipts & Policy',
    description: 'Originary builds PEAC Protocol - cryptographic receipts for agent interactions.',
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
    "description": "Originary builds infrastructure and tools for AI agents. Originary builds and maintains PEAC Protocol, an open protocol for cryptographically signed receipts.",
    "sameAs": [
      "https://x.com/originaryx",
      "https://www.linkedin.com/company/originary",
      "https://github.com/originaryx",
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
    "description": "Receipts and policy infrastructure for the agentic web.",
    "publisher": {
      "@type": "Organization",
      "name": "Originary"
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
          "text": "No. Rails settle funds; receipts provide portable proof that settlement and policy conditions were met."
        }
      },
      {
        "@type": "Question",
        "name": "Is PEAC-Receipt the standard HTTP header name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PEAC-Receipt is the only canonical header name (no X- alias)."
        }
      },
      {
        "@type": "Question",
        "name": "Is PEAC stable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The wire format is peac.receipt/0.9 during the current development train; 1.0 is intended to be earned after multi-implementation and standards work."
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
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--brand-primary)'
                }}
              >
                <Shield size={16} />
                <span>Verifiable receipts for the agentic web</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em'
              }}>
                <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--gray-500)', marginBottom: 'var(--space-2)', fontWeight: 600, letterSpacing: '0.05em' }}>ORIGINARY™</span>
                What is <span className="text-gradient">Originary?</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-10)',
                  maxWidth: '750px',
                  margin: '0 auto var(--space-10) auto'
                }}
              >
                Originary builds infrastructure and tools for AI agents. Originary builds and maintains <strong>PEAC Protocol</strong>, an open protocol for <strong>cryptographically signed receipts</strong> that prove what happened in an agent interaction: what was accessed, under which policy, and what evidence exists for payment and compliance.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/demo" className="btn btn-primary btn-lg">
                  See it in action
                </Link>
                <Link href="/peac" className="btn btn-secondary btn-lg">
                  Read the spec
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PEAC Works Across Environments */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-8)'
                }}
              >
                PEAC is designed to work across many environments:
              </p>

              <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
                <div className="card">
                  <Globe size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Policy surfaces
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Like <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>/.well-known/peac.txt</code> that declare terms for agent access
                  </p>
                </div>

                <div className="card">
                  <Shield size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Receipts
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Portable and offline-verifiable, carried in HTTP as <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>PEAC-Receipt</code>
                  </p>
                </div>

                <div className="card">
                  <Code size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Payment rails
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    x402, Stripe, Lightning, and others that handle settlement, while receipts prove outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
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
                The problem Originary is solving
              </h2>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-8)'
                }}
              >
                The web has clear primitives for humans. Agentic systems need clear primitives for:
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
                      Policy discovery
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                      What is allowed, what requires attribution, when receipts are required
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
                      Proof
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                      A signed, verifiable record that can be audited later
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
                      Interoperability across rails and agent protocols
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                      Without hardcoding vendor identities into the core standard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Originary Works */}
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
              How Originary works
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-16)',
                maxWidth: '600px',
                margin: '0 auto var(--space-16) auto'
              }}
            >
              Three building blocks for the agentic web
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
                  PEAC receipts (portable proof)
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  A PEAC receipt is a signed artifact (JWS) that can be verified independently.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                  In HTTP contexts, the canonical header name is <strong style={{ color: 'var(--gray-700)' }}>PEAC-Receipt</strong>.
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
                  A web policy surface (peac.txt)
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Web-facing services can publish machine-readable terms at:
                </p>
                <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.8, paddingLeft: 'var(--space-4)', margin: 0 }}>
                  <li><code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>/.well-known/peac.txt</code> (recommended)</li>
                  <li><code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>/peac.txt</code> (fallback)</li>
                </ul>
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
                  Verification tooling
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  PEAC ships reference implementations and tools to issue and verify receipts.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                  Including a verification server exposing <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>/verify</code>.
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
                marginBottom: 'var(--space-16)',
                color: 'var(--gray-900)'
              }}
            >
              Who this is for
            </h2>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card">
                <Users size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  API providers and SaaS platforms
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  That want auditable agent access
                </p>
              </div>

              <div className="card">
                <FileText size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Content and data publishers
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Who need machine-readable terms and proof of compliant use
                </p>
              </div>

              <div className="card">
                <Code size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Agent developers
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Who need receipts that work across multiple settlement rails
                </p>
              </div>

              <div className="card">
                <Shield size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Compliance and security teams
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  That need evidence trails (not screenshots)
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
                  marginBottom: 'var(--space-6)'
                }}
              >
                PEAC Protocol is Apache-2.0 and stewarded by contributors from Originary and the community.
                The protocol&apos;s design emphasizes vendor-neutral core semantics and extensions via adapters.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/peac" className="btn btn-secondary">
                  Learn about PEAC Protocol
                </Link>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Name Disambiguation */}
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
                Originary vs other uses of &ldquo;Originary&rdquo;
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  margin: 0
                }}
              >
                Originary.xyz is the official site for Originary (the team contributing to PEAC Protocol).
                It is not affiliated with unrelated projects or companies using similar names.
              </p>
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
                    No. Rails settle funds; receipts provide portable proof that settlement and policy conditions were met.
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
                    Is <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>PEAC-Receipt</code> the standard HTTP header name?
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                    Yes. <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>PEAC-Receipt</code> is the only canonical header name (no <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>X-</code> alias).
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
                    The wire format is <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>peac.receipt/0.9</code> during the current development train;{' '}
                    <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>1.0</code> is intended to be earned after multi-implementation and standards work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Ready to get started?
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  marginBottom: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Try the demo, read the spec, or deploy your own PEAC-enabled services.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/demo" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}>
                  View Demo
                </Link>
                <Link href="/developers" className="btn btn-lg btn-ghost" style={{ color: 'var(--white)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                  Developer Docs
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
