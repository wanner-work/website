import { defineCollection, z } from 'astro:content'

import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    published: z.coerce.date()
  })
})

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/testimonials' }),
  schema: z.object({
    picture: z.string().optional(),
    name: z.string(),
    company: z.string(),
    companyLink: z.string().url()
  })
})

const crafts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/crafts' }),
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
})

export const collections = { projects, testimonials, crafts }
