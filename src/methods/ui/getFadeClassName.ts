import clsx, { type ClassValue } from 'clsx'

export default function getFadeClassName(...className: ClassValue[]) {
  return clsx(
    `from-dark/40 dark:from-light/40 to-dark dark:to-light bg-gradient-to-br`,
    ...className
  )
}
