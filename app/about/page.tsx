import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Originary',
  description: 'Originary builds infrastructure rails and tools for the agentic web—solving Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.',
  alternates: {
    canonical: 'https://www.originary.xyz/about'
  },
  openGraph: {
    title: 'About Originary',
    description: 'Infrastructure for the agentic web. Built on the open-source PEAC Protocol.',
    url: 'https://www.originary.xyz/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {/* Brand eyebrow */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-12)',
                  fontWeight: 500
                }}
              >
                Originary builds infrastructure rails and tools for the agentic web—solving Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.
              </p>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}
              >
                About Originary
              </h1>

              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                Making the web work for both humans and agents
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Mission
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                The web was built for humans clicking links. AI agents need something different: clear policies, verifiable access, machine-readable consent, and economic rails that work at internet scale.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8 }}>
                We're building that infrastructure—starting with <strong>PEAC Protocol™</strong> (the open standard) and commercial products like <strong>Trace</strong>, <strong>Gateway</strong>, <strong>Verify</strong>, and <strong>Studio</strong>.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left', background: 'var(--gray-50)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Open Source Foundation
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                <strong>PEAC Protocol</strong> is our open-source standard (Apache-2.0) for policy discovery, verifiable receipts, and HTTP 402 payment semantics. Anyone can implement it—Originary Cloud is just one path.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link href="/peac" className="btn btn-primary btn-sm">
                  Explore PEAC
                </Link>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Products
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Trace
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    See every AI crawler on your site. Self-host (OSS) or use Originary Cloud for retention, alerts, and compliance bundles.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Gateway 402
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Production-grade HTTP 402 controls and payment adapters (Beta).
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Verify API
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    PEAC receipt verification and related utilities as an API (Waitlist).
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Studio
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Content policy design and compliance workflows (Private Beta).
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Link href="/products" className="btn btn-ghost btn-sm">
                  View all products →
                </Link>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'left', background: 'var(--gray-50)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Company
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                Originary™ is a brand of <strong>Poem, Inc.</strong>, a Delaware C-Corporation formed in October 2025.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Contact us
                </Link>
                <Link href="/legal/imprint" className="btn btn-ghost btn-sm">
                  View imprint
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
