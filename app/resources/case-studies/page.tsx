import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world implementations of PEAC protocol and Originary platform by enterprise customers.',
  keywords: 'case studies, customer success, PEAC implementation, enterprise deployment',
  robots: 'index,follow',
  alternates: {
    canonical: '/resources/case-studies',
  },
}

export default function CaseStudies() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">RESOURCES</span>
              <h1 className="display">Case Studies</h1>
              <p className="sub">Real-world implementations and success stories from enterprises deploying agentic infrastructure.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <div className="case-studies-grid">
                <div className="case-study-card">
                  <div className="case-study-header">
                    <div className="company-info">
                      <div className="company-logo">TC</div>
                      <div>
                        <h3>TechCorp</h3>
                        <p>Fortune 500 Technology Company</p>
                      </div>
                    </div>
                    <span className="industry-tag">Technology</span>
                  </div>
                  <div className="case-study-content">
                    <h4>60% Cost Reduction in Agent Coordination</h4>
                    <p>TechCorp implemented PEAC protocol across their autonomous agent fleet, reducing coordination costs by 60% while improving compliance and security.</p>
                    <div className="case-study-metrics">
                      <div className="metric">
                        <span className="metric-value">60%</span>
                        <span className="metric-label">Cost reduction</span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">99.9%</span>
                        <span className="metric-label">Compliance rate</span>
                      </div>
                    </div>
                    <a href="/contact" className="btn secondary">Request case study</a>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-header">
                    <div className="company-info">
                      <div className="company-logo">AD</div>
                      <div>
                        <h3>AI Dynamics</h3>
                        <p>Enterprise AI Platform</p>
                      </div>
                    </div>
                    <span className="industry-tag">AI/ML</span>
                  </div>
                  <div className="case-study-content">
                    <h4>Global Multi-Region Deployment</h4>
                    <p>AI Dynamics deployed Originary infrastructure across 15 global regions with zero downtime migration and comprehensive compliance.</p>
                    <div className="case-study-metrics">
                      <div className="metric">
                        <span className="metric-value">15</span>
                        <span className="metric-label">Global regions</span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">0</span>
                        <span className="metric-label">Downtime</span>
                      </div>
                    </div>
                    <a href="/contact" className="btn secondary">Request case study</a>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-header">
                    <div className="company-info">
                      <div className="company-logo">FA</div>
                      <div>
                        <h3>FinanceAI</h3>
                        <p>Financial Services</p>
                      </div>
                    </div>
                    <span className="industry-tag">Financial Services</span>
                  </div>
                  <div className="case-study-content">
                    <h4>Comprehensive Compliance Dashboard</h4>
                    <p>FinanceAI uses Studio&rsquo;s compliance dashboard for comprehensive visibility into all agentic infrastructure operations with automated reporting.</p>
                    <div className="case-study-metrics">
                      <div className="metric">
                        <span className="metric-value">100%</span>
                        <span className="metric-label">Audit compliance</span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">80%</span>
                        <span className="metric-label">Time savings</span>
                      </div>
                    </div>
                    <a href="/contact" className="btn secondary">Request case study</a>
                  </div>
                </div>
              </div>

              <div className="case-study-cta">
                <h2>Share your success story</h2>
                <p>Interested in being featured in our case studies? We&rsquo;d love to hear about your implementation.</p>
                <a href="mailto:contact@originary.xyz" className="btn primary">Contact our team</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}
