'use client'

import { useEffect, useRef, useState } from 'react'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RK5T4IykFzu0rh" }: RazorpayButtonProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(60)

  useEffect(() => {
    // Listen for messages from iframe to adjust height
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return
      if (event.data.type === 'razorpay-height') {
        setHeight(event.data.height)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={`/razorpay-button.html?id=${paymentButtonId}`}
      style={{
        width: '100%',
        height: `${height}px`,
        border: 'none',
        overflow: 'hidden',
        display: 'block'
      }}
      scrolling="no"
      title="Razorpay Payment Button"
      allow="payment"
    />
  )
}
