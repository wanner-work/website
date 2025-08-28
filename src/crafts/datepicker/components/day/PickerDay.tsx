import clsx from 'clsx'
import type PickerDayProps from '../../interfaces/PickerDayProps'

export default function PickerDay({
  date,
  isDisabled,
  onDateSelect
}: PickerDayProps) {
  return (
    <div
      key={date.format('DD-MM-YYYY')}
      onClick={() => onDateSelect(date)}
      className={clsx(
        'text-light flex cursor-pointer items-center justify-center p-2 font-mono',
        isDisabled
          ? 'text-light/50 cursor-not-allowed'
          : 'transition hover:scale-105 hover:font-bold active:scale-95'
      )}
    >
      {date.date()}
    </div>
  )
}
