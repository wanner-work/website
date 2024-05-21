import PageHeader from '@/components/header/PageHeader'
import getClient from '@/methods/notion/getClient'
import getName from '@/methods/notion/getName'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'
import Box from '@wanner.work/box'
import Notion, { NotionQuery } from '@wanner.work/notion'
import { getNotionImageURL } from '@wanner.work/notion/helper'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const client = getClient()
  const request = (await client.databases.query({
    database_id: process.env.PROJECT_DATABASE_ID as string,
    filter: {
      property: 'Slug',
      rich_text: {
        contains: slug
      }
    }
  })) as QueryDatabaseResponse
  const results = request.results as PageObjectResponse[]

  if (results.length === 0 || results.length < 1) {
    return notFound()
  }

  const page = results[0]

  const query = new NotionQuery(client)
  const data = await query.execute(page.id)

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
