'use client'

import { useState, type FormEvent } from 'react'
import { PALETTE } from './palette'
import { SANS, MONO } from './typography'

const ACTOR_OPTIONS = ['Agent', 'MCP server', 'API', 'Gateway', 'Automated workflow', 'Other']

const REVIEWER_OPTIONS = [
  'My team',
  'Customer',
  'Partner',
  'Security',
  'Auditor / compliance',
  'Another system',
  'Other',
]

type SubmitState = 'idle' | 'sending' | 'sent' | 'error'

export function DemoRequestForm({
  destinationEmail = 'contact@originary.xyz',
}: {
  destinationEmail?: string
}) {
  const [state, setState] = useState<SubmitState>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const fields = {
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      workflow: String(formData.get('workflow') ?? '').trim(),
      reviewer: String(formData.get('reviewer') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      current_tool: String(formData.get('current_tool') ?? '').trim(),
      website: String(formData.get('website') ?? ''),
    }

    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setState('sent')
        form.reset()
        return
      }
      const data = await res.json().catch(() => ({}))
      // Delivery not configured or the webhook failed: fall back to an email draft.
      if (data?.error === 'unconfigured' || data?.error === 'delivery_failed') {
        openMailFallback(fields)
        setState('sent')
        return
      }
      setState('error')
    } catch {
      openMailFallback(fields)
      setState('sent')
    }
  }

  function openMailFallback(fields: Record<string, string>) {
    const subject = `Originary: ${fields.workflow || 'Workflow'}`
    const body = [
      `Work email: ${fields.email}`,
      `Company / project: ${fields.company}`,
      `What takes the action?: ${fields.workflow}`,
      `Who needs to review it?: ${fields.reviewer}`,
      `What do you use today?: ${fields.current_tool}`,
      '',
      'What action matters?',
      fields.message,
    ].join('\n')
    window.location.href = `mailto:${destinationEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="home-demo-form" onSubmit={handleSubmit}>
      <div
        className="home-demo-form-eyebrow"
        style={{
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: PALETTE.muted,
          marginBottom: 20,
          fontWeight: 500,
        }}
      >
        Tell us the workflow that needs verification.
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        style={{ position: 'absolute', left: -9999, width: 1, height: 1 }}
      />

      <Field label="Work email" htmlFor="demo-email">
        <input
          id="demo-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="home-demo-input"
        />
      </Field>

      <Field label="Company / project" htmlFor="demo-company">
        <input
          id="demo-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="home-demo-input"
        />
      </Field>

      <Field label="What takes the action?" htmlFor="demo-workflow">
        <select
          id="demo-workflow"
          name="workflow"
          defaultValue={ACTOR_OPTIONS[0]}
          className="home-demo-input home-demo-select"
        >
          {ACTOR_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>

      <Field label="What action matters?" htmlFor="demo-need">
        <textarea
          id="demo-need"
          name="message"
          rows={4}
          required
          className="home-demo-input home-demo-textarea"
        />
      </Field>

      <Field label="Who needs to review it?" htmlFor="demo-reviewer">
        <select
          id="demo-reviewer"
          name="reviewer"
          defaultValue={REVIEWER_OPTIONS[0]}
          className="home-demo-input home-demo-select"
        >
          {REVIEWER_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>

      <Field label="What do you use today?" htmlFor="demo-current-tool">
        <input
          id="demo-current-tool"
          name="current_tool"
          type="text"
          className="home-demo-input"
        />
      </Field>

      <button
        type="submit"
        className="home-demo-submit"
        disabled={state === 'sending'}
        style={{
          marginTop: 8,
          width: '100%',
          minHeight: 48,
          padding: '14px 18px',
          fontFamily: SANS,
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: '-0.005em',
          color: PALETTE.paper,
          background: PALETTE.ink,
          border: `1px solid ${PALETTE.ink}`,
          cursor: state === 'sending' ? 'wait' : 'pointer',
          opacity: state === 'sending' ? 0.7 : 1,
          transition: 'opacity 160ms ease',
        }}
      >
        {state === 'sending' ? 'Sending...' : 'Send workflow'}
      </button>

      <p role="status" aria-live="polite" style={{ margin: '10px 0 0', fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: state === 'error' ? '#9a3b2e' : PALETTE.success }}>
        {state === 'sent'
          ? 'Received. We reply within two business days.'
          : state === 'error'
            ? 'Something went wrong. Email us directly instead.'
            : ''}
      </p>

      <p
        style={{
          marginTop: 14,
          fontFamily: SANS,
          fontSize: 12,
          lineHeight: 1.6,
          color: PALETTE.muted,
        }}
      >
        Sent to the team and routed by topic; falls back to an email draft to{' '}
        <a
          href={`mailto:${destinationEmail}`}
          style={{
            color: PALETTE.ink,
            textDecoration: 'underline',
            textDecorationColor: 'rgba(20, 17, 10, 0.30)',
            textUnderlineOffset: 3,
          }}
        >
          {destinationEmail}
        </a>
        {' '}if submission is unavailable. Business contact details only; never paste records, JWS strings,
        or keys. We use what you send only to route your message and reply, and retain it no longer than
        needed for that. See our{' '}
        <a
          href="/privacy"
          style={{
            color: PALETTE.ink,
            textDecoration: 'underline',
            textDecorationColor: 'rgba(20, 17, 10, 0.30)',
            textUnderlineOffset: 3,
          }}
        >
          privacy policy
        </a>
        .
      </p>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        marginBottom: 16,
      }}
    >
      <span
        style={{
          display: 'block',
          fontFamily: SANS,
          fontSize: 12,
          fontWeight: 500,
          color: PALETTE.muted,
          marginBottom: 6,
          letterSpacing: '-0.005em',
        }}
      >
        {label}
      </span>
      {children}
    </label>
  )
}
