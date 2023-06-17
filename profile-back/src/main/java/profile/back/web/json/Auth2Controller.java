package profile.back.web.json;

import java.security.NoSuchAlgorithmException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import profile.back.common.jwt.JwtFilter;
import profile.back.common.jwt.TokenProvider;
import profile.back.domain.dto.auth.LoginDTO;
import profile.back.domain.dto.auth.TokenDTO;
import profile.back.domain.entity.user.TMember;
import profile.back.service.TMemberService;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping("/api/auth/")
public class Auth2Controller {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    // autowired 임시로 지정
    @Autowired
    TMemberService memberService;

    @PostMapping("simplelogin")
    public Boolean simpleLogin(@RequestBody TMember member) throws NoSuchAlgorithmException {
        // System.out.println(member);
        Boolean b = memberService.menberSearch(member);
        return b;
    }

    // jwt 방식
    // @PostMapping("/authenticate")
    // public ResponseEntity<TokenDTO> authorize(@Valid @RequestBody LoginDTO
    // loginDto) {
    // UsernamePasswordAuthenticationToken authenticationToken = new
    // UsernamePasswordAuthenticationToken(
    // loginDto.getUsername(), loginDto.getPassword());
    // log.info(authenticationToken.getPrincipal().toString());
    // // authencicate()가 실행이 될때 CustomUserDetailsService의 loadUserByUsername 이 실행됨
    // Authentication authentication =
    // authenticationManagerBuilder.getObject().authenticate(authenticationToken);
    // // Authentication 객체를 SecurityContext에 저장
    // SecurityContextHolder.getContext().setAuthentication(authentication);

    // // jwt 토큰 생성
    // String jwt = tokenProvider.createToken(authentication);

    // // Header, Body에 넣어줌
    // HttpHeaders httpHeaders = new HttpHeaders();
    // httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

    // return new ResponseEntity<>(new TokenDTO(jwt), httpHeaders, HttpStatus.OK);
    // }

}
