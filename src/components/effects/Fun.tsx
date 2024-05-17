'use client'

import { AnimatePresence, motion } from 'framer-motion'
import party from 'party-js'
import { useEffect, useRef } from 'react'

interface Props {}

export default function Fun({}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        confetti()
      }, 1000)
      ref.current.addEventListener('click', confetti)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', confetti)
      }
    }
  }, [ref])

  const confetti = () => {
    if (ref.current) {
      party.confetti(ref.current, {})
    }
  }

  return (
    <span className="cursor-pointer select-none" ref={ref}>
      <AnimatePresence>
        <motion.span
          className="bg-fun-gradient bg-clip-text text-transparent inline-block font-bold"
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
            delay: 1
          }}
        >
          fun
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
