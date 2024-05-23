import PageHeader from '@/components/header/PageHeader'
import getCachedFilteredPage from '@/methods/notion/getCachedFilteredPage'
import getClient from '@/methods/notion/getClient'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import Box from '@wanner.work/box'
import Notion from '@wanner.work/notion'
import { getNotionImageURL } from '@wanner.work/notion/helper'

interface Props {
  params: {
    slug: string
  }
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
        description={getPlainProperty(page.properties, 'Summary')}
        image={getNotionImageURL(page.cover)}
      />

      <Box className="mx-auto text-white mt-28" width="content" px="small">
        <Notion data={data} />
      </Box>
    </>
  )
}
