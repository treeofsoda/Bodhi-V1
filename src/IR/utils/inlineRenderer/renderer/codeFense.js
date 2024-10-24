import { CLASS_NAMES } from '@/config'

// eslint-disable-next-line no-unused-vars
export default function codeFense (h, cursor, block, token, outerClass) {
  const { start, end } = token.range
  const { marker } = token

  const markerContent = this.highlight(h, block, start, start + marker.length, token)
  const content = this.highlight(h, block, start + marker.length, end, token)

  return [
    h(`span.${CLASS_NAMES.MU_GRAY}`, markerContent),
    h(`span.${CLASS_NAMES.MU_LANGUAGE}`, {
      attrs: {
        spellcheck: 'false'
      }
    }, content)
  ]
}
