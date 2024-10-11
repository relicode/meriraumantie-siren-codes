import thumbA from '@/assets/img/thumbs/thumb-000001.webp'
import thumbB from '@/assets/img/thumbs/thumb-000002.webp'
import thumbC from '@/assets/img/thumbs/thumb-000003.webp'
import thumbD from '@/assets/img/thumbs/thumb-000004.webp'
import thumbE from '@/assets/img/thumbs/thumb-000005.webp'
import thumbF from '@/assets/img/thumbs/thumb-000006.webp'
import thumbG from '@/assets/img/thumbs/thumb-000007.webp'
import thumbH from '@/assets/img/thumbs/thumb-000008.webp'
import thumbI from '@/assets/img/thumbs/thumb-000009.webp'
import thumbJ from '@/assets/img/thumbs/thumb-000010.webp'
import thumbK from '@/assets/img/thumbs/thumb-000011.webp'
import thumbL from '@/assets/img/thumbs/thumb-000012.webp'
import thumbM from '@/assets/img/thumbs/thumb-000013.webp'
import thumbN from '@/assets/img/thumbs/thumb-000014.webp'
import thumbO from '@/assets/img/thumbs/thumb-000015.webp'
import thumbP from '@/assets/img/thumbs/thumb-000016.webp'
import thumbQ from '@/assets/img/thumbs/thumb-000017.webp'
import thumbR from '@/assets/img/thumbs/thumb-000018.webp'
import thumbS from '@/assets/img/thumbs/thumb-000019.webp'
import thumbT from '@/assets/img/thumbs/thumb-000020.webp'
import thumbU from '@/assets/img/thumbs/thumb-000021.webp'
import thumbV from '@/assets/img/thumbs/thumb-000022.webp'
import thumbX from '@/assets/img/thumbs/thumb-000023.webp'
import thumbY from '@/assets/img/thumbs/thumb-000024.webp'
import thumbZ from '@/assets/img/thumbs/thumb-000025.webp'
import thumbÄ from '@/assets/img/thumbs/thumb-000026.webp'
import thumbÖ from '@/assets/img/thumbs/thumb-000027.webp'

import type { StaticImageData } from 'next/image'

const mapPhoto = (photo: StaticImageData, description: string, id: number) => ({
  id: String(id),
  description,
  ...photo,
})

const photoDescriptions = [
  'Julkisivu 1',
  'Julkisivu 2',
  'Julkisivu 3',
  'Piha 1',
  'Piha 2',
  'Piha 3',
  'Julkisivu 4',
  'Käytävä 1',
  'Rappukäytävä 1',
  'Käytävä 2',
  'Huone 1',
  'Huone 2',
  'Huone 3',
  'Huone 4',
  'Keittiö 1',
  'Kylpyhuone 1',
  'Huone 5',
  'Huone 6',
  'Parveke 1',
  'Parveke 2',
  'Keittiö 2',
  'Kylpyhuone 2',
  'Kellari 1',
  'Pesutupa 1',
  'Sauna 1',
  'Sauna 2',
  'Sauna 3',
] as const

export const photos = photoDescriptions.map((description, idx) => ({
  id: String(idx + 1),
  src: `/photos/meriraumantie/meriraumantie-${String(idx + 1).padStart(6, '0')}.webp`,
  description,
}))

const thumbData: [photo: StaticImageData, description: string][] = [
  [thumbA, 'Julkisivu 1'],
  [thumbB, 'Julkisivu 2'],
  [thumbC, 'Julkisivu 3'],
  [thumbD, 'Piha 1'],
  [thumbE, 'Piha 2'],
  [thumbF, 'Piha 3'],
  [thumbG, 'Julkisivu 4'],
  [thumbH, 'Käytävä 1'],
  [thumbI, 'Rappukäytävä 1'],
  [thumbJ, 'Käytävä 2'],
  [thumbK, 'Huone 1'],
  [thumbL, 'Huone 2'],
  [thumbM, 'Huone 3'],
  [thumbN, 'Huone 4'],
  [thumbO, 'Keittiö 1'],
  [thumbP, 'Kylpyhuone 1'],
  [thumbQ, 'Huone 5'],
  [thumbR, 'Huone 6'],
  [thumbS, 'Parveke 1'],
  [thumbT, 'Parveke 2'],
  [thumbU, 'Keittiö 2'],
  [thumbV, 'Kylpyhuone 2'],
  [thumbX, 'Kellari 1'],
  [thumbY, 'Pesutupa 1'],
  [thumbZ, 'Sauna 1'],
  [thumbÄ, 'Sauna 2'],
  [thumbÖ, 'Sauna 3'],
]

export const thumbs = thumbData.map((p, idx) => mapPhoto(...p, idx))
export type Photo = (typeof photos)[number]

export const info = {
  area: '76m²',
  price: Number(35000).toLocaleString('fi-FI') + '€',
  year: 1979,
  address: 'Ruoripolku 1 A, Merirauma, Rauma',
  copy: `Meren läheisyydessä sijaitseva Merirauman alue vetää puolensa hyvien kulkuyhteyksien ja kivojen lenkkimaastojen ansiosta. Ruoripolun hyvin hoidettu taloyhtiö on turvallinen valinta kodiksi. Taloyhtiö on panostanut rakennuksen talotekniikkaan ja piha-alueiden siisteyteen ja viihtyisyyteen.
Nyt tarjolla on hissitalon ylimmän kerroksen 76m² kolme huonetta ja keittiö viihtyisällä eteläparvekkeella. Asunnossa on tehty mittava remontti vuonna 2017. Tuolloin koko asuntoon on asennettu laadukas tammiparketti ja seinäpinnat on pitkälti saaneet uuden maalipinnan. Kylpyhuone on remontoitu täysin. Laattapinnat on valittu harkiten ja niiden ajaton värimaailma kestääkin hyvin aikaa. Tilaa kylpyhuoneessa on reilusti myös pyykkihuollolle. Keittiö on saanut niinikään uudet vaaleat kalusteet ja kodinkoneet. Ylimmän kerroksen ikkunoista aukeaa vehreät maisemat yli naapuritalojen kattojen. Asunnon pohjaratkaisu on toimiva ja avara. Avaruutta ja tilantuntua korostaa runsas luonnonvalon määrä joka tulvii sisään suurista ikkunoista. 
Taloyhtiön kellarikerros on muutamia vuosia sitten remontoitu, ja varastotilat ovatkin nyt siistissä kunnossa. Puhumattakaan taloyhtiön saunatiloista, joissa viihtyy mielellään pidempäänkin. 
Pihalla asukkaan käytössä on paitsi lasten leikkialue, myös grillikota ja useampi istuinalue.
Varaa oma esittelyaikasi.`,
} as const
