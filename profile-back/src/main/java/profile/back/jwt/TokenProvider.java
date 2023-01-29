package profile.back.jwt;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import profile.back.domain.Member;
import profile.back.domain.UserContext;

// 참조 : https://bonjourpark.tistory.com/8
@Service
public class TokenProvider {
  private SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
  UserContext userContext;

  public String createToken(Member member) {

    // Header 설정
    Map<String, Object> headers = new HashMap<>();
    headers.put("typ", "JWT");
    headers.put("alg", "HS256");

    // payload 설정
    Map<String, Object> payloads = new HashMap<>();
    // payloads.put("data", "My First JWT !!"); // 바디대한 정보
    payloads.put("id", member.getId()); // 바디대한 정보
    payloads.put("name", member.getName());
    // payloads.put("password", member.getPassword()); // 바디대한 정보
    // payloads.put("role_user", member.getRole_user()); // 바디대한 정보

    Long expiredTime = 1000 * 60L * 60L * 2L; // 토큰 유효 시간 (2시간)

    Date ext = new Date(); // 토큰 만료 시간
    ext.setTime(ext.getTime() + expiredTime);

    // 토큰 Builder
    String jwt = Jwts.builder()
        .setHeader(headers) // Headers 설정
        .setClaims(payloads) // Claims 설정
        .setSubject(member.getRole_user()) // 토큰 용도
        .setExpiration(ext) // 토큰 만료 시간 설정
        .signWith(key, SignatureAlgorithm.HS256) // HS256과 Key로 Sign
        .compact(); // 토큰 생성

    return jwt;
  }

  // 토큰 검증
  public boolean validateToken(String authToken) throws JwtException {
    try {
      Jwts.parserBuilder()
          .setSigningKey(key) // Set Key
          .build() // 파싱 및 검증, 실패 시 에러
          .parseClaimsJws(authToken);

      return true;

      // Date expiration = claims.get("exp", Date.class);
      // String data = claims.get("data", String.class);

    } catch (JwtException e) { // 그외 에러났을 경우
      System.out.println(e);
      // ...
    }
    return false;
  }

  // 사용자 정보
  public Object getPrincipal() {
    return this.userContext;
  }
}
