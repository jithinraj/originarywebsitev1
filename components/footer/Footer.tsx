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

            <p className="hp-onepage-footer-tag">Portable signed records for API and agent workflows.</p>
            <p className="hp-onepage-footer-body">{NARRATIVE.plainSentence}</p>

            <div className="site-footer-signals" aria-label="Platform properties">
              <span>Offline verification</span>
              <span>Portable records</span>
              <span>Open standard</span>
            </div>

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

          <div className="site-footer-boundary" aria-hidden="true">
            <span />
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
          grid-template-columns: minmax(20rem, 0.76fr) minmax(0, 1.24fr);
          gap: 2.4rem 3.2rem;
          padding: clamp(1.65rem, 3vw, 2.8rem);
          border-radius: 1.05rem;
          border-color: rgba(15, 23, 42, 0.075);
          background:
            radial-gradient(640px 340px at 0% 0%, rgba(110, 231, 183, 0.09), transparent 62%),
            radial-gradient(640px 340px at 100% 6%, rgba(56, 189, 248, 0.12), transparent 60%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98));
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.92) inset,
            0 24px 70px rgba(15, 23, 42, 0.08);
        }

        .site-footer-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.68), rgba(255, 255, 255, 0.08) 52%, rgba(255, 255, 255, 0.36)),
            linear-gradient(180deg, rgba(255, 255, 255, 0.52), transparent 44%, rgba(255, 255, 255, 0.48));
        }

        .site-footer-inner > * {
          position: relative;
          z-index: 1;
        }

        .site-footer-links {
          grid-template-columns: repeat(5, minmax(6.1rem, 1fr));
          gap: 1.45rem 1.65rem;
          align-items: start;
        }

        .site-footer-signals {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 1.25rem;
        }

        .site-footer-signals span {
          display: inline-flex;
          align-items: center;
          min-height: 1.7rem;
          padding: 0.3rem 0.58rem;
          border: 1px solid rgba(15, 23, 42, 0.065);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.56);
          color: #526173;
          font-size: 0.72rem;
          font-weight: 560;
          line-height: 1;
        }

        .site-footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1rem;
        }

        .site-footer-social :global(.hp-link) {
          display: inline-flex;
          align-items: center;
          min-height: 2rem;
          padding: 0.4rem 0.72rem;
          border: 1px solid rgba(15, 23, 42, 0.075);
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.7);
          font-size: 0.78rem;
          color: #475569;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.025);
        }

        .site-footer-social :global(.hp-link:hover) {
          border-color: rgba(34, 184, 255, 0.2);
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-1px);
        }

        .site-footer-boundary {
          position: relative;
          grid-column: 1 / -1;
          height: 1px;
          margin: -0.45rem 0 -0.55rem;
          background: linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.08), transparent);
        }

        .site-footer-boundary span {
          position: absolute;
          top: -1px;
          left: 0;
          width: min(24rem, 46%);
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(34, 184, 255, 0.34), transparent);
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
          background: rgba(255, 255, 255, 0.62);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          line-height: 1;
        }

        .site-footer-legal {
          align-items: start;
          padding-top: 0;
          margin-top: 0;
          border-top: 0;
        }

        @media (max-width: 1100px) {
          .site-footer-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .site-footer-links {
            grid-template-columns: repeat(3, minmax(7rem, 1fr));
          }
        }

        @media (max-width: 700px) {
          .site-footer-inner {
            padding: 1.2rem;
            gap: 1.55rem;
            border-radius: 0.9rem;
          }

          .site-footer-links {
            grid-template-columns: repeat(2, minmax(7rem, 1fr));
            max-width: none;
            gap: 1.25rem 1rem;
          }

          .site-footer-legal {
            align-items: start;
          }

          .site-footer-social {
            gap: 0.45rem;
          }

          .site-footer-boundary {
            margin: -0.25rem 0 -0.35rem;
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
