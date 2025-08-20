import PICKER from '@/crafts/picker/constants/PICKER'
import clsx from 'clsx'
import { motion, useScroll } from 'motion/react'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

interface Props {
  onChange: (value: number | string | undefined) => void
  options: {
    key: string | number
    value: any
  }[]
}

export default function Picker({ onChange, options }: Props) {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>

  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true
  })

  const [selected, setSelected] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (selected) {
      onChange(options[selected].value)
    }
  }, [selected])

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

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="absolute left-0 top-0 z-10 h-5 w-full bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 h-5 w-full bg-gradient-to-t from-dark to-transparent" />
        <div
          className="scrollbar-hidden flex-col items-center overflow-y-scroll rounded-lg bg-dark shadow-lg"
          style={{
            height: '120px',
            paddingTop: 'calc(60px - 15px)',
            paddingBottom: 'calc(60px - 15px)'
          }}
          ref={ref}
          {...events}
        >
          {options.map((option, index) => (
            <motion.div
              key={option.key}
              style={{
                height: PICKER.itemHeight
              }}
              className={clsx(
                'flex cursor-pointer select-none items-center justify-center rounded-lg text-sm transition',
                selected === index
                  ? 'font-bold text-light'
                  : 'font-light text-light/70'
              )}
            >
              {option.value}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
