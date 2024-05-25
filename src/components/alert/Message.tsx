'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast, Toaster } from 'sonner'

let once = false

export default function Message() {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (once) return

    const action = searchParams.get('action')

    if (action === 'revalidated') {
      toast.success(`Revalidated ${searchParams.get('tag')} successful.`)
    }

    once = true
  }, [searchParams])

  return (
    <>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              'bg-black border border-white/20 flex items-center gap-3 text-white px-4 py-2 rounded-md font-mono',
            title: 'text-white/90 text-sm',
            description: 'text-red-400'
          }
        }}
        position="bottom-center"
      />
    </>
  )
}
