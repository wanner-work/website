import type PickerDayData from './PickerDayData'
import { Dayjs } from 'dayjs'

export default interface PickerViewProps {
  days: PickerDayData[]
  month: number
  year: number
  onDateSelect: (date: Dayjs) => void
  onMonthSelect: (month: number) => void
  onYearSelect: (year: number) => void
}
