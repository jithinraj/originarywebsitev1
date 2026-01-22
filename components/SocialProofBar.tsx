'use client'

interface SocialProofBarProps {
  className?: string
  variant?: 'compact' | 'full'
}

export default function SocialProofBar({ className = '', variant = 'compact' }: SocialProofBarProps) {
  if (variant === 'compact') {
    return (
      <p className={`social-proof-compact ${className}`}>
        Open source &middot; Apache-2.0 &middot; Self-hostable

        <style jsx>{`
          .social-proof-compact {
            font-size: 12px;
            color: var(--text-muted);
            margin: 0;
            letter-spacing: 0.01em;
          }

          @media (max-width: 1024px) {
            .social-proof-compact {
              text-align: center;
            }
          }
        `}</style>
      </p>
    )
  }

  // Full variant
  return (
    <div className={`social-proof-full ${className}`}>
      <div className="proof-row">
        <span className="proof-item">
          <span className="item-dot" />
          Open Protocol
        </span>
        <span className="proof-sep" />
        <span className="proof-item">
          <span className="item-dot" />
          Apache-2.0
        </span>
        <span className="proof-sep" />
        <span className="proof-item">
          <span className="item-dot" />
          Self-Hostable
        </span>
      </div>

      <style jsx>{`
        .social-proof-full {
          text-align: center;
        }

        .proof-row {
          display: inline-flex;
          align-items: center;
          gap: 16px;
        }

        .proof-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .item-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-brand);
        }

        .proof-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--border-default);
        }

        @media (max-width: 600px) {
          .proof-row {
            flex-direction: column;
            gap: 8px;
          }

          .proof-sep {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
