import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Formatter from '../components/Formatter'

const ThemeSwitcher = dynamic(() => import('../components/ThemeSwitcher'), { ssr: false })

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sortail</title>
        <meta name="description" content="Sort Tailwind CSS classes on the fly" />
      </Head>

      <ThemeSwitcher />

      <header className="mt-10 mb-8">
        <h1 className="text-center text-3xl font-bold">Sortail</h1>
      </header>

      <main className="dark:highlight-white container mx-auto max-w-2xl rounded-xl bg-white py-8 px-10 shadow-md ring-1 ring-slate-900/10 dark:bg-slate-800 dark:shadow-transparent">
        <Formatter />
      </main>
    </div>
  )
}

export default Home
