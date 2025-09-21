'use client'

import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  AnimatedButton,
  HoverCard,
  icons
} from './AnimatedComponents'

const {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Users,
  Headphones,
  Building,
  Clock,
  Globe,
  CheckCircle,
  Zap,
  Shield
} = icons

const contactOptions = [
  {
    title: 'Sales',
    description: 'Interested in enterprise deployment? Our sales team can help you get started.',
    icon: Building,
    action: 'Contact Sales',
    email: 'contact@originary.xyz',
    response: '< 2 hours during business hours'
  },
  {
    title: 'Support',
    description: 'Need help with integration or have technical questions?',
    icon: Headphones,
    action: 'Get Support',
    email: 'contact@originary.xyz',
    response: '< 4 hours during business hours'
  },
  {
    title: 'Partnerships',
    description: 'Interested in partnering or integrating with our protocols?',
    icon: Users,
    action: 'Partner With Us',
    email: 'contact@originary.xyz',
    response: '< 24 hours'
  },
  {
    title: 'General Inquiries',
    description: 'For all other questions and inquiries.',
    icon: MessageCircle,
    action: 'Contact Us',
    email: 'contact@originary.xyz',
    response: '< 24 hours'
  }
]

const responseMetrics = [
  { type: 'Sales inquiries', time: '< 2 hours', description: 'during business hours' },
  { type: 'Enterprise support', time: '< 1 hour', description: '24/7' },
  { type: 'General support', time: '< 4 hours', description: 'during business hours' },
  { type: 'Partnership inquiries', time: '< 24 hours', description: 'guaranteed response' }
]

const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/originary/',
    icon: Globe
  },
  {
    platform: 'X (Twitter)',
    url: 'https://x.com/originaryinc',
    icon: MessageCircle
  },
  {
    platform: 'Substack',
    url: 'https://originary.substack.com',
    icon: Mail
  }
]

const supportFeatures = [
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'Get answers when you need them with our commitment to quick response times across all channels.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our support team includes protocol engineers, solution architects, and customer success specialists.'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'With team members across multiple time zones, we provide comprehensive global support coverage.'
  },
  {
    icon: Shield,
    title: 'Secure Communications',
    description: 'All support communications are encrypted and handled with enterprise-grade security protocols.'
  }
]

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <FadeIn className="hero-content text-center max-w-4xl mx-auto">
            <span className="kicker">
              <MessageCircle className="inline w-4 h-4 mr-1" />
              CONTACT
            </span>
            <h1 className="display">Get in touch</h1>
            <p className="sub">
              Ready to deploy agentic infrastructure? Have questions about our protocols?
              We&apos;d love to hear from you and help you get started.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Options */}
            <div className="contact-options">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-8">How can we help you?</h2>
              </FadeIn>

              <StaggerChildren className="space-y-6" staggerDelay={0.1}>
                {contactOptions.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <StaggerItem key={option.title}>
                      <HoverCard className="contact-option bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                            <p className="text-gray-600 mb-4">{option.description}</p>
                            <div className="flex items-center justify-between">
                              <AnimatedButton variant="primary">
                                <a href={`mailto:${option.email}`} className="flex items-center gap-2">
                                  {option.action}
                                  <ArrowRight className="w-4 h-4" />
                                </a>
                              </AnimatedButton>
                              <span className="text-sm text-gray-500">{option.response}</span>
                            </div>
                          </div>
                        </div>
                      </HoverCard>
                    </StaggerItem>
                  )
                })}
              </StaggerChildren>
            </div>

            {/* Contact Info & Metrics */}
            <div className="contact-info">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-8">Quick response times</h2>
              </FadeIn>

              <StaggerChildren className="space-y-4 mb-8" staggerDelay={0.05}>
                {responseMetrics.map((metric) => (
                  <StaggerItem key={metric.type}>
                    <div className="response-metric bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-gray-900">{metric.type}:</span>
                          <span className="ml-2 text-primary font-bold">{metric.time}</span>
                        </div>
                        <span className="text-sm text-gray-500">{metric.description}</span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <FadeIn delay={0.3}>
                <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                <div className="social-links flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <AnimatedButton key={social.platform} variant="secondary">
                        <a
                          href={social.url}
                          className="flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="w-4 h-4" />
                          {social.platform}
                        </a>
                      </AnimatedButton>
                    )
                  })}
                </div>
              </FadeIn>

              <ScaleIn delay={0.4} className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Enterprise Priority Support</h4>
                  <p className="text-gray-600 text-sm">
                    Enterprise customers get dedicated support channels with guaranteed response times
                    and direct access to our engineering team.
                  </p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="section bg-gray-50">
        <div className="container">
          <FadeIn className="section-header">
            <h2>Why our support stands out</h2>
            <p className="lead">We&apos;re committed to providing exceptional support that helps you succeed</p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {supportFeatures.map((feature) => {
              const IconComponent = feature.icon
              return (
                <StaggerItem key={feature.title}>
                  <HoverCard className="support-feature bg-white rounded-xl border border-gray-200 p-6 text-center h-full">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </HoverCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Enterprise Contact CTA */}
      <section className="section bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="enterprise-contact-cta text-center">
            <FadeIn>
              <Building className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-4xl font-bold mb-4">Ready for enterprise deployment?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how Originary can help scale your agentic infrastructure.
                Our enterprise team is ready to design a custom solution for your needs.
              </p>
            </FadeIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <AnimatedButton variant="secondary">
                  <a href="mailto:contact@originary.xyz" className="flex items-center gap-2">
                    Schedule Enterprise Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </AnimatedButton>
                <AnimatedButton variant="outline">
                  <a href="/pricing" className="flex items-center gap-2">
                    View Enterprise Pricing
                  </a>
                </AnimatedButton>
              </div>
            </SlideIn>

          </div>
        </div>
      </section>
    </main>
  )
}