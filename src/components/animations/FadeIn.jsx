import React from 'react'
import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, duration = 0.6, className = '', direction = 'up' }) {
  const dirs = {
    up:    { y: 28, x: 0 },
    down:  { y: -28, x: 0 },
    left:  { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none:  { x: 0, y: 0 },
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
