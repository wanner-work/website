import * as content from '../../../data/i18n.md'

export default function getI18n(key: string) {
  return content.frontmatter[key] ?? key
}
