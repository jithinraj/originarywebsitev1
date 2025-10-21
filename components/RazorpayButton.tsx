'use client'

import { useEffect, useRef, useState } from 'react'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RK5T4IykFzu0rh" }: RazorpayButtonProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState(600) // Much higher default for payment form

  useEffect(() => {
    // Listen for resize messages from iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'resize' && event.data?.height) {
        // Add some buffer to ensure everything is visible
        setIframeHeight(Math.max(event.data.height + 50, 300))
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Load the Razorpay button from a standalone HTML file
  // This completely isolates it from React/Next.js context
  const iframeSrc = `/razorpay-button.html?id=${paymentButtonId}`

  return (
    <iframe
      ref={iframeRef}
      src={iframeSrc}
      style={{
        width: '100%',
        height: `${iframeHeight}px`,
        minHeight: '300px',
        border: 'none',
        overflow: 'visible',
        display: 'block',
        background: 'transparent'
      }}
      sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-modals"
      title="Razorpay Payment Button"
      loading="eager"
      scrolling="auto"
    />
  )
}
