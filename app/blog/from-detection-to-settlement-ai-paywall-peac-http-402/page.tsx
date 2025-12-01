import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight, Zap, Shield, CreditCard, FileCheck, List, CheckCircle2, AlertTriangle, DollarSign, Lock, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: "From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance · Originary",
  description: "How Originary & PEAC turns AI bot detection into an AI paywall using HTTP 402, L402, x402 and Stripe, with signed receipts for billing, audit and compliance.",
  keywords: "AI paywall, HTTP 402, L402, x402, Stripe, PEAC receipts, AI payments, AI bot detection, AI monetization, machine payments",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/from-detection-to-settlement-ai-paywall-peac-http-402' },
  openGraph: {
    title: "From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance",
    description: "How Originary & PEAC turns AI bot detection into an AI paywall using HTTP 402, L402, x402 and Stripe, with signed receipts for billing, audit and compliance.",
    type: "article",
    url: "https://www.originary.xyz/blog/from-detection-to-settlement-ai-paywall-peac-http-402/",
    publishedTime: "2025-12-01",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance",
    description: "How Originary & PEAC turns AI bot detection into an AI paywall using HTTP 402, L402, x402 and Stripe, with signed receipts for billing, audit and compliance.",
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance",
    "description": "How Originary & PEAC turns AI bot detection into an AI paywall using HTTP 402, L402, x402 and Stripe, with signed receipts for billing, audit and compliance.",
    "author": {
      "@type": "Organization",
      "name": "Originary™",
      "url": "https://www.originary.xyz"
    },
    "datePublished": "2025-12-01",
    "dateModified": "2025-12-01",
    "publisher": {
      "@type": "Organization",
      "name": "Originary™",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/og/originary-logo.png"
      }
    },
    "mainEntityOfPage": "https://www.originary.xyz/blog/from-detection-to-settlement-ai-paywall-peac-http-402/",
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
          {/* Hero Header */}
          <div style={{ background: 'linear-gradient(180deg, rgba(99,91,255,0.03) 0%, transparent 100%)', borderBottom: '1px solid var(--gray-100)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-12) var(--space-6) var(--space-16)' }}>
              {/* Breadcrumbs */}
              <nav style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-500)',
                marginBottom: 'var(--space-8)'
              }}>
                <Link href="/" style={{ color: 'var(--gray-500)', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 var(--space-2)' }}>/</span>
                <Link href="/blog" style={{ color: 'var(--gray-500)', textDecoration: 'none' }}>Blog</Link>
                <span style={{ margin: '0 var(--space-2)' }}>/</span>
                <span style={{ color: 'var(--gray-700)' }}>From Detection To Settlement</span>
              </nav>

              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                marginBottom: 'var(--space-6)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <FileText size={12} />
                Technical Deep Dive
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-8)',
                maxWidth: '650px'
              }}>
                How Originary and PEAC Protocol turn AI bot detection into an AI paywall using HTTP 402, L402, x402 and Stripe - with signed receipts for billing, audit and compliance.
              </p>

              {/* Meta */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-500)',
                flexWrap: 'wrap'
              }}>
                <span style={{ fontWeight: 500, color: 'var(--gray-700)' }}>Jithin Raj & Originary Team</span>
                <span style={{ color: 'var(--gray-300)' }}>|</span>
                <span>18 min read</span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <div style={{
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              marginTop: 'calc(-1 * var(--space-8))',
              marginBottom: 'var(--space-12)',
              border: '1px solid var(--gray-200)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <List size={16} style={{ color: 'var(--brand-primary)' }} />
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>In This Article</span>
              </div>
              <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
                {[
                  { num: '1', title: 'From "is this a bot" to "this bot paid under these terms"' },
                  { num: '2', title: 'HTTP 402 and the rise of the AI paywall' },
                  { num: '3', title: 'The PEAC flow: from detection to 402 to receipt' },
                  { num: '4', title: 'Concrete flows across L402, x402, and Stripe' },
                  { num: '5', title: 'What actually ends up in a PEAC-Receipt' },
                  { num: '6', title: 'How this ties back to our roadmap and vision' },
                ].map((item) => (
                  <div key={item.num} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--brand-primary)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      flexShrink: 0
                    }}>{item.num}</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <div style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.9,
              color: 'var(--gray-700)'
            }}>
              {/* Introduction */}
              <section style={{ marginBottom: 'var(--space-16)' }}>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)', color: 'var(--gray-800)' }}>
                  AI agents can now read, write, call APIs and act on our behalf. The one thing they could not do for a long time was <strong>pay for what they use</strong>.
                </p>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  That gap is closing fast. New payment standards built on <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402 Payment Required</a>, like L402 and x402, are turning APIs and web resources into machine readable paywalls that AI agents can clear automatically.
                </p>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(99,91,255,0.08) 0%, rgba(0,212,170,0.08) 100%)',
                  borderLeft: '4px solid var(--brand-primary)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-8)'
                }}>
                  <p style={{ margin: 0, color: 'var(--gray-800)', fontSize: 'var(--text-base)' }}>
                    At Originary, <Link href="/integrations/acp/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>PEAC Protocol</Link> is our answer to the next step in that story:
                  </p>
                  <ul style={{ margin: 'var(--space-4) 0 0 0', paddingLeft: 'var(--space-5)' }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>You detect AI bot traffic</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>You apply an AI paywall with HTTP 402</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>You settle payments over L402, x402, or Stripe</li>
                    <li>You get a signed PEAC-Receipt for every access event, ready for billing, audit and disputes</li>
                  </ul>
                </div>
              </section>

              {/* Section 1 */}
              <section style={{ marginBottom: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>1</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    From &ldquo;is this a bot&rdquo; to &ldquo;this bot paid under these terms&rdquo;
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  In the <Link href="/blog/ai-bot-detection/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>previous piece on AI bot detection</Link> we focused on visibility: spotting AI agents in your traffic, using metadata, fingerprints, and access logs to understand who is calling you and why.
                </p>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  That is necessary, but not sufficient. If you are a publisher, API provider, SaaS platform, or data owner, the key questions are:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  {[
                    'Who is allowed to access which resources',
                    'On what terms and price',
                    'How do we prove what actually happened'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--gray-800)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Content level AI detection tools and forensics answer &ldquo;what probably happened&rdquo; on the media side. They do not give you:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  {[
                    { icon: AlertTriangle, text: 'A machine readable policy that agents must follow' },
                    { icon: AlertTriangle, text: 'A native way to charge them' },
                    { icon: AlertTriangle, text: 'A signed record that will hold up in an audit or dispute' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255, 179, 71, 0.08)',
                      border: '1px solid rgba(255, 179, 71, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-3) var(--space-4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)'
                    }}>
                      <item.icon size={16} style={{ color: '#B8860B', flexShrink: 0 }} />
                      <span style={{ color: 'var(--gray-800)', fontSize: 'var(--text-sm)' }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  PEAC exists to close that gap. The protocol treats every AI access event as something that can be priced, consented, and proven.
                </p>

                <div style={{
                  background: 'var(--gray-900)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)'
                }}>
                  <p style={{ margin: 0, color: 'var(--white)', fontSize: 'var(--text-lg)', fontWeight: 500, lineHeight: 1.6 }}>
                    Detection tells you <em>&ldquo;there is an AI here&rdquo;</em>. PEAC tells you <em>&ldquo;this AI agreed to these terms, paid in this way, and here is the signed evidence&rdquo;</em>.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section style={{ marginBottom: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>2</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    HTTP 402 and the rise of the AI paywall
                  </h2>
                </div>

                {/* 2.1 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                  paddingBottom: 'var(--space-4)',
                  borderBottom: '2px solid var(--gray-100)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 91, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Zap size={16} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                    2.1 A dormant status code wakes up
                  </h3>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402 Payment Required</a> has existed in the spec for decades, but as &ldquo;reserved for future use&rdquo;. There was no standard way to use it, so most products ignored it. That is changing:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  {[
                    {
                      title: 'L402 (Lightning HTTP 402)',
                      desc: 'Combines HTTP 402, macaroons and the Bitcoin Lightning Network so APIs can charge small amounts per request and use the paid token as authentication.',
                      link: 'https://docs.lightning.engineering/the-lightning-network/l402',
                      icon: Zap
                    },
                    {
                      title: 'x402',
                      desc: 'A chain agnostic HTTP 402 protocol for stablecoin payments. Servers respond with 402 and a machine readable payment challenge; clients pay and retry with proof.',
                      link: 'https://www.x402.org/',
                      icon: Globe
                    },
                    {
                      title: 'Commercial providers',
                      desc: 'From Cloudflare to Web3 infra companies now ship 402 based paywalls for crawlers and APIs.',
                      link: 'https://blog.cloudflare.com/introducing-pay-per-crawl/',
                      icon: Shield
                    },
                    {
                      title: 'Stripe',
                      desc: 'Uses 402 Payment Required in parts of its API surface when payment issues occur, making 402 a familiar concept in card based integrations.',
                      link: 'https://docs.stripe.com/changelog/basil/2025-03-31/vault-forward-api-returns-402',
                      icon: CreditCard
                    }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'var(--white)',
                      border: '1px solid var(--gray-200)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-5)',
                      display: 'flex',
                      gap: 'var(--space-4)'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <item.icon size={20} style={{ color: 'var(--brand-primary)' }} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{item.title}</a>
                        </h4>
                        <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ marginBottom: 'var(--space-8)' }}>
                  In other words, <strong>HTTP 402 is becoming the native status code for AI paywalls and machine friendly payments</strong>.
                </p>

                {/* 2.2 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                  paddingBottom: 'var(--space-4)',
                  borderBottom: '2px solid var(--gray-100)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 91, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Lock size={16} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                    2.2 What PEAC adds on top
                  </h3>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  PEAC does not try to replace L402, x402, or Stripe. Our roadmap is explicit: the protocol is a <strong>universal proof layer</strong> that completes existing payment rails rather than competes with them.
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  {[
                    {
                      version: 'PEAC 0.9.12',
                      title: 'Generic HTTP 402 semantics',
                      items: ['How resources advertise that they are 402 gated', 'How policies and AI preferences (AIPREF) are discovered', 'How 402 responses are described in a consistent way']
                    },
                    {
                      version: 'PEAC 0.9.13',
                      title: 'Economic layer',
                      items: ['Normalized payment block in the receipt schema', 'Adapters for L402, x402, and Stripe', 'Provenance and consent fields wired into receipts', 'Verification latency budget under 5 ms p95']
                    },
                    {
                      version: 'PEAC 0.9.14',
                      title: 'Reporting and standards hooks',
                      items: ['Compliance reports built on top of receipts', 'Internet Draft v00 for open standards process']
                    }
                  ].map((section, i) => (
                    <div key={i} style={{
                      background: 'var(--gray-50)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-5)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                        <span style={{
                          background: 'var(--brand-primary)',
                          color: 'var(--white)',
                          padding: 'var(--space-1) var(--space-3)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 600
                        }}>{section.version}</span>
                        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)' }}>{section.title}</span>
                      </div>
                      <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                        {section.items.map((item, j) => (
                          <li key={j} style={{ marginBottom: 'var(--space-1)' }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(0,212,170,0.1) 0%, rgba(99,91,255,0.1) 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)'
                }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--gray-800)', fontWeight: 500, lineHeight: 1.6 }}>
                    <strong>Integrate PEAC once.</strong> Use whichever AI payment rails you want behind the scenes. Always get the same kind of signed PEAC-Receipt back.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section style={{ marginBottom: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>3</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    The PEAC flow: from detection to 402 to PEAC-Receipt
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  At a high level, every PEAC integration follows the same five step loop:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  {[
                    {
                      num: '1',
                      title: 'Discover',
                      desc: 'The AI agent fetches /.well-known/peac.txt and learns where to fetch AIPREF, how access control works, which payment rails are supported, where to verify receipts, and which public keys to trust.'
                    },
                    {
                      num: '2',
                      title: 'Evaluate',
                      desc: 'The PEAC kernel merges your AIPREF policy, resource level rules, and any caller identity into a decision: allow, allow with payment, or deny.'
                    },
                    {
                      num: '3',
                      title: 'Challenge with HTTP 402',
                      desc: 'If payment is required, the server returns HTTP 402 with a machine readable description of the price and rail, plus enough information for the client to complete payment.'
                    },
                    {
                      num: '4',
                      title: 'Settle on the chosen rail',
                      desc: 'The AI agent uses the L402, x402, or Stripe adapter flow to pay and obtain a proof.'
                    },
                    {
                      num: '5',
                      title: 'Prove with PEAC-Receipt',
                      desc: 'When the client retries, the PEAC kernel verifies the payment proof, recomputes the policy hash, issues a signed receipt, and sends the resource back with a PEAC-Receipt header.'
                    }
                  ].map((step, i) => (
                    <div key={i} style={{
                      background: 'var(--white)',
                      border: '1px solid var(--gray-200)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-5)',
                      display: 'flex',
                      gap: 'var(--space-4)'
                    }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--brand-primary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'var(--text-base)',
                        fontWeight: 700,
                        flexShrink: 0
                      }}>{step.num}</div>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                          {step.title}
                        </h4>
                        <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  Receipts always bind to <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>policy_hash</code>, and when an AIPREF policy exists, an <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>aipref_snapshot</code> is embedded so that future audits do not depend on external files. The <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>payment</code> block is optional and only present when a payment adapter was actually used.
                </p>
              </section>

              {/* Section 4 */}
              <section style={{ marginBottom: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>4</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    Concrete flows across L402, x402, and Stripe
                  </h2>
                </div>

                {/* 4.1 L402 */}
                <div style={{ marginBottom: 'var(--space-12)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    paddingBottom: 'var(--space-4)',
                    borderBottom: '2px solid var(--gray-100)'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Zap size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                      4.1 L402: Lightning powered AI payments
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    <a href="https://docs.lightning.engineering/the-lightning-network/l402" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>L402</a> uses HTTP 402 plus Lightning invoices and macaroons so services can charge satoshis for API calls and authenticate clients at the same time.
                  </p>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    In a PEAC integrated L402 setup:
                  </p>

                  <div style={{
                    background: 'var(--gray-900)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginBottom: 'var(--space-4)',
                    overflow: 'auto'
                  }}>
                    <div style={{ color: 'var(--gray-400)', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-2)' }}>HTTP 402 L402 Challenge</div>
                    <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', color: 'var(--gray-300)', lineHeight: 1.7 }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "rail": "l402",
  "price": 100,
  "currency": "SAT",
  "invoice": "lnbc1...",
  "macaroon_hint": "serialized-macaroon-prefix"
}`}
                    </pre>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    The client pays the invoice on the Lightning Network, receives a full macaroon token, then retries:
                  </p>

                  <div style={{
                    background: 'var(--gray-900)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginBottom: 'var(--space-4)',
                    overflow: 'auto'
                  }}>
                    <div style={{ color: 'var(--gray-400)', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-2)' }}>Paid Retry</div>
                    <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', color: 'var(--gray-300)', lineHeight: 1.7 }}>
{`GET /api/report HTTP/1.1
Authorization: L402 <macaroon>:<preimage>`}
                    </pre>
                  </div>

                  <p>
                    The L402 adapter verifies the payment, normalizes it into a <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>payment</code> block, and issues a signed PEAC-Receipt. Every paid L402 call is now a verifiable record, not just a line in a Lightning node log.
                  </p>
                </div>

                {/* 4.2 x402 */}
                <div style={{ marginBottom: 'var(--space-12)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    paddingBottom: 'var(--space-4)',
                    borderBottom: '2px solid var(--gray-100)'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Globe size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                      4.2 x402: Stablecoin AI paywalls over HTTP
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    <a href="https://www.x402.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>x402</a> activates HTTP 402 for onchain or rollup based stablecoin payments. Servers respond with a 402 and payment requirements; clients pay and retry with proof.
                  </p>

                  <div style={{
                    background: 'var(--gray-900)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginBottom: 'var(--space-4)',
                    overflow: 'auto'
                  }}>
                    <div style={{ color: 'var(--gray-400)', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-2)' }}>HTTP 402 x402 Challenge</div>
                    <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', color: 'var(--gray-300)', lineHeight: 1.7 }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "rail": "x402",
  "price": "0.05",
  "currency": "USD",
  "asset": "USDC",
  "chain": "solana-mainnet",
  "destination": "wallet-address",
  "expires_at": "2025-12-01T09:45:00Z"
}`}
                    </pre>
                  </div>

                  <p>
                    The agent sends the required USDC transaction, retries with proof, and the x402 adapter normalizes this into the <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>payment</code> block with <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>rail: &quot;x402&quot;</code>. AI paywalls for datasets, prompts, or APIs can now take USDC while your accounting stack only sees standardized PEAC receipts.
                  </p>
                </div>

                {/* 4.3 Stripe */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    paddingBottom: 'var(--space-4)',
                    borderBottom: '2px solid var(--gray-100)'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CreditCard size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                      4.3 Stripe: Card rails behind an AI paywall
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    <a href="https://docs.stripe.com/changelog/basil/2025-03-31/vault-forward-api-returns-402" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Stripe already uses 402</a> in some scenarios when payment is required or fails.
                  </p>

                  <div style={{
                    background: 'var(--gray-900)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginBottom: 'var(--space-4)',
                    overflow: 'auto'
                  }}>
                    <div style={{ color: 'var(--gray-400)', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-2)' }}>HTTP 402 Stripe Challenge</div>
                    <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', color: 'var(--gray-300)', lineHeight: 1.7 }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "rail": "stripe",
  "price": "9.99",
  "currency": "USD",
  "payment_intent": "pi_3ZQ...",
  "client_secret": "pi_3ZQ..._secret_..."
}`}
                    </pre>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    The client uses Stripe Elements to complete the payment, then retries once the intent is <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>succeeded</code>. The Stripe adapter confirms the payment and issues a PEAC-Receipt.
                  </p>

                  <div style={{
                    background: 'rgba(255, 179, 71, 0.08)',
                    border: '1px solid rgba(255, 179, 71, 0.3)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    display: 'flex',
                    gap: 'var(--space-3)'
                  }}>
                    <AlertTriangle size={18} style={{ color: '#B8860B', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, color: 'var(--gray-700)', fontSize: 'var(--text-sm)' }}>
                      <strong>Note:</strong> The exact header used to relay Stripe payment intent IDs may change as we tighten the adapter spec, but the normalized <code style={{ background: 'rgba(255,255,255,0.7)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>payment</code> block shape and use of PEAC-Receipt remain stable across versions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section style={{ marginBottom: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>5</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    What actually ends up in a PEAC-Receipt
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  To make the billing, audit and compliance story concrete, here is a simplified example of what a PEAC receipt for a paid AI request might look like:
                </p>

                <div style={{
                  background: 'var(--gray-900)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  marginBottom: 'var(--space-6)',
                  overflow: 'auto'
                }}>
                  <div style={{ color: 'var(--gray-400)', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-2)' }}>Example PEAC-Receipt (simplified)</div>
                  <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', color: 'var(--gray-300)', lineHeight: 1.6 }}>
{`{
  "version": "0.9.13",
  "policy_hash": "b64url-sha256-of-canonical-policy",
  "aipref_snapshot": {
    "url": "https://example.com/.well-known/aipref.json",
    "hash": "b64url-sha256-of-aipref",
    "effective_at": "2025-11-01T00:00:00Z"
  },
  "resource": {
    "method": "GET",
    "path": "/api/report",
    "etag": "W/\\"6e2-abc...\\""
  },
  "agent": {
    "id": "agent:originary:client-123",
    "kind": "crawler"
  },
  "decision": {
    "effect": "allow",
    "reason": "paid"
  },
  "payment": {
    "rail": "x402",
    "reference": "solana-tx-123...",
    "amount": 0.05,
    "currency": "USD",
    "settled_at": "2025-12-01T09:30:21Z",
    "idempotency": "req_9b3c5..."
  },
  "issued_at": "2025-12-01T09:30:22Z",
  "proof": {
    "alg": "Ed25519",
    "kid": "peac-key-2025-09",
    "jws": "eyJhbGciOiJFZERTQSIs..."
  }
}`}
                  </pre>
                </div>

                <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  {[
                    { field: 'policy_hash + aipref_snapshot', desc: 'Tell you exactly what rules were in force when this AI paywall was applied' },
                    { field: 'resource', desc: 'Ties things to a concrete path and ETag' },
                    { field: 'payment', desc: 'Uniform across L402, x402, and Stripe - only the rail and reference semantics differ' },
                    { field: 'proof', desc: 'Binds it all cryptographically so third parties can verify without talking to your servers' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'var(--gray-50)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-4)',
                      display: 'flex',
                      gap: 'var(--space-3)'
                    }}>
                      <code style={{ background: 'var(--white)', padding: '2px 8px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--brand-primary)', flexShrink: 0, height: 'fit-content' }}>{item.field}</code>
                      <span style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>

                <p>
                  For accounting, you can roll up <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>payment.amount</code> by resource or customer. For compliance, you can prove that specific AI calls were made under specific policies and paid in specific ways.
                </p>
              </section>

              {/* Section 6 */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>6</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    How this ties back to our roadmap and vision
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Within the 0.9.12 to 0.9.21 window, we have set some clear constraints:
                </p>

                <div style={{
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', display: 'grid', gap: 'var(--space-2)' }}>
                    <li>Stay on 0.9.x until we earn 1.0 through an IETF draft and multiple independent implementations</li>
                    <li>Use <strong>PEAC-Receipt</strong> as the primary HTTP field globally, without legacy header aliases</li>
                    <li>Keep the core small and rely on adapters for payment rails and environments</li>
                    <li>Always embed AIPREF snapshots in receipts when present, and make payment optional but normalized across L402, x402, and Stripe</li>
                  </ul>
                </div>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Our performance and security targets are explicit:
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-6)'
                }}>
                  {[
                    { metric: 'Sign p95', value: '< 10 ms' },
                    { metric: 'Verify p95', value: '< 5 ms' },
                    { metric: 'Throughput', value: '1k+ receipts/sec' },
                    { metric: 'Security', value: 'OWASP clean' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)',
                      border: '1px solid rgba(99, 91, 255, 0.2)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-4)',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-1)' }}>{item.value}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>{item.metric}</div>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'var(--gray-900)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <p style={{ margin: 0, color: 'var(--white)', fontSize: 'var(--text-lg)', fontWeight: 500, lineHeight: 1.6 }}>
                    Make PEAC the universal proof layer for AI interactions, so that any rail that can clear a payment can plug into AI paywalls and still produce verifiable, portable receipts.
                  </p>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  For Originary, this means:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  {[
                    'AI bot detection becomes the front door into a programmable AI paywall',
                    'HTTP 402 becomes the standard control plane for AI payments',
                    'L402, x402 and Stripe are first class citizens, not competing standards',
                    'PEAC-Receipt is the common language between engineering, finance, legal and external partners'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--brand-secondary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--gray-800)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <p>
                  If you are thinking about how to charge AI agents for access, or how to show regulators exactly what those agents did with your data, that is the arc we are building toward. In upcoming posts we will share concrete integration guides and reference implementations for each rail.
                </p>
              </section>

              {/* Related Reading */}
              <section style={{ paddingTop: 'var(--space-8)', borderTop: '2px solid var(--gray-200)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Related Reading
                </h3>
                <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                  <Link href="/blog/ai-bot-detection/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    AI Bot Detection: Turning Unknown AI Traffic Into Verifiable Evidence
                  </Link>
                  <Link href="/blog/http-402-for-apis/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    HTTP 402 for APIs: Making Payment-Required Responses Work
                  </Link>
                  <Link href="/blog/aipref-by-ietf/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    AIPREF: A Common Language for AI Usage Preferences
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)', marginTop: 'var(--space-16)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div style={{
                background: 'var(--gradient-brand)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-10)',
                textAlign: 'center'
              }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--white)' }}>
                  Ready to monetize AI traffic with verifiable receipts?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto var(--space-8)' }}>
                  Learn how Originary and PEAC Protocol turn AI detection into AI paywalls with L402, x402, and Stripe support.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="/developers"
                    className="btn btn-lg"
                    style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}
                  >
                    <span>View Documentation</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg btn-ghost"
                    style={{ color: 'var(--white)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <span>Talk to Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
