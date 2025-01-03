'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Image from 'next/image'
import Sidebar from './Sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuSwords } from 'react-icons/lu'
import { GiHelmet } from 'react-icons/gi'
import { useDarkMode } from '../providers/DarkModeProvider'
import { HiMoon, HiSun } from 'react-icons/hi'

type NavbarContent = {
  icon: ReactNode
  label: string
}

const NAVBAR_CONTENTS: Readonly<Record<string, NavbarContent>> = {
  champions: {
    icon: (
      <Image src="/assets/champion.svg" alt="champion" width={29} height={29} />
    ),
    label: '챔피언',
  },
  items: {
    icon: <LuSwords className="text-2xl text-[#CCCCCC]" />,
    label: '아이템',
  },
  rotation: {
    icon: <GiHelmet className="text-2xl text-[#CCCCCC]" />,
    label: '로테이션',
  },
}

export default function Navbar() {
  const pathname = usePathname()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [currentPath, setCurrentPath] = useState<string>(pathname)
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const currentContent = NAVBAR_CONTENTS[currentPath] || {}

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const path = pathname.split('/')[1]
    setCurrentPath(path)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 w-full h-[90px] bg-[#31363F] dark:bg-zinc-900 z-40 px-10 py-4 flex justify-between items-center">
      <Link href="/">
        <Image src="/assets/Logo.png" width={150} height={100} alt="logo" />
      </Link>
      <div className="relative -left-7 flex gap-2 justify-center items-center">
        {currentContent.icon}
        <span className="text-2xl font-bold text-gray-50">
          {currentContent.label}
        </span>
      </div>
      <div className="flex gap-3">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <HiMoon className="text-2xl text-gray-50" />
          ) : (
            <HiSun className="text-2xl text-gray-50" />
          )}
        </button>
        <button type="button" onClick={toggleMenu}>
          <MdMenu className="text-4xl text-gray-50" />
        </button>
      </div>

      <Sidebar menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </header>
  )
}
