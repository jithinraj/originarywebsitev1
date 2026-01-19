'use client'

interface IllustrationProps {
  className?: string
  size?: number
}

// Abstract geometric illustration for "Publish" step
export function PublishIllustration({ className, size = 120 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Document layers */}
      <rect x="30" y="20" width="60" height="80" rx="4" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="1.5" />
      <rect x="35" y="25" width="50" height="70" rx="3" fill="white" stroke="#0a0a0a" strokeWidth="2" />

      {/* Content lines */}
      <line x1="42" y1="38" x2="78" y2="38" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="48" x2="70" y2="48" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="58" x2="74" y2="58" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="68" x2="66" y2="68" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" />

      {/* Publish indicator */}
      <circle cx="85" cy="85" r="18" fill="#0a0a0a" />
      <path d="M79 85l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Abstract geometric illustration for "Enforce" step
export function EnforceIllustration({ className, size = 120 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield shape */}
      <path
        d="M60 15L95 30V55C95 80 60 105 60 105S25 80 25 55V30L60 15Z"
        fill="rgba(99, 91, 255, 0.08)"
        stroke="#635bff"
        strokeWidth="2.5"
      />

      {/* Inner shield highlight */}
      <path
        d="M60 28L82 38V55C82 72 60 90 60 90S38 72 38 55V38L60 28Z"
        fill="rgba(99, 91, 255, 0.12)"
      />

      {/* Lock icon */}
      <rect x="50" y="52" width="20" height="16" rx="3" fill="#635bff" />
      <path
        d="M53 52V46C53 42.134 56.134 39 60 39C63.866 39 67 42.134 67 46V52"
        stroke="#635bff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="60" r="2" fill="white" />
    </svg>
  )
}

// Abstract geometric illustration for "Receipt" step
export function ReceiptIllustration({ className, size = 120 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Receipt paper with torn edge */}
      <path
        d="M30 15L35 20L40 15L45 20L50 15L55 20L60 15L65 20L70 15L75 20L80 15L85 20L90 15V105L85 100L80 105L75 100L70 105L65 100L60 105L55 100L50 105L45 100L40 105L35 100L30 105V15Z"
        fill="white"
        stroke="#525252"
        strokeWidth="2"
      />

      {/* Content lines */}
      <line x1="40" y1="35" x2="80" y2="35" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="48" x2="75" y2="48" stroke="#d4d4d4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="58" x2="70" y2="58" stroke="#d4d4d4" strokeWidth="1.5" strokeLinecap="round" />

      {/* Divider */}
      <line x1="35" y1="70" x2="85" y2="70" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="4 2" />

      {/* Checkmark circle */}
      <circle cx="60" cy="85" r="12" fill="#525252" />
      <path d="M54 85l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Abstract illustration for Verify product
export function VerifyIllustration({ className, size = 80 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Magnifying glass */}
      <circle cx="35" cy="35" r="20" stroke="#635bff" strokeWidth="3" fill="rgba(99, 91, 255, 0.08)" />
      <line x1="50" y1="50" x2="65" y2="65" stroke="#635bff" strokeWidth="4" strokeLinecap="round" />

      {/* Check inside */}
      <path d="M27 35l6 6 12-12" stroke="#635bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Abstract illustration for Gateway product
export function GatewayIllustration({ className, size = 80 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Gateway arch */}
      <path
        d="M15 65V35C15 21.193 26.193 10 40 10C53.807 10 65 21.193 65 35V65"
        stroke="#00d4aa"
        strokeWidth="3"
        fill="none"
      />

      {/* Pillars */}
      <rect x="12" y="55" width="8" height="20" rx="2" fill="#00d4aa" />
      <rect x="60" y="55" width="8" height="20" rx="2" fill="#00d4aa" />

      {/* Center indicator */}
      <circle cx="40" cy="40" r="8" fill="rgba(0, 212, 170, 0.15)" stroke="#00d4aa" strokeWidth="2" />
      <circle cx="40" cy="40" r="3" fill="#00d4aa" />
    </svg>
  )
}

// Abstract illustration for Protocol/Standard
export function ProtocolIllustration({ className, size = 80 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Interconnected nodes */}
      <circle cx="40" cy="20" r="8" fill="#0a0a0a" />
      <circle cx="20" cy="50" r="8" fill="#635bff" />
      <circle cx="60" cy="50" r="8" fill="#00d4aa" />
      <circle cx="40" cy="70" r="6" fill="#737373" />

      {/* Connections */}
      <line x1="40" y1="28" x2="25" y2="44" stroke="#d4d4d4" strokeWidth="2" />
      <line x1="40" y1="28" x2="55" y2="44" stroke="#d4d4d4" strokeWidth="2" />
      <line x1="28" y1="50" x2="52" y2="50" stroke="#d4d4d4" strokeWidth="2" />
      <line x1="25" y1="56" x2="36" y2="66" stroke="#d4d4d4" strokeWidth="2" />
      <line x1="55" y1="56" x2="44" y2="66" stroke="#d4d4d4" strokeWidth="2" />
    </svg>
  )
}

// Abstract flowing lines background
export function FlowLinesBackground({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flow-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#635bff" stopOpacity="0" />
          <stop offset="50%" stopColor="#635bff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flow-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0" />
          <stop offset="50%" stopColor="#00d4aa" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 200 Q200 150 400 200 T800 200"
        stroke="url(#flow-grad-1)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 220 Q200 280 400 220 T800 220"
        stroke="url(#flow-grad-2)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 180 Q200 120 400 180 T800 180"
        stroke="url(#flow-grad-1)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}
