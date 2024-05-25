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
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-tr from-black to-black/40 text-white">
        <div className="p-8">
          <p className="mb-2 text-sm italic opacity-70">
            {dayjs(getDateProperty(page.properties, 'Release')).format(
              'MMMM D, YYYY'
            )}
          </p>
          <h3 className="text-xl">{getName(page.properties)}</h3>
          <p className="mt-2 max-w-[400px] opacity-80">
            {getPlainProperty(page.properties, 'Summary')}
          </p>
        </div>
      </div>
    </article>
  )
}
