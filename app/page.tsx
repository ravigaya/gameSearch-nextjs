import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      
      <h1>Hi I am Next.Js</h1>
      < a href='/users'>Users</a>
      <br/>
      <Link href='/users'>User with Link</Link>

     </main>
  )
}
