'use client'

import CraftContainer from '@/components/crafts/CraftContainer'
import InboxItem from '@/crafts/inbox/components/InboxItem'
import { AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

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
    <CraftContainer
      title="Drag to delete"
      description="Drag the items from right to left over a certain threshold to delete them with a nice animation."
    >
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
    </CraftContainer>
  )
}
