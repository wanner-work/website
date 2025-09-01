import getFadeClassName from '@/methods/ui/getFadeClassName'
import { useEffect, useState } from 'react'

interface Props {
  tags: string[]
  onTagCallback: (tag: string[]) => void
}

export default function ProjectFilter({ tags, onTagCallback }: Props) {
  const [activeTabs, setActiveTabs] = useState<string[]>([])

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const tags = params.getAll('tag')
    setActiveTabs(tags)
  }, [])

  useEffect(() => {
    onTagCallback(activeTabs)
  }, [activeTabs])

  const toggleTag = (tag: string) => {
    // add or remove query param
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)

    if (params.has('tag')) {
      const tags = params.getAll('tag')
      if (tags.includes(tag)) {
        tags.splice(tags.indexOf(tag), 1)
      } else {
        tags.push(tag)
      }
      params.delete('tag')
      tags.forEach((t) => params.append('tag', t))
    } else {
      params.append('tag', tag)
    }

    url.search = params.toString()
    window.history.pushState({}, '', url.toString())

    onTagCallback(Array.from(params.getAll('tag')))
  }

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          className={getFadeClassName(
            'text-light cursor-pointer rounded-full px-2 py-1 text-[10px] font-medium uppercase transition-all hover:opacity-80 active:scale-95'
          )}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
