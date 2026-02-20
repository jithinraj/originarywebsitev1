'use client'

import Link from 'next/link'
import { Newspaper, Plug, Bot, Building2 } from 'lucide-react'

const audiences = [
  {
    id: 'enterprise',
    label: 'Enterprise',
    desc: 'Portable evidence for governance, investigations, and compliance.',
    Icon: Building2,
  },
  {
    id: 'ai-builders',
    label: 'AI Builders',
    desc: 'Verify consent, terms, and attribution for data and tool use.',
    Icon: Bot,
  },
  {
    id: 'api-providers',
    label: 'API Providers',
    desc: 'Signed records for metered access and accountable usage.',
    Icon: Plug,
  },
  {
    id: 'publishers',
    label: 'Publishers',
    desc: 'Verifiable records for access, attribution, and downstream use.',
    Icon: Newspaper,
  },
]

export default function AudienceChooser() {
  return (
    <section className="audience-chooser">
      <div className="chooser-container">
        <p className="chooser-label">Start here</p>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <Link
              key={audience.id}
              href={`/solutions#${audience.id}`}
              className="audience-card"
            >
              <audience.Icon size={20} className="audience-icon" aria-hidden="true" />
              <div className="audience-content">
                <span className="audience-label">{audience.label}</span>
                <span className="audience-desc">{audience.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .audience-chooser {
          background: var(--surface-base);
          border-top: 1px solid var(--border-default);
          border-bottom: 1px solid var(--border-default);
          padding: var(--space-12) 0;
        }

        .chooser-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .chooser-label {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 var(--space-5) 0;
          text-align: center;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
        }

        .audience-grid :global(.audience-card) {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          padding: var(--space-5);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          text-decoration: none;
          transition: border-color var(--duration-200) ease, box-shadow var(--duration-200) ease;
        }

        .audience-grid :global(.audience-card:hover) {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-card-hover);
        }

        .audience-grid :global(.audience-card:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .audience-grid :global(.audience-icon) {
          color: var(--accent-brand);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .audience-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .audience-label {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .audience-desc {
          font-size: var(--text-xs);
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .audience-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .audience-chooser {
            padding: var(--space-10) 0;
          }

          .chooser-container {
            padding: 0 var(--space-4);
          }

          .audience-grid {
            grid-template-columns: 1fr;
            gap: var(--space-3);
          }

          .audience-grid :global(.audience-card) {
            padding: var(--space-4);
          }

          .audience-label {
            font-size: var(--text-sm);
          }

          .audience-desc {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </section>
  )
}
