'use client'

/**
 * Sample-record demo: one action shown as a record, with a real Ed25519
 * signature check in the browser.
 *
 * Demo keypair generated for this page; the issuer is the reserved example
 * domain support-agent.example, so nothing here can be mistaken for a
 * production record. The private key is not in this repository.
 */
import { useCallback, useEffect, useRef, useState } from 'react'

const JWK = { kty: 'OKP', crv: 'Ed25519', x: 'AuFbhNMoYUl-48DqDWzihJVBED3M1lD8v3qARLZRD4s' } as const

const HEADER_SEG =
  'eyJhbGciOiJFZERTQSIsImtpZCI6Imh0dHBzOi8vc3VwcG9ydC1hZ2VudC5leGFtcGxlLy53ZWxsLWtub3duL2p3a3MuanNvbiNkZW1vLTEiLCJ0eXAiOiJpbnRlcmFjdGlvbi1yZWNvcmQrand0In0'
const PAYLOAD_SEG =
  'eyJhY3Rpb24iOiJyZWZ1bmRfYXBwcm92ZWQiLCJpYXQiOjE3NzY0MTI4OTEsImlzcyI6Imh0dHBzOi8vc3VwcG9ydC1hZ2VudC5leGFtcGxlIiwicmVzdWx0IjoicmVmdW5kZWQiLCJzdWIiOiJjcm0udXBkYXRlIn0'
const TAMPERED_SEG =
  'eyJhY3Rpb24iOiJyZWZ1bmRfYXBwcm92ZWQiLCJpYXQiOjE3NzY0MTI4OTEsImlzcyI6Imh0dHBzOi8vc3VwcG9ydC1hZ2VudC5leGFtcGxlIiwicmVzdWx0Ijoibm90X3JlZnVuZGVkIiwic3ViIjoiY3JtLnVwZGF0ZSJ9'
const SIG_SEG =
  'II1J0aGhPVY8SaJ4SE9AJ_BCWEDs9bg5goG5OYL2AagxTmXNPxNxu2NloFSFkZlh1oIF-ocuHuoAVmGXyEetDQ'

const ISSUED_AT = '2026-04-17 08:01:31 UTC'

type State = 'idle' | 'checking' | 'valid' | 'invalid' | 'unsupported'

function b64uToBytes(s: string): Uint8Array<ArrayBuffer> {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4)
  const bin = atob(b64)
  const out = new Uint8Array(new ArrayBuffer(bin.length))
  for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i)
  return out
}


export function RecordDemo() {
  const [state, setState] = useState<State>('idle')
  const [changed, setChanged] = useState(false)
  const keyRef = useRef<CryptoKey | null>(null)

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
    try {
      ok = await crypto.subtle.verify('Ed25519', key, sig, input)
    } catch {
      setState('unsupported')
      return
    }
    setState(ok ? 'valid' : 'invalid')
  }, [])

  const settled = state === 'valid' || state === 'invalid'


  return (
    <div className="hs-panel" data-state={state}>
      <div className="hs-panel-head">
        <span>Refund approved</span>
        <span className="hs-panel-tag">sample record</span>
      </div>
      <dl className="hs-fields">
        <div>
          <dt>Action</dt>
          <dd>Refund approved</dd>
        </div>
        <div>
          <dt>System</dt>
          <dd>support-agent</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{ISSUED_AT}</dd>
        </div>
        <div data-changed={changed ? 'yes' : 'no'}>
          <dt>Result</dt>
          <dd>
            {changed ? 'not refunded' : 'refunded'}
            {changed ? <span className="hs-changed-tag">changed</span> : null}
          </dd>
        </div>
        <div>
          <dt>Issuer</dt>
          <dd>support-agent.example</dd>
        </div>
        <div>
          <dt>Demo signature</dt>
          <dd>{SIG_SEG.slice(0, 24)}&hellip;</dd>
        </div>
      </dl>

      <div className="hs-acts">
        <button type="button" className="hs-btn hs-btn-solid hs-btn-sm" onClick={() => run(false)}>
          {changed ? 'Restore and verify' : 'Verify'}
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

      <output className="hs-out" aria-live="polite">
        {state === 'idle' ? <p className="hs-out-idle">Not checked yet.</p> : null}
        {state === 'checking' ? <p className="hs-out-idle">Checking&hellip;</p> : null}
        {state === 'unsupported' ? (
          <p className="hs-out-bad">
            This browser can&apos;t verify Ed25519 signatures. Use <code>peac verify</code> instead.
          </p>
        ) : null}
        {settled ? (
          <div>
            <p className={state === 'valid' ? 'hs-out-ok' : 'hs-out-bad'}>
              {state === 'valid' ? 'Signature valid' : 'Signature invalid'}
            </p>
            {state === 'valid' ? (
              <>
                <p className="hs-out-note">The supplied key validates this signed record.</p>
                <p className="hs-out-note hs-out-note-sm">
                  The protected record has not changed since it was signed.
                </p>
              </>
            ) : (
              <p className="hs-out-note">The record no longer validates under the supplied key.</p>
            )}
          </div>
        ) : null}
      </output>
    </div>
  )
}
