'use client'

import PICKER from '@/crafts/picker/constants/PICKER'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Picker() {
  const ref = useRef<HTMLDivElement>(null)

  const [selected, setSelected] = useState<number | undefined>(undefined)
  const { scrollY } = useScroll({ container: ref })

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', () => {
        handlePosition()
      })
    }
  }, [ref])

  useEffect(() => {
    handlePosition()
  }, [])

  const handlePosition = () => {
    const y = scrollY.get() - (60 - 15)
    const height = ref.current?.clientHeight || 0
    const index = Math.round(
      (y + height / 2 - PICKER.itemHeight / 2) / PICKER.itemHeight
    )
    setSelected(index)
  }

  const handleClick = (index: number) => {
    setSelected(index)
    if (ref.current) {
      ref.current.scrollTo({
        top: index * PICKER.itemHeight - ref.current.clientHeight / 2,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="absolute left-0 top-0 z-10 h-5 w-full bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 h-5 w-full bg-gradient-to-t from-dark to-transparent" />
        <motion.div
          className="relative w-full snap-y snap-mandatory overflow-auto scroll-smooth bg-dark"
          style={{
            height: '100px',
            paddingTop: 'calc(60px - 15px)',
            paddingBottom: 'calc(60px - 15px)'
          }}
          ref={ref}
        >
          {Array(100)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                style={{
                  height: PICKER.itemHeight
                }}
                className={`flex cursor-pointer snap-center items-center justify-center rounded-lg transition ${
                  selected === i
                    ? 'font-bold text-light'
                    : 'scale-90 font-light text-light/70'
                }`}
                onTap={() => handleClick(i)}
              >
                {i}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  )
}
