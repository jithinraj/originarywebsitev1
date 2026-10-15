import { ImageResponse } from '@vercel/og'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { BRAND } from '@/lib/brand-tokens'

export const runtime = 'nodejs'

// Literal URLs so the bundler resolves each font file exactly.
const FONT_URLS = {
  sans400: new URL('../../public/fonts/ibm-plex-sans-latin-400-normal.woff', import.meta.url),
  sans500: new URL('../../public/fonts/ibm-plex-sans-latin-500-normal.woff', import.meta.url),
  mono400: new URL('../../public/fonts/ibm-plex-mono-latin-400-normal.woff', import.meta.url),
}

async function loadFont(key: keyof typeof FONT_URLS) {
  return await readFile(fileURLToPath(FONT_URLS[key]))
}

// Colours come from lib/brand-tokens.ts (satori cannot read CSS variables).
const BG = BRAND.bg
const PAPER = BRAND.bg
const INK = BRAND.ink
const MUTED = BRAND.muted
const FAINT = BRAND.faint
const SUCCESS = BRAND.success
const HAIRLINE = BRAND.rule

const SANS = 'IBM Plex Sans'
const MONO = 'IBM Plex Mono'

const ROWS: Array<[string, string]> = [
  ['ISSUER', 'https://api.vendor.example'],
  ['ACTION', 'POST /v1/market-data/search'],
  ['RESULT', '200 · sha256:9a3c1d...'],
  ['TIME', '2026-07-08T14:08:11Z'],
  ['SIGNATURE', 'Ed25519 b2c1a4e8...'],
]

export async function GET() {
  const [sans400, sans500, mono400] = await Promise.all([
    loadFont('sans400'),
    loadFont('sans500'),
    loadFont('mono400'),
  ])
  const wordmarkPath = fileURLToPath(new URL('../../public/og-wordmark.png', import.meta.url))
  const wordmark = await readFile(wordmarkPath)
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: BG,
          padding: '36px',
          fontFamily: SANS,
        }}
      >
        {/* Datasheet plate: hairline frame around the whole card */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            border: `1px solid ${HAIRLINE}`,
            backgroundColor: BG,
            padding: '52px 60px',
            alignItems: 'center',
            gap: '56px',
          }}
        >
          {/* Left: brand + headline + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1.25 }}>
            {/* 200 x 47 preserves the wordmark aspect ratio (1200:279). Clear space around it is well over 1/8 of its width. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wordmarkSrc} width={200} height={47} alt="Originary" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '46px',
              }}
            >
              <span style={{ fontSize: '44px', fontWeight: 500, color: INK, lineHeight: 1.14, letterSpacing: '-0.022em' }}>
                Verify agent, API, and
              </span>
              <span style={{ fontSize: '44px', fontWeight: 500, color: INK, lineHeight: 1.14, letterSpacing: '-0.022em' }}>
                gateway actions across
              </span>
              <span style={{ fontSize: '44px', fontWeight: 500, color: INK, lineHeight: 1.14, letterSpacing: '-0.022em' }}>
                company boundaries
              </span>
            </div>
            <div style={{ display: 'flex', marginTop: '38px', fontSize: '21px', color: MUTED, letterSpacing: '-0.004em' }}>
              Logs stay local. Signed records travel.
            </div>
            <div style={{ display: 'flex', marginTop: '14px', fontFamily: MONO, fontSize: '17px', color: FAINT, letterSpacing: '0.12em' }}>
              originary.xyz
            </div>
          </div>

          {/* Right: the record artifact */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: PAPER,
              border: `1px solid ${HAIRLINE}`,
              padding: '26px 28px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '18px', color: INK }}>signed-record</span>
              <span
                style={{
                  display: 'flex',
                  fontFamily: MONO,
                  fontSize: '13px',
                  color: SUCCESS,
                  border: `1px solid ${SUCCESS}`,
                  padding: '5px 10px',
                  letterSpacing: '0.12em',
                }}
              >
                VERIFIED OFFLINE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '18px' }}>
              {ROWS.map(([label, value], i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    gap: '18px',
                    padding: '12px 0',
                    borderTop: i === 0 ? 'none' : `1px solid ${HAIRLINE}`,
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: MONO, fontSize: '12px', color: FAINT, letterSpacing: '0.12em', width: '104px' }}>{label}</span>
                  <span style={{ fontFamily: MONO, fontSize: '15px', color: INK }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: SANS, data: sans400, weight: 400, style: 'normal' },
        { name: SANS, data: sans500, weight: 500, style: 'normal' },
        { name: MONO, data: mono400, weight: 400, style: 'normal' },
      ],
    }
  )
}
