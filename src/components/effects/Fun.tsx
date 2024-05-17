'use client'

import party from 'party-js'
import { ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Fun({ children }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        confetti()
      }, 1500)
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
      {children}
    </span>
  )
}
