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
          <h2 className="proof-title">Verify the system</h2>
          <p className="proof-subtitle">Designed for disputes and audits</p>
        </div>

        <div className="proof-grid">
          {proofItems.map((item) => (
            <Link key={item.id} href={item.href} className="proof-card">
              <item.Icon size={20} className="proof-icon" aria-hidden="true" />
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
          background: var(--white);
          padding: var(--space-16) 0;
          border-top: 1px solid var(--gray-100);
        }

        .proof-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .proof-header {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .proof-title {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--gray-900);
          margin: 0 0 var(--space-2);
          letter-spacing: -0.02em;
        }

        .proof-subtitle {
          font-size: var(--text-sm);
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
          gap: var(--space-3);
          padding: var(--space-6) var(--space-4);
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-xl);
          text-decoration: none;
          text-align: center;
          transition: border-color var(--duration-200) ease, box-shadow var(--duration-200) ease;
        }

        .proof-grid :global(.proof-card:hover) {
          border-color: var(--gray-200);
          box-shadow: var(--shadow-sm);
        }

        .proof-grid :global(.proof-card:focus-visible) {
          outline: 2px solid var(--brand-primary);
          outline-offset: 2px;
        }

        .proof-grid :global(.proof-icon) {
          color: var(--gray-400);
        }

        .proof-grid :global(.proof-card:hover .proof-icon) {
          color: var(--gray-600);
        }

        .proof-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .proof-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-900);
        }

        .proof-desc {
          font-size: var(--text-xs);
          color: var(--gray-500);
        }

        @media (max-width: 900px) {
          .proof-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .proof {
            padding: var(--space-12) 0;
          }

          .proof-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3);
          }

          .proof-grid :global(.proof-card) {
            padding: var(--space-4) var(--space-3);
          }

          .proof-grid :global(.proof-icon) {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 400px) {
          .proof-grid {
            grid-template-columns: 1fr;
          }

          .proof-grid :global(.proof-card) {
            flex-direction: row;
            text-align: left;
            padding: var(--space-4);
          }

          .proof-content {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
