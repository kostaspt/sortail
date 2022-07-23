import debounce from 'lodash.debounce'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import DiffViewer from './DiffViewer'

const labelClasses = 'mb-2 block font-semibold'

export default function Formatter() {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [prevExampleId, setPrevExampleId] = useState<number>(-1)
  const inputRef = useRef<HTMLInputElement>(null)

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
      .then((data) => setOutput(data.classes))
  }, [input])

  const handleChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value ?? ''), 200),
    []
  )

  const handleExampleClick = () => {
    const examples = [
      'px-3 p-1 py-3',
      'px-4 container',
      'px-3 focus:hover:p-3 hover:p-1 py-3',
      'hover:container container',
      'focus:hover:container hover:underline hover:container p-1',
      'b p-1 a',
      'hover:b focus:p-1 a',
    ]

    // Don't use the same example twice in a row
    let exampleId
    do {
      exampleId = Math.floor(Math.random() * examples.length)
    } while (exampleId === prevExampleId)
    setPrevExampleId(exampleId)

    const example = examples[exampleId]

    setInput(example)
    if (inputRef.current) {
      inputRef.current.value = example
    }
  }

  return (
    <>
      <div className="mb-6">
        <label className={`${labelClasses} item-center flex justify-between`}>
          <span>Paste the classes you want to sort</span>
          <button className="text-sky-500" onClick={handleExampleClick}>
            Example?
          </button>
        </label>
        <input
          ref={inputRef}
          aria-label="Classes to sort"
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow transition-colors duration-300 ease-in-out focus:z-10 focus:border-sky-500 focus:ring-sky-500"
          onChange={handleChange}
        />
      </div>
      {input.length > 0 && output.length > 0 && (
        <DiffViewer before={input} after={output} labelClasses={labelClasses} />
      )}
    </>
  )
}
