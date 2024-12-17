import type { Item } from '@/types/Item'
import Image from 'next/image'
import React from 'react'

type ItemCardProps = { item: Item }

export default function ItemsCard({ item }: ItemCardProps) {
  return (
    <li className="flex flex-col items-center bg-gray-900 text-white rounded-lg shadow-lg p-4 w-full max-w-[300px] hover:scale-105 transition-transform duration-300">
      <div className="relative w-full mb-3">
        <Image
          src={item.imageUrl}
          width={120}
          height={120}
          alt={item.name}
          className="mx-auto"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{item.name}</h3>
      <p className="text-sm text-gray-400 text-center">{item.plaintext}</p>
    </li>
  )
}
