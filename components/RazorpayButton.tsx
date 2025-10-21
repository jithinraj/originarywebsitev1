'use client'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RK5T4IykFzu0rh" }: RazorpayButtonProps) {
  // Create iframe content with the Razorpay button
  // This isolates the script from React context and prevents test mode detection
  const iframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, sans-serif;
          background: transparent;
        }
        form {
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <form>
        <script src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="${paymentButtonId}"
          async>
        </script>
      </form>
    </body>
    </html>
  `

  return (
    <iframe
      srcDoc={iframeContent}
      style={{
        width: '100%',
        height: '60px',
        border: 'none',
        overflow: 'hidden',
        display: 'block'
      }}
      sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      title="Razorpay Payment Button"
    />
  )
}
