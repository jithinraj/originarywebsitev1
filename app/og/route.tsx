import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

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
          backgroundColor: '#ffffff',
          padding: '60px 80px',
        }}
      >
        {/* Logo mark - refined O ring with purple center */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '48px',
            gap: '20px',
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" rx="48" fill="#09090b" />
            <circle cx="128" cy="128" r="72" fill="none" stroke="#ffffff" strokeWidth="24" />
            <circle cx="128" cy="128" r="24" fill="#635BFF" />
          </svg>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#09090b',
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
              fontSize: '72px',
              fontWeight: 700,
              color: '#000000',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Verify agent interactions.
          </span>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#635bff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Instantly.
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            fontSize: '24px',
            color: '#52525b',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Signature-verified records you can verify offline and export for audits
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#a1a1aa',
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
