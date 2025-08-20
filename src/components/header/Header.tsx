'use client'

import useScrollPosition from '@/hooks/animate/useScrollPosition'
import { motion } from 'motion/react'
import { useMemo } from 'react'
import Logo from '../core/Logo'

interface Props {}

export default function Header({}: Props) {
  const { y } = useScrollPosition()

  const blur = useMemo(() => {
    const blur = Math.floor(y / 40)

    if (blur > 10) {
      return 10
    } else {
      return blur
    }
  }, [y])

  return (
    <motion.div
      animate={{
        filter: `blur(${blur}px)`
      }}
    >
      <Logo size={120} />
    </motion.div>
  )
}
