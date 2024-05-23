import ProjectPreview from '@/components/entities/projects/ProjectPreview'
import getCachedDatabaseResults from '@/methods/notion/getCachedDatabaseResults'
import getClient from '@/methods/notion/getClient'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default async function ProjectSummary() {
  const client = getClient()
  const results = await getCachedDatabaseResults(
    client,
    process.env.PROJECT_DATABASE_ID as string
  )

  return (
    <Box px="medium" className="mt-8 grid md:grid-cols-3 gap-3">
      {results.map((page) => (
        <Link href={`/projects/${getPlainProperty(page.properties, 'Slug')}`}>
          <ProjectPreview page={page} />
        </Link>
      ))}
    </Box>
  )
}
