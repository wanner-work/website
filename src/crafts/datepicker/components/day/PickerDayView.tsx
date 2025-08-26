import PickerDay from './PickerDay'
import type PickerViewProps from '../../interfaces/PickerViewProps'
import dayjs from 'dayjs'

export default function PickerDayView({ days, onDateSelect }: PickerViewProps) {
  return (
    <div>
      <div className="mb-3 grid select-none grid-cols-7 text-sm">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-1 text-light"
          >
            {dayjs().set('day', i).format('ddd')}
          </div>
        ))}
      </div>
      <div className="grid select-none grid-cols-7 text-sm">
        {days.map((day) => (
          <PickerDay {...day} onDateSelect={onDateSelect} />
        ))}
      </div>
    </div>
  )
}
