# 프리온보딩 Assignment 2 - [미스터 카멜]


## 1. 구현 사항 
- 상품 상세 페이지(/product)
  - 상품상세 조회 시 이력데이터 누적하고, 동일 상품 조회 시 최신 데이터로 갱신
  - '랜덤상품 조회' 클릭 시 현 상품을 제외하고 랜덤 로드
  - '관심 없음' 클릭 시 랜덤 로드하며, 현 상품은 앞으로 상품상세에서 노출되지 않음
- 상품 조회이력 목록 페이지(/recentList)
  - 00시 기준으로 최근 조회이력과 관심 없는 상품목록 초기화
  - 별도 페이징 처리 없이 전체 로드
  - (목록 상단) 필터: '브랜드'(전체 및 존재하는 브랜드 목록으로 구성), 다중선택 가능
  - (목록 상단) 필터: '관심 없는 상품 숨기기' 체크박스
  - (선택 팝업) 정렬: 최근 조회 순, 낮은 가격 순
  - 상품 클릭 시 '상품상세 페이지'로 이동, 관심 없는 상품 클릭 시 경고메세지 노출되며 이동하지 않음
- (추가)상품 전체 페이지(/)



## 2. 설치 및 시작하는 법
이 프로젝트는 Create React App으로 생성되었습니다.

실행 가능한 스크립트
npm i
프로젝트에 필요한 npm packages, node_modules 다운로드

npm run start
개발모드로 웹 환경을 시작하는 명령어입니다.

npm run build
빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다. (cra 기본설정)



## 3. 배포 주소
https://assignment2-8team.github.io/mr-camel


## 4. 업무 분배
- 서희영 
  - pages 구조 및 router 작성
  - pages / RecentListPage 작성
  - components / Header, BrandFilter, InterestFilter 컴포넌트(체크박스), RecentListView 작성
  - utils / constansts / BRAND_LIST, PRODUCT_LIST 작성
  - utils / manageHistory / manageHistory.js 작성
  - 담당 부분 css 작성

- 박민혁
  - components / Card 작성
  - 담당 부분 & 기타 css 작성
