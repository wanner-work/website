import Message from '@/components/alert/Message'
import Appear from '@/components/effects/Appear'
import Beautiful from '@/components/effects/Beautiful'
import Fun from '@/components/effects/Fun'
import Reveal from '@/components/effects/Reveal'
import SimpleReveal from '@/components/effects/SimpleReveal'
import ProjectSummary from '@/components/entities/projects/ProjectsSummary'
import Box from '@wanner.work/box'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <main className="mt-16 overflow-hidden md:mt-0">
        <Box
          width="large"
          align="center"
          px="medium"
          className="-mt-[120px] flex h-full min-h-screen items-center text-white md:-mt-[100px]"
        >
          <div>
            <Reveal>
              <h1 className="text-5xl leading-[62px] md:text-6xl md:leading-[70px]">
                The <span className="underline">web</span> should be{' '}
                <Beautiful /> and <Fun /> to use.
              </h1>
            </Reveal>
            <p className="mt-8 text-xl font-light italic opacity-70">
              <Appear delay={3} duration={1}>
                <span className="mr-2">That's what I offer.</span>
              </Appear>
              <Appear delay={5} duration={2}>
                <span className="opacity-50">Or at least I try.</span>
              </Appear>
            </p>
          </div>
        </Box>
      </main>
      <SimpleReveal>
        <section>
          <Box width="medium" align="center" className="text-white" px="medium">
            <h2 className="text-4xl">Latest projects</h2>
            <p className="mb-12 mt-4 font-light italic opacity-70">
              See what I have been up to recently.
            </p>

            <Suspense>{<ProjectSummary />}</Suspense>
          </Box>
        </section>
      </SimpleReveal>

      <Suspense>
        <Message />
      </Suspense>
    </>
  )
}
