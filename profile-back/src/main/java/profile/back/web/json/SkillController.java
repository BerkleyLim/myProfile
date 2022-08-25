package profile.back.web.json;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.BigSkill;
import profile.back.domain.MediumSkill;
import profile.back.domain.SmallSkill;
import profile.back.service.SkillService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/skill")
public class SkillController {
    @Autowired
    SkillService skillService;
    
    @GetMapping("/big/")
    public List<BigSkill> getBigSkill() {
        return skillService.bigSkillList(); 
    }
    
    @GetMapping("/big/{no}")
    public ResponseEntity<BigSkill> getBigOneskill(
            @PathVariable long no) {
        return skillService.bigSkillGet(no);
    }
    
    @PostMapping("/big/")
    public BigSkill createBigSkill(
            @RequestBody BigSkill skill) {
        return skillService.bigSkillInsert(skill);
    }
    
    @PutMapping("/big/{no}")
    public ResponseEntity<BigSkill> updateBigSkill (
            @PathVariable long no,
            @RequestBody BigSkill bigSkill) {
        return skillService.bigSkillUpdate(no, bigSkill);
    }
    
    @DeleteMapping("/big/{no}")
    public ResponseEntity<Map<String,Boolean>> deleteBigSkill (
            @PathVariable long no) {
        return skillService.bigSkillDelete(no);
    }
    
    
    // 중분류
    @GetMapping("/medium/")
    public List<MediumSkill> getMediumskill() {
        return skillService.mediumSkillList(); 
    }
    
    @GetMapping("/medium/{no}")
    public ResponseEntity<MediumSkill> getMediumOneskill(
            @PathVariable long no) {
        return skillService.mediumSkillGet(no);
    }
    
    @PostMapping("/medium/")
    public MediumSkill createMediumSkill(
            @RequestBody MediumSkill skill) {
        return skillService.mediumSkillInsert(skill);
    }
    
    @PutMapping("/medium/{no}")
    public ResponseEntity<MediumSkill> updateMediumSkill (
            @PathVariable long no,
            @RequestBody MediumSkill mediumSkill) {
        return skillService.mediumSkillUpdate(no, mediumSkill);
    }
    
    @DeleteMapping("/medium/{no}")
    public ResponseEntity<Map<String,Boolean>> deleteMediumSkill (
            @PathVariable long no) {
        return skillService.mediumSkillDelete(no);
    }
    
    
    // 소분류
    @GetMapping("/small/")
    public List<SmallSkill> getSmallskill() {
        return skillService.smallSkillList(); 
    }
    
}
