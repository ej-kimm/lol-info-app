'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { GiHelmet } from 'react-icons/gi'
import { LuSwords } from 'react-icons/lu'

interface SidebarProps {
  menuIsOpen: boolean
  toggleMenu: () => void
}

export default function Sidebar({ menuIsOpen, toggleMenu }: SidebarProps) {
  const pathname = usePathname()
  const [selectedMenu, setSelectedMenu] = useState<string>(pathname)
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const path = pathname.split('/')[1]
    setSelectedMenu(path)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuIsOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        toggleMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuIsOpen])

  return (
    <section
      ref={sidebarRef}
      className={`
          fixed top-0 right-0 h-screen w-[350px] bg-gray-800 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
    >
      <button className="text-4xl absolute top-4 right-5" onClick={toggleMenu}>
        &times;
      </button>

      <nav className="h-full flex flex-col justify-center items-center gap-10">
        <Link href="/" onClick={toggleMenu}>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/assets/${
                selectedMenu === '' ? 'home-fill.svg' : 'home.svg'
              }`}
              alt="home"
              width={48}
              height={48}
            />
            <span className="text-xl mt-2">홈</span>
          </div>
        </Link>
        <Link href="/champions" onClick={toggleMenu}>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/assets/${
                selectedMenu === 'champions'
                  ? 'champion-fill.svg'
                  : 'champion.svg'
              }`}
              alt="champion"
              width={48}
              height={48}
            />
            <span className="text-xl mt-2">챔피언</span>
          </div>
        </Link>
        <Link href="/items" onClick={toggleMenu}>
          <div className="flex flex-col justify-center items-center">
            <LuSwords
              className={`text-5xl ${
                selectedMenu === 'items' ? 'text-brand' : 'text-[#CCCCCC]'
              }`}
            />
            <span className="text-xl mt-2">아이템</span>
          </div>
        </Link>
        <Link href="/rotation" onClick={toggleMenu}>
          <div className="flex flex-col justify-center items-center">
            <GiHelmet
              className={`text-5xl ${
                selectedMenu === 'rotation' ? 'text-brand' : 'text-[#CCCCCC]'
              }`}
            />
            <span className="text-xl mt-2">로테이션</span>
          </div>
        </Link>
      </nav>
    </section>
  )
}
