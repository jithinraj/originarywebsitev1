import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }} id="main-content">
        <div style={{ textAlign: 'center', maxWidth: '600px', padding: 'var(--space-8)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: 'var(--radius-2xl)',
            background: 'var(--accent-brand-subtle)',
            border: '1px solid var(--accent-brand-muted)',
            marginBottom: 'var(--space-6)'
          }}>
            <span style={{
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              color: 'var(--accent-brand)'
            }}>
              404
            </span>
          </div>

          <h1 style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 700,
            marginBottom: 'var(--space-4)',
            color: 'var(--text-primary)'
          }}>
            Page not found
          </h1>

          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: 'var(--space-8)'
          }}>
            Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for. The page might have been moved or deleted.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary">
              Go to Homepage
            </Link>
            <Link href="/developers" className="btn btn-secondary">
              Developers
            </Link>
            <Link href="/demo" className="btn btn-ghost">
              View Demo
            </Link>
          </div>

          <div style={{
            marginTop: 'var(--space-12)',
            padding: 'var(--space-6)',
            background: 'var(--surface-subtle)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-xl)'
          }}>
            <h2 style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Popular Pages
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Link href="/pricing" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                Pricing
              </Link>
              <Link href="/docs/receipts" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                Documentation
              </Link>
              <Link href="/contact" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                Contact Sales
            </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
