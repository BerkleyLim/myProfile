package profile.back.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Career;
import profile.back.service.IntroductionService;

@Service
public class CareerServiceImpl implements IntroductionService {
    @Autowired
    CareerRepository careerRepository;
    
    @Autowired
    CareerMapper careerMapper;
    
    public List<Career> list() {
        // TODO Auto-generated method stub
        
//        List<Introduction> l =  introductionRepository.findAll();
//        
//        Introduction i = l.get(0);
//        System.out.println(i.toString());
        
        return careerRepository.findAll();        
    }
}
