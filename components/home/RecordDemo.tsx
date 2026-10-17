'use client'

/**
 * Sample-record demo: one action shown as a record, with a real Ed25519
 * signature check in the browser. The card shows both sides of the record:
 * the decoded payload a person reads, and the signed token and public key a
 * verifier checks. Changing one field highlights the changed line and the
 * changed bytes, and the check fails.
 *
 * Demo keypair generated for this page; the issuer is the reserved example
 * domain support-agent.example, so nothing here can be mistaken for a
 * production record. The private key is not in this repository.
 */
import { useCallback, useEffect, useRef, useState } from 'react'

export const JWK = { kty: 'OKP', crv: 'Ed25519', x: 'AuFbhNMoYUl-48DqDWzihJVBED3M1lD8v3qARLZRD4s' } as const

export const HEADER_SEG =
  'eyJhbGciOiJFZERTQSIsImtpZCI6Imh0dHBzOi8vc3VwcG9ydC1hZ2VudC5leGFtcGxlLy53ZWxsLWtub3duL2p3a3MuanNvbiNkZW1vLTEiLCJ0eXAiOiJpbnRlcmFjdGlvbi1yZWNvcmQrand0In0'
export const PAYLOAD_SEG =
  'eyJhY3Rpb24iOiJyZWZ1bmRfYXBwcm92ZWQiLCJpYXQiOjE3NzY0MTI4OTEsImlzcyI6Imh0dHBzOi8vc3VwcG9ydC1hZ2VudC5leGFtcGxlIiwicmVzdWx0IjoicmVmdW5kZWQiLCJzdWIiOiJjcm0udXBkYXRlIn0'
export const TAMPERED_SEG =
  'eyJhY3Rpb24iOiJyZWZ1bmRfYXBwcm92ZWQiLCJpYXQiOjE3NzY0MTI4OTEsImlzcyI6Imh0dHBzOi8vc3VwcG9ydC1hZ2VudC5leGFtcGxlIiwicmVzdWx0Ijoibm90X3JlZnVuZGVkIiwic3ViIjoiY3JtLnVwZGF0ZSJ9'
export const SIG_SEG =
  'II1J0aGhPVY8SaJ4SE9AJ_BCWEDs9bg5goG5OYL2AagxTmXNPxNxu2NloFSFkZlh1oIF-ocuHuoAVmGXyEetDQ'

const ISSUED_AT = '2026-04-17 08:01:31 UTC'

export type DemoState = 'idle' | 'checking' | 'valid' | 'invalid' | 'unsupported'
type State = DemoState

function b64uToBytes(s: string): Uint8Array<ArrayBuffer> {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4)
  const bin = atob(b64)
  const out = new Uint8Array(new ArrayBuffer(bin.length))
  for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i)
  return out
}

/** The decoded payload, one line per field, in the token's own order. */
function payloadLines(seg: string): Array<{ key: string; value: string }> {
  const obj = JSON.parse(new TextDecoder().decode(b64uToBytes(seg))) as Record<string, string | number>
  return Object.entries(obj).map(([key, v]) => ({ key, value: typeof v === 'string' ? `"${v}"` : String(v) }))
}

export function RecordDemo({ onState }: { onState?: (s: DemoState, changed: boolean) => void } = {}) {
  const [state, setState] = useState<State>('idle')
  const [changed, setChanged] = useState(false)
  const [ms, setMs] = useState<number | null>(null)
  const keyRef = useRef<CryptoKey | null>(null)

  useEffect(() => {
    onState?.(state, changed)
  }, [state, changed, onState])

  useEffect(() => {
    let live = true
    ;(async () => {
      try {
        const key = await crypto.subtle.importKey('jwk', JWK, { name: 'Ed25519' }, false, ['verify'])
        if (live) keyRef.current = key
      } catch {
        if (live) setState('unsupported')
      }
    })()
    return () => {
      live = false
    }
  }, [])

  const run = useCallback(async (withChange: boolean) => {
    const key = keyRef.current
    if (!key) {
      setState('unsupported')
      return
    }
    setChanged(withChange)
    setState('checking')
    const input = new TextEncoder().encode(`${HEADER_SEG}.${withChange ? TAMPERED_SEG : PAYLOAD_SEG}`)
    const sig = b64uToBytes(SIG_SEG)
    let ok = false
    const t0 = performance.now()
    try {
      ok = await crypto.subtle.verify('Ed25519', key, sig, input)
    } catch {
      setState('unsupported')
      return
    }
    setMs(performance.now() - t0)
    setState(ok ? 'valid' : 'invalid')
  }, [])

  const lines = payloadLines(changed ? TAMPERED_SEG : PAYLOAD_SEG)
  const timing = ms === null ? '' : ms < 1 ? `${ms.toFixed(2)} ms` : `${ms.toFixed(1)} ms`

  return (
    <div className="rc rd" data-state={state} data-changed={changed ? 'yes' : 'no'}>
      <div className="rc-head">
        <span className="rc-issuer">
          <span className="rc-seal" aria-hidden>
            <SealMark />
          </span>
          support-agent.example
        </span>
        <span className="rc-tag">Sample record</span>
      </div>

      <div className="rd-body">
        {/* What a person reads */}
        <div className="rd-col">
          <p className="rd-label">Decoded record</p>
          <p className="rd-title">Refund approved</p>
          <p className="rd-meta">
            support-agent <span aria-hidden>&middot;</span> {ISSUED_AT}
          </p>
          <pre className="rd-json" aria-label="Decoded payload">
            <span className="rd-punct">{'{'}</span>
            {'\n'}
            {lines.map((l, i) => {
              const hit = changed && l.key === 'result'
              return (
                <span key={l.key} className={hit ? 'rd-line rd-hit' : 'rd-line'}>
                  {'  '}
                  <span className="rd-key">&quot;{l.key}&quot;</span>
                  <span className="rd-punct">: </span>
                  <span className="rd-val">{l.value}</span>
                  {i < lines.length - 1 ? <span className="rd-punct">,</span> : null}
                  {hit ? <span className="rd-changed">changed</span> : null}
                  {'\n'}
                </span>
              )
            })}
            <span className="rd-punct">{'}'}</span>
          </pre>
        </div>

        {/* What a verifier checks */}
        <div className="rd-col rd-col-machine">
          <p className="rd-label">Signed token &middot; compact JWS</p>
          <p className="rd-token" aria-label="Signed token: header, payload and signature">
            <span className="rd-seg rd-seg-h">{HEADER_SEG}</span>
            <span className="rd-dot">.</span>
            <span className={changed ? 'rd-seg rd-seg-p rd-seg-hit' : 'rd-seg rd-seg-p'}>
              {changed ? TAMPERED_SEG : PAYLOAD_SEG}
            </span>
            <span className="rd-dot">.</span>
            <span className="rd-seg rd-seg-s">{SIG_SEG}</span>
          </p>
          <p className="rd-legend" aria-hidden>
            <span className="rd-legend-h">header</span>
            <span className="rd-legend-p">payload</span>
            <span className="rd-legend-s">signature</span>
          </p>
          <p className="rd-label rd-label-key">Issuer&apos;s public key &middot; Ed25519</p>
          <p className="rd-key-box">{JWK.x}</p>
        </div>
      </div>

      <div className="rd-foot">
        <div className="rc-acts">
          <button type="button" className="hs-btn hs-btn-solid hs-btn-sm" onClick={() => run(false)}>
            {changed ? 'Restore and verify' : 'Verify signature'}
          </button>
          <button
            type="button"
            className="hs-btn hs-btn-ghost hs-btn-sm"
            onClick={() => run(true)}
            disabled={changed}
          >
            Change one field
          </button>
        </div>
        <output className="rd-status" aria-live="polite">
          <StatusIcon state={state} />
          <span>
            <span className="rd-status-word">
              {state === 'idle'
                ? 'Not verified yet'
                : state === 'checking'
                  ? 'Checking…'
                  : state === 'valid'
                    ? 'Signature valid'
                    : state === 'invalid'
                      ? 'Signature invalid'
                      : 'Ed25519 not supported here'}
            </span>
            <span className="rd-status-note">
              {state === 'idle'
                ? 'Runs in your browser with the issuer\u2019s public key. Nothing is sent anywhere.'
                : state === 'valid'
                  ? `Checked in ${timing} in your browser. The record has not changed since it was signed.`
                  : state === 'invalid'
                    ? 'The result field changed, so these bytes no longer match the signature.'
                    : state === 'unsupported'
                      ? 'Use the PEAC CLI (peac verify) instead.'
                      : ' '}
            </span>
          </span>
        </output>
      </div>
    </div>
  )
}

function SealMark() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  )
}

/* Results carry an icon and a word, never colour alone. */
function StatusIcon({ state }: { state: State }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      {state === 'valid' ? (
        <>
          <circle cx="10" cy="10" r="8.25" />
          <path d="m6.4 10.2 2.4 2.4 4.8-5.2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : state === 'invalid' || state === 'unsupported' ? (
        <>
          <circle cx="10" cy="10" r="8.25" />
          <path d="m7.2 7.2 5.6 5.6m0-5.6-5.6 5.6" strokeLinecap="round" />
        </>
      ) : (
        <circle cx="10" cy="10" r="8.25" strokeDasharray="2.6 2.6" />
      )}
    </svg>
  )
}
