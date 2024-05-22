import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Box
        className="mx-auto max-w-[850px] text-white text-sm mt-32 mb-4 md:mb-10"
        px="small"
      >
        <div className="flex justify-between items-center">
          <span className="opacity-80">Copyright © 2024</span>
          <span className="flex gap-3 items-center">
            <span className="opacity-80">
              <span className="translate-y-0.5 -translate-x-5 absolute">
                🇨🇭
              </span>
              wanner.work
            </span>
            <Logo size={50} />
          </span>
        </div>
        <div className="opacity-80 mt-3">
          <p>
            This page is owned and operated by Jonas Wanner under the name{' '}
            <span className="italic">wanner.work</span> and is a showcase of his
            work and projects.
          </p>
        </div>
        <div className="opacity-80 mt-6 flex justify-between">
          <Link className="underline" href="/imprint">
            Imprint
          </Link>
          <Link className="underline" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="underline" href="mailto:jonas@wanner.com">
            Contact
          </Link>
        </div>
      </Box>
    </footer>
  )
}
