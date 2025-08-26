import Box from '@wanner.work/box'
import getFadeOverlay from '../../methods/getFadeOverlay'
import getTextFadeClassName from '../../methods/getTextFadeString'
import Logo from '../brand/Logo'
import getFadeClassName from '../../methods/getFadeClassName'
import { ContactIcon, MailIcon, MessageSquareIcon } from 'lucide-react'

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
          <div className={getFadeOverlay('absolute top-0 left-0 size-full')} />
          <Logo size={0.07} className="text-dark" />
        </a>
      </div>
      <h1
        dangerouslySetInnerHTML={{ __html: title }}
        className={getTextFadeClassName(
          'font-serif text-5xl leading-16 md:leading-18 font-bold md:text-6xl mb-6'
        )}
      />
      <p
        dangerouslySetInnerHTML={{ __html: subtitle }}
        className={getTextFadeClassName(
          'max-w-[400px] text-2xl font-medium md:text-2xl'
        )}
      />

    <div className='mt-8 md:mt-12 flex'>
      <a href='mailto:jonas@wanner.com' className={getFadeClassName('text-light dark:text-dark px-4 py-3 text-sm font-medium cursor-pointer flex gap-3 items-center hover:opacity-80 active:scale-95 transition')}>
        Kontaktiere mich!

        <span>
          <MailIcon className='size-4' />
        </span>
      </a>
    </div>
  </Box>
  )
}
