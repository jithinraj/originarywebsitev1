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
      className={`navigation-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-sticky)',
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${isScrolled ? 'var(--gray-200)' : 'transparent'}`,
        transition: 'all var(--duration-300) var(--ease-out)',
        padding: 'var(--space-4) 0'
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
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 'var(--text-sm)'
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
              <NavDropdown label="Products" items={[
                { href: '/products/peac', label: 'PEAC Core' },
                { href: '/products/verify', label: 'Verify API' },
                { href: '/products/gateway-402', label: 'Gateway 402' },
                { href: '/products/studio', label: 'Studio' }
              ]} />

              <NavDropdown label="Solutions" items={[
                { href: '/originary-ai', label: 'Originary AI' },
                { href: '/solutions/enterprises', label: 'Enterprises' },
                { href: '/solutions/ai-builders', label: 'AI Builders' },
                { href: '/solutions/publishers', label: 'Publishers' },
                { href: '/solutions/api-providers', label: 'API Providers' }
              ]} />

              <NavLink href="/developers">Developers</NavLink>
              <NavLink href="/demo">Demo</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/trust">Trust</NavLink>
            </div>

            <div
              className="nav-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)'
              }}
            >
              <Link href="/signin" className="btn btn-ghost">
                Sign in
              </Link>
              <Link href="/company/contact" className="btn btn-primary">
                Talk to sales
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
              <MobileNavSection title="Products" items={[
                { href: '/products/peac', label: 'PEAC Core' },
                { href: '/products/verify', label: 'Verify API' },
                { href: '/products/gateway-402', label: 'Gateway 402' },
                { href: '/products/studio', label: 'Studio' }
              ]} />

              <MobileNavSection title="Solutions" items={[
                { href: '/originary-ai', label: 'Originary AI' },
                { href: '/solutions/enterprises', label: 'Enterprises' },
                { href: '/solutions/ai-builders', label: 'AI Builders' },
                { href: '/solutions/publishers', label: 'Publishers' },
                { href: '/solutions/api-providers', label: 'API Providers' }
              ]} />

              <Link href="/developers" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Developers
              </Link>
              <Link href="/demo" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Demo
              </Link>
              <Link href="/pricing" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Pricing
              </Link>
              <Link href="/trust" style={{ padding: 'var(--space-3) 0', color: 'var(--gray-700)', textDecoration: 'none' }}>
                Trust
              </Link>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--gray-200)'
              }}>
                <Link href="/signin" className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                  Sign in
                </Link>
                <Link href="/company/contact" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  Talk to sales
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

function NavDropdown({ label, items }: { label: string; items: Array<{ href: string; label: string }> }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="nav-dropdown"
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        aria-label={`${label} menu`}
        aria-expanded={isOpen}
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
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
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
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNavSection({ title, items }: { title: string; items: Array<{ href: string; label: string }> }) {
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
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: 'var(--space-2) var(--space-3)',
              color: 'var(--gray-600)',
              textDecoration: 'none',
              fontSize: 'var(--text-sm)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}