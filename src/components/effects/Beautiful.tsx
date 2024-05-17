'use client'

import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Beautiful({ children }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
    }
  }, [ref])

  return (
    <span className="select-none relative" ref={ref}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 right-0 z-0"
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: -45
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0
        }}
        transition={{
          duration: 1,
          delay: 2
        }}
      >
        <SparklesIcon className="text-orange-300 w-6 h-6 rotate-[28deg] -translate-y-2 translate-x-2 animate-pulse" />
      </motion.span>
      <span className="bg-beautiful-gradient opacity-20 scale-110 blur-xl top-0 left-0 absolute h-full w-full z-0" />
    </span>
  )
}
