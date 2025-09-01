import { motion, transformValue, useScroll, useSpring } from 'motion/react'
import { type MutableRefObject, useRef } from 'react'
import { List } from 'react-window'
import PickerItem from './PickerItem'
import { useDraggable } from 'react-use-draggable-scroll'

interface Props {
  onChange: (value: number | string | undefined) => void
  options: {
    key: string | number
    value: any
  }[]
}

export default function Picker({ options }: Props) {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>

  const { events } = useDraggable(ref, {
      applyRubberBandEffect: true
  })

  return (
    <div className="relative" style={{ height: '200px' }}>
       <List
          rowComponent={PickerItem}
          rowCount={options.length}
          rowHeight={48}
          rowProps={{ options }}
        />
    </div>
  )
}
