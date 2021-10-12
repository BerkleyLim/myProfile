# templates 파일
- 기존 스프링 : HTML 냉에 자바 코드를 삽입하는 방식의 JSP 사용
- 웹 디렉터리는 src/main/webapp에 존재함
- 그러나 war 파일로 패키지화 되었을 경우만 정적 리소스를 정상적으로 이용 가능

- 이파일은 "src/main/resources" 디렉터리  내 화면과 관련된 파일을 관리한다
- 스프링 부트는 Thymeleaf  템플릿 엔진의 사용을 권한다