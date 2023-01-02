package profile.back.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import lombok.RequiredArgsConstructor;
import profile.back.domain.Member;
// import profile.back.jwt.JwtFilter;
// import profile.back.jwt.TokenProvider;
import profile.back.service.MemberService;

@RequiredArgsConstructor
// @CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class AuthController {
    // @Autowired
    // private final TokenProvider tokenProvider;
    // @Autowired
    // private final AuthenticationManagerBuilder authenticationManagerBuilder;

    // public AuthController(TokenProvider tokenProvider,
    // AuthenticationManagerBuilder authenticationManagerBuilder) {
    // this.tokenProvider = tokenProvider;
    // this.authenticationManagerBuilder = authenticationManagerBuilder;
    // }

    @Autowired
    MemberService memberService;
    // @GetMapping("/loginUser")
    // public Member loginUser(HttpSession session) {
    // return (Member) session.getAttribute("loginUser");
    // }

    // 일반 로그인
    @PostMapping("login")
    public String login(
            @RequestBody Member member,
            HttpServletResponse response,
            HttpSession session) throws Exception {
        System.out.println("login");

        System.out.println(member);

        HashMap<String, Object> result = new HashMap<>();
        if (memberService.searchRoot(member)) { // 로그인 성공!
            session.setAttribute("loginUser", "admin");
            result.put("state", "success");
            return (String) session.getAttribute("loginUser");
        } else { // 로그인 실패!
            session.invalidate();
            result.put("state", "fail");
        }
        // System.out.println(session.getAttribute("loginUser").getClass().getName());
        // System.out.println();
        //// return result;
        // String string = (String) session.getAttribute("loginUser");
        // System.out.println(string);
        // return string;
        return null;
    }

    @RequestMapping("loginStatus")
    public void loginStatus(SessionStatus status, HttpSession session) throws Exception {

    }

    @RequestMapping("logout")
    public void logout(SessionStatus status, HttpSession session) throws Exception {
        // @SessionAttributes에서 관리하는 세션 데이터를 모두 제거한다.
        status.setComplete();

        // 세션을 꺼내 무효화시킨다.
        session.invalidate();
        System.out.println("로그아웃");
    }

    // jwt 방식
    // @PostMapping("/authenticate")
    // public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDto
    // loginDto) {

    // UsernamePasswordAuthenticationToken authenticationToken = new
    // UsernamePasswordAuthenticationToken(
    // loginDto.getUsername(), loginDto.getPassword());
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

    // return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    // }

}
