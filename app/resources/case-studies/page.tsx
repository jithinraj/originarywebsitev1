import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'PEAC protocol implementation examples and integration patterns.',
  keywords: 'case studies, PEAC implementation, integration patterns',
  robots: 'index,follow',
  alternates: {
    canonical: '/resources/case-studies',
  },
}

export default function CaseStudies() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">RESOURCES</span>
              <h1 className="display">Case Studies</h1>
              <p className="sub">We&rsquo;re looking for early adopters to build implementation case studies with.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <div className="case-study-cta">
                <h2>Become an early adopter</h2>
                <p>PEAC is Apache-2.0 and ships with 20 npm packages, Express middleware, and a conformance runner. If you&rsquo;re integrating signed receipts into your stack, we&rsquo;d like to document the implementation with you.</p>
                <a href="mailto:contact@originary.xyz?subject=Case%20Study%20Interest" className="btn primary">Get in touch</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
