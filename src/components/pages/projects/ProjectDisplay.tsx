import { useState } from 'react'
import ProjectFilter from './ProjectFilter'
import ProjectOverview from './ProjectOverview'
import type { CollectionEntry } from 'astro:content'

interface Props {
  tags: string[]
  projects: CollectionEntry<'projects'>[]
  viewProject: string
  viewExternalProject: string
}

export default function ProjectDisplay({ tags, projects, viewProject, viewExternalProject }: Props) {
  const [displayedProjects, setDisplayedProjects] = useState(projects)

  const handleFilterCallback = (activeTags: string[]) => {
    if (activeTags.length === 0) {
      setDisplayedProjects(projects)
      return
    }

    const filteredProjects = projects.filter((proj) =>
      proj.data.tags.some((tag) => activeTags.includes(tag))
    )
    setDisplayedProjects(filteredProjects)
  }

  return (
    <div>
      <ProjectFilter tags={tags} onTagCallback={handleFilterCallback} />
      <div className='flex gap-12 flex-col'>
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
