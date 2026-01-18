'use client'

import Link from 'next/link'

const standards = [
  { id: 'x402', label: 'x402', href: '/integrations/x402', desc: 'HTTP 402 payments' },
  { id: 'mcp', label: 'MCP', href: '/integrations/mcp', desc: 'Model Context Protocol' },
  { id: 'a2a', label: 'A2A', href: '/integrations/a2a', desc: 'Agent-to-Agent' },
  { id: 'acp', label: 'ACP', href: '/integrations/acp', desc: 'Agentic Commerce Protocol' },
  { id: 'aipref', label: 'AIPREF', href: '/integrations/aipref', desc: 'IETF Internet-Draft' },
]

export default function StandardsCompatibility() {
  return (
    <section className="standards">
      <div className="standards-container">
        <p className="standards-label">Works with</p>
        <div className="standards-list">
          {standards.map((standard, idx) => (
            <span key={standard.id} className="standard-item-wrapper">
              <Link href={standard.href} className="standard-item">
                <span className="standard-name">{standard.label}</span>
                <span className="standard-desc">{standard.desc}</span>
              </Link>
              {idx < standards.length - 1 && <span className="standard-sep" aria-hidden="true" />}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .standards {
          background: var(--white);
          padding: var(--space-8) 0;
          border-bottom: 1px solid var(--gray-100);
        }

        .standards-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-6);
          flex-wrap: wrap;
        }

        .standards-label {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0;
        }

        .standards-list {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          justify-content: center;
        }

        .standard-item-wrapper {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .standards-list :global(.standard-item) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: var(--space-2) var(--space-3);
          text-decoration: none;
          border-radius: var(--radius-lg);
          transition: background var(--duration-150) ease;
        }

        .standards-list :global(.standard-item:hover) {
          background: var(--gray-50);
        }

        .standard-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-900);
          font-family: var(--font-mono);
        }

        .standard-desc {
          font-size: var(--text-xs);
          color: var(--gray-500);
        }

        .standard-sep {
          width: 1px;
          height: 24px;
          background: var(--gray-200);
        }

        @media (max-width: 768px) {
          .standards-container {
            flex-direction: column;
            gap: var(--space-4);
          }

          .standards-list {
            gap: var(--space-1);
          }

          .standard-sep {
            display: none;
          }

          .standards-list :global(.standard-item) {
            padding: var(--space-2);
          }

          .standard-name {
            font-size: var(--text-xs);
          }

          .standard-desc {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
