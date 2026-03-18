'use client'

import { useState, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* ─── Sample tokens ──────────────────────────────────────── */

const SAMPLE_VALID = 'eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDktcHJpbWFyeSIsInR5cCI6ImludGVyYWN0aW9uLXJlY29yZCtqd3QifQ.eyJpc3MiOiJodHRwczovL29yaWdpbmFyeS54eXoiLCJzdWIiOiJkaWQ6a2V5Ono2TWtmNXJHUHVRNFRSYzlTdmVoWEtxVEN1eTlOeXlFcUdGTlpaV2tReXlGYiIsImlhdCI6MTc0MjI1NjAwMCwicGVhY192ZXJzaW9uIjoiMC4yIiwia2luZCI6ImV2aWRlbmNlIiwidHlwZSI6Im9yZy5wZWFjcHJvdG9jb2wvY29tbWVyY2UiLCJwaWxsYXJzIjpbImNvbW1lcmNlIiwiYWNjZXNzIl0sImRlY2lzaW9uIjoiYWxsb3ciLCJyZXNvdXJjZSI6Ii9hcGkvYm9va2luZ3MiLCJtZXRob2QiOiJQT1NUIiwiY29tbWVyY2UiOnsiYW1vdW50X21pbm9yIjoiMTAwIiwiY3VycmVuY3kiOiJVU0QiLCJldmVudCI6ImF1dGhvcml6ZWQifSwicG9saWN5Ijp7InVyaSI6Imh0dHBzOi8vb3JpZ2luYXJ5Lnh5ei8ud2VsbC1rbm93bi9wZWFjLnR4dCIsInZlcnNpb24iOiIxLjAuMCIsImRpZ2VzdCI6InNoYTI1Ni1hYmNkZWYxMjM0NTYifX0.EXAMPLE_SIGNATURE_NOT_REAL'

const SAMPLE_INVALID = 'eyJhbGciOiJFZERTQSJ9.eyJpc3MiOiJodHRwOi8vbm90LWNhbm9uaWNhbC5jb20iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzAwMDAwMDAwfQ.INVALID_SIG'

const SAMPLE_DENY = 'eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDktcHJpbWFyeSIsInR5cCI6ImludGVyYWN0aW9uLXJlY29yZCtqd3QifQ.eyJpc3MiOiJodHRwczovL29yaWdpbmFyeS54eXoiLCJzdWIiOiJkaWQ6a2V5Ono2TWtmNXJHUHVRNFRSYzlTdmVoWEtxVEN1eTlOeXlFcUdGTlpaV2tReXlGYiIsImlhdCI6MTc0MjI1NjAwMCwicGVhY192ZXJzaW9uIjoiMC4yIiwia2luZCI6ImV2aWRlbmNlIiwidHlwZSI6Im9yZy5wZWFjcHJvdG9jb2wvYWNjZXNzIiwicGlsbGFycyI6WyJhY2Nlc3MiXSwiZGVjaXNpb24iOiJkZW55IiwicmVzb3VyY2UiOiIvYXBpL2FkbWluL3VzZXJzIiwibWV0aG9kIjoiREVMRVRFIiwicG9saWN5Ijp7InVyaSI6Imh0dHBzOi8vb3JpZ2luYXJ5Lnh5ei8ud2VsbC1rbm93bi9wZWFjLnR4dCIsInZlcnNpb24iOiIxLjAuMCJ9fQ.EXAMPLE_DENY_SIGNATURE'

type InspectResult = {
  status: 'valid-structure' | 'malformed' | 'incomplete'
  header: Record<string, unknown> | null
  claims: Record<string, unknown> | null
  notes: string[]
}

function base64UrlDecode(str: string): string {
  const padded = str + '='.repeat((4 - (str.length % 4)) % 4)
  return atob(padded.replace(/-/g, '+').replace(/_/g, '/'))
}

function inspectToken(raw: string): InspectResult {
  const token = raw.trim()
  const parts = token.split('.')
  const notes: string[] = []

  if (parts.length !== 3) {
    return {
      status: 'malformed',
      header: null,
      claims: null,
      notes: [`Expected 3 JWS parts (header.payload.signature), found ${parts.length}.`],
    }
  }

  let header: Record<string, unknown> | null = null
  let claims: Record<string, unknown> | null = null

  try {
    header = JSON.parse(base64UrlDecode(parts[0]))
  } catch {
    return {
      status: 'malformed',
      header: null,
      claims: null,
      notes: ['Could not decode or parse the JOSE header (part 0).'],
    }
  }

  try {
    claims = JSON.parse(base64UrlDecode(parts[1]))
  } catch {
    return {
      status: 'malformed',
      header,
      claims: null,
      notes: ['JOSE header decoded, but could not decode or parse the payload (part 1).'],
    }
  }

  const h = header as Record<string, unknown>
  const c = claims as Record<string, unknown>

  if (h.alg === 'EdDSA') {
    notes.push('Algorithm: EdDSA (Ed25519)')
  } else if (h.alg) {
    notes.push(`Algorithm: ${h.alg} (PEAC requires EdDSA)`)
  } else {
    notes.push('Missing alg in header')
  }

  if (h.typ === 'interaction-record+jwt') {
    notes.push('Type: interaction-record+jwt (Wire 0.2, current stable)')
  } else if (h.typ === 'peac-receipt/0.1') {
    notes.push('Type: peac-receipt/0.1 (Wire 0.1, legacy frozen format)')
  } else if (h.typ) {
    notes.push(`Type: ${h.typ}`)
  }

  if (h.kid) {
    notes.push(`Key ID: ${h.kid}`)
  } else {
    notes.push('Missing kid in header (required for key resolution)')
  }

  if (c.iss) {
    const iss = String(c.iss)
    if (iss.startsWith('https://')) {
      notes.push(`Issuer: ${iss} (canonical https)`)
    } else if (iss.startsWith('did:')) {
      notes.push(`Issuer: ${iss} (DID)`)
    } else {
      notes.push(`Issuer: ${iss} (non-canonical; PEAC requires https:// or did:)`)
    }
  }

  if (c.iat) {
    const date = new Date(Number(c.iat) * 1000)
    notes.push(`Issued: ${date.toISOString()}`)
  }

  if (c.decision) {
    notes.push(`Decision: ${c.decision}`)
  }

  if (c.kind) {
    notes.push(`Kind: ${c.kind}`)
  }

  if (c.peac_version) {
    notes.push(`PEAC version: ${c.peac_version}`)
  }

  notes.push('Signature present but not verified (browser-only inspection; use Agent Auditor or verifyLocal() for cryptographic verification)')

  const hasKid = Boolean(h.kid)
  const hasAlg = Boolean(h.alg)
  const hasIss = Boolean(c.iss)
  const hasIat = Boolean(c.iat)

  return {
    status: hasKid && hasAlg && hasIss && hasIat ? 'valid-structure' : 'incomplete',
    header,
    claims,
    notes,
  }
}

/* ─── Components ─────────────────────────────────────────── */

function StatusBadge({ status }: { status: InspectResult['status'] }) {
  const map = {
    'valid-structure': { label: 'Valid structure', bg: '#EDF5F0', fg: '#2D6A4F' },
    'incomplete': { label: 'Incomplete', bg: '#FEF3E2', fg: '#92400E' },
    'malformed': { label: 'Malformed', bg: '#FDECEC', fg: '#B91C1C' },
  }
  const s = map[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.75rem] font-semibold"
      style={{ background: s.bg, color: s.fg }}
    >
      {status === 'valid-structure' && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      )}
      {status === 'malformed' && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
      )}
      {s.label}
    </span>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid var(--border-default)', background: 'var(--surface-card, var(--surface-elevated))' }}
    >
      <div
        className="px-5 py-3"
        style={{ borderBottom: '1px solid var(--border-default)', background: 'var(--surface-subtle)' }}
      >
        <span
          className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em]"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function JsonBlock({ data }: { data: Record<string, unknown> }) {
  return (
    <pre
      className="text-[0.75rem] leading-relaxed font-mono overflow-x-auto whitespace-pre-wrap break-all"
      style={{ color: 'var(--text-secondary)' }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

/* ─── Page ───────────────────────────────────────────────── */

function InspectorContent() {
  const searchParams = useSearchParams()
  const tokenFromUrl = searchParams.get('token')

  const [token, setToken] = useState(tokenFromUrl || SAMPLE_VALID)
  const [result, setResult] = useState<InspectResult | null>(() => {
    if (tokenFromUrl) return inspectToken(tokenFromUrl)
    return inspectToken(SAMPLE_VALID)
  })
  const [dragOver, setDragOver] = useState(false)

  const doInspect = useCallback((raw: string) => {
    setToken(raw)
    if (!raw.trim()) {
      setResult(null)
      return
    }
    setResult(inspectToken(raw))
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const text = reader.result as string
      doInspect(text.trim())
    }
    reader.readAsText(file)
  }, [doInspect])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const text = reader.result as string
      doInspect(text.trim())
    }
    reader.readAsText(file)
  }, [doInspect])

  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-16)' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            {/* Header */}
            <div style={{ marginBottom: 'var(--space-3)' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '1.75rem',
                  padding: '0 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  border: '1px solid var(--border-default)',
                  background: 'var(--surface-card, var(--surface-elevated))',
                  color: 'var(--text-secondary)',
                }}
              >
                Inspector
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}>
              Inspect a signed record
            </h1>

            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '600px',
              marginBottom: 'var(--space-4)',
            }}>
              Paste a compact JWS token, drag a <code style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>.jws</code> or <code style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>.json</code> file, or load a sample. Decodes header and claims instantly in the browser.
            </p>

            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--text-tertiary)',
              lineHeight: 1.6,
              marginBottom: 'var(--space-10)',
            }}>
              Inspector is for quick token inspection. For full receipt and evidence bundle verification, use{' '}
              <Link href="/agent-auditor" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                Agent Auditor
              </Link>.
            </p>

            {/* Sample buttons */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <p style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-3)',
              }}>
                Load sample
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.5rem' }}>
                {[
                  { label: 'Valid (allow)', token: SAMPLE_VALID },
                  { label: 'Deny decision', token: SAMPLE_DENY },
                  { label: 'Malformed', token: SAMPLE_INVALID },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => doInspect(s.token)}
                    style={{
                      padding: '0.375rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      border: '1px solid var(--border-default)',
                      background: 'var(--surface-card, var(--surface-elevated))',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div
              style={{
                border: dragOver ? '2px dashed var(--text-secondary)' : '1px solid var(--border-default)',
                borderRadius: '0.75rem',
                background: 'var(--surface-card, var(--surface-elevated))',
                padding: '0.25rem',
                marginBottom: 'var(--space-4)',
              }}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <textarea
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Paste a compact JWS token (header.payload.signature) or drag a file here..."
                rows={5}
                style={{
                  width: '100%',
                  padding: 'var(--space-4)',
                  border: 'none',
                  background: 'transparent',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                  resize: 'vertical',
                  outline: 'none',
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', gap: '0.75rem', marginBottom: 'var(--space-10)' }}>
              <button
                type="button"
                onClick={() => doInspect(token)}
                disabled={!token.trim()}
                className="btn btn-primary"
                style={{
                  opacity: token.trim() ? 1 : 0.5,
                  cursor: token.trim() ? 'pointer' : 'not-allowed',
                }}
              >
                Inspect
              </button>
              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: '1px solid var(--border-default)',
                  background: 'var(--surface-card, var(--surface-elevated))',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Upload file
                <input
                  type="file"
                  accept=".jws,.json,.txt"
                  onChange={handleFileInput}
                  style={{ display: 'none' }}
                />
              </label>
              {token && (
                <button
                  type="button"
                  onClick={() => { setToken(''); setResult(null) }}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: 'var(--text-tertiary)',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results */}
            {result && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Panel title="Summary">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <StatusBadge status={result.status} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                      {result.status === 'valid-structure' && 'JWS structure is valid. Claims decoded successfully.'}
                      {result.status === 'incomplete' && 'Token decoded but missing required fields.'}
                      {result.status === 'malformed' && 'Token could not be decoded.'}
                    </span>
                  </div>
                </Panel>

                {result.header && (
                  <Panel title="JOSE Header">
                    <JsonBlock data={result.header} />
                  </Panel>
                )}

                {result.claims && (
                  <Panel title="Claims">
                    <JsonBlock data={result.claims} />
                  </Panel>
                )}

                <Panel title="Inspection Notes">
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {result.notes.map((note, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                        <span
                          style={{
                            marginTop: '0.5rem',
                            display: 'block',
                            width: '4px',
                            height: '4px',
                            borderRadius: '9999px',
                            background: 'var(--text-muted)',
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                          {note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            )}

            {/* Empty state */}
            {!result && (
              <div
                style={{
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                  padding: '4rem 1rem',
                  border: '1px dashed var(--border-default)',
                  background: 'var(--surface-base)',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                  Paste a token or load a sample to inspect
                </p>
              </div>
            )}

            {/* Footer links */}
            <div
              style={{
                marginTop: 'var(--space-10)',
                paddingTop: 'var(--space-8)',
                borderTop: '1px solid var(--border-default)',
                display: 'flex',
                flexWrap: 'wrap' as const,
                gap: '1rem',
                paddingBottom: 'var(--space-16)',
              }}
            >
              <Link
                href="/agent-auditor"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                }}
              >
                Open Agent Auditor
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h8m0 0L8 4.5M11 7L8 9.5" />
                </svg>
              </Link>
              <Link
                href="/developers"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-tertiary)' }}
              >
                Developer docs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function InspectorSkeleton() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-16)' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h1 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}>
              Inspect a signed record
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Paste a compact JWS token, drag a file, or load a sample.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<InspectorSkeleton />}>
      <InspectorContent />
    </Suspense>
  )
}
