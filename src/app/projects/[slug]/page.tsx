import PageHeader from '@/components/header/PageHeader'
import CustomNotion from '@/components/notion/CustomNotion'
import getCachedFilteredPage from '@/methods/notion/getCachedFilteredPage'
import getClient from '@/methods/notion/getClient'
import getDateProperty from '@/methods/notion/getDateProperty'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import getURLProperty from '@/methods/notion/getURLProperty'
import Box from '@wanner.work/box'
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
        date={getDateProperty(page.properties, 'Release')}
        description={getPlainProperty(page.properties, 'Summary')}
        image={getNotionImageURL(page.cover)}
        link={getURLProperty(page.properties, 'URL') || undefined}
      />

      <Box className="mx-auto text-white mt-28" width="content" px="small">
        <CustomNotion data={data} />
      </Box>
    </>
  )
}
