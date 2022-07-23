import * as Diff from 'diff'
import { useMemo } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import CopyButton from './CopyButton'

type DiffViewerProps = {
  isLoading: boolean
  before: string
  after: string
  labelClasses?: string
}

export default function DiffViewer({ isLoading, before, after, labelClasses }: DiffViewerProps) {
  const diff = useMemo(
    () => (before.length > 0 && after.length > 0 ? Diff.diffWords(before, after ?? '') : null),
    [before, after]
  )

  if (diff && diff.length <= 1) {
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
            <td>{!isLoading ? after : <ImSpinner8 className="animate-spin" />}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
