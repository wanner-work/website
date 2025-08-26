import { Dayjs } from 'dayjs'

export default interface PickerDayData {
  date: Dayjs
  isSelected: boolean
  isDisabled: boolean
  isToday: boolean
}
