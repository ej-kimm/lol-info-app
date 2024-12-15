'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHelmet } from 'react-icons/gi'
import { LuSwords } from 'react-icons/lu'

interface SidebarProps {
  menuIsOpen: boolean
  toggleMenu: () => void
}

export default function Sidebar({ menuIsOpen, toggleMenu }: SidebarProps) {
  const [selectedMenu, setSelectedMenu] = useState<string>('home')

  const handleMenuClick = (menu: string) => {
    toggleMenu()
    setSelectedMenu(menu)
  }

  return (
    <section
      className={`
          fixed top-0 right-0 h-screen w-[350px] bg-gray-800 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
    >
      <button className="text-4xl absolute top-4 right-5" onClick={toggleMenu}>
        &times;
      </button>

      <nav className="h-full flex flex-col justify-center items-center gap-10">
        <Link href="/" onClick={() => handleMenuClick('home')}>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/assets/${
                selectedMenu === 'home' ? 'home-fill.svg' : 'home.svg'
              }`}
              alt="home"
              width={48}
              height={48}
            />
            <span className="text-xl mt-2">홈</span>
          </div>
        </Link>
        <Link href="/champions" onClick={() => handleMenuClick('champions')}>
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
        <Link href="/items" onClick={() => handleMenuClick('items')}>
          <div className="flex flex-col justify-center items-center">
            <LuSwords
              className={`text-5xl ${
                selectedMenu === 'items' ? 'text-brand' : 'text-[#CCCCCC]'
              }`}
            />
            <span className="text-xl mt-2">아이템</span>
          </div>
        </Link>
        <Link href="/rotation" onClick={() => handleMenuClick('rotation')}>
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
