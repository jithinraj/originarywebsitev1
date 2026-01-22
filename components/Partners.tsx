'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const integrations = [
  { name: 'x402', description: 'HTTP 402 payment flows' },
  { name: 'AIPREF', description: 'AI preference signals' },
  { name: 'MCP', description: 'Model Context Protocol' },
  { name: 'A2A', description: 'Agent-to-agent forwarding' },
  { name: 'ACP', description: 'Agentic Commerce Protocol' },
  { name: 'RSL', description: 'Robots Signaling Language' },
  { name: 'C2PA', description: 'Content authenticity' },
  { name: 'ERC-8004', description: 'On-chain agent identity' },
]

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-header">
          <div className="label-wrapper">
            <span className="partners-label">Adapter Ecosystem</span>
          </div>
          <h2 className="partners-title">Rail-neutral by design</h2>
          <p className="partners-subtitle">
            PEAC works with multiple protocols via adapters. Settlement is optional.
            Bring your own rails or use ours.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((integration) => (
            <div key={integration.name} className="integration-card">
              <span className="integration-name">{integration.name}</span>
              <span className="integration-desc">{integration.description}</span>
            </div>
          ))}
        </div>

        <div className="partners-footer">
          <p className="footer-note">
            Building an adapter? We welcome independent implementations.
          </p>
          <Link href="/integrations" className="footer-link">
            View all integrations
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .partners {
          padding: var(--section-padding-lg) 0;
          background: var(--surface-elevated);
          position: relative;
          overflow: hidden;
        }

        .partners-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          position: relative;
        }

        .partners-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .label-wrapper {
          margin-bottom: var(--space-5);
        }

        .partners-label {
          display: inline-block;
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .partners-title {
          font-size: clamp(var(--text-4xl), 5vw, var(--text-6xl));
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 var(--space-4);
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .partners-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-12);
        }

        .integration-card {
          background: var(--surface-card);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          transition: border-color var(--duration-200) ease, box-shadow var(--duration-200) ease, transform var(--duration-200) ease;
        }

        .integration-card:hover {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-2px);
        }

        .integration-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
        }

        .integration-desc {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          line-height: 1.4;
        }

        .partners-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-6);
          padding-top: var(--space-6);
          border-top: 1px solid var(--border-default);
        }

        .footer-note {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          margin: 0;
        }

        .partners-footer :global(.footer-link) {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-secondary);
          background: transparent;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: border-color var(--duration-150) ease, color var(--duration-150) ease, gap var(--duration-150) ease;
        }

        .partners-footer :global(.footer-link:hover) {
          border-color: var(--border-hover);
          color: var(--text-primary);
          gap: var(--space-3);
        }

        .partners-footer :global(.footer-link:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        @media (max-width: 900px) {
          .partners {
            padding: var(--section-padding) 0;
          }

          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .partners {
            padding: var(--space-20) 0;
          }

          .partners-container {
            padding: 0 var(--space-5);
          }

          .partners-header {
            margin-bottom: var(--space-10);
          }

          .partners-title {
            font-size: var(--text-3xl);
          }

          .partners-subtitle {
            font-size: var(--text-base);
          }

          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3);
            margin-bottom: var(--space-10);
          }

          .integration-card {
            padding: var(--space-4);
            border-radius: var(--radius-xl);
          }

          .integration-name {
            font-size: var(--text-sm);
          }

          .integration-desc {
            font-size: var(--text-xs);
          }

          .partners-footer {
            flex-direction: column;
            gap: var(--space-4);
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .partners {
            padding: var(--space-16) 0;
          }

          .partners-container {
            padding: 0 var(--space-4);
          }

          .partners-title {
            font-size: var(--text-2xl);
          }

          .integrations-grid {
            gap: var(--space-3);
          }

          .integration-card {
            padding: var(--space-4);
          }

          .integration-name {
            font-size: var(--text-xs);
          }

          .integration-desc {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </section>
  )
}
