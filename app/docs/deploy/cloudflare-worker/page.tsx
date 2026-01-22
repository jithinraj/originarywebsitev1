import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cloudflare Workers Deployment',
  description: 'Deploy Originary PEAC-Receipt verification at the edge with Cloudflare Workers. Challenge with HTTP 402 and verify receipts in under 5ms.',
  alternates: {
    canonical: '/docs/deploy/cloudflare-worker'
  },
  openGraph: {
    title: 'Cloudflare Workers Deployment',
    description: 'Deploy Originary at the edge with Cloudflare Workers.',
    url: '/docs/deploy/cloudflare-worker',
    siteName: 'Originary',
    type: 'website'
  }
}

export default function CloudflareWorkerDocPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ minHeight: '100vh', background: 'var(--surface-elevated)' }}>
        <div className="container" style={{ padding: 'var(--space-32) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              DEPLOYMENT
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)'
            }}>
              Cloudflare Workers
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              Deploy Originary receipt verification at the edge with Cloudflare Workers. Challenge requests with HTTP 402 and verify PEAC-Receipts in under 5ms globally.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Edge Receipt Verification
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Cloudflare Workers run at 300+ edge locations worldwide, making them ideal for verifying PEAC-Receipts with minimal latency. Gate your origin behind a Worker that challenges agents with HTTP 402 and verifies receipts before forwarding requests.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Ed25519 signature verification is fast enough to run at the edge, typically completing in under 5ms. This pattern keeps your origin clean while enforcing payment and policy at the network edge.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                5-Minute Quickstart
              </h2>
              <ol style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Install Originary Worker template: <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>npm create cloudflare@latest -- --template originary/worker</code></li>
                <li>Configure your Originary API key and policy URL</li>
                <li>Deploy to Cloudflare: <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>wrangler deploy</code></li>
                <li>Worker intercepts requests, challenges with 402, verifies receipts</li>
                <li>Valid receipts are forwarded to origin; invalid requests are rejected at edge</li>
              </ol>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Code Example
              </h2>
              <pre style={{
                background: 'var(--text-primary)',
                color: 'var(--surface-card)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                overflow: 'auto',
                lineHeight: 1.6
              }}>
{`export default {
  async fetch(request, env) {
    const receipt = request.headers.get('PEAC-Receipt')

    if (!receipt) {
      return new Response('Payment Required', {
        status: 402,
        headers: { 'WWW-Authenticate': 'PEAC' }
      })
    }

    const valid = await verifyReceipt(receipt, env.ORIGINARY_KEY)
    if (!valid) return new Response('Invalid Receipt', { status: 403 })

    return fetch(request) // Forward to origin
  }
}`}
              </pre>
            </div>

            <div style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              marginTop: 'var(--space-12)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Deploy to the edge in minutes
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Protect your origin with edge receipt verification using Cloudflare Workers.
              </p>
              <Link href="/developers" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
