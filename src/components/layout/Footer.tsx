import Box from '@wanner.work/box'
import Logo from '../brand/Logo'

export default function Footer() {
  return (
    <div className="relative h-[280px] md:mt-12">
      <Box
        align="center"
        className="max-w-small md:max-w-large absolute inset-0 z-20 mx-auto flex flex-col justify-end px-8 py-8"
      >
        <p className="text-light dark:text-dark font-light">
          wanner.work © <span className="text-sm">2025</span>
        </p>
        <p className="text-light dark:text-dark font-serif text-4xl font-bold">
          Soli Deo Gloria.
        </p>
      </Box>
      <div className="absolute inset-0 h-full overflow-hidden">
        <div className="from-light to-dark/80 dark:from-dark/80 dark:to-light/60 absolute z-10 size-full bg-linear-to-b" />
        <Logo className="text-dark dark:text-light absolute left-0 w-full scale-110" />
      </div>
    </div>
  )
}
