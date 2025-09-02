import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'
import { ExternalLink, Quote } from 'lucide-react'
import type { PropsWithChildren } from 'react'

interface Props {
  name: string
  picture?: string
  company: string
  companyLink?: string
  visitProjects: string
  tags?: string[]
}

export default function Testimonials({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-8">
        <div className="col-span-3 flex flex-col justify-center py-8 md:col-span-2">
          <div className="relative">
            <Quote className="text-dark/10 absolute size-12 -translate-x-5 -translate-y-3" />
            <div className="mb-3 text-lg">{children}</div>
            <div className="mt-5 flex items-center gap-4 md:mt-0">
              <div className="relative aspect-square size-12 shrink-0 rounded-full md:hidden">
                <div
                  className={getFadeOverlayClassName(
                    'absolute inset-0 z-10 size-full rounded-full'
                  )}
                />
                <img
                  src={props.picture}
                  alt={props.name}
                  className="absolute size-full rounded-full object-cover saturate-[40%]"
                />
              </div>
              <div>
                {props.tags && props.tags.length > 0 && 
                  <a href={`/projects/?tag=${props.tags?.join('&tag=')}`} className='flex items-center gap-1.5 mb-2 text-sm transition-all hover:opacity-80'>
                    <ExternalLink className='size-3.5' /><span>{props.visitProjects}</span>
                  </a>
                }
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
          </div>
        </div>
        <div className="col-span-1 hidden py-8 pl-8 md:block">
          <div className="relative aspect-square size-full shrink-0 rounded-full">
            <div
              className={getFadeOverlayClassName(
                'absolute inset-0 z-10 size-full rounded-full'
              )}
            />
            <img
              src={props.picture}
              alt={props.name}
              className="absolute size-full rounded-full object-cover saturate-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
