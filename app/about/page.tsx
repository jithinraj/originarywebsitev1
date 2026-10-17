import type { Metadata } from 'next'
import Link from 'next/link'
import { FACTS } from '@/lib/facts'
import { ORIGINARY_ORG_ID } from '@/lib/structured-data/entities'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PageShell, Reveal, MAX_W, PAGE_PAD } from '@/components/home'
import { BitField } from '@/components/home/motion/BitField'
import { InkButton } from '@/components/specimens/parts'
import { Constellation } from '@/components/about/Constellation'
import { Stage } from '@/components/about/Stage'
import { ScrollLines } from '@/components/about/ScrollLines'
import { ToolIcon, type ToolName } from '@/components/about/AboutArt'
import './about.css'

const DESCRIPTION =
  'Make AI verifiable. Every action, by anyone, anywhere. Originary builds the open tools that let anyone check what AI and software did, for themselves.'

export const metadata: Metadata = {
  title: { absolute: 'About Originary | Making AI verifiable' },
  description: DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Originary',
    description: DESCRIPTION,
    url: '/about',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Originary',
    description: DESCRIPTION,
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Originary',
  url: 'https://www.originary.xyz/about',
  about: { '@id': ORIGINARY_ORG_ID },
  publisher: { '@id': ORIGINARY_ORG_ID },
}

const frame = {
  maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: PAGE_PAD,
  paddingRight: PAGE_PAD,
}

const MANIFESTO = ['First, software answered our questions.', 'Then it did our work.', 'Now it acts for us.']

const TOOLS: Array<{ icon: ToolName; t: string; b: string }> = [
  { icon: 'seal', t: 'The seal', b: 'Who sent it.' },
  { icon: 'signature', t: 'The signature', b: 'Who agreed.' },
  { icon: 'receipt', t: 'The receipt', b: 'What was paid.' },
  { icon: 'audit', t: 'The audit', b: 'Whether the books add up.' },
  { icon: 'digital', t: 'The digital receipt', b: 'What the AI did.' },
]

const QUESTIONS = ['Who acted?', 'Who allowed it?', 'What happened?', 'Can anyone check?']

const PLACES = [
  ['Shops', 'Banks', 'Airlines', 'Hospitals', 'Insurers', 'Marketplaces'],
  ['Offices', 'Factories', 'Schools', 'Public services', 'Homes', 'Supply chains'],
]

const BELIEFS = [
  {
    t: 'Accountability is for everyone.',
    b: 'Anyone affected by what AI does should be able to check it. Not only the company that built it.',
  },
  {
    t: 'Fast machines. Human responsibility.',
    b: 'AI acts in a split second. People should still answer for every action it takes.',
  },
  {
    t: 'Owned by no one.',
    b: 'The rules for these receipts belong to no single company. Not even ours.',
  },
  {
    t: 'Honest about limits.',
    b: 'A receipt proves some things, not everything. We always say which.',
  },
]

const TALKS: Array<{ when: string; what: string; href: string }> = [
  {
    when: 'Jun 2026',
    what: 'Talk at KubeCon India',
    href: 'https://kccncind2026.sched.com/event/2IW34/cl-lightning-talk-one-header-portable-proof-peac-receipts-for-k8s-apis-jithin-raj-originary',
  },
  {
    when: 'Jun 2026',
    what: 'Talk at MCP Dev Summit Mumbai',
    href: 'https://mcpmumbai26.sched.com/event/2PGqX/when-logs-arent-enough-portable-signed-records-for-mcp-tool-calls-jithin-raj-originary',
  },
  {
    when: 'Feb 2026',
    what: 'Interviewed by CNBC-TV18 at the India AI Impact Summit',
    href: 'https://www.youtube.com/watch?v=jaNuIGwAges',
  },
]

export default function About() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <Breadcrumbs current="About" href="/about" />

      {/* Hero: the one ink opening on the site */}
      <section className="cin-stage ab-hero" aria-labelledby="about-title">
        <div className="cin-ink-wash" aria-hidden />
        <BitField className="cin-stream" tone="paper" focus="center" strength={0.38} />
        <div className="ab-hero-c" style={{ ...frame, position: 'relative', zIndex: 1 }}>
          <p className="cin-rise ab-eyebrow">About Originary</p>
          <h1 id="about-title" className="cin-rise ab-h1" style={{ ['--cin-i' as string]: 1 }}>
            Make AI verifiable.{' '}
            <span className="ab-h1-q">
              <span className="ab-nb">Every action.</span> <span className="ab-nb">By anyone.</span>{' '}
              <span className="ab-nb">Anywhere.</span>
            </span>
          </h1>
          <p className="cin-rise ab-lede" style={{ ['--cin-i' as string]: 2 }}>
            AI already buys, books, approves and signs for people every day. Our mission is a world where anyone it
            touches can check what it did, for themselves.
          </p>
          <div className="cin-rise ab-ctas" style={{ ['--cin-i' as string]: 3 }}>
            <InkButton href="#beliefs" primary>
              What we believe
            </InkButton>
            <InkButton href="/contact">Talk to us</InkButton>
          </div>
        </div>
        <div className="cin-rise ab-hero-art" style={{ ...frame, position: 'relative', zIndex: 1, ['--cin-i' as string]: 4 }}>
          <Constellation />
        </div>
      </section>

      {/* 01 The shift: pinned while its words light up */}
      <section className="ab-mani" aria-labelledby="ab-mani">
        <div className="ab-mani-pin">
          <div style={frame}>
            <p className="ab-n">01</p>
            <ScrollLines id="ab-mani" className="ab-mani-h" lines={MANIFESTO} track=".ab-mani" />
            <p className="ab-mani-sub">
              It pays the bill, approves the refund and signs the form in seconds. Often with no one watching.
            </p>
          </div>
        </div>
      </section>

      {/* 02 The tools people built to check each other */}
      <section className="ab-chapter ab-band" aria-labelledby="ab-tools">
        <div style={frame}>
          <Reveal>
            <p className="ab-n">02</p>
            <div className="ab-split">
              <h2 id="ab-tools" className="ab-h2">
                We have solved this before.{' '}
                <span className="ab-h2-q">With receipts.</span>
              </h2>
              <p className="ab-body">
                People have always done business with strangers. It worked because of simple tools that let anyone check
                what happened. AI needs one of its own.
              </p>
            </div>
          </Reveal>
          <Stage className="ab-tl">
            <ol className="ab-tl-list" role="list">
              {TOOLS.map((x, i) => (
                <li key={x.t} style={{ ['--tl-i' as string]: i }} data-now={i === TOOLS.length - 1 ? '' : undefined}>
                  <ToolIcon name={x.icon} index={i} />
                  <span className="ab-tl-txt">
                    <span className="ab-tl-n">{i === TOOLS.length - 1 ? 'now' : String(i + 1).padStart(2, '0')}</span>
                    <span className="ab-tl-t">{x.t}</span>
                    <span className="ab-tl-b">{x.b}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Stage>
        </div>
      </section>

      {/* 03 Four questions */}
      <section className="ab-chapter" style={frame} aria-labelledby="ab-q">
        <Reveal>
          <p className="ab-n">03</p>
          <div className="ab-split">
            <h2 id="ab-q" className="ab-h2">
              Four questions.{' '}
              <span className="ab-h2-q">Every action should answer them.</span>
            </h2>
            <p className="ab-body">
              AI works across companies and countries, each with its own systems and its own laws. They don&rsquo;t
              need to agree on everything. They only need to answer the same four questions, for anyone who asks.
            </p>
          </div>
        </Reveal>
        <Stage className="ab-qs">
          <span className="ab-qs-x" aria-hidden />
          <span className="ab-qs-y" aria-hidden />
          <ol className="ab-qs-list" role="list">
            {QUESTIONS.map((q, i) => (
              <li key={q} style={{ ['--qs-i' as string]: i }}>
                <span className="ab-qs-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="ab-qs-q">{q}</span>
              </li>
            ))}
          </ol>
        </Stage>
      </section>

      {/* 04 The scope of the ambition */}
      <section className="ab-chapter ab-band" aria-labelledby="ab-amb">
        <div style={frame}>
          <Reveal>
            <p className="ab-n">04</p>
            <div className="ab-split">
              <h2 id="ab-amb" className="ab-h2">
                Wherever AI acts.{' '}
                <span className="ab-h2-q">There should be a receipt.</span>
              </h2>
              <p className="ab-body">
                Shops and banks. Airlines and hospitals. Offices and public services. Anything AI does for a person,
                anywhere in the world, should be checkable by the people it affects. It is a big goal, and it is bigger
                than any one company.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="ab-mq" aria-hidden>
          {PLACES.map((row, ri) => (
            <div key={ri} className="ab-mq-row" data-dir={ri % 2 ? 'r' : 'l'}>
              <div className="ab-mq-track">
                {[...row, ...row].map((w, i) => (
                  <span key={i} className="ab-mq-w">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 What we believe */}
      <section id="beliefs" className="ab-chapter" style={frame} aria-labelledby="ab-beliefs">
        <Reveal>
          <p className="ab-n">05</p>
          <h2 id="ab-beliefs" className="ab-h2">
            What we believe.
          </h2>
        </Reveal>
        <Stage className="ab-bl">
          {BELIEFS.map((x, i) => (
            <div key={x.t} className="ab-bl-row" style={{ ['--bl-i' as string]: i }}>
              <span className="ab-bl-n">{String(i + 1).padStart(2, '0')}</span>
              <p className="ab-bl-t">{x.t}</p>
              <p className="ab-bl-b">{x.b}</p>
            </div>
          ))}
        </Stage>
      </section>

      {/* 06 The company */}
      <section className="ab-chapter ab-band" aria-labelledby="ab-who">
        <div style={frame}>
          <Reveal>
            <p className="ab-n">06</p>
            <div className="ab-split">
              <h2 id="ab-who" className="ab-h2">
                A small team.{' '}
                <span className="ab-h2-q">Building in the open.</span>
              </h2>
              <div>
                <p className="ab-body ab-body-first">
                  {FACTS.legalEntity} is a Delaware corporation. Originary&trade; is {FACTS.legalEntity}&rsquo;s
                  software and developer-tools brand. Through Originary, Poem publishes and maintains PEAC Protocol and
                  develops Originary Verify.
                </p>
                <p className="ab-body">
                  Our code, our rules and our tests are public. PEAC software is distributed through GitHub and package
                  registries under the {FACTS.license} license.
                </p>
              </div>
            </div>
          </Reveal>
          <Stage className="ab-co">
            <div className="ab-co-card">
              <p className="ab-co-k">Talks and media</p>
              <ul className="ab-talks" role="list">
                {TALKS.map((t) => (
                  <li key={t.href}>
                    <span className="ab-talks-when">{t.when}</span>
                    <a href={t.href} target="_blank" rel="noopener noreferrer">
                      {t.what}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ab-co-card">
              <p className="ab-co-k">Get in touch</p>
              <dl className="ab-contact">
                <div>
                  <dt>General</dt>
                  <dd>
                    <a href="mailto:contact@originary.xyz">contact@originary.xyz</a>
                  </dd>
                </div>
                <div>
                  <dt>Security</dt>
                  <dd>
                    <a href="mailto:security@originary.xyz">security@originary.xyz</a>
                  </dd>
                </div>
                <div>
                  <dt>Press</dt>
                  <dd>
                    <Link href="/press">Press kit</Link>
                  </dd>
                </div>
                <div>
                  <dt>Trust</dt>
                  <dd>
                    <Link href="/trust">Trust center</Link>
                  </dd>
                </div>
              </dl>
            </div>
          </Stage>
        </div>
      </section>

      {/* Finale: the hero's field, every point now reached */}
      <section className="cin-stage ab-finale" aria-labelledby="ab-close">
        <div className="cin-ink-wash" aria-hidden />
        <div className="ab-finale-art" aria-hidden>
          <Constellation lit />
        </div>
        <div className="ab-finale-c" style={{ ...frame, position: 'relative', zIndex: 1 }}>
          <h2 id="ab-close" className="ab-close">
            Record locally.
            <span>Verify across boundaries.</span>
          </h2>
          <div className="ab-ctas">
            <InkButton href="/contact" primary>
              Talk to us
            </InkButton>
            <InkButton href="/peac">Read PEAC Protocol</InkButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
