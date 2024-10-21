'use client'

import PICKER from '@/crafts/picker/constants/PICKER'
import clsx from 'clsx'
import { motion, useScroll } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

export default function Picker() {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>

  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true
  })

  const [selected, setSelected] = useState<number | undefined>(undefined)

  const { scrollY } = useScroll({ container: ref })

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scrollend', () => {
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

    ref.current.scrollTo({
      top: index * PICKER.itemHeight,
      behavior: 'smooth'
    })
  }

  const handleSnap = () => {
    if (ref.current) {
      const y = scrollY.get() - (60 - 15)
      const height = ref.current.clientHeight
      const index = Math.round(
        (y + height / 2 - PICKER.itemHeight / 2) / PICKER.itemHeight
      )
      ref.current.scrollTo({
        top: index * PICKER.itemHeight - ref.current.clientHeight / 2,
        behavior: 'smooth'
      })

      requestAnimationFrame(() => {
        ref.current.addEventListener(
          'scrollend',
          () => {
            handlePosition()
          },
          { once: true }
        )
      })
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="absolute left-0 top-0 z-10 h-5 w-full bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 h-5 w-full bg-gradient-to-t from-dark to-transparent" />
        <div
          className="lex scrollbar-hide flex-col items-center overflow-y-scroll rounded-lg bg-dark shadow-lg"
          style={{
            height: '120px',
            paddingTop: 'calc(60px - 15px)',
            paddingBottom: 'calc(60px - 15px)'
          }}
          ref={ref}
          {...events}
        >
          {Array(100)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                style={{
                  height: PICKER.itemHeight
                }}
                className={clsx(
                  'flex scale-90 cursor-pointer select-none items-center justify-center rounded-lg transition',
                  selected === i
                    ? 'font-bold text-light'
                    : 'font-light text-light/70'
                )}
              >
                {i}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
