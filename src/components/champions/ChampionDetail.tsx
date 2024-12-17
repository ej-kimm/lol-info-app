import type { ChampionDetail } from '@/types/Champion'
import Image from 'next/image'
import React from 'react'

type ChampionDetailProps = { championDetail: ChampionDetail }

export default function ChampionDetail({
  championDetail,
}: ChampionDetailProps) {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-2xl shadow-2xl">
        <div>
          <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white">
              {championDetail.name}
            </h1>
            <p className="text-2xl text-gray-200">{championDetail.title}</p>
          </header>

          <div className="flex justify-around items-center mb-8">
            <Image
              src={championDetail.imageUrl}
              width={220}
              height={220}
              alt={championDetail.id}
              className="rounded-full border-8 border-gray-200 shadow-lg"
            />

            <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                스탯
              </h3>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex justify-between">
                  <span className="font-semibold text-blue-600">공격력</span>
                  <span>{championDetail.info.attack}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-blue-600">방어력</span>
                  <span>{championDetail.info.defense}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-blue-600">마법력</span>
                  <span>{championDetail.info.magic}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-blue-600">난이도</span>
                  <span>{championDetail.info.difficulty}</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xl text-gray-100 p-4 bg-black bg-opacity-50 rounded-lg shadow-md">
            {championDetail.lore}
          </p>
        </div>
      </div>
    </section>
  )
}
