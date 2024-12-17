'use client'

import ChampionList from '@/components/champions/ChampionList'
import { useQuery } from '@tanstack/react-query'

export default function RotationPage() {
  const {
    data: freeChampions,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['rotation'],
    queryFn: async () => {
      const response = await fetch('/api/rotation')
      if (!response.ok) throw new Error('Failed to fetch champion rotation')
      const data = await response.json()
      return data || []
    },
  })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <>
      <h1 className="block bg-yellow-500 p-2 rounded-md text-xl font-bold text-center">
        이번 주 무료로 플레이 가능한 챔피언들을 확인하세요!
      </h1>
      {freeChampions.length > 0 && <ChampionList champions={freeChampions} />}
    </>
  )
}
