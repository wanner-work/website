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
        <div className="relative h-52 rounded-[26px] overflow-hidden">
          <div className={getFadeOverlayClassName('absolute inset-0')} />
          <img
            src={image}
            alt={description}
            className="size-full object-cover"
          />
        </div>
        <p className="mt-5 w-2/3">{description}</p>
      </a>
      <div className="mt-12 flex justify-center">
        <a
          href="/projects"
          className={getFadeClassName(
            'text-light dark:text-dark flex cursor-pointer items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition-all hover:gap-5 hover:opacity-80 active:scale-95'
          )}
        >
          Siehe weitere Projekte
          <span>
            <MoveRight className="size-4" />
          </span>
        </a>
      </div>
    </div>
  )
}
