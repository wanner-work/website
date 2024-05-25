'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Reveal({ children }: Props) {
  return (
    <div className="">
      <div className="relative">
        <span>{children}</span>
        <motion.span
          className="absolute bottom-0 right-0 z-10 h-full w-full scale-[200%] bg-black blur-lg"
          animate={{
            width: 0
          }}
          transition={{
            duration: 1.5
          }}
        />
        <motion.span
          className="absolute bottom-0 right-0 z-20 h-full w-full scale-[200%] blur-lg backdrop-blur-2xl"
          animate={{
            width: 0
          }}
          transition={{
            delay: 0.3,
            duration: 1.4
          }}
        />
      </div>
    </div>
  )
}
