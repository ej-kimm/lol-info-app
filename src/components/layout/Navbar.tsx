'use client'

import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Image from 'next/image'
import Sidebar from './Sidebar'
import Link from 'next/link'

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev)
  }

  return (
    <header className="px-10 py-4 flex justify-between items-center">
      <Link href="/">
        <Image src="/assets/Logo.png" width={150} height={100} alt="logo" />
      </Link>
      <button type="button" onClick={toggleMenu}>
        <MdMenu className="text-4xl" />
      </button>

      <Sidebar menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </header>
  )
}
