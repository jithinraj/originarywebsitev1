import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Receipt, Shield, Zap, Globe, BarChart, Scale, CheckCircle, Building, Lock, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cryptographic Receipts - Originary',
  description: 'Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Transparent AI operations for leading companies.',
  keywords: 'cryptographic receipts, AI verification, proof of use, blockchain receipts, AI transparency, enterprise AI, compliance',
  openGraph: {
    title: 'Cryptographic Receipts - Originary',
    description: 'Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Transparent AI operations for leading companies.',
    url: 'https://originary.xyz/receipts/',
    siteName: 'Originary',
    images: [{ url: 'https://originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cryptographic Receipts - Originary',
    description: 'Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Transparent AI operations for leading companies.',
    images: ['https://originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: 'https://originary.xyz/receipts/',
  },
}

export default function ReceiptsPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: 'var(--space-16)'
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  marginBottom: 'var(--space-4)',
                  display: 'block'
                }}
              >
                <Receipt className="inline w-4 h-4 mr-1" />
                CRYPTOGRAPHIC RECEIPTS
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Verifiable AI Interactions</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Enterprise-grade cryptographic receipts for AI access, usage verification, and compliance. Every interaction generates tamper-proof evidence for transparent operations.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap',
                  marginBottom: 'var(--space-16)'
                }}
              >
                <Link href="/developers" className="btn btn-primary btn-lg">
                  <span>Start Building</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="mailto:contact@originary.xyz" className="btn btn-secondary btn-lg">
                  Enterprise Demo
                </a>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-auto" style={{ gap: 'var(--space-8)', maxWidth: '1000px', margin: '0 auto' }}>
              <MetricCard value="10B+" label="Receipts Generated" />
              <MetricCard value="Verified" label="Cryptographic Proof" />
              <MetricCard value="500+" label="Enterprise Customers" />
              <MetricCard value="24/7" label="Global Coverage" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>How Cryptographic Receipts Work</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Every AI interaction generates a cryptographically signed receipt that provides verifiable proof of consent, usage, and compliance.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <FeatureCard
                icon={<Lock size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Cryptographic Signing"
                description="JWS (JSON Web Signature) ensures receipts cannot be tampered with or forged. Each receipt includes cryptographic proof of authenticity."
              />
              <FeatureCard
                icon={<Zap size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Real-time Generation"
                description="Receipts are generated instantly for every interaction, providing immediate proof of consent and compliance."
              />
              <FeatureCard
                icon={<Globe size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Global Verification"
                description="Verify receipts anywhere in the world through our global verification network with sub-second response times."
              />
              <FeatureCard
                icon={<BarChart size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Compliance Reporting"
                description="Generate comprehensive audit trails and compliance reports for regulatory requirements and internal governance."
              />
              <FeatureCard
                icon={<Shield size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Blockchain Anchoring"
                description="Optional blockchain anchoring provides additional immutability guarantees for high-stakes interactions."
              />
              <FeatureCard
                icon={<Scale size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Legal Validity"
                description="Receipts provide legally admissible evidence of consent, attribution, and compliance with applicable regulations."
              />
            </div>
          </div>
        </section>

        {/* Receipt Structure */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Receipt Structure</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Each receipt contains all necessary information for verification, compliance, and audit purposes.
              </p>
            </div>

            <div
              style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  background: 'var(--gray-900)',
                  color: 'var(--white)',
                  padding: 'var(--space-4) var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Example Receipt - Content Access
              </div>
              <pre
                style={{
                  background: 'var(--gray-900)',
                  color: 'var(--gray-100)',
                  padding: 'var(--space-6)',
                  margin: 0,
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1.6,
                  overflowX: 'auto'
                }}
              >
{`{
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
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Use Cases</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Cryptographic receipts enable transparent, verifiable AI operations across industries.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <UseCaseCard
                icon="🤖"
                title="AI Training Compliance"
                description="Prove that training data was accessed with proper consent and attribution for AI model development."
              />
              <UseCaseCard
                icon="📰"
                title="Content Licensing"
                description="Verify that published content was used according to licensing terms and attribution requirements."
              />
              <UseCaseCard
                icon="🏛️"
                title="Regulatory Audits"
                description="Provide comprehensive audit trails for GDPR, CCPA, AI Act, and other regulatory compliance."
              />
              <UseCaseCard
                icon="💼"
                title="Enterprise Governance"
                description="Maintain detailed records of AI system interactions for internal risk management and governance."
              />
              <UseCaseCard
                icon="⚖️"
                title="Legal Evidence"
                description="Generate legally admissible evidence for intellectual property disputes and compliance violations."
              />
              <UseCaseCard
                icon="📈"
                title="Usage Analytics"
                description="Track and analyze AI system behavior with verifiable usage patterns and interaction metrics."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                background: 'var(--gradient-brand)',
                borderRadius: 'var(--radius-3xl)',
                padding: 'var(--space-16) var(--space-8)',
                color: 'var(--white)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2
                  style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--white)'
                  }}
                >
                  Ready to Get Started?
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-xl)',
                    marginBottom: 'var(--space-8)',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto var(--space-8) auto'
                  }}
                >
                  Join hundreds of organizations using cryptographic receipts for transparent AI operations.
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-4)',
                    flexWrap: 'wrap'
                  }}
                >
                  <Link
                    href="/developers"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Start Building</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="mailto:contact@originary.xyz"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span>Talk to Sales</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="card"
      style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(255,255,255,0.9) 100%)'
      }}
    >
      <div
        style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 800,
          color: 'var(--brand-primary)',
          marginBottom: 'var(--space-2)'
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--gray-600)',
          fontWeight: 500
        }}
      >
        {label}
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  )
}

function UseCaseCard({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div
        style={{
          fontSize: '48px',
          marginBottom: 'var(--space-4)',
          textAlign: 'center'
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  )
}