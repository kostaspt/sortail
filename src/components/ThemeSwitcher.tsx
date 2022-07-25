import { RiSunLine, RiMoonFill } from 'react-icons/ri'
import useTheme from '../lib/useTheme'

export default function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button className="absolute top-4 right-4" onClick={toggleTheme} title="Toggle dark mode">
      {isDark() ? <RiSunLine /> : <RiMoonFill />}
    </button>
  )
}
