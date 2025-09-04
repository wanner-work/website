import type { CollectionEntry } from 'astro:content'
import { useState } from 'react'
import ProjectFilter from './ProjectFilter'
import ProjectOverview from './ProjectOverview'
import Title from '../home/Title'

interface Props {
  tags: string[]
  projects: CollectionEntry<'projects'>[]
  viewProject: string
  viewExternalProject: string
}

export default function ProjectDisplay({
  tags,
  projects,
  viewProject,
  viewExternalProject
}: Props) {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [displayedProjects, setDisplayedProjects] = useState(projects)

  const handleFilterCallback = (activeTags: string[]) => {
    setActiveTags(activeTags)
    if (activeTags.length === 0) {
      setDisplayedProjects(projects)
      return
    }

    const filteredProjects = projects.filter((proj) =>
      proj.data.tags.public.some((tag) => activeTags.includes(tag))
    )
    setDisplayedProjects(filteredProjects)
  }

  return (
    <div>
      <Title className='mb-6' title='Filter by tags' subtitle='asdfkasdflkajsdflaks dfjalsdf jasldf asdkl' />
      <ProjectFilter tags={tags} onTagCallback={handleFilterCallback} />
      <Title className='mb-6' title={activeTags.length > 0 ? 'Filtered projects' : 'All projects'} subtitle='asdfkasdflkajsdflaks dfjalsdf jasldf asdkl' />
      <div className="flex flex-col gap-12">
        {displayedProjects.map((project) => (
          <ProjectOverview
            key={project.id}
            project={project}
            viewProject={viewProject}
            viewExternalProject={viewExternalProject}
          />
        ))}
      </div>
    </div>
  )
}
