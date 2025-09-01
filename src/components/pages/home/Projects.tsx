import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'

interface Props {
  id: string
  image: string
  description: string
}

export default function Projects({ id, image, description }: Props) {
  return (
    <div>
      <a
        href={`/projects/${id}`}
        className="block transition-all hover:opacity-80"
      >
        <div className="rounded-large relative h-52 overflow-hidden">
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
