'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import {
  Building,
  Users,
  Mail,
  FileText,
  ArrowRight,
  Newspaper,
  BookOpen,
  Receipt,
  Globe,
  Heart
} from 'lucide-react'

export default function CompanyPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const quickLinks = [
    {
      name: 'About Us',
      desc: 'Our mission, team, and what we build for the agentic web.',
      href: '/about',
      icon: <Users size={24} />,
      featured: true
    },
    {
      name: 'Contact',
      desc: 'Get in touch with sales, support, or partnerships.',
      href: '/contact',
      icon: <Mail size={24} />,
      featured: true
    },
    {
      name: 'Press & Media',
      desc: 'Press kit, media inquiries, and brand assets.',
      href: '/press',
      icon: <Newspaper size={24} />,
      featured: false
    },
    {
      name: 'Brand Guidelines',
      desc: 'Logos, colors, and usage guidelines.',
      href: '/brand',
      icon: <Heart size={24} />,
      featured: false
    },
  ]

  const resources = [
    {
      name: 'Blog',
      desc: 'Technical articles on HTTP 402, AI payments, and PEAC receipts.',
      href: '/blog',
      icon: <BookOpen size={20} />
    },
    {
      name: 'Documentation',
      desc: 'Developer guides, API reference, and integration tutorials.',
      href: '/developers',
      icon: <FileText size={20} />
    },
    {
      name: 'PEAC Protocol',
      desc: 'Open-source protocol for policy and receipts.',
      href: '/peac',
      icon: <Receipt size={20} />
    },
  ]

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Security', href: '/security' },
    { name: 'Imprint', href: '/legal/imprint' },
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section
          className="section"
          style={{
            position: 'relative',
            background: 'var(--gradient-mesh)',
            paddingTop: 'var(--space-24)',
            paddingBottom: 'var(--space-16)',
            overflow: 'hidden'
          }}
        >
          {/* Animated Gradient Orbs */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,91,255,0.1) 0%, transparent 70%)',
              animation: 'float 8s ease-in-out infinite',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)',
              animation: 'float 6s ease-in-out infinite reverse',
              pointerEvents: 'none'
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--brand-primary)'
                }}
              >
                <Building size={16} />
                COMPANY
              </div>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}
              >
                About <span className="text-gradient">Originary</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Building receipts and policy infrastructure for the agentic web.
                Learn about our mission, connect with our team, or explore our resources.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-primary btn-lg">
                  Learn about us
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-6)',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="card"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: link.featured ? '2px solid var(--brand-primary)' : '1px solid var(--gray-200)',
                    background: link.featured ? 'linear-gradient(135deg, rgba(99,91,255,0.03) 0%, rgba(0,212,170,0.03) 100%)' : 'var(--white)'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-lg)',
                      background: link.featured
                        ? 'var(--gradient-brand)'
                        : 'linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(0, 212, 170, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: link.featured ? 'var(--white)' : 'var(--brand-primary)',
                      flexShrink: 0
                    }}
                  >
                    {link.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--gray-900)',
                      marginBottom: 'var(--space-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}>
                      {link.name}
                      <ArrowRight size={16} style={{ color: 'var(--brand-primary)' }} />
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                      {link.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <h2
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}
                >
                  Resources
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.7
                  }}
                >
                  Explore our technical content and developer resources
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--space-4)'
                }}
              >
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    href={resource.href}
                    className="card"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-4) var(--space-5)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-primary)',
                        flexShrink: 0
                      }}
                    >
                      {resource.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 600,
                        color: 'var(--gray-900)',
                        marginBottom: '2px'
                      }}>
                        {resource.name}
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.5, margin: 0 }}>
                        {resource.desc}
                      </p>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--gray-400)', flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div
                className="card"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.03) 0%, rgba(0, 212, 170, 0.03) 100%)',
                  border: '1px solid rgba(99, 91, 255, 0.1)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    margin: '0 auto var(--space-6) auto',
                    boxShadow: '0 8px 32px rgba(99, 91, 255, 0.25)'
                  }}
                >
                  <Globe size={28} />
                </div>

                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Poem, Inc.
                </h2>

                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 'var(--space-6)', maxWidth: '600px', margin: '0 auto var(--space-6) auto' }}>
                  ORIGINARY<sup style={{ fontSize: '0.6em' }}>TM</sup> is a brand of Poem, Inc. We build AI infrastructure software and tools for the agentic web, maintaining the Originary products that run on PEAC Protocol.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px solid var(--gray-200)'
                }}>
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-500)',
                        textDecoration: 'none',
                        padding: 'var(--space-2) var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary)'
                        e.currentTarget.style.background = 'rgba(99, 91, 255, 0.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--gray-500)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ paddingTop: 0, paddingBottom: 'var(--space-20)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="card" style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              color: 'var(--white)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--white)'
              }}>
                Ready to get started?
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                marginBottom: 'var(--space-8)',
                opacity: 0.9
              }}>
                Start building with receipts and policy infrastructure today
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link
                  href="/developers"
                  className="btn btn-lg"
                  style={{
                    background: 'var(--white)',
                    color: 'var(--brand-primary)',
                    border: 'none'
                  }}
                >
                  <span>Start building</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-lg btn-ghost"
                  style={{
                    color: 'var(--white)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                >
                  <span>Talk to us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
