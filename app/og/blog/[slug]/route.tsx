import { ImageResponse } from '@vercel/og'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { EVIDENCE_SERIES, getArticle } from '@/lib/blog'

export const runtime = 'nodejs'

export function generateStaticParams() {
  return EVIDENCE_SERIES.map((slug) => ({ slug }))
}

async function getFont() {
  try {
    const fontPath = fileURLToPath(new URL('../../../../public/fonts/InterDisplay-SemiBold.otf', import.meta.url))
    return await readFile(fontPath)
  } catch {
    const res = await fetch('https://rsms.me/inter/font-files/InterDisplay-SemiBold.otf')
    return Buffer.from(await res.arrayBuffer())
  }
}

// Colors mirror the homepage palette in components/home/palette.ts
const BG = '#f4f1ea'
const PAPER = '#fbf9f4'
const INK = '#14110a'
const FAINT = '#6e6759'
const SLATE = '#4a627c'
const HAIRLINE = 'rgba(20,17,10,0.18)'

/** Social card for an evidence-series article: category, title, and series position. */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  const part = (EVIDENCE_SERIES as readonly string[]).indexOf(slug)
  if (!article || part < 0) return new Response('Not found', { status: 404 })

  const fontData = await getFont()
  const wordmarkPath = fileURLToPath(new URL('../../../../public/og-wordmark.png', import.meta.url))
  const wordmark = await readFile(wordmarkPath)
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: BG, padding: '36px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            border: `1px solid ${HAIRLINE}`,
            padding: '52px 60px 44px 60px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* 182 x 47 preserves the canonical wordmark aspect ratio (7487:1918). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wordmarkSrc} width={182} height={47} alt="Originary" />
            <span
              style={{
                display: 'flex',
                fontSize: '15px',
                color: SLATE,
                border: `1px solid ${SLATE}`,
                padding: '6px 12px',
                letterSpacing: '0.1em',
              }}
            >
              {article.category.toUpperCase()}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              fontSize: article.title.length > 56 ? '52px' : '58px',
              fontWeight: 600,
              color: INK,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              maxWidth: '960px',
            }}
          >
            {article.title}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '20px',
              borderTop: `1px solid ${HAIRLINE}`,
              fontSize: '18px',
              color: FAINT,
              letterSpacing: '0.06em',
            }}
          >
            <span style={{ display: 'flex' }}>
              {`EVIDENCE HANDOFF SERIES / PART ${part + 1} OF ${EVIDENCE_SERIES.length}`}
            </span>
            <span style={{ display: 'flex', backgroundColor: PAPER, padding: '4px 0' }}>originary.xyz/blog</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'InterDisplay', data: fontData, weight: 600, style: 'normal' }],
    },
  )
}
