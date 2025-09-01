import type { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
  return <div className="prose dark:prose-invert
  prose-h1:font-bold prose-h1:text-xl
  prose-a:underline prose-p:text-justify prose-p:text-dark prose-p:dark:text-light prose-img:rounded-large
  prose-headings:font-bold prose-headings:text-dark prose-headings:dark:text-light">{children}</div>
}
