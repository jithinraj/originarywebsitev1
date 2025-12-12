import type { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Company',
  description: 'Originary is a product company building orchestration for the agentic web. Learn about our infrastructure for intent routing, policy enforcement, and verified receipts across humans, agents, and machines. Contact our team or explore press resources.',
  keywords: 'agentic web, orchestration protocol, AI coordination, PEAC protocol',
  robots: 'noindex,follow',
  openGraph: {
    title: 'Company : Originary',
    description: 'Originary is a product company building orchestration for the agentic web.',
    url: 'https://www.originary.xyz/company',
    siteName: 'Originary',
    images: [{ url: 'https://www.originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company : Originary',
    description: 'Originary is a product company building orchestration for the agentic web.',
    images: ['https://www.originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: '/company',
  },
}

export default function CompanyPage() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">COMPANY</span>
              <h1 className="display">Company</h1>
              <p className="sub">Originary is a product company building orchestration for the agentic web.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-2">
              <div className="card">
                <h3>About Us</h3>
                <p>We build infrastructure for intent routing, policy enforcement, and verified receipts across humans, agents, and machines.</p>
                <a href="/company/about" className="link" aria-label="Learn more about Originary">Learn more about Originary</a>
              </div>
              <div className="card">
                <h3>Press & Media</h3>
                <p>Media inquiries and press resources.</p>
                <a href="/press" className="link">Press center</a>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <h3>Contact</h3>
                <p>Get in touch with our team.</p>
                <a href="/company/contact" className="link">Contact us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
