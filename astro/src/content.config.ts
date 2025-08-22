import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    image: z.string().optional(),
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    published: z.coerce.date()
  })
});

export const collections = { projects };