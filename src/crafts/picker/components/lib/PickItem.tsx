import {
  type HTMLProps,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'
import { usePickerActions, usePickerData } from './Pick'
import { useColumnData } from './PickColumn'

interface PickerItemRenderProps {
  selected: boolean
}

export interface PickerItemProps
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'children'> {
  children: ReactNode | ((renderProps: PickerItemRenderProps) => ReactNode)
  value: string | number
}

// eslint-disable-next-line
function isFunction(functionToCheck: any): functionToCheck is Function {
  return typeof functionToCheck === 'function'
}

function PickItem({ style, children, value, ...restProps }: PickerItemProps) {
  const optionRef = useRef<HTMLDivElement | null>(null)
  const { itemHeight, value: pickerValue } = usePickerData('Picker.Item')
  const pickerActions = usePickerActions('Picker.Item')
  const { key } = useColumnData('Picker.Item')

  useEffect(
    () => pickerActions.registerOption(key, { value, element: optionRef }),
    [key, pickerActions, value]
  )

  const itemStyle = useMemo(
    () => ({
      height: `${itemHeight}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    [itemHeight]
  )

  const handleClick = useCallback(() => {
    pickerActions.change(key, value)
  }, [pickerActions, key, value])

  return (
    <div
      style={{
        ...itemStyle,
        ...style
      }}
      ref={optionRef}
      onClick={handleClick}
      {...restProps}
    >
      {isFunction(children)
        ? children({ selected: pickerValue[key] === value })
        : children}
    </div>
  )
}

export default PickItem
