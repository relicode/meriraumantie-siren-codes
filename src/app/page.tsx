import Image from 'next/image'
import Link from 'next/link'

import { info, photos, thumbs } from '@/utils'
import Img from './components/Img'

const photo = photos[3]

const Home = () => (
  <main className="p-4">
    <h1 className="text-4xl text-center pb-4">Myydään - Rauma</h1>
    <div className="grid grid-cols-12 bg-amber-100 rounded-sm p-2">
      <div className="col-span-5">
        <h2>Kerrostalo | 3h, k</h2>
        <h2 className="font-bold">Ruoripolku 1 A, Merirauma, Rauma</h2>
      </div>
      <div className="col-span-3">
        <h2>Hinta</h2>
        <h2 className="font-bold">{info.price}</h2>
      </div>
      <div className="col-span-2">
        <h2>Koko</h2>
        <h2 className="font-bold">{info.area}</h2>
      </div>
      <div className="col-span-2">
        <h2>Vuosi</h2>
        <h2 className="font-bold">{info.year}</h2>
      </div>
    </div>
    <div className="p-4">
      <Img {...photo} alt={photo.description} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        {info.copy.split('\n').map((c, idx) => (
          <p key={c} className={idx ? 'mt-2' : ''}>
            {c}
          </p>
        ))}
      </div>
      <div className="hidden md:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1845.0203909205252!2d21.471136128171725!3d61.14871024765168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46897f87811ecfc1%3A0x7cb8151536254484!2sCasa%20Merikotilo!5e1!3m2!1sen!2sfi!4v1728564558019!5m2!1sen!2sfi"
          width="100%"
          height="100%"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div className="grid grid-cols-4 md:grid-cols-6 gap-2 p-4">
      {thumbs.map((p) => (
        <Link
          className="flex-1 basis-10 bg-amber-100 border-amber-200 hover:bg-amber-200 hover:border-amber-300 active:bg-amber-200 active:border-amber-300 border-1 rounded p-2"
          key={p.id}
          href={`/kuva/${p.id}`}
        >
          <Image src={p.src} width={p.width} height={p.height} alt={p.description} className="mx-auto" />
        </Link>
      ))}
    </div>
  </main>
)

export default Home
