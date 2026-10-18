'use client'

import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { PALETTE } from '@/components/home/palette'
import { SANS, MONO } from '@/components/home/typography'

const DESTINATION = 'contact@originary.xyz'

const TIMING_OPTIONS = [
  'Decision needed within two weeks',
  'Within a month',
  'Exploring for a future case',
]

/**
 * Scoped review request. Collects business contact details and a short,
 * non-sensitive description only, then opens a prefilled email draft. Nothing
 * is transmitted from this page and there is deliberately no upload field.
 */
export function ScopedReviewForm() {
  const [problems, setProblems] = useState<string[]>([])
  const errorRef = useRef<HTMLDivElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const v = (key: string) => String(data.get(key) ?? '').trim()

    const found: string[] = []
    if (!v('name')) found.push('Enter your name.')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('email'))) found.push('Enter a work email address.')
    if (!v('organization')) found.push('Enter your organization.')
    if (v('description').length < 20) found.push('Describe what is disputed in a sentence or two.')

    setProblems(found)
    if (found.length) {
      requestAnimationFrame(() => errorRef.current?.focus())
      return
    }

    const body = [
      `Name: ${v('name')}`,
      `Email: ${v('email')}`,
      `Organization: ${v('organization')}`,
      `Role: ${v('role') || 'not stated'}`,
      `Who needs to decide: ${v('recipient') || 'not stated'}`,
      `Timing: ${v('timing') || 'not stated'}`,
      '',
      'What is disputed:',
      v('description'),
      '',
      '(Sent from originary.xyz/investigate. Please do not attach logs or credentials.)',
    ].join('\n')
    window.location.href = `mailto:${DESTINATION}?subject=${encodeURIComponent(
      `Scoped review request: ${v('organization')}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="home-demo-form" onSubmit={handleSubmit} noValidate>
      <div
        ref={errorRef}
        role="alert"
        tabIndex={-1}
        style={{
          fontFamily: SANS,
          fontSize: 13.5,
          lineHeight: 1.5,
          color: 'var(--danger)',
          fontWeight: 500,
          margin: problems.length ? '0 0 16px' : 0,
          outline: 'none',
        }}
      >
        {problems.length ? `Nothing was prepared. ${problems.join(' ')}` : ''}
      </div>

      <div className="inv-form-grid">
        <Field label="Name" htmlFor="inv-name">
          <input id="inv-name" name="name" autoComplete="name" required className="home-demo-input" />
        </Field>
        <Field label="Work email" htmlFor="inv-email">
          <input
            id="inv-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="home-demo-input"
          />
        </Field>
        <Field label="Organization" htmlFor="inv-org">
          <input
            id="inv-org"
            name="organization"
            autoComplete="organization"
            required
            className="home-demo-input"
          />
        </Field>
        <Field label="Your role" htmlFor="inv-role">
          <input
            id="inv-role"
            name="role"
            placeholder="for example security engineer"
            className="home-demo-input"
          />
        </Field>
      </div>

      <Field
        label="What is disputed?"
        htmlFor="inv-desc"
        help="Two or three sentences, without sensitive details. Up to 800 characters."
      >
        <textarea
          id="inv-desc"
          name="description"
          rows={4}
          maxLength={800}
          required
          aria-describedby="inv-desc-help"
          className="home-demo-input home-demo-textarea"
        />
      </Field>

      <div className="inv-form-grid">
        <Field label="Who needs to decide?" htmlFor="inv-recipient">
          <input
            id="inv-recipient"
            name="recipient"
            placeholder="for example customer security reviewer"
            className="home-demo-input"
          />
        </Field>
        <Field label="Timing" htmlFor="inv-timing">
          <select
            id="inv-timing"
            name="timing"
            defaultValue=""
            className="home-demo-input home-demo-select"
          >
            <option value="">Choose</option>
            {TIMING_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>

      <button
        type="submit"
        className="home-demo-submit"
        style={{
          marginTop: 8,
          minHeight: 48,
          padding: '14px 22px',
          fontFamily: SANS,
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: '-0.005em',
          color: PALETTE.onAction,
          background: PALETTE.action,
          border: `1px solid ${PALETTE.action}`,
          cursor: 'pointer',
        }}
      >
        Prepare email
      </button>

      <p
        style={{
          marginTop: 14,
          fontFamily: SANS,
          fontSize: 12.5,
          lineHeight: 1.6,
          color: PALETTE.muted,
          maxWidth: '62ch',
        }}
      >
        This opens an email to{' '}
        <a
          href={`mailto:${DESTINATION}`}
          style={{
            color: PALETTE.ink,
            textDecoration: 'underline',
            textDecorationColor: 'var(--rule)',
            textUnderlineOffset: 3,
          }}
        >
          {DESTINATION}
        </a>{' '}
        in your mail app, with your answers filled in. Nothing is sent from this page.
      </p>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  help,
  children,
}: {
  label: string
  htmlFor: string
  help?: string
  children: ReactNode
}) {
  return (
    <div style={{ marginBottom: 16, minWidth: 0 }}>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'block',
          fontFamily: MONO,
          fontSize: 12,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: PALETTE.muted,
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {children}
      {help ? (
        <div
          id={`${htmlFor}-help`}
          style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.5, color: PALETTE.faint, marginTop: 6 }}
        >
          {help}
        </div>
      ) : null}
    </div>
  )
}
