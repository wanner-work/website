'use client'

import { AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import InboxItem from './InboxItem'

export default function InboxCraft() {
  const [amount, setAmount] = useState(1)
  const [deletedAmount, setDeletedAmount] = useState(0)

  useEffect(() => {
    if (deletedAmount === 8) {
      setAmount((prev) => prev + 1)
      setDeletedAmount(0)
    }
  }, [deletedAmount])

  return (
    <AnimatePresence>
      <div className="overflow-hidden rounded-lg">
        {Array(8 * amount)
          .fill(0)
          .map((_, i) => (
            <InboxItem
              key={i}
              index={i}
              onClosed={() => setDeletedAmount((prev) => prev + 1)}
            />
          ))}
      </div>
    </AnimatePresence>
  )
}
