import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState<string>(getCookie('theme') === 'light' ? 'light' : 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setCookie('theme', theme)
  }, [theme])

  function isDark() {
    return theme === 'dark'
  }

  function toggleTheme() {
    return setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, setTheme, isDark, toggleTheme }
}
