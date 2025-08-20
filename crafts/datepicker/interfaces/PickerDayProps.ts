import PickerDayData from '@/crafts/datepicker/interfaces/PickerDayData'
import { Dayjs } from 'dayjs'

export default interface PickerDayProps extends PickerDayData {
  onDateSelect: (date: Dayjs) => void
}
