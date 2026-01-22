'use client'

import Link from 'next/link'
import { Zap, Bot, ArrowLeftRight, ShoppingCart, FileText, Cloud, Triangle } from 'lucide-react'

const standards = [
  { id: 'x402', label: 'x402', href: '/integrations/x402', desc: 'HTTP 402 payments', Icon: Zap },
  { id: 'mcp', label: 'MCP', href: '/integrations/mcp', desc: 'Model Context Protocol', Icon: Bot },
  { id: 'a2a', label: 'A2A', href: '/integrations/a2a', desc: 'Agent-to-Agent', Icon: ArrowLeftRight },
  { id: 'acp', label: 'ACP', href: '/integrations/acp', desc: 'Agentic Commerce Protocol', Icon: ShoppingCart },
  { id: 'aipref', label: 'AIPREF', href: '/integrations/aipref', desc: 'IETF Internet-Draft', Icon: FileText },
  { id: 'cloudflare', label: 'Cloudflare', href: '/docs/deploy/cloudflare-worker', desc: 'Edge deployment', Icon: Cloud },
  { id: 'vercel', label: 'Vercel', href: '/docs/deploy/vercel', desc: 'Edge functions', Icon: Triangle },
]

export default function StandardsCompatibility() {
  return (
    <section className="standards">
      <div className="standards-container">
        <div className="standards-label-wrapper">
          <span className="standards-dot" />
          <p className="standards-label">Works with</p>
        </div>
        <div className="standards-list">
          {standards.map((standard) => (
            <Link key={standard.id} href={standard.href} className="standard-item">
              <span className="standard-icon-wrapper">
                <standard.Icon size={14} className="standard-icon" />
              </span>
              <span className="standard-name">{standard.label}</span>
              <span className="standard-desc">{standard.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .standards {
          background: var(--surface-base);
          padding: var(--space-10) 0;
          border-bottom: 1px solid var(--border-default);
          position: relative;
        }

        .standards::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--border-default) 50%, transparent 100%);
        }

        .standards-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .standards-label-wrapper {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .standards-dot {
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--text-tertiary) 100%);
        }

        .standards-label {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .standards-list {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          justify-content: center;
        }

        .standards-list :global(.standard-item) {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          text-decoration: none;
          border-radius: var(--radius-full);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          transition: all var(--duration-200) cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-card);
        }

        .standards-list :global(.standard-item:hover) {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-1px);
        }

        .standards-list :global(.standard-item:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .standard-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: var(--radius-sm);
          background: var(--surface-subtle);
          transition: all var(--duration-200) ease;
        }

        .standards-list :global(.standard-item:hover) .standard-icon-wrapper {
          background: var(--accent-brand-muted);
        }

        .standards-list :global(.standard-icon) {
          color: var(--text-tertiary);
          transition: color var(--duration-200) ease;
        }

        .standards-list :global(.standard-item:hover .standard-icon) {
          color: var(--accent-brand);
        }

        .standard-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-mono);
          letter-spacing: -0.01em;
        }

        .standard-desc {
          display: none;
        }

        @media (max-width: 768px) {
          .standards {
            padding: var(--space-8) 0;
          }

          .standards-container {
            flex-direction: column;
            gap: var(--space-5);
          }

          .standards-list {
            gap: var(--space-2);
          }

          .standards-list :global(.standard-item) {
            padding: var(--space-2) var(--space-3);
          }

          .standard-name {
            font-size: var(--text-xs);
          }

          .standard-icon-wrapper {
            width: 20px;
            height: 20px;
          }

          .standards-list :global(.standard-icon) {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </section>
  )
}
