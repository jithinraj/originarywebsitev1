import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Payment Terms : Originary',
  description: 'Payment terms and billing policies for Originary services.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/legal/payments',
  },
}

export default function Payments() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">LEGAL</span>
              <h1 className="display">Payment Terms</h1>
              <p className="sub">Payment terms and billing policies for our services.</p>
              <p className="legal-date">Effective from July 24, 2025.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>1. Billing and Payment Terms</h2>

              <h3>Payment Schedule</h3>
              <p>Payments are due according to your selected billing cycle:</p>
              <ul>
                <li><strong>Monthly Plans:</strong> Charged monthly in advance on your billing date</li>
                <li><strong>Annual Plans:</strong> Charged annually in advance with applicable discounts</li>
                <li><strong>Usage-Based:</strong> Charged monthly in arrears based on actual usage</li>
                <li><strong>Enterprise:</strong> Custom payment terms as specified in your agreement</li>
              </ul>

              <h3>Payment Processing</h3>
              <p>We use secure third-party payment processors including:</p>
              <ul>
                <li>Stripe for credit card processing</li>
                <li>PayPal for alternative payment methods</li>
                <li>Bank transfer for enterprise customers</li>
                <li>Cryptocurrency for supported regions</li>
              </ul>

              <h2>2. Accepted Payment Methods</h2>

              <h3>Credit and Debit Cards</h3>
              <ul>
                <li>Visa, Mastercard, American Express, Discover</li>
                <li>International cards from supported countries</li>
                <li>Corporate and business cards</li>
                <li>Automatic card updating through payment processors</li>
              </ul>

              <h3>Alternative Payment Methods</h3>
              <ul>
                <li>PayPal and PayPal Business accounts</li>
                <li>Apple Pay and Google Pay (where available)</li>
                <li>ACH bank transfers (US customers)</li>
                <li>SEPA direct debit (EU customers)</li>
                <li>Wire transfers for large payments</li>
              </ul>

              <h3>Cryptocurrency</h3>
              <p>We accept cryptocurrency payments in supported regions:</p>
              <ul>
                <li>Bitcoin (BTC)</li>
                <li>Ethereum (ETH)</li>
                <li>USD Coin (USDC)</li>
                <li>Other stablecoins as available</li>
              </ul>

              <h2>3. Pricing and Fees</h2>

              <h3>Service Fees</h3>
              <p>Our current pricing is available at <a href="/pricing">originary.xyz/pricing</a>. Fees include:</p>
              <ul>
                <li><strong>Subscription Fees:</strong> Monthly or annual platform access</li>
                <li><strong>Usage Fees:</strong> Based on API calls, receipts generated, or transactions processed</li>
                <li><strong>Transaction Fees:</strong> Percentage of payments processed through our Gateway</li>
                <li><strong>Professional Services:</strong> Custom implementation and consulting</li>
              </ul>

              <h3>Payment Processing Fees</h3>
              <p>Payment processing fees are passed through from our payment providers:</p>
              <ul>
                <li>Credit cards: 2.9% + $0.30 per transaction</li>
                <li>ACH/Bank transfer: 0.8% (capped at $5.00)</li>
                <li>International cards: Additional 1.5% fee</li>
                <li>Cryptocurrency: Network fees apply</li>
              </ul>

              <h3>Currency and Taxes</h3>
              <p>Pricing and tax handling:</p>
              <ul>
                <li>All prices listed in USD unless otherwise specified</li>
                <li>Automatic currency conversion available</li>
                <li>Sales tax, VAT, and GST added where applicable</li>
                <li>Tax-exempt customers must provide valid certificates</li>
              </ul>

              <h2>4. Billing Cycles and Invoicing</h2>

              <h3>Subscription Billing</h3>
              <p>For subscription services:</p>
              <ul>
                <li>Charges occur on the same date each month/year</li>
                <li>Automatic renewal unless cancelled</li>
                <li>Prorated charges for mid-cycle upgrades</li>
                <li>Credits applied for downgrades at next billing cycle</li>
              </ul>

              <h3>Usage-Based Billing</h3>
              <p>For usage-based services:</p>
              <ul>
                <li>Usage tracked in real-time</li>
                <li>Monthly invoices sent within 5 business days</li>
                <li>Detailed usage breakdowns provided</li>
                <li>Payment due within 30 days of invoice date</li>
              </ul>

              <h3>Enterprise Billing</h3>
              <p>Enterprise customers may have custom terms including:</p>
              <ul>
                <li>Custom billing cycles and payment terms</li>
                <li>Purchase order support</li>
                <li>Net 30, 60, or 90 payment terms</li>
                <li>Volume discounts and custom pricing</li>
              </ul>

              <h2>5. Failed Payments and Suspension</h2>

              <h3>Payment Failures</h3>
              <p>If a payment fails, we will:</p>
              <ul>
                <li>Immediately notify you via email</li>
                <li>Retry payment up to 3 times over 7 days</li>
                <li>Provide a grace period to update payment information</li>
                <li>Suspend services if payment cannot be collected</li>
              </ul>

              <h3>Account Suspension</h3>
              <p>Accounts may be suspended for:</p>
              <ul>
                <li>Non-payment after grace period expires</li>
                <li>Disputed charges or chargebacks</li>
                <li>Suspected fraudulent activity</li>
                <li>Violation of terms of service</li>
              </ul>

              <h3>Service Restoration</h3>
              <p>To restore suspended services:</p>
              <ul>
                <li>Pay all outstanding balances</li>
                <li>Update payment information if needed</li>
                <li>Contact support to reactivate account</li>
                <li>Services typically restored within 24 hours</li>
              </ul>

              <h2>6. Refunds and Credits</h2>

              <h3>Refund Policy</h3>
              <p>We offer refunds in the following circumstances:</p>
              <ul>
                <li><strong>Service Issues:</strong> Significant service outages or failures</li>
                <li><strong>Billing Errors:</strong> Incorrect charges or duplicate payments</li>
                <li><strong>Cancellation:</strong> Prorated refunds for unused subscription periods</li>
                <li><strong>Disputes:</strong> Resolved billing disputes or chargebacks</li>
              </ul>

              <h3>Refund Process</h3>
              <p>To request a refund:</p>
              <ul>
                <li>Contact support within 30 days of charge</li>
                <li>Provide details about the issue or error</li>
                <li>Refunds processed within 5-10 business days</li>
                <li>Refunds returned to original payment method</li>
              </ul>

              <h3>Account Credits</h3>
              <p>Account credits may be issued for:</p>
              <ul>
                <li>Service level agreement violations</li>
                <li>Downgrade prorations</li>
                <li>Promotional offers and discounts</li>
                <li>Customer goodwill gestures</li>
              </ul>

              <h2>7. Disputes and Chargebacks</h2>

              <h3>Dispute Resolution</h3>
              <p>Before disputing charges with your bank:</p>
              <ul>
                <li>Contact our support team first</li>
                <li>Most issues can be resolved quickly</li>
                <li>We maintain detailed transaction records</li>
                <li>Disputes can be expensive and time-consuming</li>
              </ul>

              <h3>Chargeback Policy</h3>
              <p>If you initiate a chargeback:</p>
              <ul>
                <li>Your account may be suspended immediately</li>
                <li>Chargeback fees ($15-25) will be charged</li>
                <li>We will respond with transaction evidence</li>
                <li>Service restoration requires resolution</li>
              </ul>

              <h2>8. Price Changes</h2>

              <h3>Subscription Price Changes</h3>
              <p>For subscription services:</p>
              <ul>
                <li>30 days advance notice for price increases</li>
                <li>Grandfathering of existing customers when possible</li>
                <li>Option to cancel before increase takes effect</li>
                <li>New prices apply at next billing cycle</li>
              </ul>

              <h3>Usage-Based Price Changes</h3>
              <p>For usage-based pricing:</p>
              <ul>
                <li>Updated pricing published on website</li>
                <li>Changes effective for new usage</li>
                <li>Enterprise customers have contract protection</li>
                <li>Notification via email and dashboard</li>
              </ul>

              <h2>9. International Considerations</h2>

              <h3>Currency Conversion</h3>
              <p>For international customers:</p>
              <ul>
                <li>Charges processed in USD by default</li>
                <li>Currency conversion by your bank or card issuer</li>
                <li>Exchange rates determined by payment processor</li>
                <li>Local currency billing available in select regions</li>
              </ul>

              <h3>Taxes and Compliance</h3>
              <p>International tax compliance:</p>
              <ul>
                <li>VAT charged for EU customers</li>
                <li>GST charged for applicable countries</li>
                <li>Tax registration in required jurisdictions</li>
                <li>Reverse charge mechanism where applicable</li>
              </ul>

              <h2>10. Contact Information</h2>

              <p>For billing questions, payment issues, or disputes, please contact us:</p>

              <div className="contact-info">
                <p><strong>Contact:</strong> <a href="mailto:contact@originary.xyz">contact@originary.xyz</a></p>
                <p><strong>Support Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</p>
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
