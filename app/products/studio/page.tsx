import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Policy management and receipt observability dashboard for PEAC deployments. Coming Soon.',
  keywords: 'PEAC dashboard, policy management, receipt observability',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Studio | Originary',
    description: 'Policy management and receipt observability dashboard for PEAC deployments. Coming Soon.',
    url: '/products/studio',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio | Originary',
    description: 'Policy management and receipt observability dashboard for PEAC deployments. Coming Soon.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/products/studio',
  },
}

export default function Studio() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section
          className="section"
          style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
            <h1
              style={{
                fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
              }}
            >
              Studio{' '}
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-1) var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-brand)',
                  verticalAlign: 'middle',
                }}
              >
                Coming Soon
              </span>
            </h1>

            <p
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Policy management and receipt observability dashboard.
            </p>

            <p
              style={{
                fontSize: 'var(--text-base)',
                lineHeight: 1.7,
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-10)',
              }}
            >
              We&apos;re building Studio as the operational interface for PEAC deployments. Planned capabilities include
              policy editing, key management, receipt analytics, and governance views.
            </p>

            <Link href="mailto:contact@originary.xyz?subject=Studio%20Waitlist" className="btn btn-primary btn-lg">
              Join the waitlist
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
