'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Reveal({ children }: Props) {
  return (
    <div className="-mx-10 -mt-20 -mb-14">
      <div className="relative overflow-hidden p-10 pt-20 pb-14">
        <span>{children}</span>
        <motion.span
          className="h-full w-full absolute bottom-0 right-0 z-10 bg-black blur-lg scale-[200%]"
          animate={{
            width: 0
          }}
          transition={{
            duration: 1.5
          }}
        />
        <motion.span
          className="h-full w-full absolute bottom-0 right-0 z-20 backdrop-blur-2xl blur-lg scale-[200%]"
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
