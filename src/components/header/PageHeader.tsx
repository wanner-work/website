'use client'

import Appear from '@/components/effects/Appear'
import Box from '@wanner.work/box'
import Image, { ImageProvider } from '@wanner.work/image'
import dayjs from 'dayjs'

interface Props {
  title: string
  description: string
  image?: string
  date?: string
}

export default function PageHeader({ title, description, image, date }: Props) {
  return (
    <Box
      className={`flex flex-col items-center justify-center ${image ? 'h-full' : 'h-[35vh] '}  relative flex w-full items-center justify-center bg-dot-white/[0.2]`}
      px="small"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {image && (
        <div className="mx-auto mb-20 mt-14 h-[60vh] w-full max-w-[1100px] md:mt-10">
          <ImageProvider
            cache={{
              enabled: true,
              maxAge: 3600 * 24 * 7,
              keyGenerator: (src) => src.split('?')[0] || src
            }}
          >
            <Image src={image} alt={title} fill />
          </ImageProvider>
        </div>
      )}

      <Appear delay={0.3}>
        <h1 className="relative z-20 text-4xl font-bold text-white">{title}</h1>
      </Appear>
      {date && (
        <Appear delay={0.4}>
          <p className="mt-2 text-sm text-white opacity-80">
            {dayjs(date).format('MMMM D, YYYY')}
          </p>
        </Appear>
      )}
      <Appear rotate={0} delay={0.8} duration={0.5}>
        <p className="mt-8 max-w-[550px] text-center text-white opacity-70">
          {description}
        </p>
      </Appear>
    </Box>
  )
}
