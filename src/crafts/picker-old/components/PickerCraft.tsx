import { useMemo } from 'react'
import Picker from './Picker'

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

  return <Picker onChange={() => {}} options={options} />
}
