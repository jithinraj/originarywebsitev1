import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Terms of Service : Originary',
  description: 'Terms of Service for Originary - commercial tools implementing receipts for the agentic web.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/terms',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'Terms of Service for Originary - commercial tools implementing receipts for the agentic web.',
  url: 'https://originary.xyz/terms',
  dateModified: '2025-07-27',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://originary.xyz'
  }
}

export default function Terms() {
  return (
    <div className="wrap">
      <Script id="terms-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--brand-primary)'
                }}>
                  <span>LEGAL</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Terms of Service
                </h1>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-500)'
                }}>
                  Effective from 2025-07-27
                </p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'var(--gray-700)'
                }}>
              <h2>Who you&apos;re contracting with</h2>
              <p>&ldquo;Originary&rdquo;, &ldquo;we&rdquo;, and &ldquo;us&rdquo; mean <strong>Curious Explorations Private Limited</strong> (&ldquo;CEPL&rdquo;), which operates <strong>originary.xyz</strong> and commercial tools that implement <strong>receipts for the agentic web</strong>. A U.S. affiliate may be appointed in the future; until then, these Terms are with CEPL.</p>

              <h2>What we provide</h2>
              <ul>
                <li><strong>Receipts tooling.</strong> Tools and endpoints to generate, attach, verify, and audit cryptographic receipts (e.g., the <code>PEAC-Receipt</code> header).</li>
                <li><strong>Policy helpers.</strong> A <code>peac.txt</code> generator/validator and edge header snippets.</li>
                <li><strong>Gateways/adapters.</strong> Access to settlement gateway (402) and adapters where enabled on your plan.</li>
                <li><strong>Open protocol interoperability.</strong> We interoperate with the <strong>open-source PEAC protocol</strong>; those OSS assets are provided under their own licenses.</li>
              </ul>

              <h2>Accounts &amp; eligibility</h2>
              <p>You must be 18+, create an account, and keep credentials secure. You&apos;re responsible for actions under your account.</p>

              <h2>Business use</h2>
              <p>Our services are intended for business and developer use. You confirm you are using the services on behalf of a business or for professional purposes.</p>

              <h2>Plans, fees &amp; taxes</h2>
              <ul>
                <li><strong>Developer activation:</strong> one-time <strong>USD $1</strong> purchase. Non-refundable.</li>
                <li><strong>Professional / Enterprise:</strong> as listed or quoted; billed in advance. Failure to pay may result in suspension.</li>
                <li>Prices exclude applicable taxes; you&apos;re responsible for taxes and withholdings.</li>
              </ul>

              <h2>Acceptable use (summary)</h2>
              <p>Do not use the services to violate law, infringe rights, evade <code>peac.txt</code> terms, or disrupt others&apos; systems. No scraping beyond what applicable <code>peac.txt</code> policies and valid receipts permit.</p>

              <h2>Your content; data processing</h2>
              <p>You own your content. You grant us the rights needed to operate, support, and improve the services. We process limited telemetry per the <strong>Privacy Policy</strong>. We do not sell personal data.</p>

              <h2>Receipts &amp; verification</h2>
              <p>A valid <strong>receipt</strong> may be required on each request to third-party surfaces. Receipts encode terms (consent, attribution, retention, permitted purposes, etc.). You are responsible for storing any receipts necessary for your audits.</p>

              <h2>Third-party rails &amp; OSS</h2>
              <p>Adapters (payment rails, runtimes) and OSS packages are third-party offerings; availability and terms may change. Use them under their respective licenses.</p>

              <h2>Service changes</h2>
              <p>We may improve or modify features from time to time. Where a change materially reduces core functionality of a paid plan, we will provide reasonable notice.</p>

              <h2>Disclaimers</h2>
              <p>Services are provided <strong>&ldquo;as is&rdquo;</strong> without warranties of merchantability, fitness, or non-infringement, to the extent permitted by law.</p>

              <h2>Limitation of liability</h2>
              <p>To the extent permitted by law: (a) indirect, incidental, special, or consequential damages are excluded; (b) our aggregate liability is capped at amounts you paid in the 12 months before the claim.</p>

              <h2>Indemnity</h2>
              <p>You will indemnify us from third-party claims arising from your unlawful use or breach of these Terms.</p>

              <h2>Business transfers</h2>
              <p>If we are involved in a merger, acquisition, financing, or sale of assets, your account information may be transferred as part of that transaction subject to these Terms and the Privacy Policy.</p>

              <h2>Governing law &amp; venue</h2>
              <p>These Terms are governed by the laws of <strong>India</strong>. Courts in <strong>Bengaluru, India</strong> have exclusive jurisdiction. <em>For U.S. enterprise customers, we may mutually agree to U.S. law/venue in your order form.</em></p>

              <h2>Changes</h2>
              <p>We may update these Terms. We&apos;ll change the &ldquo;Last updated&rdquo; date and, for material changes, provide reasonable notice. Continued use means acceptance.</p>

              <h2>Contact</h2>
              <p><strong>Legal:</strong> <Link href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)' }}>contact@originary.xyz</Link></p>
              <p><strong>Address:</strong> Curious Explorations Private Limited - Bangalore, Karnataka, India</p>

                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <Link href="/privacy" className="btn btn-secondary" style={{ marginRight: 'var(--space-4)' }}>
                  Privacy Policy
                </Link>
                <Link href="/company/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}