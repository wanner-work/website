interface Props {
  size?: number
  className?: string
  background?: string
}

export default function Logo({ size = 1, className }: Props) {
  return (
    <svg width={800 * size} height={480 * size} viewBox="0 0 800 480" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2031_23)">
        <path d="M0 0H148.187L322 339.675L244.007 480L0 0Z" fill="currentColor"/>
        <path d="M289 0H437.187L611 339.675L533.007 480L289 0Z" fill="currentColor"/>
        <path d="M591 0H800L697.451 185L700.795 55.7229L591 0Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_2031_23">
          <rect width="800" height="480" fill="currentColor"/>
        </clipPath>
      </defs>
    </svg>
  )
}
