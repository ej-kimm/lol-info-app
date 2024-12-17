import { ChampionRotation } from '@/types/ChampionRotation'
import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey: string | undefined = process.env.RIOT_API_KEY
  if (!apiKey) throw new Error('Riot API Key is missing!')

  const response = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'X-Riot-Token': apiKey,
      },
    }
  )
  if (!response.ok) throw new Error('Failed to fetch champion-rotations')

  const data: ChampionRotation = await response.json()
  return NextResponse.json({ data })
}
