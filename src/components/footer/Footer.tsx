import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'

export default function Footer() {
  return (
    <footer>
      <Box
        className="mx-auto max-w-[850px] text-white text-sm mt-32 mb-8"
        px="medium"
      >
        <div className="flex justify-between items-center">
          <span className="opacity-80">Copyright © 2024</span>
          <span className="flex gap-3 items-center">
            <span className="opacity-80">wanner.work</span>
            <Logo size={50} />
          </span>
        </div>
        <div className="opacity-80 mt-3">
          <p>
            This page is owned and operated by Jonas Wanner and is a showcase of
            his work and projects. Questions and inquiries can be sent to
            jonas@wanner.com
          </p>
        </div>
      </Box>
    </footer>
  )
}
