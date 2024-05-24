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
    process.env.PROJECT_DATABASE_ID as string,
    {
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
    }
  )

  return (
    <Box px="medium" width="content" className="mt-8 mx-auto">
      <Link
        href={`/projects/${getPlainProperty(results[0].properties, 'Slug')}`}
      >
        <ProjectPreview page={results[0]} height={400} />
      </Link>
      <div className="grid md:grid-cols-2 gap-7 mt-7">
        {results.slice(1, 3).map((page, index) => (
          <Link href={`/projects/${getPlainProperty(page.properties, 'Slug')}`}>
            <ProjectPreview page={page} />
          </Link>
        ))}
      </div>
    </Box>
  )
}
