import debounce from 'lodash.debounce'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

const labelClasses = 'mb-2 block text-sm font-semibold'
const inputClasses =
  'focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow transition-colors duration-300 ease-in-out focus:z-10 focus:border-sky-500 focus:ring-sky-500'

export default function Formatter() {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')

  useEffect(() => {
    fetch('/api/format', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        classes: input,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.classes)
      })
  }, [input])

  const handleChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value ?? ''), 200),
    []
  )

  return (
    <>
      <div className="mb-4">
        <label htmlFor="input" className={labelClasses}>
          Input:
        </label>
        <input id="input" type="text" className={inputClasses} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="output" className={labelClasses}>
          Output:
        </label>
        <input id="output" type="text" className={inputClasses} value={output} readOnly />
      </div>
    </>
  )
}
