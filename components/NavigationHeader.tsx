'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NAV_PRIMARY, NAV_CTA } from '@/lib/site-registry'

const links = NAV_PRIMARY

export default function NavigationHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled ? 'rgba(250,250,247,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.04)' : 'none',
      }}
    >
      <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.25rem' }}>
        <div className="nav-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '5rem' }}>
          <Link href="/" className="nav-brand-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }} aria-label="originary home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/originary-wordmark.svg"
              alt="originary"
              className="nav-wordmark"
              style={{ height: '1.875rem', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-hover"
                style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="desktop-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="https://github.com/peacprotocol/peac"
              className="nav-link-hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.125rem',
                height: '2.125rem',
                borderRadius: '50%',
                border: '1px solid var(--border-default)',
                color: 'var(--text-tertiary)',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </Link>
            <Link
              href={NAV_CTA.href}
              className="nav-cta-hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '2.125rem',
                padding: '0 1.125rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--text-inverted)',
                background: 'var(--text-primary)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {NAV_CTA.label}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', padding: '0.625rem', marginRight: '-0.5rem', cursor: 'pointer' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <div style={{ width: 15, height: 11, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{
                display: 'block', height: 1, background: 'var(--text-tertiary)', borderRadius: 1,
                transition: 'all 0.3s ease', transformOrigin: 'center',
                transform: open ? 'rotate(45deg) translateY(5px)' : 'none',
              }} />
              <span style={{
                display: 'block', height: 1, background: 'var(--text-tertiary)', borderRadius: 1,
                transition: 'all 0.3s ease',
                opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none',
              }} />
              <span style={{
                display: 'block', height: 1, background: 'var(--text-tertiary)', borderRadius: 1,
                transition: 'all 0.3s ease', transformOrigin: 'center',
                transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none',
              }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          maxHeight: open ? 500 : 0,
          paddingBottom: open ? '2rem' : 0,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', paddingTop: '1rem', borderTop: '1px solid var(--border-default)' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="nav-link-hover"
                style={{
                  padding: '0.75rem',
                  margin: '0 -0.75rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ paddingTop: '1.25rem', marginTop: '0.75rem', borderTop: '1px solid var(--border-default)' }}>
              <Link
                href={NAV_CTA.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-inverted)',
                  background: 'var(--text-primary)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                }}
              >
                Start here
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link-hover:hover { color: var(--text-primary) !important; border-color: var(--border-hover) !important; }
        .nav-cta-hover:hover {
          background: var(--accent-brand-hover) !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transform: translateY(-1px);
        }
        @media (max-width: 1023px) {
          .desktop-nav-links { display: none !important; }
          .desktop-nav-actions { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .nav-header-row { min-height: 4.5rem !important; }
          .nav-wordmark { height: 1.5rem !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-wordmark { height: 1.6875rem !important; }
        }
      `}</style>
    </header>
  )
}
