'use client'

import { useEffect, useRef } from 'react'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RVciupBc6OhCa6" }: RazorpayButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
    script.async = true
    script.dataset.payment_button_id = paymentButtonId
    container.appendChild(script)

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [paymentButtonId])

  return <div className="payment-button" ref={containerRef} />
}
