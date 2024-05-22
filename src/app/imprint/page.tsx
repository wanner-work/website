import PageHeader from '@/components/header/PageHeader'
import getClient from '@/methods/notion/getClient'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Box from '@wanner.work/box'
import Notion, { NotionQuery } from '@wanner.work/notion'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

export default async function Page() {
  const client = getClient()
  const result = await client.pages.retrieve({
    page_id: process.env.IMPRINT_PAGE_ID as string
  })

  if (!result) {
    return notFound()
  }

  const page = result as PageObjectResponse
  const query = new NotionQuery(client)
  const data = await query.execute(page.id)

  return (
    <>
      <PageHeader
        title="Imprint"
        description={`Last updated at ${dayjs(page.last_edited_time).format('DD. MMMM, YYYY')}`}
      />

      <Box className="mx-auto text-white mt-20" width="content" px="small">
        <Notion data={data} />
      </Box>
    </>
  )
}
