import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Shield, Terminal, Package, CheckCircle, Lock, Eye, ExternalLink, Zap, FileText } from 'lucide-react'

const PAGE_URL = 'https://www.originary.xyz/agent-auditor'
const INSPECTOR_URL = 'https://agent-auditor.originary.xyz/'
const GITHUB_URL = 'https://github.com/originaryx/agent-auditor'
const NPM_URL = 'https://www.npmjs.com/package/@originaryx/agent-auditor'

export const metadata: Metadata = {
  title: 'Agent Auditor | Originary',
  description:
    'Open and verify signed interaction records locally in your browser or CLI. No outbound verification or artifact fetches required.',
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
    title: 'Agent Auditor | Originary',
    description:
      'Open and verify signed interaction records locally in your browser or CLI. No outbound verification or artifact fetches required.',
    url: '/agent-auditor',
    siteName: 'Originary',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Agent Auditor | Originary',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Auditor | Originary',
    description:
      'Open and verify signed interaction records locally in your browser or CLI. No outbound verification or artifact fetches required.',
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
    'Open-source tool that decodes, displays, and verifies signed interaction records and evidence bundles issued by AI agents, middleware, and automated systems. Runs offline in the browser or as a CLI.',
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
  name: 'Agent Auditor | Inspect and Verify Signed Interaction Records',
  description:
    'Open-source tool for inspecting and verifying signed PEAC Protocol interaction records and evidence bundles. Runs offline in the browser or CLI.',
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
    <>
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
            paddingTop: '96px',
            paddingBottom: '40px',
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

              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>AGENT AUDITOR</div>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6.5vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
              }}>
                Open and verify signed interaction records
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '620px',
                margin: '0 auto var(--space-4) auto',
              }}>
                Inspect who acted, what happened, and whether the record is genuine. Local verification in browser or CLI.
              </p>

              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-tertiary)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto var(--space-10) auto',
              }}>
                Best for support, audit, disputes, technical review, and debugging trust boundaries.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-10)',
              }}>
                <Link href="#inspector" className="btn btn-primary btn-lg">
                  <span>Open a signed record now</span>
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
              <div className="grid grid-cols-1 sm:grid-cols-3" style={{
                gap: 'var(--space-4)',
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
                { icon: Lock, text: 'No outbound verification or artifact fetches' },
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
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-full)', background: 'var(--accent-success, var(--accent-brand))', display: 'inline-block' }} />
                Live — runs in your browser
              </div>
              <h2 style={{ marginBottom: 'var(--space-3)' }}>Drop a receipt and see what&apos;s inside</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto var(--space-4) auto', lineHeight: 1.6 }}>
                No setup. Drop any receipt file and see it decoded and verified instantly. Inspection and verification happen locally in your browser or CLI. No outbound verification or artifact fetches.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' as const, fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                <span style={{ padding: 'var(--space-1) var(--space-3)', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-default)' }}>
                  Browser: verifies receipt signatures and structure
                </span>
                <span style={{ padding: 'var(--space-1) var(--space-3)', background: 'var(--surface-card)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-default)' }}>
                  CLI: full bundle integrity verification
                </span>
              </div>
            </div>

            {/* App preview mockup + CTA */}
            <div style={{
              maxWidth: '860px',
              margin: '0 auto',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-default)',
              background: 'var(--surface-elevated)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
            }}>
              {/* Browser chrome */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-3) var(--space-5)',
                background: 'var(--code-bg-header)',
                borderBottom: '1px solid var(--border-default)',
              }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--chrome-red)', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--chrome-yellow)', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--chrome-green)', display: 'inline-block' }} />
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
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', display: 'flex', alignItems: 'center', gap: 'var(--space-1)', textDecoration: 'none', marginLeft: 'auto', whiteSpace: 'nowrap' as const, fontWeight: 500 }}
                >
                  Open <ExternalLink size={11} />
                </a>
              </div>

              {/* Mock drop zone */}
              <div style={{ padding: 'var(--space-12) var(--space-10)', background: 'var(--surface-base)' }}>
                <div style={{
                  border: '2px dashed var(--border-hover)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-12) var(--space-8)',
                  textAlign: 'center',
                  marginBottom: 'var(--space-6)',
                }}>
                  <div style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-3)', opacity: 0.3 }}>↑</div>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', margin: '0 0 var(--space-1)' }}>Drop a receipt or bundle here</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0 }}>or click to browse (.jws, .json, .zip)</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                  {['Valid Receipt', 'Invalid Receipt', 'Bundle'].map((label) => (
                    <div key={label} style={{ padding: 'var(--space-4)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-default)', textAlign: 'left' }}>
                      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-secondary)', display: 'block' }}>{label}</span>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', display: 'block', marginTop: 2 }}>Try a sample</span>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a
                    href={INSPECTOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    <span>Open Inspector</span>
                    <ExternalLink size={17} />
                  </a>
                  <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    Opens at agent-auditor.originary.xyz — no signup, no backend
                  </p>
                </div>
              </div>
            </div>
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
                  { text: 'send data anywhere.', suffix: 'Inspection and verification happen locally.' },
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
                Want to issue and verify at scale?
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 'var(--space-6)' }}>
                Agent Auditor inspects individual records. <strong>Originary Verify</strong> operationalizes verification at production scale with managed keys, evidence exports, and enterprise deployment options.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link href="/products/verify" className="btn btn-primary btn-sm">
                  Originary Verify
                </Link>
                <Link href="/developers" className="btn btn-secondary btn-sm">
                  Quickstart
                </Link>
                <Link href="/trust" className="btn btn-secondary btn-sm">
                  Trust Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: 'var(--space-10)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Got a signed record? Open it.
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto var(--space-8) auto' }}>
                No signup. No backend. Drop a file and see what it says.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="#inspector" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span>Open Inspector</span>
                  <ArrowRight size={18} />
                </Link>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  View source on GitHub
                </a>
              </div>
              <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                Do not have a signed record yet?{' '}
                <Link href="/agent-proof-check" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>
                  Use Proof Check
                </Link>{' '}
                to see what your team can observe, what another party can verify, and what is still missing.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
