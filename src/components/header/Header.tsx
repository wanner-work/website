'use client'

import Appear from '@/components/effects/Appear'
import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="">
      <Box
        width="medium"
        align="center"
        className="flex flex-col items-center justify-between md:flex-row"
        px="medium"
      >
        <Appear rotate={-8} scale={0.8}>
          <Link href={'/'}>
            <div className="pt-5 md:pt-0">
              <Logo size={100} />
            </div>
          </Link>
        </Appear>

        <div className="mt-2 flex gap-4 font-light md:mt-0 md:gap-8">
          <Appear rotate={-8} scale={0.8} delay={0.5}>
            <Link href={'/projects'}>
              <button className="text-white">Projects</button>
            </Link>
          </Appear>
          <Appear rotate={-8} scale={0.8} delay={0.7}>
            <Link href={'/packages'}>
              <button className="text-white">Packages</button>
            </Link>
          </Appear>
        </div>
      </Box>
    </header>
  )
}
