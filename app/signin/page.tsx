import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Originary account to access the PEAC protocol dashboard, manage your policies, and view analytics.',
  keywords: 'sign in, login, Originary account, PEAC dashboard, user portal',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Sign In',
    description: 'Sign in to your Originary account to access the PEAC protocol dashboard, manage your policies, and view analytics.',
    url: '/signin',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign In',
    description: 'Sign in to your Originary account to access the PEAC protocol dashboard, manage your policies, and view analytics.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/signin',
  },
}

export default function SignIn() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-16)',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Left side - Sign in form */}
            <div className="card" style={{ maxWidth: '480px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <h1 style={{ marginBottom: 'var(--space-4)' }}>Welcome back</h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Sign in to access your PEAC dashboard and manage your policies
                </p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    Email address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      style={{
                        width: '100%',
                        padding: 'var(--space-3) var(--space-4)',
                        paddingLeft: 'var(--space-12)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-base)',
                        transition: 'all var(--duration-200) var(--ease-out)'
                      }}
                    />
                    <Mail size={20} style={{
                      position: 'absolute',
                      left: 'var(--space-4)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)'
                    }} />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="password"
                      placeholder="••••••••"
                      style={{
                        width: '100%',
                        padding: 'var(--space-3) var(--space-4)',
                        paddingLeft: 'var(--space-12)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-base)',
                        transition: 'all var(--duration-200) var(--ease-out)'
                      }}
                    />
                    <Lock size={20} style={{
                      position: 'absolute',
                      left: 'var(--space-4)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)'
                    }} />
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  fontSize: 'var(--text-sm)'
                }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <input type="checkbox" />
                    <span style={{ color: 'var(--text-secondary)' }}>Remember me</span>
                  </label>
                </div>

                <button className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Sign in</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <div style={{
                textAlign: 'center',
                marginTop: 'var(--space-6)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--border-default)'
              }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  Need an account?{' '}
                  <Link href="/pricing" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontWeight: 600 }}>
                    View pricing
                  </Link>
                </p>
              </div>
            </div>

            {/* Right side - Benefits */}
            <div style={{ padding: 'var(--space-8)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                Access your <span className="text-gradient">PEAC dashboard</span>
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)'
              }}>
                Manage your agentic infrastructure with enterprise-grade tools and real-time analytics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                {[
                  {
                    title: 'Policy Management',
                    description: 'Create and manage PEAC policies for your resources'
                  },
                  {
                    title: 'Real-time Analytics',
                    description: 'Monitor agent interactions and usage patterns'
                  },
                  {
                    title: 'Receipt Verification',
                    description: 'Verify and audit all agent transactions'
                  },
                  {
                    title: 'Enterprise Controls',
                    description: 'Advanced security and compliance features'
                  }
                ].map((feature) => (
                  <div key={feature.title} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--accent-brand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 'var(--space-1)'
                    }}>
                      <span style={{ color: 'var(--white)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>✓</span>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-1)', fontWeight: 600 }}>{feature.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </div>
  )
}