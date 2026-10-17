'use client'

/**
 * Verifier: paste a compact JWS and a public key (JWK or JWKS), and the
 * Ed25519 signature is checked in the browser with WebCrypto. Nothing is sent
 * anywhere. This is the signature check only; the PEAC CLI additionally runs
 * the full verification profile (I-JSON input rules, record structure).
 *
 * Samples reuse the homepage demo record (issuer support-agent.example), so
 * nothing here can be mistaken for a production record.
 */
import { useCallback, useState } from 'react'
import { HEADER_SEG, PAYLOAD_SEG, TAMPERED_SEG, SIG_SEG, JWK } from '../home/RecordDemo'
import { StatusIcon } from './parts'

type Result =
  | { state: 'idle' }
  | { state: 'checking' }
  | { state: 'valid'; ms: number; header: unknown; payload: unknown; kid?: string }
  | { state: 'invalid'; reason: string; header?: unknown; payload?: unknown }
  | { state: 'error'; reason: string }

const SAMPLE_RECORD = `${HEADER_SEG}.${PAYLOAD_SEG}.${SIG_SEG}`
const SAMPLE_TAMPERED = `${HEADER_SEG}.${TAMPERED_SEG}.${SIG_SEG}`
const SAMPLE_KEY = JSON.stringify({ keys: [{ ...JWK, kid: 'demo-1' }] }, null, 2)

function b64uToBytes(s: string): Uint8Array<ArrayBuffer> {
  if (!/^[A-Za-z0-9_-]*$/.test(s)) throw new Error('not base64url')
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4)
  const bin = atob(b64)
  const out = new Uint8Array(new ArrayBuffer(bin.length))
  for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i)
  return out
}

function decodeJson(seg: string): unknown {
  return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(b64uToBytes(seg)))
}

type Jwk = { kty?: string; crv?: string; x?: string; kid?: string }

/** Pick the key: a bare JWK, or the JWKS entry whose kid matches the header (or the only entry). */
function pickKey(text: string, headerKid?: string): { key: Jwk } | { error: string } {
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    return { error: 'The public key is not valid JSON. Paste a JWK or a JWKS ({"keys": [...]}).' }
  }
  const keys: Jwk[] = Array.isArray((parsed as { keys?: unknown }).keys)
    ? ((parsed as { keys: Jwk[] }).keys)
    : [parsed as Jwk]
  const ed = keys.filter((k) => k && k.kty === 'OKP' && k.crv === 'Ed25519' && typeof k.x === 'string')
  if (!ed.length) return { error: 'No Ed25519 public key found (expected kty "OKP", crv "Ed25519").' }
  if (ed.length === 1) return { key: ed[0] }
  const frag = headerKid?.split('#').pop()
  const match = ed.find((k) => k.kid && (k.kid === headerKid || k.kid === frag))
  return match ? { key: match } : { error: 'Several keys were supplied and none matches the record’s key id.' }
}

export function Verifier() {
  const [record, setRecord] = useState('')
  const [keyText, setKeyText] = useState('')
  const [result, setResult] = useState<Result>({ state: 'idle' })

  const verify = useCallback(async () => {
    setResult({ state: 'checking' })
    const parts = record.trim().split('.')
    if (parts.length !== 3 || parts.some((p) => !p)) {
      setResult({ state: 'error', reason: 'This is not a compact JWS. A record has three parts separated by dots.' })
      return
    }
    let header: { alg?: string; kid?: string }
    let payload: unknown
    try {
      header = decodeJson(parts[0]) as { alg?: string; kid?: string }
      payload = decodeJson(parts[1])
    } catch {
      setResult({ state: 'error', reason: 'The header or payload is not valid base64url-encoded JSON.' })
      return
    }
    if (header.alg !== 'EdDSA') {
      setResult({ state: 'error', reason: `Unsupported algorithm "${String(header.alg)}". PEAC records use EdDSA (Ed25519).` })
      return
    }
    const picked = pickKey(keyText, header.kid)
    if ('error' in picked) {
      setResult({ state: 'error', reason: picked.error })
      return
    }
    try {
      const { kty, crv, x } = picked.key
      const key = await crypto.subtle.importKey('jwk', { kty, crv, x }, { name: 'Ed25519' }, false, ['verify'])
      const t0 = performance.now()
      const ok = await crypto.subtle.verify(
        'Ed25519',
        key,
        b64uToBytes(parts[2]),
        new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
      )
      const ms = performance.now() - t0
      setResult(
        ok
          ? { state: 'valid', ms, header, payload, kid: picked.key.kid }
          : {
              state: 'invalid',
              reason: 'These bytes do not match the signature under the supplied key. The record changed, or this is not the issuer’s key.',
              header,
              payload,
            },
      )
    } catch {
      setResult({
        state: 'error',
        reason: 'This browser could not run the Ed25519 check. Use the PEAC CLI below instead.',
      })
    }
  }, [record, keyText])

  const load = (r: string) => {
    setRecord(r)
    setKeyText(SAMPLE_KEY)
    setResult({ state: 'idle' })
  }

  const decoded = result.state === 'valid' || result.state === 'invalid' ? result : null
  const checks: Array<{ text: string; status: 'ok' | 'bad' | 'none' }> = [
    {
      text: 'The supplied key validates the signature.',
      status: result.state === 'valid' ? 'ok' : result.state === 'invalid' ? 'bad' : 'none',
    },
    {
      text: 'The signed bytes have not changed since signing.',
      status: result.state === 'valid' ? 'ok' : result.state === 'invalid' ? 'bad' : 'none',
    },
  ]
  const notChecked = [
    'Whether the supplied key belongs to the declared issuer.',
    'Whether every related event was recorded or shared.',
    'Whether a policy or legal requirement was satisfied.',
    'The full PEAC profile (I-JSON input, record structure): run the CLI for that.',
  ]

  return (
    <div className="vf">
      <div className="vf-inputs">
        <div className="vf-field">
          <div className="vf-label-row">
            <label htmlFor="vf-record" className="vf-label">
              Signed record <span>compact JWS</span>
            </label>
            <span className="vf-samples">
              <button type="button" onClick={() => load(SAMPLE_RECORD)}>
                Load sample
              </button>
              <button type="button" onClick={() => load(SAMPLE_TAMPERED)}>
                Load a changed sample
              </button>
            </span>
          </div>
          <textarea
            id="vf-record"
            className="vf-input"
            spellCheck={false}
            autoComplete="off"
            rows={5}
            placeholder="eyJhbGciOiJFZERTQSIs..."
            value={record}
            onChange={(e) => {
              setRecord(e.target.value)
              setResult({ state: 'idle' })
            }}
          />
        </div>
        <div className="vf-field">
          <label htmlFor="vf-key" className="vf-label">
            Public key you expect <span>JWK or JWKS</span>
          </label>
          <textarea
            id="vf-key"
            className="vf-input"
            spellCheck={false}
            autoComplete="off"
            rows={5}
            placeholder='{"keys": [{"kty": "OKP", "crv": "Ed25519", "x": "..."}]}'
            value={keyText}
            onChange={(e) => {
              setKeyText(e.target.value)
              setResult({ state: 'idle' })
            }}
          />
        </div>
        <div className="vf-go">
          <button
            type="button"
            className="hs-btn hs-btn-solid"
            onClick={verify}
            disabled={!record.trim() || !keyText.trim() || result.state === 'checking'}
          >
            Verify signature
          </button>
          <span className="vf-local">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
            </svg>
            Runs in your browser. Nothing is uploaded.
          </span>
        </div>
      </div>

      <div className="vf-result" data-state={result.state}>
        <output className="vf-status" aria-live="polite">
          <StatusIcon
            kind={result.state === 'valid' ? 'ok' : result.state === 'invalid' || result.state === 'error' ? 'bad' : 'none'}
            size={20}
          />
          <span>
            <span className="vf-status-word">
              {result.state === 'idle'
                ? 'Not verified yet'
                : result.state === 'checking'
                  ? 'Checking…'
                  : result.state === 'valid'
                    ? 'Signature valid'
                    : result.state === 'invalid'
                      ? 'Signature invalid'
                      : 'Could not verify'}
            </span>
            <span className="vf-status-note">
              {result.state === 'idle'
                ? 'Paste a record and a key, or load a sample.'
                : result.state === 'valid'
                  ? `Checked in ${result.ms < 1 ? result.ms.toFixed(2) : result.ms.toFixed(1)} ms${result.kid ? ` with key ${result.kid}` : ''}.`
                  : result.state === 'invalid' || result.state === 'error'
                    ? result.reason
                    : ' '}
            </span>
          </span>
        </output>

        <ul className="vf-checks" role="list" aria-label="What this check establishes">
          {checks.map((c) => (
            <li key={c.text} data-status={c.status}>
              <StatusIcon kind={c.status} size={16} />
              <span className="vf-word">{c.status === 'ok' ? 'Checked' : c.status === 'bad' ? 'Failed' : 'Pending'}</span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
        <ul className="vf-checks vf-checks-not" role="list" aria-label="What this check does not establish">
          {notChecked.map((t) => (
            <li key={t} data-status="none">
              <StatusIcon kind="none" size={16} />
              <span className="vf-word">Not checked</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        {decoded ? (
          <details className="vf-decoded" open>
            <summary>Decoded record</summary>
            <pre>{JSON.stringify({ header: decoded.header, payload: decoded.payload }, null, 2)}</pre>
          </details>
        ) : null}
      </div>
    </div>
  )
}
