import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy : Originary',
  description: 'Acceptable use policy outlining permitted and prohibited uses of Originary services.',
  robots: 'index,follow',
  alternates: {
    canonical: '/legal/acceptable-use',
  },
}

export default function AcceptableUse() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">LEGAL</span>
              <h1 className="display">Acceptable Use Policy</h1>
              <p className="sub">Guidelines for permitted and prohibited uses of our services.</p>
              <p className="legal-date">Effective from July 24, 2025.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>1. Purpose and Scope</h2>
              <p>This Acceptable Use Policy governs your use of Originary&rsquo;s services and applies to all users, including free and paid customers. This policy is incorporated into and forms part of our Terms of Service.</p>

              <h2>2. Permitted Uses</h2>
              <p>You may use our services for the following lawful purposes:</p>

              <h3>PEAC Protocol Implementation</h3>
              <ul>
                <li>Publishing and managing machine-readable policies for your content</li>
                <li>Implementing consent and attribution frameworks</li>
                <li>Facilitating transparent AI-content interactions</li>
                <li>Building applications that respect publisher policies</li>
              </ul>

              <h3>Commercial Activities</h3>
              <ul>
                <li>Monetizing APIs through our Gateway service</li>
                <li>Processing legitimate payments and transactions</li>
                <li>Generating receipts for compliance purposes</li>
                <li>Building business applications and integrations</li>
              </ul>

              <h3>Development and Research</h3>
              <ul>
                <li>Developing applications using our APIs and SDKs</li>
                <li>Conducting research on agentic web technologies</li>
                <li>Testing and prototyping new solutions</li>
                <li>Educational and academic use</li>
              </ul>

              <h2>3. Prohibited Uses</h2>
              <p>You may not use our services for any of the following prohibited purposes:</p>

              <h3>Illegal Activities</h3>
              <ul>
                <li>Any activity that violates applicable laws or regulations</li>
                <li>Money laundering, terrorist financing, or sanctions violations</li>
                <li>Fraud, identity theft, or financial crimes</li>
                <li>Intellectual property infringement or piracy</li>
                <li>Hacking, cracking, or unauthorized access attempts</li>
              </ul>

              <h3>Harmful Content</h3>
              <ul>
                <li>Content that promotes violence, terrorism, or illegal activities</li>
                <li>Hate speech, harassment, or discriminatory content</li>
                <li>Child exploitation or abuse material</li>
                <li>Non-consensual intimate images or revenge porn</li>
                <li>Content that threatens or incites harm to individuals or groups</li>
              </ul>

              <h3>Deceptive Practices</h3>
              <ul>
                <li>False or misleading policy representations</li>
                <li>Impersonation of individuals, organizations, or services</li>
                <li>Phishing, social engineering, or scam activities</li>
                <li>Generating fake receipts or verification documents</li>
                <li>Manipulating consent or attribution records</li>
              </ul>

              <h3>Technical Abuse</h3>
              <ul>
                <li>Attempting to circumvent security measures or access controls</li>
                <li>Reverse engineering, decompiling, or disassembling our services</li>
                <li>Launching denial-of-service attacks or similar disruptions</li>
                <li>Scraping or automated data collection beyond API limits</li>
                <li>Introducing malware, viruses, or malicious code</li>
              </ul>

              <h3>Service Abuse</h3>
              <ul>
                <li>Exceeding rate limits or usage quotas without authorization</li>
                <li>Creating multiple accounts to circumvent restrictions</li>
                <li>Reselling services without proper authorization</li>
                <li>Using services to compete directly with Originary</li>
                <li>Interfering with other users&rsquo; access to services</li>
              </ul>

              <h2>4. Content Guidelines</h2>

              <h3>User-Generated Content</h3>
              <p>When uploading or creating content through our services:</p>
              <ul>
                <li>Ensure you have rights to all content you upload</li>
                <li>Respect intellectual property rights of others</li>
                <li>Follow applicable content laws and regulations</li>
                <li>Maintain appropriate content classifications</li>
              </ul>

              <h3>PEAC Policies</h3>
              <p>When creating PEAC policies:</p>
              <ul>
                <li>Provide accurate and truthful policy information</li>
                <li>Clearly specify usage rights and restrictions</li>
                <li>Include appropriate attribution requirements</li>
                <li>Update policies when terms change</li>
              </ul>

              <h2>5. Commercial Use Guidelines</h2>

              <h3>Payment Processing</h3>
              <p>When using our Gateway service for payments:</p>
              <ul>
                <li>Only process payments for legitimate goods and services</li>
                <li>Provide clear descriptions of what users are purchasing</li>
                <li>Honor refund and dispute resolution policies</li>
                <li>Comply with payment card industry (PCI) standards</li>
              </ul>

              <h3>High-Risk Activities</h3>
              <p>Certain activities require pre-approval and additional compliance:</p>
              <ul>
                <li>Adult content or services (within legal bounds)</li>
                <li>Gambling or gaming with monetary prizes</li>
                <li>Cryptocurrency or digital asset services</li>
                <li>High-volume financial transactions</li>
                <li>Government or political campaigns</li>
              </ul>

              <h2>6. Compliance Requirements</h2>

              <h3>Legal Compliance</h3>
              <p>You must comply with all applicable laws, including:</p>
              <ul>
                <li>Data protection laws (GDPR, CCPA, etc.)</li>
                <li>Anti-money laundering (AML) regulations</li>
                <li>Export control and sanctions laws</li>
                <li>Consumer protection regulations</li>
                <li>Industry-specific compliance requirements</li>
              </ul>

              <h3>Platform Compliance</h3>
              <p>You must also comply with:</p>
              <ul>
                <li>All Originary terms of service and policies</li>
                <li>Third-party platform rules where applicable</li>
                <li>Industry standards and best practices</li>
                <li>Professional ethical guidelines</li>
              </ul>

              <h2>7. Monitoring and Enforcement</h2>

              <h3>Monitoring</h3>
              <p>We may monitor use of our services to:</p>
              <ul>
                <li>Ensure compliance with this policy</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Respond to legal requests or emergencies</li>
                <li>Improve service quality and security</li>
              </ul>

              <h3>Investigation</h3>
              <p>We reserve the right to investigate suspected violations by:</p>
              <ul>
                <li>Reviewing account activity and usage patterns</li>
                <li>Analyzing content and transaction data</li>
                <li>Cooperating with law enforcement when required</li>
                <li>Requesting additional information from users</li>
              </ul>

              <h2>8. Enforcement Actions</h2>

              <h3>Warning and Education</h3>
              <p>For minor violations, we may:</p>
              <ul>
                <li>Send warning notifications</li>
                <li>Provide guidance on compliance</li>
                <li>Require acknowledgment of policy updates</li>
                <li>Implement additional monitoring</li>
              </ul>

              <h3>Service Restrictions</h3>
              <p>For more serious violations, we may:</p>
              <ul>
                <li>Temporarily restrict access to services</li>
                <li>Limit transaction processing capabilities</li>
                <li>Require additional verification or documentation</li>
                <li>Place accounts under enhanced monitoring</li>
              </ul>

              <h3>Account Suspension or Termination</h3>
              <p>For severe or repeated violations, we may:</p>
              <ul>
                <li>Suspend accounts pending investigation</li>
                <li>Permanently terminate access to services</li>
                <li>Forfeit outstanding account balances</li>
                <li>Report violations to appropriate authorities</li>
              </ul>

              <h2>9. Reporting Violations</h2>

              <h3>How to Report</h3>
              <p>If you become aware of policy violations, please report them by:</p>
              <ul>
                <li>Emailing <a href="mailto:contact@originary.xyz">contact@originary.xyz</a> with details</li>
                <li>Using our online reporting form (when available)</li>
                <li>Contacting customer support through your dashboard</li>
                <li>Providing screenshots or evidence when possible</li>
              </ul>

              <h3>What to Include</h3>
              <p>When reporting violations, please include:</p>
              <ul>
                <li>Detailed description of the violation</li>
                <li>Account information or identifiers</li>
                <li>Supporting evidence or documentation</li>
                <li>Your contact information for follow-up</li>
              </ul>

              <h2>10. Appeals Process</h2>

              <h3>Appeal Rights</h3>
              <p>If your account is restricted or terminated, you may:</p>
              <ul>
                <li>Request a review of the enforcement action</li>
                <li>Provide additional context or evidence</li>
                <li>Propose remediation measures</li>
                <li>Seek clarification on policy interpretations</li>
              </ul>

              <h3>Appeal Process</h3>
              <p>To appeal an enforcement action:</p>
              <ul>
                <li>Submit appeal within 30 days of action</li>
                <li>Include relevant facts and supporting evidence</li>
                <li>Explain how you will prevent future violations</li>
                <li>Wait for our response within 15 business days</li>
              </ul>

              <h2>11. Policy Updates</h2>

              <p>We may update this policy to:</p>
              <ul>
                <li>Reflect changes in laws or regulations</li>
                <li>Address new types of abuse or violations</li>
                <li>Improve clarity and understanding</li>
                <li>Align with industry best practices</li>
              </ul>

              <p>We will notify you of material changes through:</p>
              <ul>
                <li>Email notification to your registered address</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications for significant changes</li>
                <li>At least 30 days advance notice when possible</li>
              </ul>

              <h2>12. Contact Information</h2>

              <p>For questions about this policy or to report violations:</p>

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
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
