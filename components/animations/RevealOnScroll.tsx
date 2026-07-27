'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  distance?: number
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  distance = 28,
}: Props) {
  const reduceMotion = useReducedMotion()
  const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0
  const y = direction === 'up' ? distance : 0

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14, margin: '0px 0px -45px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
