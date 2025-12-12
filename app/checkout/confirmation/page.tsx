import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, Download, FileText, LayoutDashboard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Order Confirmation',
  description: 'Your order has been confirmed. Thank you for your purchase.',
  robots: 'noindex,nofollow',
  alternates: {
    canonical: '/checkout/confirmation'
  }
}

export default function Confirmation() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: 'var(--space-12)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--gradient-brand)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6) auto'
              }}>
                <CheckCircle size={48} style={{ color: 'var(--white)' }} />
              </div>
              <h1 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                You&rsquo;re in - Start Plan active
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7
              }}>
                Your 30-day access is now active. Check your email for login details.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Order details
              </h2>

              <div style={{
                display: 'grid',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 'var(--space-3)',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <span style={{ color: 'var(--gray-600)' }}>Plan</span>
                  <span style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Start (30-day access)</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 'var(--space-3)',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <span style={{ color: 'var(--gray-600)' }}>Amount</span>
                  <span style={{ fontWeight: 600, color: 'var(--gray-900)' }}>$1.00 USD</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 'var(--space-3)',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <span style={{ color: 'var(--gray-600)' }}>Status</span>
                  <span style={{
                    fontWeight: 600,
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    <CheckCircle size={16} />
                    Paid
                  </span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-6)'
              }}>
                <Link
                  href="/dashboard"
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <LayoutDashboard size={18} />
                  Go to Dashboard
                </Link>
                <a
                  href="mailto:contact@originary.xyz?subject=Start%20Plan%20Invoice%20Request"
                  className="btn btn-secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <FileText size={18} />
                  Request Invoice
                </a>
                <Link
                  href="/downloads"
                  className="btn btn-secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Download size={18} />
                  Sample Receipt
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Next steps
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  {
                    step: '1',
                    title: 'Check your email',
                    description: 'Login credentials and access details have been sent to your email address.'
                  },
                  {
                    step: '2',
                    title: 'Access your dashboard',
                    description: 'Log in to your developer dashboard to configure your sandbox domain and verification settings.'
                  },
                  {
                    step: '3',
                    title: 'Try the tools',
                    description: 'Test the peac.txt validator, generate sample receipts, and explore the Gateway 402 demo.'
                  },
                  {
                    step: '4',
                    title: 'Get support',
                    description: 'Questions? Our team responds to all Start Plan queries within 48 hours.'
                  }
                ].map((item) => (
                  <div key={item.step} style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: 'var(--gradient-brand)',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--white)',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--gray-900)'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-600)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              textAlign: 'center',
              padding: 'var(--space-6)',
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--gray-200)'
            }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-4)'
              }}>
                Need help getting started?
              </p>
              <a
                href="mailto:contact@originary.xyz"
                style={{
                  color: 'var(--brand-primary)',
                  textDecoration: 'underline',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Email our developer support team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
