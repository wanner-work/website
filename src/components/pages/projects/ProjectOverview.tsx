import Button from '@/components/ui/button/Button'
import getFadeClassName from '@/methods/ui/getFadeClassName'
import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'
import type { CollectionEntry } from 'astro:content'
import { ExternalLink, MoveRight } from 'lucide-react'

interface Props {
  project: CollectionEntry<'projects'>
  viewProject: string
  viewExternalProject: string
}

export default function ProjectOverview({
  project,
  viewProject,
  viewExternalProject
}: Props) {
  return (
    <div>
      <a
        href={`/projects/${project.id}`}
        className="block transition-all hover:opacity-80"
      >
        <div className="rounded-large relative h-52 overflow-hidden">
          <div className={getFadeOverlayClassName('absolute inset-0')} />
          <img
            src={project.data.image}
            alt={project.data.description}
            className="size-full object-cover"
          />
        </div>
        <div className="mt-6 mb-3 flex gap-2">
          {project.data.tags?.public?.map((tag: string) => (
            <span
              key={tag + project.id}
              className={getFadeClassName(
                'text-light rounded-full px-2 py-1 text-[10px] font-medium uppercase'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-serif text-3xl font-bold opacity-80">
          {project.data.title}
        </p>
        <p className="mt-2 opacity-80">{project.data.description}</p>
      </a>
      <div className="mt-4 flex gap-4">
        <Button iconAfter={MoveRight} href={`/projects/${project.id}`}>
          {viewProject}
        </Button>
        {project.data.link && (
          <Button
            href={project.data.link}
            target="_blank"
            iconAfter={ExternalLink}
          >
            {viewExternalProject}
          </Button>
        )}
      </div>
    </div>
  )
}
