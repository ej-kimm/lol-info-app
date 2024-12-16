async function getLatestVersion() {
  try {
    const response = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json'
    )
    if (!response.ok) throw new Error('Failed to fetch versions')
    const data: string[] = await response.json()
    return data[0]
  } catch (error) {
    throw error
  }
}

export async function getChampions() {
  try {
    const version = await getLatestVersion() // 최신 버전 갖고오기
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    )
    if (!response.ok) throw new Error('Failed to fetch champions')
    const data = await response.json()
    return data.data
  } catch (error) {
    throw error
  }
}
