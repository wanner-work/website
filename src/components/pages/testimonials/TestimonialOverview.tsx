import Container from '@/components/content/Container'
import getFadeOverlayClassName from '@/methods/ui/getFadeOverlayClassName'
import type { PropsWithChildren } from 'react'

interface Props {
  name: string
  picture?: string
  company: string
  companyLink?: string
  html?: string
}

export default function TestimonialOverview({
  name,
  picture,
  company,
  companyLink,
  html,
  children
}: PropsWithChildren<Props>) {
  return (
    <div className="relative z-20">
      <Container>
        {html ? (
          <div
            className="mb-3 text-lg"
            dangerouslySetInnerHTML={{ __html: html || '' }}
          />
        ) : (
          <div className="mb-3 text-lg">{children}</div>
        )}
      </Container>
      <div className="align-center flex gap-3 md:gap-5">
        {picture ? (
          <div className="relative aspect-square size-12 shrink-0 rounded-full">
            <div
              className={getFadeOverlayClassName(
                'absolute inset-0 z-10 size-full rounded-full'
              )}
            />
            <img
              src={picture}
              alt={name}
              className="absolute size-full rounded-full object-cover saturate-[40%]"
            />
          </div>
        ) : (
          <div className="from-dark to-dark/40 size-12 shrink-0 rounded-full bg-gradient-to-br" />
        )}
        <div className="flex flex-col">
          <p className="font-serif font-medium">{name}</p>
          <span className="flex flex-wrap gap-x-2 text-sm">
            <p>{company}</p>
            {companyLink && (
              <>
                •{' '}
                <a
                  href={companyLink}
                  className="text-dark/50 dark:text-light/50 underline"
                >
                  {companyLink}
                </a>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
