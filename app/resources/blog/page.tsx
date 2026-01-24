import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, updates, and thought leadership on the agentic web, PEAC protocol, and autonomous agent coordination.',
  keywords: 'agentic web blog, PEAC protocol insights, autonomous agents, tech updates',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/blog',
  },
}

export default function Blog() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">RESOURCES</span>
              <h1 className="display">Blog</h1>
              <p className="sub">Insights, updates, and thought leadership on the agentic web and autonomous agent coordination.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <div className="blog-posts">
                <article className="blog-post">
                  <div className="post-meta">
                    <span className="post-date">January 15, 2025</span>
                    <span className="post-category">Protocol Updates</span>
                  </div>
                  <h2>PEAC Protocol v1.0: Production Ready</h2>
                  <p>The PEAC protocol reaches production readiness with comprehensive enterprise features and stability guarantees.</p>
                  <a href="/blog/peac-v1-production-ready" className="btn text">Read more →</a>
                </article>

                <article className="blog-post">
                  <div className="post-meta">
                    <span className="post-date">January 10, 2025</span>
                    <span className="post-category">Enterprise</span>
                  </div>
                  <h2>Enterprise Agentic Governance Best Practices</h2>
                  <p>Learn how Fortune 500 companies are implementing agentic governance at scale with comprehensive policy management.</p>
                  <a href="/blog/enterprise-governance-best-practices" className="btn text">Read more →</a>
                </article>

                <article className="blog-post">
                  <div className="post-meta">
                    <span className="post-date">January 5, 2025</span>
                    <span className="post-category">Technical</span>
                  </div>
                  <h2>Building PEAC-Compliant Agents</h2>
                  <p>A comprehensive guide to building autonomous agents that respect creator preferences and generate verifiable receipts.</p>
                  <a href="/blog/building-peac-compliant-agents" className="btn text">Read more →</a>
                </article>
              </div>

              <div className="blog-cta">
                <h2>Stay updated</h2>
                <p>Subscribe to our newsletter for the latest updates on agentic web development and protocol advances.</p>
                <a href="https://originary.substack.com" className="btn primary">Subscribe to newsletter</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}