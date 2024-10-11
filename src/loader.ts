import { parse } from 'path'

const imageRE = /meriraumantie-\d+/

export default function loader({ src, width }: { src: string; width: number }) {
  if (!imageRE.test(src)) return src

  const parsed = parse(src)
  const name = width < 768 ? `small/${parsed.name}` : parsed.name

  const url = new URL(`http://localhost:3000${parsed.dir}/${name}${parsed.ext}`)
  url.searchParams.append('width', String(width))
  return `${url.pathname}${url.search}`
}
