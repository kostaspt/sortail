import copy from 'copy-to-clipboard'
import { useCallback, useState } from 'react'
import { FaCheck, FaRegClone } from 'react-icons/fa'

type CopyButtonProps = {
  text: string
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyClick = useCallback(() => {
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 1000)
    copy(text)
  }, [text])

  return (
    <div>
      {!hasCopied ? (
        <button
          title="Copy result to clipboard"
          onClick={handleCopyClick}
          className="flex items-center transition-colors hover:text-sky-500"
        >
          <FaRegClone />
        </button>
      ) : (
        <FaCheck className="text-emerald-500" />
      )}
    </div>
  )
}
