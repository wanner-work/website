import PickerCraft from '@/crafts/picker/components/PickerCraft'
import type CraftEntry from '../../interfaces/crafts/CraftEntry'

const CraftStore: {
  entries: CraftEntry[]
} = {
  entries: [
    {
      title: 'Picker',
      description: 'picker picker picker',
      component: PickerCraft
    }
  ]
}

export default CraftStore
