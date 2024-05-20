'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  delay?: number
  rotate?: number
  scale?: number
  duration?: number
  display?: 'inline-block' | 'block'
}

export default function Appear({
  children,
  delay = 0,
  rotate = -4,
  scale = 1,
  duration = 0.3,
  display = 'inline-block'
}: Props) {
  return (
    <motion.span
      className={display}
      initial={{
        opacity: 0,
        rotate: rotate,
        scale: scale
      }}
      animate={{
        opacity: 1,
        rotate: 0,
        scale: 1
      }}
      transition={{
        delay: delay,
        duration: duration
      }}
    >
      {children}
    </motion.span>
  )
}
