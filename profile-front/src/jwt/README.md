# JWT 관련
- 다음은 Login 처리 기능 시 JWT Token 값을 받아와서 해당 로그인 유저 권한의 따라 부여한다.
- Front 부분, 로그인 후, Access Token 과 Refresh Token 값을 받아온다.
- Back 부분은 토큰 생성 및 토큰 유효성 일치 검사를 맡는다.
- 참조 : https://goodteacher.tistory.com/97