import { FiMoon, FiSun } from 'react-icons/fi'
import '@/components/common/ThemeToggle.scss'

import { useTheme } from '@/hooks/useTheme'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  )
}
