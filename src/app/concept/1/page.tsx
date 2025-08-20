'use client'

import Header from '@/components/header/Header'
import useScrollPosition from '@/hooks/animate/useScrollPosition'
import Box from '@wanner.work/box'
import { motion } from 'motion/react'

export default function Page() {
  const { y } = useScrollPosition()

  return (
    <Box width="full" align="center">
      <div className="fixed left-0 top-0 w-full">
        <Box width="small" className="mt-24 flex justify-center" align="center">
          <Header />
        </Box>
      </div>
      <div className="fixed flex h-dvh w-full items-center justify-center">
        <motion.div
          animate={{
            scale: y < 200 ? 0.5 : 1,
            x: 400 - y,
            filter: `blur(${y < 200 ? 40 : 0}px)`
          }}
          className="absolute h-[500px] w-[400px] bg-light"
          transition={{
            duration: 0,
            ease: 'linear'
          }}
        >
          {y}
        </motion.div>

        <motion.div
          animate={{
            scale: y < 600 ? 0.5 : 1,
            x: 800 + 80 - y,
            filter: `blur(${y < 600 ? 40 : 0}px)`
          }}
          className="absolute h-[500px] w-[400px] bg-light"
          transition={{
            duration: 0,
            ease: 'linear'
          }}
        >
          {y}
        </motion.div>
      </div>
      <div className="h-[400vh]" />
    </Box>
  )
}
