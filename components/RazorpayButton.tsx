'use client'

interface RazorpayButtonProps {
  paymentButtonId?: string
}

export default function RazorpayButton({ paymentButtonId = "pl_RK5T4IykFzu0rh" }: RazorpayButtonProps) {
  // Simple button that opens payment page directly - avoids all React detection issues
  const handlePayment = () => {
    // Open the standalone HTML file in a popup window
    const width = 500
    const height = 700
    const left = (window.screen.width - width) / 2
    const top = (window.screen.height - height) / 2

    window.open(
      `/razorpay-button.html?id=${paymentButtonId}`,
      'RazorpayPayment',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    )
  }

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '20px 0'
    }}>
      <button
        onClick={handlePayment}
        style={{
          backgroundColor: '#3395FF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.3s ease',
          boxShadow: '0 2px 8px rgba(50, 50, 93, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1a7ff5'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#3395FF'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
        </svg>
        Pay with Razorpay
      </button>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        color: '#666',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <span>Secure payment powered by Razorpay</span>
      </div>
    </div>
  )
}