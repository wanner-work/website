import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export default function getName(properties: PageObjectResponse['properties']) {
  if (properties['Name']) {
    const property = properties['Name']
    if (property.type === 'title' && property.title.length > 0) {
      return property.title[0].plain_text
    }
  }

  return 'error'
}
