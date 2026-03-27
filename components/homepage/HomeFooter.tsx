'use client'

import Link from 'next/link'
import { NARRATIVE } from '@/lib/site-registry'

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Agent Auditor', href: '/agent-auditor' },
      { label: 'Gateway 402', href: '/products/gateway-402' },
      { label: 'Trace', href: '/trace' },
      { label: 'MCP Server', href: '/integrations/mcp' },
      { label: 'All products', href: '/products' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Proof Check', href: '/agent-proof-check' },
      { label: 'Start here', href: '/developers' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Demo', href: '/demo' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Learning center', href: '/learn' },
      { label: 'Blog', href: '/blog' },
      { label: 'PEAC Protocol', href: '/peac' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Trust center', href: '/trust' },
      { label: 'Security', href: '/security' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'GitHub', href: 'https://github.com/peacprotocol/peac' },
    ],
  },
]

export function HomeFooter() {
  return (
    <footer className="relative" style={{ background: 'var(--color-surface)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }}
      />
      <div className="hp-container py-14 sm:py-20 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-8 md:gap-6">
          <div className="col-span-2 sm:col-span-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-[1.625rem] h-[1.625rem] rounded-[0.4375rem] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ background: 'var(--color-fg)' }}
              >
                <span
                  className="text-[0.6875rem] font-bold leading-none tracking-tight"
                  style={{ color: 'var(--color-fg-inverse)' }}
                >
                  O
                </span>
              </div>
              <span
                className="text-[0.9375rem] font-semibold tracking-[-0.025em]"
                style={{ color: 'var(--color-fg)' }}
              >
                Originary
              </span>
            </Link>
            <p
              className="mt-6 hp-text-body-sm max-w-[20rem] leading-relaxed"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              {NARRATIVE.plainSentence}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="hp-social-icon" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://x.com/originaryx" target="_blank" rel="noopener noreferrer" className="hp-social-icon" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/originary" target="_blank" rel="noopener noreferrer" className="hp-social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://bsky.app/profile/originary.bsky.social" target="_blank" rel="noopener noreferrer" className="hp-social-icon" aria-label="Bluesky">
                <svg width="16" height="16" viewBox="0 0 600 530" fill="currentColor"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/></svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p
                className="hp-text-overline mb-7"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                {col.title}
              </p>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hp-link hp-text-body-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hp-link hp-text-body-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 md:mt-20 pt-8 relative flex flex-col sm:flex-row justify-between items-center gap-4">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }}
          />
          <p
            className="hp-text-caption"
            style={{ color: 'var(--color-fg-faint)' }}
          >
            &copy; 2025 &ndash; {new Date().getFullYear()} Originary (Poem, Inc.) &middot; Delaware, USA
          </p>
        </div>

        <div style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
          <p
            style={{ fontSize: '0.75rem', lineHeight: 1.7, color: 'var(--color-fg-faint)', margin: 0, maxWidth: '56rem' }}
          >
            In the U.S., &lsquo;Originary&rsquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for AI agents. Poem, Inc. is not affiliated with Originary Inc.
          </p>
          <p
            style={{ fontSize: '0.75rem', lineHeight: 1.7, color: 'var(--color-fg-faint)', margin: '0.5rem 0 0' }}
          >
            PEAC Protocol is an open standard stewarded by Originary and the open-source community.
          </p>
        </div>
      </div>
    </footer>
  )
}
