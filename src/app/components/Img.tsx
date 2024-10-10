import Image, { ImageProps } from 'next/image'

const Img = ({ src, width, height, alt }: ImageProps) => (
  <Image className="max-h-full w-auto mx-auto" src={src} width={width} height={height} alt={alt || 'Merirauma'} />
)

export default Img
