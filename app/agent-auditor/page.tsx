import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Shield, Terminal, Package, CheckCircle, Lock, Eye, ExternalLink, Zap, FileText } from 'lucide-react'

const PAGE_URL = 'https://www.originary.xyz/agent-auditor'
const INSPECTOR_URL = 'https://agent-auditor-originary-xyz.vercel.app/'
const GITHUB_URL = 'https://github.com/originaryx/agent-auditor'
const NPM_URL = 'https://www.npmjs.com/package/@originaryx/agent-auditor'

export const metadata: Metadata = {
  title: 'Agent Auditor | Inspect and Verify Signed Agent Receipts',
  description:
    'AI agents act on your behalf. Receipts prove what they did. Agent Auditor opens any signed agent receipt and shows you exactly what happened — decoded, structured, and verified. No backend. No accounts.',
  keywords: [
    'agent auditor',
    'receipt verification',
    'PEAC protocol',
    'Ed25519 verification',
    'signed receipts',
    'evidence bundles',
    'offline verification',
    'interaction records',
    'agent receipt inspector',
    'dispute bundles',
    'AI agent receipts',
    'open source receipt auditor',
    'Apache-2.0',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/agent-auditor',
  },
  openGraph: {
    title: 'Agent Auditor | Inspect and Verify Signed Agent Receipts',
    description:
      'AI agents act on your behalf. Receipts prove what they did. Open any signed agent receipt and see exactly what happened — verified locally, no backend.',
    url: '/agent-auditor',
    siteName: 'Originary',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Agent Auditor — Inspect and verify signed agent receipts offline',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Auditor | Inspect and Verify Signed Agent Receipts',
    description:
      'AI agents act on your behalf. Receipts prove what they did. Verify any signed agent receipt locally — no backend, no accounts.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#app`,
  name: 'Agent Auditor',
  alternateName: '@originaryx/agent-auditor',
  description:
    'Open-source tool that decodes, displays, and verifies signed agent receipts and evidence bundles issued by AI agents, middleware, and automated systems. Runs offline in the browser or as a CLI.',
  url: PAGE_URL,
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'Security and Verification Tool',
  operatingSystem: 'Web, Node.js (>=22)',
  softwareVersion: '0.1.0',
  releaseNotes: 'https://github.com/originaryx/agent-auditor/releases',
  downloadUrl: NPM_URL,
  installUrl: NPM_URL,
  codeRepository: GITHUB_URL,
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  author: {
    '@type': 'Organization',
    '@id': 'https://www.originary.xyz/#org',
    name: 'Originary',
    url: 'https://www.originary.xyz',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.originary.xyz/#org',
    name: 'Originary',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Ed25519 signature verification',
    'Signed agent receipt decoding',
    'Dispute bundle inspection (.zip)',
    'Policy binding status check',
    'Timeline reconstruction',
    'Offline operation — no network requests',
    'Browser and CLI interfaces',
  ],
  keywords: 'agent auditor, receipt verification, PEAC protocol, Ed25519, interaction records, dispute bundles',
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'Agent Auditor | Inspect and Verify Signed Agent Receipts',
  description:
    'Open-source tool for inspecting and verifying signed PEAC Protocol agent receipts and evidence bundles. Runs offline in the browser or CLI.',
  isPartOf: { '@id': 'https://www.originary.xyz/#website' },
  about: { '@id': `${PAGE_URL}#app` },
  publisher: { '@id': 'https://www.originary.xyz/#org' },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  inLanguage: 'en-US',
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
  mainEntity: { '@id': `${PAGE_URL}#app` },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Originary',
      item: 'https://www.originary.xyz',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Agent Auditor',
      item: PAGE_URL,
    },
  ],
}

const whatYouSee = [
  {
    icon: Eye,
    title: 'Who did it',
    description: 'The issuer, subject, and type of interaction — decoded from the signed record.',
  },
  {
    icon: Shield,
    title: 'Is it genuine',
    description: 'Ed25519 signature verification against the public key. Pass or fail, locally.',
  },
  {
    icon: Zap,
    title: 'What happened',
    description: 'Timestamps, extension fields (commerce, identity, access), and structured details.',
  },
  {
    icon: Package,
    title: 'Full bundles too',
    description: 'Drop a dispute bundle (.zip) and inspect every receipt inside it, individually.',
  },
]

export default function AgentAuditorPage() {
  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <NavigationHeader />

      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section
          className="section"
          style={{
            background: 'var(--surface-elevated)',
            paddingTop: 'var(--space-24)',
            paddingBottom: 'var(--space-20)',
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-6)',
                padding: 'var(--space-2) var(--space-5)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                color: 'var(--accent-brand)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-full)', background: 'var(--accent-brand)', display: 'inline-block', flexShrink: 0 }} />
                Open Source — Apache-2.0
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6.5vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
              }}>
                <span className="text-gradient">Your AI agents act.</span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>This proves what they did.</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '620px',
                margin: '0 auto var(--space-10) auto',
              }}>
                A receipt is a signed record issued when an agent takes an action — a tool call, an API request, a payment, a consent. Agent Auditor opens any receipt file and shows you exactly what it contains, verified against the signature.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-14)',
              }}>
                <Link href="#inspector" className="btn btn-primary btn-lg">
                  <span>Open a receipt now</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <span>View on GitHub</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* "What is a receipt" plain explainer */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-3)',
                maxWidth: '680px',
                margin: '0 auto',
              }}>
                {[
                  { who: 'An agent calls an API', what: 'Signed record of: who called, what endpoint, when' },
                  { who: 'A payment is authorized', what: 'Signed record of: amount, rail, parties, timestamp' },
                  { who: 'A user grants consent', what: 'Signed record of: scope, subject, conditions' },
                ].map(({ who, what }) => (
                  <div
                    key={who}
                    style={{
                      padding: 'var(--space-4)',
                      background: 'var(--surface-card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-default)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)', lineHeight: 1.4 }}>{who}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{what}</div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                Agent Auditor opens any of these and shows you what's inside.
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust bar ──────────────────────────────────────────────────────── */}
        <div style={{
          borderTop: '1px solid var(--border-default)',
          borderBottom: '1px solid var(--border-default)',
          background: 'var(--surface-subtle)',
          padding: 'var(--space-4) 0',
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-8)',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
              {[
                { icon: Lock, text: 'Nothing leaves your machine' },
                { icon: Shield, text: 'Signature verified locally' },
                { icon: Terminal, text: 'Browser or CLI' },
                { icon: FileText, text: '.jws · .json · .zip' },
                { icon: Eye, text: 'Apache-2.0' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Icon size={15} style={{ color: 'var(--accent-brand)', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Live Inspector ─────────────────────────────────────────────────── */}
        <section
          id="inspector"
          className="section"
          style={{
            background: 'var(--surface-subtle)',
            paddingTop: 'var(--space-16)',
            paddingBottom: 'var(--space-16)',
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-5)',
                padding: 'var(--space-2) var(--space-4)',
                background: 'var(--accent-success-subtle, var(--surface-card))',
                border: '1px solid var(--accent-success, var(--border-default))',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                color: 'var(--accent-success, var(--text-secondary))',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-full)', background: 'var(--accent-success, var(--accent-brand))', display: 'inline-block' }} />
                Live — runs in your browser
              </div>
              <h2 style={{ marginBottom: 'var(--space-3)' }}>Drop a receipt and see what's inside</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
                No setup. Drop any receipt file and see it decoded and verified instantly. Inspection and verification happen locally in your browser or CLI. No outbound verification or artifact fetches.
              </p>
            </div>

            <div style={{
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-default)',
              background: 'var(--surface-elevated)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-3) var(--space-5)',
                background: 'var(--code-bg-header)',
                borderBottom: '1px solid var(--border-default)',
              }}>
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-full)', background: 'var(--chrome-red)', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-full)', background: 'var(--chrome-yellow)', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-full)', background: 'var(--chrome-green)', display: 'inline-block' }} />
                <div style={{
                  flex: 1,
                  marginLeft: 'var(--space-3)',
                  background: 'var(--surface-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-1) var(--space-3)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-tertiary)',
                  fontFamily: 'var(--font-mono)',
                  maxWidth: '380px',
                }}>
                  agent-auditor.originary.xyz
                </div>
                <a
                  href={INSPECTOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                    textDecoration: 'none',
                    marginLeft: 'auto',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Full window
                  <ExternalLink size={12} />
                </a>
              </div>
              <iframe
                src={INSPECTOR_URL}
                title="Agent Auditor Web Inspector"
                style={{ width: '100%', height: '720px', border: 'none', display: 'block' }}
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />
            </div>

            <p style={{ textAlign: 'center', marginTop: 'var(--space-5)', fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
              Prefer a standalone window?{' '}
              <a
                href={INSPECTOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontWeight: 500 }}
              >
                Open agent-auditor.originary.xyz
              </a>
            </p>
          </div>
        </section>

        {/* ── What you see ───────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>What you get when you open a receipt</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
                Four things, every time.
              </p>
            </div>
            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '860px', margin: '0 auto' }}>
              {whatYouSee.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={title}
                  className={i < 2 ? 'card card-glow' : 'card'}
                  style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-xl)',
                      background: i % 2 === 0 ? 'var(--accent-brand-subtle)' : 'var(--accent-secondary-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={24} style={{ color: i % 2 === 0 ? 'var(--accent-brand)' : 'var(--accent-secondary)' }} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, margin: 0 }}>{title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLI ────────────────────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '740px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>Or use it from the terminal</h2>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                  Works in CI, scripts, and local dev. Same verification, no browser required.
                </p>
              </div>
              <div className="card card-glow" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--accent-brand-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Terminal size={22} style={{ color: 'var(--accent-brand)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: 0 }}>CLI</h3>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 2 }}>Node.js &gt;= 22</div>
                  </div>
                </div>
                <pre style={{
                  background: 'var(--code-bg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                  margin: 0,
                  overflowX: 'auto',
                  lineHeight: 1.8,
                }}>{`npm install -g @originaryx/agent-auditor

# inspect a receipt file
agent-auditor inspect ./receipt.jws

# verify the signature
agent-auditor verify ./receipt.jws --key ./public-key.bin

# inspect a dispute bundle
agent-auditor inspect ./bundle.zip

# run the demo with a sample receipt
agent-auditor demo`}</pre>
                <a
                  href={NPM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                  }}
                >
                  @originaryx/agent-auditor on npm
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Read-only by design ─────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <h2 style={{ marginBottom: 'var(--space-3)' }}>Read-only by design</h2>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Agent Auditor never writes, signs, or transmits anything.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[
                  { text: 'issue or sign receipts.', suffix: 'Use @peac/protocol for that.' },
                  { text: 'send data anywhere.', suffix: 'All processing is local.' },
                  { text: 'store keys or state.', suffix: 'No database, no config, no session.' },
                  { text: 'validate business logic.', suffix: 'It checks signature and structure only.' },
                ].map(({ text, suffix }) => (
                  <div
                    key={text}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-4) var(--space-5)',
                      background: 'var(--surface-elevated)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-default)',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-success, var(--accent-brand))', flexShrink: 0, marginTop: 2 }} />
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Does not</strong>{' '}{text}{' '}
                      <span style={{ color: 'var(--text-tertiary)' }}>{suffix}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Built on PEAC ──────────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: 'var(--space-10)',
              border: '2px solid var(--accent-brand)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--accent-brand-faint)',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Want to issue receipts, not just read them?
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 'var(--space-6)' }}>
                Agent Auditor reads receipts issued by the PEAC Protocol open standard. If you want to add receipt issuance to your own agent or API, PEAC Protocol is where to start.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link href="/peac" className="btn btn-primary btn-sm">
                  PEAC Protocol
                </Link>
                <Link href="/developers" className="btn btn-secondary btn-sm">
                  Quickstart
                </Link>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="cta-card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, var(--glass-border-hover) 0%, transparent 50%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--white)' }}>
                  Got a receipt? Open it.
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '440px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}>
                  No signup. No backend. Drop a file and see what it says.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                  <Link
                    href="#inspector"
                    className="btn btn-lg"
                    style={{ background: 'var(--surface-elevated)', color: 'var(--accent-brand)', border: 'none' }}
                  >
                    <span>Open Inspector</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-ghost"
                    style={{ color: 'var(--white)', border: '1px solid var(--border-hover)' }}
                  >
                    View source on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
