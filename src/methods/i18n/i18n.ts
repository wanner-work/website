import * as content from '../../../data/i18n.md'

export default function i18n(key: string) {
  return content.frontmatter[key] ?? key
}
