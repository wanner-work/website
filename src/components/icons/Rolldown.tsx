import type { SVGProps } from 'react'
const SvgRolldown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <g clipPath="url(#rolldown_svg__a)">
      <path
        fill="currentColor"
        d="M46.76 17.06H29.417l2.673-3.344-19.16-.04-9.361 11.983h18.19l-8.034 11.203H0L16.667 50 50 36.862H33.504zM43.057 0H23.614l-2.67 3.419h19.381zm-5.295 6.624H18.439l-2.928 3.748h19.254z"
      />
    </g>
    <defs>
      <clipPath id="rolldown_svg__a">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgRolldown
