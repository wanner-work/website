import PickerDayProps from '@/crafts/datepicker/interfaces/PickerDayProps'
import clsx from 'clsx'

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
        'flex cursor-pointer items-center justify-center p-2 font-mono text-light',
        isDisabled
          ? 'cursor-not-allowed text-light/50'
          : 'transition hover:scale-105 hover:font-bold active:scale-95'
      )}
    >
      {date.date()}
    </div>
  )
}
