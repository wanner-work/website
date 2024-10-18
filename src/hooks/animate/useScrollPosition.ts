import {useEffect, useState} from 'react'
import {useScroll} from 'framer-motion'

export default function useScrollPosition ()  {
  const [y, setY] = useState(0)

  const { scrollY } = useScroll()

  useEffect(() => {
    scrollY.on('change', (v) => {
      setY(v)
    })
  }, [scrollY])

  return {
    y
  }
}