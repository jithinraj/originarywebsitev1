import type { CSSProperties } from 'react'
import { PALETTE, MONO, Reveal } from '@/components/home'
import { ArticleMotif } from './motifs'

type ArticlePlateProps = {
  slug: string
  category: string
  keyword: string
}

const dotgrid: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
}

/**
 * ArticlePlate is the header band rendered above an article's prose card:
 * the post's schematic motif on a dot-grid plate, with a mono micro-label
 * naming its category and keyword. Pass it to ArticleDoc's `plate` prop.
 */
export function ArticlePlate({ slug, category, keyword }: ArticlePlateProps) {
  return (
    <Reveal distance={10} duration={600}>
      <div
        style={{
          position: 'relative',
          marginTop: 32,
          minHeight: 150,
          flexWrap: 'wrap',
          background: PALETTE.bg,
          border: `1px solid ${PALETTE.hairline}`,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: '16px 28px',
        }}
      >
        <div style={dotgrid} aria-hidden="true" />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flex: '0 1 180px',
            // Allow this rail to shrink below the motif's intrinsic width on
            // narrow viewports; without it a flex item's default min-width
            // (auto) locks it at content size and the fixed-size motif SVG
            // spills into the micro-label instead of yielding space to it.
            minWidth: 0,
            maxWidth: 180,
            overflow: 'hidden',
          }}
        >
          <ArticleMotif slug={slug} size={180} />
        </div>
        <span
          style={{
            position: 'relative',
            flex: 'none',
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: PALETTE.faint,
            textAlign: 'right',
            marginLeft: 'auto',
          }}
        >
          {category} / {keyword}
        </span>
      </div>
    </Reveal>
  )
}
