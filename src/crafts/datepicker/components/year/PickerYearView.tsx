import PickerYear from '@/crafts/datepicker/components/year/PickerYear'
import PickerViewProps from '@/crafts/datepicker/interfaces/PickerViewProps'
import { useEffect, useRef, useState } from 'react'

export default function PickerYearView({
  year,
  onYearSelect
}: PickerViewProps) {
  const [yearInView, setYearInView] = useState(year)

  const count = 50
  const start = year + count / 2

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const element = ref.current.querySelector<HTMLDivElement>(
        `[data-index="${year}"]`
      )
      if (element) {
        ref.current.scrollTo(
          0,
          ref.current.scrollHeight -
            element.offsetTop -
            ref.current.clientHeight / 2
        )
      }
    }
  }, [ref, year])

  return (
    <div className="h-year relative">
      <div className="absolute top-0 z-10 h-5 w-full bg-gradient-to-b from-dark to-transparent" />
      <div
        ref={ref}
        className="relative left-0 top-0 h-full snap-y snap-mandatory overflow-y-auto"
      >
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <PickerYear
              key={index}
              index={index}
              year={yearInView}
              start={start}
            />
          ))}
      </div>
      <div className="absolute bottom-0 h-5 w-full bg-gradient-to-t from-dark to-transparent" />
    </div>
  )
}
