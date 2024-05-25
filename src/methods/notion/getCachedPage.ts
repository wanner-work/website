import getPage from '@/methods/notion/getPage'
import { unstable_cache } from 'next/cache'

const getCachedPage = unstable_cache(
  async (client: any, pageId: string) => getPage(client, pageId),
  ['page'],
  {
    tags: ['page']
  }
)

export default getCachedPage
