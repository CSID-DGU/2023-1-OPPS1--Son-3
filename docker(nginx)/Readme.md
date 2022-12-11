### docker에 build하는 법
로컬에 nodejs, docker 설치 되어있어야 사용가능!
docker(nginx) 폴더에 frontend 폴더에있는 모든 파일을 넣는다.
<img width="223" alt="스크린샷 2022-11-13 오후 7 02 20" src="https://user-images.githubusercontent.com/101785677/201516303-28c4c891-83aa-45ee-9d63-4e47e710eebc.png">

해당 docker폴더로 이동하여 
### npm install
### npm run build
### docker-compose up -d
로컬연결 확인가능

이후에는 해당이미지 도커에 올린 후, pull 받아서 사용하면 nodejs나 별도의 파일없이 바로 볼 수 있음

dockerfile과 nginx파일은 다음글 참고해서 작성함 : https://hello-bryan.tistory.com/169
