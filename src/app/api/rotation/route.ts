import type { Champion } from '@/types/Champion'
import type { ChampionRotation } from '@/types/ChampionRotation'
import { getChampions } from '@/utils/serverApi'
import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey: string | undefined = process.env.RIOT_API_KEY
  if (!apiKey) throw new Error('Riot API Key is missing!')

  // 1. 무료 챔피언 로테이션 정보 갖고오기
  const response = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'X-Riot-Token': apiKey,
      },
      next: {
        revalidate: 86400,
      },
    }
  )
  if (!response.ok) throw new Error('Failed to fetch champion-rotations')

  const data: ChampionRotation = await response.json()
  const freeChampionIds = data.freeChampionIds

  // 2. 모든 챔피언 정보 갖고 오기
  const champions = await getChampions()

  // 3. 무료 챔피언 ID 목록과 챔피언 데이터 비교
  const freeChampionDetails = freeChampionIds.map((id) => {
    const champion = Object.values(champions).find(
      (champ: Champion) => champ.key === id.toString()
    )
    if (champion) {
      return champion
    }
    return null
  })

  return NextResponse.json(freeChampionDetails)
}
