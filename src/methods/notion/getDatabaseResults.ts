import { Client } from '@notionhq/client'
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

export default async function getDatabaseResults(client: Client, id: string) {
  const request = (await client.databases.query({
    database_id: id
  })) as QueryDatabaseResponse
  return request.results as PageObjectResponse[]
}
