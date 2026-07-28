import type { Metadata } from 'next'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Why Private Agent Logs Fail Across Company Boundaries | Originary' },
  description:
    'Private logs answer your own questions well, but fail when another company must verify what happened. See the exact gap: a log line next to a signed record.',
  authors: [{ name: 'Jithin Raj' }],
  alternates: { canonical: '/blog/agent-audit-across-boundaries' },
  openGraph: {
    title: 'Why Private Agent Logs Fail Across Company Boundaries',
    description:
      'Private logs answer your own questions well. They fail when another company has to verify what happened. Here is the exact gap, with a log line and a signed record side by side.',
    type: 'article',
    url: '/blog/agent-audit-across-boundaries',
    authors: ['Jithin Raj'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Private Agent Logs Fail Across Company Boundaries',
    description:
      'Private logs answer your own questions well. They fail when another company has to verify what happened.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'noindex, nofollow',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Where private agent logs stop being enough across company boundaries',
  description:
    'Private logs answer your own questions well. They fail when another company has to verify what happened. Here is the exact gap, with a log line and a signed record side by side.',
  author: { '@type': 'Person', name: 'Jithin Raj', url: 'https://github.com/jithinraj' },
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/agent-audit-across-boundaries',
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

const codeBlock = {
  background: 'rgba(20, 17, 10, 0.04)',
  border: `1px solid ${PALETTE.hairline}`,
  padding: '14px 16px',
  fontSize: 13,
  lineHeight: 1.6,
  overflowX: 'auto' as const,
  color: PALETTE.ink,
  fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
}

const logRecordRows: Array<[string, string, string]> = [
  ['Audience', 'You and people who trust you', 'A party outside your trust boundary'],
  [
    'Third-party authenticity check',
    'Not by default',
    'Yes, under a key the reader accepts',
  ],
  ['Detects alteration after the fact', 'Not by default', 'Yes, the signature fails'],
  [
    'Usable without your cooperation',
    'No',
    'Only if the key and context were retained',
  ],
  ['Right for debugging your own system', 'Yes', 'No'],
]

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="protocol"
          title="Where private agent logs stop being enough across company boundaries"
          sub="Private logs answer your own questions well. They fail when another company has to verify what happened."
          author="Jithin Raj"
          readTime="5 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          status="draft"
        >
          <p>
            A partner marketplace&apos;s agent calls your refund API. Your gateway authorizes it,
            the refund goes out, and your service writes a log line. Three months later the
            partner disputes it: they say that refund was never authorized on their side, and
            they want to see evidence it came from you. You open your logs, and they are exactly
            what you built them to be, which is the problem. They are internal records that only
            you can read, that you could have edited, and that the partner has no way to check.
          </p>
          <p>
            This is a specific failure, worth naming precisely. Application logs are excellent at
            one job and structurally unsuited to another. Nothing here argues for fewer logs; it
            argues that a cross-company dispute asks a question logs were never built to answer.
          </p>

          <h2>What logs are for</h2>
          <p>
            Your logs answer questions you ask of your own system: what is slow, what errored,
            what state a request moved through. For that they should be rich, cheap, and freely
            editable, with retention and format under your control. Inside your own trust
            boundary, a log is the right tool.
          </p>
          <p>
            The limit is scope, not quality. A private log gives an outside reader no way to check
            that it is authentic or unaltered, and it usually cannot be shared without exposing
            more than you intend. That is fine when the reader already trusts you. It fails when
            the reader is a different company with a reason to doubt you. (Signed, append-only and
            transparency-log systems are a different design that does provide external checks;
            this is about the ordinary application log most systems emit.)
          </p>

          <h2>The same event, two ways</h2>
          <p>Here is the refund authorization as your service logs it internally:</p>
          <pre style={codeBlock}>
{`2026-07-14T09:22:04Z INFO refund.authorize order=42 partner=acme decision=allow policy=v7`}
          </pre>
          <p>
            Useful to you, uncheckable by anyone else. Here is the same authorization issued as a
            portable signed record, the kind a partner can verify. This is the shipped v0.16.3
            access-decision shape; the values are illustrative, and the whole object travels as a
            compact JWS:
          </p>
          <pre style={codeBlock}>
{`{
  "peac_version": "0.2",
  "kind": "evidence",
  "type": "org.peacprotocol/access-decision",
  "iss": "https://api.yourplatform.example",
  "iat": 1785405724,
  "jti": "019f9f55-87ee-70b1-9951-2307c9d893f8",
  "pillars": ["access"],
  "extensions": {
    "org.peacprotocol/access": {
      "resource": "https://api.yourplatform.example/refunds/42",
      "action": "refund.authorize",
      "decision": "allow"
    }
  }
}`}
          </pre>
          <p>
            The record names the issuer (<code>iss</code>), the action and its subject, and the
            decision, and it is signed. A partner verifies it under a public key they accept as
            yours, offline, and sees that these exact bytes were signed by your key and are
            unchanged. The log line carries none of that. That is the whole difference, and it is
            narrow: the record does not carry more truth than the log, it carries checkability the
            log cannot.
          </p>

          <h2>Log and record, compared</h2>
          <p>They are not competitors; they answer different questions.</p>
          <div
            className="home-card"
            role="region"
            aria-label="Private application log compared to a portable signed record"
            tabIndex={0}
            style={{
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.hairline}`,
              overflowX: 'auto',
              marginBottom: 18,
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: sans, fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${PALETTE.rule}` }}>
                  <th style={{ textAlign: 'left', padding: 14, color: PALETTE.muted, fontWeight: 500 }}>
                    Property
                  </th>
                  <th style={{ textAlign: 'left', padding: 14, color: PALETTE.ink, fontWeight: 500 }}>
                    Private application log
                  </th>
                  <th style={{ textAlign: 'left', padding: 14, color: PALETTE.ink, fontWeight: 500 }}>
                    Portable signed record
                  </th>
                </tr>
              </thead>
              <tbody>
                {logRecordRows.map(([property, log, record], idx) => (
                  <tr
                    key={property}
                    style={{
                      borderBottom:
                        idx < logRecordRows.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
                    }}
                  >
                    <td style={{ padding: 14, color: PALETTE.ink, fontWeight: 500 }}>{property}</td>
                    <td style={{ padding: 14, color: PALETTE.muted }}>{log}</td>
                    <td style={{ padding: 14, color: PALETTE.muted }}>{record}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What the record still leaves to judgment</h2>
          <p>
            A verified record establishes two things: these exact bytes were signed under a
            specific key, and they are unchanged. It does not establish that the issuer&apos;s
            account is true, that you should accept the key as the issuer&apos;s, that the record
            is fresh rather than replayed, or that any obligation was met. An issuer can sign
            something untrue and it verifies all the same. So a record&apos;s weight depends on
            who issued it, whether the reader accepts that issuer&apos;s key, and the context of
            the check. It removes one recurring unknown from a dispute, whether the artifact is
            authentic and unaltered, and leaves the rest to people. That is a real reduction, and
            it is all the record claims.
          </p>

          <h2>Offline, with conditions</h2>
          <p>
            The reader needs no network when they check, but they do need the public key and the
            validation context available first, and kept available. A record signed today verifies
            the same way years from now only if the key can still be retrieved, the algorithm is
            still supported, and the relevant time and revocation context can be established.
            Retain those deliberately, before the relationship or the systems disappear.
            Durability is upkeep, not a property that maintains itself.
          </p>

          <h2>If you will be the one asked to show what happened</h2>
          <ul>
            <li>
              Decide which events are externally consequential enough to record; do not record
              everything.
            </li>
            <li>Issue records at those points, carrying digests rather than raw sensitive content.</li>
            <li>Publish your issuer key at a stable discovery location and rotate it with overlap.</li>
            <li>Retain the keys and context needed to verify old records after relationships end.</li>
            <li>
              When a dispute arrives, hand over the records and let the counterparty check them
              independently.
            </li>
          </ul>
          <p>
            Preparing bounded, independently checkable evidence for exactly this kind of
            cross-company agent and API action is the problem Originary works on. If you are
            facing a specific cross-boundary review or dispute, that is the conversation to have
            with us; it starts from your actual workflow, not a platform pitch.
          </p>

          <h2>References</h2>
          <ul>
            <li>
              <a
                href="https://github.com/peacprotocol/peac/blob/v0.16.3/docs/specs/EVIDENCE-CARRIER-CONTRACT.md"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                PEAC evidence carrier contract, v0.16.3
              </a>
              : how a record is carried across systems.
            </li>
            <li>
              <a
                href="https://peacprotocol.org/scope"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                PEAC scope statement
              </a>
              : what PEAC standardizes and what it leaves elsewhere.
            </li>
            <li>
              <a
                href="https://github.com/peacprotocol/peac/tree/v0.16.3"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                PEAC repository at v0.16.3
              </a>
              : the record types and verification code.
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            {
              label: 'Building a portable evidence bundle for dispute review',
              href: '/blog/evidence-bundle-for-disputes',
            },
            { label: 'What is HTTP 402? A neutral explainer', href: '/blog/what-is-http-402' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}
