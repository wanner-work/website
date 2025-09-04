import Button from '@/components/ui/button/Button'
import { X } from 'lucide-react'
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

    setActiveTabs(Array.from(params.getAll('tag')))
    onTagCallback(Array.from(params.getAll('tag')))
  }

  const clearTabs = () => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.delete('tag')
    url.search = params.toString()
    window.history.pushState({}, '', url.toString())
    setActiveTabs([])
    onTagCallback([])
  }

  return (
    <div className="mb-12 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Button
          key={tag}
          iconAfter={activeTabs.includes(tag) ? X : undefined}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </Button>
      ))}
      {activeTabs.length > 0 && <Button
          iconAfter={X}
          onClick={clearTabs}
        />}
    </div>
  )
}
