package profile.back.service;

import java.util.List;

import profile.back.domain.Member;

public interface MemberService {
    public List<Member> memberList();
    public Boolean searchRoot(Member member);
}
