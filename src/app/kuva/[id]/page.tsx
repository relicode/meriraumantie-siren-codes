import Image from 'next/image'

import NavigationButton from '@/app/components/NavigationButton'
import { photos } from '@/utils'

export const generateStaticParams = () =>
  photos.map(({ id }) => ({
    id,
  }))

type Props = { params: ReturnType<typeof generateStaticParams>[number] }

const verticalImagesRE = /(000007|000008|000010|000022)/

const isVertical = (src: string) => verticalImagesRE.test(src)

const PhotoPage = ({ params: { id } }: Props) => {
  const photo = photos.find((p) => p.id === id)!
  const first = photos[0]
  const last = photos[photos.length - 1]
  const previous = photos[photos.indexOf(photo) - 1] || last
  const next = photos[photos.indexOf(photo) + 1] || first

  return (
    <>
      <main className="flex flex-col text-center p-4">
        <h1 className="flex-grow-1 text-4xl bg-amber-100 flex flex-col justify-center items-center">
          {photo.description}
        </h1>
        <div className="bg-amber-100 basis-10/12 flex flex-col justify-center">
          <Image
            priority
            src={photo.src}
            alt={photo.description}
            placeholder="blur"
            blurDataURL="/blurred-image.png"
            className="w-full h-auto"
            width={isVertical(photo.src) ? 800 : 1200}
            height={isVertical(photo.src) ? 1200 : 800}
            sizes="(max-width: 768px) 600px, 1200px"
          />
        </div>
      </main>{' '}
      <nav className="fixed bottom-8 w-full flex space-x-8 justify-center">
        <NavigationButton variant="left" href={`/kuva/${previous.id}`} />
        <NavigationButton variant="home" href={`/`} />
        <NavigationButton variant={photo === last ? 'back' : 'right'} href={`/kuva/${next.id}`} />
      </nav>
    </>
  )
}

export default PhotoPage
