interface RazorpayButtonServerProps {
  paymentButtonId?: string
}

/**
 * Server-side Razorpay Button Component
 *
 * This is a server component that renders the Razorpay script directly
 * in the HTML, avoiding client-side script injection that triggers
 * the test mode detection.
 */
export default function RazorpayButtonServer({
  paymentButtonId = process.env.NEXT_PUBLIC_RAZORPAY_BUTTON_ID || "pl_RWPNPmgUVQGQXC"
}: RazorpayButtonServerProps) {
  // Server-rendered form with script tag
  // This renders exactly like plain HTML
  return (
    <form
      dangerouslySetInnerHTML={{
        __html: `
          <script
            src="https://checkout.razorpay.com/v1/payment-button.js"
            data-payment_button_id="${paymentButtonId}"
            async>
          </script>
        `
      }}
    />
  )
}