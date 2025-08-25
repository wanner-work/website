// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import rehypeWrapImages from './src/rehype/rehypeWrapImages';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [
      rehypeWrapImages
    ]
  },
  adapter: vercel(),
});