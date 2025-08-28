// @ts-check

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: []
  },
  adapter: vercel()
})
