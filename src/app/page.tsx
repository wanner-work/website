import Header from '@/components/header/Header'
import Box from '@wanner.work/box'

export default function Page() {
  return (
    <Box width="full" align="center">
      <div className="fixed left-0 top-0 w-full">
        <Box width="small" className="mt-24 flex justify-center" align="center">
          <Header />
        </Box>
      </div>
    </Box>
  )
}
