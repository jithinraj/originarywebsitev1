import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Server, FileText, Shield, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Providers | Verifiable Agent Access',
  description: 'Publish machine-readable terms, verify agent requests, and return verifiable interaction records for every API call.',
  keywords: 'API monetization, HTTP 402, x402, agent payments, PEAC protocol, API providers, verifiable interaction records',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'API Providers | Verifiable Agent Access',
    description: 'Publish machine-readable terms, verify agent requests, and return verifiable interaction records.',
    url: '/solutions/api-providers',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API Providers | Verifiable Agent Access',
    description: 'Publish machine-readable terms, verify agent requests, and return verifiable interaction records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/solutions/api-providers',
  },
}

export default function APIProviders() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', marginBottom: 'var(--space-16)' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-brand)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 'var(--space-4)', display: 'block' }}>
                <Server className="inline w-4 h-4 mr-1" />
                API PROVIDERS
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">When agents call your API, keep proof</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Publish machine-readable terms with peac.txt. Verify agent requests at the boundary. Return a verifiable interaction record for every decision. Records are portable, offline-verifiable, and built on the PEAC open standard.
              </p>
            </div>
          </div>
        </section>

        {/* What Originary adds */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>What Originary adds to your API</h2>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <FileText className="w-8 h-8" style={{ color: 'var(--accent-brand)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Policy discovery</h3>
                <p style={{ lineHeight: 1.7 }}>
                  Agents discover your terms through a standard <code>peac.txt</code> policy file at a well-known endpoint. No proprietary integration required.
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <Shield className="w-8 h-8" style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Request verification</h3>
                <p style={{ lineHeight: 1.7 }}>
                  Evaluate agent requests, apply your access and rate-limit policy, and issue a signed record of the decision. Works with your existing auth and gateway.
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <Server className="w-8 h-8" style={{ color: 'var(--accent-brand)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>HTTP 402 flows</h3>
                <p style={{ lineHeight: 1.7 }}>
                  For priced endpoints, return HTTP 402 with a payment hint. Agents pay and retry with a verifiable receipt. Adapters available for x402 flows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="container" style={{ maxWidth: '720px' }}>
            <h2 style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>How it works</h2>
            <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', lineHeight: 2, fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
              <li>Publish a <code>peac.txt</code> policy file at <code>/.well-known/peac.txt</code></li>
              <li>Add Originary middleware to evaluate inbound requests</li>
              <li>Your rules decide: allow, deny, rate-limit, or challenge with HTTP 402</li>
              <li>A signed interaction record is returned in the <code>PEAC-Receipt</code> header</li>
              <li>Records are portable: your team can inspect, export, and use them in audits or disputes</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Get started</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                Start with a peac.txt policy and Express middleware. Add HTTP 402 flows when you need priced access.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary">
                  Start here
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/integrations/x402" className="btn btn-ghost">
                  x402 integration
                </Link>
                <Link href="/products/gateway-402" className="btn btn-ghost">
                  Gateway 402
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
