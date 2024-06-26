import getDatabaseResults from '@/methods/notion/getDatabaseResults'
import { Client } from '@notionhq/client'
import { unstable_cache } from 'next/cache'

const getCachedDatabaseResults = unstable_cache(
  async (client: Client, id: string, options?: any) =>
    getDatabaseResults(client, id, options),
  ['database-results'],
  {
    tags: ['database-results']
  }
)

export default getCachedDatabaseResults
