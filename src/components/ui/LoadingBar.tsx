'use client'

import { MoonLoader } from 'react-spinners'
import { useDarkMode } from '../providers/DarkModeProvider'

export default function LoadingBar() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <MoonLoader
        color={isDarkMode ? '#f9f0f0' : '#000000'}
        size={100}
        loading
      />
    </div>
  )
}
