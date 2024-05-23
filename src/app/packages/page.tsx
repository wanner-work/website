import Appear from '@/components/effects/Appear'
import PageHeader from '@/components/header/PageHeader'
import getCachedDatabaseResults from '@/methods/notion/getCachedDatabaseResults'
import getClient from '@/methods/notion/getClient'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import getURLProperty from '@/methods/notion/getURLProperty'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default async function Page() {
  const client = getClient()
  const results = await getCachedDatabaseResults(
    client,
    process.env.PACKAGE_DATABASE_ID as string
  )

  return (
    <>
      <PageHeader
        title="Packages"
        description="A collection of my public packages which I use in projects."
      />

      <Box
        width="content"
        className="mx-auto text-white flex flex-col gap-5"
        px="small"
      >
        {results.map((page, index) => (
          <article key={page.id} className="w-full">
            <Appear display="block" delay={index * 0.3 + 0.4}>
              <div
                key={page.id}
                className="p-6 rounded-lg bg-gray-400/5 w-full"
              >
                <span className="py-1 px-2 bg-gray-400/5 rounded text-[12px] text-white/70">
                  {getPlainProperty(page.properties, 'Version')}
                </span>
                <h2 className="font-bold text-lg mb-3 mt-3">
                  {getName(page.properties)}
                </h2>
                <p className="text-sm opacity-70 max-w-[450px]">
                  {getPlainProperty(page.properties, 'Summary')}
                </p>

                <div className="flex flex-col md:flex-row gap-3 w-full mt-6">
                  <Link
                    className="w-full"
                    target="_blank"
                    href={getURLProperty(page.properties, 'Readme')}
                  >
                    <button className="bg-blue-500/10 uppercase text-blue-500 py-2 rounded w-full">
                      Readme
                    </button>
                  </Link>
                  <Link
                    className="w-full"
                    target="_blank"
                    href={getURLProperty(page.properties, 'Changelog')}
                  >
                    <button className="bg-purple-500/10 uppercase text-purple-500 py-2 rounded w-full">
                      Changelog
                    </button>
                  </Link>
                </div>
              </div>
            </Appear>
          </article>
        ))}
      </Box>
    </>
  )
}
