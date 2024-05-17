'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Appear({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: -4
      }}
      animate={{
        opacity: 1,
        rotate: 0
      }}
      transition={{
        delay: 3.5,
        duration: 1
      }}
    >
      {children}
    </motion.div>
  )
}
