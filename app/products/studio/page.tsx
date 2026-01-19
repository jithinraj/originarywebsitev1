import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart, Shield, Settings, Users, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Enterprise dashboard for managing PEAC policies, signing keys, receipt verification, and compliance reporting.',
  keywords: 'PEAC dashboard, policy management, receipt verification, compliance reporting, enterprise orchestration',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Studio | Originary',
    description: 'Enterprise dashboard for managing PEAC policies, signing keys, receipt verification, and compliance reporting.',
    url: '/products/studio',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio | Originary',
    description: 'Enterprise dashboard for managing PEAC policies, signing keys, receipt verification, and compliance reporting.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/products/studio',
  },
}

export default function Studio() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
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
                <BarChart size={16} />
                <span>ENTERPRISE DASHBOARD</span>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-2)'
                }}>
                  <div style={{
                    background: 'var(--success)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>OPERATIONAL</div>
                  <div style={{
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>SOC 2</div>
                </div>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <span className="text-gradient">Command center</span> for agentic governance
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Enterprise-grade dashboard for comprehensive PEAC orchestration. Centralized policy management, cryptographic key lifecycle, real-time observability, and compliance reporting through an intuitive interface designed for security teams and DevOps engineers.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-8)',
                marginBottom: 'var(--space-10)',
                maxWidth: '800px',
                margin: '0 auto var(--space-10) auto'
              }}>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/company/contact" className="btn btn-primary btn-lg">
                  <span>Request enterprise access</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/demo" className="btn btn-secondary btn-lg">
                  <span>View live demo</span>
                  <Settings size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>Core capabilities</h2>
            <div className="grid grid-3" style={{ marginBottom: 'var(--space-20)' }}>
              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <FileText size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Policy Management</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Visual policy editor with real-time validation, version control, and automated deployment pipelines. Manage complex multi-tenant policies with inheritance and override rules.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Visual editor</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Git versioning</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Auto testing</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Key Lifecycle</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Complete cryptographic key management including generation, rotation, escrow, and secure destruction. Hardware Security Module (HSM) integration for enterprise-grade security.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Auto rotation</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>HSM integration</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Audit trails</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <BarChart size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Observability & Reporting</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Comprehensive observability engine with customizable dashboards, automated alerts, and scheduled reports. Real-time monitoring of agent behavior and system performance.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Custom dashboards</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Auto alerts</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Data export</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Users size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Team Management</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Role-based access control with SSO integration, approval workflows, and comprehensive audit logging. Manage team permissions across multiple environments and projects.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>RBAC controls</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>SSO integration</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Approval flows</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <CheckCircle size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Receipt Verification</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Real-time verification dashboard with batch processing capabilities. Monitor receipt authenticity, policy compliance, and generate audit reports for regulatory compliance.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Bulk verification</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Compliance scoring</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Fraud detection</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Compliance & Security</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Built-in compliance frameworks for SOC 2, GDPR, PCI DSS, and other regulatory requirements. Automated compliance monitoring with detailed audit trails and reporting.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>SOC 2 compliance</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>GDPR support</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Audit trails</span>
                </div>
              </div>
            </div>

            <div className="cta-card" style={{
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}>
                  Transform your agentic governance
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Join enterprise teams managing billions of agent transactions with comprehensive visibility, control, and compliance through Studio&apos;s unified dashboard. Our solution engineers provide white-glove setup and training for rapid deployment.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Request enterprise demo</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/platform"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span>View platform overview</span>
                  </Link>
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