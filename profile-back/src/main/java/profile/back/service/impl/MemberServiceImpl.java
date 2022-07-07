package profile.back.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Career;
import profile.back.repository.MemberRepository;
import profile.back.service.CareerService;

@Service
public class MemberServiceImpl implements CareerService {
    @Autowired
    MemberRepository memberRepository;
    
//    @Autowired
//    CareerMapper careerMapper;
//    
    public Boolean careerList(Member member) {
        // TODO Auto-generated method stub
        
//        List<Introduction> l =  introductionRepository.findAll();
//        
//        Introduction i = l.get(0);
//        System.out.println(i.toString());
        
        return memberRepository.findAll();        
    }
}
