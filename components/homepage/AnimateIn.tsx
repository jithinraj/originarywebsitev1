'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.12, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
