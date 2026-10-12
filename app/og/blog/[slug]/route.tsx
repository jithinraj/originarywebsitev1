import { ImageResponse } from '@vercel/og'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { BRAND } from '@/lib/brand-tokens'
import { EVIDENCE_SERIES, getArticle } from '@/lib/blog'

export const runtime = 'nodejs'

export function generateStaticParams() {
  return EVIDENCE_SERIES.map((slug) => ({ slug }))
}

// Literal URLs so the bundler resolves each font file exactly.
const FONT_URLS = {
  sans400: new URL('../../../../public/fonts/ibm-plex-sans-latin-400-normal.woff', import.meta.url),
  sans500: new URL('../../../../public/fonts/ibm-plex-sans-latin-500-normal.woff', import.meta.url),
  mono400: new URL('../../../../public/fonts/ibm-plex-mono-latin-400-normal.woff', import.meta.url),
}

async function loadFont(key: keyof typeof FONT_URLS) {
  return await readFile(fileURLToPath(FONT_URLS[key]))
}

// Colours come from lib/brand-tokens.ts (satori cannot read CSS variables).
const BG = BRAND.bg
const INK = BRAND.ink
const MUTED = BRAND.muted
const FAINT = BRAND.faint
const HAIRLINE = BRAND.rule

const SANS = 'IBM Plex Sans'
const MONO = 'IBM Plex Mono'

/** Social card for an evidence-series article: category, title, and series position. */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  const part = (EVIDENCE_SERIES as readonly string[]).indexOf(slug)
  if (!article || part < 0) return new Response('Not found', { status: 404 })

  const [sans500, mono400] = await Promise.all([
    loadFont('sans500'),
    loadFont('mono400'),
  ])
  const wordmarkPath = fileURLToPath(new URL('../../../../public/og-wordmark.png', import.meta.url))
  const wordmark = await readFile(wordmarkPath)
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: BG, padding: '36px', fontFamily: SANS }}>
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
            {/* 200 x 47 preserves the wordmark aspect ratio (1200:279). Clear space around it is well over 1/8 of its width. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wordmarkSrc} width={200} height={47} alt="Originary" />
            <span
              style={{
                display: 'flex',
                fontFamily: MONO,
                fontSize: '14px',
                color: MUTED,
                border: `1px solid ${HAIRLINE}`,
                padding: '6px 12px',
                letterSpacing: '0.12em',
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
              fontWeight: 500,
              color: INK,
              lineHeight: 1.12,
              letterSpacing: '-0.022em',
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
              fontFamily: MONO,
              fontSize: '16px',
              color: FAINT,
              letterSpacing: '0.12em',
            }}
          >
            <span style={{ display: 'flex' }}>
              {`EVIDENCE HANDOFF SERIES / PART ${part + 1} OF ${EVIDENCE_SERIES.length}`}
            </span>
            <span style={{ display: 'flex', padding: '4px 0' }}>originary.xyz/blog</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: SANS, data: sans500, weight: 500, style: 'normal' },
        { name: MONO, data: mono400, weight: 400, style: 'normal' },
      ],
    },
  )
}
