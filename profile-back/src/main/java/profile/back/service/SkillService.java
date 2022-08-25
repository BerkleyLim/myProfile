package profile.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import profile.back.domain.BigSkill;
import profile.back.domain.MediumSkill;
import profile.back.domain.SmallSkill;

public interface SkillService {
    public List<BigSkill> bigSkillList();
    public ResponseEntity<BigSkill> bigSkillGet(long no);
    public ResponseEntity<BigSkill> bigSkillUpdate(long no, BigSkill oldBigSkill);
    public BigSkill bigSkillInsert(BigSkill bigSkill);
    public ResponseEntity<Map<String,Boolean>> bigSkillDelete(long no);
    
    public List<MediumSkill> mediumSkillList();
    public ResponseEntity<MediumSkill> mediumSkillGet(long no);
    public ResponseEntity<MediumSkill> bigSkillUpdate(long no, MediumSkill oldMediumSkill);
    public MediumSkill mediumSkillInsert(MediumSkill MediumSkill);
    public ResponseEntity<Map<String,Boolean>> mediumSkillDelete(long no);
    
    public List<SmallSkill> smallSkillList();
    public ResponseEntity<SmallSkill> smallSkillGet(long no);
    public ResponseEntity<SmallSkill> smallSkillUpdate(long no, SmallSkill oldSmallSkill);
    public SmallSkill smallSkillInsert(SmallSkill smallSkill);
    public ResponseEntity<Map<String,Boolean>> smallSkillDelete(long no);
    
}
