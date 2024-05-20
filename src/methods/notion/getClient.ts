import { Client } from '@notionhq/client'

export default function getClient() {
  return new Client({
    auth: process.env.NOTION_SECRET
  })
}
