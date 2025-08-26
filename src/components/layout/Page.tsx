import Box from '@wanner.work/box'
import { type PropsWithChildren } from 'react'
import getFadeOverlay from '../../methods/getFadeOverlay'
import getTextFadeClassName from '../../methods/getTextFadeString'
import Logo from '../brand/Logo'

interface Props {
  title?: string
  description?: string
}

export default function Page({
  title,
  description,
  children
}: Readonly<PropsWithChildren<Props>>) {
  return (
    <>
      {(title || description) && (
        <Box
          align="center"
          className="max-w-small md:max-w-large flex flex-col px-8 pt-14"
        >
          <div className="mb-4">
            <a href="/" className="relative inline-block overflow-hidden">
              <div
                className={getFadeOverlay('absolute top-0 left-0 size-full')}
              />
              <Logo size={0.07} className="text-dark" />
            </a>
          </div>
          <h1
            className={getTextFadeClassName(
              'font-serif text-5xl leading-22 font-bold md:text-6xl'
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={getTextFadeClassName(
                'mt-4 max-w-[400px] text-xl font-medium md:text-2xl'
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
