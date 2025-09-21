'use client'

import { motion, useAnimation, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, ReactNode, useState } from 'react'

// Hook to handle hydration-safe rendering
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : () => {}

// Check if we're on the client side
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
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
  const ref = useRef(null)
  const isClient = useIsClient()
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView && isClient) {
      controls.start('visible')
    }
  }, [isInView, controls, isClient])

  // Return a simple div during SSR to prevent hydration issues
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
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
  const ref = useRef(null)
  const isClient = useIsClient()
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    }
  }

  // Return a simple div during SSR to prevent hydration issues
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
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
  const ref = useRef(null)
  const isClient = useIsClient()
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Return a simple div during SSR to prevent hydration issues
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        delay,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
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
  const ref = useRef(null)
  const isClient = useIsClient()
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Return a simple div during SSR to prevent hydration issues
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
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
  const isClient = useIsClient()

  // Return a simple div during SSR to prevent hydration issues
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
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
  const ref = useRef(null)
  const isClient = useIsClient()
  const isInView = useInView(ref, { once: true })
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
  const isClient = useIsClient()

  // Return a simple div during SSR to prevent hydration issues
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      whileTap={{
        scale: 0.95,
        rotateX: 0,
        rotateY: 0
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
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
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Gradient blob animation
export const GradientBlob = ({
  color1 = '#2563EB',
  color2 = '#7C3AED',
  size = '600px',
  className = ''
}) => {
  return (
    <motion.div
      className={`absolute rounded-full filter blur-3xl opacity-15 ${className}`}
      style={{
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 70%, transparent 100%)`,
        width: size,
        height: size,
      }}
      animate={{
        x: [0, 150, -100, 0],
        y: [0, -120, 80, 0],
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )
}

// Parallax scroll effect
export const ParallaxScroll = ({
  children,
  offset = 50,
  className = ''
}: {
  children: ReactNode
  offset?: number
  className?: string
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
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
  return (
    <motion.button
      onClick={onClick}
      className={`btn ${variant} ${className}`}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: {
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      whileTap={{
        scale: 0.98,
        y: 0
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
    >
      {children}
    </motion.button>
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
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
          className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute -left-4 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
        initial={{ height: 0 }}
        animate={isInView ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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

  return (
    <span ref={ref}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
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

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15
      }}
    >
      {children}
    </motion.div>
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

  return (
    <motion.span
      className={className}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        skewX: [0, 2, -2, 1, -1, 0],
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.span>
  )
}

// Particle system
export const ParticleField = ({
  count = 50,
  className = ''
}: {
  count?: number
  className?: string
}) => {
  const particles = Array.from({ length: count }, (_, i) => i)

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear'
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
  return (
    <motion.div
      className={`w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 ${className}`}
      animate={{
        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%",
                      "50% 50% 50% 50% / 50% 50% 50% 50%",
                      "70% 30% 30% 70% / 70% 70% 30% 30%",
                      "30% 70% 70% 30% / 30% 30% 70% 70%"],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

