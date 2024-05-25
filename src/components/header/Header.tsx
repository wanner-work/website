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
        className="flex items-center justify-between py-4 md:py-8"
        px="medium"
      >
        <Appear rotate={-8} scale={0.8}>
          <Link href={'/'}>
            <div className="md:hidden">
              <Logo size={40} />
            </div>
            <div className="hidden md:block">
              <Logo size={60} />
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
