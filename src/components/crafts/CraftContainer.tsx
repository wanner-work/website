import { ReactNode } from 'react'

interface Props {
  title: string
  description: string
  children: ReactNode
}

export default function CraftContainer({
  title,
  description,
  children
}: Props) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h1 className="mb-1 text-lg font-bold lowercase text-light">{title}</h1>
        <p className="text-sm lowercase text-light/70">{description}</p>
      </div>
      <div className="bg-medium h-craft border-border w-full overflow-auto rounded-lg border border-solid px-8 py-6 md:px-14 md:py-10">
        {children}
      </div>
    </div>
  )
}
