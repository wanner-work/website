'use client'

import {motion, useScroll} from 'framer-motion'
import Logo from '../../../docs/Logo'
import {useEffect, useMemo} from 'react'
import useScrollPosition from '@/hooks/animate/useScrollPosition'

interface Props {
}

export default function Header ({}: Props) {
  const { y } = useScrollPosition()

  const blur = useMemo(() => {
    const blur = Math.floor(y / 40)

    console.log(blur)

    if (blur > 10) {
      return 10
    } else {
      return blur
    }
  }, [y])

  return <motion.div animate={{
    filter: `blur(${blur}px)`
  }}>
    <Logo size={120} />
  </motion.div>
}