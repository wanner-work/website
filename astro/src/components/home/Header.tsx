import Box from '@wanner.work/box'
import getFadeOverlay from '../../methods/getFadeOverlay'
import getTextFadeClassName from '../../methods/getTextFadeString'
import SplitText from '../animate/SplitText'
import Logo from '../brand/Logo2'

interface Props {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle }: Props) {
  return (
    <Box
      align="center"
      className="max-w-small md:max-w-large flex flex-col px-8 pt-14"
    >
      <div className="mb-4">
        <a href="/" className="relative inline-block overflow-hidden">
          <div className={getFadeOverlay('absolute top-0 left-0 size-full')} />
          <Logo size={0.07} className="text-dark" />
        </a>
      </div>
      <div className="flex flex-col items-baseline gap-1">
        <p
          className={getTextFadeClassName(
            'font-serif text-5xl leading-18 font-bold md:text-6xl'
          )}
        >
          Hey, ich bin
        </p>
        <SplitText
          text="Jonas."
          className={getTextFadeClassName(
            'inline text-left font-serif text-5xl leading-18 font-extrabold italic md:text-6xl'
          )}
          delay={200}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
        />
      </div>
      <h1
        dangerouslySetInnerHTML={{ __html: title }}
        className={getTextFadeClassName(
          'sr-only font-serif text-5xl leading-18 font-bold md:text-6xl'
        )}
      />
      <p
        dangerouslySetInnerHTML={{ __html: subtitle }}
        className={getTextFadeClassName(
          'mt-6 max-w-[400px] text-xl font-medium md:text-2xl'
        )}
      />
    </Box>
  )
}
