import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export default function getDateProperty(
  properties: PageObjectResponse['properties'],
  name: string
) {
  if (properties[name]) {
    const property = properties[name]

    if (property.type === 'date' && property?.date?.start) {
      return property.date.start
    }
  }

  return 'error'
}
