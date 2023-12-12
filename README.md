# Profile
- Spring boot + ReactJS 기반 프로젝트로 구성으로 개발자를 위한 홈페이지 구현
- JPA와 MySQL 혹은 MariaDB를 사용하여 데이터베이스 사용
- 당시 개발 기간동안, 맨땅의 헤딩으로 코딩 숙련도를 올리고, React와 Spring Boot를 새로 배우는 것을 목적으로 하여 작성
- 그 당시 나의 대한 소개를 올렸지만, 현재는 개발자 소개와 동시에 외주 서비스 진행을 위한 서비스로 작성  

# 개발 기간
- 1차 : 22.05.01 ~ 22.10.31 (현재 진행형으로 개발, 유지보수 중)
- 운영 기간 : 2022.11 ~

# 개발 환경
- OpenJDK 17
- Gradle 7.5.4
- IDE : VS code
- FrameWork : Spring Boot (2.xx)
- Database : MySQL
- ORM : JPA

# 주요 기능
- 메인, 소개, 의뢰요청 - 메인 공지, 의뢰 결과 확인
- ![image](https://github.com/BerkleyLim/profile/assets/36849342/eabf735c-6ea4-472f-8b9f-68cdaa1f3352)

# 운영 이후 현재 도전할 과제
- 노후화된 코드를 전부 리팩토링 목적으로 진행
- Redux를 Redux toolkit으로 전부 리팩토링
- Presentation&container 디자인 패턴으로 전환
- 게시판 리팩토링 제작 예정
- 관리자 페이지 : 헤더, 차후, 신규페이지 추가 예정

### Getting start
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
- ID : test
- Password : test11!!
