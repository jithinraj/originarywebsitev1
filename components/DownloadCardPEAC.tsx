import { FACTS } from '@/lib/facts'

export default function DownloadCardPEAC() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <section className="dl-pkg" aria-labelledby="dl-pkg-h">
      <h3 id="dl-pkg-h" className="dl-pkg-h">
        PEAC Protocol packages by Originary
      </h3>
      <p className="dl-pkg-sub">
        PEAC is the open protocol behind Originary&apos;s signed interaction records. Install the official packages
        and repository, published and maintained by Originary.
      </p>

      <div className="dl-pkg-grid">
        <div className="dl-pkg-card">
          <p className="dl-pkg-t">Node.js CLI &amp; Core (npm)</p>
          <pre className="dl-pkg-pre" tabIndex={0}>
{`npm i -g @peac/cli@${v}
npm i @peac/protocol@${v} @peac/crypto@${v} @peac/schema@${v}
peac policy init
peac policy validate peac-policy.yaml`}
          </pre>
          <p className="dl-pkg-note">Requires Node 22.13+; see the docs.</p>
          <p className="dl-pkg-links">
            <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.peacprotocol.org/docs" target="_blank" rel="noreferrer">
              Docs
            </a>
          </p>
        </div>

        <div className="dl-pkg-card">
          <p className="dl-pkg-t">Wire Format</p>
          <p className="dl-pkg-body">
            Current stable: <code>interaction-record+jwt</code> (Wire 0.2)
          </p>
          <p className="dl-pkg-note">
            Legacy format <code>peac-receipt/0.1</code> (Wire 0.1) is frozen.
          </p>
        </div>
      </div>

      <p className="dl-pkg-note">Licensing: Apache-2.0. Use at your own discretion; see the repository for details.</p>
    </section>
  )
}
