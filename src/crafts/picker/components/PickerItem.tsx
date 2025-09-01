import type { RowComponentProps } from 'react-window'

export default function PickerItem({
  index,
  options,
  style
}: RowComponentProps<{
  options: {
    key: string | number
    value: any
  }[]
}>) {
  return (
    <div
      key={options[index].key}
      style={style}
      className="flex items-center select-none"
    >
      {options[index].value}
    </div>
  )
}
