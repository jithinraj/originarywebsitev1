'use client'

import Link from 'next/link'
import { NARRATIVE } from '@/lib/site-registry'
import { FOOTER_MACHINE_READABLE, FOOTER_NAV_GROUPS, FOOTER_SOCIAL } from './footer.links'

const navGroups = FOOTER_NAV_GROUPS

function FooterNavLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hp-link footer-link">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} prefetch={false} className="hp-link footer-link">
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="hp-onepage-footer">
      <div className="hp-container">
        <div className="hp-onepage-footer-inner site-footer-inner">
          <div className="hp-onepage-footer-copy">
            <Link href="/" className="flex items-center" aria-label="originary home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/originary-wordmark.svg" alt="originary" className="block h-[1.2rem] w-auto" />
            </Link>

            <p className="hp-onepage-footer-tag">Verifiable records for API, agent, MCP, and commerce flows.</p>
            <p className="hp-onepage-footer-body">{NARRATIVE.plainSentence}</p>

            <div className="site-footer-social" aria-label="Social links">
              {FOOTER_SOCIAL.map((link) => (
                <FooterNavLink key={link.label} href={link.href} external={link.external}>
                  {link.label}
                </FooterNavLink>
              ))}
            </div>
          </div>

          <div className="hp-onepage-footer-links site-footer-links" aria-label="Footer navigation">
            {navGroups.map((group) => (
              <div key={group.id} className="hp-onepage-footer-link-group">
                <p>{group.title}</p>
                {group.links.map((link) => (
                  <FooterNavLink key={link.label} href={link.href} external={link.external}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </div>
            ))}
          </div>

          <div className="hp-onepage-footer-legal site-footer-legal">
            <p className="hp-onepage-footer-legal-primary">
              &copy; 2025 &ndash; {new Date().getFullYear()} Originary (Poem, Inc.) &middot; Delaware, USA
            </p>
            <div className="hp-onepage-footer-legal-notes">
              <p>Originary is a brand of Poem, Inc. (Delaware, USA). Not affiliated with Originary Inc.</p>
              <p>PEAC Protocol is an open standard stewarded by Originary and the open-source community.</p>
              <p>
                <span className="site-footer-machine-links">
                  {FOOTER_MACHINE_READABLE.map((link) => (
                    <Link key={link.label} href={link.href} className="hp-link site-footer-machine-link">
                      {link.label}
                    </Link>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .site-footer-inner {
          position: relative;
          overflow: hidden;
          grid-template-columns: minmax(20rem, 0.78fr) minmax(0, 1.22fr);
          gap: 2.25rem 3rem;
          padding: clamp(1.5rem, 3vw, 2.5rem);
        }

        .site-footer-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(460px 280px at 4% 0%, rgba(34, 184, 255, 0.09), transparent 58%),
            radial-gradient(420px 260px at 100% 20%, rgba(47, 207, 146, 0.07), transparent 60%);
        }

        .site-footer-inner > * {
          position: relative;
          z-index: 1;
        }

        .site-footer-links {
          grid-template-columns: repeat(5, minmax(5.5rem, 1fr));
          gap: 1.35rem 1.5rem;
          align-items: start;
        }

        .site-footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1.25rem;
        }

        .site-footer-social :global(.hp-link) {
          display: inline-flex;
          align-items: center;
          min-height: 2rem;
          padding: 0.4rem 0.7rem;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.68);
          font-size: 0.78rem;
          color: #475569;
        }

        .site-footer-social :global(.hp-link:hover) {
          border-color: rgba(34, 184, 255, 0.18);
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
        }

        .site-footer-machine-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .site-footer-machine-link {
          display: inline-flex;
          align-items: center;
          min-height: 1.8rem;
          padding: 0.32rem 0.55rem;
          border-radius: 0.45rem;
          border: 1px solid rgba(15, 23, 42, 0.06);
          background: rgba(255, 255, 255, 0.55);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          line-height: 1;
        }

        .site-footer-legal {
          align-items: center;
        }

        @media (max-width: 1100px) {
          .site-footer-inner {
            grid-template-columns: 1fr;
          }

          .site-footer-links {
            grid-template-columns: repeat(3, minmax(7rem, 1fr));
          }
        }

        @media (max-width: 700px) {
          .site-footer-inner {
            padding: 1.15rem;
            gap: 1.5rem;
          }

          .site-footer-links {
            grid-template-columns: repeat(2, minmax(7rem, 1fr));
            max-width: none;
            gap: 1.2rem 1rem;
          }

          .site-footer-legal {
            align-items: start;
          }

          .site-footer-social {
            gap: 0.45rem;
          }
        }

        @media (max-width: 399px) {
          .site-footer-links {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 359px) {
          .site-footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
