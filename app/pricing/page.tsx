'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Github } from 'lucide-react'

export default function TracePricing() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <span className="text-gradient">Trace pricing</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '700px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Start free with self-hosted OSS. Upgrade to Cloud for retention, alerts, signed bundles, benchmarking, SSO, and SLAs.
              </p>
            </div>

            {/* Trace Pricing Table */}
            <div style={{ marginTop: 'var(--space-12)', marginBottom: 'var(--space-20)', overflowX: 'auto' }}>
              <table className="pricing-table" style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                minWidth: '800px',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden'
              }}>
                <thead>
                  <tr>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-6)',
                      background: 'var(--gray-50)',
                      borderBottom: '2px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-700)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      width: '25%'
                    }}>
                      Features
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: 'var(--space-6)',
                      background: 'var(--gray-50)',
                      borderBottom: '2px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      width: '18.75%'
                    }}>
                      <div style={{ marginBottom: 'var(--space-2)' }}>
                        <div style={{
                          display: 'inline-block',
                          background: 'var(--gray-200)',
                          color: 'var(--gray-700)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-full)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: 'var(--space-2)'
                        }}>
                          Free
                        </div>
                      </div>
                      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>OSS</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Self-hosted</div>
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: 'var(--space-6)',
                      background: 'var(--gray-50)',
                      borderBottom: '2px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      width: '18.75%'
                    }}>
                      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>Starter</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Managed Cloud</div>
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: 'var(--space-6)',
                      background: 'rgba(99, 91, 255, 0.05)',
                      borderBottom: '2px solid var(--brand-primary)',
                      borderRight: '1px solid var(--gray-200)',
                      position: 'relative',
                      width: '18.75%'
                    }}>
                      <div style={{
                        display: 'inline-block',
                        background: 'var(--gradient-brand)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: 'var(--space-2)'
                      }}>
                        Popular
                      </div>
                      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>Pro</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Production ready</div>
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: 'var(--space-6)',
                      background: 'var(--gray-50)',
                      borderBottom: '2px solid var(--gray-200)',
                      width: '18.75%'
                    }}>
                      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>Enterprise</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Custom deployment</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Pricing Row */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Price
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>$0</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)', marginTop: 'var(--space-1)' }}>Forever</div>
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>$29<span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>/mo</span></div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)', marginTop: 'var(--space-1)' }}>14-day trial</div>
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>$99<span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>/mo</span></div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)', marginTop: 'var(--space-1)' }}>14-day trial</div>
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>Custom</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)', marginTop: 'var(--space-1)' }}>Contact sales</div>
                    </td>
                  </tr>

                  {/* Data Retention */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Data retention
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      30 days
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      90 days
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      1 year
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Custom
                    </td>
                  </tr>

                  {/* Properties */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Properties
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      1
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      1
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      Multi-property
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Unlimited
                    </td>
                  </tr>

                  {/* Dashboard */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Dashboard
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Basic (self-hosted)
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Hosted
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      Hosted
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Hosted
                    </td>
                  </tr>

                  {/* PEAC Receipts */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      PEAC receipts
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Self-managed keys
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Export */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      CSV/JSON export
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Public Badge */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Public badge
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Prometheus Metrics */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Prometheus metrics
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                  </tr>

                  {/* Email Alerts */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Email alerts
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Slack/Webhook Alerts */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Slack/webhook alerts
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Verify API */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Verify API
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      On-demand
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Compliance Bundles */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Compliance bundles
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      Scheduled
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      Scheduled + Legal-ready
                    </td>
                  </tr>

                  {/* Benchmarking */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Benchmarking
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      Cohort
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* SSO */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Single sign-on (SSO)
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      Basic
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      SAML
                    </td>
                  </tr>

                  {/* SLO/SLA */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Uptime commitment
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      99.9% SLO
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)'
                    }}>
                      99.99% SLA
                    </td>
                  </tr>

                  {/* Domain Attestation + KMS */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Domain attestation + KMS
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* S3/GCS Delivery */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      S3/GCS delivery
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* SCIM Provisioning */}
                  <tr style={{ background: 'var(--gray-50)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      SCIM provisioning
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* Dedicated Support */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-4) var(--space-6)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)'
                    }}>
                      Dedicated support
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      borderRight: '1px solid var(--gray-200)',
                      textAlign: 'center',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-400)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      -
                    </td>
                    <td style={{
                      padding: 'var(--space-4)',
                      borderBottom: '1px solid var(--gray-200)',
                      textAlign: 'center'
                    }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                    </td>
                  </tr>

                  {/* CTA Row */}
                  <tr style={{ background: 'var(--white)' }}>
                    <td style={{
                      padding: 'var(--space-6)',
                      borderRight: '1px solid var(--gray-200)'
                    }}>
                    </td>
                    <td style={{
                      padding: 'var(--space-6)',
                      textAlign: 'center',
                      borderRight: '1px solid var(--gray-200)'
                    }}>
                      <a
                        href="https://github.com/originaryx/trace?utm_source=originary&utm_medium=site&utm_campaign=trace_oss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </td>
                    <td style={{
                      padding: 'var(--space-6)',
                      textAlign: 'center',
                      borderRight: '1px solid var(--gray-200)'
                    }}>
                      <Link
                        href="/cloud?plan=starter"
                        className="btn btn-primary"
                        style={{ width: '100%', fontSize: 'var(--text-sm)' }}
                      >
                        Start trial
                      </Link>
                    </td>
                    <td style={{
                      padding: 'var(--space-6)',
                      textAlign: 'center',
                      borderRight: '1px solid var(--gray-200)',
                      background: 'rgba(99, 91, 255, 0.02)'
                    }}>
                      <Link
                        href="/cloud?plan=pro"
                        className="btn btn-primary"
                        style={{ width: '100%', fontSize: 'var(--text-sm)' }}
                      >
                        Start trial
                      </Link>
                    </td>
                    <td style={{
                      padding: 'var(--space-6)',
                      textAlign: 'center'
                    }}>
                      <Link
                        href="/contact"
                        className="btn btn-secondary"
                        style={{ width: '100%', fontSize: 'var(--text-sm)' }}
                      >
                        Contact sales
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Platform Products Section */}
            <section style={{
              marginTop: 'var(--space-24)',
              paddingTop: 'var(--space-16)',
              borderTop: '1px solid var(--gray-200)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--gray-900)'
                }}>
                  Originary Platform
                </h2>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Additional products in beta and private beta. Request access to try early.
                </p>
              </div>

              <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
                {/* Verify API */}
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'rgba(99, 91, 255, 0.1)',
                      color: 'var(--brand-primary)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-4)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Beta
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                    Verify API
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                    PEAC receipt verification and related utilities as an API
                  </p>
                  <Link href="/products/verify" className="btn btn-ghost" style={{ width: '100%' }}>
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Gateway 402 */}
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'rgba(0, 212, 170, 0.1)',
                      color: 'var(--success)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-4)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Private beta
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                    Gateway 402
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                    Production-grade HTTP 402 controls and payment adapters
                  </p>
                  <Link href="/products/gateway-402" className="btn btn-ghost" style={{ width: '100%' }}>
                    Request access <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Studio */}
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'var(--gray-100)',
                      color: 'var(--gray-600)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-4)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Waitlist
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                    Studio
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                    Content policy design and compliance workflows
                  </p>
                  <Link href="/products/studio" className="btn btn-ghost" style={{ width: '100%' }}>
                    Join waitlist <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section style={{
              marginTop: 'var(--space-16)',
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--white)'
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--gray-900)' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    Can I self-host Trace?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Yes. Trace OSS is free and open source. Cloud and Enterprise add retention, automation, attestation, and managed infrastructure.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    What deployment methods does Trace support?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Cloudflare Worker proxy, Nginx access log tailer, Cloudflare Logpush, and Fingerprint webhook. WordPress plugin coming soon.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    Which AI crawlers does Trace identify?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    GPTBot, ClaudeBot, PerplexityBot, search bots (Googlebot, Bingbot), and unknown families through fingerprinting.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    How is Trace related to PEAC Protocol?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Trace is a PEAC-compatible product and reference implementation. It uses policy discovery (peac.txt), verifiable receipts (JWS), and HTTP 402 semantics.
                  </p>
                </details>
              </div>
            </section>

            {/* CTA */}
            <div style={{
              marginTop: 'var(--space-16)',
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              borderRadius: 'var(--radius-3xl)',
              padding: 'var(--space-16) var(--space-8)',
              color: 'var(--white)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}>
                  Ready to track AI crawlers?
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Start with OSS or try Cloud free for 14 days. No credit card required.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/cloud"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Start free trial</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://github.com/originaryx/trace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
