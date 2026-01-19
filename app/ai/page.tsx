import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, CheckCircle, Code, Lock, Zap, GitBranch, Shield, Database } from 'lucide-react'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this another ai.txt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ai.txt/robots.txt are intent signals. Originary AI issues verifiable evidence (PEAC-Receipts) that can be verified offline.'
      }
    },
    {
      '@type': 'Question',
      name: 'Standard, protocol, or product?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PEAC is a protocol + spec we implement. We don\'t replace AIPREF, MCP, or payment rails - we complete them with proof.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I verify receipts without calling you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Receipts are JWS; anyone with your published keys can verify offline.'
      }
    }
  ]
}

export const metadata: Metadata = {
  title: {
    absolute: 'Originary & AI - Agent-native trust with PEAC-Receipts'
  },
  description: 'Build agent-to-agent systems with verifiable interaction records and HTTP 402 flows. Works with A2A, MCP, ACP, and payment adapters.',
  keywords: 'agent-to-agent, A2A, MCP, ACP, ERC-8004, PEAC receipts, HTTP 402, agent trust, cryptographic verification, AIPREF, x402, agentic commerce',
  robots: 'index,follow',
  openGraph: {
    title: 'Originary & AI - Agent-native trust with PEAC-Receipts',
    description: 'Build agent-to-agent systems with verifiable interaction records, preference-aware usage, and HTTP 402 flows. Works with A2A, MCP, and ACP.',
    url: '/ai',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary & AI - Built for agents, not browsers'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary & AI - Agent-native trust',
    description: 'Build agent-to-agent systems with verifiable interaction records, preference-aware usage, and HTTP 402 flows. A2A, MCP, ACP support.',
    images: ['/og'],
    site: '@originaryinc',
    creator: '@originaryinc'
  },
  alternates: {
    canonical: '/ai'
  }
}

export default function OriginaryAIPage() {
  const valuePillars = [
    {
      icon: Lock,
      title: 'Agent-native trust',
      description: 'Responses ship with a signed PEAC-Receipt so downstream agents can verify who did what, when.'
    },
    {
      icon: GitBranch,
      title: 'A2A-ready',
      description: 'Receipts attach to inter-agent messages, enabling zero-trust hand-offs without brittle webhooks.'
    },
    {
      icon: CheckCircle,
      title: 'Preference-aware',
      description: 'We snapshot AIPREF at call time so usage rights are auditable, not "best effort."'
    },
    {
      icon: Zap,
      title: 'Pay-as-you-go rails',
      description: 'Built-in HTTP-402 flows (x402, Stripe) so agents can pay and proceed - no accounts, no PDFs.'
    },
    {
      icon: Shield,
      title: 'Provenance-friendly',
      description: 'Receipts can reference C2PA manifests to keep media and model outputs traceable end-to-end.'
    }
  ]

  const useCases = [
    {
      title: 'Proof-carrying crawlers',
      description: 'Your crawler pays via 402, collects data + receipts, and forwards both to retrievers.'
    },
    {
      title: 'Verifiable purchases',
      description: 'Agents buy datasets/API calls; downstream analytics accept only inputs with valid receipts.'
    },
    {
      title: 'Compliant fine-tuning',
      description: 'Filter corpora by AIPREF in receipts so training jobs don\'t ingest "no-train" content.'
    },
    {
      title: 'B2B agent marketplaces',
      description: 'Sellers require receipts on every consumption event; buyers verify before paying invoices.'
    }
  ]

  return (
    <div className="wrap">
      <Script id="faq-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                color: 'var(--brand-primary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                marginBottom: 'var(--space-6)'
              }}>
                AGENT-FIRST INFRASTRUCTURE
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Originary &amp; AI
              </h1>

              <p style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                lineHeight: 1.4,
                color: 'var(--gray-700)',
                marginBottom: 'var(--space-4)'
              }}>
                Built for agents, not browsers
              </p>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)'
              }}>
                Every agent call emits a verifiable PEAC-Receipt. Agent-to-agent (A2A) messages carry proof, payments, and preferences by default.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-8)'
              }}>
                <Link href="/receipts" className="btn btn-primary btn-lg">
                  <span>See a live receipt</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/developers" className="btn btn-secondary btn-lg">
                  Read the agent guide
                </Link>
              </div>

              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-500)',
                marginBottom: 'var(--space-16)'
              }}>
                Works with A2A networks, MCP tool calls, and HTTP-402 payment rails out of the box. Learn more about{' '}
                <Link
                  href="/integrations/x402/"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline'
                  }}
                >
                  agent-to-agent transactions with x402
                </Link>.
              </div>
            </div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-8)',
                marginBottom: 'var(--space-16)'
              }}>
                {valuePillars.map((pillar, index) => {
                  const IconComponent = pillar.icon
                  return (
                    <div key={index} className="card" style={{ textAlign: 'left' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-4)'
                      }}>
                        <IconComponent size={24} style={{ color: 'var(--brand-primary)' }} />
                      </div>
                      <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-3)',
                        color: 'var(--gray-900)'
                      }}>
                        {pillar.title}
                      </h3>
                      <p style={{
                        color: 'var(--gray-700)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {pillar.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Agent-First Matters */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                Why &ldquo;agent-first&rdquo; matters
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-700)',
                textAlign: 'center',
                marginBottom: 'var(--space-12)'
              }}>
                Most AI pages talk to humans. Originary AI talks to agents.
              </p>
              <div className="card" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-4)'
                }}>
                  Your graph may include solvers, crawlers, planners, retrievers, and buyers - often from different vendors. We make those hops safe by stapling a cryptographic receipt to each hop.
                </p>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-700)',
                  margin: 0
                }}>
                  Any party can verify it offline using your published keys.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-12)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                How it works
              </h2>

              <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
                {[
                  {
                    step: '1',
                    title: 'Challenge/Access (optional)',
                    description: 'If a resource is gated, we answer with HTTP 402 (Payment Required). Agents respond via configured payment adapters.'
                  },
                  {
                    step: '2',
                    title: 'Execute + Snapshot',
                    description: 'We run the call and snapshot effective AI-usage preferences (AIPREF) at that moment.'
                  },
                  {
                    step: '3',
                    title: 'Issue a Receipt',
                    description: 'We sign a compact JWS (PEAC-Receipt) that binds the result, enforcement method, payment evidence, AIPREF snapshot, timestamp, and key id. It travels with the response - and can be forwarded A2A.'
                  }
                ].map((item) => (
                  <div key={item.step} style={{
                    display: 'flex',
                    gap: 'var(--space-6)',
                    padding: 'var(--space-6)',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--gradient-brand)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--gray-900)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: 'var(--gray-700)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* A2A Networks */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                For agent-to-agent (A2A) networks
              </h2>

              <div style={{ display: 'grid', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
                {[
                  {
                    title: 'Attach receipts to messages',
                    description: 'Include the JWS token alongside your payload so the next agent can verify provenance and policy.'
                  },
                  {
                    title: 'Trust decisions become code',
                    description: '"Process only if receipt.valid && receipt.aipref.train_ai == false" is now a one-liner, not a policy memo.'
                  },
                  {
                    title: 'Replay-resistant',
                    description: 'Receipts are content-bound (hashes) and timestamped; tampering breaks verification.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-6)',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)'
                  }}>
                    <CheckCircle size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h3 style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--gray-900)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: 'var(--gray-700)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MCP & Tool Calls */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                For MCP &amp; tool calls
              </h2>

              <div className="card" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
                <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                  {[
                    {
                      title: 'Per-tool receipts',
                      description: 'Wrap every MCP tool invocation with a receipt (tool id, param hash, issued_at).'
                    },
                    {
                      title: 'Privacy-first',
                      description: 'Hash sensitive params; keep the proof, not the secrets.'
                    },
                    {
                      title: 'Drop-in',
                      description: 'Keep your tool schema; we add the proof layer.'
                    }
                  ].map((item, index) => (
                    <div key={index} style={{
                      padding: 'var(--space-4)',
                      background: 'var(--gray-50)',
                      borderRadius: 'var(--radius-md)'
                    }}>
                      <h3 style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--gray-900)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: 'var(--gray-700)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: 'var(--space-6)',
                background: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)'
              }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-4)'
                }}>
                  Learn how to integrate MCP with PEAC-Receipts
                </p>
                <Link href="/docs/mcp/receipts" className="btn btn-primary">
                  View MCP Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Rails */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                Payments that agents understand
              </h2>

              <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
                {[
                  {
                    title: 'x402',
                    description: 'HTTP 402 payment protocol for programmatic settlement.'
                  },
                  {
                    title: 'Stripe',
                    description: 'Classic cards behind 402 challenges for human-in-the-loop agents.'
                  }
                ].map((item, index) => (
                  <div key={index} className="card" style={{ textAlign: 'left' }}>
                    <h3 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 600,
                      marginBottom: 'var(--space-3)',
                      color: 'var(--gray-900)'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: 'var(--gray-700)',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 'var(--space-8)',
                padding: 'var(--space-6)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--gray-700)',
                  margin: 0
                }}>
                  All rails normalize to a single <code style={{
                    background: 'var(--gray-200)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-jetbrains-mono)'
                  }}>payment&#123; rail, amount, currency, evidence &#125;</code> in the receipt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                What you can build
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                textAlign: 'center',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-12)'
              }}>
                Concrete patterns for agent infrastructure
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-6)'
              }}>
                {useCases.map((useCase, index) => (
                  <div key={index} className="card" style={{ textAlign: 'left' }}>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                      marginBottom: 'var(--space-3)',
                      color: 'var(--gray-900)'
                    }}>
                      {useCase.title}
                    </h3>
                    <p style={{
                      color: 'var(--gray-700)',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dev Notes */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                Dev notes
              </h2>

              <div style={{
                background: 'var(--gray-900)',
                color: 'var(--gray-100)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.8
              }}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <strong style={{ color: 'var(--white)' }}>Response header:</strong><br />
                  <code>PEAC-Receipt: &lt;compact JWS&gt;</code>
                </div>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <strong style={{ color: 'var(--white)' }}>Discovery:</strong><br />
                  <code>/.well-known/peac.txt</code>
                </div>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <strong style={{ color: 'var(--white)' }}>Verification:</strong><br />
                  Offline with your keys or POST the token to <code>/verify</code>
                </div>
                <div>
                  <strong style={{ color: 'var(--white)' }}>Streaming:</strong><br />
                  Use HTTP/2 trailers to deliver the receipt at end of stream
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Ship agent-grade trust in a day, not a quarter
              </h2>
              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)'
              }}>
                Every agent step. One verifiable receipt.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/receipts" className="btn btn-primary btn-lg">
                  See a receipt in 30 seconds
                </Link>
                <Link href="/company/contact" className="btn btn-secondary btn-lg">
                  Talk to us about your A2A architecture
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
