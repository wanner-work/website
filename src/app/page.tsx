'use client'

import Box from '@wanner.work/box'

export default function Page() {
  return (
    <div className="noise bg-[#f7f7f7]">
      <Box
        width="full"
        align="center"
        className="noise flex h-[800px] flex-col items-center justify-center rounded-b-[140px] border border-[#e5e5e5] bg-[#edecec]"
      >
        <div className="mb-10 rounded-full border border-[#e5e5e5]">
          <img
            src="https://avatars.githubusercontent.com/u/38656104?v=4"
            alt=""
            className="h-[120px] w-[120px] rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="relative max-w-[440px] text-center">
          <p className="w-full bg-gradient-to-r from-[#242424] to-[#4b4b4b]/40 bg-clip-text text-5xl font-bold leading-[55px] text-[#242424] text-transparent">
            The web should be beautiful and fun.
          </p>
        </div>
        <button className="mt-14 rounded-full bg-[#242424] px-12 py-5 text-sm font-bold text-[#f7f7f7]">
          Latest Project
        </button>
      </Box>
      <Box
        width="full"
        align="center"
        className="noise relative z-10 flex h-[300px] flex-col items-center justify-center rounded-b-[140px] border-b border-[#d9d9d9] bg-[#f7f7f7]"
      ></Box>
      <Box
        width="full"
        align="center"
        className="noise relative z-0 -mt-[140px] flex h-[800px] flex-col items-center justify-center rounded-b-[140px] border border-[#e5e5e5] bg-[#edecec]"
      ></Box>
    </div>
  )
}
