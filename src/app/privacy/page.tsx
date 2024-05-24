import PageHeader from '@/components/header/PageHeader'
import CustomNotion from '@/components/notion/CustomNotion'
import getCachedPage from '@/methods/notion/getCachedPage'
import getClient from '@/methods/notion/getClient'
import Box from '@wanner.work/box'
import dayjs from 'dayjs'

export default async function Page() {
  const client = getClient()
  const { page, data } = await getCachedPage(
    client,
    process.env.PRIVACY_PAGE_ID as string
  )

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description={`Last updated at ${dayjs(page.last_edited_time).format('MMMM D, YYYY')}`}
      />

      <Box className="mx-auto text-white mt-20" width="content" px="small">
        <CustomNotion data={data} />
      </Box>
    </>
  )
}
