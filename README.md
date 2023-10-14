# Profile
- 개발자용 프로필 소개 구성
- Spring boot + ReactJS 기반 프로젝트로 구성
- JPA와 MySQL 혹은 MariaDB를 사용하여 데이터베이스 사용

# 프로젝트 소개
- 처음 시작은 2~3년간의 타 직종에 잠깐 전환하다가 다시 웹개발자로 시작하기 위해 잊어버렸던 코딩 실력을 재활을 목적으로 하여 실시 
- 22년 당시 React와 Spring boot를 많이 쓰는 언어라고 생각하여 독학하여 AWS 서버에 배포
- 프로젝트 당시 본인 소개 용도로 개발을 하였지만, 현재 외주 프로젝트 및 사이드 프로젝트 등까지의 기능을 살려 리뉴얼
- 개발은 22년 10월에 끝났으나, 22년 11월 이후, domain 등록하고, 23년 10월 기준까지 꾸준히 리뉴얼 작업 진행 중
- URL : <link>http://www.berkleylim.link/</link> 

# 개발 기간
- 1차 : 22.05.01 ~ 22.10.15 (현재 진행형으로 개발, 유지보수 중)
- 운영 기간 : 2022.11 ~

# 개발 환경
- OpenJDK 17
- Gradle 7.5.4
- IDE : VS code
- FrameWork : Spring Boot (2.xx)
- Database : MySQL
- ORM : JPA

# 주요 기능
- 메인, 소개, 보유스택, 프로젝트, 의뢰요청, 관리자페이지(로그인후 보임) - 메인 공지, 의뢰 결과 확인
<img src="./profile-front/public/image/readme/main.png">

# 사용 방법 (VS Code 환경 기준)
Git 사이트에서 먼저 Git을 설치 후 작업 가능 합니다.
현재 운영 중이나, 추가 개발을 위해 지금 현재 사용하지 않는 환경 설정은 남기고 있으나,
차후, 앞으로 필요 없을 환경 설정은 제거 할 예정입니다.

# 앞으로 작업 과제
- 보유 스택 : 현재 리뉴얼 된 페이지로 새로 추가
- 프로젝트 : 고객사 프로젝트 + github 프로젝트 추가
- 관리자 페이지 : 마스터 테이블 제작 (Header 메뉴, footer 메뉴, 의뢰 관리 메뉴, 게시판 관리 등등)
- React-Native를 이용하여 모바일 Native 앱과의 호환성을 맞추면서 UI 개발
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
- ID : test
- Password : test11!!