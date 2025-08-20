import PickerViewProps from '@/crafts/datepicker/interfaces/PickerViewProps'
import Picker from '@/crafts/picker/components/Picker'
import { useMemo, useState } from 'react'

export default function PickerMonthView({
  year,
  onYearSelect
}: PickerViewProps) {
  const [selected, setSelected] = useState<number | string | undefined>(year)

  const options = useMemo(() => {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ].map((month, i) => {
      return {
        key: i,
        value: month
      }
    })
  }, [])

  return (
    <div className="relative">
      <Picker onChange={setSelected} options={options} />
    </div>
  )
}
