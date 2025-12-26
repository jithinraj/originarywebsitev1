'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`navigation-header nav-glass ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-sticky)',
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(0, 0, 0, 0.06)' : 'transparent'}`,
        transition: 'all 0.2s ease',
        padding: 'var(--space-3) 0'
      }}
    >
      <div className="container">
        <nav
          className="nav-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px'
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="brand-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              textDecoration: 'none',
              color: 'var(--gray-900)',
              fontWeight: 700,
              fontSize: 'var(--text-xl)',
              letterSpacing: '-0.02em'
            }}
          >
            <div
              className="logo-mark"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: '13px'
              }}
            >
              O
            </div>
            <span>Originary</span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-8)'
            }}
          >
            <div
              className="nav-links"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-6)'
              }}
            >
              <NavLink href="/platform">Platform</NavLink>
              <NavDropdown label="Products" items={[
                { href: '/declare', label: 'Declare' },
                { href: '/trace', label: 'Trace' },
                { href: '/products/gateway-402', label: 'Gateway 402' },
                { href: '/products/studio', label: 'Studio' },
                { href: '/products/verify', label: 'Verify API' }
              ]} />

              <NavLink href="/developers">Developers</NavLink>
              <NavLink href="/peac">Protocol</NavLink>
              <NavLink href="/demo">Demo</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            <div
              className="nav-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)'
              }}
            >
              <Link href="/declare" className="btn-pill btn-shine" style={{ textDecoration: 'none' }}>
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMenuOpen}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--gray-700)',
              cursor: 'pointer',
              padding: 'var(--space-2)'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--white)',
              border: '1px solid var(--gray-200)',
              borderTop: 'none',
              borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
              boxShadow: 'var(--shadow-xl)',
              padding: 'var(--space-6)',
              margin: '0 var(--space-6)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Link href="/platform" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Platform
              </Link>
              <MobileNavSection title="Products" items={[
                { href: '/declare', label: 'Declare' },
                { href: '/trace', label: 'Trace' },
                { href: '/products/gateway-402', label: 'Gateway 402' },
                { href: '/products/studio', label: 'Studio' },
                { href: '/products/verify', label: 'Verify API' }
              ]} />

              <Link href="/developers" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Developers
              </Link>
              <Link href="/peac" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Protocol
              </Link>
              <Link href="/demo" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Demo
              </Link>
              <Link href="/blog" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Blog
              </Link>
              <Link href="/contact" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Contact
              </Link>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--gray-200)'
              }}>
                <Link href="/declare" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  Get Declare
                </Link>
                <Link href="/contact" className="btn btn-secondary" style={{ justifyContent: 'center' }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        color: 'var(--gray-700)',
        textDecoration: 'none',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        padding: 'var(--space-2) var(--space-3)',
        borderRadius: 'var(--radius-md)',
        transition: 'all var(--duration-200) var(--ease-out)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--gray-100)'
        e.currentTarget.style.color = 'var(--gray-900)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--gray-700)'
      }}
    >
      {children}
    </Link>
  )
}

function NavDropdown({ label, items }: { label: string; items: Array<{ href: string; label: string; badge?: string; external?: boolean }> }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="nav-dropdown"
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-label={`${label} menu`}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)',
          background: 'none',
          border: 'none',
          color: 'var(--gray-700)',
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          padding: 'var(--space-2) var(--space-3)',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          transition: 'all var(--duration-200) var(--ease-out)',
          backgroundColor: isOpen ? 'var(--gray-100)' : 'transparent'
        }}
      >
        {label}
        <ChevronDown size={16} style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform var(--duration-200) var(--ease-out)'
        }} />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: 'var(--white)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
            padding: 'var(--space-2)',
            minWidth: '200px',
            zIndex: 'var(--z-dropdown)'
          }}
        >
          {items.map((item, index) => {
            // Handle separator
            if (item.href === 'separator') {
              return (
                <div
                  key={`separator-${index}`}
                  style={{
                    height: '1px',
                    background: 'var(--gray-200)',
                    margin: 'var(--space-2) 0'
                  }}
                />
              )
            }

            const linkContent = (
              <>
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--gray-500)',
                      background: 'var(--gray-100)',
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 500
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </>
            )

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--gray-700)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all var(--duration-200) var(--ease-out)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--gray-100)'
                    e.currentTarget.style.color = 'var(--gray-900)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--gray-700)'
                  }}
                >
                  {linkContent}
                </a>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 'var(--space-3) var(--space-4)',
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all var(--duration-200) var(--ease-out)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--gray-100)'
                  e.currentTarget.style.color = 'var(--gray-900)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--gray-700)'
                }}
              >
                {linkContent}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

function MobileNavSection({ title, items }: { title: string; items: Array<{ href: string; label: string; badge?: string; external?: boolean }> }) {
  return (
    <div>
      <h4 style={{
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--gray-900)',
        marginBottom: 'var(--space-2)'
      }}>
        {title}
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        {items.map((item) => {
          const linkContent = (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span>{item.label}</span>
              {item.badge && (
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--gray-500)',
                    background: 'var(--gray-100)',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 500
                  }}
                >
                  {item.badge}
                </span>
              )}
            </span>
          )

          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-md)',
                  display: 'block'
                }}
              >
                {linkContent}
              </a>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: 'var(--space-2) var(--space-3)',
                color: 'var(--gray-600)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                borderRadius: 'var(--radius-md)',
                display: 'block'
              }}
            >
              {linkContent}
            </Link>
          )
        })}
      </div>
    </div>
  )
}