import getFilteredPage from '@/methods/notion/getFilteredPage'
import { Client } from '@notionhq/client'
import { unstable_cache } from 'next/cache'

const getCachedFilteredPage = unstable_cache(
  async (client: Client, databaseId: string, slug: string) =>
    getFilteredPage(client, databaseId, slug),
  ['filtered-page'],
  {
    tags: ['filtered-page']
  }
)

export default getCachedFilteredPage
