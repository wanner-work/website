'use client'

import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {}

export default function Beautiful({}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
    }
  }, [ref])

  return (
    <span className="relative select-none" ref={ref}>
      <span className="relative z-10">
        <span className="bg-beautiful-gradient bg-clip-text font-bold text-transparent">
          beautiful
        </span>
      </span>
      <motion.span
        className="absolute right-0 top-0 z-0"
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
        <SparklesIcon className="h-6 w-6 -translate-y-3 translate-x-4 animate-pulse text-orange-300" />
      </motion.span>
      <span className="absolute left-0 top-0 z-0 h-full w-full scale-110 bg-beautiful-gradient opacity-20 blur-xl" />
    </span>
  )
}
