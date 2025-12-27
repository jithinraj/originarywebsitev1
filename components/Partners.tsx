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
          padding: 140px 0;
          background: linear-gradient(180deg, #fafafa 0%, #f8f8fc 50%, #fafafa 100%);
          position: relative;
          overflow: hidden;
        }

        .partners-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        .partners-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .label-wrapper {
          margin-bottom: 20px;
        }

        .partners-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #6b6b6b;
          text-transform: uppercase;
        }

        .partners-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 600;
          color: #0a0a0a;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .partners-subtitle {
          font-size: 18px;
          color: #525252;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 56px;
        }

        .integration-card {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .integration-card:hover {
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
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
          .partners {
            padding: 100px 0;
          }

          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .partners {
            padding: 80px 0;
          }

          .partners-container {
            padding: 0 20px;
          }

          .partners-header {
            margin-bottom: 40px;
          }

          .partners-title {
            font-size: 28px;
          }

          .partners-subtitle {
            font-size: 16px;
          }

          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 40px;
          }

          .integration-card {
            padding: 16px;
            border-radius: 12px;
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

        @media (max-width: 380px) {
          .partners {
            padding: 60px 0;
          }

          .partners-container {
            padding: 0 16px;
          }

          .partners-title {
            font-size: 26px;
          }

          .integrations-grid {
            gap: 10px;
          }

          .integration-card {
            padding: 14px;
          }

          .integration-name {
            font-size: 12px;
          }

          .integration-desc {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  )
}
