import getPage from '@/methods/notion/getPage'
import { unstable_cache } from 'next/cache'

const getCachedPage = unstable_cache(
  async (client: any, pageId: string) => getPage(client, pageId),
  ['page'],
  {
    revalidate: 3600
  }
)

export default getCachedPage
