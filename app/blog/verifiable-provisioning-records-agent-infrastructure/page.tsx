import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, Reveal, Stagger, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Verifiable Provisioning Records for Agent Infrastructure | Originary' },
  description:
    'PEAC adds signed, portable records to agent-driven provisioning workflows, so teams can verify what changed without owning the runtime or storing credentials.',
  keywords:
    'verifiable provisioning records, agent-driven provisioning, provisioning audit trail, Stripe Projects provisioning records, signed interaction records, PEAC Protocol',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'When agents provision infrastructure, records need to travel',
    description:
      'A PEAC example and integration kit for turning provisioning workflows into signed, offline-verifiable records.',
    url: '/blog/verifiable-provisioning-records-agent-infrastructure',
    publishedTime: '2026-05-18',
    authors: ['Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When agents provision infrastructure, records need to travel',
    description:
      'A PEAC example and integration kit for signed, offline-verifiable provisioning records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/blog/verifiable-provisioning-records-agent-infrastructure' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Verifiable Provisioning Records for Agent-Driven Infrastructure',
  description:
    'PEAC adds signed, portable records to agent-driven provisioning workflows, so teams can verify what changed without owning the runtime or storing credentials.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage:
    'https://www.originary.xyz/blog/verifiable-provisioning-records-agent-infrastructure',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

const callout = {
  marginTop: 8,
  marginBottom: 14,
  padding: '14px 18px',
  background: 'rgba(20, 17, 10, 0.03)',
  borderLeft: `2px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 14,
  lineHeight: 1.65,
  color: PALETTE.muted,
}

const pullQuote = {
  marginTop: 14,
  marginBottom: 14,
  padding: '18px 22px',
  background: PALETTE.bg,
  border: `1px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 17,
  fontWeight: 500,
  lineHeight: 1.5,
  color: PALETTE.ink,
}

const providerGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: 12,
  marginTop: 14,
  marginBottom: 18,
  listStyle: 'none',
  padding: 0,
}

const providerCard = {
  padding: '14px 16px',
  background: PALETTE.bg,
  border: `1px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 14,
  lineHeight: 1.55,
  color: PALETTE.ink,
}

const providerName = {
  fontWeight: 600,
  fontSize: 15,
  marginBottom: 2,
  color: PALETTE.ink,
}

const providerMeta = {
  fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace',
  fontSize: 12,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
  color: PALETTE.muted,
  marginBottom: 8,
}

const providerLabel = {
  fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace',
  fontSize: 11,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
  color: PALETTE.muted,
  marginTop: 6,
}

const PROVIDERS: Array<{ name: string; category: string; event: string; record: string }> = [
  {
    name: 'AgentMail',
    category: 'Agent messaging',
    event: 'create inbox, route, or API key for an agent mail surface',
    record: 'signed record of which agent provisioned which mail surface and key',
  },
  {
    name: 'Algolia',
    category: 'Search',
    event: 'create application, index, or API key',
    record: 'signed record of search-index provisioning by an agent',
  },
  {
    name: 'Amplitude',
    category: 'Product analytics',
    event: 'create project, API key, or event source',
    record: 'signed record of analytics workspace setup tied to an agent session',
  },
  {
    name: 'Auth0 / Okta',
    category: 'Identity',
    event: 'create tenant, application, or admin grant',
    record: 'signed record of identity-provider configuration by an agent or operator',
  },
  {
    name: 'Browserbase',
    category: 'Browser automation',
    event: 'create project, session pool, or API key',
    record: 'signed record of browser-runtime provisioning tied to an agent workflow',
  },
  {
    name: 'Chroma',
    category: 'Vector database',
    event: 'create database, collection, or token',
    record: 'signed record of vector-store provisioning tied to an agent session',
  },
  {
    name: 'Clerk',
    category: 'Identity',
    event: 'create application, configure social connection, issue API keys',
    record: 'signed record of auth setup, including which agent configured which app',
  },
  {
    name: 'Cloudflare',
    category: 'Edge and DNS',
    event: 'create Worker, KV namespace, R2 bucket, or DNS record',
    record: 'signed record of edge resource provisioning, including which tool ran the change',
  },
  {
    name: 'Daytona',
    category: 'Dev environments',
    event: 'create workspace, runtime, or access token',
    record: 'signed record of remote dev-environment provisioning by an agent',
  },
  {
    name: 'ElevenLabs',
    category: 'Voice and audio',
    event: 'create project, voice, or API key',
    record: 'signed record of voice-platform setup events',
  },
  {
    name: 'Firecrawl',
    category: 'Web data',
    event: 'create project, crawler job, or API key',
    record: 'signed record of crawl-platform provisioning by an agent or operator',
  },
  {
    name: 'Fly.io',
    category: 'Hosting',
    event: 'create app, allocate machine, set secret',
    record: 'signed record of app + region provisioning by an agent session',
  },
  {
    name: 'GitLab',
    category: 'Source and CI',
    event: 'create project, runner, or deploy token',
    record: 'signed record of which agent provisioned which CI surface',
  },
  {
    name: 'Hugging Face',
    category: 'Model hosting',
    event: 'create space, model repo, or access token',
    record: 'signed record of model-repo and token provisioning',
  },
  {
    name: 'Inngest',
    category: 'Background jobs',
    event: 'create environment, function, or signing key',
    record: 'signed record of background-job platform setup by an agent',
  },
  {
    name: 'Mixpanel',
    category: 'Product analytics',
    event: 'create project, service account, or token',
    record: 'signed record of analytics-platform provisioning events',
  },
  {
    name: 'Neon',
    category: 'Database',
    event: 'create project, branch, role, or API key',
    record: 'signed record of agent-driven Postgres branch and credential setup',
  },
  {
    name: 'Netlify',
    category: 'Hosting',
    event: 'create site, environment variable, or deploy hook',
    record: 'signed record of site + environment setup tied to an agent or developer session',
  },
  {
    name: 'OpenRouter',
    category: 'Model routing',
    event: 'create workspace, API key, or routing rule',
    record: 'signed record of model-routing provisioning tied to an agent workflow',
  },
  {
    name: 'PlanetScale',
    category: 'Database',
    event: 'create database, branch, or service token',
    record: 'signed record of branch lifecycle and token issuance',
  },
  {
    name: 'PostHog',
    category: 'Product analytics',
    event: 'create project, API key, or feature flag',
    record: 'signed record of analytics workspace setup by an agent',
  },
  {
    name: 'Privy',
    category: 'Auth and wallets',
    event: 'create app, configure login methods, issue API keys',
    record: 'signed record of auth and wallet-surface setup by an agent or operator',
  },
  {
    name: 'Railway',
    category: 'Hosting',
    event: 'create project, service, or environment variable',
    record: 'signed record of project bootstrap and environment wiring',
  },
  {
    name: 'Render',
    category: 'Hosting',
    event: 'create service, environment, or deploy hook',
    record: 'signed record of which agent provisioned which service tier',
  },
  {
    name: 'Runloop',
    category: 'Agent runtimes',
    event: 'create devbox, snapshot, or runtime token',
    record: 'signed record of agent-runtime provisioning tied to an agent session',
  },
  {
    name: 'Sentry',
    category: 'Error tracking',
    event: 'create organization, project, or DSN',
    record: 'signed record of error-tracking surface provisioning by an agent',
  },
  {
    name: 'Squarespace',
    category: 'Domains and sites',
    event: 'register or connect a domain, configure DNS, issue API access',
    record: 'signed record of domain-surface provisioning attributable to an agent session',
  },
  {
    name: 'Supabase',
    category: 'Database and auth',
    event: 'create project, schema, RLS policy, or API key',
    record: 'signed record of agent-driven project setup and key issuance',
  },
  {
    name: 'Turso',
    category: 'Database',
    event: 'create database, group, or auth token',
    record: 'signed record of edge-SQLite provisioning by an agent or CLI',
  },
  {
    name: 'Twilio',
    category: 'Messaging and voice',
    event: 'provision phone number, messaging service, or API key',
    record: 'signed record of which agent allocated which number for which app',
  },
  {
    name: 'Upstash',
    category: 'Database',
    event: 'create Redis or Kafka, set credentials, configure region',
    record: 'signed record of serverless data-surface provisioning by an agent',
  },
  {
    name: 'Vercel',
    category: 'Hosting',
    event: 'create project, deploy preview, set environment variable',
    record: 'signed record of project and environment setup tied to an agent or developer session',
  },
  {
    name: 'WorkOS',
    category: 'Identity and SSO',
    event: 'create organization, configure SSO connection, issue API key',
    record: 'signed record of identity-platform setup actions by an agent or operator',
  },
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
          title="Verifiable provisioning records for agent-driven infrastructure"
          sub="When agents provision infrastructure, the proof should outlive the session that made the change."
          author="Originary Team"
          date="2026-05-18"
          readTime="11 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <div style={callout}>
            <strong>Who this is for.</strong> Platform engineers, infrastructure leads, security
            reviewers, and agent-tool builders whose workflows let an agent or CLI provision
            production-adjacent resources (cloud projects, databases, API keys, auth, environment
            variables) and who need verifiable records of those changes that survive the session
            that produced them.
          </div>

          <p>
            The point is not to make PEAC a provisioning system. The point is to make
            provisioning observable as a portable record when a resource, credential, domain,
            budget, or deployment target changes across systems.
          </p>

          <p>Provisioning used to be a human workflow.</p>
          <p>
            A developer created an account, opened a dashboard, copied keys into{' '}
            <code>.env</code>, configured a database, wired auth, added analytics, and deployed
            the app. Some of that work lived in Git. Some lived in provider dashboards. Some
            lived in shell history. A lot lived nowhere durable at all.
          </p>
          <p>That model is changing.</p>
          <p>
            Coding agents can now set up more of the application stack directly. They can
            initialize projects, provision databases, attach auth, create analytics projects,
            rotate credentials, and sync environment variables.{' '}
            <a
              href="https://docs.stripe.com/projects"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Stripe Projects
            </a>{' '}
            is one visible example of this shift: a CLI workflow for adding third-party services,
            managing credentials, handling upgrades, and giving coding agents the same command
            path humans use.
          </p>
          <p>That is useful. It is also a new audit problem.</p>
          <p>
            When an agent provisions infrastructure, teams need to answer simple questions later:
          </p>
          <ul>
            <li>What changed?</li>
            <li>Which service was added?</li>
            <li>Which credential flow happened?</li>
            <li>Which local project state changed?</li>
            <li>What did the CLI report?</li>
            <li>What can be verified without reopening every provider dashboard?</li>
          </ul>
          <p>
            Logs help, but logs usually stay where they were produced. They are often local,
            partial, mutable, or tied to a specific vendor&apos;s system.
          </p>
          <p>Provisioning needs a portable record layer.</p>

          <h2>What PEAC does not do</h2>
          <ul>
            <li>PEAC does not store credentials, secrets, or runtime tokens.</li>
            <li>PEAC does not run vendor accounts, replace cloud control planes, or take over CLIs.</li>
            <li>PEAC does not orchestrate provisioning, retry failed operations, or roll back changes.</li>
            <li>PEAC does not assert that a provisioning action was authorized, only that it was observed.</li>
            <li>PEAC does not replace your provider&apos;s audit log; it produces a portable signed record alongside it.</li>
          </ul>

          <h2>What PEAC adds</h2>
          <p>
            PEAC is the open standard for verifiable interaction records across agent, tool, API,
            and cross-runtime systems.
          </p>
          <p>
            For provisioning workflows, PEAC does one narrow thing: it records what was observed.
          </p>
          <p>
            A PEAC provisioning record can bind to the local artifacts around a workflow: command
            output, project state, environment sync metadata, credential rotation events,
            generated LLM context, or other sanitized evidence. The record can then be signed,
            exported, and verified later without depending on the original runtime.
          </p>
          <p>That distinction matters.</p>
          <ul>
            <li>PEAC does not provision resources.</li>
            <li>PEAC does not store credentials.</li>
            <li>PEAC does not become a vault.</li>
            <li>PEAC does not approve actions.</li>
            <li>
              PEAC does not decide whether a provider state is legally or operationally final.
            </li>
          </ul>
          <p>
            It records what the issuer observed in a provisioning flow, and makes that record
            portable.
          </p>
          <div style={pullQuote}>Record locally. Verify across boundaries.</div>

          <h2>The first concrete example: Stripe Projects</h2>
          <p>
            We added a PEAC example and integration kit for Stripe Projects provisioning records.
          </p>
          <p>
            The example is intentionally small. It does not wrap Stripe Projects. It does not
            claim a Stripe partnership. It does not introduce a new PEAC package or a new
            protocol surface.
          </p>
          <p>It shows a pattern:</p>
          <ol>
            <li>run a provisioning workflow through Stripe Projects</li>
            <li>capture sanitized local artifacts</li>
            <li>issue signed PEAC records for the observed steps</li>
            <li>verify those records offline</li>
            <li>reconstruct a small audit trail from portable artifacts</li>
          </ol>
          <p>The fixture-backed example covers four observed events:</p>
          <ul>
            <li>project initialization</li>
            <li>service addition</li>
            <li>credential rotation</li>
            <li>LLM context generation</li>
          </ul>
          <p>
            Each record binds to observed artifacts from the workflow. The example uses
            experimental, illustrative type names. They are not registry commitments. That is
            deliberate. The goal is to show the shape of the record, not freeze a
            vendor-specific vocabulary too early.
          </p>

          <h2>Why this matters for agents</h2>
          <p>Agent-driven provisioning creates a boundary problem.</p>
          <ul>
            <li>The agent may run locally.</li>
            <li>The CLI may talk to Stripe.</li>
            <li>Stripe may coordinate with a provider.</li>
            <li>The provider may create a resource.</li>
            <li>Credentials may be synced into local files.</li>
            <li>The app may later run somewhere else.</li>
          </ul>
          <p>No single system naturally owns the full story.</p>
          <p>
            That is exactly where signed records are useful. They let each boundary emit or
            preserve a verifiable statement about what it observed, without forcing one platform
            to become the control plane for everything.
          </p>
          <p>For developers, this helps answer:</p>
          <ul>
            <li>&quot;Did the agent actually add the database?&quot;</li>
            <li>&quot;What changed after that command?&quot;</li>
            <li>&quot;Which project state was the app built against?&quot;</li>
            <li>&quot;Can another teammate verify the same setup trail?&quot;</li>
            <li>&quot;Can we review the workflow without exposing secrets?&quot;</li>
          </ul>
          <p>
            For teams, it creates a cleaner audit habit: keep logs local, but let signed records
            travel.
          </p>

          <h2>What the kit does not claim</h2>
          <p>This is important enough to say plainly.</p>
          <p>
            The Stripe Projects kit records provisioning and credential workflow observations. It
            does not infer settlement, legal acceptance, provider-side finality, or production
            deployment state from CLI artifacts.
          </p>
          <p>
            For example, a local state change can show what the CLI observed. It does not, by
            itself, prove every downstream provider system completed exactly as intended. A
            billing or upgrade flow can show delegation-related evidence. It does not
            automatically become payment settlement evidence.
          </p>
          <p>That conservative boundary is the point.</p>
          <div style={callout}>PEAC is more useful when it says less, precisely.</div>

          <h2>Why not just use logs?</h2>
          <p>Logs are necessary. They are not enough.</p>
          <p>
            A log is usually tied to the system that produced it. A signed interaction record is
            designed to leave that system.
          </p>
          <p>
            That makes a difference when work crosses teams, vendors, agents, and runtimes. A
            provisioning trail may begin in a local CLI session, pass through provider APIs,
            affect environment files, and later become relevant during security review, incident
            response, onboarding, or compliance work.
          </p>
          <p>The useful question is not &quot;can we log this?&quot;</p>
          <p>The useful question is:</p>
          <div style={pullQuote}>
            Can we verify what happened after the original system is gone, unavailable, or not
            trusted as the only source?
          </div>
          <p>That is the gap PEAC is built for.</p>

          <h2>A pattern, not a one-off</h2>
          <p>
            Stripe Projects is the first concrete example here because it is a clear, current
            provisioning workflow with agent support, local project state, credential sync, and
            provider coordination.
          </p>
          <p>But the category is broader.</p>
          <p>The same pattern applies to:</p>
          <ul>
            <li>cloud project creation</li>
            <li>API token issuance</li>
            <li>database provisioning</li>
            <li>auth setup</li>
            <li>sandbox creation</li>
            <li>environment sync</li>
            <li>managed runtime setup</li>
            <li>agent tool installation</li>
            <li>provider dashboard changes exported into local workflows</li>
          </ul>
          <p>The protocol category is not &quot;Stripe Projects records.&quot;</p>
          <p>The category is <strong>verifiable provisioning records</strong>.</p>
          <p>
            Stripe Projects is simply a good place to show the pattern. The{' '}
            <a
              href="https://projects.dev/providers/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Stripe Projects providers directory
            </a>{' '}
            already shows the shape of a broader app-stack provisioning surface, not just a
            Stripe-internal tool.
          </p>

          <h2>Where provisioning records apply</h2>
          <p>
            Stripe Projects shows the shape of a broader category: agents and CLIs increasingly
            provision services across app stacks. PEAC does not replace those providers. It gives
            teams portable signed records of what changed, which tool observed it, and what another
            party can verify later.
          </p>
          <div style={callout}>
            The examples below are compatibility examples based on the public Stripe Projects
            provider directory. They are not customer, partner, endorsement, or integration claims.
          </div>
          <Stagger as="ul" step={40} baseDelay={40} style={providerGrid}>
            {PROVIDERS.map((p) => (
              <li key={p.name} className="home-card" style={providerCard}>
                <div style={providerName}>{p.name}</div>
                <div style={providerMeta}>{p.category}</div>
                <div style={providerLabel}>Example provisioning event</div>
                <div>{p.event}</div>
                <div style={providerLabel}>PEAC record value</div>
                <div>{p.record}</div>
              </li>
            ))}
          </Stagger>
          <p>
            Provider names are included to explain where provisioning records can apply. This
            does not imply that any listed provider uses, endorses, or integrates PEAC.
          </p>

          <h2>Try it</h2>
          <p>The PEAC repo now includes:</p>
          <ul>
            <li>a runnable Stripe Projects provisioning records example</li>
            <li>sanitized fixtures</li>
            <li>offline verification</li>
            <li>an integration kit for teams that want to adapt the pattern</li>
          </ul>
          <p>
            Start with the example. Read the kit. Then adapt the observer pattern to your own
            provisioning workflow.
          </p>
          <p>
            The goal is not to replace your CLI, cloud provider, agent framework, or deployment
            system.
          </p>
          <p>The goal is simpler:</p>
          <div style={pullQuote}>
            When agents change infrastructure, the proof should outlive the session that made the
            change.
          </div>

          <h2>References</h2>
          <ul>
            <li>
              <a
                href="https://docs.stripe.com/projects"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Stripe Projects - docs.stripe.com/projects
              </a>
            </li>
            <li>
              <a
                href="https://projects.dev/providers/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Stripe Projects providers directory
              </a>
            </li>
            <li>
              <Link href="/peac" style={linkStyle}>
                PEAC Protocol overview
              </Link>
            </li>
            <li>
              <Link href="/downloads" style={linkStyle}>
                Downloads (CLI, SDK, integration kits)
              </Link>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'Agent and crawler signals', href: '/blog/ai-bot-detection' },
            { label: 'A2A stack: agent-to-agent commerce', href: '/blog/a2a-stack-agent-to-agent-commerce' },
            { label: 'PEAC Protocol overview', href: '/peac' },
            { label: 'Downloads (CLI, SDK)', href: '/downloads' },
          ]}
        />
      </PageShell>
    </>
  )
}
