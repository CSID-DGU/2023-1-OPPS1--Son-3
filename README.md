# 2022-2-OSSProj-You_are_webcome-9  

### ❃ DGU Information Web service ![Logo_Character](https://user-images.githubusercontent.com/101785677/206251564-b6e4c2ba-5f3f-4b3a-ad90-07e6e46686a8.png)



#### Team : You're webcome
#### Team Leader : [문서연](https://github.com/seoyeun0106)(프론트엔드) , Team Member : [박수빈](https://github.com/P-subin)(백엔드) , [이지현](https://github.com/wlgus5704)(서버, 웹디자인)

#

<img src="https://img.shields.io/badge/License : MIT -E8E8E8?style=flat&TypeScript=white"> <img src="https://img.shields.io/badge/macOS-000000?style=flat&logo=macos&logoColor=white"/>  <img src="https://img.shields.io/badge/Window-0078D6?style=flat&logo=windows&logoColor=white"/>  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white"/>

<img src="https://img.shields.io/badge/VScode -007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/React 18.2.0 -61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/>  <img src="https://img.shields.io/badge/Python 3.8.8 -3776AB?style=flat&logo=Python&logoColor=white"/>  <img src="https://img.shields.io/badge/Docker 20.10.21-2496ED?style=flat&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/ Docker License : Apache License 2.0  -E8E8E8?style=flat&TypeScript=white">






#### ✤ 프로젝트 목표 : 동국대 교내 시설의 상세정보를 담은 웹 개발
##### 교내 편의시설 검색, 건물 정보 안내 (교내 열람실, 카페등의 운영시간, 전화번호 안내), 교내 경로 안내


#### ✤ 기대효과
##### - 신입생 및 재학생 학교의 편의 시설 정보를 손쉽게 이용 -> 학교 적응력 향상
##### - 현재 위치한 정보를 입력하여 가장 가까운 편의 시설 정보를 제공함으로써 효율적인 서비스 제공 -> 정보 접근 용이


#### ✤ 화면 설계도
![image](https://user-images.githubusercontent.com/114053036/206920731-2c794346-3a04-4849-ad0f-a9cf6ef14b4c.png)


#### ✤ 파일 구조

|폴더|내용|
|------|---|
|public/|이미지, 아이콘과 같은 자료 포함 폴더|
|frontend/src/pages|출력될 페이지|
|frontend/src/lib|사용되는 데이터 및 라우터, 커스텀 훅등 import 해서 활용할 폴더|
|frontend/src/components|page를 구성하는 데 활용될 컴포넌트들 다른 폴더에 들어있지 않으면 공용으로 사용되는 컴포넌트를 의미|
|frontend/src/components/BuildingInfo|건물 정보 페이지를 구성하는 데 활용될 컴포넌트들|
|frontend/src/components/Convenient|편의시설 검색 페이지를 구성하는 데 활용될 컴포넌트들|
|frontend/src/components/Map|교내 경로 페이지를 구성하는 데 활용될 컴포넌트들|
|frontend/src/components/MainPage|메인 페이지(홈)를 구성하는 데 활용될 컴포넌트들|
|frontend/src/components/asset|컴포넌트로 만들어 사용할 .svg 파일|
|backend/closeBuilding.py|출발 건물로부터 선택한 편의시설을 가까운 순으로 정렬하는 알고리즘|
|backend/find_path.py|출발지에서 도착지까지의 경로 노드를 출력하는 알고리즘|
|backend/find_shortcut.py|출발지에서 도착지까지의 지름길 정보를 출력하는 알고리즘|





### 실행 방법 
- Local에 Docker 설치 되어있어야함 : https://docs.docker.com/get-docker/ 

```
docker pull wlgus5704/you_are_webcome:fin

docker run -d -p 8300:80 wlgus5704/you_are_webcome:fin
```

- 검색창에 localhost:8300 으로 접속  

#### ✤ [데모 영상](https://github.com/CSID-DGU/2022-2-OSSProj-You_are_webcome-9/blob/main/document/you_are_webcome_%EC%8B%9C%EC%97%B0%EC%98%81%EC%83%81.mp4)
  
#  
   
### 메인 탭
###### 처음 접속시 보여지는 화면 

<img width="1429" alt="스크린샷 2022-12-11 오후 12 36 43" src="https://user-images.githubusercontent.com/101785677/206885126-44988d7c-fc53-421c-aad6-c13ec7e26833.png">


#    
   
### 교내 편의시설 탭
###### 출발 건물 및 편의시설(무인발급기, 복사기등)을 입력시, 건물에서 부터 가까운 순서대로 리스트 출력 
<img width="1419" alt="스크린샷 2022-12-13 오후 9 00 47" src="https://user-images.githubusercontent.com/101785677/207312416-6ea56862-7cb1-46e0-945b-4e55b6d3ec76.png">

###### ❃ 길찾기 버튼 누를시 다음과 같이 가까운 편의시설 1번째 항목의 건물로 화면 전환, 검색 버튼을 누르거나 엔터 누를 시 경로 안내
![Dec-13-2022 21-02-46](https://user-images.githubusercontent.com/101785677/207312867-e2e5514a-485e-4aee-9ee2-1e36fced3e75.gif)





#  

### 교내 건물 안내 탭
###### 교내 학사운영실, 카페등의 운영시간, 전화번호를 안내하는 탭
<img width="1421" alt="스크린샷 2022-12-13 오후 9 05 07" src="https://user-images.githubusercontent.com/101785677/207313291-413de369-1466-4cc9-8e9f-eba873e96e2c.png">


###### ❃ 핀 위치이동 확인가능
![Dec-13-2022 21-04-16](https://user-images.githubusercontent.com/101785677/207313202-6dc56112-4f65-4fad-bdc9-4f0297c238f1.gif)



#  

### 교내 경로 보기 탭
###### 교내 최단경로 및 오르막길 반영된 경로 표시 해주는 탭 (지름길 간단 사진 안내 포함)
###### 경사반영 아이콘에 따라 경로 달라짐
![Dec-13-2022 21-07-41](https://user-images.githubusercontent.com/101785677/207313924-005b0ef6-309d-4997-9572-d17d5403036a.gif)



#  

### 알고리즘

#### ✤ 다익스트라 알고리즘

##### 최소 힙으로 구성된 우선순위 큐를 이용해 다익스트라 알고리즘 구현

![동국대 지도 경로 (각 경로 간의 거리)](https://user-images.githubusercontent.com/114053036/207216776-4b5e2154-3751-40e6-8eec-3df912d2d6cc.jpg)


##### ❃ 노드 = 건물 및 길목 (건물의 노드는 건물명으로, 길목의 노드는 알파벳으로 명명)
##### ❃ 간선 = 길 (지름길 포함)
##### ❃ 가중치 = 노드와 노드 사이 직선거리
<br/><br/>


#### ✤ 편의시설 정렬 알고리즘 : /backend/closeBuilding.py

![image](https://user-images.githubusercontent.com/114053036/207217205-69646c9b-8213-401c-b377-3b1a7f572a6b.png)

##### ❃ 각 건물의 편의시설 정보를 딕셔너리 형식으로 구성
##### ❃ 새로운 편의시설 추가 및 기존 편의시설 삭제 시 위 딕셔너리만 수정 후 코드 실행

![image](https://user-images.githubusercontent.com/114053036/207218670-44f84f69-15e7-4eee-8c45-d3156ea365cd.png)

##### ❃ 다익스트라 알고리즘으로 건물들을 가까운 순으로 정렬
##### ❃ 정렬된 건물 순으로 편의시설 나열
##### ❃ /frontend/src/convenient.json 파일로 저장
<br/><br/>


#### ✤ 경로 보기 알고리즘 : /backend/find_path.py

![image](https://user-images.githubusercontent.com/114053036/207219587-aa2db079-23ad-4b4b-933e-5e4f05f19858.png)
##### ❃ 왼쪽 : 경사 반영 X 그래프 (가중치 = 노드 간 직선 거리)
##### ❃ 오른쪽 : 경사 반영 O 그래프 (가중치 = 노드 간 직선 거리 * 경사도)

![image](https://user-images.githubusercontent.com/114053036/207220053-ded24e31-e942-4eae-8e9f-a3134e8e8c84.png)
##### ❃ 일부 건물에 대해 경사 반영 X 그래프와 경사 반영 O 그래프의 결과가 다름
##### ❃ 왼쪽 : 경사 반영 X 그래프 (후문 -> 경영관에서 헐떡고개를 지나는 경로 안내)
##### ❃ 오른쪽 : 경사 반영 O 그래프 (후문 -> 경영관에서 원흥관을 지나는 경로 안내)
##### ❃ 경사 반영 X 그래프의 출력 결과는 /frontend/src/lib/path/path1.json 파일로, 경사 반영 O 그래프의 출력 결과는 /frontend/src/lib/path/path2.json 파일로 저장
<br/><br/>


#### ✤ 지름길 출력 알고리즘 : /backend/find_shortcut.py

![image](https://user-images.githubusercontent.com/114053036/207220739-86c6cb98-0f9d-4c1b-9d7e-bed2ed8ead7b.png)
##### ❃ 지도만 보고 알 수 없는 지름길 정보를 딕셔너리로 구성

![image](https://user-images.githubusercontent.com/114053036/207220874-d2e4b8e6-4587-4173-9891-64ad7bd4ca6e.png)
##### ❃ 지름길에 해당하는 노드를 지날 때 딕셔너리의 결과물이 출력
##### ❃ 경사 반영 X 그래프의 출력 결과는 /frontend/src/lib/shortcut/shortcut1.json 파일로, 경사 반영 O 그래프의 출력 결과는 /frontend/src/lib/shortcut/shortcut2.json 파일로 저장



#


#### Attributes
- Dijkstra's algorithm : https://www.fun-coding.org/Chapter20-shortest-live.html
- Docker : https://hello-bryan.tistory.com/169
- Images : Freepik
  - [Smile Image](https://kr.freepik.com/free-vector/colorful-emoji-set-design_12067944.htm)
  - [Map Image](https://kr.freepik.com/free-psd/3d-rendering-of-gps-travel-icon_25778699.htm#&position=3&from_view=undefined)
  - [thumb-up Image](https://kr.freepik.com/free-psd/3d-rendering-of-thumb-up-hand_23735427.htm)
  - [Hands-holding-smartphone Image](https://kr.freepik.com/free-psd/3d-collection-with-hands-holding-smartphone_13678985.htm#query=3d&position=0&from_view=keyword)
  - [Pencil Image](https://kr.freepik.com/free-psd/3d-rendering-of-ui-icon_20546695.htm#query=3d&position=25&from_view=keyword)
  
- Fonts : Google Fonts
  - [Main font. Modak](https://fonts.google.com/specimen/Modak?query=modak)
  - [Sub font. apple-system O](https://developer.apple.com/fonts/system-fonts/)

