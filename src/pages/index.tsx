import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const labelClasses = 'mb-2 block text-sm font-semibold text-gray-700'
const inputClasses =
  'focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'

const Home: NextPage = () => {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')

  useEffect(() => {
    setOutput(input)
  }, [input])

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
        <div className="mb-4">
          <label htmlFor="input" className={labelClasses}>
            Input:
          </label>
          <input
            id="input"
            type="text"
            className={inputClasses}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="input" className={labelClasses}>
            Output:
          </label>
          <input id="input" type="text" className={inputClasses} value={output} readOnly />
        </div>
      </main>
    </div>
  )
}

export default Home
