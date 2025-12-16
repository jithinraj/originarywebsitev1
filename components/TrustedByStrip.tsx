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
      aria-label="Works with"
    >
      <div className="container">
        <p className="trusted-by-label">Works with</p>
        <div className="trusted-by-logos">
          {/* Cloudflare */}
          <div className="trusted-by-logo" aria-label="Cloudflare">
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
          </div>

          {/* Vercel */}
          <div className="trusted-by-logo" aria-label="Vercel">
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
          </div>

          {/* x402 */}
          <div className="trusted-by-logo protocol-badge" aria-label="x402">
            <span className="protocol-text">x402</span>
          </div>

          {/* MCP - Model Context Protocol */}
          <div className="trusted-by-logo protocol-badge" aria-label="MCP">
            <span className="protocol-text">MCP</span>
          </div>

          {/* A2A - Agent to Agent */}
          <div className="trusted-by-logo protocol-badge" aria-label="A2A">
            <span className="protocol-text">A2A</span>
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
          gap: var(--space-10);
          flex-wrap: wrap;
        }

        .trusted-by-label {
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .trusted-by-logos {
          display: flex;
          align-items: center;
          gap: var(--space-8);
          flex-wrap: wrap;
          justify-content: center;
        }

        .trusted-by-logo {
          color: var(--gray-400);
          transition: all var(--duration-300) var(--ease-out);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trusted-by-logo:hover {
          color: var(--gray-600);
        }

        .protocol-badge {
          padding: var(--space-1) var(--space-3);
          background: var(--gray-100);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
        }

        .protocol-badge:hover {
          border-color: var(--gray-300);
          background: var(--gray-200);
        }

        .protocol-text {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-500);
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .trusted-by-strip .container {
            flex-direction: column;
            gap: var(--space-4);
          }

          .trusted-by-logos {
            gap: var(--space-6);
          }
        }

        @media (max-width: 480px) {
          .trusted-by-logos {
            gap: var(--space-4);
          }

          .protocol-text {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  )
}
