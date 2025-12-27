'use client'

import Image from 'next/image'

/**
 * TrustedByStrip - Monochrome logo strip immediately after hero
 * Uses real logos from official sources
 */
export default function TrustedByStrip() {
  return (
    <section
      className="trusted-by-strip animate-on-scroll"
      aria-label="Deployment and integration options"
    >
      <div className="container">
        <div className="trusted-by-section">
          <p className="trusted-by-label">Deploys on</p>
          <div className="trusted-by-logos">
            {/* Cloudflare */}
            <div className="trusted-by-logo" aria-label="Cloudflare Workers">
              <Image
                src="/logos/cloudflare.png"
                alt="Cloudflare"
                width={120}
                height={40}
                style={{
                  height: '22px',
                  width: 'auto',
                  filter: 'grayscale(100%) brightness(0.4)',
                  opacity: 0.8
                }}
              />
              <span className="logo-sublabel">Workers</span>
            </div>

            {/* Vercel */}
            <div className="trusted-by-logo" aria-label="Vercel Edge">
              <Image
                src="/logos/vercel.png"
                alt="Vercel"
                width={32}
                height={32}
                style={{
                  height: '24px',
                  width: 'auto',
                  filter: 'grayscale(100%)',
                  opacity: 0.7
                }}
              />
              <span className="logo-sublabel">Edge</span>
            </div>

            {/* Self-hosted */}
            <div className="trusted-by-logo protocol-badge" aria-label="Self-hosted">
              <span className="protocol-text">Self-hosted</span>
            </div>
          </div>
        </div>

        <div className="trusted-by-divider" />

        <div className="trusted-by-section">
          <p className="trusted-by-label">Adapters</p>
          <div className="trusted-by-logos">
            <div className="trusted-by-logo protocol-badge" aria-label="x402">
              <span className="protocol-text">x402</span>
              <span className="adapter-status available">available</span>
            </div>
            <div className="trusted-by-logo protocol-badge" aria-label="Stripe">
              <span className="protocol-text">Stripe</span>
              <span className="adapter-status preview">preview</span>
            </div>
          </div>
        </div>

        <div className="trusted-by-divider" />

        <div className="trusted-by-section">
          <p className="trusted-by-label">Roadmap</p>
          <div className="trusted-by-logos">
            <div className="trusted-by-logo protocol-badge roadmap" aria-label="MCP">
              <span className="protocol-text">MCP</span>
            </div>
            <div className="trusted-by-logo protocol-badge roadmap" aria-label="A2A">
              <span className="protocol-text">A2A</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trusted-by-strip {
          padding: var(--space-6) 0;
          background: var(--gray-50);
          border-bottom: 1px solid var(--gray-100);
        }

        .trusted-by-strip .container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .trusted-by-section {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .trusted-by-divider {
          width: 1px;
          height: 24px;
          background: var(--gray-200);
        }

        .trusted-by-label {
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
          white-space: nowrap;
        }

        .trusted-by-logos {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          justify-content: center;
        }

        .trusted-by-logo {
          color: var(--gray-400);
          transition: all var(--duration-300) var(--ease-out);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .trusted-by-logo:hover {
          color: var(--gray-600);
        }

        .logo-sublabel {
          font-size: 9px;
          font-weight: 500;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .protocol-badge {
          padding: var(--space-1) var(--space-3);
          background: var(--gray-100);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .protocol-badge:hover {
          border-color: var(--gray-300);
          background: var(--gray-200);
        }

        .protocol-badge.roadmap {
          opacity: 0.6;
          border-style: dashed;
        }

        .protocol-text {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-500);
          letter-spacing: 0.02em;
        }

        .adapter-status {
          font-size: 9px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }

        .adapter-status.available {
          background: rgba(34, 197, 94, 0.1);
          color: var(--success);
        }

        .adapter-status.preview {
          background: rgba(99, 91, 255, 0.1);
          color: var(--brand-primary);
        }

        @media (max-width: 768px) {
          .trusted-by-strip .container {
            flex-direction: column;
            gap: var(--space-4);
          }

          .trusted-by-section {
            flex-direction: column;
            gap: var(--space-2);
          }

          .trusted-by-divider {
            width: 60px;
            height: 1px;
          }

          .trusted-by-logos {
            gap: var(--space-3);
          }
        }

        @media (max-width: 480px) {
          .trusted-by-logos {
            gap: var(--space-2);
          }

          .protocol-text {
            font-size: 11px;
          }

          .adapter-status {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  )
}
