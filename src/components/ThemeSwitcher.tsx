import { RiSunLine, RiMoonFill } from 'react-icons/ri'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { resolvedTheme: theme, setTheme } = useTheme()

  return (
    <button
      className="absolute top-4 right-4"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      title="Toggle dark mode"
    >
      {theme === 'dark' ? <RiSunLine /> : <RiMoonFill />}
    </button>
  )
}
