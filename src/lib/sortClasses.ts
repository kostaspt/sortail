import { createContext } from 'tailwindcss/lib/lib/setupContextUtils'
import resolveConfig from 'tailwindcss/resolveConfig'

function bigSign(bigIntValue: bigint): number {
  return Number(bigIntValue > 0n) - Number(bigIntValue < 0n)
}

function sanitize(input: string): string {
  return input.replace(/\s+/g, ' ').trim()
}

export default function sortClasses(input: string): string {
  const ctx = createContext(resolveConfig({}))
  const sortedClasses = ctx.getClassOrder(sanitize(input).split(' '))

  return sortedClasses
    .sort((a: Array<any>, b: Array<any>) => {
      const x: bigint | null = a[1]
      const y: bigint | null = b[1]

      if (x === y) return 0
      if (x === null) return -1
      if (y === null) return 1
      return bigSign(x - y)
    })
    .map((res: Array<any>) => res[0])
    .join(' ')
}
