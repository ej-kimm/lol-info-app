import type { Item } from '@/types/Item'
import React from 'react'
import ItemsCard from './ItemsCard'

type ItemsListProps = { items: Item[] }

export default function ItemsList({ items }: ItemsListProps) {
  return (
    <ul className="p-8 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <ItemsCard key={item.name} item={item} />
      ))}
    </ul>
  )
}
