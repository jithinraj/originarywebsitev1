'use client'

import Link from 'next/link'
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  AnimatedCounter,
  HoverCard,
  AnimatedButton,
  icons
} from './AnimatedComponents'

const {
  ArrowRight,
  Code,
  Terminal,
  Database,
  Globe,
  Users,
  CheckCircle,
  Download,
  Github,
  MessageCircle,
  BookOpen,
  Zap,
  Clock,
  Sparkles
} = icons

const quickstartSteps = [
  {
    step: '1',
    title: 'Create policy file',
    description: 'Add a peac.txt file to your /.well-known/ directory',
    code: `# PEAC Policy v1.0
version: "1.0"
owner: "https://example.com"
contact: "admin@example.com"

policy:
  access: "licensed"
  attribution: "required"
  commercial: "negotiable"`
  },
  {
    step: '2',
    title: 'Install SDK',
    description: 'Choose your preferred language and install our SDK',
    code: `# Node.js
npm install @originary/sdk

# Python
pip install originary

# Go
go get github.com/originary/go-sdk`
  },
  {
    step: '3',
    title: 'Integrate verification',
    description: 'Add policy checking to your application',
    code: `import { Originary } from '@originary/sdk';

const client = new Originary({
  apiKey: process.env.ORIGINARY_API_KEY
});

// Check policy compliance
const policy = await client.checkPolicy(resourceUrl);
if (policy.allowsAccess()) {
  // Proceed with access
  const receipt = await client.generateReceipt();
}`
  }
]

const sdks = [
  {
    name: 'JavaScript/TypeScript',
    status: 'Stable',
    description: 'Full-featured SDK for Node.js and browser environments with TypeScript support.',
    icon: Code,
    downloadLink: '/downloads/originary-js-sdk.tar.gz',
    githubLink: 'https://github.com/originary/js-sdk'
  },
  {
    name: 'Python',
    status: 'Stable',
    description: 'Comprehensive Python SDK with async support and comprehensive error handling.',
    icon: Terminal,
    downloadLink: '/downloads/originary-python-sdk.tar.gz',
    githubLink: 'https://github.com/originary/python-sdk'
  },
  {
    name: 'Go',
    status: 'Stable',
    description: 'High-performance Go SDK with context support and concurrent operations.',
    icon: Database,
    downloadLink: '/downloads/originary-go-sdk.tar.gz',
    githubLink: 'https://github.com/originary/go-sdk'
  },
  {
    name: 'Java/Kotlin',
    status: 'Beta',
    description: 'Enterprise-ready SDK with Spring Boot integration and comprehensive testing.',
    icon: Globe,
    downloadLink: '/downloads/originary-java-sdk.tar.gz',
    githubLink: 'https://github.com/originary/java-sdk'
  }
]

const apiSections = [
  {
    title: 'Verification API',
    description: 'Verify PEAC receipts and validate policy compliance',
    method: 'POST',
    endpoint: '/v1/verify',
    detail: 'Verify receipt authenticity',
    link: '/products/verify/'
  },
  {
    title: 'Gateway API',
    description: 'Payment processing and HTTP 402 gateway functionality',
    method: 'POST',
    endpoint: '/payment/stripe',
    detail: 'Process payment via Stripe',
    link: '/products/gateway-402/'
  },
  {
    title: 'Policy API',
    description: 'Retrieve and validate PEAC policy files',
    method: 'GET',
    endpoint: '/v1/policies/{url}',
    detail: 'Fetch and validate policy',
    link: '/downloads/policy-api-docs.pdf'
  }
]

const examples = [
  {
    title: 'Basic Integration',
    description: 'Simple policy checking and receipt generation',
    icon: CheckCircle,
    downloadLink: '/downloads/basic-integration-example.zip'
  },
  {
    title: 'Express.js Middleware',
    description: 'Add PEAC compliance to existing APIs',
    icon: Globe,
    downloadLink: '/downloads/express-middleware-example.zip'
  },
  {
    title: 'Agent Framework',
    description: 'Build PEAC-compliant autonomous agents',
    icon: Users,
    downloadLink: '/downloads/agent-framework-example.zip'
  }
]

const communityOptions = [
  {
    title: 'Developer Discord',
    description: 'Join our community for real-time help and discussions',
    icon: MessageCircle,
    link: 'https://discord.gg/originary',
    buttonText: 'Join Discord'
  },
  {
    title: 'GitHub',
    description: 'Contribute to our open-source tools and protocols',
    icon: Github,
    link: 'https://github.com/originary',
    buttonText: 'View GitHub'
  },
  {
    title: 'Stack Overflow',
    description: 'Ask questions and get answers from the community',
    icon: BookOpen,
    link: 'https://stackoverflow.com/questions/tagged/originary',
    buttonText: 'View Questions'
  }
]

export default function DevelopersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <FadeIn className="hero-content text-center max-w-4xl mx-auto">
            <span className="kicker">
              <Code className="inline w-4 h-4 mr-1" />
              DEVELOPERS
            </span>
            <h1 className="display">Build with PEAC</h1>
            <p className="sub">
              Everything you need to integrate PEAC protocol into your applications.
              SDKs, APIs, documentation, and examples to get you started quickly.
            </p>

            <SlideIn direction="up" delay={0.3} className="mt-8">
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton variant="primary">
                  <Link href="/company/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton variant="secondary">
                  <a href="#quickstart" className="flex items-center gap-2">
                    Quick Start Guide
                  </a>
                </AnimatedButton>
              </div>
            </SlideIn>
          </FadeIn>
        </div>
      </section>

      <section className="section" id="quickstart">
        <div className="container">
          <FadeIn className="section-header">
            <h2>Quick start</h2>
            <p className="lead">Get up and running with PEAC in minutes</p>
          </FadeIn>

          <StaggerChildren className="quickstart-grid grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {quickstartSteps.map((step) => (
              <StaggerItem key={step.step}>
                <HoverCard className="quickstart-card bg-white rounded-xl border border-gray-200 p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <FadeIn className="section-header">
            <h2>SDKs & Tools</h2>
            <p className="lead">Choose your language and start building</p>
          </FadeIn>

          <StaggerChildren className="sdk-grid grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {sdks.map((sdk) => {
              const IconComponent = sdk.icon
              return (
                <StaggerItem key={sdk.name}>
                  <HoverCard className="sdk-card bg-white rounded-xl border border-gray-200 p-6">
                    <div className="sdk-header flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-8 h-8 text-primary" />
                        <h3 className="text-xl font-semibold">{sdk.name}</h3>
                      </div>
                      <span className={`sdk-status px-3 py-1 rounded-full text-sm font-medium ${
                        sdk.status === 'Stable'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {sdk.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{sdk.description}</p>
                    <div className="sdk-links flex gap-3">
                      <AnimatedButton variant="secondary" className="flex-1">
                        <a href={sdk.downloadLink} className="flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </AnimatedButton>
                      <AnimatedButton variant="outline">
                        <a href={sdk.githubLink} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </AnimatedButton>
                    </div>
                  </HoverCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* API Reference */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <h2>API Reference</h2>
            <p className="lead">Comprehensive API documentation for all endpoints</p>
          </FadeIn>

          <StaggerChildren className="api-sections space-y-6" staggerDelay={0.1}>
            {apiSections.map((section) => (
              <StaggerItem key={section.title}>
                <HoverCard className="api-section bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                      <p className="text-gray-600 mb-4">{section.description}</p>
                      <div className="api-endpoint flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <span className={`method px-2 py-1 rounded text-sm font-medium ${
                          section.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {section.method}
                        </span>
                        <code className="url flex-1 font-mono text-sm">{section.endpoint}</code>
                        <span className="description text-sm text-gray-600">{section.detail}</span>
                      </div>
                    </div>
                    <AnimatedButton variant="outline">
                      <a href={section.link} className="flex items-center gap-2">
                        View docs
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </AnimatedButton>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Examples & Tutorials */}
      <section className="section bg-gray-50">
        <div className="container">
          <FadeIn className="section-header">
            <h2>Examples & Tutorials</h2>
            <p className="lead">Learn by example with our comprehensive guides</p>
          </FadeIn>

          <StaggerChildren className="examples-grid grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {examples.map((example) => {
              const IconComponent = example.icon
              return (
                <StaggerItem key={example.title}>
                  <HoverCard className="example-card bg-white rounded-xl border border-gray-200 p-6 text-center">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                    <p className="text-gray-600 mb-6">{example.description}</p>
                    <AnimatedButton variant="secondary" className="w-full">
                      <a href={example.downloadLink} className="flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download example
                      </a>
                    </AnimatedButton>
                  </HoverCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Community & Support */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <h2>Community & Support</h2>
            <p className="lead">Join our developer community and get the help you need</p>
          </FadeIn>

          <StaggerChildren className="community-options grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {communityOptions.map((option) => {
              const IconComponent = option.icon
              return (
                <StaggerItem key={option.title}>
                  <HoverCard className="community-option bg-white rounded-xl border border-gray-200 p-6 text-center">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    <AnimatedButton variant="secondary" className="w-full">
                      <a href={option.link} className="flex items-center justify-center gap-2">
                        {option.buttonText}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </AnimatedButton>
                  </HoverCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="section bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container">
          <FadeIn className="developer-cta text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">Need help getting started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our developer success team is here to help you integrate PEAC into your applications.
            </p>
            <div className="cta-actions flex flex-wrap justify-center gap-4">
              <AnimatedButton variant="secondary">
                <a href="mailto:contact@originary.xyz" className="flex items-center gap-2">
                  Contact developer support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </AnimatedButton>
              <AnimatedButton variant="outline">
                <a href="/downloads/developer-guide.pdf" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download developer guide
                </a>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}