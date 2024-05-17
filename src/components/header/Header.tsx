import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="">
      <Box className="mx-auto max-w-[850px] flex justify-between items-center">
        <Link href={'/'}>
          <Logo size={100} />
        </Link>

        <div className="flex gap-8 font-light">
          <Link href={'/blog'}>
            <button className="text-white">Blog</button>
          </Link>
          <Link href={'/packages'}>
            <button className="text-white">Packages</button>
          </Link>
          <Link href={'/projects'}>
            <button className="text-white">Projects</button>
          </Link>
        </div>
      </Box>
    </header>
  )
}
