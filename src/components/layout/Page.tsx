import Box from '@wanner.work/box'
import { type PropsWithChildren } from 'react'
import getFadeOverlayClassName from '../../methods/ui/getFadeOverlayClassName'
import getTextFadeClassName from '../../methods/ui/getTextFadeClassName'
import Logo from '../brand/Logo'
import { MoveLeft, MoveRight } from 'lucide-react'
import getFadeClassName from '@/methods/ui/getFadeClassName'

interface Props {
  title?: string
  description?: string
  back?: string
}

export default function Page({
  title,
  description,
  back,
  children
}: Readonly<PropsWithChildren<Props>>) {
  return (
    <>
      {(title || description || back) && (
        <Box
          align="center"
          className="max-w-small md:max-w-large flex flex-col px-8 pt-14"
        >
          <div className="mb-4">
            <a href="/" className="relative inline-block overflow-hidden">
              <div
                className={getFadeOverlayClassName('absolute top-0 left-0 size-full')}
              />
              <Logo size={0.07} className="text-dark" />
            </a>
          </div>
          {back && (
            <div className='flex'>
              <a
                href={back}
                className='transition-all hover:gap-3 hover:opacity-80 active:scale-95 flex items-center gap-2 mt-4'
              >
                <span>
                  <MoveLeft className="size-4 text-dark/40 dark:text-light/40" />
                </span>
                <span className={getTextFadeClassName()}>
                  Back
                </span>
              </a>
            </div>
          )}
          {title && <h1
            className={getTextFadeClassName(
              'font-serif text-5xl leading-22 font-bold md:text-6xl'
            )}
          >
            {title}
          </h1>}
          {description && (
            <p
              className={getTextFadeClassName(
                'mt-4 max-w-[500px] text-xl font-medium md:text-2xl'
              )}
            >
              {description}
            </p>
          )}
        </Box>
      )}
      <Box align="center" className="max-w-small md:max-w-large mt-12 px-8">
        {children}
      </Box>
    </>
  )
}
