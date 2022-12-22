package profile.back.jwt;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.jose.Algorithm;
import com.nimbusds.jwt.JWT;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import profile.back.domain.Member;

@Data
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends
    UsernamePasswordAuthenticationFilter {

  private final Logger logger = LoggerFactory.getLogger(this.getClass());
  private final AuthenticationManager authenticationManager;

  // Authentication 객체 만들어서 리턴 => 의존 : AuthenticationManager
  // 인증 요청시에 실행되는 함수 => /login
  @Override
  public Authentication attemptAuthentication(HttpServletRequest request,
      HttpServletResponse response)
      throws AuthenticationException {

    logger.info("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
    logger.info("JwtAuthenticationFilter : 진입");

    // request에 있는 username과 password를 파싱해서 자바 Object로 받기
    ObjectMapper om = new ObjectMapper();
    Member member = null;
    try {
      member = om.readValue(request.getInputStream(),
          Member.class);
    } catch (Exception e) {
      e.printStackTrace();
    }

    logger.debug("JwtAuthenticationFilter :: {}", member);

    // 유저네임패스워드 토큰 생성
    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
        member.getId(), member.getPassword());

    logger.debug("JwtAuthenticationFilter : 토큰생성완료");

    // authenticate() 함수가 호출 되면 인증 프로바이더가 유저 디테일 서비스의
    // loadUserByUsername(토큰의 첫번째 파라메터) 를 호출하고
    // UserDetails를 리턴받아서 토큰의 두번째 파라메터(credential)과
    // UserDetails(DB값)의 getPassword()함수로 비교해서 동일하면
    // Authentication 객체를 만들어서 필터체인으로 리턴해준다.

    // Tip: 인증 프로바이더의 디폴트 서비스는 UserDetailsService 타입
    // Tip: 인증 프로바이더의 디폴트 암호화 방식은 BCryptPasswordEncoder
    // 결론은 인증 프로바이더에게 알려줄 필요가 없음.
    Authentication authentication = authenticationManager.authenticate(authenticationToken);

    PrincipalDetails principalDetailis = (PrincipalDetails) authentication.getPrincipal();
    logger.debug("Authentication :: {}",
        principalDetailis.getUser().getUserName());

    logger.info("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");

    return authentication;
  }

  // JWT Token 생성해서 response에 담아주기
  @Override
  protected void successfulAuthentication(HttpServletRequest request,
      HttpServletResponse response,
      FilterChain chain, Authentication authResult) throws IOException,
      ServletException {
    logger.info("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");

    // PrincipalDeddtails principalDetailis = (PrincipalDetails)
    // authResult.getPrincipal();

    // logger.debug("UserId :: {}", principalDetailis.getUser().getUserId());
    // logger.debug("UserName :: {}", principalDetailis.getUser().getUserName());

    // String jwtToken = JWT.create().withSubject(principalDetailis.getUsername())
    // .withExpiresAt(new Date(System.currentTimeMillis() +
    // JwtProperties.EXPIRATION_TIME))
    // .withClaim("userId", principalDetailis.getUser().getUserId())
    // .withClaim("username", principalDetailis.getUser().getUserName())
    // .sign(Algorithm.HMAC512(JwtProperties.SECRET));
    // logger.info("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");

    // response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX +
    // jwtToken);
  }

}
