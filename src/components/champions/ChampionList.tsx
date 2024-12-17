import type { Champion } from '@/types/Champion'
import React from 'react'
import ChampionCard from './ChampionCard'

type ChampionListProps = { champions: Champion[] }

export default function ChampionList({ champions }: ChampionListProps) {
  return (
    <ul className="p-10 gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 justify-items-center place-items-center">
      {champions.map((champion) => (
        <ChampionCard key={champion.key} champion={champion} />
      ))}
    </ul>
  )
}
