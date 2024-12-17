import ItemsList from '@/components/items/ItemsList'
import type { Item } from '@/types/Item'
import { getItems } from '@/utils/serverApi'

async function getItemsData(): Promise<Item[]> {
  const data = await getItems()
  const items: Item[] = Object.values(data)
  return items
}

export default async function ItemsPage() {
  const items = await getItemsData()

  return <ItemsList items={items} />
}
