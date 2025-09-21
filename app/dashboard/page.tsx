import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SessionProvider } from "next-auth/react"
import Link from "next/link"

export default async function Dashboard() {
  const session = await auth()

  if (!session?.user) {
    redirect("/signin")
  }

  return (
    <SessionProvider>
      <Header />

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">DASHBOARD</span>
              <h1 className="display">Welcome back, {session.user.name || session.user.email}</h1>
              <p className="sub">
                Manage your API keys, view usage analytics, and configure your PEAC integration.
              </p>

              <div className="actions">
                <Link href="/api-keys" className="btn primary">Manage API Keys</Link>
                <Link href="/developers" className="btn secondary">View Documentation</Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hero-metrics">
              <div className="hero-metric">
                <div className="metric-value">0</div>
                <div className="metric-label">API Keys</div>
              </div>
              <div className="hero-metric">
                <div className="metric-value">0</div>
                <div className="metric-label">Requests This Month</div>
              </div>
              <div className="hero-metric">
                <div className="metric-value">$0.00</div>
                <div className="metric-label">Current Usage</div>
              </div>
              <div className="hero-metric">
                <div className="metric-value">Active</div>
                <div className="metric-label">Account Status</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Quick Actions</h2>
              <p className="lead">Get started with your Originary integration</p>
            </div>

            <div className="dashboard-actions">
              <div className="dashboard-card">
                <h3>🔑 Create API Key</h3>
                <p>Generate your first API key to start making requests to our services.</p>
                <Link href="/api-keys" className="btn secondary">Create Key</Link>
              </div>

              <div className="dashboard-card">
                <h3>📚 Read Documentation</h3>
                <p>Learn how to integrate PEAC protocol and start building with our APIs.</p>
                <Link href="/developers" className="btn secondary">View Docs</Link>
              </div>

              <div className="dashboard-card">
                <h3>💳 Upgrade Plan</h3>
                <p>View our pricing plans and upgrade for higher limits and enterprise features.</p>
                <Link href="/pricing" className="btn secondary">View Pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </SessionProvider>
  )
}
