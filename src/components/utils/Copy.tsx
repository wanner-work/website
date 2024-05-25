'use client'

import { ClipboardIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

interface Props {
  content: string
}

export default function Copy({ content }: Props) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(() => {
    void navigator.clipboard.writeText(content)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }, [content])

  return (
    <div className="p-4">
      <AnimatePresence>
        {isCopied ? (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -30
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 0.3
            }}
          >
            <CheckIcon className="h-5 w-5" />
          </motion.div>
        ) : (
          <button
            className="transition hover:scale-90 hover:opacity-80"
            onClick={copy}
          >
            <ClipboardIcon className="h-5 w-5" />
          </button>
        )}
      </AnimatePresence>
    </div>
  )
}
