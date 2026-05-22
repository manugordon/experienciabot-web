'use client'

import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

interface StaggerListProps {
  children: React.ReactNode
  className?: string
}

export function StaggerList({ children, className }: StaggerListProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerListProps) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
