package profile.back.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.BigSkill;
import profile.back.domain.MediumSkill;
import profile.back.domain.SmallSkill;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.BigSkillRepository;
import profile.back.repository.MediumSkillRepository;
import profile.back.repository.SmallSkillRepository;
import profile.back.service.SkillService;

@Service
public class SkillServiceImpl implements SkillService {
    @Autowired
    BigSkillRepository bigSkillRepository;
    
    @Autowired
    MediumSkillRepository mediumSkillRepository;
    
    @Autowired
    SmallSkillRepository smallSkillRepository;
    
    // 대분류
    @Override
    public List<BigSkill> bigSkillList() {
        // TODO Auto-generated method stub
        return bigSkillRepository.findAll();
    }

    @Override
    public ResponseEntity<BigSkill> bigSkillGet(long bno) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(bno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : ["+bno+"]"));
        
        return ResponseEntity.ok(bigSkill);
    }

    @Override
    public ResponseEntity<BigSkill> bigSkillUpdate(long bno, BigSkill oldBigSkill) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(bno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : ["+bno+"]"));
        
        bigSkill.setBno(oldBigSkill.getBno());
        bigSkill.setSkill(oldBigSkill.getSkill());
        bigSkill.setDetail(oldBigSkill.getDetail());
        
        BigSkill newBigSkill = bigSkillRepository.save(bigSkill);
        return ResponseEntity.ok(newBigSkill);
    }

    @Override
    public BigSkill bigSkillInsert(BigSkill bigSkill) {
        // TODO Auto-generated method stub
//        Career insertCareer = careerRepository.save(career);
        
        return bigSkillRepository.save(bigSkill);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> bigSkillDelete(long bno) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(bno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : ["+bno+"]"));
        
        bigSkillRepository.delete(bigSkill);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Career Data by id : ["+bno+"]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    
    // 중분류
    @Override
    public List<MediumSkill> mediumSkillList() {
        // TODO Auto-generated method stub
//        System.out.println(mediumSkillRepository.findAll());
        return mediumSkillRepository.findAll();
    }

    @Override
    public ResponseEntity<MediumSkill> mediumSkillGet(long mno) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<MediumSkill> bigSkillUpdate(long mno, MediumSkill oldMediumSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public MediumSkill mediumSkillInsert(MediumSkill MediumSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> mediumSkillDelete(long mno) {
        // TODO Auto-generated method stub
        return null;
    }

    
    // 소분류 
    @Override
    public List<SmallSkill> smallSkillList() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<SmallSkill> smallSkillGet(long sno) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<SmallSkill> smallSkillUpdate(long sno, SmallSkill oldSmallSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public SmallSkill smallSkillInsert(SmallSkill smallSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> smallSkillDelete(long sno) {
        // TODO Auto-generated method stub
        return null;
    }
    
    
    
}
