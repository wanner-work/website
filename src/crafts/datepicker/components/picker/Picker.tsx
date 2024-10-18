import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

interface Props {}

export default function Picker({}: Props) {
  const [date, setDate] = useState<Dayjs | null>(dayjs)
  const [month, setMonth] = useState<number>(dayjs().month())
  const [year, setYear] = useState<number>(dayjs().year())

  const nextMonth = () => {
    const date = dayjs().set('month', month).set('year', year).add(1, 'month')
    setMonth(date.month())
    setYear(date.year())
  }

  const prevMonth = () => {
    const date = dayjs()
      .set('month', month)
      .set('year', year)
      .subtract(1, 'month')
    setMonth(date.month())
    setYear(date.year())
  }

  const selectDate = (date: number) => {
    setDate(dayjs().set('date', date).set('month', month).set('year', year))
  }

  return (
    <div className="w-picker m-auto rounded-lg bg-dark p-2">
      <div className="mb-2 flex items-center justify-between px-3 py-2">
        <div
          onClick={prevMonth}
          className="cursor-pointer transition hover:scale-105 active:scale-95"
        >
          <ChevronLeftIcon className="h-5 w-5 text-light" />
        </div>
        <p className="select-none font-bold text-light">
          {dayjs().set('month', month).format('MMMM')} {year}
        </p>
        <div
          onClick={nextMonth}
          className="cursor-pointer transition hover:scale-105 active:scale-95"
        >
          <ChevronRightIcon className="h-5 w-5 text-light" />
        </div>
      </div>
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
        {Array.from({ length: 42 }).map((_, i) => (
          <div
            key={i}
            onClick={() => selectDate(i)}
            className="flex cursor-pointer items-center justify-center p-2 text-light transition hover:scale-105 hover:font-bold active:scale-95"
          >
            {dayjs().set('date', i).format('D')}
          </div>
        ))}
      </div>
    </div>
  )
}
