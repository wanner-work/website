import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@wanner.work/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#131313',
        medium: '#1a1a1a',
        border: '#2b2b2b',
        light: '#D9D9D1'
      },
      height: {
        craft: '300px',
        year: '200px',
        0.25: '1px'
      },
      width: {
        picker: '300px'
      },
      gap: {
        0.25: '1px'
      },
      margin: {
        0.25: '1px'
      }
    }
  },
  plugins: []
}
export default config
