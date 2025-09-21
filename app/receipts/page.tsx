import type { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Cryptographic Receipts - Originary',
  description: 'Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Trusted by Fortune 500 companies for transparent AI operations.',
  keywords: 'cryptographic receipts, AI verification, proof of use, blockchain receipts, AI transparency, enterprise AI, compliance',
  openGraph: {
    title: 'Cryptographic Receipts - Originary',
    description: 'Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Trusted by Fortune 500 companies for transparent AI operations.',
    url: 'https://originary.xyz/receipts/',
    siteName: 'Originary',
    images: [{ url: 'https://originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cryptographic Receipts - Originary',
    description: 'Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Trusted by Fortune 500 companies for transparent AI operations.',
    images: ['https://originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: 'https://originary.xyz/receipts/',
  },
}

export default function ReceiptsPage() {
  return (
    <StaticPageLayout>
      <main>
        <section className="receipts-hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">CRYPTOGRAPHIC RECEIPTS</span>
              <h1 className="display">Verifiable AI Interactions</h1>
              <p className="sub">Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Every interaction generates tamper-proof evidence for transparent operations.</p>

              <div className="actions">
                <a href="/developers/" className="btn primary">Start Building</a>
                <a href="mailto:contact@originary.xyz" className="btn secondary">Enterprise Demo</a>
              </div>
            </div>

            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-value">10B+</div>
                <div className="metric-label">Receipts Generated</div>
              </div>
              <div className="metric">
                <div className="metric-value">99.99%</div>
                <div className="metric-label">Verification Accuracy</div>
              </div>
              <div className="metric">
                <div className="metric-value">500+</div>
                <div className="metric-label">Enterprise Customers</div>
              </div>
              <div className="metric">
                <div className="metric-value">24/7</div>
                <div className="metric-label">Global Coverage</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>How Cryptographic Receipts Work</h2>
              <p className="lead">Every AI interaction generates a cryptographically signed receipt that provides verifiable proof of consent, usage, and compliance.</p>
            </div>

            <div className="receipt-features">
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>Cryptographic Signing</h3>
                <p>JWS (JSON Web Signature) ensures receipts cannot be tampered with or forged. Each receipt includes cryptographic proof of authenticity.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Real-time Generation</h3>
                <p>Receipts are generated instantly for every interaction, providing immediate proof of consent and compliance.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Global Verification</h3>
                <p>Verify receipts anywhere in the world through our global verification network with sub-second response times.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Compliance Reporting</h3>
                <p>Generate comprehensive audit trails and compliance reports for regulatory requirements and internal governance.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3>Blockchain Anchoring</h3>
                <p>Optional blockchain anchoring provides additional immutability guarantees for high-stakes interactions.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Legal Validity</h3>
                <p>Receipts provide legally admissible evidence of consent, attribution, and compliance with applicable regulations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Receipt Structure</h2>
              <p className="lead">Each receipt contains all necessary information for verification, compliance, and audit purposes.</p>
            </div>

            <div className="code-example">
              <div className="code-header">Example Receipt - Content Access</div>
              <pre>{`{
  "header": {
    "alg": "ES256",
    "typ": "JWT",
    "kid": "originary-2025-01"
  },
  "payload": {
    "iss": "verify.originary.xyz",
    "sub": "agent-12345",
    "aud": "content-provider.com",
    "iat": 1640995200,
    "exp": 1672531200,
    "jti": "receipt-uuid-12345",
    "interaction": {
      "type": "content_access",
      "resource": "https://news.example.com/article/ai-breakthrough",
      "policy_version": "v1.2.3",
      "consent_given": true,
      "attribution_required": "© 2025 News Example",
      "license": "CC-BY-NC",
      "usage_type": "training_data"
    },
    "payment": {
      "amount": "0.10",
      "currency": "USD",
      "transaction_id": "tx_abc123",
      "method": "stripe"
    },
    "compliance": {
      "gdpr_lawful_basis": "legitimate_interest",
      "ccpa_compliant": true,
      "ai_act_compliant": true
    }
  },
  "signature": "MEUCIQCxvZ...cryptographic_signature...xyz"
}`}</pre>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Use Cases</h2>
              <p className="lead">Cryptographic receipts enable transparent, verifiable AI operations across industries.</p>
            </div>

            <div className="receipt-features">
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>AI Training Compliance</h3>
                <p>Prove that training data was accessed with proper consent and attribution for AI model development.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📰</div>
                <h3>Content Licensing</h3>
                <p>Verify that published content was used according to licensing terms and attribution requirements.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🏛️</div>
                <h3>Regulatory Audits</h3>
                <p>Provide comprehensive audit trails for GDPR, CCPA, AI Act, and other regulatory compliance.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <h3>Enterprise Governance</h3>
                <p>Maintain detailed records of AI system interactions for internal risk management and governance.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Legal Evidence</h3>
                <p>Generate legally admissible evidence for intellectual property disputes and compliance violations.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Usage Analytics</h3>
                <p>Track and analyze AI system behavior with verifiable usage patterns and interaction metrics.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="feature-highlight">
              <h2>Ready to Get Started?</h2>
              <p className="lead">Join hundreds of organizations using cryptographic receipts for transparent AI operations.</p>
              <div className="actions">
                <a href="/developers/" className="btn primary">Start Building</a>
                <a href="mailto:contact@originary.xyz" className="btn secondary">Talk to Sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}