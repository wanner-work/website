import { MoveRight, Quote } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import getFadeClassName from '../../../methods/ui/getFadeClassName'
import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'

interface Props {
  name: string
  picture?: string
  company: string
  companyLink?: string
}

export default function Testimonials({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div>
      <div className="mt-8 grid grid-cols-3 gap-x-8">
        <div className="col-span-2 flex flex-col justify-center py-8">
          <div className='relative'>
            <Quote className="text-dark/10 absolute size-12 -translate-x-5 -translate-y-3" />
            <div className="mb-3 text-lg">{children}</div>
            <p className="font-serif font-medium">{props.name}</p>
          <span className="flex flex-wrap gap-x-2 text-sm">
            <p>{props.company}</p>
            {props.companyLink && (
              <>
                •{' '}
                <a
                  href={props.companyLink}
                  className="text-dark/50 dark:text-light/50 underline"
                >
                  {props.companyLink}
                </a>
              </>
            )}
          </span>
          </div>
        </div>
        <div className="col-span-1 py-8 pl-8">
          <div className="size-full aspect-square shrink-0 rounded-full relative">
            <div className={getFadeOverlayClassName('absolute size-full inset-0 rounded-full z-10')} />
            <img src={props.picture} alt={props.name} className="size-full rounded-full absolute object-cover saturate-[40%]" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="/testimonials"
          className={getFadeClassName(
            'text-light dark:text-dark flex cursor-pointer items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition-all hover:gap-5 hover:opacity-80 active:scale-95'
          )}
        >
          Siehe weitere Referenzen
          <span>
            <MoveRight className="size-4" />
          </span>
        </a>
      </div>
    </div>
  )
}
