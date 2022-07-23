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
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="mt-10 mb-8">
        <h1 className="text-center text-3xl font-bold">Sortail</h1>
      </header>

      <main className="container mx-auto max-w-2xl bg-white py-8 px-10 shadow">
        <Formatter />
      </main>
    </div>
  )
}

export default Home
