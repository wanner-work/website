import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'
import Box from '@wanner.work/box'
import { ExternalLink } from 'lucide-react'

interface Props {
  id: string
  image: string
  description: string
  link?: string
}

export default function ProjectOverview({
  id,
  image,
  description,
  link
}: Props) {
  return (
    <Box align="center" className="max-w-[500px] md:max-w-[800px]">
      <a
        href={`/projects/${id}`}
        className="block transition-all hover:opacity-80"
      >
        <div className="relative h-40 overflow-hidden rounded-large">
          <div className={getFadeOverlayClassName('absolute inset-0')} />
          <img
            src={image}
            alt={description}
            className="size-full object-cover"
          />
        </div>
        <p className="mt-3">{description}</p>
        {link && (
          <a
            href={link}
            className="mt-2 inline-flex items-center gap-1.5 text-sm transition-all hover:opacity-80"
          >
            <ExternalLink className="size-3" />
            <span>Sehe dir das Projekt live an!</span>
          </a>
        )}
      </a>
    </Box>
  )
}
