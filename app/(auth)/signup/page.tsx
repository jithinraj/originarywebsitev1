'use client'

import { signUp } from "../actions"
import Link from "next/link"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SessionProvider } from "next-auth/react"

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(formData: FormData) {
    const result = await signUp(formData)

    if (result.ok) {
      setSuccess(true)
      setError(null)
    } else {
      setError(result.error || "An error occurred")
      setSuccess(false)
    }
  }

  return (
    <SessionProvider>
      <Header />

      <main>
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>Create Account</h1>
              <p>Get started with Originary</p>
            </div>

            {success ? (
              <div className="auth-success">
                Account created successfully! You can now{' '}
                <Link href="/signin">sign in</Link>
              </div>
            ) : (
              <form action={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    Password
                  </label>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    required
                    placeholder="Create a password (min 8 characters)"
                    minLength={8}
                    className="form-input"
                  />
                </div>

                {error && (
                  <div className="auth-error">
                    {error}
                  </div>
                )}

                <button type="submit" className="btn primary">
                  Create Account
                </button>
              </form>
            )}

            <div className="auth-footer">
              Already have an account?{' '}
              <Link href="/signin">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SessionProvider>
  )
}
