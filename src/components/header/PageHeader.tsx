'use client'

import Appear from '@/components/effects/Appear'
import Box from '@wanner.work/box'
import Image, { ImageProvider } from '@wanner.work/image'
import dayjs from 'dayjs'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  image?: string
  date?: string
  link?: string
}

export default function PageHeader({
  title,
  description,
  image,
  date,
  link
}: Props) {
  return (
    <Box
      className={`flex items-center justify-center flex-col ${image ? 'h-full' : 'h-[35vh] '}`}
      px="small"
    >
      {image && (
        <div className="max-w-[1100px] w-full mx-auto h-[60vh] mt-14 md:mt-10 mb-20">
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
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="relative w-full inline-block"
          >
            <h1 className="text-4xl font-bold text-white">{title}</h1>
          </Link>
        ) : (
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        )}
      </Appear>
      {date && (
        <Appear delay={0.4}>
          <p className="text-white mt-2 opacity-80 text-sm">
            {dayjs(date).format('MMMM D, YYYY')}
          </p>
        </Appear>
      )}
      <Appear rotate={0} delay={0.8} duration={0.5}>
        <p className="mt-8 text-white opacity-70 max-w-[550px] text-center">
          {description}
        </p>
      </Appear>
    </Box>
  )
}
