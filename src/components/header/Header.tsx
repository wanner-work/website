'use client'

import Logo from '@/components/icons/Logo'
import Box from '@wanner.work/box'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="">
      <Box
        className="mx-auto max-w-[850px] flex justify-between items-center"
        px="medium"
      >
        <AnimatePresence>
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -8
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
          >
            <Link href={'/'}>
              <Logo size={100} />
            </Link>
          </motion.span>
        </AnimatePresence>

        <div className="flex gap-8 font-light">
          <AnimatePresence>
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{
                delay: 0.5
              }}
            >
              <Link href={'/projects'}>
                <button className="text-white">Projects</button>
              </Link>
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{
                delay: 0.7
              }}
            >
              <Link href={'/blog'}>
                <button className="text-white">Blog</button>
              </Link>
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{
                delay: 0.9
              }}
            >
              <Link href={'/packages'}>
                <button className="text-white">Packages</button>
              </Link>
            </motion.span>
          </AnimatePresence>
        </div>
      </Box>
    </header>
  )
}
