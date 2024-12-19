import { Champion, ChampionDetail } from '@/types/Champion'
import { Item } from '@/types/Item'

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

function getItemImageUrl(version: string, imageFileName: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${imageFileName}`
}

async function createItemsWithImage(
  items: Record<string, Item>,
  version: string
) {
  const updatedItems: Record<string, Item> = {}

  Object.keys(items).forEach((itemName) => {
    const item = items[itemName]
    const imageUrl = getItemImageUrl(version, item.image.full)
    updatedItems[itemName] = { ...item, imageUrl }
  })

  return updatedItems
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
    return data.data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function getChampionDetailById(
  id: string
): Promise<{ version: string; data: ChampionDetail }> {
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
    return { version, data: data.data[id] }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function getItems(): Promise<Record<string, Item>> {
  try {
    const version = await getLatestVersion() // 최신 버전 갖고오기
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        cache: 'force-cache',
      }
    )
    if (!response.ok) throw new Error('Failed to fetch items')
    const data = await response.json()
    const items = data.data
    return await createItemsWithImage(items, version)
  } catch (error: any) {
    throw new Error(error.message)
  }
}
