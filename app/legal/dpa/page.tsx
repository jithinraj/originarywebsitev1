import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Data Processing Agreement',
  description: 'Data processing agreement for enterprise customers regarding GDPR compliance and data handling.',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/legal/dpa',
  },
}

export default function DPA() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">LEGAL</span>
              <h1 className="display">Data Processing Agreement</h1>
              <p className="sub">GDPR compliance and data handling terms for enterprise customers.</p>
              <p className="legal-date">Effective from July 24, 2025.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>Data Processing Terms</h2>
              <p>This Data Processing Agreement governs the processing of personal data in connection with our services.</p>

              <h2>GDPR Compliance</h2>
              <p>We are committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.</p>

              <h2>Data Security</h2>
              <p>We implement appropriate technical and organizational measures to ensure the security of personal data.</p>

              <h2>Contact Us</h2>
              <p>For any data protection questions, contact us at <a href="mailto:contact@originary.xyz">contact@originary.xyz</a>.</p>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
