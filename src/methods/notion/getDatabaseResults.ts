import { Client } from '@notionhq/client'
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

export default async function getDatabaseResults(
  client: Client,
  id: string,
  options?: any
) {
  const request = (await client.databases.query({
    database_id: id,
    ...options
  })) as QueryDatabaseResponse
  return request.results as PageObjectResponse[]
}
