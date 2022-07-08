package profile.back.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import profile.back.domain.Member;

public interface MemberService {
    public List<Member> memberList();
    public Boolean searchRoot(@PathVariable Member member);
}
