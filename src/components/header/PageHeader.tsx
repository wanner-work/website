'use client'

import Appear from '@/components/effects/Appear'
import Box from '@wanner.work/box'
import Image, { ImageProvider } from '@wanner.work/image'

interface Props {
  title: string
  description: string
  image?: string
}

export default function PageHeader({ title, description, image }: Props) {
  return (
    <Box
      className={`flex items-center justify-center flex-col ${image ? 'h-full' : 'h-[35vh] '}`}
      px="small"
    >
      {image && (
        <div className="max-w-[1100px] w-full mx-auto h-[40vh] mt-10 mb-20">
          <ImageProvider
            cache={{
              enabled: true,
              maxAge: 60 * 60 * 24 * 7,
              keyGenerator: (src: string) => src.split('?')[0] || src
            }}
          >
            <Image src={image} alt={title} fill />
          </ImageProvider>
        </div>
      )}

      <Appear delay={0.3}>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </Appear>
      <Appear rotate={0} delay={0.8} duration={0.5}>
        <p className="mt-8 text-white opacity-70 max-w-[550px] text-center">
          {description}
        </p>
      </Appear>
    </Box>
  )
}
