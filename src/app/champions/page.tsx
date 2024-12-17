import ChampionList from '@/components/champions/ChampionList'
import type { Champion } from '@/types/Champion'
import { getChampions } from '@/utils/serverApi'

async function getChampionsData(): Promise<Champion[]> {
  const data = await getChampions()
  const champions: Champion[] = Object.values(data)
  return champions
}

export default async function ChampionsPage() {
  const champions = await getChampionsData()

  return <ChampionList champions={champions} />
}
