package profile.back.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import lombok.RequiredArgsConstructor;
import profile.back.domain.Member;
import profile.back.service.MemberService;

@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/")
public class AuthController {
    @Autowired
    MemberService memberService;
//  @GetMapping("/loginUser")
//  public Member loginUser(HttpSession session) {
//      return (Member) session.getAttribute("loginUser");
//  }
  
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

      } else { // 로그인 실패!
          session.invalidate();
          result.put("state", "fail");
          
      }
      System.out.println(session.getAttribute("loginUser").getClass().getName());
      System.out.println();
//      return result;
      String string = (String) session.getAttribute("loginUser");
      System.out.println(string);
      return string;
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
  }
  
}
