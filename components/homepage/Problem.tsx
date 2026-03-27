import { AnimateIn } from './AnimateIn'

export function Problem() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <div className="max-w-[48rem] mx-auto text-center">
          <AnimateIn>
            <span
              className="hp-text-overline"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              The real question
            </span>
            <h2
              className="hp-text-display mt-5 mx-auto max-w-[40rem]"
              style={{ color: 'var(--color-fg)' }}
            >
              Who called. What happened. Where&apos;s the proof?
            </h2>
            <p
              className="mt-5 text-[1.0625rem] leading-relaxed max-w-[36rem] mx-auto"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              An agent running on Company A&apos;s infrastructure calls Company B&apos;s inventory API. Company B&apos;s gateway returns a signed record proving the request was authorized under the published terms. Three weeks later, when a billing dispute arises, Company B exports that record. Company A&apos;s auditor verifies it offline using the issuer&apos;s public key. No dashboard access needed. No phone call. No screenshot.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
