import ChampionDetail from '@/components/champions/ChampionDetail'
import { getChampionDetailById } from '@/utils/serverApi'
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({ params }: Props) => {
  const { id } = params
  const champion = await getChampionDetailById(id)

  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.blurb,
    image: champion.imageUrl,
  }
}

export default async function ChampionDetailPage({ params }: Props) {
  const { id } = params
  const championDetail = await getChampionDetailById(id)

  return <ChampionDetail championDetail={championDetail} />
}
