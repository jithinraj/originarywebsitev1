'use client'

import type { FormEvent } from 'react'
import { PALETTE } from './palette'
import { SANS, MONO } from './typography'

export function DemoRequestForm({
  destinationEmail = 'contact@originary.xyz',
}: {
  destinationEmail?: string
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const company = String(formData.get('company') ?? '').trim()
    const workflow = String(formData.get('workflow') ?? '').trim()
    const verificationNeed = String(formData.get('verification_need') ?? '').trim()
    const deployment = String(formData.get('deployment') ?? '').trim()

    const subject = 'Originary demo request'
    const body = [
      'Originary demo request',
      '',
      `Work email: ${email}`,
      `Company: ${company}`,
      `Workflow type: ${workflow}`,
      `Hosted or self-hosted: ${deployment}`,
      '',
      'What needs to be verified?',
      verificationNeed,
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
        Tell us the workflow that needs proof.
      </div>

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

      <Field label="Company" htmlFor="demo-company">
        <input
          id="demo-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          className="home-demo-input"
        />
      </Field>

      <Field label="Workflow type" htmlFor="demo-workflow">
        <select
          id="demo-workflow"
          name="workflow"
          defaultValue="API"
          className="home-demo-input home-demo-select"
        >
          <option>API</option>
          <option>MCP</option>
          <option>Commerce</option>
          <option>Runtime</option>
          <option>Not sure. Help us find the proof gap.</option>
          <option>Other</option>
        </select>
      </Field>

      <Field label="What needs to be verified?" htmlFor="demo-need">
        <textarea
          id="demo-need"
          name="verification_need"
          rows={4}
          required
          className="home-demo-input home-demo-textarea"
        />
      </Field>

      <Field label="Hosted or self-hosted?" htmlFor="demo-deploy">
        <select
          id="demo-deploy"
          name="deployment"
          defaultValue="Not sure yet"
          className="home-demo-input home-demo-select"
        >
          <option>Hosted</option>
          <option>Self-hosted</option>
          <option>Not sure yet</option>
        </select>
      </Field>

      <button
        type="submit"
        className="home-demo-submit"
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
          cursor: 'pointer',
          transition: 'opacity 160ms ease',
        }}
      >
        Request a demo
      </button>

      <p
        style={{
          marginTop: 14,
          fontFamily: SANS,
          fontSize: 12,
          lineHeight: 1.6,
          color: PALETTE.muted,
        }}
      >
        Opens an email draft to{' '}
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
        </a>{' '}
        with the workflow details.
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
