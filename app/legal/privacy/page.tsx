import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy : Originary',
  description: 'Originary privacy policy outlining how we collect, use, and protect your personal information.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/legal/privacy',
  },
}

export default function Privacy() {
  return (
    <div className="wrap">
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
                  Privacy Policy
                </h1>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-4)'
                }}>
                  How we collect, use, and protect your personal information.
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-500)'
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
                  color: 'var(--gray-700)'
                }}>
              <h2>1. Information We Collect</h2>

              <h3>Information You Provide</h3>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, company information, and billing details when you create an account</li>
                <li><strong>Communication Data:</strong> Messages, support requests, and feedback you send to us</li>
                <li><strong>Payment Information:</strong> Credit card details and billing information (processed securely through our payment processors)</li>
                <li><strong>Content:</strong> PEAC policies, receipts, and other data you upload or generate through our services</li>
              </ul>

              <h3>Information We Collect Automatically</h3>
              <ul>
                <li><strong>Usage Data:</strong> API calls, feature usage, performance metrics, and interaction patterns</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Analytics Data:</strong> Page views, clicks, time spent on our services, and user flows</li>
                <li><strong>Technical Logs:</strong> Error logs, security events, and system performance data</li>
              </ul>

              <h3>Information from Third Parties</h3>
              <ul>
                <li><strong>Authentication Providers:</strong> Profile information from SSO providers like Google, GitHub, or Microsoft</li>
                <li><strong>Payment Processors:</strong> Transaction status and payment verification data</li>
                <li><strong>Integration Partners:</strong> Data from connected services and platforms you authorize</li>
              </ul>

              <h2>2. How We Use Your Information</h2>

              <h3>Service Provision</h3>
              <ul>
                <li>Provide, operate, and maintain our PEAC protocol infrastructure</li>
                <li>Process payments and manage billing for our services</li>
                <li>Generate and verify cryptographic receipts</li>
                <li>Facilitate policy discovery and consent management</li>
              </ul>

              <h3>Communications</h3>
              <ul>
                <li>Send service-related notifications and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Share product updates and feature announcements</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h3>Improvement and Analytics</h3>
              <ul>
                <li>Analyze usage patterns to improve our services</li>
                <li>Monitor system performance and security</li>
                <li>Develop new features and capabilities</li>
                <li>Conduct research on agentic web technologies</li>
              </ul>

              <h3>Legal and Security</h3>
              <ul>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Protect against fraud, security threats, and abuse</li>
                <li>Enforce our terms of service and policies</li>
                <li>Respond to legal requests and court orders</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>

              <p>We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:</p>

              <h3>Service Providers</h3>
              <p>We work with trusted third-party service providers who assist us in operating our business:</p>
              <ul>
                <li><strong>Cloud Hosting:</strong> Vercel, AWS, and other infrastructure providers</li>
                <li><strong>Payment Processing:</strong> Stripe, PayPal, and other payment processors</li>
                <li><strong>Analytics:</strong> Google Analytics, Mixpanel, and similar services</li>
                <li><strong>Customer Support:</strong> Intercom, Zendesk, and communication platforms</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of the transaction.</p>

              <h3>Legal Requirements</h3>
              <p>We may disclose your information when required by law, regulation, or legal process, or when necessary to protect our rights or the safety of others.</p>

              <h3>With Your Consent</h3>
              <p>We may share your information with third parties when you explicitly consent to such sharing.</p>

              <h2>4. Data Security</h2>

              <p>We implement industry-standard security measures to protect your personal information:</p>
              <ul>
                <li><strong>Encryption:</strong> Data is encrypted in transit using TLS 1.3 and at rest using AES-256</li>
                <li><strong>Access Controls:</strong> Strict role-based access controls and multi-factor authentication</li>
                <li><strong>Monitoring:</strong> Continuous security monitoring and intrusion detection</li>
                <li><strong>Regular Audits:</strong> Third-party security assessments and penetration testing</li>
                <li><strong>Incident Response:</strong> Comprehensive incident response and breach notification procedures</li>
              </ul>

              <h2>5. Data Retention</h2>

              <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations:</p>
              <ul>
                <li><strong>Account Data:</strong> Retained while your account is active and for 3 years after closure</li>
                <li><strong>Receipt Data:</strong> Retained for 7 years for compliance and audit purposes</li>
                <li><strong>Payment Records:</strong> Retained for 7 years as required by financial regulations</li>
                <li><strong>Usage Logs:</strong> Retained for 2 years for security and analytics purposes</li>
              </ul>

              <h2>6. Your Rights</h2>

              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>

              <p>To exercise these rights, please contact us at <a href="mailto:contact@originary.xyz">contact@originary.xyz</a>.</p>

              <h2>7. International Transfers</h2>

              <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place:</p>
              <ul>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions for transfers to countries with adequate data protection</li>
                <li>Certification schemes and codes of conduct where applicable</li>
              </ul>

              <h2>8. Children&rsquo;s Privacy</h2>

              <p>Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>

              <h2>9. Cookies and Tracking Technologies</h2>

              <p>We use cookies and similar technologies to improve your experience:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Necessary for basic functionality and security</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how our services are used</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with your consent)</li>
              </ul>

              <p>You can manage cookie preferences through your browser settings or our cookie preference center.</p>

              <h2>10. Changes to This Policy</h2>

              <p>We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
              <ul>
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications for significant changes</li>
              </ul>

              <p>Your continued use of our services after such notice constitutes acceptance of the updated policy.</p>

              <h2>11. Contact Information</h2>

              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>

              <div className="contact-info">
                <p><strong>Contact:</strong> <a href="mailto:contact@originary.xyz">contact@originary.xyz</a></p>
                <p><strong>Mailing Address (US):</strong><br />
                Originary<br />
                3260 Hillview Ave<br />
                Palo Alto, California, US - 94304<br />
                United States</p>
                <p><strong>Mailing Address (India):</strong><br />
                Originary<br />
                Ground floor, DLF Cyber City<br />
                WeWork Forum, DLF Phase 3<br />
                Gurugram, Haryana 122002<br />
                India</p>
              </div>

              <h2>12. Jurisdiction-Specific Provisions</h2>

              <h3>California Residents (CCPA)</h3>
              <p>California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information we collect and how it&rsquo;s used, and the right to delete personal information.</p>

              <h3>European Union Residents (GDPR)</h3>
              <p>EU residents have rights under the General Data Protection Regulation, including the right to access, rectify, erase, restrict processing, and data portability.</p>

              <h3>Virginia Residents (VCDPA)</h3>
              <p>Virginia residents have rights under the Virginia Consumer Data Protection Act, including rights to access, correct, delete, and opt-out of certain processing activities.</p>

                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <Link href="/legal/terms" className="btn btn-secondary" style={{ marginRight: 'var(--space-4)' }}>
                  Terms of Service
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
