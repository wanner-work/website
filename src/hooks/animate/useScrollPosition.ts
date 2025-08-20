import { useScroll } from 'motion/react'
import { useEffect, useState } from 'react'

export default function useScrollPosition() {
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
