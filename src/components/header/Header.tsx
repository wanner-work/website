'use client'

import Appear from '@/components/effects/Appear'
import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="">
      <Box
        className="mx-auto max-w-[850px] flex justify-between items-center flex-col md:flex-row"
        px="small"
      >
        <Appear rotate={-8} scale={0.8}>
          <Link href={'/'}>
            <div className="pt-5 md:pt-0">
              <Logo size={100} />
            </div>
          </Link>
        </Appear>

        <div className="flex gap-4 md:gap-8 font-light mt-2 md:mt-0">
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
