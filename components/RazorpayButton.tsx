'use client'

import { useEffect, useRef } from 'react'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RK5T4IykFzu0rh" }: RazorpayButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ''

    // Create form element
    const form = document.createElement('form')

    // Create script element exactly as working plain HTML
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
    script.setAttribute('data-payment_button_id', paymentButtonId)
    script.async = true

    // Append script to form
    form.appendChild(script)

    // Append form to container
    containerRef.current.appendChild(form)

    // Mark as loaded to prevent re-initialization
    scriptLoadedRef.current = true

    // Log for debugging
    console.log('Razorpay button initialized with ID:', paymentButtonId)
  }, [paymentButtonId])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: '60px'
      }}
    />
  )
}
