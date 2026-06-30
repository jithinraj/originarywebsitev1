'use client'

import { useState } from 'react'
import { PALETTE } from '../home/palette'
import { SANS, MONO } from '../home/typography'
import { StatusBadge, type RecordRow } from './parts'

/* Demo record (base64url-shaped placeholder). The shipped console verifies in the
   browser or via the CLI; this preview demonstrates the result UX for the sample. */
const SAMPLE_JWS = `eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjYtMDYta2V5MSIsInR5cCI6ImludGVy
YWN0aW9uLXJlY29yZCtqd3QifQ.eyJpc3MiOiJodHRwczovL2FwaS52ZW5kb3Iu
ZXhhbXBsZSIsImFjdGlvbiI6InRvb2xzLmNhbGwgc2VhcmNoX2RvY3MiLCJwb2xp
Y3kiOnsicmVmIjoidGVybXM6djMifSwicmVzdWx0Ijp7InN0YXR1cyI6MjAwfX0.
x4mUq2Vh_demo_signature_placeholder_for_preview_only`

const RESULT_ROWS: RecordRow[] = [
  { label: 'Signature', value: 'valid (Ed25519)' },
  { label: 'Issuer', value: 'https://api.vendor.example' },
  { label: 'Key', value: 'kid 2026-06-key1 - from /.well-known/jwks.json' },
  { label: 'Action', value: 'tools.call search_docs' },
  { label: 'Policy', value: 'terms:v3 - sha256:81af2c...' },
  { label: 'Result', value: 'allowed - 200 - sha256:9a3c1d...' },
  { label: 'Time', value: '2026-06-12T14:08:11Z' },
]

const TABS = ['Paste JWS', 'Upload .jws', 'Upload bundle'] as const

export function VerifyConsole() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Paste JWS')
  const [input, setInput] = useState(SAMPLE_JWS)
  const [state, setState] = useState<'sample' | 'edited'>('sample')

  const edited = input.trim() !== SAMPLE_JWS.trim()

  return (
    <div>
      <div style={{ border: `1px solid ${PALETTE.rule}`, background: PALETTE.paper }}>
        {/* tabs */}
        <div style={{ display: 'flex', borderBottom: `1px solid ${PALETTE.hairline}` }}>
          {TABS.map((t) => {
            const on = t === tab
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  fontFamily: MONO,
                  fontSize: 11.5,
                  letterSpacing: '0.03em',
                  padding: '11px 16px',
                  background: on ? PALETTE.bg : 'transparent',
                  border: 'none',
                  borderBottom: on ? `2px solid ${PALETTE.accent}` : '2px solid transparent',
                  color: on ? PALETTE.ink : PALETTE.faint,
                  cursor: 'pointer',
                }}
              >
                {t}
              </button>
            )
          })}
        </div>

        <div style={{ padding: 18 }}>
          {tab === 'Paste JWS' ? (
            <textarea
              aria-label="Record input"
              value={input}
              spellCheck={false}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              style={{
                width: '100%',
                resize: 'vertical',
                fontFamily: MONO,
                fontSize: 12,
                lineHeight: 1.6,
                color: PALETTE.ink,
                background: PALETTE.bg,
                border: `1px solid ${PALETTE.hairline}`,
                padding: '12px 14px',
                wordBreak: 'break-all',
                boxSizing: 'border-box',
              }}
            />
          ) : (
            <div
              style={{
                fontFamily: SANS,
                fontSize: 14,
                color: PALETTE.muted,
                background: PALETTE.bg,
                border: `1px dashed ${PALETTE.rule}`,
                padding: '28px 18px',
                textAlign: 'center',
              }}
            >
              In the shipped console, drop a {tab === 'Upload .jws' ? '.jws record' : 'dispute bundle'} here. This preview
              uses the pasted sample.
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 14 }}>
            <button
              type="button"
              className="tamper-btn"
              onClick={() => setState(edited ? 'edited' : 'sample')}
              style={{
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 500,
                color: PALETTE.paper,
                background: PALETTE.ink,
                border: `1px solid ${PALETTE.ink}`,
                padding: '11px 18px',
              }}
            >
              Verify record
            </button>
            <span style={{ fontFamily: SANS, fontSize: 13, color: PALETTE.faint }}>
              or provide a JWKS URL / public key. Optional.
            </span>
            {edited ? (
              <button
                type="button"
                onClick={() => {
                  setInput(SAMPLE_JWS)
                  setState('sample')
                }}
                style={{
                  fontFamily: MONO,
                  fontSize: 11.5,
                  color: PALETTE.accent,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                restore sample
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* result */}
      <div style={{ marginTop: 16, border: `1px solid ${PALETTE.rule}`, background: PALETTE.paper }}>
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
            Verification result
          </span>
          {state === 'edited' ? (
            <StatusBadge kind="neutral">preview only</StatusBadge>
          ) : (
            <StatusBadge kind="verified">valid</StatusBadge>
          )}
        </div>

        {state === 'edited' ? (
          <div style={{ padding: '18px', fontFamily: SANS, fontSize: 14.5, lineHeight: 1.6, color: PALETTE.muted }}>
            This preview only verifies the bundled sample. To check your own record, run it offline with{' '}
            <code style={{ fontFamily: MONO, color: PALETTE.ink }}>@peac/cli verify --public-key</code>, or use the
            self-hosted verifier. Nothing you paste here is sent to a server.
          </div>
        ) : (
          <>
            <dl className="spec-rows" style={{ padding: '6px 18px 10px' }}>
              {RESULT_ROWS.map((r) => (
                <div className="spec-row" key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
            <div
              style={{
                padding: '12px 18px 16px',
                fontFamily: SANS,
                fontSize: 13,
                lineHeight: 1.55,
                color: PALETTE.faint,
                borderTop: `1px solid ${PALETTE.hairline}`,
              }}
            >
              This confirms the issuer signed these claims and the record was not changed after signing. It does not
              assert the claims are true.{' '}
              <a href="#proves" style={{ color: PALETTE.success, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                What this proves
              </a>
              .
            </div>
          </>
        )}
      </div>

      <p style={{ fontFamily: SANS, fontSize: 12.5, color: PALETTE.faint, marginTop: 16, lineHeight: 1.55 }}>
        This console is a preview. The shipped version verifies in your browser or via the CLI; records you paste are
        never sent to a server or stored.
      </p>
    </div>
  )
}
