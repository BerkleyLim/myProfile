package profile.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import profile.back.domain.BigSkill;
import profile.back.domain.MediumSkill;
import profile.back.domain.SmallSkill;

public interface SkillService {
    public List<BigSkill> bigSkillList();
    public ResponseEntity<BigSkill> bigSkillGet(long bno);
    public ResponseEntity<BigSkill> bigSkillUpdate(long bno, BigSkill oldBigSkill);
    public BigSkill bigSkillInsert(BigSkill bigSkill);
    public ResponseEntity<Map<String,Boolean>> bigSkillDelete(long bno);
    
    public List<MediumSkill> mediumSkillList();
    public ResponseEntity<MediumSkill> mediumSkillGet(long mno);
    public ResponseEntity<MediumSkill> bigSkillUpdate(long mno, MediumSkill oldMediumSkill);
    public MediumSkill mediumSkillInsert(MediumSkill MediumSkill);
    public ResponseEntity<Map<String,Boolean>> mediumSkillDelete(long mno);
    
    public List<SmallSkill> smallSkillList();
    public ResponseEntity<SmallSkill> smallSkillGet(long sno);
    public ResponseEntity<SmallSkill> smallSkillUpdate(long sno, SmallSkill oldSmallSkill);
    public SmallSkill smallSkillInsert(SmallSkill smallSkill);
    public ResponseEntity<Map<String,Boolean>> smallSkillDelete(long sno);
    
}
