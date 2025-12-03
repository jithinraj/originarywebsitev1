import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Enterprises | AI Governance and AI Compliance for Agentic Infrastructure',
  description: 'AI governance and AI compliance tools for enterprise agentic infrastructure. Comprehensive policy management, AI compliance reporting, and security controls built for SOC 2, GDPR, and multi-region deployment.',
  keywords: 'AI governance, AI compliance, enterprise agentic governance, policy management, compliance reporting, SOC 2, GDPR, security controls, enterprise AI, agent governance',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Enterprises | AI Governance and AI Compliance',
    description: 'AI governance and AI compliance tools for enterprise agentic infrastructure. Comprehensive policy management, AI compliance reporting, and security controls for enterprises.',
    url: 'https://www.originary.xyz/solutions/enterprises',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprises | AI Governance and AI Compliance',
    description: 'AI governance and AI compliance tools for enterprise agentic infrastructure. Comprehensive policy management, AI compliance reporting, and security controls.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/solutions/enterprises',
  },
}

export default function Enterprises() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: 'var(--brand-primary-light)',
                color: 'var(--brand-primary)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-6)'
              }}>
                ENTERPRISES
              </div>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">AI Governance and AI Compliance for Enterprises</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', maxWidth: '800px', margin: '0 auto' }}>
                AI governance and AI compliance tools for enterprise agentic infrastructure. Comprehensive policy management, AI compliance reporting, and security controls built for SOC 2, GDPR, and multi-region deployment.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Enterprise Requirements</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Meet the most stringent enterprise security, compliance, and governance requirements for agentic infrastructure.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)', marginBottom: 'var(--space-16)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>🔐</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Security & Compliance</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>SOC 2 Type II compliance support</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>GDPR and CCPA compliance support</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>End-to-end encryption</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Role-based access controls</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>⚖️</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Governance & Control</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Centralized policy management</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Approval workflows</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Audit trail logging</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Real-time monitoring</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>⚡</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Scale & Performance</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Multi-region deployment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Enterprise support</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Auto-scaling infrastructure</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>24/7 enterprise support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Deployment Options</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Choose the deployment model that best fits your security and compliance requirements.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--brand-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>☁️</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Cloud Native</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                    Fully managed service on AWS, GCP, or Azure with auto-scaling and monitoring.
                  </p>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--brand-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>🏢</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>On-Premises</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                    Complete air-gapped deployment for maximum security and control.
                  </p>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--brand-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>🔄</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Hybrid Cloud</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                    Flexible deployment across multiple clouds and on-premises infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ textAlign: 'center', background: 'var(--gradient-brand)', color: 'white' }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'white' }}>Enterprise Deployment</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
                Talk to our enterprise team about custom deployment, training, and support options.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@originary.xyz" className="btn" style={{ backgroundColor: 'white', color: 'var(--brand-primary)' }}>
                  Contact Enterprise Sales
                </a>
                <a href="/receipts" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                  Audit trails and receipts
                </a>
                <a href="/peac" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                  PEAC policy layer
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}