import PickerDayView from '@/crafts/datepicker/components/day/PickerDayView'
import PickerMonthView from '@/crafts/datepicker/components/month/PickerMonthView'
import PickerYearView from '@/crafts/datepicker/components/year/PickerYearView'
import PickerDayData from '@/crafts/datepicker/interfaces/PickerDayData'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import dayjs, { Dayjs } from 'dayjs'
import { useMemo, useState } from 'react'

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
    <div className="m-auto w-picker rounded-lg bg-dark p-2">
      <div className="mb-2 flex items-center justify-between px-2 py-2">
        <p className="select-none font-bold text-light">
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
            <ChevronLeftIcon className="h-5 w-5 text-light" />
          </div>
          <div
            onClick={nextMonth}
            className="cursor-pointer transition hover:scale-105 active:scale-95"
          >
            <ChevronRightIcon className="h-5 w-5 text-light" />
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
