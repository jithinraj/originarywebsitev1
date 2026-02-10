'use client'

import { useState, type FormEvent, type CSSProperties } from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const subject = encodeURIComponent('PEAC Integration Support')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nUse case:\n${useCase}`)

    window.location.href = `mailto:contact@originary.xyz?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: 'var(--space-3) var(--space-4)',
    fontSize: 'var(--text-base)',
    color: 'var(--text-primary)',
    background: 'var(--surface-elevated)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-lg)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle: CSSProperties = {
    display: 'block',
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    marginBottom: 'var(--space-2)',
  }

  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: 'var(--space-4)', lineHeight: 1.2 }}>
                Integration Support
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Need help integrating PEAC into your stack?
              </p>
            </div>

            {submitted ? (
              <div className="card" style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Your email client should have opened with the details pre-filled. If it did not, reach us at{' '}
                  <a href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>
                    contact@originary.xyz
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <label htmlFor="name" style={labelStyle}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-brand)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-default)')}
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <label htmlFor="email" style={labelStyle}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-brand)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-default)')}
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-8)' }}>
                  <label htmlFor="useCase" style={labelStyle}>
                    Tell us about your use case
                  </label>
                  <textarea
                    id="useCase"
                    required
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    placeholder="What are you building? What does your stack look like?"
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-brand)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-default)')}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  Send
                </button>
              </form>
            )}

            <div
              style={{
                marginTop: 'var(--space-12)',
                padding: 'var(--space-6)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.7, margin: 0 }}>
                PEAC is Apache-2.0 and self-hostable. The protocol ships with Express middleware, a conformance runner, and 20 npm
                packages. Most integrations start with{' '}
                <code
                  style={{
                    fontSize: 'var(--text-sm)',
                    background: 'var(--surface-elevated)',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  @peac/middleware-express
                </code>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
