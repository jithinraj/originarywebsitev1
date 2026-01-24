import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Product updates, new features, and improvements to the Originary platform and PEAC protocol.',
  keywords: 'changelog, product updates, new features, PEAC protocol updates',
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
              <h1 className="display">Changelog</h1>
              <p className="sub">Product updates, new features, and improvements to our platform and protocols.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <div className="changelog-entries">
                <div className="changelog-entry">
                  <div className="entry-header">
                    <h2>v1.0.0</h2>
                    <span className="entry-date">January 15, 2025</span>
                  </div>
                  <div className="entry-content">
                    <h3>🚀 New Features</h3>
                    <ul>
                      <li>PEAC Protocol v1.0 production release</li>
                      <li>Enterprise Studio dashboard</li>
                      <li>Multi-region deployment support</li>
                    </ul>
                    <h3>🔧 Improvements</h3>
                    <ul>
                      <li>Enhanced verification API performance</li>
                      <li>Improved SDK documentation</li>
                    </ul>
                  </div>
                </div>

                <div className="changelog-entry">
                  <div className="entry-header">
                    <h2>v0.9.0</h2>
                    <span className="entry-date">December 20, 2024</span>
                  </div>
                  <div className="entry-content">
                    <h3>🚀 New Features</h3>
                    <ul>
                      <li>Gateway (402) HTTP payment processing</li>
                      <li>Advanced adapter support</li>
                      <li>Enterprise billing integration</li>
                    </ul>
                  </div>
                </div>

                <div className="changelog-entry">
                  <div className="entry-header">
                    <h2>v0.8.0</h2>
                    <span className="entry-date">December 1, 2024</span>
                  </div>
                  <div className="entry-content">
                    <h3>🚀 New Features</h3>
                    <ul>
                      <li>PEAC Receipt verification API</li>
                      <li>Policy compliance checking</li>
                      <li>JavaScript SDK beta release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}