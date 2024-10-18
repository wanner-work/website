'use client'

import Crafts from '@/components/crafts/Crafts'
import Header from '@/components/header/Header'
import Box from '@wanner.work/box'

interface Props {}

export default function HomeLayout({}: Props) {
  return (
    <Box width="full" align="center">
      <div className="fixed left-0 top-0 w-full">
        <Box width="small" className="mt-24 flex justify-center" align="center">
          <Header />
        </Box>
      </div>

      <Box className="mt-80">
        <Crafts />
      </Box>
    </Box>
  )
}
