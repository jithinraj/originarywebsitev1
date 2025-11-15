import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'

export const metadata: Metadata = {
  title: 'AI Builders | AI Compliance and AI Provenance Tracking | Originary',
  description: 'AI infrastructure tools and AI compliance for AI builders. Build AI systems with AI provenance tracking, AI receipts, verifiable interaction records, consent management, and cryptographic receipts for provable AI compliance.',
  keywords: 'AI builders, AI compliance, AI provenance tracking, AI infrastructure tools, creator rights, verifiable receipts, consent management, PEAC protocol, AIPREF, agent commerce',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'AI Builders | AI Compliance and AI Provenance Tracking | Originary',
    description: 'AI infrastructure tools for AI compliance and AI provenance tracking. Build AI systems with verifiable interaction records and cryptographic receipts.',
    url: 'https://www.originary.xyz/solutions/ai-builders',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary for AI Builders - AI Compliance and AI Provenance Tracking'
    }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Builders | AI Compliance and AI Provenance Tracking | Originary',
    description: 'AI infrastructure tools for AI compliance and AI provenance tracking. Build AI systems with verifiable interaction records and cryptographic receipts.',
    images: ['/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/solutions/ai-builders',
  },
}

export default function AIBuilders() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.originary.xyz/solutions/ai-builders#service",
        "name": "Originary for AI Builders",
        "description": "AI infrastructure tools for AI compliance and AI provenance tracking. Build AI systems that respect creator preferences, maintain consent, and provide verifiable interaction records.",
        "provider": {
          "@type": "Organization",
          "name": "Originary",
          "url": "https://www.originary.xyz"
        },
        "serviceType": "AI Compliance Platform",
        "areaServed": "Worldwide",
        "url": "https://www.originary.xyz/solutions/ai-builders"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.originary.xyz"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Solutions",
            "item": "https://www.originary.xyz/solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Builders",
            "item": "https://www.originary.xyz/solutions/ai-builders"
          }
        ]
      }
    ]
  }

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
                AI BUILDERS
              </div>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient"><Mark>Originary</Mark> for AI Builders</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', maxWidth: '800px', margin: '0 auto' }}>
                AI infrastructure tools for AI compliance and AI provenance tracking. Build AI systems that respect creator preferences, maintain consent, and provide verifiable interaction records with cryptographic proof.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Why Choose Originary</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', marginBottom: 'var(--space-12)' }}>
                Build AI systems that respect creator rights while providing verifiable compliance.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Provable</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Cryptographic receipts provide verifiable proof of policy compliance and creator consent.
                </p>
              </div>

              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  ⚖️
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Neutral</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Open protocol standards ensure no vendor lock-in and universal interoperability.
                </p>
              </div>

              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  🚀
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Practical</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Simple integration with existing ML workflows and infrastructure. Production-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>How It Works</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', marginBottom: 'var(--space-12)' }}>
                Integrate policy compliance directly into your AI development workflow.
              </p>
            </div>

            <div className="grid grid-4" style={{ gap: 'var(--space-8)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)'
                }}>
                  1
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Discover Policies</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Check for creator preferences before accessing any content or data.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)'
                }}>
                  2
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Respect Terms</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Honor creator requirements for attribution, usage limits, and consent.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)'
                }}>
                  3
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Generate Receipts</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Create cryptographic proof of every compliant interaction.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)'
                }}>
                  4
                </div>
                <h4 style={{ marginBottom: 'var(--space-3)' }}>Audit & Report</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Maintain comprehensive records for compliance audits and transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Business Advantages</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Build sustainable AI systems that respect creators and reduce legal risks.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
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
                  <span style={{ fontSize: '1.5rem' }}>✅</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Compliance by Design</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Built-in respect for creator preferences reduces legal risk and enables sustainable data relationships.
                </p>
              </div>

              <div className="card">
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
                  <span style={{ fontSize: '1.5rem' }}>🧼</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Model Hygiene</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Clean, attributable training data improves model quality and reduces contamination risks.
                </p>
              </div>

              <div className="card">
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
                  <span style={{ fontSize: '1.5rem' }}>🏆</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Competitive Differentiation</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Demonstrate responsible AI practices to customers, partners, and regulators.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Technical Integrations</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Seamless integration with modern AI infrastructure and frameworks.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Training Pipeline Integration</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  Seamless integration with popular ML frameworks including PyTorch, TensorFlow, and JAX. Policy checks run before data ingestion.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>PyTorch</span>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>TensorFlow</span>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>JAX</span>
                </div>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Inference-time Compliance</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  Real-time policy verification for retrieval-augmented generation (RAG) and dynamic data access scenarios.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>RAG</span>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Real-time</span>
                </div>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>MCP/A2A Compatibility</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  Native support for Model Context Protocol and Agent-to-Agent communication standards.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>MCP</span>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>A2A</span>
                </div>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Multi-cloud Deployment</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  Deploy across AWS, GCP, Azure, and on-premises infrastructure with unified policy management.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>AWS</span>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>GCP</span>
                  <span style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Azure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Implementation Patterns</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Choose the integration approach that works best for your infrastructure.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <h4 style={{ marginBottom: 'var(--space-4)' }}>SDK Integration</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
                  Embed policy checking directly into your training and inference code with our Python, JavaScript, and Go SDKs.
                </p>
                <div style={{ backgroundColor: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)', backgroundColor: 'var(--gray-100)' }}>
                    <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Python SDK Example</span>
                  </div>
                  <pre style={{ margin: 0, padding: 'var(--space-4)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', overflow: 'auto' }}><code>{`import originary

# Check policy before data access
policy = originary.check_policy(url)
if policy.allows_training():
    data = load_data(url)
    receipt = originary.generate_receipt(url, data)
    # Continue with training...`}</code></pre>
                </div>
              </div>

              <div className="card">
                <h4 style={{ marginBottom: 'var(--space-4)' }}>API Gateway</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
                  Deploy as middleware in your existing API infrastructure for centralized policy enforcement.
                </p>
                <div style={{ backgroundColor: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)', backgroundColor: 'var(--gray-100)' }}>
                    <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Gateway Configuration</span>
                  </div>
                  <pre style={{ margin: 0, padding: 'var(--space-4)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', overflow: 'auto' }}><code>{`# Kong/Envoy configuration
- name: originary-policy
  config:
    enforce_aipref: true
    generate_receipts: true
    audit_log: true`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ textAlign: 'center', background: 'var(--gradient-brand)', color: 'white' }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'white' }}>Start Building Responsibly</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
                Join AI builders who prioritize creator respect and sustainable data practices. Get started with our free development tier.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@originary.xyz" className="btn" style={{ backgroundColor: 'white', color: 'var(--brand-primary)' }}>
                  Talk to our AI team
                </a>
                <a href="/receipts" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                  AI usage receipts
                </a>
                <a href="/developers" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                  Developer tools for Originary and PEAC-Receipts
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