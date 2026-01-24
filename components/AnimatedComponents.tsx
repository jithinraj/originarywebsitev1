'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'
import {
  ChevronRight,
  Check,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Database,
  Lock,
  TrendingUp,
  Users,
  Code,
  Cpu,
  Cloud,
  BarChart,
  DollarSign,
  CreditCard,
  FileText,
  Terminal,
  Sparkles,
  Rocket,
  Award,
  Clock,
  CheckCircle,
  Download,
  Github,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  Headphones,
  Building
} from 'lucide-react'

// Hook to detect when element is in view
const useInView = (ref: React.RefObject<HTMLElement | null>, options = {}) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Guard against SSR and browsers without IntersectionObserver
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsInView(true) // Fallback: assume visible
      return
    }

    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3, ...options }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, options])

  return isInView
}

// Check if we're on the client side
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

export const icons = {
  ChevronRight,
  Check,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Database,
  Lock,
  TrendingUp,
  Users,
  Code,
  Cpu,
  Cloud,
  BarChart,
  DollarSign,
  CreditCard,
  FileText,
  Terminal,
  Sparkles,
  Rocket,
  Award,
  Clock,
  CheckCircle,
  Download,
  Github,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  Headphones,
  Building
}

// Fade in animation wrapper
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = ''
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isClient = useIsClient()
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && isClient && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, isClient, hasAnimated])

  const animationStyle = {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
  }

  return (
    <div
      ref={ref}
      style={isClient ? animationStyle : undefined}
      className={className}
    >
      {children}
    </div>
  )
}

// Slide in animation
export const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  className = ''
}: {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isClient = useIsClient()
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && isClient && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, isClient, hasAnimated])

  const getInitialTransform = () => {
    if (direction === 'left') return 'translateX(-50px)'
    if (direction === 'right') return 'translateX(50px)'
    if (direction === 'up') return 'translateY(50px)'
    if (direction === 'down') return 'translateY(-50px)'
    return 'translateX(-50px)'
  }

  const animationStyle = {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'translate(0, 0)' : getInitialTransform(),
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  }

  return (
    <div
      ref={ref}
      style={isClient ? animationStyle : undefined}
      className={className}
    >
      {children}
    </div>
  )
}

// Scale animation
export const ScaleIn = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isClient = useIsClient()
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && isClient && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, isClient, hasAnimated])

  const animationStyle = {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'scale(1)' : 'scale(0.8)',
    transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  }

  return (
    <div
      ref={ref}
      style={isClient ? animationStyle : undefined}
      className={className}
    >
      {children}
    </div>
  )
}

// Stagger children animation
export const StaggerChildren = ({
  children,
  staggerDelay = 0.1,
  className = ''
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isClient = useIsClient()
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && isClient && !hasAnimated) {
      setHasAnimated(true)
      // Add staggered animation to children
      const childElements = ref.current?.children
      if (childElements) {
        Array.from(childElements).forEach((child, index) => {
          const element = child as HTMLElement
          element.style.animationDelay = `${index * staggerDelay}s`
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        })
      }
    }
  }, [isInView, isClient, hasAnimated, staggerDelay])

  const baseStyle = {
    opacity: hasAnimated ? 1 : 0,
    transition: 'opacity 0.6s ease-out'
  }

  const childStyle = {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
  }

  return (
    <div
      ref={ref}
      style={isClient ? baseStyle : undefined}
      className={className}
    >
      {children}
    </div>
  )
}

// Individual stagger item
export const StaggerItem = ({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

// Animated counter
export const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isClient = useIsClient()
  const isInView = useInView(ref)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView && isClient) {
      const startTime = Date.now()
      const endValue = value

      const updateValue = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(easeOutQuart * endValue)

        setDisplayValue(currentValue)

        if (progress < 1) {
          requestAnimationFrame(updateValue)
        }
      }

      requestAnimationFrame(updateValue)
    }
  }, [isInView, value, duration, isClient])

  return (
    <span ref={ref}>
      {prefix}{isClient ? displayValue.toLocaleString() : value.toLocaleString()}{suffix}
    </span>
  )
}

// Hover card animation
export const HoverCard = ({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => {
  const hoverStyle = {
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    transformStyle: 'preserve-3d' as const
  }

  const hoverClass = 'hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-out'

  return (
    <div
      style={hoverStyle}
      className={`${className} ${hoverClass}`}
    >
      {children}
    </div>
  )
}

// Floating animation
export const FloatingElement = ({
  children,
  duration = 3,
  className = ''
}: {
  children: ReactNode
  duration?: number
  className?: string
}) => {
  const floatingStyle = {
    animation: `float ${duration}s ease-in-out infinite`
  }

  useEffect(() => {
    // Add CSS keyframes for floating animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div
      style={floatingStyle}
      className={className}
    >
      {children}
    </div>
  )
}

// Gradient blob animation
export const GradientBlob = ({
  color1 = '#2563EB',
  color2 = '#7C3AED',
  size = '600px',
  className = ''
}) => {
  const blobStyle = {
    background: `radial-gradient(circle, ${color1} 0%, ${color2} 70%, transparent 100%)`,
    width: size,
    height: size,
    animation: 'blob 25s ease-in-out infinite'
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        25% { transform: translate(150px, -120px) scale(1.2) rotate(90deg); }
        50% { transform: translate(-100px, 80px) scale(0.8) rotate(180deg); }
        75% { transform: translate(75px, -50px) scale(1.1) rotate(270deg); }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div
      className={`absolute rounded-full filter blur-3xl opacity-15 ${className}`}
      style={blobStyle}
    />
  )
}

// Parallax scroll effect - simplified
export const ParallaxScroll = ({
  children,
  offset = 50,
  className = ''
}: {
  children: ReactNode
  offset?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translateY(0)')

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const y = (scrollProgress - 0.5) * offset
      setTransform(`translateY(${y}px)`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return (
    <div
      ref={ref}
      style={{ transform }}
      className={className}
    >
      {children}
    </div>
  )
}

// Animated button
export const AnimatedButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary'
}: {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
}) => {
  const buttonClass = `btn ${variant} ${className} transform transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-98 active:translate-y-0`

  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  )
}

// Animated progress bar
export const ProgressBar = ({
  progress,
  className = ''
}: {
  progress: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [animatedWidth, setAnimatedWidth] = useState(0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimatedWidth(progress), 100)
    }
  }, [isInView, progress])

  return (
    <div ref={ref} className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${animatedWidth}%` }}
      />
    </div>
  )
}

// Tab switcher with animation
export const AnimatedTabs = ({
  tabs,
  activeTab,
  onTabChange
}: {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}) => {
  return (
    <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === tab
              ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
          }`}
        >
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  )
}

// Loading skeleton
export const Skeleton = ({
  className = '',
  variant = 'text'
}: {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}) => {
  const baseClass = 'animate-pulse bg-gray-200'
  const variantClass = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  }

  return (
    <div className={`${baseClass} ${variantClass[variant]} ${className}`} />
  )
}

// Reveal on scroll with line animation
export const RevealWithLine = ({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const contentStyle = {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
  }

  const lineStyle = {
    height: hasAnimated ? '100%' : '0%',
    transition: 'height 0.8s ease-out 0.2s'
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div style={contentStyle}>
        {children}
      </div>
      <div
        className="absolute -left-4 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
        style={lineStyle}
      />
    </div>
  )
}

// Typewriter effect
export const TypewriterText = ({
  text,
  delay = 0,
  speed = 50
}: {
  text: string
  delay?: number
  speed?: number
}) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.slice(0, currentIndex))
            currentIndex++
          } else {
            clearInterval(interval)
          }
        }, speed)

        return () => clearInterval(interval)
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [isInView, text, delay, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span ref={ref}>
      {displayText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  )
}

// Magnetic attraction effect
export const MagneticCard = ({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const transformStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      {children}
    </div>
  )
}

// Glitch text effect
export const GlitchText = ({
  text,
  className = ''
}: {
  text: string
  className?: string
}) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const glitchStyle = {
    transform: isGlitching ? 'translate(-1px, 0) skew(1deg)' : 'none',
    transition: 'transform 0.2s ease-out'
  }

  return (
    <span
      className={className}
      style={glitchStyle}
    >
      {text}
    </span>
  )
}

// Particle system - simplified
export const ParticleField = ({
  count = 50,
  className = ''
}: {
  count?: number
  className?: string
}) => {
  const particles = Array.from({ length: count }, (_, i) => i)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float-particles {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(100px, -50px); }
        50% { transform: translate(-75px, 100px); }
        75% { transform: translate(50px, -75px); }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particles ${Math.random() * 10 + 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  )
}

// Morphing shape
export const MorphingShape = ({
  className = ''
}: {
  className?: string
}) => {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes morph {
        0%, 100% {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          transform: rotate(0deg);
        }
        25% {
          border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
          transform: rotate(90deg);
        }
        50% {
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          transform: rotate(180deg);
        }
        75% {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          transform: rotate(270deg);
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div
      className={`w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 ${className}`}
      style={{
        animation: 'morph 8s ease-in-out infinite'
      }}
    />
  )
}

// Enhanced fade in with stagger
export const FadeInStagger = ({
  children,
  className = '',
  staggerDelay = 0.1
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => {
        const animationStyle = {
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
          transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}s`
        }

        return (
          <div
            key={index}
            style={animationStyle}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

