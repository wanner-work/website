import { Client } from '@notionhq/client'
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

export default async function getDatabaseResults(client: Client, id: string) {
  const request = (await client.databases.query({
    database_id: id,
    sorts: [
      {
        property: 'Release',
        direction: 'descending'
      }
    ],
    filter: {
      property: 'Release',
      date: {
        is_not_empty: true
      }
    }
  })) as QueryDatabaseResponse
  return request.results as PageObjectResponse[]
}
