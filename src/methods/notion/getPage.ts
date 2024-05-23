import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionQuery } from '@wanner.work/notion'
import { notFound } from 'next/navigation'

export default async function getPage(client: any, pageId: string) {
  const result = await client.pages.retrieve({
    page_id: pageId
  })

  if (!result) {
    return notFound()
  }

  const page = result as PageObjectResponse
  const query = new NotionQuery(client)
  const data = await query.execute(page.id)

  return {
    page,
    data
  }
}
