'use client'

import getDateProperty from '@/methods/notion/getDateProperty'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image, { ImageProvider } from '@wanner.work/image'
import { getNotionImageURL } from '@wanner.work/notion/helper'
import dayjs from 'dayjs'

interface Props {
  page: PageObjectResponse
  height?: number
}

export default function ProjectPreview({ page, height = 300 }: Props) {
  return (
    <article
      key={page.id}
      style={{
        height: `${height}px`
      }}
      className="relative"
    >
      <ImageProvider
        cache={{
          enabled: true,
          maxAge: 3600 * 24 * 7,
          keyGenerator: (src) => src.split('?')[0] || src
        }}
      >
        <Image src={getNotionImageURL(page.cover)} fill alt="test" />
      </ImageProvider>
      <div className="bg-gradient-to-tr from-black to-black/40 absolute top-0 left-0 h-full w-full z-10 flex items-end text-white">
        <div className="p-8">
          <p className="text-sm opacity-70 mb-2 italic">
            {dayjs(getDateProperty(page.properties, 'Release')).format(
              'MMMM D, YYYY'
            )}
          </p>
          <h3 className="text-xl">{getName(page.properties)}</h3>
          <p className="opacity-80 mt-2 max-w-[400px]">
            {getPlainProperty(page.properties, 'Summary')}
          </p>
        </div>
      </div>
    </article>
  )
}
