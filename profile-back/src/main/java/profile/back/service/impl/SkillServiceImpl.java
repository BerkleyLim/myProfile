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
    public ResponseEntity<BigSkill> bigSkillGet(long no) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : ["+no+"]"));
        
        return ResponseEntity.ok(bigSkill);
    }

    @Override
    public ResponseEntity<BigSkill> bigSkillUpdate(long no, BigSkill oldBigSkill) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : ["+no+"]"));
        
        bigSkill.setNo(oldBigSkill.getNo());
        bigSkill.setSkill(oldBigSkill.getSkill());
        bigSkill.setDetail(oldBigSkill.getDetail());
        
        BigSkill newBigSkill = bigSkillRepository.save(bigSkill);
        return ResponseEntity.ok(newBigSkill);
    }

    @Override
    public BigSkill bigSkillInsert(BigSkill bigSkill) {
        // TODO Auto-generated method stub
//        Skill insertSkill = SkillRepository.save(Skill);
        
        return bigSkillRepository.save(bigSkill);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> bigSkillDelete(long no) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : ["+no+"]"));
        
        bigSkillRepository.delete(bigSkill);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Skill Data by id : ["+no+"]", Boolean.TRUE);
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
    public ResponseEntity<MediumSkill> mediumSkillGet(long no) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<MediumSkill> mediumSkillUpdate(long no, MediumSkill oldMediumSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public MediumSkill mediumSkillInsert(MediumSkill MediumSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> mediumSkillDelete(long no) {
        // TODO Auto-generated method stub
        return null;
    }

    
    // 소분류 
    @Override
    public List<SmallSkill> smallSkillList() {
        // TODO Auto-generated method stub
        return smallSkillRepository.findAll();
    }

    @Override
    public ResponseEntity<SmallSkill> smallSkillGet(long no) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<SmallSkill> smallSkillUpdate(long no, SmallSkill oldSmallSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public SmallSkill smallSkillInsert(SmallSkill smallSkill) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> smallSkillDelete(long no) {
        // TODO Auto-generated method stub
        return null;
    }
    
    
    
}
