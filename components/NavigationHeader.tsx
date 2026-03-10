'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Github } from 'lucide-react'

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

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
              <NavLink href="/peac">Protocol</NavLink>
              <NavLink href="/developers">Developers</NavLink>
            </div>

            <div
              className="nav-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)'
              }}
            >
              <Link href="/developers" className="nav-cta-btn">
                Quickstart
              </Link>
              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-github-btn"
                aria-label="View on GitHub"
              >
                <Github size={16} />
              </a>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { href: '/peac', label: 'Protocol' },
                { href: '/developers', label: 'Developers' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-item"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--duration-200) ease'
                  }}
                >
                  {item.label}
                </Link>
              ))}

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
                  href="/developers"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
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
                  Quickstart
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
          gap: var(--space-2);
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

        /* Mobile Nav Item */
        :global(.mobile-nav-item:hover) {
          background-color: var(--surface-subtle);
          color: var(--text-primary);
        }

        :global(.mobile-nav-item:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
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
