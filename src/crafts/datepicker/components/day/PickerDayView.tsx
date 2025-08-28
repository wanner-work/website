import dayjs from 'dayjs'
import type PickerViewProps from '../../interfaces/PickerViewProps'
import PickerDay from './PickerDay'

export default function PickerDayView({ days, onDateSelect }: PickerViewProps) {
  return (
    <div>
      <div className="mb-3 grid grid-cols-7 text-sm select-none">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="text-light flex items-center justify-center p-1"
          >
            {dayjs().set('day', i).format('ddd')}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-sm select-none">
        {days.map((day) => (
          <PickerDay {...day} onDateSelect={onDateSelect} />
        ))}
      </div>
    </div>
  )
}
