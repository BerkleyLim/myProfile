package profile.back.web.json;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import profile.back.domain.dto.auth.TMemberDTO;
import profile.back.domain.entity.user.TMember;
import profile.back.service.TMemberService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/member")
public class TMemberController {
    @Autowired
    TMemberService memberService;

    @GetMapping("/selectList")
    public List<TMember> selectList() {
        return memberService.selectList();
    }

    @PostMapping("/signup")
    public ResponseEntity<TMemberDTO> signup(
            @Valid @RequestBody TMemberDTO userDto) {
        return ResponseEntity.ok(memberService.signup(userDto));
    }

    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<TMemberDTO> getMyUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(memberService.getMyUserWithAuthorities());
    }
}
