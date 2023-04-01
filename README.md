# Profile
- 프로필 관련 이력 내용 및 프리랜서용으로 구성
- Spring boot + ReactJS 기반 프로젝트로 구성
- JPA와 MySQL 혹은 MariaDB를 사용하여 데이터베이스 사용

# 프로젝트 소개
- 물류 센터 아르바이트를 하면서 방황 생활 중 더 이상 미래가 없다고 판단하여 물류센터 아르바이트를 그만 두고 그 동안 인생을 보내면서 배운 기술은 프로그래밍 관련 기술 중 하나입니다. 코딩 실력을 재활 겸 ReactJS와 Spring Boot로 다시 새로 시작하는 마음으로 시작을 하였고, 1인 프로젝트로 시작하여 재활을 하면서 이에 프로필 관련 게시물을 만들었습니다. 

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
- 메인, 소개, 이력 및 기술, 프로젝트, 문의사항

# 사용 방법 (VS Code 환경 기준)
Git 사이트에서 먼저 Git을 설치 후 작업 가능 합니다.

### 1. 먼저 다음과 같이 Clone 합니다.
```
$ git clone https://github.com/BerkleyLim/profile.git
```
### 2. profile-back 디렉토리를 이동하여 Gradle 입력하여 Gradle 갱신 후 실행
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

### 3. 다시 되돌아와서 profile-front를 열어 아래와 같이 설치 후 실행

설치 방법
```
$ npm install
```

실행 방법
```
$ npm run start
```

### 4. 백엔드 DB 삽입 방법
지금 현재 가공해서 다시 배포하겠습니다.
```
```

### 5. 로그인 방법
임의로 키 발급해서 보내드리겠습니다.