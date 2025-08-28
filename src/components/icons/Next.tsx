import type { SVGProps } from 'react'
const SvgNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <g clipPath="url(#next_svg__a)">
      <mask
        id="next_svg__b"
        width={50}
        height={50}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha'
        }}
      >
        <path
          fill="#000"
          d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25"
        />
      </mask>
      <g mask="url(#next_svg__b)">
        <path
          fill="currentColor"
          d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25"
        />
        <path
          fill="url(#next_svg__c)"
          d="M41.53 43.756 19.206 15H15v19.992h3.365V19.273L38.889 45.79q1.39-.931 2.641-2.035"
        />
        <path fill="url(#next_svg__d)" d="M35.278 15h-3.334v20h3.334z" />
      </g>
    </g>
    <defs>
      <linearGradient
        id="next_svg__c"
        x1={30.278}
        x2={40.139}
        y1={32.361}
        y2={44.583}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8DFCB" />
        <stop offset={1} stopColor="#E8DFCB" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="next_svg__d"
        x1={33.611}
        x2={33.555}
        y1={15}
        y2={29.688}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8DFCB" />
        <stop offset={1} stopColor="#E8DFCB" stopOpacity={0} />
      </linearGradient>
      <clipPath id="next_svg__a">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgNext
