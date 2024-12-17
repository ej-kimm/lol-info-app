import { Champion, ChampionDetail } from '@/types/Champion'

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

function getChampionImageUrl(version: string, imageFileName: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${imageFileName}`
}

async function getChampionsWithImage(
  champions: Record<string, Champion>,
  version: string
) {
  const updatedChampions: Record<string, Champion> = {}

  Object.keys(champions).forEach((championName) => {
    const champion = champions[championName]
    const imageUrl = getChampionImageUrl(version, champion.image.full)
    updatedChampions[championName] = { ...champion, imageUrl }
  })

  return updatedChampions
}

export async function getChampions(): Promise<Record<string, Champion>> {
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

export async function getChampionDetailById(
  id: string
): Promise<ChampionDetail> {
  try {
    const version = await getLatestVersion()
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
      {
        next: {
          revalidate: 86400, // 1day
        },
      }
    )
    if (!response.ok) throw new Error('Failed to fetch champions detail')
    const data = await response.json()
    if (!data.data[id]) throw new Error(`Champion ${id} not found`)

    // imageUrl 추가
    const championDetail = data.data[id]
    const imageUrl = getChampionImageUrl(version, championDetail.image.full)
    return { ...championDetail, imageUrl }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
