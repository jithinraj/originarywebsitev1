import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight, Code, DollarSign, Shield, Zap, Clock, CreditCard, Receipt, CheckCircle, AlertCircle, Bot, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: "What is HTTP 402? How PEAC Uses 402 for Agent Payments",
  description: "HTTP 402 Payment Required is reserved for digital payments. Learn how PEAC uses 402 for AI access control and receipts.",
  keywords: "HTTP 402, Payment Required, x402, agent payments, AI Access, PEAC Protocol, API monetization, web payments, agentic web",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/what-is-http-402' },
  openGraph: {
    title: "What is HTTP 402? How PEAC Uses 402 for Agent Payments",
    description: "HTTP 402 Payment Required explained: history, why it matters now, and how PEAC Protocol uses it for agent payments",
    type: "article",
    url: "/blog/what-is-http-402/",
    publishedTime: "2025-12-03",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "What is HTTP 402? How PEAC Uses 402 for Agent Payments",
    description: "HTTP 402 Payment Required explained: history and practical implementation with PEAC",
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
    "headline": "What is HTTP 402? How PEAC Uses 402 for Agent Payments",
    "description": "HTTP 402 Payment Required is an HTTP status code reserved for digital payments. Learn how PEAC Protocol activates 402 for agent payments and receipts.",
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
    "mainEntityOfPage": "https://www.originary.xyz/blog/what-is-http-402/",
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
              <span style={{ color: 'var(--text-primary)' }}>What is HTTP 402?</span>
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
                <FileText size={14} />
                EXPLAINER
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                What is HTTP 402?
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                HTTP 402 Payment Required was defined in 1997 and reserved for future digital payments. After decades dormant, it is now being activated for AI agent commerce and machine-payable APIs.
              </p>
            </header>

            {/* Article Content */}
            <div className="article-content" style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--text-secondary)'
            }}>

              {/* Timeline Visual */}
              <div style={{
                background: 'linear-gradient(135deg, var(--accent-brand-faint), var(--accent-secondary-faint))',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-12)',
                border: '1px solid var(--accent-brand-subtle)'
              }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Clock size={24} style={{ color: 'var(--accent-brand)' }} />
                  The History of HTTP 402
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--accent-brand)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>1997</div>
                    <p style={{ margin: 0 }}>HTTP 402 defined in RFC 2068, marked as &ldquo;reserved for future use&rdquo; for digital payments</p>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--text-muted)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>1997-2023</div>
                    <p style={{ margin: 0 }}>Status code sits unused while web payments evolve through separate channels</p>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--success)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>2024+</div>
                    <p style={{ margin: 0 }}>AI agents need machine-readable payment signals, HTTP 402 finally activated</p>
                  </div>
                </div>
              </div>

              {/* Why It Matters Now */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Bot size={28} style={{ color: 'var(--accent-brand)' }} />
                Why HTTP 402 Matters Now
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                The rise of AI agents changes everything. Unlike human users who can navigate payment forms, AI agents need machine-readable payment signals.
              </p>

              {/* Feature Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                <div style={{
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <AlertCircle size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                  <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>Clear Signal</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>HTTP 402 unambiguously signals &ldquo;payment required&rdquo;</p>
                </div>
                <div style={{
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <CreditCard size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                  <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>Payment Instructions</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>Structured data: what to pay, how much, where</p>
                </div>
                <div style={{
                  padding: 'var(--space-5)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <Receipt size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
                  <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>Proof of Payment</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>Receipt proving payment occurred</p>
                </div>
              </div>

              {/* How PEAC Uses 402 */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Shield size={28} style={{ color: 'var(--accent-brand)' }} />
                How PEAC Uses HTTP 402
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                PEAC Protocol builds on HTTP 402 with additional structure for AI access control, payments, and receipts. When a PEAC-enabled endpoint receives a request without valid payment:
              </p>

              {/* Code Block with Header */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <div style={{
                  background: 'var(--text-primary)',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                  padding: 'var(--space-3) var(--space-4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <Code size={16} style={{ color: 'var(--text-muted)' }} />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Example 402 Response</span>
                </div>
                <div style={{
                  background: 'var(--text-primary)',
                  borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                  padding: 'var(--space-6)',
                  overflow: 'auto'
                }}>
                  <pre style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--surface-card)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "type": "payment_required",
  "message": "Access requires payment",
  "payment": {
    "amount": "0.01",
    "currency": "USD",
    "methods": ["x402", "stripe"]
  },
  "policy_url": "https://example.com/.well-known/peac.txt"
}`}
                  </pre>
                </div>
              </div>

              {/* Response Fields Table */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-default)',
                overflow: 'hidden',
                marginBottom: 'var(--space-8)'
              }}>
                <div style={{
                  background: 'var(--surface-subtle)',
                  padding: 'var(--space-4)',
                  borderBottom: '1px solid var(--border-default)',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}>
                  Response Fields
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', fontSize: 'var(--text-sm)' }}>
                  <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: 'var(--text-primary)' }}>Payment methods</div>
                  <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>x402 for crypto, Stripe for fiat</div>
                  <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: 'var(--text-primary)' }}>Amount & currency</div>
                  <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>Clear pricing in machine-readable format</div>
                  <div style={{ padding: 'var(--space-4)', fontWeight: 600, color: 'var(--text-primary)' }}>AI policy URL</div>
                  <div style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Link to crawling policy and usage terms</div>
                </div>
              </div>

              {/* x402 Extension */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <DollarSign size={28} style={{ color: 'var(--accent-brand)' }} />
                x402: The Payment Extension
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                x402 is an extension that adds structured payment descriptions to HTTP 402 responses. It works with PEAC to provide:
              </p>
              <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Payment negotiation</strong> - agents can query acceptable payment methods</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Receipt return</strong> - successful payments return PEAC-Receipts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Verification</strong> - receipts can be verified at the domain&apos;s verify endpoint</span>
                </div>
              </div>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                See the <Link href="/integrations/x402" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>x402 integration guide</Link> for implementation details.
              </p>

              {/* Testing Section */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Zap size={28} style={{ color: 'var(--accent-brand)' }} />
                Testing HTTP 402
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                You can test a PEAC-enabled 402 endpoint with curl:
              </p>
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  background: 'var(--text-primary)',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                  padding: 'var(--space-3) var(--space-4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <Code size={16} style={{ color: 'var(--text-muted)' }} />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Terminal</span>
                </div>
                <div style={{
                  background: 'var(--text-primary)',
                  borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                  padding: 'var(--space-6)',
                  overflow: 'auto'
                }}>
                  <pre style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--surface-card)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}>
{`curl -i https://demo.originary.xyz/api/gated

# Response:
# HTTP/2 402
# content-type: application/json`}
                  </pre>
                </div>
              </div>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Try the <Link href="/verify" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>interactive demo</Link> to see 402 flows in action.
              </p>

              {/* Beyond Payments */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Lock size={28} style={{ color: 'var(--accent-brand)' }} />
                Beyond Payments: Access Control
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                HTTP 402 in PEAC isn&apos;t only about money. It can gate access based on:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <Bot size={20} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>AI Bot Policy</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Require agents to comply with crawling policy</p>
                </div>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <FileText size={20} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Attribution</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Require agreement to attribution terms</p>
                </div>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Consent</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Proof of user consent for training use</p>
                </div>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)'
                }}>
                  <Zap size={20} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }} />
                  <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Rate Limiting</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>Premium access for paying agents</p>
                </div>
              </div>

              {/* Getting Started Steps */}
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginTop: 'var(--space-12)', marginBottom: 'var(--space-6)' }}>
                Getting Started
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
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
                  }}>1</div>
                  <div>
                    <strong>Define your AI access policy</strong> with <Link href="/declare" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Originary Declare</Link>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
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
                  }}>2</div>
                  <div><strong>Add 402 responses</strong> to your API endpoints</div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
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
                  }}>3</div>
                  <div><strong>Integrate x402 or Stripe</strong> for payment processing</div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
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
                  }}>4</div>
                  <div><strong>Return PEAC-Receipts</strong> on successful payment</div>
                </div>
              </div>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                See <Link href="/blog/adding-402-in-15-minutes" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Adding 402 in 15 Minutes</Link> for a step-by-step guide.
              </p>

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
                  <Link href="/integrations/x402" style={{
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
                    <span>x402 Integration Guide</span>
                    <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                  </Link>
                  <Link href="/blog/http-402-for-apis" style={{
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
                    <Code size={20} style={{ color: 'var(--accent-brand)' }} />
                    <span>HTTP 402 for APIs: Technical Deep Dive</span>
                    <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                  </Link>
                  <Link href="/peac" style={{
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
                    <Shield size={20} style={{ color: 'var(--accent-brand)' }} />
                    <span>PEAC Protocol Overview</span>
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
