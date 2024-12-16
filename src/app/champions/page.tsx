import ChampionList from '@/components/champions/ChampionList'
import { Champion, ChampionDetail } from '@/types/Champion'
import { getChampions } from '@/utils/serverApi'

async function getChampionsData(): Promise<Champion[]> {
  const data = await getChampions()
  const championsArray: ChampionDetail[] = Object.values(data)
  const champions = championsArray.map((champion) => ({
    id: champion.id,
    key: champion.key,
    name: champion.name,
    title: champion.title,
    tags: champion.tags,
    imageUrl: champion.imageUrl,
  }))
  return champions
}

export default async function ChampionsPage() {
  const champions = await getChampionsData()

  return <ChampionList champions={champions} />
}
