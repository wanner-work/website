import PageHeader from '@/components/header/PageHeader'
import CustomNotion from '@/components/notion/CustomNotion'
import getCachedPage from '@/methods/notion/getCachedPage'
import getClient from '@/methods/notion/getClient'
import dayjs from 'dayjs'

export default async function Page() {
  const client = getClient()
  const { data, page } = await getCachedPage(
    client,
    process.env.IMPRINT_PAGE_ID as string
  )

  return (
    <>
      <PageHeader
        title="Imprint"
        description={`Last updated at ${dayjs(page.last_edited_time).format('MMMM D, YYYY')}`}
      />

      <CustomNotion data={data} />
    </>
  )
}
