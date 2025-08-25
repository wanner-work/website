import { useEffect, useMemo, useState, type FunctionComponent } from "react";
import getFadeOverlay from "../../methods/getFadeOverlay";
import { AnimatePresence, motion } from "motion/react";
import type SkillsItem from "../../interfaces/skills/SkillsItem";
import { title } from "motion/react-m";

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

   return <li className="relative h-8 hover:opacity-80 transition active:scale-95 w-32 flex justify-center items-center">
         <AnimatePresence>
        {active1 && <motion.a href={item1.link} target="_blank" initial={{ opacity: 0, y: yTranslation, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -yTranslation, filter: 'blur(4px)' }} transition={{ delay, duration, ease: [0.873, 0.236, 0.179, 0.918] }} key={item1.title} className="text-dark text-2xl absolute">
          <div className={getFadeOverlay('absolute inset-0 size-full')} />
          <item1.svg />
      </motion.a>}
       {active2 && <motion.a href={item2.link} target="_blank" initial={{ opacity: 0, y: yTranslation, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -yTranslation, filter: 'blur(4px)' }} transition={{ delay, duration, ease: [0.873, 0.236, 0.179, 0.918] }} key={item2.title} className="absolute text-dark text-2xl">
          <div className={getFadeOverlay('absolute inset-0 size-full')} />
          <item2.svg />
      </motion.a>}
      </AnimatePresence>
      </li>
      }