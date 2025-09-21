import type { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Resources : Originary',
  description: 'Resources, documentation, and insights for building with the orchestration protocol for the agentic web.',
  keywords: 'agentic web, orchestration protocol, AI coordination, PEAC protocol',
  openGraph: {
    title: 'Resources : Originary',
    description: 'Resources, documentation, and insights for building with the orchestration protocol for the agentic web.',
    url: 'https://originary.xyz/resources/',
    siteName: 'Originary',
    images: [{ url: 'https://originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources : Originary',
    description: 'Resources, documentation, and insights for building with the orchestration protocol for the agentic web.',
    images: ['https://originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: 'https://originary.xyz/resources/',
  },
}

export default function ResourcesPage() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">RESOURCES</span>
              <h1 className="display">Resources</h1>
              <p className="sub">Documentation, insights, and updates for building with the orchestration protocol for the agentic web.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-3">
              <a className="card" href="/resources/blog">
                <h3>Blog</h3>
                <p>Insights, updates, and thoughts on the future of agentic coordination.</p>
                <span className="link">Read posts</span>
              </a>

              <a className="card" href="/resources/case-studies">
                <h3>Case Studies</h3>
                <p>Real-world implementations and use cases of the PEAC protocol in production.</p>
                <span className="link">View studies</span>
              </a>

              <a className="card" href="/resources/changelog">
                <h3>Changelog</h3>
                <p>Track the latest updates, releases, and improvements to our products.</p>
                <span className="link">See changes</span>
              </a>

              <a className="card" href="/receipts/">
                <h3>Receipts</h3>
                <p>Learn about cryptographic receipts for AI access, usage, and verification.</p>
                <span className="link">Explore receipts</span>
              </a>

              <a className="card" href="https://peacprotocol.org/" target="_blank" rel="noopener">
                <h3>Protocol Documentation</h3>
                <p>Complete technical documentation and specifications for the PEAC protocol.</p>
                <span className="link">Read docs</span>
              </a>

              <a className="card" href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener">
                <h3>GitHub Repository</h3>
                <p>Open source implementations, examples, and community contributions.</p>
                <span className="link">View code</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
