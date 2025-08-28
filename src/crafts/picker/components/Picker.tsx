import { motion, transformValue, useScroll, useSpring } from 'motion/react'
import { type MutableRefObject, useRef } from 'react'

interface Props {
  onChange: (value: number | string | undefined) => void
  options: {
    key: string | number
    value: any
  }[]
}

export default function Picker({ onChange, options }: Props) {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>

  const { scrollYProgress, scrollY } = useScroll({
    container: ref
  })
  const y = useSpring(scrollY, {
    bounce: 0.1
  })
  const inverseY = transformValue(() => y.get() * -1)

  return (
    <div className="relative grid grid-cols-2">
      <div>
        <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-red-500"></div>
        <div
          className="h-40 snap-mandatory snap-always overflow-scroll"
          ref={ref}
        >
          <div>
            {options.map((option) => (
              <div
                key={option.key}
                onClick={() => onChange(option.value)}
                className="flex h-12 snap-center items-center select-none"
              >
                {option.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="relative h-40 overflow-hidden">
          <motion.div
            style={{
              translateY: inverseY,
              top: 0,
              position: 'absolute'
            }}
          >
            {options.map((option) => (
              <div
                key={option.key}
                onClick={() => onChange(option.value)}
                className="flex h-12 snap-center items-center select-none"
              >
                {option.value}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
