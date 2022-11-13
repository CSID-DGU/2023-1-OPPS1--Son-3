### 사용법

App(nginx) 폴더에 frontend 폴더에있는 모든 파일을 넣는다.
<img width="223" alt="스크린샷 2022-11-13 오후 7 02 20" src="https://user-images.githubusercontent.com/101785677/201516303-28c4c891-83aa-45ee-9d63-4e47e710eebc.png">

해당 App폴더로 이동하여 
npm install
npm run build
docker-compose up -d
리눅스에서 되는 것 확인, 다른 운영체제 확인 해볼예정 nodejs나 npm없이도 되게 구현예정 
안될경우, 도커파일 수정예정


dockerfile과 nginx파일은 다음글 참고해서 작성함 : https://hello-bryan.tistory.com/169
