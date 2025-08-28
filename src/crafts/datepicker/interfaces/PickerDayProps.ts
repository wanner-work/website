import { Dayjs } from 'dayjs'
import type PickerDayData from './PickerDayData'

export default interface PickerDayProps extends PickerDayData {
  onDateSelect: (date: Dayjs) => void
}
