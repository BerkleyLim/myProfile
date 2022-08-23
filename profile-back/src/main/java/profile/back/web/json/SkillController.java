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
    
    @GetMapping("/big/{bno}")
    public ResponseEntity<BigSkill> getBigOneskill(
            @PathVariable long bno) {
        return skillService.bigSkillGet(bno);
    }
    
    @PostMapping("/big/")
    public BigSkill createBigSkill(
            @RequestBody BigSkill skill) {
        return skillService.bigSkillInsert(skill);
    }
    
    @PutMapping("/big/{bno}")
    public ResponseEntity<BigSkill> updateBigSkill (
            @PathVariable long bno,
            @RequestBody BigSkill bigSkill) {
        return skillService.bigSkillUpdate(bno, bigSkill);
    }
    
    @DeleteMapping("/big/{bno}")
    public ResponseEntity<Map<String,Boolean>> deleteBigSkill (
            @PathVariable long bno) {
        return skillService.bigSkillDelete(bno);
    }
    
    
    // 중분류
    @GetMapping("/medium/")
    public List<MediumSkill> getMediumskill() {
        return skillService.mediumSkillList(); 
    }
    
    
    
    // 소분류
    @GetMapping("/small/")
    public List<SmallSkill> getSmallskill() {
        return skillService.smallSkillList(); 
    }
    
}
