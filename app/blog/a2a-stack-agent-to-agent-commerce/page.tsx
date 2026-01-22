import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight, Bot, DollarSign, Shield, Receipt, CheckCircle, AlertTriangle, Layers, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: "The A2A Stack: Agent-to-Agent Commerce",
  description: "How AI agents coordinate, transact, and verify interactions. The A2A stack covers policy discovery, HTTP 402 payments, and PEAC-Receipts.",
  keywords: "A2A, agent-to-agent, agent commerce, AI coordination, PEAC Protocol, HTTP 402, agent receipts, MCP, ACP, agentic web, autonomous agents",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/a2a-stack-agent-to-agent-commerce' },
  openGraph: {
    title: "The A2A Stack: Agent-to-Agent Commerce",
    description: "How AI agents coordinate, transact, and verify interactions using PEAC Protocol",
    type: "article",
    url: "/blog/a2a-stack-agent-to-agent-commerce/",
    publishedTime: "2025-12-03",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "The A2A Stack: Agent-to-Agent Commerce",
    description: "How AI agents coordinate, transact, and verify interactions",
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "The A2A Stack: Agent-to-Agent Commerce",
    "description": "How AI agents coordinate, transact, and verify interactions with each other using PEAC Protocol, HTTP 402, and verifiable receipts.",
    "author": {
      "@type": "Organization",
      "name": "Originary",
      "url": "https://www.originary.xyz"
    },
    "datePublished": "2025-12-03",
    "dateModified": "2025-12-03",
    "publisher": {
      "@type": "Organization",
      "name": "Originary",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/logo.svg"
      }
    },
    "mainEntityOfPage": "https://www.originary.xyz/blog/a2a-stack-agent-to-agent-commerce/",
    "image": "https://www.originary.xyz/og.jpg"
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }} id="main-content">
        <article>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
            {/* Breadcrumbs */}
            <nav style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)'
            }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <span style={{ color: 'var(--text-primary)' }}>A2A Stack</span>
            </nav>

            {/* Article Header */}
            <header style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-brand)',
                marginBottom: 'var(--space-6)'
              }}>
                <Bot size={14} />
                VISION
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                The A2A Stack: Agent-to-Agent Commerce
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                Agents calling agents, paying for API access, and verifying each other&apos;s outputs. This is agent-to-agent commerce, and it needs new infrastructure.
              </p>
            </header>

            {/* Article Content */}
            <div className="article-content" style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--text-secondary)'
            }}>

              {/* Problem Statement */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(251, 146, 60, 0.05))',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-12)',
                border: '1px solid rgba(239, 68, 68, 0.1)'
              }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <AlertTriangle size={24} style={{ color: 'var(--error)' }} />
                  The Problem: Agents Can&apos;t Coordinate
                </h2>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  AI agents are already calling APIs, browsing websites, and executing code. But when Agent A needs to use Agent B&apos;s service, fundamental questions arise:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--error)', fontWeight: 700 }}>?</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>How to discover AI policy and pricing?</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--error)', fontWeight: 700 }}>?</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>How to pay without human intervention?</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--error)', fontWeight: 700 }}>?</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>How to verify work was performed?</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--error)', fontWeight: 700 }}>?</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>How to maintain audit trails?</span>
                  </div>
                </div>
              </div>

              {/* The A2A Stack */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Layers size={28} style={{ color: 'var(--accent-brand)' }} />
                The A2A Stack
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                The A2A (Agent-to-Agent) stack describes the layers needed for autonomous agent commerce. Each layer addresses a specific coordination problem:
              </p>

              {/* Stack Layers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--accent-brand)',
                  boxShadow: '0 4px 6px -1px var(--accent-brand-subtle)'
                }}>
                  <div style={{
                    background: 'var(--accent-brand)',
                    color: 'white',
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px'
                  }}>
                    <Shield size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-brand)' }}>LAYER 1</span>
                    </div>
                    <strong style={{ color: 'var(--text-primary)' }}>AI Policy Discovery</strong>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      Agents discover bot policy, crawling rules, and terms at <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px', fontSize: 'var(--text-xs)' }}>/.well-known/peac.txt</code>
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <div style={{
                    background: 'var(--accent-brand-subtle)',
                    color: 'var(--accent-brand)',
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px'
                  }}>
                    <DollarSign size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-tertiary)' }}>LAYER 2</span>
                    </div>
                    <strong style={{ color: 'var(--text-primary)' }}>Access Control (HTTP 402)</strong>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      Gated endpoints return 402 with payment instructions (x402, Stripe)
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <div style={{
                    background: 'var(--accent-brand-subtle)',
                    color: 'var(--accent-brand)',
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px'
                  }}>
                    <Receipt size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-tertiary)' }}>LAYER 3</span>
                    </div>
                    <strong style={{ color: 'var(--text-primary)' }}>Receipts (PEAC-Receipts)</strong>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      Every transaction returns a signed, verifiable receipt as proof
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <div style={{
                    background: 'var(--accent-brand-subtle)',
                    color: 'var(--accent-brand)',
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px'
                  }}>
                    <Eye size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-tertiary)' }}>LAYER 4</span>
                    </div>
                    <strong style={{ color: 'var(--text-primary)' }}>Provenance</strong>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      Chain of receipts + C2PA creates auditable lineage for compliance
                    </p>
                  </div>
                </div>
              </div>

              {/* Transaction Flow */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)' }}>
                An A2A Transaction Flow
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Here&apos;s how a complete agent-to-agent transaction works with PEAC:
              </p>

              {/* Flow Steps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                {[
                  { num: 1, title: 'Policy check', desc: 'Agent A fetches /.well-known/peac.txt to discover crawling policy and payment options' },
                  { num: 2, title: 'Access request', desc: 'Agent A calls Agent B\'s API endpoint' },
                  { num: 3, title: '402 response', desc: 'Agent B returns HTTP 402 with payment details' },
                  { num: 4, title: 'Payment', desc: 'Agent A pays via configured method (x402/Stripe)' },
                  { num: 5, title: 'Receipt', desc: 'Agent B processes request and returns PEAC-Receipt in headers' },
                  { num: 6, title: 'Verification', desc: 'Agent A or operator verifies receipt at verify endpoint' }
                ].map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--accent-brand)',
                      color: 'white',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>{step.num}</div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>{step.title}:</strong> {step.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Receipts Matter */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Receipt size={28} style={{ color: 'var(--accent-brand)' }} />
                Why Receipts Matter
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                In human-to-business transactions, receipts are obvious: email confirmations, PDF invoices, bank statements. Agent-to-agent transactions need the same thing, but machine-readable.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Proof of Service</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Cryptographic evidence of work performed</p>
                </div>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Audit Trail</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Operators review agent spending</p>
                </div>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Dispute Resolution</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Shows exactly what was delivered</p>
                </div>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Compliance</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Bundled for regulatory reporting</p>
                </div>
              </div>

              {/* What's Shipping */}
              <div style={{
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-8)',
                border: '1px solid var(--border-default)'
              }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
                  What&apos;s Shipping vs. Planned
                </h3>
                <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <span style={{
                      background: 'var(--success)',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>SHIPPING</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>AI policy discovery, HTTP 402 patterns, PEAC-Receipt format, x402/Stripe integration</span>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <span style={{
                      background: 'var(--accent-brand)',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>IN DEV</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>MCP tool bindings, ACP integration, automated agent wallet management</span>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <span style={{
                      background: 'var(--text-muted)',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>PLANNED</span>
                    <span style={{ fontSize: 'var(--text-sm)' }}>Multi-agent receipt chains, provenance dashboards, compliance bundle exports</span>
                  </div>
                </div>
              </div>

              {/* Getting Started */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)' }}>
                Getting Started
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                If you&apos;re building agent infrastructure:
              </p>
              <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Start with <Link href="/declare" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Originary Declare</Link> to publish your AI access policy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Add HTTP 402 to paid endpoints - see <Link href="/blog/what-is-http-402" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>What is HTTP 402?</Link></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Return PEAC-Receipts from your API responses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Use the <Link href="/products/verify" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Verify API</Link> for receipt verification</span>
                </div>
              </div>

              {/* Related Content */}
              <div style={{
                marginTop: 'var(--space-16)',
                padding: 'var(--space-8)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-default)'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-4)'
                }}>
                  Related Resources
                </h3>
                <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                  <Link href="/blog/what-is-http-402" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: 'var(--space-3)',
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <DollarSign size={20} style={{ color: 'var(--accent-brand)' }} />
                    <span>What is HTTP 402?</span>
                    <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                  </Link>
                  <Link href="/integrations/a2a" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: 'var(--space-3)',
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <Bot size={20} style={{ color: 'var(--accent-brand)' }} />
                    <span>A2A Integration Guide</span>
                    <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                  </Link>
                  <Link href="/receipts" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: 'var(--space-3)',
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <Receipt size={20} style={{ color: 'var(--accent-brand)' }} />
                    <span>PEAC-Receipts Overview</span>
                    <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
