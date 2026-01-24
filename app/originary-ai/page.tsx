import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, CheckCircle } from 'lucide-react'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are PEAC-Receipts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PEAC-Receipts are signed, verifiable records of API access, payment, consent, and attribution. Each receipt contains evidence of the transaction terms, payment confirmation, usage scope, and compliance metadata - all in a machine-readable format that AI agents and auditors can verify offline. They work across HTTP 402, x402, MCP, and A2A protocols.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Originary help with AI compliance and provenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary provides AI provenance tracking and AI compliance infrastructure through PEAC-Receipts. Every access generates a signed receipt containing consent flags, attribution data, retention windows, and payment proof. This creates an audit trail for regulatory compliance, proving what data was accessed, by whom, for what purpose, and under what terms - critical for AI governance and agentic commerce transactions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is this the same as originary.ai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Originary is not affiliated with the operators of originary.ai.'
      }
    }
  ]
}

export const metadata: Metadata = {
  title: {
    absolute: 'Originary AI | Receipts for the Agentic Web'
  },
  description: 'Originary issues PEAC-Receipts for AI agents and APIs, proving access, consent, attribution, privacy, and payment across HTTP 402, x402, MCP, and A2A.',
  keywords: 'Originary AI, agentic web, AI receipts, x402, PEAC protocol, agent compliance, agentic commerce, AI consent tracking',
  robots: 'index,follow',
  openGraph: {
    title: 'Originary AI | Receipts for the Agentic Web',
    description: 'Originary issues PEAC-Receipts for AI agents and APIs, proving access, consent, attribution, privacy, and payment across HTTP 402, x402, MCP, and A2A.',
    url: '/originary-ai',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary AI | Receipts for the Agentic Web'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary AI | Receipts for the Agentic Web',
    description: 'Originary issues PEAC-Receipts for AI agents and APIs, proving access, consent, attribution, privacy, and payment across HTTP 402, x402, MCP, and A2A.',
    images: ['/og'],
    site: '@originaryinc',
    creator: '@originaryinc'
  },
  alternates: {
    canonical: '/originary-ai'
  }
}

export default function OriginaryAI() {
  return (
    <div className="wrap">
      <Script id="faq-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Originary<sup>™</sup> for AI
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                Publish peac.txt, settle via configured payment adapters, and present a <strong>Receipt</strong> on every request - verifiable proof of access, consent, attribution, privacy, and payment.
              </p>

              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)'
              }}>
                Use Originary to instrument agentic commerce, AI consent tracking, and AI provenance tracking for every agent-to-agent transaction. Whether you&rsquo;re enabling agentic transactions or building for the automated economy, PEAC-Receipts provide verifiable proof of every interaction.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-16)'
              }}>
                <Link href="/receipts" className="btn btn-primary btn-lg">
                  <span>See a live receipt</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Get started
                </Link>
              </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--text-primary)'
              }}>
                Why Originary vs generic agent frameworks
              </h2>

              <div style={{ display: 'grid', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
                {[
                  {
                    title: 'Not another framework.',
                    description: 'Keep your MCP/A2A tools and orchestrators - Originary adds verifiable Receipts so every access has proof of terms, consent, attribution, privacy, and payment.'
                  },
                  {
                    title: 'Rail-neutral payments.',
                    description: 'Settle via HTTP 402 flows, Stripe, or other configured adapters - no lock-in, same receipt format.'
                  },
                  {
                    title: 'Compliance by construction.',
                    description: 'Receipts encode purposes, retention windows, attribution & consent flags - turn audits into evidence, not meetings.'
                  },
                  {
                    title: 'Drop-in at the edge.',
                    description: 'Enforce at Cloudflare/Vercel/AWS edge with minimal overhead; no app rewrite required.'
                  },
                  {
                    title: 'Interoperable with MCP/A2A.',
                    description: 'Pass a PEAC-Receipt alongside existing tool/resolver calls; verify before data leaves your origin.'
                  },
                  {
                    title: 'Simple, web-native.',
                    description: 'A tiny /.well-known/peac.txt declares your terms; everything else is adapters and a signed receipt.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-6)',
                    background: 'var(--surface-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <CheckCircle size={24} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h3 style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-primary)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'var(--accent-brand)',
                color: 'var(--white)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-12)'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)'
                }}>
                  MCP/A2A Integration
                </h3>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  Add Receipts beside your tools/resolvers, not instead of them - send a PEAC-Receipt with requests; verify at the edge.
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-16)'
              }}>
                <Link href="/receipts" className="btn btn-primary">
                  See a live receipt
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Get started
                </Link>
                <Link href="/pricing" className="btn btn-ghost">
                  Pricing
                </Link>
              </div>

              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <h3 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Works with
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 'var(--space-6)',
                  opacity: 0.8
                }}>
                  {['MCP', 'A2A', 'x402', 'Stripe', 'Cloudflare', 'Vercel'].map((tech) => (
                    <span key={tech} style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--text-secondary)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)', background: 'var(--surface-elevated)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--text-primary)'
              }}>
                Frequently Asked Questions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="card">
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    What are PEAC-Receipts?
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    PEAC-Receipts are signed, verifiable records of API access, payment, consent, and attribution. Each receipt contains evidence of the transaction terms, payment confirmation, usage scope, and compliance metadata - all in a machine-readable format that AI agents and auditors can verify offline. They work across HTTP 402, x402, MCP, and A2A protocols.
                  </p>
                </div>

                <div className="card">
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    How does Originary help with AI compliance and provenance?
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    Originary provides AI provenance tracking and AI compliance infrastructure through PEAC-Receipts. Every access generates a signed receipt containing consent flags, attribution data, retention windows, and payment proof. This creates an audit trail for regulatory compliance, proving what data was accessed, by whom, for what purpose, and under what terms - critical for AI governance and agentic commerce transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{
          padding: 'var(--space-8) 0',
          background: 'var(--surface-subtle)',
          borderTop: '1px solid var(--border-default)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-tertiary)',
                lineHeight: 1.6
              }}>
                No affiliation with other businesses using similar names.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}