import { useMemo } from 'react'
import Astro from '../../icons/Astro'
import Figma from '../../icons/Figma'
import Liferay from '../../icons/Liferay'
import Next from '../../icons/Next'
import React from '../../icons/React'
import Rolldown from '../../icons/Rolldown'
import TypeScript from '../../icons/Typescript'
import Vue from '../../icons/Vue'
import SkillsPair from './SkillsPair'

export default function Skills() {
  const items = [
    {
      title: 'React',
      svg: React,
      link: 'https://react.dev'
    },
    {
      title: 'Vue',
      svg: Vue,
      link: 'https://vuejs.org'
    },
    {
      title: 'Next.js',
      svg: Next,
      link: 'https://nextjs.org'
    },
    {
      title: 'Astro',
      svg: Astro,
      link: 'https://astro.build'
    },
    {
      title: 'Figma',
      svg: Figma,
      link: 'https://www.figma.com'
    },
    {
      title: 'Liferay',
      svg: Liferay,
      link: 'https://www.liferay.com'
    },
    {
      title: 'TypeScript',
      svg: TypeScript,
      link: 'https://www.typescriptlang.org/'
    },
    {
      title: 'Rolldown',
      svg: Rolldown,
      link: 'https://rolldown.rs'
    }
  ]

  const pairs = useMemo(() => {
    const pairs = []
    for (let i = 0; i < items.length; i += 2) {
      pairs.push([items[i], items[i + 1]])
    }
    return pairs
  }, [items])

  return (
    <div className="">
      <ul className="relative mx-auto flex h-[96px] items-center justify-between">
        {pairs.map(([item1, item2], index) => (
          <SkillsPair key={index} item1={item1} item2={item2} index={index} />
        ))}
      </ul>
    </div>
  )
}
