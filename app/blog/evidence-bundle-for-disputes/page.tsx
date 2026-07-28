import type { Metadata } from 'next'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Building a Portable Evidence Bundle for Dispute Review | Originary' },
  description:
    'A PEAC evidence bundle packages signed records, keys, and policy so a counterparty can check them independently. What is inside, and the two ways it fails.',
  authors: [{ name: 'Jithin Raj' }],
  alternates: { canonical: '/blog/evidence-bundle-for-disputes' },
  openGraph: {
    title: 'Building a Portable Evidence Bundle for Dispute Review',
    description:
      'A PEAC evidence bundle packages signed records, keys, and policy so a counterparty can check them independently. Here is what is inside one, what its signature covers, and the two ways it fails.',
    type: 'article',
    url: '/blog/evidence-bundle-for-disputes',
    authors: ['Jithin Raj'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building a Portable Evidence Bundle for Dispute Review',
    description:
      'A PEAC evidence bundle packages signed records, keys, and policy so a counterparty can check them independently.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'noindex, nofollow',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Building a portable evidence bundle for dispute review',
  description:
    'A PEAC evidence bundle packages signed records, keys, and policy so a counterparty can check them independently. Here is what is inside one, what its signature covers, and the two ways it fails.',
  author: { '@type': 'Person', name: 'Jithin Raj', url: 'https://github.com/jithinraj' },
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/evidence-bundle-for-disputes',
}

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

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="protocol"
          title="Building a portable evidence bundle for dispute review"
          sub="A PEAC evidence bundle packages signed records, keys, and policy so a counterparty can check them independently."
          author="Jithin Raj"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          status="draft"
        >
          <p>
            A dispute between two companies usually stalls on the same thing: each side has
            evidence the other cannot see, so the argument becomes about whose private records to
            believe. A portable evidence bundle addresses that. It does not settle the dispute or
            deliver certainty about who was right. It lets a counterparty check your evidence
            themselves, which removes one recurring source of deadlock: the unverifiable
            disagreement about what the records say.
          </p>
          <p>
            The claim is deliberately small. A bundle reduces evidence-collection and
            reconciliation work. It does not adjudicate, establish objective truth, or guarantee
            the evidence is complete. The last section is explicit about those limits.
          </p>

          <h2>What is inside a bundle</h2>
          <p>
            A PEAC evidence bundle is produced by <code>createDisputeBundle</code> in{' '}
            <code>@peac/audit</code>. It is a ZIP with a fixed, allowlisted set of entries. A
            bundle written to disk contains exactly these:
          </p>
          <pre style={codeBlock}>
{`manifest.json       describes the bundle; lists every file with its sha256 and size
bundle.sig          a compact JWS; its payload is the manifest content_hash (below)
receipts.ndjson     the signed records, one JWS per line, in deterministic order
keys/keys.json      the public keys enclosed so the bundle checks without a fetch
policy/policy.yaml  the policy the issuer reported as applicable
policy/peac.txt      the discovery policy snapshot`}
          </pre>
          <p>
            The path set is enforced and the extractor is hardened against path traversal, so a
            bundle is a bounded, inspectable object rather than an arbitrary archive.
          </p>
          <p>
            The binding that holds it together is a hash chain in <code>manifest.json</code>.
            Every enclosed file has a <code>sha256:&lt;hex&gt;</code> entry, and the manifest&apos;s
            own <code>content_hash</code> is the SHA-256 of the canonical (RFC 8785 JCS) manifest
            with the <code>content_hash</code> field removed. On read, <code>readDisputeBundle</code>{' '}
            recomputes the manifest hash and every file hash and fails closed on any mismatch. That
            check runs on every read, not as an opt-in step.
          </p>

          <h2>What <code>bundle.sig</code> actually signs</h2>
          <p>
            This is the detail people get wrong, so it is worth being exact. <code>bundle.sig</code>{' '}
            is a compact JWS whose payload is a single field:
          </p>
          <pre style={codeBlock}>
{`header:  { "typ": "peac-receipt/0.1", "alg": "EdDSA", "kid": "evidence-key-2026" }
payload: { "content_hash": "sha256:6de0...ebc7" }`}
          </pre>
          <p>
            <code>bundle.sig</code> carries the legacy <code>peac-receipt/0.1</code> JWS envelope,
            which PEAC keeps frozen for compatibility; PEAC&apos;s current interaction-record
            format is <code>interaction-record+jwt</code>.
          </p>
          <p>
            It signs the manifest&apos;s <code>content_hash</code>, and nothing else directly.
            Because the content_hash covers the manifest, and the manifest records every
            file&apos;s hash, the signature transitively commits to the whole enclosed set. But it
            is a signature over one digest, produced by whoever holds the key named in{' '}
            <code>kid</code>. It does not vouch for the individual record issuers inside{' '}
            <code>receipts.ndjson</code>; each of those carries its own separate signature.
          </p>

          <h2>Verify one, and watch it fail two different ways</h2>
          <p>
            The runnable reference is <code>examples/commerce-evidence-bundle</code> in the
            repository, which builds and checks a bundle with the library API. A clean check
            reports:
          </p>
          <pre style={codeBlock}>
{`Bundle Signature
----------------
  Status: VALID
  Key ID: evidence-key-2026

Summary
-------
Total receipts: 2
Valid: 2
Invalid: 0

Recommendation: VALID`}
          </pre>
          <p>
            Now break it. There are two distinct failure modes, and telling them apart is most of
            the value.
          </p>
          <p>
            <strong>Someone edits a file after the bundle leaves you.</strong> Flip a byte inside{' '}
            <code>receipts.ndjson</code> in the ZIP. The recorded hash in <code>manifest.json</code>{' '}
            no longer matches, so the read fails immediately, before any signature or receipt
            logic runs:
          </p>
          <pre style={codeBlock}>
{`code:    E_BUNDLE_HASH_MISMATCH
message: File hash mismatch: receipts.ndjson`}
          </pre>
          <p>
            <strong>A single record&apos;s contents were tampered with before packaging.</strong>{' '}
            Here the bundle is re-hashed and re-signed around the altered record, so the
            bundle-level integrity check and <code>bundle.sig</code> both stay VALID. What fails
            is that one record&apos;s own Ed25519 signature, which no longer matches its modified
            payload:
          </p>
          <pre style={codeBlock}>
{`Bundle Signature: VALID
Summary: Total 2, Valid 1, Invalid 1
Recommendation: NEEDS_REVIEW
Issues:
  - E_RECEIPT_SIGNATURE_INVALID`}
          </pre>
          <p>
            The first says the archive was altered in transit. The second says the archive is
            intact but one enclosed record does not hold up. A reviewer needs to know which they
            are looking at.
          </p>

          <h2>The check that the bundle does not perform</h2>
          <p>
            Build a bundle entirely with a key you control, and enclose that same public key in
            the bundle&apos;s own <code>keys/keys.json</code>. Verification reports:
          </p>
          <pre style={codeBlock}>
{`Bundle Signature: VALID
Summary: Total 1, Valid 1, Invalid 0
Recommendation: VALID`}
          </pre>
          <p>
            It says VALID because everything inside the bundle is internally consistent: the key
            that traveled with the bundle signed the content that traveled with the bundle.{' '}
            <code>verifyBundle</code> takes no expected-issuer or trusted-key parameter; it never
            asks whether that key belongs to anyone in particular. So a bundle verifying as VALID
            means its contents are internally consistent and unaltered, not that the enclosing
            signer or the record issuers are who you expect. Establishing that is a separate step
            your process owns: match the enclosed keys against keys you already trust (a pinned
            key, a key from the issuer&apos;s well-known location you accept), out of band. The
            bundle removes the need to call the issuer&apos;s servers at check time; it does not
            remove the need for a trust path to the issuer&apos;s key.
          </p>
          <p>Four things stay separate, and a review has to keep them separate:</p>
          <ul>
            <li>
              <strong>Integrity</strong>: the files match their recorded hashes. Checked on every
              read.
            </li>
            <li>
              <strong>Internal signatures</strong>: each record verifies under the key enclosed in
              the bundle.
            </li>
            <li>
              <strong>Issuer trust</strong>: whether that enclosed key is an issuer you accept. Not
              checked by the bundle.
            </li>
            <li>
              <strong>Completeness and custody</strong>: whether the record set is complete, and
              what happened to the bundle after it left the issuer. Not checked by the bundle.
              Absence of a record is not evidence an event did not happen.
            </li>
          </ul>

          <h2>Why this shortens a dispute</h2>
          <p>
            Because the bundle is portable, both parties can hold the same object; because its
            records are signed, once issuer-key trust is established each side can check the
            signatures and byte integrity without calling the other&apos;s systems. When both
            sides have bundles, the work becomes comparison: records one side has and the other
            does not, and fields that do not line up. Instead of trading assertions, you get a
            list of discrepancies to work through, which isolates the genuine question. It is a
            workflow improvement measured in fewer manual steps; how much calendar time it saves
            depends on the dispute.
          </p>

          <h2>When to assemble one</h2>
          <p>
            Assemble a bundle when an outcome will be examined by a counterparty outside your
            trust boundary and you want them to check the underlying records rather than take your
            summary. It helps most where trust is thin: a contested denial, an audit that asks you
            to show your evidence, a partner who disputes what happened after the relationship has
            cooled. If the only reviewers already trust your systems, a bundle is overhead they do
            not need.
          </p>

          <h2>References</h2>
          <ul>
            <li>
              <a
                href="https://github.com/peacprotocol/peac/blob/v0.16.3/packages/audit/src/dispute-bundle.ts"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                createDisputeBundle and the hash binding, v0.16.3
              </a>
              : the ZIP entries, the manifest content_hash, and the fail-closed read.
            </li>
            <li>
              <a
                href="https://github.com/peacprotocol/peac/blob/v0.16.3/packages/audit/src/verification-report.ts"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                verifyBundle and the verification report, v0.16.3
              </a>
              : the report shape and the receipt-signature check.
            </li>
            <li>
              <a
                href="https://github.com/peacprotocol/peac/tree/v0.16.3/examples/commerce-evidence-bundle"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                commerce evidence bundle example, v0.16.3
              </a>
              : a runnable build-and-verify recipe using the library API.
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'What is HTTP 402? A neutral explainer', href: '/blog/what-is-http-402' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}
