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
          <span className="partners-label">Adapter Ecosystem</span>
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
          padding: 100px 0;
          background: var(--gray-50);
        }

        .partners-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .partners-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .partners-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(99, 91, 255, 0.08);
          border: 1px solid rgba(99, 91, 255, 0.15);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: #635bff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .partners-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .partners-subtitle {
          font-size: 17px;
          color: #525252;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 48px;
        }

        .integration-card {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .integration-card:hover {
          border-color: #d4d4d4;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .integration-name {
          font-size: 14px;
          font-weight: 600;
          color: #0a0a0a;
        }

        .integration-desc {
          font-size: 13px;
          color: #737373;
          line-height: 1.4;
        }

        .partners-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid #e5e5e5;
        }

        .footer-note {
          font-size: 14px;
          color: #737373;
          margin: 0;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #635bff;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .footer-link:hover {
          gap: 10px;
        }

        @media (max-width: 900px) {
          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .partners {
            padding: 60px 0;
          }

          .partners-container {
            padding: 0 20px;
          }

          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .integration-card {
            padding: 14px;
          }

          .integration-name {
            font-size: 13px;
          }

          .integration-desc {
            font-size: 12px;
          }

          .partners-footer {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
