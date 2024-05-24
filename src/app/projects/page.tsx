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
    process.env.PROJECT_DATABASE_ID as string
  )

  return (
    <>
      <PageHeader
        title="Projects"
        description="A collection of projects I've worked on in the past."
      />

      <SimpleReveal>
        <Box px="medium" width="content" className="mt-8 mx-auto">
          <Link
            href={`/projects/${getPlainProperty(results[0].properties, 'Slug')}`}
          >
            <ProjectPreview page={results[0]} height={500} />
          </Link>
          <div className="grid md:grid-cols-2 gap-7 mt-7">
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
