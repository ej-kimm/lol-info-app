'use client'

import type { Champion } from '@/types/Champion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ChampionCardProps = { champion: Champion }

export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <li className="group">
      <Link href={`/champions/${champion.id}`}>
        <div className="relative flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-400">
            <Image
              src={champion.imageUrl}
              width={120}
              height={120}
              alt={champion.id}
            />
          </div>
          <div className="flex flex-col mt-2 text-center">
            <p className="font-semibold">{champion.name}</p>
            <p className="text-xs text-gray-500">{champion.title}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
