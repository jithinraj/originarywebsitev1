'use client'

import { useEffect, useRef } from 'react'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RK5T4IykFzu0rh" }: RazorpayButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptAddedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || scriptAddedRef.current) return

    // Clean any existing content
    containerRef.current.innerHTML = ''

    // Inject the Razorpay button HTML directly with inline script
    containerRef.current.innerHTML = `
      <form style="width: 100%; text-align: center;">
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="${paymentButtonId}"
          async>
        </script>
      </form>
    `

    // Mark as added
    scriptAddedRef.current = true

    // Re-execute the script tag (needed for innerHTML injection)
    const script = containerRef.current.querySelector('script')
    if (script) {
      const newScript = document.createElement('script')
      newScript.src = script.src
      newScript.async = true

      // Copy all data attributes
      Array.from(script.attributes).forEach(attr => {
        if (attr.name.startsWith('data-')) {
          newScript.setAttribute(attr.name, attr.value)
        }
      })

      // Replace the old script with the new one
      script.parentNode?.replaceChild(newScript, script)
    }

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
      scriptAddedRef.current = false
    }
  }, [paymentButtonId])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: '60px',
        padding: '20px 0'
      }}
    />
  )
}
