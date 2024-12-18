'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
)

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    updateDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    if (!theme) {
      // 로컬 스토리지에 값이 없으면 기본적으로 다크모드로 설정
      setIsDarkMode(true)
      updateDarkMode(true)
    } else if (theme === 'dark') {
      // 로컬 스토리지에 'dark'가 저장되어 있으면 다크모드로 설정
      setIsDarkMode(true)
      updateDarkMode(true)
    } else if (theme === 'light') {
      // 로컬 스토리지에 'light'가 저장되어 있으면 라이트모드로 설정
      setIsDarkMode(false)
      updateDarkMode(false)
    }
  }, [])

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function updateDarkMode(darkMode: boolean): void {
  if (darkMode) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode Error')
  }
  return context
}
