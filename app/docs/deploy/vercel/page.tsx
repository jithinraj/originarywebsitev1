import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vercel Deployment Guide',
  description: 'Deploy Originary receipt verification on Vercel Edge Runtime. Use HTTP 402 gateway pattern with PEAC-Receipts on Vercel.',
  alternates: {
    canonical: '/docs/deploy/vercel'
  },
  openGraph: {
    title: 'Vercel Deployment Guide',
    description: 'Deploy Originary on Vercel Edge Runtime with HTTP 402 receipts.',
    url: '/docs/deploy/vercel',
    siteName: 'Originary',
    type: 'website'
  }
}

export default function VercelDocPage() {
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
              Vercel Deployment
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              Deploy Originary receipt verification on Vercel using Edge Runtime. Implement HTTP 402 gateway pattern with PEAC-Receipt verification at the edge.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Edge Middleware Pattern
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Vercel Edge Runtime lets you run code at the network edge before requests reach your application. Use Vercel middleware to intercept requests, challenge agents with HTTP 402, and verify PEAC-Receipts before allowing access to protected routes.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                This pattern keeps receipt verification logic separate from your application code and ensures sub-10ms verification latency globally.
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
                <li>Install Originary SDK: <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>npm install @originary/vercel</code></li>
                <li>Create <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>middleware.ts</code> with Originary receipt verification</li>
                <li>Add <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>ORIGINARY_API_KEY</code> to Vercel environment variables</li>
                <li>Deploy: <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>vercel deploy</code></li>
                <li>Middleware gates routes with 402 and verifies receipts at edge</li>
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
{`// middleware.ts
import { verifyReceipt } from '@originary/vercel'
import { NextResponse } from 'next/server'

export async function middleware(request: Request) {
  const receipt = request.headers.get('PEAC-Receipt')

  if (!receipt) {
    return new NextResponse('Payment Required', {
      status: 402,
      headers: { 'WWW-Authenticate': 'PEAC' }
    })
  }

  const valid = await verifyReceipt(receipt)
  if (!valid) {
    return new NextResponse('Invalid Receipt', { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
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
                Deploy with confidence on Vercel
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Add receipt verification to your Vercel Edge Functions today.
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
