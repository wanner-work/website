import type { SVGProps } from 'react'
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    fill="none"
    viewBox="0 0 32 50"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#figma_svg__a)">
      <path d="M16 25c0-4.408 3.574-8 8-8 4.408 0 8 3.574 8 8 0 4.408-3.574 8-8 8-4.408 0-8-3.592-8-8M0 41.5C0 36.816 3.574 33 8 33h8v8.5c0 4.684-3.574 8.5-8 8.5s-8-3.797-8-8.5M16 .02V17h8c4.408 0 8-3.797 8-8.5C32 3.816 28.426 0 24 0h-8zM0 8.5C0 13.184 3.574 17 8 17h8V0H8C3.574 0 0 3.797 0 8.5M0 25c0 4.408 3.574 8 8 8h8V17H8c-4.426 0-8 3.592-8 8" />
    </g>
    <defs>
      <clipPath id="figma_svg__a">
        <path fill="#fff" d="M0 0h32v50H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgFigma
