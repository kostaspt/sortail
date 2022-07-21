declare module 'tailwindcss/lib/lib/setupContextUtils' {
  export function createContext(tailwindConfig, changedContent = [], root = _postcss.default.root())
}

declare module 'tailwindcss/resolveConfig' {
  function resolveConfig(...configs)
  export default resolveConfig
}
