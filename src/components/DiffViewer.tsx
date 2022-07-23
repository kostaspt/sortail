import * as Diff from 'diff'
import { useMemo } from 'react'
import { FaRegClone } from 'react-icons/fa'
import CopyButton from './CopyButton'

type DiffViewerProps = {
  before: string
  after: string
  labelClasses?: string
}

export default function DiffViewer({ before, after, labelClasses }: DiffViewerProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const diff = useMemo(() => Diff.diffWords(before ?? '', after ?? ''), [after])

  if (diff.length <= 1) {
    return <div className="text-center font-semibold">Classes are already sorted 👌🏼</div>
  }

  return (
    <div>
      <div className={`${labelClasses} flex items-center justify-between`}>
        <span>Result</span>
        <CopyButton text={after} />
      </div>
      <table className="mb-4 w-full table-auto font-mono">
        <tbody>
          <tr className="bg-red-100">
            <td className="w-6 text-center">-</td>
            <td>{before}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="w-6 text-center">+</td>
            <td>{after}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
