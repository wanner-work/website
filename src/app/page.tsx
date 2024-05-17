import Appear from '@/components/effects/Appear'
import Beautiful from '@/components/effects/Beautiful'
import Fun from '@/components/effects/Fun'
import Reveal from '@/components/effects/Reveal'
import Box from '@wanner.work/box'

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
          <Appear>
            <p className="mt-8 text-xl font-light italic opacity-70">
              That's what I offer.
            </p>
          </Appear>
        </div>
      </Box>
      <section>
        <Box width="content" className="mx-auto text-white" px="large">
          <h2 className="text-3xl">Latest projects</h2>
          <p className="mt-2 font-light italic opacity-70">
            See what I have been up to recently.
          </p>
        </Box>
      </section>
      <section className="mt-12">
        <Box width="content" className="mx-auto text-white" px="large">
          <h2 className="text-3xl">Blog</h2>
          <p className="mt-2 font-light italic opacity-70">
            Read about the latest trends and technologies as well as tips and
            tricks.
          </p>
        </Box>
      </section>

      <section className="mt-12">
        <Box width="content" className="mx-auto text-white" px="large">
          <h2 className="text-3xl">Packages</h2>
          <p className="mt-2 font-light italic opacity-70">
            Check out my latest packages and tools.
          </p>
        </Box>
      </section>
    </main>
  )
}
