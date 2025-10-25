'use client'

import { useEffect, useState } from 'react'

interface RazorpayButtonProps {
  amount?: number
  currency?: string
  name?: string
  description?: string
}

declare global {
  interface Window {
    Razorpay: any
    process?: any
    __rzpOriginalProcess?: any
  }
}

export default function RazorpayButton({
  amount = 100, // ₹1 = 100 paise
  currency = 'INR',
  name = 'Originary',
  description = 'Start Plan - 30 day access'
}: RazorpayButtonProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  // CRITICAL: Store the key BEFORE deleting process
  const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID

  // Debug: Log key prefix to verify it's a live key
  useEffect(() => {
    console.log('Razorpay Key Type:', razorpayKeyId?.substring(0, 12) + '...')
    console.log('Is Live Key:', razorpayKeyId?.startsWith('rzp_live_'))
  }, [])

  useEffect(() => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      console.log('Razorpay already loaded')
      setIsScriptLoaded(true)
      return
    }

    // CRITICAL FIX: Delete process BEFORE loading the script
    // Razorpay captures it during initial script parse
    console.log('Hiding process before loading Razorpay')
    if (window.process) {
      window.__rzpOriginalProcess = window.process
      delete (window as any).process
      console.log('Process deleted, window.process is now:', window.process)
    }

    // Load Razorpay script
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true

    script.onload = () => {
      console.log('Razorpay script loaded successfully')
      console.log('After load, window.process is:', window.process)
      setIsScriptLoaded(true)
    }

    script.onerror = () => {
      console.error('Failed to load Razorpay script')
      // Restore on error
      if (window.__rzpOriginalProcess) {
        window.process = window.__rzpOriginalProcess
        delete window.__rzpOriginalProcess
      }
    }

    document.body.appendChild(script)

    return () => {
      // Restore process on unmount if needed
      if (window.__rzpOriginalProcess && !window.process) {
        window.process = window.__rzpOriginalProcess
        delete window.__rzpOriginalProcess
      }
    }
  }, [])

  const handlePayment = () => {
    // Check if Razorpay is loaded
    if (!window.Razorpay) {
      console.error('Razorpay not loaded')
      alert('Payment system is still loading. Please refresh the page and try again.')
      return
    }

    // Use the key we stored BEFORE deleting process
    console.log('Environment check:', {
      keyId: razorpayKeyId ? razorpayKeyId.substring(0, 15) + '...' : 'NOT FOUND'
    })

    if (!razorpayKeyId) {
      console.error('Razorpay key not configured. Please refresh the page.')
      alert('Payment is not configured. Please refresh the page and try again.')
      return
    }

    console.log('Opening payment with key:', razorpayKeyId.substring(0, 10) + '...')
    console.log('window.process at payment time:', window.process)

    setIsProcessing(true)

    try {
      const options = {
        key: razorpayKeyId,
        amount: amount,
        currency: currency,
        name: name,
        description: description,
        handler: function(response: any) {
          console.log('Payment Success:', response)
          alert(`Payment successful! ID: ${response.razorpay_payment_id}`)
          setIsProcessing(false)
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal closed')
            setIsProcessing(false)
          }
        },
        theme: {
          color: '#635BFF'
        }
      }

      const razorpay = new window.Razorpay(options)

      razorpay.on('payment.failed', function(response: any) {
        console.error('Payment failed:', response.error)
        alert('Payment failed: ' + (response.error.description || 'Unknown error'))
        setIsProcessing(false)
      })

      razorpay.open()
    } catch (error) {
      console.error('Error opening Razorpay:', error)
      alert('Failed to open payment window. Please try again.')
      setIsProcessing(false)
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={!isScriptLoaded || isProcessing}
      style={{
        backgroundColor: !isScriptLoaded || isProcessing ? '#999' : '#635BFF',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '6px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        cursor: !isScriptLoaded || isProcessing ? 'not-allowed' : 'pointer',
        opacity: !isScriptLoaded || isProcessing ? 0.7 : 1,
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        minWidth: '200px'
      }}
    >
      {!isScriptLoaded ? (
        'Loading...'
      ) : isProcessing ? (
        'Processing...'
      ) : (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18" />
          </svg>
          Pay ${(amount / 100).toFixed(2)} with Razorpay
        </>
      )}
    </button>
  )
}