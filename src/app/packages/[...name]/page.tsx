import getClient from '@/methods/notion/getClient'
import getURLProperty from '@/methods/notion/getURLProperty'
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'
import { notFound, redirect } from 'next/navigation'

interface Props {
  params: {
    name: string[]
  }
}

export default async function Page({ params: { name } }: Props) {
  const client = getClient()
  const request = (await client.databases.query({
    database_id: process.env.PACKAGE_DATABASE_ID as string,
    filter: {
      property: 'Name',
      rich_text: {
        equals: decodeURIComponent(name.join('/'))
      }
    }
  })) as QueryDatabaseResponse
  const results = request.results as PageObjectResponse[]

  if (results.length === 0 || results.length < 1) {
    return notFound()
  }

  return redirect(getURLProperty(results[0].properties, 'Readme'))
}
