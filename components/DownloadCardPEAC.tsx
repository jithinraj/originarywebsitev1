export default function DownloadCardPEAC() {
  return (
    <section style={{
      marginTop: 'var(--space-8)',
      borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--gray-200)',
      padding: 'var(--space-6)'
    }}>
      <h3 style={{
        fontSize: 'var(--text-xl)',
        fontWeight: 600,
        marginBottom: 'var(--space-2)'
      }}>
        Open Protocol (PEAC) — Upstream Packages
      </h3>
      <p style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--gray-600)',
        marginBottom: 'var(--space-4)'
      }}>
        PEAC is the open protocol behind Originary&apos;s receipts. Install from the official upstream packages and repository.
      </p>

      <div style={{
        display: 'grid',
        gap: 'var(--space-3)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginBottom: 'var(--space-4)'
      }}>
        <div style={{
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--gray-200)',
          padding: 'var(--space-4)'
        }}>
          <div style={{ fontWeight: 500, marginBottom: 'var(--space-2)' }}>
            Node.js CLI & Core (npm)
          </div>
          <pre style={{
            overflow: 'auto',
            borderRadius: 'var(--radius-md)',
            background: 'var(--gray-50)',
            padding: 'var(--space-3)',
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-mono)',
            margin: 'var(--space-2) 0'
          }}>
{`pnpm add -g @peacprotocol/cli @peacprotocol/core
npx peac init
npx peac validate peac.txt`}
          </pre>
          <p style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--gray-600)',
            marginBottom: 'var(--space-3)'
          }}>
            Requires Node 18+; see upstream docs.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <a
              style={{
                textDecoration: 'underline',
                color: 'var(--brand-primary)',
                fontSize: 'var(--text-sm)'
              }}
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              style={{
                textDecoration: 'underline',
                color: 'var(--brand-primary)',
                fontSize: 'var(--text-sm)'
              }}
              href="https://peacprotocol.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </div>
        </div>

        <div style={{
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--gray-200)',
          padding: 'var(--space-4)'
        }}>
          <div style={{ fontWeight: 500, marginBottom: 'var(--space-2)' }}>
            Wire Version
          </div>
          <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
            Current PEAC wire: <code style={{
              background: 'var(--gray-50)',
              padding: '2px 4px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)'
            }}>0.9.13</code>
          </p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>
            Originary is validated against 0.9.13.
          </p>
        </div>
      </div>

      <p style={{
        fontSize: 'var(--text-xs)',
        color: 'var(--gray-600)'
      }}>
        Upstream licensing: Apache-2.0. Use at your own discretion; see the repository for details.
      </p>
    </section>
  );
}