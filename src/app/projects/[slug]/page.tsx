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

      <div className="mt-20 flex w-full justify-center">
        <Appear delay={0.9}>
          {getURLProperty(page.properties, 'URL') ? (
            <Link
              href={getURLProperty(page.properties, 'URL') || ''}
              target="_blank"
            >
              <button className="flex w-auto cursor-pointer items-center gap-3 rounded bg-white/5 p-3 text-sm text-white transition hover:scale-105 active:scale-95">
                Visit Project
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </button>
            </Link>
          ) : (
            <div className="flex w-auto items-center gap-3 rounded bg-white/5 p-3 text-sm text-white">
              Private Project
              <LockClosedIcon className="h-4 w-4" />
            </div>
          )}
        </Appear>
      </div>

      <CustomNotion data={data} />
    </>
  )
}
