interface Props {
  size?: number
  color?: string
  className?: string
  background?: string
}

export default function Logo({
  size = 1,
  color = 'white',
  background = 'black',
  className
}: Props) {
  return (
    <svg
      className={className}
      width={1200 * size}
      height={1200 * size}
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1200" height="1200" fill={background} />
      <path
        d="M870 566L764 372.5L983.5 376.5L870 566Z"
        fill={color}
        stroke={background}
      />
      <rect
        width="118.948"
        height="507.299"
        transform="matrix(0.907515 -0.420019 0.454872 0.890557 236.837 376.845)"
        fill={color}
      />
      <rect
        width="101.357"
        height="231.365"
        transform="matrix(0.893453 0.449156 -0.485139 0.874437 553.359 646.329)"
        fill={background}
      />
      <rect
        width="118.948"
        height="507.299"
        transform="matrix(0.907515 -0.420019 0.454872 0.890557 496.959 376.845)"
        fill={color}
      />
      <path
        d="M870.491 434L866.694 585.44L730.139 362.603L870.491 434Z"
        fill={background}
      />
      <rect x="237" y="285" width="737" height="99" fill={background} />
      <rect x="237" y="815" width="822" height="99" fill={background} />
      <rect x="812" y="761" width="110" height="99" fill={background} />
      <rect
        width="82.2713"
        height="583.391"
        transform="matrix(0.893453 0.449156 -0.485139 0.874437 985.026 338)"
        fill={background}
      />
      <rect
        x="960"
        y="914"
        width="629"
        height="99"
        transform="rotate(-90 960 914)"
        fill={background}
      />
      <rect
        x="141"
        y="914"
        width="629"
        height="99"
        transform="rotate(-90 141 914)"
        fill={background}
      />
    </svg>
  )
}
