import type { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="prose dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:underline prose-a:text-dark/80 prose-a:font-bold prose-p:text-justify prose-p:text-dark/80 prose-p:dark:text-light/80 prose-img:rounded-large prose-headings:font-bold prose-headings:text-dark/80 prose-headings:dark:text-light/80">
      {children}
    </div>
  )
}
