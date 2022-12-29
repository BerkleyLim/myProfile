package profile.back.jwt;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Data;

```
@Configuration
@Data
public class JwtConfig {

  // jwt:
  // header: Authorization
  // #HS512 알고리즘을 사용할 것이기 때문에 512bit, 즉 64byte 이상의 secret key를 사용해야 한다.
  // #echo
  // 'silvernine-tech-spring-boot-jwt-tutorial-secret-silvernine-tech-spring-boot-jwt-tutorial-secret'|base64
  // secret:
  // c2lsdmVybmluZS10ZWNoLXNwcmluZy1ib290LWp3dC10dXRvcmlhbC1zZWNyZXQtc2lsdmVybmluZS10ZWNoLXNwcmluZy1ib290LWp3dC10dXRvcmlhbC1zZWNyZXQK
  // token-validity-in-seconds: 86400

  @Value(value = "{$jwt.Header}")
  Header header;

  @Value(value = "${jwt.tokenSubject}")
  private String tokenSubject;

  @Value("{$jwt.secret}")
  String secret;

  @Value("{$jwt.tokenValidityInSeconds}")
  Integer tokenValidityInSeconds;

  // // JWT의 대한 정보 중 JwtBuilder에서 불려온다. (토큰 빌더)
  // String jwt = Jwts.builder()
  // .setHeader(header) // header 설정
  // .setClaims(payload) // Claims 설정
  // .setSubject("user") // 토큰 용도
  // .setExpiration(ext) // 토큰 만료시간 설정
  // .signWith(SignatureAlgorithm.HS256, key.getByte()) // HS256과 key로 Sign
  // .compact(); // 토큰 생성
}
```

```
#Header
typ: 토큰의 타입을 지정합니다. 바로 JWT 이죠.
alg: 해싱 알고리즘을 지정합니다.  해싱 알고리즘으로는 보통 HMAC SHA256 혹은 RSA 가 사용되며, 이 알고리즘은, 토큰을 검증 할 때 사용되는 signature 부분에서 사용됩니다.


#PayLoad
iss: 토큰 발급자 (issuer)
sub: 토큰 제목 (subject)
aud: 토큰 대상자 (audience)
exp: 토큰의 만료시간 (expiraton), 시간은 NumericDate 형식으로 되어있어야 하며 (예: 1480849147370) 언제나 현재 시간보다 이후로 설정되어있어야합니다.
nbf: Not Before 를 의미하며, 토큰의 활성 날짜와 비슷한 개념입니다. 여기에도 NumericDate 형식으로 날짜를 지정하며, 이 날짜가 지나기 전까지는 토큰이 처리되지 않습니다.
iat: 토큰이 발급된 시간 (issued at), 이 값을 사용하여 토큰의 age 가 얼마나 되었는지 판단 할 수 있습니다.
jti: JWT의 고유 식별자로서, 주로 중복적인 처리를 방지하기 위하여 사용됩니다. 일회용 토큰에 사용하면 유용합니다.

#Signature
```