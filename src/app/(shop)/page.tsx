import { titleFont } from '@/config/font'


export default function Home() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>Holaaaaaaaa</h1>
      <h1 className={`${titleFont.className}`}>Holaaaaaaaa</h1>
    </div>
  )
}
