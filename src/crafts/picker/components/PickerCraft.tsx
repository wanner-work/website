'use client'

import CraftContainer from '@/components/crafts/CraftContainer'
import Picker from '@/crafts/picker/components/Picker'

export default function PickerCraft() {
  return (
    <CraftContainer
      title="a pretty picker"
      description="A picker like on ios which works well on mobile and desktop."
    >
      <Picker />
    </CraftContainer>
  )
}
