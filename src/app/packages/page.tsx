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
        width="medium"
        align="center"
        className="flex flex-col gap-5 text-white"
        px="medium"
      >
        {results.map((page, index) => (
          <article key={page.id} className="w-full">
            <Appear display="block" delay={index * 0.3 + 0.4}>
              <div
                key={page.id}
                className="w-full rounded-lg bg-gray-400/5 p-6"
              >
                <span className="rounded bg-gray-400/5 px-2 py-1 text-[12px] text-white/70">
                  {getPlainProperty(page.properties, 'Version')}
                </span>
                <h2 className="mb-3 mt-3 text-lg font-bold">
                  {getName(page.properties)}
                </h2>
                <p className="max-w-[450px] text-sm opacity-70">
                  {getPlainProperty(page.properties, 'Summary')}
                </p>

                <div className="mt-6 flex w-full flex-col gap-3 md:flex-row">
                  <Link
                    className="w-full"
                    target="_blank"
                    href={getURLProperty(page.properties, 'Readme') || ''}
                  >
                    <button className="w-full rounded bg-blue-500/10 py-2 uppercase text-blue-500">
                      Readme
                    </button>
                  </Link>
                  <Link
                    className="w-full"
                    target="_blank"
                    href={getURLProperty(page.properties, 'Changelog') || ''}
                  >
                    <button className="w-full rounded bg-purple-500/10 py-2 uppercase text-purple-500">
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
