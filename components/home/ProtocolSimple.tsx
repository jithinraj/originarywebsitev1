import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionHead } from './atoms/SectionHead'
import { btnGhostStyle } from './ctaStyles'
import { FACTS } from '@/lib/facts'
import { TypedLines } from './motion/TypedLines'

/**
 * The open protocol behind the records, shown as the thing a developer would
 * actually run (the version-pinned offline CLI check from /verify), then the
 * public numbers from lib/facts.ts, which check:truth keeps current.
 */
const STANDARDS = ['Ed25519', 'JCS', 'Compact JWS', 'HTTP Message Signatures']

const fmt = (n: number) => n.toLocaleString('en-US')

export function ProtocolSimple() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  const stats = [
    { value: fmt(FACTS.conformanceRequirements), label: 'Conformance requirements' },
    { value: fmt(FACTS.publishedPackageCount), label: 'Packages on npm' },
    { value: fmt(FACTS.testsCount), label: 'Tests in the open repo' },
  ]
  return (
    <section
      className="hx-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <SectionHead
        eyebrow="Open protocol"
        title="Open protocol."
        qualifier="No Originary required."
        stack
        body={`PEAC is the ${FACTS.license} protocol behind every record. Issue records yourself, keep your own keys, and verify anywhere, offline.`}
        center
      />

      <figure className="protos-term">
        <figcaption className="protos-term-head">
          <span>Verify offline</span>
          <span>PEAC {FACTS.currentVersion}</span>
        </figcaption>
        <TypedLines
          className="protos-term-body"
          lines={[
            { text: `pnpm dlx @peac/cli@${v} samples generate -o ./s`, prompt: true },
            { text: `pnpm dlx @peac/cli@${v} verify ./s/valid/basic-record.jws \\`, prompt: true },
            { text: '    --public-key ./s/bundles/sandbox-jwks.json' },
          ]}
          after={
            <p className="protos-term-ok">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <circle cx="10" cy="10" r="8.25" />
                <path d="m6.4 10.2 2.4 2.4 4.8-5.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Signature valid (offline).
            </p>
          }
        />
        <p className="protos-term-note">
          Runs on your machine. Nothing is uploaded to Originary.
          <span className="protos-std">{STANDARDS.join(' · ')}</span>
        </p>
      </figure>

      <dl className="protos-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="protos-ctas">
        <Link href="/peac" className="hs-btn home-arrow-link" style={btnGhostStyle}>
          Explore PEAC Protocol
          <Arrow />
        </Link>
        <a href={FACTS.repoUrl} className="hx-textlink" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M1.5 6h9M7 2.5 10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}
