'use client'

import Appear from '@/components/effects/Appear'
import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="">
      <Box
        className="mx-auto max-w-[850px] flex justify-between items-center"
        px="medium"
      >
        <Appear rotate={-8} scale={0.8}>
          <Link href={'/'}>
            <Logo size={100} />
          </Link>
        </Appear>

        <div className="flex gap-8 font-light">
          <Appear rotate={-8} scale={0.8} delay={0.5}>
            <Link href={'/projects'}>
              <button className="text-white">Projects</button>
            </Link>
          </Appear>
          <Appear rotate={-8} scale={0.8} delay={0.7}>
            <Link href={'/blog'}>
              <button className="text-white">Blog</button>
            </Link>
          </Appear>
          <Appear rotate={-8} scale={0.8} delay={0.9}>
            <Link href={'/packages'}>
              <button className="text-white">Packages</button>
            </Link>
          </Appear>
        </div>
      </Box>
    </header>
  )
}
