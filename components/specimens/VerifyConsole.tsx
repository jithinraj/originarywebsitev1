import { PALETTE } from '../home/palette'
import { SANS, MONO } from '../home/typography'
import type { RecordRow } from './parts'

/*
 * Illustrative record shape. This is NOT a verifier: it performs no cryptographic check and never shows a
 * "valid" result. It shows the shape of a signed record and the exact, version-pinned offline CLI command that
 * actually verifies one. The issuer is a deliberately non-resolving example (issuer.example.invalid) so nothing
 * here can be mistaken for a real verified record.
 */
const SPECIMEN_ROWS: RecordRow[] = [
  { label: 'Type', value: 'org.peacprotocol/mcp' },
  { label: 'Issuer', value: 'https://issuer.example.invalid' },
  { label: 'Action', value: 'tools.call search' },
  { label: 'Result', value: 'allowed - 200' },
  { label: 'Algorithm', value: 'Ed25519 (EdDSA), compact JWS' },
]

export function VerifyConsole() {
  return (
    <div>
      <div style={{ border: `1px solid ${PALETTE.rule}`, background: PALETTE.paper }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '13px 18px',
            borderBottom: `1px solid ${PALETTE.hairline}`,
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 12, color: PALETTE.ink, fontWeight: 500 }}>
            Illustrative record shape
          </span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.04em', color: PALETTE.faint }}>
            example - not verified here
          </span>
        </div>

        <dl className="spec-rows" style={{ padding: '10px 18px 12px' }}>
          {SPECIMEN_ROWS.map((r) => (
            <div className="spec-row" key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div style={{ marginTop: 16, border: `1px solid ${PALETTE.rule}`, background: PALETTE.paper, padding: 18 }}>
        <span style={{ fontFamily: MONO, fontSize: 12, color: PALETTE.ink, fontWeight: 500 }}>
          Verify a record offline
        </span>
        <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '8px 0 12px' }}>
          Use the PEAC CLI with a record and a public key you supply. Verification runs locally; nothing is
          uploaded to Originary. Generate a sample and verify it:
        </p>
        <pre
          style={{
            fontFamily: MONO,
            fontSize: 12,
            lineHeight: 1.7,
            color: PALETTE.ink,
            background: PALETTE.bg,
            border: `1px solid ${PALETTE.hairline}`,
            padding: '12px 14px',
            overflowX: 'auto',
            margin: 0,
          }}
        >
{`pnpm dlx @peac/cli@0.16.2 samples generate -o ./s
pnpm dlx @peac/cli@0.16.2 verify ./s/valid/basic-record.jws \\
  --public-key ./s/bundles/sandbox-jwks.json`}
        </pre>
        <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.55, color: PALETTE.faint, margin: '12px 0 0' }}>
          On success the CLI prints <code style={{ fontFamily: MONO, color: PALETTE.ink }}>Signature valid (offline)</code>;
          a one-byte change fails with <code style={{ fontFamily: MONO, color: PALETTE.ink }}>E_INVALID_SIGNATURE</code>.
          A valid result confirms the record was signed by the supplied key over exactly these bytes. It does not
          establish that the supplied key is authorized by the declared issuer.{' '}
          <a href="#proves" style={{ color: PALETTE.success, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            What this checks
          </a>
          .
        </p>
      </div>
    </div>
  )
}
