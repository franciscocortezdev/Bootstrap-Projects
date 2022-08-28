import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href='/faq'>
        <a>FAQ</a>
      </Link>
    </>
  )
}

export default Home
