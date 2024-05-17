import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export default function getPlainProperty(
  properties: PageObjectResponse['properties'],
  name: string
) {
  if (properties[name]) {
    const property = properties[name]
    if (property.type === 'rich_text' && property.rich_text.length > 0) {
      return property.rich_text[0].plain_text
    }
  }

  return 'error'
}
