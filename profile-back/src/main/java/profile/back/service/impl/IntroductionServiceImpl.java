package profile.back.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.Introduction;
import profile.back.exception.ResourceNotFoundException;
import profile.back.mapper.IntroductionMapper;
import profile.back.repository.IntroductionRepository;
import profile.back.service.IntroductionService;

@Service
public class IntroductionServiceImpl implements IntroductionService {
    @Autowired
    IntroductionRepository introductionRepository;
    
    @Autowired
    IntroductionMapper introductionMapper;
    
    @Override
    public List<Introduction> list() {
        // TODO Auto-generated method stub
        
//        List<Introduction> l =  introductionRepository.findAll();
//        
//        Introduction i = l.get(0);
//        System.out.println(i.toString());
        
        return introductionRepository.findAll();        
    }

    @Override
    public ResponseEntity<Introduction> get(long ino) {
        // TODO Auto-generated method stub
        Introduction introduction = introductionRepository.findById(ino)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Introduction Data by no : ["+ino+"]"));
        return ResponseEntity.ok(introduction);
    }

    @Override
    public Introduction insert(Introduction introduction) {
        // TODO Auto-generated method stub
        return introductionRepository.save(introduction);
    }

    @Override
    public ResponseEntity<Introduction> update(long ino, Introduction introduction) {
        // TODO Auto-generated method stub
        Introduction newIntroduction = introductionRepository.findById(ino)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Introduction Data by no : ["+ino+"]"));
        
        newIntroduction.setIno(introduction.getIno());
        newIntroduction.setTitle(introduction.getTitle());
        newIntroduction.setContents(introduction.getContents());
        newIntroduction.setViewNumber(introduction.getViewNumber());
        
        Introduction endIntroduction = introductionRepository.save(newIntroduction);
        return ResponseEntity.ok(endIntroduction);
    }
    
    @Override
    public ResponseEntity<Map<String, Boolean>> delete(long ino) {
        // TODO Auto-generated method stub
        Introduction introduction = introductionRepository.findById(ino)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Introduction Data by no : ["+ino+"]"));
        
        introductionRepository.delete(introduction);
        Map<String, Boolean> response = new HashMap<>();
        
        response.put("Deleted Introduction Data by id : ["+ino+"]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
