import { faker } from '@faker-js/faker/locale/en'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { TrashIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useMemo, useState } from 'react'
import ANIMATION from '../constants/ANIMATION'
import useDragAction from '../hooks/useDragAction'

interface Props {
  index: number
  onClosed: () => void
}

const SEED = {
  id: 12345
}

export default function InboxItem({ index, onClosed }: Props) {
  const [isDeleted, setIsDeleted] = useState(false)

  const title = useMemo(() => {
    faker.seed(SEED.id + index)
    return faker.word.words(3)
  }, [])

  const description = useMemo(() => {
    faker.seed(SEED.id + index)
    return `${faker.lorem.paragraph(2)}...`
  }, [])

  const date = useMemo(() => {
    faker.seed(SEED.id + index)
    return dayjs(faker.date.past()).format('DD. MMMM')
  }, [])

  const { onDragEnd, onDragStart, xMotionValue, x } = useDragAction({
    actionLeft: () => {},
    actionRight: () => {
      setIsDeleted(true)
      onClosed()
    }
  })

  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{
        x: -100,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        delay: (index % 8) * 0.2
      }}
    >
      <motion.div
        animate={{
          height: isDeleted ? 0 : 'auto'
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          animate={{
            translateX: isDeleted ? '-100%' : 0
          }}
          transition={{
            ease: 'linear',
            duration: 0.2
          }}
          style={{ x: xMotionValue }}
          className="bg-dark mb-0.25 p-4"
        >
          <div className="mb-0.25 flex items-center justify-between gap-3">
            <p className="text-light truncate text-sm lowercase">{title}</p>
            <p className="text-light/70 truncate text-[12px]">{date}</p>
          </div>
          <p className="text-light/70 text-[12px] lowercase">{description}</p>
        </motion.div>
      </motion.div>
      <div
        className={clsx(
          'absolute top-0 h-[calc(100%-1px)] w-full',
          x < 0 && 'bg-red-500'
        )}
      />
      <div className="absolute top-0 left-0 h-full"></div>
      <div className="absolute top-0 right-0 flex h-full items-center">
        <motion.div
          className="px-5"
          animate={{
            scale: x <= ANIMATION.thresholdLeft ? 1 : 0.7
          }}
        >
          <TrashIcon className="text-light h-5 w-5" />
        </motion.div>
      </div>
    </motion.div>
  )
}
