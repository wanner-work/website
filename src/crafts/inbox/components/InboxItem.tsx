import SEED from '@/constants/SEED'
import ANIMATION from '@/crafts/inbox/constants/ANIMATION'
import useDragAction from '@/crafts/inbox/hooks/useDragAction'
import { faker } from '@faker-js/faker/locale/en'
import { TrashIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

interface Props {
  index: number
  onClosed: () => void
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
        <div
          className={clsx(
            'absolute top-0 h-[calc(100%-1px)] w-full',
            x < 0 && 'bg-red-500'
          )}
        />
        <div className="absolute left-0 top-0 h-full"></div>
        <div className="absolute right-0 top-0 flex h-full items-center">
          <motion.div
            className="px-5"
            animate={{
              scale: x <= ANIMATION.thresholdLeft ? 1 : 0.7
            }}
          >
            <TrashIcon className="h-5 w-5 text-light" />
          </motion.div>
        </div>

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
          className="mb-0.25 bg-dark p-4"
        >
          <div className="mb-1 flex items-center justify-between gap-3">
            <p className="truncate lowercase text-light">{title}</p>
            <p className="truncate text-sm text-light/70">{date}</p>
          </div>
          <p className="text-sm lowercase text-light/70">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
