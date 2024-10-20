'use client'

import CraftContainer from '@/components/crafts/CraftContainer'
import Picker from '@/crafts/picker/components/Picker'

export default function PickerCraft() {
  return (
    <CraftContainer
      title="a pretty picker"
      description="A picker that is pretty and works well on mobile and desktop because most of them are whack."
    >
      <Picker />
    </CraftContainer>
  )
}
