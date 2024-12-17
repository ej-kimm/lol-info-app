'use client'

import { useQuery } from '@tanstack/react-query'

export default function RotationPage() {
  const { data, isPending } = useQuery({
    queryKey: ['rotation'],
    queryFn: async () => {
      const response = await fetch('/api/rotation')
      if (!response.ok) throw new Error('Failed to fetch champion rotation')
      const data = await response.json()
      return data.data.freeChampionIds || []
    },
  })

  if (isPending) return <p>Loading...</p>

  return (
    <div>
      <h1>Champion Rotation</h1>
      <ul>
        {data.length > 0 &&
          data.map((championId: number) => (
            <li key={championId}>{championId}</li>
          ))}
      </ul>
    </div>
  )
}
