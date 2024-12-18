import ChampionList from '@/components/champions/ChampionList'
import type { Champion } from '@/types/Champion'
import { getChampions } from '@/utils/serverApi'
import { Suspense } from 'react'
import Loading from './loading'

async function getChampionsData(): Promise<Champion[]> {
  const data = await getChampions()
  const champions: Champion[] = Object.values(data)
  return champions
}

export default async function ChampionsPage() {
  const champions = await getChampionsData()

  return (
    <Suspense fallback={<Loading />}>
      <ChampionList champions={champions} />
    </Suspense>
  )
}
