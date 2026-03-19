import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Publishers | Declare AI Access Terms',
  description: 'Publish machine-readable AI access preferences with AIPREF and peac.txt. Make policy outcomes provable with verifiable interaction records.',
  keywords: 'AI compliance, AI provenance, content protection, AIPREF, AI training preferences, publishers, content rights, PEAC protocol',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Publishers | Declare AI Access Terms',
    description: 'Publish machine-readable AI access preferences. Make policy outcomes provable with verifiable interaction records.',
    url: '/solutions/publishers',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publishers | Declare AI Access Terms',
    description: 'Publish machine-readable AI access preferences. Make policy outcomes provable.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/solutions/publishers',
  },
}

export default function Publishers() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', marginBottom: 'var(--space-16)' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--brand-primary-light)', color: 'var(--accent-brand)', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 'var(--space-6)' }}>
                PUBLISHERS
              </div>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Declare your terms. Make compliance provable.</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Publish machine-readable AI access preferences with AIPREF and peac.txt. When agents comply, Originary issues a verifiable interaction record proving what terms applied and what decision was made.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>What Originary adds for publishers</h2>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Usage preferences</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  Define how your content can be used for training, fine-tuning, search, and inference. Publish preferences at a well-known endpoint using AIPREF and peac.txt.
                </p>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Attribution requirements</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  Specify citation and credit requirements. When agents comply, the interaction record captures what attribution terms applied.
                </p>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Provable compliance</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  Each compliant interaction produces a signed record your team can verify offline, export, and use in disputes or audits.
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
              <li>Add an <code>aipref.json</code> and <code>peac.txt</code> file to your website root</li>
              <li>Agents discover your terms before accessing content</li>
              <li>Originary evaluates compliance against your declared preferences</li>
              <li>A signed interaction record proves what terms applied and what was allowed</li>
              <li>Export records for audits, disputes, or licensing verification</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Get started</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                Start with a peac.txt policy file. Add AIPREF preferences when you need finer-grained control.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary">
                  Start here
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/integrations/aipref" className="btn btn-ghost">
                  AIPREF integration
                </Link>
                <Link href="/receipts" className="btn btn-ghost">
                  Interaction records
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
