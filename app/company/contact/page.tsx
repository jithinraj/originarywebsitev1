import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MessageCircle, Users, Headphones, Building, Clock, Globe, CheckCircle, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact : Originary',
  description: 'Get in touch with the Originary team. Sales, support, partnerships, and general inquiries welcome.',
  keywords: 'contact Originary, sales, support, partnerships, customer service',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Contact : Originary',
    description: 'Get in touch with the Originary team. Sales, support, partnerships, and general inquiries welcome.',
    url: 'https://www.originary.xyz/company/contact',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact : Originary',
    description: 'Get in touch with the Originary team. Sales, support, partnerships, and general inquiries welcome.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/company/contact',
  },
}

export default function Contact() {
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
                <MessageCircle className="inline w-4 h-4 mr-1" />
                CONTACT
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Get in touch</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Ready to deploy agentic infrastructure? Have questions about our protocols?
                We&apos;d love to hear from you and help you get started.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
          <div className="container">
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)',
              border: '2px solid var(--brand-primary)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-8)',
                textAlign: 'left'
              }}>
                {/* Email */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>Email</h3>
                  </div>
                  <a
                    href="mailto:contact@originary.xyz"
                    style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--brand-primary)',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    contact@originary.xyz
                  </a>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-1)' }}>
                    For all inquiries
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Phone size={24} style={{ color: 'var(--brand-primary)' }} />
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>Phone</h3>
                  </div>
                  <a
                    href="tel:+919686860303"
                    style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--brand-primary)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 'var(--space-1)'
                    }}
                  >
                    +91 9686860303
                  </a>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    India support line
                  </p>
                </div>

                {/* Support Hours */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Clock size={24} style={{ color: 'var(--brand-primary)' }} />
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>Support Hours</h3>
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)', lineHeight: 1.8 }}>
                    <div style={{ marginBottom: 'var(--space-2)' }}>
                      <strong>India:</strong><br />
                      Mon-Fri, 10:00 AM - 5:00 PM IST
                    </div>
                    <div>
                      <strong>US:</strong><br />
                      Mon-Fri, 10:00 AM - 5:00 PM PT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
              {/* Left Column - Contact Options */}
              <div>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-8)' }}>
                  How can we help you?
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  <ContactOption
                    icon={<Building size={24} style={{ color: 'var(--brand-primary)' }} />}
                    title="Sales"
                    description="Interested in enterprise deployment? Our sales team can help you get started."
                    action="Contact Sales"
                    email="contact@originary.xyz"
                    response="< 2 hours during business hours"
                  />
                  <ContactOption
                    icon={<Headphones size={24} style={{ color: 'var(--brand-secondary)' }} />}
                    title="Support"
                    description="Need help with integration or have technical questions?"
                    action="Get Support"
                    email="contact@originary.xyz"
                    response="< 4 hours during business hours"
                  />
                  <ContactOption
                    icon={<Users size={24} style={{ color: 'var(--brand-accent)' }} />}
                    title="Partnerships"
                    description="Interested in partnering or integrating with our protocols?"
                    action="Partner With Us"
                    email="contact@originary.xyz"
                    response="< 24 hours"
                  />
                  <ContactOption
                    icon={<MessageCircle size={24} style={{ color: 'var(--brand-primary)' }} />}
                    title="General Inquiries"
                    description="For all other questions and inquiries."
                    action="Contact Us"
                    email="contact@originary.xyz"
                    response="< 24 hours"
                  />
                </div>
              </div>

              {/* Right Column - Response Times & Social */}
              <div>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-8)' }}>
                  Quick response times
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  <ResponseMetric
                    type="Sales inquiries"
                    time="< 2 hours"
                    description="during business hours"
                  />
                  <ResponseMetric
                    type="Enterprise support"
                    time="< 1 hour"
                    description="24/7"
                  />
                  <ResponseMetric
                    type="General support"
                    time="< 4 hours"
                    description="during business hours"
                  />
                  <ResponseMetric
                    type="Partnership inquiries"
                    time="< 24 hours"
                    description="guaranteed response"
                  />
                </div>

                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                  Follow us
                </h3>
                <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  <a
                    href="https://www.linkedin.com/company/originary/"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/originaryinc"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} />
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href="https://originary.substack.com"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={16} />
                    <span>Substack</span>
                  </a>
                </div>

                <div
                  className="card"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle size={48} style={{ color: 'var(--success)', margin: '0 auto var(--space-4) auto' }} />
                  <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                    Enterprise Priority Support
                  </h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                    Enterprise customers get dedicated support channels with priority response times
                    and direct access to our engineering team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Features */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Why our support stands out</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                We&apos;re committed to providing exceptional support that helps you succeed
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <SupportFeature
                icon={<Clock size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Fast Response Times"
                description="Get answers when you need them. Start plan users get community support, Pro tier gets responses within 4 hours, Enterprise within 1 hour."
              />
              <SupportFeature
                icon={<Users size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Expert Team"
                description="Our support team includes engineers who built the protocol, solution architects, and dedicated customer success specialists."
              />
              <SupportFeature
                icon={<Globe size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Global Coverage"
                description="Team members across US, Europe, and Asia time zones provide round-the-clock support coverage for enterprise customers."
              />
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
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
                <Building className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h2
                  style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--white)'
                  }}
                >
                  Ready for enterprise deployment?
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
                  Let&apos;s discuss how Originary can help scale your agentic infrastructure.
                  Our enterprise team is ready to design a custom solution for your needs.
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-4)',
                    flexWrap: 'wrap'
                  }}
                >
                  <a
                    href="mailto:contact@originary.xyz"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Schedule Enterprise Demo</span>
                    <ArrowRight size={18} />
                  </a>
                  <Link
                    href="/pricing"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span>View Enterprise Pricing</span>
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

function ContactOption({
  icon,
  title,
  description,
  action,
  email,
  response
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  email: string;
  response: string;
}) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-4)' }}>
        <div
          style={{
            padding: 'var(--space-3)',
            background: 'linear-gradient(135deg, rgba(99,91,255,0.1) 0%, rgba(0,212,170,0.05) 100%)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{title}</h3>
          <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>{description}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href={`mailto:${email}`} className="btn btn-primary">
              <span>{action}</span>
              <ArrowRight size={16} />
            </a>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>{response}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResponseMetric({
  type,
  time,
  description
}: {
  type: string;
  time: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-4)',
        border: '1px solid var(--gray-200)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontWeight: 600, color: 'var(--gray-900)' }}>{type}:</span>
          <span style={{ marginLeft: 'var(--space-2)', color: 'var(--brand-primary)', fontWeight: 700 }}>{time}</span>
        </div>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>{description}</span>
      </div>
    </div>
  )
}

function SupportFeature({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>{icon}</div>
      <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>{title}</h3>
      <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>{description}</p>
    </div>
  )
}