import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import Picker from '../../../picker/components/Picker'
import type PickerViewProps from '../../interfaces/PickerViewProps'

export default function PickerYearView({
  year,
  onYearSelect
}: PickerViewProps) {
  const [selected, setSelected] = useState<number | string | undefined>(year)

  const options = useMemo(() => {
    return Array(100)
      .fill(0)
      .map((_, i) => {
        return {
          key: dayjs().year() - 50 + i,
          value: dayjs().year() - 50 + i
        }
      })
  }, [])

  return (
    <div className="relative">
      <Picker onChange={setSelected} options={options} />
      <button className="bg-light mt-3 w-full rounded p-1 text-center text-sm font-bold">
        Select
      </button>
    </div>
  )
}
