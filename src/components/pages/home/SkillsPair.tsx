import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import type SkillsItem from '../../../interfaces/skills/SkillsItem'
import getFadeOverlayClassName from '../../../methods/ui/getFadeOverlayClassName'

interface Props {
  item1: SkillsItem
  item2: SkillsItem
  index: number
}

export default function SkillsPair({ item1, item2, index }: Props) {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 2 ? 1 : 2))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const active1 = useMemo(() => active === 1, [active])
  const active2 = useMemo(() => active === 2, [active])

  const delay = useMemo(() => 0.2 * index, [index])
  const duration = 1
  const yTranslation = 30

  return (
    <li className="relative flex size-[42px] items-center justify-center transition hover:opacity-80 active:scale-95">
      <AnimatePresence>
        {active1 && (
          <motion.a
            title={item1.title}
            href={item1.link}
            target="_blank"
            initial={{ opacity: 0, y: yTranslation, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -yTranslation, filter: 'blur(4px)' }}
            transition={{ delay, duration, ease: [0.873, 0.236, 0.179, 0.918] }}
            key={item1.title}
            className="text-dark dark:text-light absolute text-2xl"
          >
            <div
              className={getFadeOverlayClassName('absolute inset-0 size-full')}
            />
            <item1.svg height="42" />
          </motion.a>
        )}
        {active2 && (
          <motion.a
            title={item2.title}
            href={item2.link}
            target="_blank"
            initial={{ opacity: 0, y: yTranslation, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -yTranslation, filter: 'blur(4px)' }}
            transition={{ delay, duration, ease: [0.873, 0.236, 0.179, 0.918] }}
            key={item2.title}
            className="text-dark dark:text-light absolute text-2xl"
          >
            <div
              className={getFadeOverlayClassName('absolute inset-0 size-full')}
            />
            <item2.svg height="42" />
          </motion.a>
        )}
      </AnimatePresence>
    </li>
  )
}
