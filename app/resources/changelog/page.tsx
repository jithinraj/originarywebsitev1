import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'
import { FACTS } from '@/lib/facts'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Release notes for the PEAC protocol and Originary packages.',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/resources/changelog',
  },
}

export default function Changelog() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">RESOURCES</span>
              <h1 className="display">Release History</h1>
              <p className="sub">
                Release notes are published on GitHub alongside each tagged
                release.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div
              className="content"
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: 'var(--space-6)',
                }}
              >
                Current version: <strong>{FACTS.protocolVersion}</strong>
                <br />
                Wire format: <strong>{FACTS.wireFormat}</strong> (frozen)
                <br />
                License: <strong>{FACTS.license}</strong>
                <br />
                Packages on npm: <strong>{FACTS.packagesCount}</strong>
              </p>

              <a
                href={FACTS.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', gap: 'var(--space-2)' }}
              >
                View releases on GitHub
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
