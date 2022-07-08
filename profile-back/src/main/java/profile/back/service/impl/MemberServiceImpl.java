package profile.back.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import profile.back.domain.Member;
import profile.back.repository.MemberRepository;
import profile.back.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    MemberRepository memberRepository;

    @Override
    public List<Member> memberList() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Boolean searchRoot(@PathVariable Member member) {
        // TODO Auto-generated method stub
        System.out.println(member.getMno());
        return memberRepository.existsById(member.getMno());
    }
    
//    @Autowired
//    CareerMapper careerMapper;
//    
//    public Object careerList(@PathVariable Member member) {
//        // TODO Auto-generated method stub
//        
////        List<Introduction> l =  introductionRepository.findAll();
////        
////        Introduction i = l.get(0);
////        System.out.println(i.toString());
//        
//        return memberRepository.findAllById(member.getId());        
//    }
}
