package profile.back.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Career;
import profile.back.mapper.CareerMapper;
import profile.back.repository.CareerRepository;
import profile.back.service.CareerService;

@Service
public class CareerServiceImpl implements CareerService {
    @Autowired
    CareerRepository careerRepository;
    
    @Autowired
    CareerMapper careerMapper;
    
    public List<Career> careerList() {
        // TODO Auto-generated method stub
        
//        List<Introduction> l =  introductionRepository.findAll();
//        
//        Introduction i = l.get(0);
//        System.out.println(i.toString());
        
        return careerRepository.findAll();        
    }
}
