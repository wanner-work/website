'use client'

import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image, { ImageProvider } from '@wanner.work/image'
import { getNotionImageURL } from '@wanner.work/notion/helper'

interface Props {
  page: PageObjectResponse
}

export default function ProjectPreview({ page }: Props) {
  return (
    <article key={page.id} className="h-[300px] relative">
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
          <h3 className="text-xl">{getName(page.properties)}</h3>
          <p className="opacity-80 mt-1">
            {getPlainProperty(page.properties, 'Summary')}
          </p>
        </div>
      </div>
    </article>
  )
}
