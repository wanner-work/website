import Appear from '@/components/effects/Appear'
import Box from '@wanner.work/box'

interface Props {
  title: string
  description: string
  image?: string
}

export default function PageHeader({ title, description, image }: Props) {
  return (
    <Box
      className="h-[35vh] flex items-center justify-center flex-col"
      px="medium"
    >
      <Appear delay={0.3}>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </Appear>
      <Appear rotate={0} delay={0.8} duration={0.5}>
        <p className="mt-8 text-white opacity-70 max-w-[550px] text-center">
          {description}
        </p>
      </Appear>
    </Box>
  )
}
