import { useState } from 'react'

type ExampleButtonProps = {
  updateInput: (text: string) => void
}

const examples = [
  'px-3 p-1 py-3',
  'px-4 container',
  'px-3 focus:hover:p-3 hover:p-1 py-3',
  'hover:container container',
  'focus:hover:container hover:underline hover:container p-1',
  'b p-1 a',
  'hover:b focus:p-1 a',
]

export default function ExampleButton({ updateInput }: ExampleButtonProps) {
  const [prevExampleId, setPrevExampleId] = useState<number>(-1)

  const handleExampleClick = () => {
    // Don't use the same example twice in a row
    let exampleId
    do {
      exampleId = Math.floor(Math.random() * examples.length)
    } while (exampleId === prevExampleId)
    setPrevExampleId(exampleId)

    updateInput(examples[exampleId])
  }

  return (
    <button className="text-sky-500 dark:text-sky-400" onClick={handleExampleClick}>
      Example?
    </button>
  )
}
