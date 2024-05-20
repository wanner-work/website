import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export default function getURLProperty(
  properties: PageObjectResponse['properties'],
  name: string
) {
  if (properties[name]) {
    const property = properties[name]
    if (property.type === 'url' && property.url) {
      return new URL(property.url).toString()
    }
  }

  return 'error'
}
