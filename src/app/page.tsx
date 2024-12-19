import HomeListCard from '@/components/ui/HomeListCard'

export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-8 animate__animated animate__fadeIn">
          리그 오브 레전드 정보 앱
        </h1>
        <p className="text-xl text-center mb-12 text-gray-50">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <HomeListCard src="champions" text="챔피언 목록 보기" />
          <HomeListCard src="rotation" text="금주 로테이션 확인" />
          <HomeListCard src="items" text="아이템 목록 보기" />
        </div>
      </div>
      <div className="fixed -z-50 top-0 left-0 w-screen h-screen">
        <video
          className="w-full h-full object-cover filter brightness-70 dark:brightness-50"
          src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  )
}
