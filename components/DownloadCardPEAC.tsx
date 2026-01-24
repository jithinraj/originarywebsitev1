export default function DownloadCardPEAC() {
  return (
    <section style={{
      marginTop: 'var(--space-8)',
      borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--border-default)',
      padding: 'var(--space-6)'
    }}>
      <h3 style={{
        fontSize: 'var(--text-xl)',
        fontWeight: 600,
        marginBottom: 'var(--space-2)'
      }}>
        Open Protocol (PEAC) - Upstream Packages
      </h3>
      <p style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        marginBottom: 'var(--space-4)'
      }}>
        PEAC is the open protocol behind Originary&apos;s receipts. Install from the official upstream packages and repository.
      </p>

      <div style={{
        display: 'grid',
        gap: 'var(--space-3)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        marginBottom: 'var(--space-4)'
      }}>
        <div style={{
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-default)',
          padding: 'var(--space-4)'
        }}>
          <div style={{ fontWeight: 500, marginBottom: 'var(--space-2)' }}>
            Node.js CLI & Core (npm)
          </div>
          <pre style={{
            overflow: 'auto',
            borderRadius: 'var(--radius-md)',
            background: 'var(--surface-subtle)',
            padding: 'var(--space-3)',
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-mono)',
            margin: 'var(--space-2) 0'
          }}>
{`npm i -g @peac/cli
npm i @peac/protocol @peac/crypto @peac/schema
peac policy init
peac policy validate peac-policy.yaml`}
          </pre>
          <p style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-3)'
          }}>
            Requires Node 20+; see upstream docs.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <a
              style={{
                textDecoration: 'underline',
                color: 'var(--accent-brand)',
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
                color: 'var(--accent-brand)',
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
          border: '1px solid var(--border-default)',
          padding: 'var(--space-4)'
        }}>
          <div style={{ fontWeight: 500, marginBottom: 'var(--space-2)' }}>
            Wire Format
          </div>
          <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
            Current PEAC wire: <code style={{
              background: 'var(--surface-subtle)',
              padding: '2px 4px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)'
            }}>peac-receipt/0.1</code>
          </p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            Originary is validated against peac-receipt/0.1.
          </p>
        </div>
      </div>

      <p style={{
        fontSize: 'var(--text-xs)',
        color: 'var(--text-secondary)'
      }}>
        Upstream licensing: Apache-2.0. Use at your own discretion; see the repository for details.
      </p>
    </section>
  );
}