'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Github } from 'lucide-react'

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
          ? 'var(--surface-elevated)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-default)' : 'transparent'}`,
        transition: 'all 0.3s ease',
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
              color: 'var(--text-primary)',
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
                borderRadius: 'var(--radius-lg)',
                background: 'var(--accent-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontWeight: '600',
                fontSize: 'var(--text-sm)',
                boxShadow: '0 0 20px -5px var(--accent-brand-glow)'
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
                { href: '/products/verify', label: 'Verify API' },
                { href: 'separator', label: '' },
                { href: '/downloads', label: 'Downloads' }
              ]} />

              <NavLink href="/developers">Developers</NavLink>
              <NavDropdown label="Protocol" items={[
                { href: '/peac', label: 'PEAC Protocol' },
                { href: '/system-of-record', label: 'System of Record' },
                { href: '/context-graphs', label: 'Context Graphs' },
                { href: 'separator', label: '' },
                { href: '/receipts', label: 'Receipts' },
                { href: '/verify', label: 'Verify' }
              ]} />
              <NavLink href="/blog">Blog</NavLink>
            </div>

            <div
              className="nav-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)'
              }}
            >
              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-github-btn"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
              <Link
                href="/verify"
                className="nav-cta-btn"
              >
                Try Verify
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
              color: 'var(--text-secondary)',
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
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderTop: 'none',
              borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
              boxShadow: 'var(--shadow-elevated)',
              padding: 'var(--space-6)',
              margin: '0 var(--space-6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Link href="/platform" style={{ padding: 'var(--space-3) 0', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Platform
              </Link>
              <MobileNavSection title="Products" items={[
                { href: '/declare', label: 'Declare' },
                { href: '/trace', label: 'Trace' },
                { href: '/products/gateway-402', label: 'Gateway 402' },
                { href: '/products/studio', label: 'Studio' },
                { href: '/products/verify', label: 'Verify API' },
                { href: '/downloads', label: 'Downloads' }
              ]} />

              <Link href="/developers" style={{ padding: 'var(--space-3) 0', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Developers
              </Link>
              <MobileNavSection title="Protocol" items={[
                { href: '/peac', label: 'PEAC Protocol' },
                { href: '/system-of-record', label: 'System of Record' },
                { href: '/context-graphs', label: 'Context Graphs' },
                { href: '/receipts', label: 'Receipts' },
                { href: '/verify', label: 'Verify' }
              ]} />
              <Link href="/blog" style={{ padding: 'var(--space-3) 0', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Blog
              </Link>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--border-default)'
              }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                <Link
                  href="/verify"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-3) var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: 'var(--white)',
                    background: 'var(--accent-brand)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 0 20px -5px var(--accent-brand-glow)'
                  }}
                >
                  Try Verify
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Nav CTA Button */
        :global(.nav-cta-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          text-decoration: none;
          color: var(--white);
          background: var(--accent-brand);
          border-radius: var(--btn-radius);
          transition: all var(--duration-200) ease;
          box-shadow: 0 0 20px -5px var(--accent-brand-glow);
        }

        :global(.nav-cta-btn:hover) {
          background: var(--accent-brand-hover);
          transform: translateY(-1px);
          box-shadow: 0 0 30px -5px var(--accent-brand-glow);
        }

        :global(.nav-cta-btn:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        /* Nav GitHub Button */
        :global(.nav-github-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          color: var(--text-secondary);
          background: transparent;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--duration-200) ease;
        }

        :global(.nav-github-btn:hover) {
          color: var(--text-primary);
          border-color: var(--border-hover);
          background: var(--surface-subtle);
        }

        :global(.nav-github-btn:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        /* Nav Link */
        :global(.nav-link) {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: var(--text-sm);
          font-weight: 500;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          transition: all var(--duration-200) var(--ease-out);
        }

        :global(.nav-link:hover) {
          background-color: var(--surface-subtle);
          color: var(--text-primary);
        }

        :global(.nav-link:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        /* Dropdown Item */
        :global(.dropdown-item) {
          display: flex;
          align-items: center;
          padding: var(--space-3) var(--space-4);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: var(--text-sm);
          border-radius: var(--radius-lg);
          transition: all var(--duration-200) var(--ease-out);
        }

        :global(.dropdown-item:hover) {
          background-color: var(--surface-subtle);
          color: var(--text-primary);
        }

        :global(.dropdown-item:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: -2px;
        }

        /* Mobile Nav Section */
        :global(.mobile-nav-section) {
          margin-bottom: var(--space-2);
        }

        :global(.mobile-nav-title) {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        :global(.mobile-nav-items) {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        :global(.mobile-nav-item) {
          padding: var(--space-2) var(--space-3);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: var(--text-sm);
          border-radius: var(--radius-md);
          display: block;
          transition: all var(--duration-200) ease;
        }

        :global(.mobile-nav-item:hover) {
          background-color: var(--surface-subtle);
          color: var(--text-primary);
        }

        :global(.mobile-nav-item:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        :global(.mobile-nav-item-content) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        :global(.mobile-nav-badge) {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          background: var(--surface-subtle);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-weight: 500;
        }

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
    <Link href={href} className="nav-link">
      {children}
    </Link>
  )
}

function NavDropdown({ label, items }: { label: string; items: Array<{ href: string; label: string; badge?: string; external?: boolean }> }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="nav-dropdown"
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={`${label} menu`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          padding: 'var(--space-2) var(--space-3)',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          transition: 'all var(--duration-200) var(--ease-out)',
          backgroundColor: isOpen ? 'var(--surface-subtle)' : 'transparent'
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
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-elevated)',
            padding: 'var(--space-2)',
            minWidth: '200px',
            zIndex: 'var(--z-dropdown)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
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
                    background: 'var(--border-default)',
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
                      color: 'var(--text-tertiary)',
                      background: 'var(--surface-subtle)',
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
                  className="dropdown-item"
                >
                  {linkContent}
                </a>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="dropdown-item"
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
    <div className="mobile-nav-section">
      <h4 className="mobile-nav-title">{title}</h4>
      <div className="mobile-nav-items">
        {items.map((item) => {
          const linkContent = (
            <span className="mobile-nav-item-content">
              <span>{item.label}</span>
              {item.badge && (
                <span className="mobile-nav-badge">{item.badge}</span>
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
                className="mobile-nav-item"
              >
                {linkContent}
              </a>
            )
          }

          return (
            <Link key={item.href} href={item.href} className="mobile-nav-item">
              {linkContent}
            </Link>
          )
        })}
      </div>
    </div>
  )
}