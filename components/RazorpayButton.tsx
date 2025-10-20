'use client'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RVciupBc6OhCa6" }: RazorpayButtonProps) {
  return (
    <form>
      <script
        src="https://checkout.razorpay.com/v1/payment-button.js"
        data-payment_button_id={paymentButtonId}
        async
      />
    </form>
  )
}
