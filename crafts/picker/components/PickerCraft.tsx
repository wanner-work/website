'use client'

import CraftContainer from '@/components/crafts/CraftContainer'
import Picker from '@/crafts/picker/components/Picker'
import { useMemo } from 'react'

export default function PickerCraft() {
  const options = useMemo(() => {
    return Array(100)
      .fill(0)
      .map((_, i) => {
        return {
          key: i.toString(),
          value: i.toString()
        }
      })
  }, [])

  return (
    <CraftContainer
      title="a pretty picker"
      description="A picker like on ios which works well on mobile and desktop."
    >
      <Picker onChange={() => {}} options={options} />
    </CraftContainer>
  )
}
