import SimpleReveal from '@/components/effects/SimpleReveal'
import ProjectPreview from '@/components/entities/projects/ProjectPreview'
import PageHeader from '@/components/header/PageHeader'
import getCachedDatabaseResults from '@/methods/notion/getCachedDatabaseResults'
import getClient from '@/methods/notion/getClient'
import getPlainProperty from '@/methods/notion/getPlainProperty'
import Box from '@wanner.work/box'
import Link from 'next/link'

export default async function Page() {
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
    <>
      <PageHeader
        title="Projects"
        description="A collection of projects I've worked on in the past."
      />

      <SimpleReveal>
        <Box px="medium" width="medium" align="center" className="mt-8">
          <Link
            href={`/projects/${getPlainProperty(results[0].properties, 'Slug')}`}
          >
            <ProjectPreview page={results[0]} height={500} />
          </Link>
          <div className="mt-7 grid gap-7 md:grid-cols-2">
            {results.slice(1).map((page, index) => (
              <Link
                href={`/projects/${getPlainProperty(page.properties, 'Slug')}`}
              >
                <ProjectPreview page={page} />
              </Link>
            ))}
          </div>
        </Box>
      </SimpleReveal>
    </>
  )
}
