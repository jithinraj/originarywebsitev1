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
    desc: 'Prove consent, terms, and attribution for data and tool use.',
    Icon: Bot,
  },
  {
    id: 'api-providers',
    label: 'API Providers',
    desc: 'Records and receipts for metered access and accountable usage.',
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
          background: var(--gray-50);
          border-top: 1px solid var(--gray-100);
          border-bottom: 1px solid var(--gray-100);
          padding: 48px 0;
        }

        .chooser-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .chooser-label {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .audience-grid :global(.audience-card) {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          background: white;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          text-decoration: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .audience-grid :global(.audience-card:hover) {
          border-color: var(--gray-300);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .audience-grid :global(.audience-card:focus-visible) {
          outline: 2px solid var(--brand-primary);
          outline-offset: 2px;
        }

        .audience-grid :global(.audience-icon) {
          color: var(--brand-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .audience-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .audience-label {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-950);
          line-height: 1.3;
        }

        .audience-desc {
          font-size: var(--text-xs);
          color: var(--gray-500);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .audience-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .audience-chooser {
            padding: 36px 0;
          }

          .chooser-container {
            padding: 0 16px;
          }

          .audience-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .audience-grid :global(.audience-card) {
            padding: 16px;
          }

          .audience-label {
            font-size: 14px;
          }

          .audience-desc {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  )
}
