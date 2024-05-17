import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@wanner.work/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'beautiful-gradient':
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);',
        'fun-gradient':
          'linear-gradient(90deg, rgba(14,53,130,1) 0%, rgba(9,121,12,1) 35%, rgba(0,212,255,1) 100%);'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
