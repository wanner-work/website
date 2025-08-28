import dayjs, { type Dayjs } from 'dayjs'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import type PickerDayData from '../interfaces/PickerDayData'
import PickerDayView from './day/PickerDayView'
import PickerMonthView from './month/PickerMonthView'
import PickerYearView from './year/PickerYearView'

interface Props {}

export default function DatePicker({}: Props) {
  const [view, setView] = useState<'day' | 'month' | 'year'>('day')
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

  const handleDateSelect = (date: Dayjs) => {
    setDate(date)
  }

  const handleMonthSelect = (month: number) => {
    setMonth(month)
  }

  const handleYearSelect = (year: number) => {
    setYear(year)
  }

  const days = useMemo((): PickerDayData[] => {
    const days: PickerDayData[] = []

    const length = dayjs().set('month', month).set('year', year).daysInMonth()

    const start = dayjs()
      .set('month', month)
      .set('year', year)
      .startOf('month')
      .day()

    const end = dayjs()
      .set('month', month)
      .set('year', year)
      .endOf('month')
      .day()

    Array(start + length + (6 - end))
      .fill(0)
      .forEach((_, i) => {
        const day = dayjs()
          .set('month', month)
          .subtract(1, 'month')
          .set('year', year)
          .endOf('month')
          .add(i - start + 1, 'day')

        days.push({
          date: day,
          isSelected: false,
          isDisabled: day.month() !== month,
          isToday: false
        })
      })
    return days
  }, [month, year])

  return (
    <div className="w-picker bg-dark m-auto rounded-lg p-2">
      <div className="mb-2 flex items-center justify-between px-2 py-2">
        <p className="text-light font-bold select-none">
          <span onClick={() => setView('month')}>
            {dayjs().set('month', month).format('MMMM')}
          </span>{' '}
          <span onClick={() => setView('year')}>{year}</span>
        </p>
        <div className="flex items-center gap-3">
          <div
            onClick={prevMonth}
            className="cursor-pointer transition hover:scale-105 active:scale-95"
          >
            <ChevronLeftIcon className="text-light h-5 w-5" />
          </div>
          <div
            onClick={nextMonth}
            className="cursor-pointer transition hover:scale-105 active:scale-95"
          >
            <ChevronRightIcon className="text-light h-5 w-5" />
          </div>
        </div>
      </div>
      {view === 'day' && (
        <PickerDayView
          month={month}
          year={year}
          days={days}
          onDateSelect={handleDateSelect}
          onMonthSelect={handleMonthSelect}
          onYearSelect={handleYearSelect}
        />
      )}
      {view === 'month' && (
        <PickerMonthView
          month={month}
          year={year}
          days={days}
          onDateSelect={handleDateSelect}
          onMonthSelect={handleMonthSelect}
          onYearSelect={handleYearSelect}
        />
      )}
      {view === 'year' && (
        <PickerYearView
          month={month}
          year={year}
          days={days}
          onDateSelect={handleDateSelect}
          onMonthSelect={handleMonthSelect}
          onYearSelect={handleYearSelect}
        />
      )}
    </div>
  )
}
