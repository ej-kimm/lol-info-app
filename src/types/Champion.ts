export interface Champion {
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  imageUrl: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  image: {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
  }
  tags: string[]
  partype: string
  stats: {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
  }
}

export interface ChampionDetail extends Champion {
  skins: {
    id: string
    num: number
    name: string
    chromas: boolean
  }[]
  lore: string
  allytips: string[]
  enemytips: string[]
  spells: {
    id: string
    name: string
    description: string
    tooltip: string
    leveltip: {
      label: string[]
      effect: string[]
    }
    maxrank: number
    cooldown: number[]
    cooldownBurn: string
    cost: number[]
    costBurn: string
    datavalues?: object
    effect: (null | number[])[]
    effectBurn: (null | string)[]
    vars?: object[]
    costType: string
    maxammo: string
    range: number[]
    rangeBurn: string
    image: {
      full: string
      sprite: string
      group: string
      x: number
      y: number
      w: number
      h: number
    }
    resource: string
  }[]
  passive: {
    name: string
    description: string
    image: {
      full: string
      sprite: string
      group: string
      x: number
      y: number
      w: number
      h: number
    }
  }
  recommended?: any[]
}
