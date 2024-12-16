import { Champion } from '@/types/Champion'
import React from 'react'
import ChampionCard from './ChampionCard'

type ChampionListProps = { champions: Champion[] }

export default function ChampionList({ champions }: ChampionListProps) {
  return (
    <ul>
      {champions.map((champion) => (
        <ChampionCard key={champion.key} champion={champion} />
      ))}
    </ul>
  )
}
