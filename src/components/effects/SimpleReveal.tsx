'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function SimpleReveal({ children }: Props) {
  return (
    <motion.div
      initial={{
        y: -10,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        delay: 0.3
      }}
    >
      {children}
    </motion.div>
  )
}
