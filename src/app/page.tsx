import Appear from '@/components/effects/Appear'
import Beautiful from '@/components/effects/Beautiful'
import Fun from '@/components/effects/Fun'
import Reveal from '@/components/effects/Reveal'
import ProjectSummary from '@/components/entities/projects/ProjectsSummary'
import Box from '@wanner.work/box'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Box className="min-h-screen max-w-[1100px] mx-auto -mt-[120px] md:-mt-[100px] h-full flex items-center text-white px-5">
        <div>
          <Reveal>
            <h1 className="text-5xl md:text-6xl leading-[62px] md:leading-[70px]">
              The <span className="underline">web</span> should be <Beautiful />{' '}
              and <Fun /> to use.
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

      <section>
        <Box width="content" className="mx-auto text-white" px="medium">
          <h2 className="text-4xl">Latest projects</h2>
          <p className="mt-4 font-light italic opacity-70">
            See what I have been up to recently.
          </p>
        </Box>

        <Suspense>{<ProjectSummary />}</Suspense>
      </section>
      {/*<section className="mt-20">
        <Box width="content" className="mx-auto text-white" px="medium">
          <h2 className="text-4xl">Blog</h2>
          <p className="mt-4 font-light italic opacity-70">
            Read about the latest trends and technologies as well as tips and
            tricks.
          </p>
        </Box>

        <Suspense fallback="loading...">{<BlogSummary />}</Suspense>
      </section>*/}
    </main>
  )
}
