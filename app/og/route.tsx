import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

// OG image renderer requires raw hex. Values must match design-system.css
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7F9FC',
          padding: '60px 80px',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '48px',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#F7F9FC',
              }}
            >
              O
            </span>
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#111827',
              letterSpacing: '-0.02em',
            }}
          >
            Originary
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#111827',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Verify agent requests.
          </span>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#475467',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Apply policy. Keep the record.
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            fontSize: '24px',
            color: '#667085',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Verifiable interaction records for APIs, tools, and MCP servers. Built on PEAC. Self-hostable.
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#98A2B3',
          }}
        >
          originary.xyz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
