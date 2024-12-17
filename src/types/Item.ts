export interface Item {
  name: string
  description: string
  colloq: string
  plaintext: string
  imageUrl: string
  consumed?: boolean
  inStore?: boolean
  into?: string[]
  image: {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
  }
  gold: {
    base: number
    purchasable: boolean
    total: number
    sell: number
  }
  tags: string[]
  maps: {
    [mapId: string]: boolean
  }
  stats: {
    [statName: string]: number
  }
  effect?: {
    [effectName: string]: string
  }
  depth?: number
}
