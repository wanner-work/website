import getCachedDatabaseResults from '@/methods/notion/getCachedDatabaseResults'
import getClient from '@/methods/notion/getClient'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import Box from '@wanner.work/box'
import Image from '@wanner.work/image'
import { getNotionImageURL } from '@wanner.work/notion/helper'

export default async function PackagesSummary() {
  const client = getClient()
  const results = await getCachedDatabaseResults(
    client,
    process.env.PACKAGE_DATABASE_ID as string
  )

  return (
    <Box px="large" className="mt-8 grid grid-cols-3 gap-3">
      {results.map((page) => (
        <div key={page.id} className="h-[300px] relative">
          <Image src={getNotionImageURL(page.cover)} fill alt="test" />
          <div className="bg-gradient-to-tr from-black to-black/40 absolute top-0 left-0 h-full w-full z-10 flex items-end text-white">
            <div className="p-8">
              <h3 className="text-xl">{getName(page.properties)}</h3>
              <p className="opacity-80 mt-1">
                {getPlainProperty(page.properties, 'Summary')}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Box>
  )
}
