import clsx from 'clsx'

interface Props {
  index: number
  start: number
  year: number
}

export default function PickerYear({ index, start, year }: Props) {
  return (
    <div data-index={start - index} className="shrink-0 snap-center py-3">
      <div
        className={clsx(
          'text-light text-center',
          year === start - index ? '' : 'scale-90 opacity-70'
        )}
      >
        {start - index}
      </div>
    </div>
  )
}
