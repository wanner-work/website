'use client'

import CraftContainer from '@/components/crafts/CraftContainer'
import Picker from '@/crafts/datepicker/components/picker/Picker'

export default function DatepickerCraft() {
  return (
    <CraftContainer
      title="a pretty datepicker"
      description="A datepicker that is pretty and works well on mobile and desktop because most of them are whack."
    >
      <Picker />
    </CraftContainer>
  )
}
