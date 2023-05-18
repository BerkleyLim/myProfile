# Profile
- 개발자용 프로필 소개 구성
- Spring boot + ReactJS 기반 프로젝트로 구성
- JPA와 MySQL 혹은 MariaDB를 사용하여 데이터베이스 사용

# 프로젝트 소개
- 프로젝트 시작하게 된 계기는 잊어버렸던 코딩 실력을 재활을 목적으로 하여 실시 
- 프로젝트를 만든 목적은 코딩 실력을 향상 시키고자 하여 React와 Spring boot로 시작
- 독학을 하면서 혼자서 만든 프로젝트의 하나
- 저를 외부로 알리면서 프로젝트 협업 파트너를 구하고, 프로젝트 의뢰를 받아 프로젝트를 수행, 
- 마지막으로 IT 업체들에게 홍보를 목적으로 제작 한 것이 목적
- URL : <link>http://www.berkleylim.link:3000/</link> 

# 개발 기간
- 22.05.01 ~ 22.10.15 (현재 진행형으로 개발, 유지보수 중)

# 개발 환경
- OpenJDK 17
- Gradle 7.5.4
- IDE : VS code
- FrameWork : Spring Boot (2.xx)
- Database : MySQL
- ORM : JPA

# 주요 기능
- 메인, 소개, 보유스택, 프로젝트, 의뢰요청(재개발중 - 로그인시만 보임), 관리자페이지(로그인후 보임) - 메인 공지, 의뢰 결과 확인
<img src="./profile-front/public/image/readme/main.png">

# 사용 방법 (VS Code 환경 기준)
Git 사이트에서 먼저 Git을 설치 후 작업 가능 합니다.

# 작업 과제
- 프로젝트 : 사진 업로드 기능 추가, 업로드 기능 추가 이후 
- 공지&의뢰 : Draft.js 숙련 후 파일 업로드 기능 추가, 티스토리 블로그와 같이 사용하기 편리하게 작업 예정
- 설정 (톱니바퀴 모형) : 관리자 페이지 UI 구현 아이디어 기획
- 프린트 : 로그인 후 프로필 관련 내역 출력하는 기능 구현
- JWT : 로그인 시 JWT의 대한 내용을 추가한다.

### 1. 먼저 다음과 같이 Clone 합니다.
```
$ git clone https://github.com/BerkleyLim/profile.git
```


### 2. 백엔드 DB 삽입 방법
- 프론트 서버 및 백엔드 서버를 실행 하기 전에 Database 셋팅부터 먼저 작업 진행합니다.
- 자세한 사항은 profile-sql문 들어가서 README.md 파일의 대한 안내사항을 확인하고 진행합니다.

### 3. profile-front를 열어 아래와 같이 설치 후 실행

설치 방법
```
$ npm install
```

실행 방법
```
$ npm run start
```

### 4. profile-back 디렉토리를 이동하여 Gradle 입력하여 Gradle 갱신 후 실행
단, 본인의 환경이 Eclipse 기반일 경우 Gradle.build 파일을 열어 첫번째 줄에 아래와 같이 추가 후 Gradle 실행


-- Build.gradle 파일
```
apply plugin: 'eclipse-wtp'

plugins {
	id 'org.springframework.boot' version '2.7.3'
  id 'io.spring.dependency-management' version '1.0.13.RELEASE'
  id 'java'
	id 'com.moowork.node' version '1.3.1'
}
```

이후 Gradle 명령어 실행
```
$ gradle
```

새로 고침 이후, 다시 gradle bootrun으로 스프링 부트 실행한다.
```
$ gradle bootrun
```

### 5. 로그인 방법
- berkleylim16@gmail.com 으로 문의 시 알려드립니다.