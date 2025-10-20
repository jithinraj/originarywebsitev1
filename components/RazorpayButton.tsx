'use client'

import { useEffect, useRef } from 'react'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RVciupBc6OhCa6" }: RazorpayButtonProps) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
    script.async = true
    script.setAttribute('data-payment_button_id', paymentButtonId)
    form.appendChild(script)

    return () => {
      while (form.firstChild) {
        form.removeChild(form.firstChild)
      }
    }
  }, [paymentButtonId])

  return <form ref={formRef} />
}
