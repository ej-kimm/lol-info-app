import { ChampionDetail } from '@/types/Champion'

async function getLatestVersion(): Promise<string> {
  try {
    const response = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json'
    )
    if (!response.ok) throw new Error('Failed to fetch versions')
    const data = await response.json()
    return data[0]
  } catch (error: any) {
    throw new Error(error.message)
  }
}

async function getChampionsWithImage(
  champions: Record<string, ChampionDetail>,
  version: string
) {
  const updatedChampions: Record<string, ChampionDetail> = {}

  Object.keys(champions).forEach((championName) => {
    const champion = champions[championName]
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`
    updatedChampions[championName] = { ...champion, imageUrl }
  })

  return updatedChampions
}

export async function getChampions(): Promise<Record<string, ChampionDetail>> {
  try {
    const version = await getLatestVersion() // 최신 버전 갖고오기
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400, // 1day
        },
      }
    )
    if (!response.ok) throw new Error('Failed to fetch champions')
    const data = await response.json()
    const champions = data.data
    return await getChampionsWithImage(champions, version)
  } catch (error: any) {
    throw new Error(error.message)
  }
}
