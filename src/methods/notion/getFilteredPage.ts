import { Client } from '@notionhq/client'
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'
import { NotionQuery } from '@wanner.work/notion'
import { notFound } from 'next/navigation'

export default async function getFilteredPage(
  client: Client,
  databaseId: string,
  slug: string
) {
  const request = (await client.databases.query({
    database_id: databaseId,
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

  return {
    page,
    data
  }
}
