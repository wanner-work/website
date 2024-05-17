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
              The <span>web</span> should be{' '}
              <Beautiful>
                <span className="bg-beautiful-gradient bg-clip-text text-transparent">
                  beautiful
                </span>
              </Beautiful>{' '}
              and{' '}
              <Fun>
                <span className="bg-fun-gradient bg-clip-text text-transparent">
                  fun
                </span>
              </Fun>{' '}
              to use.
            </h1>
          </Reveal>
          <Appear>
            <p className="mt-8 text-xl font-light italic opacity-70">
              That's what I offer.
            </p>
          </Appear>
        </div>
      </Box>
    </main>
  )
}
