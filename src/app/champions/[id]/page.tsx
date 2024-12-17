import { getChampionsDetailById } from '@/utils/serverApi'
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({ params }: Props) => {
  const { id } = params
  const champion = await getChampionsDetailById(id)

  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.blurb,
  }
}

export default function ChampionDetailPage() {
  return <div></div>
}
