import DatepickerCraft from '@/crafts/datepicker/components/DatepickerCraft'
import InboxCraft from '@/crafts/inbox/components/InboxCraft'
import PickerCraft from '@/crafts/picker/components/PickerCraft'
import Box from '@wanner.work/box'
import Logo from '../../../docs/Logo'

export default function Page() {
  return (
    <Box width="full">
      <Box width="medium" px="large" className="mt-10 md:mt-20" align="center">
        <div className="mb-8">
          <Logo size={40} />
        </div>

        <PickerCraft />
        <DatepickerCraft />
        <InboxCraft />
      </Box>
    </Box>
  )
}
