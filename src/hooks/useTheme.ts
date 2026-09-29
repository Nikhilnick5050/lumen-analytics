import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitial(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('lumen-theme') as Theme | null
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitial)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('lumen-theme', theme)
  }, [theme])
  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  return { theme, toggle }
}