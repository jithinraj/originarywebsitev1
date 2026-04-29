'use client'

import type { FormEvent } from 'react'

export function PilotForm({ destinationEmail }: { destinationEmail: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const company = String(formData.get('company') ?? '').trim()
    const workflow = String(formData.get('workflow') ?? '').trim()
    const verificationNeed = String(formData.get('verification_need') ?? '').trim()
    const deployment = String(formData.get('deployment') ?? '').trim()

    const subject = 'Pilot review request'
    const body = [
      'Pilot review request',
      '',
      `Work email: ${email}`,
      `Company: ${company}`,
      `Workflow type: ${workflow}`,
      `Hosted or self-hosted: ${deployment}`,
      '',
      'What needs to be verified?',
      verificationNeed,
    ].join('\n')

    window.location.href = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="hp-story-pilot-form" onSubmit={handleSubmit}>
      <div className="hp-story-label">Tell us the workflow that needs proof.</div>
      <label>
        <span>Work email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Company</span>
        <input name="company" type="text" autoComplete="organization" required />
      </label>
      <label>
        <span>Workflow type</span>
        <select name="workflow" defaultValue="API">
          <option>API</option>
          <option>MCP</option>
          <option>Commerce</option>
          <option>Runtime</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        <span>What needs to be verified?</span>
        <textarea name="verification_need" rows={4} required />
      </label>
      <label>
        <span>Hosted or self-hosted?</span>
        <select name="deployment" defaultValue="Not sure yet">
          <option>Hosted</option>
          <option>Self-hosted</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <button type="submit" className="hp-hero-verify-cta">
        Request pilot review
      </button>
      <p className="hp-story-form-note">
        Opens an email draft to <a href={`mailto:${destinationEmail}`}>{destinationEmail}</a>. Send it to share the details.
      </p>
    </form>
  )
}
