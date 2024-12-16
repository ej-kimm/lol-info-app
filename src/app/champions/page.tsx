import { Champion, ChampionDetail } from '@/types/Champion'
import { getChampions } from '@/utils/serverApi'

async function getChampionsData(): Promise<Champion[]> {
  const data = await getChampions()
  const championsArray = Object.values(data) as ChampionDetail[]
  const champions: Champion[] = championsArray.map((champion) => ({
    id: champion.id,
    key: champion.key,
    name: champion.name,
    title: champion.title,
    tags: champion.tags,
  }))
  return champions
}

export default async function ChampionsPage() {
  const champions = await getChampionsData()

  return (
    <div>
      {champions.map((champion) => (
        <div key={champion.id}>
          <h3>{champion.name}</h3>
          <p>{champion.title}</p>
          <p>{champion.tags}</p>
        </div>
      ))}
    </div>
  )
}
