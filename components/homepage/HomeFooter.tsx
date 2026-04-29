import Link from 'next/link'

const footerLinkGroups = [
  {
    title: 'Protocol',
    links: [
      { label: 'PEAC', href: '/peac' },
      { label: 'Trust', href: '/trust' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Downloads', href: '/downloads' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
]

export function HomeFooter() {
  return (
    <footer className="hp-onepage-footer">
      <div className="hp-container">
        <div className="hp-onepage-footer-inner">
          <div className="hp-onepage-footer-copy">
            <Link href="/" className="flex items-center" aria-label="originary home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/originary-wordmark.svg"
                alt="originary"
                className="h-[1.2rem] w-auto block"
              />
            </Link>

            <p className="hp-onepage-footer-tag">Verifiable records for API, agent, MCP, and commerce flows.</p>
            <p className="hp-onepage-footer-body">
              Originary helps teams issue, verify, and export records for API, MCP, agent, and commerce systems. Built on PEAC Protocol, the open standard underneath.
            </p>
          </div>

          <div className="hp-onepage-footer-links" aria-label="Footer navigation">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="hp-onepage-footer-link-group">
                <p>{group.title}</p>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="hp-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="hp-onepage-footer-legal">
            <p className="hp-onepage-footer-legal-primary">&copy; 2025 &ndash; 2026 Originary (Poem, Inc.) &middot; Delaware, USA</p>
            <div className="hp-onepage-footer-legal-notes">
              <p>
                In the U.S., &lsquo;Originary&rsquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for AI agents. Poem, Inc. is not affiliated with Originary Inc.
              </p>
              <p>PEAC Protocol is an open standard stewarded by Originary and the open-source community.</p>
              <p>All trademarks, logos and brand names are the property of their respective owners.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
