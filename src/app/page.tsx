import Appear from '@/components/effects/Appear'
import Beautiful from '@/components/effects/Beautiful'
import Fun from '@/components/effects/Fun'
import Reveal from '@/components/effects/Reveal'
import BlogSummary from '@/components/entities/blog/BlogSummary'
import ProjectSummary from '@/components/entities/projects/ProjectsSummary'
import Box from '@wanner.work/box'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Box
        className="min-h-screen max-w-[1100px] mx-auto -mt-[100px] h-full flex items-center text-white"
        px="large"
      >
        <div>
          <Reveal>
            <h1 className="text-6xl leading-[70px]">
              The <span className="underline">web</span> should be <Beautiful />{' '}
              and <Fun /> to use.
            </h1>
          </Reveal>
          <p className="mt-8 text-xl font-light italic opacity-70">
            <Appear delay={4} duration={1}>
              That's what I offer
            </Appear>
            <Appear delay={6} duration={2}>
              <span className="opacity-50">. Or at least try.</span>
            </Appear>
          </p>
        </div>
      </Box>

      <section>
        <Box width="content" className="mx-auto text-white" px="large">
          <h2 className="text-4xl">
            Latest projects
            <span></span>
          </h2>
          <p className="mt-4 font-light italic opacity-70">
            See what I have been up to recently.
          </p>
        </Box>

        <Suspense fallback="loading...">
          <ProjectSummary />
        </Suspense>
      </section>
      <section className="mt-20">
        <Box width="content" className="mx-auto text-white" px="large">
          <h2 className="text-4xl">Blog</h2>
          <p className="mt-4 font-light italic opacity-70">
            Read about the latest trends and technologies as well as tips and
            tricks.
          </p>
        </Box>

        <Suspense fallback="loading...">
          <BlogSummary />
        </Suspense>
      </section>
    </main>
  )
}
