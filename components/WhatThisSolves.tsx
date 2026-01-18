'use client'

export default function WhatThisSolves() {
  return (
    <section className="solves">
      <div className="solves-container">
        <div className="solves-column before">
          <h3 className="column-label">Before</h3>
          <ul className="column-list">
            <li>No portable record of what an agent accessed</li>
            <li>Disputes rely on server logs alone</li>
            <li>Terms and consent are implicit, not verifiable</li>
          </ul>
        </div>

        <div className="solves-divider" aria-hidden="true">
          <div className="divider-line" />
          <span className="divider-arrow">→</span>
          <div className="divider-line" />
        </div>

        <div className="solves-column after">
          <h3 className="column-label">After</h3>
          <ul className="column-list">
            <li>Every interaction produces a signature-verified record</li>
            <li>Disputes use portable, third-party verifiable evidence</li>
            <li>Terms, consent, and attribution are explicit and auditable</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .solves {
          background: var(--gray-50);
          padding: var(--space-16) 0;
          border-top: 1px solid var(--gray-100);
          border-bottom: 1px solid var(--gray-100);
        }

        .solves-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: var(--space-8);
          align-items: start;
        }

        .solves-column {
          padding: var(--space-6);
        }

        .column-label {
          font-size: var(--text-xs);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 var(--space-4);
        }

        .before .column-label {
          color: var(--gray-400);
        }

        .after .column-label {
          color: var(--gray-900);
        }

        .column-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .column-list li {
          font-size: var(--text-sm);
          line-height: 1.6;
          padding-left: var(--space-5);
          position: relative;
        }

        .before .column-list li {
          color: var(--gray-500);
        }

        .before .column-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: var(--gray-300);
        }

        .after .column-list li {
          color: var(--gray-700);
        }

        .after .column-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: var(--brand-primary);
        }

        .solves-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          padding-top: var(--space-10);
        }

        .divider-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(180deg, var(--gray-200) 0%, var(--gray-300) 100%);
        }

        .divider-arrow {
          font-size: var(--text-lg);
          color: var(--gray-400);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .solves {
            padding: var(--space-12) 0;
          }

          .solves-container {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .solves-divider {
            flex-direction: row;
            padding-top: 0;
          }

          .divider-line {
            width: 40px;
            height: 1px;
          }

          .divider-arrow {
            transform: rotate(90deg);
          }

          .solves-column {
            padding: var(--space-4);
            background: var(--white);
            border-radius: var(--radius-xl);
            border: 1px solid var(--gray-200);
          }
        }
      `}</style>
    </section>
  )
}
