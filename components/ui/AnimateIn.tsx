'use client'

import { motion } from 'framer-motion'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimateInProps) {
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 40 }
      : direction === 'left'
        ? { opacity: 0, x: -28 }
        : { opacity: 0 }

  const animate =
    direction === 'up' ? { opacity: 1, y: 0 } : direction === 'left' ? { opacity: 1, x: 0 } : { opacity: 1 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
