'use client'

import Image from 'next/image'
import Link from 'next/link'

type HomeListProps = {
  src: string
  text: string
}

export default function HomeListCard({ src, text }: HomeListProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <Link href="/champions">
        <Image
          src={`/assets/${src}.webp`}
          width={400}
          height={300}
          alt={`${src}`}
          className="w-full h-60 object-cover"
        />
        <div className="p-6 text-center">
          <p className="text-lg font-semibold">{text}</p>
        </div>
      </Link>
    </div>
  )
}
