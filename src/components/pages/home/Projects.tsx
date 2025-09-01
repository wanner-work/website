import Box from '@wanner.work/box'
import { ExternalLink, MoveRight } from 'lucide-react'
import getFadeClassName from '@/methods/ui/getFadeClassName'
import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'

interface Props {
  id: string
  image: string
  description: string
}

export default function Projects({
  id,
  image,
  description,
}: Props) {
  return (
    <div>
      <a
        href={`/projects/${id}`}
        className="block transition-all hover:opacity-80"
      >
        <div className="relative h-52 rounded-large overflow-hidden">
          <div className={getFadeOverlayClassName('absolute inset-0')} />
          <img
            src={image}
            alt={description}
            className="size-full object-cover"
          />
        </div>
        <p className="mt-5 w-2/3">{description}</p>
      </a>
    </div>
  )
}
