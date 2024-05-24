import Appear from '@/components/effects/Appear'
import PageHeader from '@/components/header/PageHeader'
import CustomNotion from '@/components/notion/CustomNotion'
import getCachedFilteredPage from '@/methods/notion/getCachedFilteredPage'
import getClient from '@/methods/notion/getClient'
import getDatabaseResults from '@/methods/notion/getDatabaseResults'
import getDateProperty from '@/methods/notion/getDateProperty'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import getURLProperty from '@/methods/notion/getURLProperty'
import {
  ArrowTopRightOnSquareIcon,
  LockClosedIcon
} from '@heroicons/react/24/solid'
import Box from '@wanner.work/box'
import { getNotionImageURL } from '@wanner.work/notion/helper'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export const dynamicParams = true

export async function generateStaticParams() {
  const client = getClient()
  const results = await getDatabaseResults(
    client,
    process.env.PROJECT_DATABASE_ID as string
  )

  return results.map((page) => ({
    params: { slug: getPlainProperty(page.properties, 'Slug') }
  }))
}

export default async function Page({ params: { slug } }: Props) {
  const client = getClient()
  const { page, data } = await getCachedFilteredPage(
    client,
    process.env.PROJECT_DATABASE_ID as string,
    slug
  )

  return (
    <>
      <PageHeader
        title={getName(page.properties)}
        date={getDateProperty(page.properties, 'Release')}
        description={getPlainProperty(page.properties, 'Summary')}
        image={getNotionImageURL(page.cover)}
      />

      <div className="w-full flex justify-center mt-20">
        <Appear delay={0.9}>
          {getURLProperty(page.properties, 'URL') ? (
            <Link
              href={getURLProperty(page.properties, 'URL') || ''}
              target="_blank"
            >
              <button className="bg-white/5 text-white p-3 rounded text-sm flex items-center gap-3 w-auto cursor-pointer hover:scale-105 active:scale-95 transition">
                Visit Project
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </button>
            </Link>
          ) : (
            <div className="bg-white/5 text-white p-3 rounded text-sm flex items-center gap-3 w-auto">
              Private Project
              <LockClosedIcon className="w-4 h-4" />
            </div>
          )}
        </Appear>
      </div>

      <Box className="mx-auto text-white mt-28" width="content" px="small">
        <CustomNotion data={data} />
      </Box>
    </>
  )
}
