import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight, Eye, ShieldCheck, Database, Fingerprint, List, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Bot Detection: From Traffic to Evidence",
  description: "AI bot detection beyond classifiers. Use metadata, fingerprints and PEAC receipts to turn AI traffic into verifiable evidence.",
  keywords: "AI bot detection, AI traffic, metadata, model fingerprints, PEAC receipts, agent detection, AI crawlers, verifiable evidence",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/ai-bot-detection' },
  openGraph: {
    title: "AI Bot Detection: From Traffic to Evidence",
    description: "AI bot detection beyond classifiers. Use metadata, fingerprints and PEAC receipts to turn AI traffic into verifiable evidence.",
    type: "article",
    url: "https://www.originary.xyz/blog/ai-bot-detection/",
    publishedTime: "2025-12-01",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Bot Detection: From Traffic to Evidence",
    description: "AI bot detection beyond classifiers. Turn AI traffic into verifiable evidence.",
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
    "headline": "AI Bot Detection: Turning Unknown AI Traffic Into Verifiable Evidence",
    "description": "AI bot detection is more than classifiers. Learn how metadata, fingerprints and PEAC receipts turn AI traffic into verifiable, enforceable evidence.",
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
    "mainEntityOfPage": "https://www.originary.xyz/blog/ai-bot-detection/",
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
                <span style={{ color: 'var(--gray-700)' }}>AI Bot Detection</span>
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
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                AI Bot Detection: Turning Unknown AI Traffic Into Verifiable Evidence
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-8)',
                maxWidth: '650px'
              }}>
                Detection alone is not enough. Learn how metadata, model fingerprints, and PEAC receipts transform AI traffic from guesswork into verifiable, enforceable evidence.
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
                <span>15 min read</span>
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
                  { num: '1', title: 'What AI bot detection really covers' },
                  { num: '2', title: 'Why detection-only is not enough' },
                  { num: '3', title: 'The four pillars of useful AI bot detection' },
                  { num: '4', title: 'How Originary + PEAC change detection in practice' },
                  { num: '5', title: 'Where this is going next' },
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
                  &ldquo;AI detection&rdquo; is having a moment. But most people mean one of two things:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Eye size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--gray-900)' }}>Content authenticity</strong>
                      <p style={{ margin: 0, color: 'var(--gray-600)' }}>Is this content real, or did an AI model generate or alter it?</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ShieldCheck size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--gray-900)' }}>Traffic detection</strong>
                      <p style={{ margin: 0, color: 'var(--gray-600)' }}>Is this visitor a human, or an AI bot quietly crawling my site or API?</p>
                    </div>
                  </div>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Those are different jobs. Both matter. Both are easy to get wrong if you only rely on classifiers and vibes.
                </p>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Originary takes a different view: <strong>every time an AI system touches your data, there should be a clear, verifiable trail of what happened.</strong> That trail needs to work for developers, lawyers, auditors, and automated agents at the same time.
                </p>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(99,91,255,0.08) 0%, rgba(0,212,170,0.08) 100%)',
                  borderLeft: '4px solid var(--brand-primary)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-8)'
                }}>
                  <p style={{ margin: 0, color: 'var(--gray-800)', fontSize: 'var(--text-base)' }}>
                    That is exactly what <Link href="/integrations/acp/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>PEAC Protocol</Link> provides - a neutral proof layer for AI interactions that issues cryptographic receipts for access, usage, and payments using a standard <code style={{ background: 'rgba(255,255,255,0.7)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>PEAC-Receipt</code> HTTP header.
                  </p>
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
                    What &ldquo;AI bot detection&rdquo; really covers
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  People often bundle three separate capabilities under &ldquo;AI detection&rdquo;:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  {[
                    {
                      title: 'Fake vs real (content authenticity)',
                      desc: 'Classifying whether a text, image, audio, or video file was generated or altered by an AI model, usually with a probability score.',
                      icon: Eye
                    },
                    {
                      title: 'Model fingerprinting (who generated this)',
                      desc: 'Inferring which model family or vendor likely produced the artifact, or using watermarks and statistical fingerprints to attribute it.',
                      icon: Fingerprint
                    },
                    {
                      title: 'Bot and agent detection (who is calling me)',
                      desc: 'Detecting that an incoming request is from an AI agent or crawler, not from a person in a browser, and understanding which agent, under what declared purpose.',
                      icon: ShieldCheck
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
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                          {item.title}
                        </h3>
                        <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
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
                    &ldquo;You cannot control, license, or monetize AI usage of your data if you cannot see which AI agents are actually accessing it.&rdquo;
                  </p>
                </div>

                <p>
                  AI bot detection is that missing visibility layer between your content and the growing universe of AI crawlers, copilots, and headless agents.
                </p>
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
                    Why &ldquo;detection-only&rdquo; is not enough
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  There is real value in content-level detection and model fingerprinting. But they have hard limits:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  {[
                    {
                      icon: AlertTriangle,
                      title: 'It is an arms race',
                      desc: 'As models improve, naive classifiers become less reliable. A detector that feels strong this quarter may be unreliable next quarter.'
                    },
                    {
                      icon: AlertTriangle,
                      title: 'Scores are not proof',
                      desc: 'A "0.84 likelihood of AI" score is a hint. It is not a signed record that will stand up in an audit, complaint, or legal dispute.'
                    },
                    {
                      icon: AlertTriangle,
                      title: 'No policy, no economics',
                      desc: 'Even if you know something is AI-generated, that does not tell you whether the agent respected your usage policy, paid you for access, or is allowed to keep the data.'
                    }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255, 179, 71, 0.08)',
                      border: '1px solid rgba(255, 179, 71, 0.3)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-5)',
                      display: 'flex',
                      gap: 'var(--space-4)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 179, 71, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <item.icon size={16} style={{ color: '#B8860B' }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                          {item.title}
                        </h3>
                        <p style={{ margin: 0, color: 'var(--gray-700)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Enterprises, regulators, and serious publishers need more than yes/no classification:
                </p>

                <div style={{
                  background: 'rgba(0, 212, 170, 0.08)',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                    {[
                      'Clear machine-readable policies that AI agents can understand',
                      'Verifiable proof that access followed those policies',
                      'A way to connect a suspicious artifact back to concrete access events'
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--brand-secondary)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: 'var(--gray-800)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  That is where Originary and PEAC push beyond detection-only to <strong style={{ color: 'var(--brand-primary)' }}>detection + policy + receipts</strong>.
                </p>
              </section>

              {/* Section 3 - The Four Pillars */}
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
                    The four pillars of useful AI bot detection
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-8)' }}>
                  In practice, AI bot detection becomes powerful when you combine four signal types:
                </p>

                {/* Four Pillars Overview */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-12)'
                }}>
                  {[
                    { num: '1', title: 'Metadata', icon: Database },
                    { num: '2', title: 'Model Fingerprints', icon: Fingerprint },
                    { num: '3', title: 'Access Events', icon: Zap },
                    { num: '4', title: 'Artifact Repository', icon: Database }
                  ].map((pillar) => (
                    <div key={pillar.num} style={{
                      background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)',
                      border: '1px solid rgba(99, 91, 255, 0.2)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-5)',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--brand-primary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto var(--space-3)'
                      }}>
                        <pillar.icon size={24} />
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>
                        PILLAR {pillar.num}
                      </div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)' }}>
                        {pillar.title}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pillar 3.1 - Metadata */}
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
                      <Database size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                      3.1 Metadata: the quiet truth-teller
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-6)' }}>
                    Metadata is &ldquo;data about the data.&rdquo; For AI bot detection, you care about at least three layers:
                  </p>

                  <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                    {[
                      {
                        title: 'File and media metadata',
                        items: ['EXIF and container metadata in images, audio, video', 'C2PA provenance tags and content credentials', 'Timestamps, edit history, device hints']
                      },
                      {
                        title: 'Transport metadata',
                        items: ['HTTP headers, TLS fingerprints, IP ranges, ASNs', 'User-Agent strings, model hints, API keys', 'Request rate, timing patterns, geo patterns']
                      },
                      {
                        title: 'Contract metadata',
                        items: ['Policy fields: allowed usage, price, retention', 'Consent flags and legal basis', 'Links to receipts, licenses, dispute records']
                      }
                    ].map((section, i) => (
                      <div key={i} style={{
                        background: 'var(--gray-50)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--space-4)'
                      }}>
                        <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                          {section.title}
                        </h4>
                        <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                          {section.items.map((item, j) => (
                            <li key={j} style={{ marginBottom: 'var(--space-1)' }}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <p>
                    On its own, metadata can be spoofed. Combined with cryptographic receipts, it becomes a strong integrity check. In PEAC, metadata is not an afterthought - effective AI preference policies (<Link href="/integrations/aipref/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>AIPREF</Link>) are discovered and snapshotted into every receipt, so audits are self-contained.
                  </p>
                </div>

                {/* Pillar 3.2 - Model Fingerprints */}
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
                      <Fingerprint size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                      3.2 Model fingerprints: which model touched this
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-6)' }}>
                    Model fingerprinting tries to answer: <em>Which model family or vendor produced this artifact?</em>
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--space-4)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    {[
                      { title: 'Risk & compliance', desc: 'Some models may be disallowed for regulated data' },
                      { title: 'Attribution & economics', desc: 'Different pricing for different model types' },
                      { title: 'Cross-checking claims', desc: 'Detect mismatches between claims and reality' }
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'var(--white)',
                        border: '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--space-4)'
                      }}>
                        <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                          {item.title}
                        </h4>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p>
                    In Originary&rsquo;s world, model fingerprints feed into policy and receipts: policies can say &ldquo;allow research use from approved models, block others.&rdquo; Receipts include which model was declared at access time.
                  </p>
                </div>

                {/* Pillar 3.3 - Access Events */}
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
                      3.3 Access: every AI call as a verifiable event
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    This is the most undervalued pillar. Traditional logs tell you IP, path, timestamp. <strong>That is not enough for AI agents and 402-style paid access.</strong>
                  </p>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    In a PEAC-aware environment, each AI call becomes a structured, signed event:
                  </p>

                  <div style={{
                    background: 'var(--gray-900)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginBottom: 'var(--space-6)',
                    overflow: 'auto'
                  }}>
                    <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', color: 'var(--gray-300)', lineHeight: 1.7 }}>
{`agent_id         → which agent or client called you
agent_type       → crawler, copilot, aggregator, training pipeline
model_id         → declared model family in use
policy_version   → which policy applied
enforcement      → e.g. http-402 for payment-gated access
payment          → rail, amount, currency, provider evidence
aipref           → snapshot of AI usage preferences in effect
issued_at        → when the receipt was generated`}
                    </pre>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0,212,170,0.1) 0%, rgba(99,91,255,0.1) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <p style={{ margin: 0, fontSize: 'var(--text-lg)', color: 'var(--gray-800)', fontWeight: 500, lineHeight: 1.6 }}>
                      Instead of &ldquo;we think an AI scraped our site,&rdquo; you can say: <strong>&ldquo;Agent X, using model Y, accessed resources A, B, C on these dates, under policy Z, via HTTP 402, and paid this amount. Here is the signed receipt.&rdquo;</strong>
                    </p>
                  </div>

                  <p>
                    The PEAC kernel signs receipts using Ed25519 and ships them in a <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>PEAC-Receipt</code> header, ready for offline or online verification.
                  </p>
                </div>

                {/* Pillar 3.4 - Artifact Repository */}
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
                      <Database size={16} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                      3.4 Artifact repository: cases, not random files
                    </h3>
                  </div>

                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    Once you have detection and rich access events, you need somewhere to put them. An <strong>artifact repository</strong> is:
                  </p>

                  <div style={{
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', display: 'grid', gap: 'var(--space-2)' }}>
                      <li>A structured library of artifacts: requests, responses, media, forensics, and receipts</li>
                      <li>Grouped into cases or projects: incidents, audits, fraud investigations</li>
                      <li>Enriched with metadata, fingerprints, and PEAC receipts</li>
                    </ul>
                  </div>

                  <p>
                    This lets banks, insurers, publishers, and regulators reconstruct what happened, show chain-of-custody evidence for disputes, and re-run analyses when policies change. Originary&rsquo;s goal: your live AI traffic and artifact repository are two views of the same evidence layer.
                  </p>
                </div>
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
                    How Originary + PEAC change AI bot detection in practice
                  </h2>
                </div>

                <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
                  {[
                    {
                      num: '4.1',
                      title: 'Publish policies that agents can actually read',
                      content: (
                        <>
                          <p style={{ marginBottom: 'var(--space-4)' }}>
                            Every PEAC-aware service exposes a discovery file at <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>/.well-known/peac.txt</code> that advertises protocol version, payment rails, receipt requirements, and verification endpoints.
                          </p>
                          <p style={{ margin: 0 }}>
                            AIPREF policies describe how your content may be used. These are snapshotted into every receipt. <strong>AI agents can no longer pretend they did not know your terms.</strong>
                          </p>
                        </>
                      )
                    },
                    {
                      num: '4.2',
                      title: 'Enforce and measure with HTTP 402 and receipts',
                      content: (
                        <>
                          <p style={{ marginBottom: 'var(--space-4)' }}>
                            When an AI agent hits a protected resource, it receives an <Link href="/blog/http-402-for-apis/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402 Payment Required</Link> response. Once the agent pays or proves entitlement, the PEAC kernel issues a signed receipt binding: what was accessed, who accessed it, which policy applied, and payment details.
                          </p>
                          <p style={{ margin: 0 }}>
                            AI bot detection becomes not just &ldquo;yes, that looked like a bot&rdquo; but <strong>&ldquo;yes, that bot paid, under these terms, here is the signed proof.&rdquo;</strong>
                          </p>
                        </>
                      )
                    },
                    {
                      num: '4.3',
                      title: 'Give good agents a way to prove they are good',
                      content: (
                        <>
                          <p style={{ marginBottom: 'var(--space-4)' }}>
                            Most serious AI agents want a clean way to respect content owners. Originary + PEAC give them that path: pre-fetch <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>peac.txt</code>, integrate 402 flows, attach receipts when passing data downstream.
                          </p>
                          <p style={{ margin: 0 }}>
                            That is AI bot detection as <strong style={{ color: 'var(--brand-primary)' }}>positive infrastructure</strong> rather than only defensive heuristics.
                          </p>
                        </>
                      )
                    },
                    {
                      num: '4.4',
                      title: 'Make bad or ambiguous agents stand out',
                      content: (
                        <p style={{ margin: 0 }}>
                          Once good agents follow rules and produce receipts, what remains is easier to handle: crawlers ignoring <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>peac.txt</code>, tools spoofing user-agents, traffic with no receipts. These become clear anomalies. <strong>You can throttle, block, or litigate based on evidence rather than suspicion.</strong>
                        </p>
                      )
                    }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'var(--white)',
                      border: '1px solid var(--gray-200)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-6)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-4)'
                      }}>
                        <span style={{
                          background: 'var(--brand-primary)',
                          color: 'var(--white)',
                          padding: 'var(--space-1) var(--space-3)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 600
                        }}>{item.num}</span>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0, color: 'var(--gray-900)' }}>
                          {item.title}
                        </h3>
                      </div>
                      <div style={{ color: 'var(--gray-700)', lineHeight: 1.7 }}>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 */}
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
                  }}>5</span>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--gray-900)'
                  }}>
                    Where this is going next
                  </h2>
                </div>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  This post is the high-level overview. We will follow up with a focused series on metadata, access events, fingerprinting, and artifact repositories.
                </p>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)'
                }}>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Explore the building blocks
                  </h4>
                  <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                    <Link href="/integrations/aipref/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 500 }}>
                      <ArrowRight size={14} />
                      <span>AIPREF - Machine-readable AI usage preferences</span>
                    </Link>
                    <Link href="/integrations/x402/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 500 }}>
                      <ArrowRight size={14} />
                      <span>x402 - HTTP 402 payment gating</span>
                    </Link>
                    <Link href="/receipts/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 500 }}>
                      <ArrowRight size={14} />
                      <span>PEAC receipts - Verifiable access evidence</span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Reading */}
              <section style={{ paddingTop: 'var(--space-8)', borderTop: '2px solid var(--gray-200)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Related Reading
                </h3>
                <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                  <Link href="/blog/aipref-by-ietf/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    AIPREF: A Common Language for AI Usage Preferences
                  </Link>
                  <Link href="/blog/http-402-for-apis/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    HTTP 402 for APIs: Making Payment-Required Responses Work
                  </Link>
                  <Link href="/blog/robots-txt-rfc-9309/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    robots.txt (RFC 9309): The Web&rsquo;s Crawl Access Control
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)', marginTop: 'var(--space-16)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div className="cta-card" style={{
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-10)'
              }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  Ready to turn AI traffic into verifiable evidence?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto var(--space-8)' }}>
                  Learn how Originary and PEAC Protocol give you visibility, policy enforcement, and cryptographic receipts for every AI interaction.
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
