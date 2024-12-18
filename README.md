# League of Legends App

## ✨ 프로젝트 소개

전 세계적으로 인기 있는 게임 리그 오브 레전드(League of Legends)의 챔피언 정보, 아이템, 로테이션을 조회할 수 있는 웹 애플리케이션입니다.

## ⏲️ 개발기간

- 2024.12.14(토) ~ 2024.12.18(수)

## 🚀 배포 링크

https://lol-info-app-pi.vercel.app/ 👈 클릭!

## 🛠 기술 스택

### ✔️ Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)

### ✔️ Libaray

![TanStack React Query](https://img.shields.io/badge/TanStack_React_Query-FF4154?style=for-the-badge&logo=TanStack&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logoColor=white)
![React Spinners](https://img.shields.io/badge/React_Spinners-4A90E2?style=for-the-badge&logoColor=white)

## 📋 기능

### 🔍 챔피언 정보 조회와 상세 페이지

- Riot Games API를 활용하여 챔피언의 이름, 스킬, 역할 등의 정보를 상세히 확인할 수 있습니다
- 챔피언의 상세 페이지를 제공하여 각 챔피언의 고유한 스탯과 배경을 확인할 수 있습니다

### 🔄 챔피언 로테이션 조회

- 매주 변경되는 무료 챔피언 로테이션 정보를 확인할 수 있습니다

### 🌙 다크모드

- 사용자가 선호하는 테마를 직접 설정 할 수 있는 다크모드를 지원합니다
- 기본적으로는 어두운 색상 테마를 제공하여 눈에 부담을 덜어줍니다

## 📁 디렉터리 구조

```
src/
├── app/                      # 앱 라우팅과 페이지 관련 디렉터리
│   ├── api/                  # 서버 측 API 핸들러
│   ├── champions/            # 챔피언 관련 페이지
│   ├── items/                # 아이템 관련 페이지
│   ├── rotation/             # 챔피언 로테이션 관련 페이지
│   ├── error.tsx             # 에러 처리 페이지
│   ├── global-error.tsx      # 글로벌 에러 핸들러
│   ├── globals.css           # 전역 스타일
│   ├── layout.tsx            # 전체 레이아웃 구성
│   └── page.tsx              # 기본 페이지 구성
├── components/
│   ├── champions/            # 챔피언 관련 UI 컴포넌트
│   ├── items/                # 아이템 관련 UI 컴포넌트
│   ├── layout/               # 레이아웃 관련 컴포넌트
│   ├── providers/            # 상태 관리 및 컨텍스트 제공자
│   └── ui/                   # 일반 UI 컴포넌트
├── types/                    # TypeScript 타입 정의
│   ├── Champion.ts           # 챔피언 데이터 타입
│   ├── ChampionRotation.ts   # 챔피언 로테이션 타입
│   └── Item.ts               # 아이템 데이터 타입
└── utils/                    # 유틸리티 함수
    └── serverApi.ts          # 서버 API 호출 함수
```
