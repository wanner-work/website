import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import Link from 'next/link'
import SimpleReveal from '../effects/SimpleReveal'

export default function Footer() {
  return (
    <SimpleReveal>
      <footer>
        <Box
          width="medium"
          align="center"
          className="mb-6 mt-32 text-sm text-white md:mb-10"
          px="medium"
        >
          <div className="flex items-center justify-between">
            <span className="opacity-80">Copyright © 2024</span>
            <span className="flex items-center gap-3">
              <span className="opacity-80">
                <span className="absolute -translate-x-5 translate-y-0.5">
                  🇨🇭
                </span>
                wanner.work
              </span>
              <Logo size={50} />
            </span>
          </div>
          <div className="mt-3 opacity-80">
            <p>
              This page is owned and operated by Jonas Wanner under the name{' '}
              <span className="italic">wanner.work</span> and is a showcase of
              his work and projects.
            </p>
          </div>
          <div className="mt-6 flex justify-between opacity-80">
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
    </SimpleReveal>
  )
}
