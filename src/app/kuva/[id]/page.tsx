import Link from 'next/link'

import Img from '@/app/Img'
import { photos } from '@/utils'

export const generateStaticParams = () =>
  photos.map(({ id }) => ({
    id,
  }))

type Props = { params: ReturnType<typeof generateStaticParams>[number] }

const PhotoPage = ({ params: { id } }: Props) => {
  const photo = photos.find((p) => p.id === id)!
  const first = photos[0]
  const last = photos[photos.length - 1]
  const previous = photos[photos.indexOf(photo) - 1] || last
  const next = photos[photos.indexOf(photo) + 1] || first

  return (
    <>
      <div className="h-5/6 text-center">
        <Img src={photo.src} width={photo.width} height={photo.height} alt={photo.description} />
      </div>
      <div className="text-xl h-1/6 flex flex-col justify-center items-center text-center">
        <h1 className="bg-amber-100 border-amber-200 px-8 rounded flex-initial basis-1/2 flex justify-center flex-col">
          {photo.description}
        </h1>
        <nav className="flex flex-initial basis-1/2 space-x-8 mt-4">
          <Link
            className="flex justify-center flex-col bg-amber-300 hover:bg-amber-400 active:bg-amber-400 h-[36px] w-[36px] rounded-[50%]"
            href={`/kuva/${previous.id}`}
          >
            {'🡠'}
          </Link>
          <Link
            className="flex justify-center flex-col bg-amber-300 hover:bg-amber-400 active:bg-amber-400 h-[36px] w-[36px] rounded-[50%]"
            href="/"
          >
            &#x2302;
          </Link>
          <Link
            className="flex justify-center flex-col bg-amber-300 hover:bg-amber-400 active:bg-amber-400 h-[36px] w-[36px] rounded-[50%]"
            href={`/kuva/${next.id}`}
          >
            {photo === last ? '⭯' : '🡢'}
          </Link>
        </nav>
      </div>
    </>
  )
}

export default PhotoPage
