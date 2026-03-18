'use client'

import Link from 'next/link'
import {
  FOOTER_NAV_GROUPS,
  FOOTER_COMPANY,
  FOOTER_SOCIAL,
  FOOTER_MACHINE_READABLE,
  type FooterLink,
} from './footer.links'

const navGroups = [...FOOTER_NAV_GROUPS, FOOTER_COMPANY]

function FooterNavLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const style: React.CSSProperties = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    lineHeight: '1.4',
    transition: 'color 0.15s ease',
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={style}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} prefetch={false} className="footer-link-hover" style={style}>
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-base)', position: 'relative' }}>
      {/* Top border gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, var(--border-default), transparent)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 1.25rem 0' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr repeat(4, 1fr)', gap: '2rem' }} className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand-col">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
              <div style={{
                width: '1.625rem', height: '1.625rem', borderRadius: '0.4375rem',
                background: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-inverted)', lineHeight: 1 }}>O</span>
              </div>
              <span style={{ fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
                Originary
              </span>
            </Link>
            <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-tertiary)', maxWidth: '20rem' }}>
              Originary helps APIs, tools, and MCP servers verify agent requests,
              apply policy, and return portable signed records. PEAC is the open format underneath.
            </p>
            {/* Social icons */}
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="footer-icon-hover" style={{ color: 'var(--text-tertiary)', transition: 'color 0.15s ease' }} aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://x.com/originaryxyz" target="_blank" rel="noopener noreferrer" className="footer-icon-hover" style={{ color: 'var(--text-tertiary)', transition: 'color 0.15s ease' }} aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/originary" target="_blank" rel="noopener noreferrer" className="footer-icon-hover" style={{ color: 'var(--text-tertiary)', transition: 'color 0.15s ease' }} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://bsky.app/profile/originary.bsky.social" target="_blank" rel="noopener noreferrer" className="footer-icon-hover" style={{ color: 'var(--text-tertiary)', transition: 'color 0.15s ease' }} aria-label="Bluesky">
                <svg width="16" height="16" viewBox="0 0 600 530" fill="currentColor"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/></svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navGroups.map((group) => (
            <div key={group.id}>
              <p style={{
                fontSize: '0.6875rem', lineHeight: 1, letterSpacing: '0.14em', fontWeight: 600,
                textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '1.75rem',
              }}>
                {group.title}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink href={link.href} external={link.external}>
                      {link.label}
                    </FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: '3.5rem', paddingTop: '2rem',
          position: 'relative',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(to right, transparent, var(--border-default), transparent)',
          }} />
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
            &copy; 2025 &ndash; {new Date().getFullYear()} Originary (Poem, Inc.) &middot; Delaware, USA
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {FOOTER_MACHINE_READABLE.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="footer-link-hover"
                style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.15s ease' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.75rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '56rem' }}>
            In the U.S., &lsquo;Originary&rsquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for AI agents. Poem, Inc. is not affiliated with Originary Inc.
          </p>
          <p style={{ fontSize: '0.75rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>
            PEAC Protocol is an open standard stewarded by Originary and the open-source community.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link-hover:hover { color: var(--text-primary) !important; }
        .footer-icon-hover:hover { color: var(--text-primary) !important; }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
