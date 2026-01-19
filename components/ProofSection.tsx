'use client'

import Link from 'next/link'
import { FileText, ShieldCheck, Scale, Lock, History } from 'lucide-react'

const proofItems = [
  {
    id: 'spec',
    title: 'Protocol Spec',
    desc: 'PEAC standard documentation',
    href: '/peac',
    Icon: FileText,
  },
  {
    id: 'conformance',
    title: 'Conformance',
    desc: 'Test vectors and validation',
    href: '/conformance',
    Icon: ShieldCheck,
  },
  {
    id: 'governance',
    title: 'Governance',
    desc: 'Versioning and decisions',
    href: '/governance',
    Icon: Scale,
  },
  {
    id: 'security',
    title: 'Security',
    desc: 'Disclosure and posture',
    href: '/security',
    Icon: Lock,
  },
  {
    id: 'changelog',
    title: 'Changelog',
    desc: 'Release history',
    href: '/changelog',
    Icon: History,
  },
]

export default function ProofSection() {
  return (
    <section className="proof">
      <div className="proof-container">
        <div className="proof-header">
          <div className="proof-badge">
            <span className="proof-badge-dot" />
            <span>Transparency</span>
          </div>
          <h2 className="proof-title">Verify the system</h2>
          <p className="proof-subtitle">Designed for disputes and audits</p>
        </div>

        <div className="proof-grid">
          {proofItems.map((item) => (
            <Link key={item.id} href={item.href} className="proof-card">
              <div className="proof-icon-wrapper">
                <item.Icon size={18} className="proof-icon" aria-hidden="true" />
              </div>
              <div className="proof-content">
                <span className="proof-name">{item.title}</span>
                <span className="proof-desc">{item.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .proof {
          background: linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%);
          padding: var(--space-20) 0;
          position: relative;
        }

        .proof::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--gray-200) 50%, transparent 100%);
        }

        .proof-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .proof-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .proof-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-1) var(--space-3);
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-full);
          margin-bottom: var(--space-4);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .proof-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--brand-primary) 0%, var(--gray-500) 100%);
        }

        .proof-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: var(--gray-900);
          margin: 0 0 var(--space-3);
          letter-spacing: -0.03em;
        }

        .proof-subtitle {
          font-size: var(--text-base);
          color: var(--gray-500);
          margin: 0;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: var(--space-4);
        }

        .proof-grid :global(.proof-card) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-6) var(--space-4);
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-xl);
          text-decoration: none;
          text-align: center;
          transition: all var(--duration-200) cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .proof-grid :global(.proof-card:hover) {
          border-color: var(--gray-200);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
          transform: translateY(-2px);
        }

        .proof-grid :global(.proof-card:focus-visible) {
          outline: 2px solid var(--brand-primary);
          outline-offset: 2px;
        }

        .proof-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
          transition: all var(--duration-200) ease;
        }

        .proof-grid :global(.proof-card:hover) .proof-icon-wrapper {
          background: linear-gradient(135deg, rgba(99, 91, 255, 0.08) 0%, rgba(99, 91, 255, 0.12) 100%);
        }

        .proof-grid :global(.proof-icon) {
          color: var(--gray-400);
          transition: color var(--duration-200) ease;
        }

        .proof-grid :global(.proof-card:hover .proof-icon) {
          color: var(--brand-primary);
        }

        .proof-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .proof-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-900);
        }

        .proof-desc {
          font-size: var(--text-xs);
          color: var(--gray-500);
          line-height: 1.4;
        }

        @media (max-width: 1000px) {
          .proof-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .proof {
            padding: var(--space-16) 0;
          }

          .proof-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3);
          }

          .proof-grid :global(.proof-card) {
            padding: var(--space-5) var(--space-4);
          }

          .proof-icon-wrapper {
            width: 36px;
            height: 36px;
          }

          .proof-grid :global(.proof-icon) {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .proof {
            padding: var(--space-12) 0;
          }

          .proof-grid {
            grid-template-columns: 1fr;
            gap: var(--space-2);
          }

          .proof-grid :global(.proof-card) {
            flex-direction: row;
            text-align: left;
            padding: var(--space-4);
            gap: var(--space-3);
          }

          .proof-icon-wrapper {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
          }

          .proof-content {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
