import debounce from 'lodash.debounce'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import DiffViewer from './DiffViewer'
import ExampleButton from './ExampleButton'

const labelClasses = 'mb-2 block font-semibold'

export default function Formatter() {
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsLoading(true)
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
        setIsLoading(false)
      })
  }, [input])

  const handleChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value ?? ''), 200),
    []
  )

  return (
    <>
      <div className="mb-6">
        <div className={`${labelClasses} item-center flex justify-between`}>
          <span>Paste the classes you want to sort</span>
          <ExampleButton
            updateInput={(text) => {
              setInput(text)
              if (inputRef.current) {
                inputRef.current.value = text
              }
            }}
          />
        </div>
        <input
          ref={inputRef}
          aria-label="Classes to sort"
          type="text"
          className="w-full appearance-none rounded-md border border-gray-300 px-3.5 py-1.5 font-mono shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-0 dark:bg-slate-700 dark:ring-1 dark:ring-white/20 dark:focus:border-white/40 dark:focus:ring-white/40 sm:text-sm"
          onChange={handleChange}
        />
      </div>
      {input.length > 0 && (
        <DiffViewer isLoading={isLoading} before={input} after={output} labelClasses={labelClasses} />
      )}
    </>
  )
}
