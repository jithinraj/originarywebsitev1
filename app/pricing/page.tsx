import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, Github, Building2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'

export const metadata: Metadata = {
  title: 'Pricing | Originary',
  description: 'PEAC Protocol is free and open-source. Apache-2.0. Self-host with no limits, no fees, no sign-up. Commercial support available for teams deploying at scale.',
  keywords: ['PEAC Protocol pricing', 'open source', 'Apache-2.0', 'self-host', 'free'],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  alternates: { canonical: '/pricing' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pricing | Originary',
    description: 'PEAC Protocol is free and open-source. Apache-2.0. Self-host with no limits, no fees, no sign-up.',
    url: '/pricing',
    type: 'website',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Originary',
    description: 'PEAC Protocol is free and open-source. Apache-2.0. Self-host with no limits, no fees, no sign-up.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

export default function PricingPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto', marginBottom: 'var(--space-16)' }}>

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
                <Github size={13} />
                Free and Open Source
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
              }}>
                <span className="text-gradient">The protocol is free.</span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>Always.</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)',
              }}>
                PEAC Protocol is {FACTS.license} licensed. Self-host on your own infrastructure with no limits, no fees, and no sign-up required. Verification does not require Originary to be online.
              </p>

              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
              >
                <Github size={18} />
                Get started on GitHub
              </a>
            </div>

            {/* ── OSS feature card ─────────────────────────────────────── */}
            <div style={{
              maxWidth: '740px',
              margin: '0 auto',
              padding: 'var(--space-10)',
              background: 'var(--accent-brand-faint)',
              border: '2px solid var(--accent-brand)',
              borderRadius: 'var(--radius-2xl)',
              position: 'relative',
              overflow: 'visible',
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--accent-brand)',
                color: 'var(--white)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                padding: '6px 20px',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}>
                Open Source — {FACTS.license}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                <span style={{ fontSize: 'clamp(var(--text-5xl), 8vw, 72px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.04em', lineHeight: 1 }}>$0</span>
                <span style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>forever</span>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-8)' }}>
                {FACTS.publishedPackageCount} packages on npm · {FACTS.testsCount} tests · Apache-2.0
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-3)' }}>
                {[
                  'Full protocol specification',
                  'Verifiable interaction records (JWS)',
                  'Wire 0.2 — current stable format',
                  'Policy discovery (peac.txt)',
                  'MCP server — 5 verification tools',
                  'CLI and SDK packages',
                  'Self-managed signing keys',
                  'Offline verification — no Originary dependency',
                  'Ed25519 signature verification',
                  'Evidence bundles for disputes',
                  'A2A and HTTP carrier support',
                  'Community support via GitHub',
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle size={16} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Enterprise callout ────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <Building2 size={20} style={{ color: 'var(--text-secondary)' }} />
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  Commercial support
                </h2>
              </div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                For organizations that need guided integration, managed deployments, attested keys, or dedicated engineering support. Terms are scoped to your use case.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                {[
                  'Guided integration and deployment support',
                  'KMS-backed attested signing keys',
                  'Compliance evidence bundles',
                  'Dedicated engineering access',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={15} style={{ color: 'var(--text-tertiary)', flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:contact@originary.xyz?subject=Commercial%20Support"
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
              >
                Contact us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-8)', color: 'var(--text-primary)' }}>
                Common questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                {[
                  {
                    q: 'Can I self-host everything?',
                    a: `Yes. PEAC Protocol and all core packages are ${FACTS.license} licensed and free to self-host. Verification does not require Originary to be online. No data is sent to any Originary service.`,
                  },
                  {
                    q: 'Is the protocol truly open?',
                    a: 'Yes. The protocol specification, all reference implementations, and core tooling are published on GitHub under Apache-2.0. You can build your own conformant implementation without involving Originary.',
                  },
                  {
                    q: 'What payment rails are supported?',
                    a: 'PEAC is rail-neutral. It produces verifiable records of interactions, not payment mandates. HTTP 402 adapters are available for teams that need challenge/response payment flows.',
                  },
                  {
                    q: 'Who should contact you about commercial support?',
                    a: 'API providers, agent platforms, and security or compliance teams that need managed deployments, attested signing infrastructure, or dedicated integration support.',
                  },
                ].map(({ q, a }) => (
                  <details
                    key={q}
                    style={{
                      padding: 'var(--space-5)',
                      borderBottom: '1px solid var(--border-default)',
                    }}
                  >
                    <summary style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                    }}>
                      {q}
                      <span style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-lg)', flexShrink: 0 }}>+</span>
                    </summary>
                    <p style={{ marginTop: 'var(--space-4)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 'var(--space-4) 0 0 0', fontSize: 'var(--text-sm)' }}>
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OSS commitment ────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--accent-brand-faint)',
              border: '2px solid var(--accent-brand)',
              textAlign: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <Github size={24} style={{ color: 'var(--accent-brand)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  Open source, no exceptions
                </h3>
              </div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto var(--space-6) auto' }}>
                The protocol specification, reference implementations, and all core tooling are {FACTS.license} licensed. Originary is the commercial steward — not a gatekeeper.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={15} />
                  View on GitHub
                </a>
                <Link href="/peac" className="btn btn-secondary btn-sm">
                  Protocol spec
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
