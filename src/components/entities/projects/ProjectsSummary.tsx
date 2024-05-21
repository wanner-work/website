import getClient from '@/methods/notion/getClient'
import getDatabaseResults from '@/methods/notion/getDatabaseResults'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import Box from '@wanner.work/box'
import Image from '@wanner.work/image'
import { getNotionImageURL } from '@wanner.work/notion/helper'
import Link from 'next/link'

export default async function ProjectSummary() {
  const client = getClient()
  const results = await getDatabaseResults(
    client,
    process.env.PROJECT_DATABASE_ID as string
  )

  return (
    <Box px="large" className="mt-8 grid md:grid-cols-3 gap-3">
      {results.map((page) => (
        <Link href={`/projects/${getPlainProperty(page.properties, 'Slug')}`}>
          <article key={page.id} className="h-[300px] relative">
            <Image src={getNotionImageURL(page.cover)} fill alt="test" />
            <div className="bg-gradient-to-tr from-black to-black/40 absolute top-0 left-0 h-full w-full z-10 flex items-end text-white">
              <div className="p-8">
                <h3 className="text-xl">{getName(page.properties)}</h3>
                <p className="opacity-80 mt-1">
                  {getPlainProperty(page.properties, 'Summary')}
                </p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </Box>
  )
}
