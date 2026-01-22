import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Originary terms of service governing your use of our platform and services.',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/legal/terms',
  },
}

export default function Terms() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-brand)'
                }}>
                  <span>LEGAL</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Terms of Service
                </h1>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}>
                  Terms governing your use of our platform and services.
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)'
                }}>
                  Effective from July 24, 2025.
                </p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
              <h2>1. Acceptance of Terms</h2>
              <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of Originary&rsquo;s services, including our website, APIs, and related platforms (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.</p>

              <h2>2. Description of Services</h2>
              <p>Originary provides infrastructure for agentic web coordination, including:</p>
              <ul>
                <li><strong>PEAC Protocol:</strong> Programmable Economic Access & Consent (open, receipts-first policy layer)</li>
                <li><strong>Verify API:</strong> Cryptographic verification services for receipts and policies</li>
                <li><strong>Gateway (402):</strong> HTTP 402 payment gateway for API monetization</li>
                <li><strong>Studio:</strong> Visual policy builder and testing environment</li>
                <li><strong>Adapters:</strong> Integration libraries for popular platforms</li>
                <li><strong>Receipt Services:</strong> Cryptographic receipt generation and management</li>
              </ul>

              <h2>3. Account Registration and Security</h2>

              <h3>Account Creation</h3>
              <p>To use certain features of our Services, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3>Account Responsibilities</h3>
              <p>You are solely responsible for:</p>
              <ul>
                <li>All activities that occur under your account</li>
                <li>Maintaining the security of your account credentials</li>
                <li>Compliance with all applicable laws and regulations</li>
                <li>Any content you upload, generate, or transmit through our Services</li>
              </ul>

              <h2>4. Acceptable Use Policy</h2>

              <h3>Permitted Uses</h3>
              <p>You may use our Services to:</p>
              <ul>
                <li>Implement PEAC policies for your content or APIs</li>
                <li>Generate and verify cryptographic receipts</li>
                <li>Process payments through our Gateway service</li>
                <li>Build applications that interact with the PEAC protocol</li>
                <li>Integrate our APIs into your existing systems</li>
              </ul>

              <h3>Prohibited Uses</h3>
              <p>You may not use our Services to:</p>
              <ul>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Circumvent or attempt to circumvent our security measures</li>
                <li>Interfere with or disrupt our Services or servers</li>
                <li>Use our Services for illegal content distribution</li>
                <li>Reverse engineer, decompile, or disassemble our proprietary software</li>
                <li>Resell or redistribute our Services without authorization</li>
              </ul>

              <h2>5. Payment Terms</h2>

              <h3>Pricing and Billing</h3>
              <p>Our pricing is available at <a href="/pricing">https://www.originary.xyz/pricing</a>. You agree to:</p>
              <ul>
                <li>Pay all fees according to your selected plan</li>
                <li>Provide valid payment information</li>
                <li>Pay invoices within 30 days of receipt</li>
                <li>Notify us of any billing disputes within 30 days</li>
              </ul>

              <h3>Transaction Processing</h3>
              <p>For services that process payments on your behalf:</p>
              <ul>
                <li>We charge transaction fees as outlined in your service agreement</li>
                <li>Refunds are processed according to our refund policy</li>
                <li>You are responsible for transaction taxes and fees</li>
                <li>Chargebacks may result in additional fees</li>
              </ul>

              <h2>6. Intellectual Property</h2>

              <h3>Our Rights</h3>
              <p>Originary retains all rights to:</p>
              <ul>
                <li>Our proprietary software, APIs, and documentation</li>
                <li>Trademarks, service marks, and logos</li>
                <li>Trade secrets and know-how</li>
                <li>Improvements and modifications to our Services</li>
              </ul>

              <h3>Your Rights</h3>
              <p>You retain all rights to:</p>
              <ul>
                <li>Your content and data uploaded to our Services</li>
                <li>PEAC policies you create using our tools</li>
                <li>Applications you build using our APIs</li>
                <li>Your trademarks and proprietary information</li>
              </ul>

              <h3>License Grants</h3>
              <p>We grant you a limited, non-exclusive, non-transferable license to use our Services according to these Terms. You grant us a license to host, store, and process your content as necessary to provide our Services.</p>

              <h2>7. Data and Privacy</h2>

              <h3>Data Processing</h3>
              <p>We process your data according to our Privacy Policy and applicable data protection laws. You represent that you have the right to upload any content to our Services.</p>

              <h3>Data Security</h3>
              <p>We implement industry-standard security measures, but you acknowledge that no system is completely secure. You are responsible for backing up your important data.</p>

              <h2>8. Service Level Agreement</h2>

              <h3>Availability</h3>
              <p>We strive to maintain 99.9% uptime for our core services. Planned maintenance will be announced in advance when possible.</p>

              <h3>Support</h3>
              <p>Support is provided according to your service tier:</p>
              <ul>
                <li><strong>Free Tier:</strong> Community support and documentation</li>
                <li><strong>Paid Plans:</strong> Email support with response times based on plan</li>
                <li><strong>Enterprise:</strong> Dedicated support with guaranteed response times</li>
              </ul>

              <h2>9. Limitation of Liability</h2>

              <p><strong>TO THE FULLEST EXTENT PERMITTED BY LAW, ORIGINARY SHALL NOT BE LIABLE FOR:</strong></p>
              <ul>
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, DATA, USE, OR GOODWILL</li>
                <li>SERVICE INTERRUPTIONS OR SECURITY BREACHES</li>
                <li>THIRD-PARTY ACTIONS OR CONTENT</li>
              </ul>

              <p><strong>OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF $100 OR THE AMOUNTS PAID BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.</strong></p>

              <h2>10. Indemnification</h2>

              <p>You agree to indemnify and hold harmless Originary from any claims, damages, or expenses arising from:</p>
              <ul>
                <li>Your use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of applicable laws</li>
                <li>Infringement of third-party rights by your content</li>
              </ul>

              <h2>11. Termination</h2>

              <h3>Termination by You</h3>
              <p>You may terminate your account at any time by contacting support. Paid services will continue until the end of your billing period.</p>

              <h3>Termination by Us</h3>
              <p>We may suspend or terminate your account for:</p>
              <ul>
                <li>Violation of these Terms</li>
                <li>Non-payment of fees</li>
                <li>Illegal or harmful activities</li>
                <li>Extended inactivity</li>
              </ul>

              <h3>Effect of Termination</h3>
              <p>Upon termination:</p>
              <ul>
                <li>Your access to Services will cease</li>
                <li>We will provide reasonable time to export your data</li>
                <li>Outstanding fees remain due</li>
                <li>Certain provisions of these Terms survive termination</li>
              </ul>

              <h2>12. Modifications to Terms</h2>

              <p>We may modify these Terms from time to time. We will:</p>
              <ul>
                <li>Provide at least 30 days notice for material changes</li>
                <li>Post updated Terms on our website</li>
                <li>Send email notifications for significant changes</li>
              </ul>

              <p>Your continued use of our Services after such notice constitutes acceptance of the modified Terms.</p>

              <h2>13. Dispute Resolution</h2>

              <h3>Governing Law</h3>
              <p>These Terms are governed by the laws of the State of California, without regard to conflict of law principles.</p>

              <h3>Arbitration</h3>
              <p>Most disputes can be resolved informally. For disputes that cannot be resolved informally, you agree to binding arbitration under the American Arbitration Association Commercial Arbitration Rules.</p>

              <h3>Class Action Waiver</h3>
              <p>You agree to resolve disputes individually and waive any right to participate in class actions or representative proceedings.</p>

              <h2>14. Force Majeure</h2>

              <p>Neither party shall be liable for delays or failures due to circumstances beyond their reasonable control, including natural disasters, government actions, or network failures.</p>

              <h2>15. Severability</h2>

              <p>If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force and effect.</p>

              <h2>16. Entire Agreement</h2>

              <p>These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Originary.</p>

              <h2>17. Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>

              <div style={{
                background: 'var(--surface-subtle)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)'
              }}>
                <p style={{ marginBottom: 'var(--space-2)' }}>
                  <strong>Contact:</strong> <Link href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>contact@originary.xyz</Link>
                </p>
              </div>

                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <Link href="/legal/privacy" className="btn btn-secondary" style={{ marginRight: 'var(--space-4)' }}>
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
