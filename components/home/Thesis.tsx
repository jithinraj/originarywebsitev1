import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'

/**
 * Thesis: why Originary exists, in one band before the closing call to action. The full argument
 * lives on /about (#thesis); this keeps to two short paragraphs and the claim.
 */
export function Thesis() {
  return (
    <section
      className="hx-section th-band"
      aria-labelledby="home-thesis"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <div className="th-grid">
        <div>
          <p className="hx-eyebrow">Why we build this</p>
          <h2 id="home-thesis" className="hx-h2 th-h">
            Agents are changing who holds the evidence.
          </h2>
        </div>
        <div className="th-body">
          <p>
            As agents take on real work, the only record of what they did sits inside the systems that run them.
            Everyone else has to ask for it, and accept what they are shown.
          </p>
          <p>
            A signed record travels with the action instead. The people it affects can check what was recorded, and
            who stands behind it, without access to anyone&rsquo;s logs.
          </p>
          <Link href="/about#thesis" className="hx-textlink">
            Read our thesis
          </Link>
        </div>
      </div>
    </section>
  )
}
