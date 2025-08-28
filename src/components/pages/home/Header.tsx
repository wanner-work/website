import Box from '@wanner.work/box'
import { MoveRight } from 'lucide-react'
import getFadeClassName from '../../../methods/ui/getFadeClassName'
import getFadeOverlayClassName from '../../../methods/ui/getFadeOverlayClassName'
import getTextFadeClassName from '../../../methods/ui/getTextFadeClassName'
import Logo from '../../brand/Logo'

interface Props {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle }: Props) {
  return (
    <Box
      align="center"
      className="max-w-small md:max-w-large flex flex-col px-8 pt-12 md:pt-20"
    >
      <div className="mb-6 md:mb-12">
        <a href="/" className="relative inline-block overflow-hidden">
          <div className={getFadeOverlayClassName('absolute top-0 left-0 size-full')} />
          <Logo size={0.07} className="text-dark" />
        </a>
      </div>
      <h1
        dangerouslySetInnerHTML={{ __html: title }}
        className={getTextFadeClassName(
          'mb-6 font-serif text-5xl leading-16 font-bold md:text-6xl md:leading-18'
        )}
      />
      <p
        dangerouslySetInnerHTML={{ __html: subtitle }}
        className={getTextFadeClassName(
          'max-w-[400px] text-2xl font-medium md:text-2xl'
        )}
      />

      <div className="mt-8 flex md:mt-12">
        <a
          href="mailto:jonas@wanner.com"
          className={getFadeClassName(
            'text-light dark:text-dark flex cursor-pointer items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition-all hover:gap-5 hover:opacity-80 active:scale-95'
          )}
        >
          Kontaktiere mich!
          <span>
            <MoveRight className="size-4" />
          </span>
        </a>
      </div>
    </Box>
  )
}
