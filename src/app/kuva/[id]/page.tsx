import Img from '@/app/components/Img'
import { photos } from '@/utils'
import NavigationButton from '@/app/components/NavigationButton'

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
      <main className="flex flex-col text-center p-4">
        <h1 className="flex-grow-1 text-4xl bg-amber-100 flex flex-col justify-center items-center">
          {photo.description}
        </h1>
        <div className="bg-amber-100 basis-10/12 flex flex-col">
          <Img {...photo} className="w-full h-auto" alt="uaa uaa" />
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
