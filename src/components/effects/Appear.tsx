'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  delay?: number
}

export default function Appear({ children, delay }: Props) {
  return (
    <motion.span
      className="inline-block"
      initial={{
        opacity: 0,
        rotate: -4
      }}
      animate={{
        opacity: 1,
        rotate: 0
      }}
      transition={{
        delay: delay || 3.5,
        duration: 1
      }}
    >
      {children}
    </motion.span>
  )
}
