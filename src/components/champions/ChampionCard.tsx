import { Champion } from '@/types/Champion'
import Image from 'next/image'
import React from 'react'

type ChampionCardProps = { champion: Champion }

export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <li>
      <div className="flex">
        <p>{champion.name}</p>
        <p>{champion.title}</p>
      </div>
      <Image
        src={champion.imageUrl}
        width={120}
        height={120}
        alt={champion.id}
      />
    </li>
  )
}
