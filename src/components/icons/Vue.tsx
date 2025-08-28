import type { SVGProps } from 'react'
const SvgVue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      fill="currentColor"
      d="M30.774 3 25 13.104 19.227 3H0l25 43.75L50 3z"
    />
    <path
      fill="currentColor"
      d="M30.774 3 25 13.104 19.228 3h-9.226l15 26.25L40 3z"
    />
  </svg>
)
export default SvgVue
