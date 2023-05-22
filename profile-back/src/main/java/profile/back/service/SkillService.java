package profile.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.LinkedList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.career.BigSkill;
import profile.back.domain.entity.career.MediumSkill;
import profile.back.domain.entity.career.SmallSkill;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.BigSkillRepository;
import profile.back.repository.MediumSkillRepository;
import profile.back.repository.SmallSkillRepository;

@Service
public class SkillService {
    @Autowired
    BigSkillRepository bigSkillRepository;

    @Autowired
    MediumSkillRepository mediumSkillRepository;

    @Autowired
    SmallSkillRepository smallSkillRepository;

    // 전체 조회
    // public List<Object> skillList() {
    // // TODO Auto-generated method stub
    // List<BigSkill> bigSkill = bigSkillRepository.findAll();
    // List<MediumSkill> mediumSkill = mediumSkillRepository.findAll();
    // List<SmallSkill> smallSkill = smallSkillRepository.findAll();

    // // System.out.println(bigSkill);
    // // System.out.println(mediumSkill.toString());

    // List<Object> list = new LinkedList<>();
    // list.add(bigSkill);
    // list.add(mediumSkill);
    // list.add(smallSkill);

    // return list;
    // }

    // 대분류
    public List<BigSkill> bigSkillList() {
        // TODO Auto-generated method stub
        return bigSkillRepository.findAll();
    }

    public ResponseEntity<BigSkill> bigSkillGet(long no) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : [" + no + "]"));

        return ResponseEntity.ok(bigSkill);
    }

    public ResponseEntity<BigSkill> bigSkillUpdate(BigSkill oldBigSkill) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(oldBigSkill.getNo())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Not exist Skill Data by no : [" + oldBigSkill.getNo() + "]"));

        bigSkill.setNo(oldBigSkill.getNo());
        bigSkill.setSkill(oldBigSkill.getSkill());
        bigSkill.setDetail(oldBigSkill.getDetail());

        BigSkill newBigSkill = bigSkillRepository.save(bigSkill);
        return ResponseEntity.ok(newBigSkill);
    }

    public BigSkill bigSkillInsert(BigSkill bigSkill) {
        // TODO Auto-generated method stub
        // Skill insertSkill = SkillRepository.save(Skill);

        return bigSkillRepository.save(bigSkill);
    }

    public ResponseEntity<Map<String, Boolean>> bigSkillDelete(long no) {
        // TODO Auto-generated method stub
        BigSkill bigSkill = bigSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : [" + no + "]"));

        bigSkillRepository.delete(bigSkill);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Skill Data by id : [" + no + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // 중분류
    public List<MediumSkill> mediumSkillList() {
        // TODO Auto-generated method stub
        return mediumSkillRepository.findAll(Sort.by(Sort.Direction.ASC,
                "BigSkill_no"));
    }

    public ResponseEntity<MediumSkill> mediumSkillGet(long no) {
        // TODO Auto-generated method stub
        MediumSkill mediumSkill = mediumSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : [" + no + "]"));

        return ResponseEntity.ok(mediumSkill);
    }

    public ResponseEntity<MediumSkill> mediumSkillUpdate(MediumSkill oldMediumSkill) {
        // TODO Auto-generated method stub
        MediumSkill mediumSkill = mediumSkillRepository.findById(oldMediumSkill.getNo())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Not exist Skill Data by no : [" + oldMediumSkill.getNo() + "]"));
        mediumSkill.setNo(oldMediumSkill.getNo());
        mediumSkill.setSkill(oldMediumSkill.getSkill());
        mediumSkill.setDetail(oldMediumSkill.getDetail());
        // mediumSkill.setBigSkill_no(oldMediumSkill.getBigSkill_no());

        MediumSkill newMediumSkill = mediumSkillRepository.save(mediumSkill);
        return ResponseEntity.ok(newMediumSkill);
    }

    public MediumSkill mediumSkillInsert(MediumSkill mediumSkill) {
        // TODO Auto-generated method stub
        return mediumSkillRepository.save(mediumSkill);
    }

    public ResponseEntity<Map<String, Boolean>> mediumSkillDelete(long no) {
        // TODO Auto-generated method stub
        MediumSkill mediumSkill = mediumSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : [" + no + "]"));
        mediumSkillRepository.delete(mediumSkill);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Skill Data by id : [" + no + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // 소분류
    public List<SmallSkill> smallSkillList() {
        // TODO Auto-generated method stub
        return smallSkillRepository.findAll(Sort.by(Sort.Direction.ASC,
                "MediumSkill_no"));
    }

    public ResponseEntity<SmallSkill> smallSkillGet(long no) {
        // TODO Auto-generated method stub
        SmallSkill smallSkill = smallSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : [" + no + "]"));
        return ResponseEntity.ok(smallSkill);
    }

    public ResponseEntity<SmallSkill> smallSkillUpdate(SmallSkill oldSmallSkill) {
        // TODO Auto-generated method stub
        SmallSkill smallSkill = smallSkillRepository.findById(oldSmallSkill.getNo())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Not exist Skill Data by no : [" + oldSmallSkill.getNo() + "]"));

        smallSkill.setNo(oldSmallSkill.getNo());
        smallSkill.setSkill(oldSmallSkill.getSkill());
        smallSkill.setDetail(oldSmallSkill.getDetail());
        // smallSkill.setMediumSkill_no(oldSmallSkill.getMediumSkill_no());

        SmallSkill newSmallSkill = smallSkillRepository.save(smallSkill);
        return ResponseEntity.ok(newSmallSkill);
    }

    public SmallSkill smallSkillInsert(SmallSkill smallSkill) {
        // TODO Auto-generated method stub
        return smallSkillRepository.save(smallSkill);
    }

    public ResponseEntity<Map<String, Boolean>> smallSkillDelete(long no) {
        // TODO Auto-generated method stub
        SmallSkill smallSkill = smallSkillRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Skill Data by no : [" + no + "]"));

        smallSkillRepository.delete(smallSkill);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Skill Data by id : [" + no + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
