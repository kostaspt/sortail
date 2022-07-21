import type { NextPage } from 'next'
import Head from 'next/head'
import Formatter from '../components/Formatter'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sortail</title>
        <meta name="description" content="Sort Tailwind CSS classes on the fly" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <header className="mt-10 mb-8">
        <h1 className="text-center text-3xl font-bold">Sortail</h1>
      </header>

      <main className="container mx-auto max-w-2xl bg-white py-14 px-10 shadow">
        <Formatter />
      </main>
    </div>
  )
}

export default Home
