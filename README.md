# 동국대의 모든 정보가 담겨있는 [동대여지도] 

### 	📜 동국대학교 교내 정보, 길찾기 서비스![Logo_Character](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/87875bd4-8a1c-4585-9522-b993f69d261e)



#### 팀명 : 미다스의 Son
#### 팀장 : [손기민](https://github.com/KiminSon)(내부 데이터 관리)
#### 팀원 : [송명우](https://github.com/smu207)(프론트엔드) , [이다은](https://github.com/dlekdms2)(프론트엔드), [이유진](https://github.com/ZZZINU)(프론트엔드), [이형준](https://github.com/asd56780)(내부 데이터 관리), [정규용](https://github.com/Gyudol1231)(프론트엔드)

#

<img src="https://img.shields.io/badge/License : MIT -E8E8E8?style=flat&TypeScript=white">   <img src="https://img.shields.io/badge/Window-0078D6?style=flat&logo=windows&logoColor=white"/>

<img src="https://img.shields.io/badge/VScode -007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/React 18.2.0 -61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/>  <img src="https://img.shields.io/badge/Python 3.8.8 -3776AB?style=flat&logo=Python&logoColor=white"/>






#### ✤ 프로젝트 목표 : 동국대 교내 시설의 상세정보를 담은 웹 페이지 개선
##### 페이지 합치기, 경로 출력 시간 단축, 가중치 수정


#### ✤ 기대효과
##### - 신입생 및 재학생 학교의 편의 시설 정보를 손쉽게 이용 -> 학교 적응력 향상
##### - 현재 위치한 정보를 입력하여 가장 가까운 편의 시설 정보를 제공함으로써 효율적인 서비스 제공 -> 정보 접근 용이
##### - 기존 프로젝트에 비해 정보를 얻기 위한 속도와 사용성의 향상


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
|makejson/closeBuilding.py|출발 건물로부터 선택한 편의시설을 가까운 순으로 정렬하고, 각 건물에 어떤 편의시설이 있는지 정리하는 알고리즘|
|makejson/find_path.py|출발지에서 도착지까지의 빠른 경로 노드를 출력하는 알고리즘|
|makejson/find_path2.py|출발지에서 도착지까지의 편한 경로 노드를 출력하는 알고리즘|
|makejson/find_shortcut.py|출발지에서 도착지까지의 지름길 정보를 출력하는 알고리즘|





### 실행 방법 
##### 아래 링크로 접속
- [동대여지도](http://xn--vk1boo4bx14h9le.xn--h32bi4v.xn--3e0b707e/)
  
#  
   
### 편의시설 및 경로 찾기 페이지
###### 처음 접속 시 보여지는 화면, 교내 경로와 편의시설을 검색할 수 있다. '도착지' 위에 있는 토글 버튼으로 화면을 전환할 수 있다.

<img width="1429" src="https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/363697f9-578e-412f-9868-5cf5d5d27465">


#    
   
### 교내 편의시설 탭
###### 출발 건물 및 편의시설을 입력 시, 건물에서부터 가까운 순서대로 리스트 출력한다. 편의시설까지의 경로도 같이 안내한다.
<img width="1419" src="https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/2915e65f-db8c-48fb-b176-9e775930ab3a">

###### 상단의 토글 버튼을 클릭하여 경로 안내 탭으로 전환할 수 있고, 우측 하단에 빠른 경로 보기 버튼을 클릭하여 빠른 경로로 전환할 수 있다. 경로안내 탭은 지름길 정보를 안내한다.
<img width="1419" src="https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/06bd6d05-bf1a-4949-9e8d-5a56240c2eb0">





#  

### 교내 건물 정보 페이지
###### 교내 학사운영실, 열람실 정보, 전화번호를 안내하는 탭
<img width="1421" src="https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/fd99401a-95c3-4865-a743-2451320a3e98">


###### 건물 내에 있는 편의시설 정보를 안내하는 탭
<img width="1421" src="https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/68e54f57-8b4a-4e8b-8779-60ddda7ee5c0">






#  

### 알고리즘

#### ✤ 데이크스트라 알고리즘

#####  우선순위 큐를 이용한 데이크스트라 알고리즘 구현

![동국대 지도 경로 (각 경로 간의 거리)](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/10fd87c1-402b-4d79-a3fe-9411db1fce6f)


##### ❃ 노드 = 건물 및 길목 (건물의 노드는 건물명으로, 길목의 노드는 알파벳으로 명명)
##### ❃ 간선 = 길 (지름길 포함)
##### ❃ 가중치 = 노드와 노드 사이 직선거리

#### 알고리즘의 결과를 미리 JSON 파일로 저장
##### ★결과를 미리 저장해놓기 때문에 경로 출력 시간이 짧아진다.
<br/><br/>


#### ✤ 편의시설 정렬 알고리즘 : /makejson/closeBuilding.py

![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/f863cf24-9cc9-4399-82d0-558e870679f8)

##### ❃ 각 건물의 편의시설 정보를 딕셔너리 형식으로 구성
<br/>

![image](https://user-images.githubusercontent.com/114053036/207218670-44f84f69-15e7-4eee-8c45-d3156ea365cd.png)

##### ❃ 다익스트라 알고리즘으로 건물들을 가까운 순으로 정렬
##### ❃ 정렬된 건물 순으로 편의시설 나열
##### ❃ /frontend/src/convenient.json 파일로 저장
<br/>

![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/0f2ea563-745c-46ac-b8e7-64c386d8680c)
##### ❃ 각 건물에 있는 편의시설 리스트 정리
##### ❃ /frontend/src/eachconvenient.json 파일로 저장

<br/>


#### ✤ 경로 계산 알고리즘 : /makejson/find_path.py, /makejson/find_path2.py

![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/2db1f0b9-31ac-4249-aaf9-e6f3a04e6c3a)
##### ❃ 왼쪽 : 빠른 경로 그래프 (가중치 = 노드 간 직선 거리)
##### ❃ 오른쪽 : 편한 경로 그래프 (가중치 = 간선을 지날 때의 에너지 소비량)
<br/><br/>
![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/c55015a9-77bb-4776-8e33-b8529c5f90e9)
##### ❃ 일부 건물에 대해 빠른 경로 그래프와 편한 경로 그래프의 결과가 다름
##### ❃ 왼쪽 : 빠른 경로 그래프 (후문 -> 경영관에서 헐떡고개를 지나는 경로 안내)
##### ❃ 오른쪽 : 편한 경로 그래프 (후문 -> 경영관에서 원흥관을 지나는 경로 안내)
##### ❃ 빠른 경로 그래프의 출력 결과는 /frontend/src/lib/path/path1.json 파일로, 편한 경로 그래프의 출력 결과는 /frontend/src/lib/path/path2.json 파일로 저장
<br/><br/>


#### ✤ 지름길 출력 알고리즘 : /makejson/find_shortcut.py

![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/7b733687-8bd5-4b49-a24a-d84763601369)
##### ❃ 지도만 보고 알 수 없는 지름길 정보를 딕셔너리로 구성

![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/561a5cb1-17a3-4be7-b3b8-b277ed0f0d3e)
##### ❃ 지름길에 해당하는 노드를 지날 때 딕셔너리의 결과물이 출력
##### ❃ 빠른 경로 그래프의 출력 결과는 /frontend/src/lib/shortcut/shortcut1.json 파일로, 편한 경로 그래프의 출력 결과는 /frontend/src/lib/shortcut/shortcut2.json 파일로 저장
<br>
##### + 기존 프로젝트에서 누락된 지름길 정보 추가(법학관, 혜화관, 학림관 등)
![image](https://github.com/CSID-DGU/2023-1-OPPS1-SonOfMidas-3/assets/126967574/c3587c30-1cca-42dd-b38d-6b63f1df1389)


#


#### 참고 문헌 및 사이트
- 데이크스트라 알고리즘 : https://www.fun-coding.org/Chapter20-shortest-live.html 
- 에너지 소비량 계산
<br>
  - GLASS, Stephen, et al. (ed.). ACSM's metabolic calculations handbook. Lippincott Williams & Wilkins, 2007.<br>
  - [중앙대학교 운동생리학 박사 김태욱 원장 개인 블로그(소비칼로리 계산법)](https://m.blog.naver.com/taessam_/221547145175) [2019.05.26]

- 기존 프로젝트 : [You-are-Webcome](https://github.com/CSID-DGU/2022-2-OSSProj-You_are_webcome-9)
  
- 폰트 : 동국체
  - [동국체 다운로드](https://www.dongguk.edu/page/713)

