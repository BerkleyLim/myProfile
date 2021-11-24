package profile.back.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.support.SessionStatus;

@Controller
@RequestMapping("/")
public class AuthController {
//  @GetMapping("/loginUser")
//  public Member loginUser(HttpSession session) {
//      return (Member) session.getAttribute("loginUser");
//  }
  
  // 일반 로그인
  @RequestMapping("/login")
  public Object login(
          @RequestParam("data") String data,
          HttpServletResponse response,
          HttpSession session) throws Exception {
      
      HashMap<String, Object> result = new HashMap<>();
      if (data.equals("1qa2wad234ewg67uy7t89ouy43ertdrfgedrtedr")) { // 로그인 성공!
          session.setAttribute("loginUser", "1qa2wad234ewg67uy7t89ouy43ertdrfgedrtedr");
          result.put("state", "success");

      } else { // 로그인 실패!
          session.invalidate();
          result.put("state", "fail");
      }
      return result;
  }
  
  @RequestMapping("/logout")
  public void logout(SessionStatus status, HttpSession session) throws Exception {
      // @SessionAttributes에서 관리하는 세션 데이터를 모두 제거한다.
      status.setComplete();
      
      // 세션을 꺼내 무효화시킨다.
      session.invalidate();
  }
  
}
