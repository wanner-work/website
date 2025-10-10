import { defineCollection, z } from 'astro:content'

import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './data/projects' }),
  schema: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    published: z.coerce.date(),
    tags: z.array(z.string()),
    priority: z.boolean().optional(),
    hidden: z.boolean().optional()
  })
})

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './data/testimonials' }),
  schema: z.object({
    picture: z.string().optional(),
    name: z.string(),
    company: z.string(),
    companyLink: z.string().url(),
    priority: z.boolean().optional(),
    tags: z.array(z.string()).optional()
  })
})

const crafts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './data/crafts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    priority: z.boolean().optional()
  })
})

export const collections = { projects, testimonials, crafts }
