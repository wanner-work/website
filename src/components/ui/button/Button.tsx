import getFadeClassName from '@/methods/ui/getFadeClassName'
import type { FunctionComponent, PropsWithChildren } from 'react'

interface Props {
  href?: string
  target?: string
  iconAfter?: FunctionComponent<{
    className?: string
  }>
}

export default function Button({
  iconAfter: IconAfter,
  href,
  target,
  children
}: PropsWithChildren<Props>) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      target={target}
      className={getFadeClassName(
        'text-light dark:text-dark flex cursor-pointer items-center gap-3 rounded-full transition-all hover:gap-5 hover:opacity-80 active:scale-95',
        children && 'px-6 py-4 text-sm font-medium',
        !children && 'size-[56px] items-center justify-center'
      )}
    >
      {children}
      {IconAfter && (
        <span className="icon-after">
          <IconAfter className="size-4" />
        </span>
      )}
    </Component>
  )
}
