'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Briefcase, Code, Shield, Rocket, CheckCircle, ArrowRight, Users, Globe } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'implementation',
      name: 'Implementation Package',
      price: '$5,000',
      duration: '2 weeks',
      description: 'Full deployment of PEAC protocol with custom policy configuration, payment integration, and team training.',
      icon: <Rocket size={32} />,
      color: 'var(--brand-primary)',
      deliverables: [
        'peac.txt configuration and deployment',
        'Payment gateway integration (Stripe/x402)',
        'Custom policy rules and A/B testing',
        'Receipt verification setup',
        'Team training workshop (4 hours)',
        '30 days of support'
      ],
      ideal: 'Publishers launching agent monetization'
    },
    {
      id: 'migration',
      name: 'Migration Service',
      price: '$8,000',
      duration: '4 weeks',
      description: 'Migrate from existing paywall or authentication systems to PEAC protocol without disrupting current operations.',
      icon: <Code size={32} />,
      color: 'var(--success)',
      deliverables: [
        'Current system audit and mapping',
        'Zero-downtime migration plan',
        'Data migration and validation',
        'Parallel run with fallback',
        'Performance optimization',
        '60 days of support'
      ],
      ideal: 'Enterprises with existing systems'
    },
    {
      id: 'compliance',
      name: 'Compliance Audit',
      price: '$3,000',
      duration: '1 week',
      description: 'Comprehensive audit of your PEAC implementation for legal compliance, security, and performance optimization.',
      icon: <Shield size={32} />,
      color: 'var(--warning)',
      deliverables: [
        'Policy configuration review',
        'Security assessment report',
        'GDPR/CCPA compliance check',
        'Receipt integrity verification',
        'Performance recommendations',
        'Executive summary report'
      ],
      ideal: 'Regulated industries and enterprises'
    },
    {
      id: 'custom',
      name: 'Custom Development',
      price: 'Starting at $15,000',
      duration: '6-12 weeks',
      description: 'Build custom adapters, integrations, or extend PEAC protocol for your specific use case.',
      icon: <Briefcase size={32} />,
      color: 'var(--brand-accent)',
      deliverables: [
        'Requirements analysis',
        'Solution architecture design',
        'Custom adapter development',
        'Integration with existing systems',
        'Load testing and optimization',
        '90 days of support'
      ],
      ideal: 'Unique business requirements'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'Understand your needs, current setup, and success criteria'
    },
    {
      step: '2',
      title: 'Proposal & Timeline',
      description: 'Detailed scope, deliverables, and implementation schedule'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Dedicated team deploys and configures your solution'
    },
    {
      step: '4',
      title: 'Training & Handoff',
      description: 'Your team learns to operate and maintain the system'
    },
    {
      step: '5',
      title: 'Ongoing Support',
      description: 'Continued assistance and optimization as you scale'
    }
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--brand-primary)'
                }}
              >
                <Briefcase size={16} />
                <span>Professional Services</span>
              </div>
              <h1 style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.2
              }}>
                From proof of concept to <span className="text-gradient">production scale</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                Our team helps you deploy Originary&rsquo;s receipt infrastructure, integrate payments, and optimize for your specific use case. Fixed pricing, clear timelines.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                <a href="mailto:contact@originary.xyz?subject=Services%20Inquiry" className="btn btn-primary btn-lg">
                  Schedule consultation
                </a>
                <Link href="#packages" className="btn btn-secondary btn-lg">
                  View packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="section" id="packages">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Service packages with transparent pricing
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Choose a package or let us create a custom solution for your needs
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card"
                  style={{
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Service Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <div>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 'var(--space-3)',
                          color: service.color
                        }}
                      >
                        {service.icon}
                      </div>
                      <h3 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--space-2)'
                      }}>
                        {service.name}
                      </h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        color: 'var(--gray-900)'
                      }}>
                        {service.price}
                      </div>
                      <div style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-500)'
                      }}>
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--space-6)'
                  }}>
                    {service.description}
                  </p>

                  {/* Ideal For */}
                  <div style={{
                    padding: 'var(--space-3)',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <span style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-500)'
                    }}>
                      Ideal for:
                    </span>
                    <span style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-700)',
                      fontWeight: 600,
                      marginLeft: 'var(--space-2)'
                    }}>
                      {service.ideal}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h4 style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--gray-500)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 'var(--space-3)'
                    }}>
                      Deliverables
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.deliverables.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-2)',
                            marginBottom: 'var(--space-2)'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)', lineHeight: 1.5 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`mailto:contact@originary.xyz?subject=${encodeURIComponent(service.name + ' Inquiry')}`}
                    className="btn btn-primary"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-2)',
                      width: '100%'
                    }}
                  >
                    Get started
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Our proven process
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                From initial consultation to production deployment in weeks, not months
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-6)',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {process.map((item, index) => (
                <div
                  key={item.step}
                  style={{
                    textAlign: 'center',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--gradient-brand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-4) auto',
                      color: 'var(--white)',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    marginBottom: 'var(--space-2)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.5
                  }}>
                    {item.description}
                  </p>
                  {index < process.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '24px',
                        left: 'calc(50% + 24px)',
                        right: 'calc(-50% + 24px)',
                        height: '1px',
                        background: 'var(--gray-300)',
                        zIndex: -1
                      }}
                      className="process-connector"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section">
          <div className="container">
            <div
              className="card"
              style={{
                textAlign: 'center',
                padding: 'var(--space-12)',
                background: 'linear-gradient(135deg, var(--brand-primary)05, var(--brand-secondary)05)',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <div
                style={{
                  fontSize: 'var(--text-2xl)',
                  lineHeight: 1.6,
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-6)',
                  fontStyle: 'italic'
                }}
              >
                &ldquo;The Originary team helped us deploy PEAC protocol quickly and efficiently. The implementation process was smooth and well-documented.&rdquo;
              </div>
              <div>
                <div style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-1)'
                }}>
                  Sarah Chen
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-500)'
                }}>
                  CTO, TechPublisher Inc.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Let&rsquo;s build your agent economy
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Schedule a free consultation to discuss your requirements and get a custom proposal
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                <a
                  href="mailto:contact@originary.xyz?subject=Services%20Consultation"
                  className="btn btn-primary btn-lg"
                >
                  <Users size={18} />
                  Schedule consultation
                </a>
                <Link href="/pricing" className="btn btn-secondary btn-lg">
                  View self-serve options
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .process-connector {
            display: none;
          }
        }
      `}</style>
    </>
  )
}