package profile.back.web.json;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.BigSkill;
import profile.back.domain.MediumSkill;
import profile.back.domain.SmallSkill;
import profile.back.service.SkillService;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/skill")
public class SkillController {
    @Autowired
    SkillService skillService;

    // 전체 출력
    // @GetMapping("/")
    // public List<Object> getSkill() {
    // return skillService.skillList();
    // }

    // 전체 수정

    // 대분류
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
            @RequestBody BigSkill bigSkill) {
        return skillService.bigSkillInsert(bigSkill);
    }

    // @PutMapping("/big/{no}")
    @PostMapping("/big/update")
    public ResponseEntity<BigSkill> updateBigSkill(
            @RequestBody BigSkill bigSkill) {
        return skillService.bigSkillUpdate(bigSkill);
    }

    // @DeleteMapping("/big/{no}")
    @PostMapping("/big/delete/{no}")
    public ResponseEntity<Map<String, Boolean>> deleteBigSkill(
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
            @RequestBody MediumSkill mediumSkill) {
        return skillService.mediumSkillInsert(mediumSkill);
    }

    // @PutMapping("/medium/{no}")
    @PostMapping("/medium/update")
    public ResponseEntity<MediumSkill> updateMediumSkill(
            @RequestBody MediumSkill mediumSkill) {
        return skillService.mediumSkillUpdate(mediumSkill);
    }

    // @DeleteMapping("/medium/{no}")
    @PostMapping("/medium/delete/{no}")
    public ResponseEntity<Map<String, Boolean>> deleteMediumSkill(
            @PathVariable long no) {
        return skillService.mediumSkillDelete(no);
    }

    // 소분류
    @GetMapping("/small/")
    public List<SmallSkill> getSmallskill() {
        return skillService.smallSkillList();
    }

    @GetMapping("/small/{no}")
    public ResponseEntity<SmallSkill> getSmallOneskill(
            @PathVariable long no) {
        return skillService.smallSkillGet(no);
    }

    @PostMapping("/small/")
    public SmallSkill createSmallSkill(
            @RequestBody SmallSkill smallSkill) {
        return skillService.smallSkillInsert(smallSkill);
    }

    // @PutMapping("/small/{no}")
    @PostMapping("/small/update")
    public ResponseEntity<SmallSkill> updateSmallSkill(
            @RequestBody SmallSkill smallSkill) {
        return skillService.smallSkillUpdate(smallSkill);
    }

    // @DeleteMapping("/small/{no}")
    @PostMapping("/small/delete/{no}")
    public ResponseEntity<Map<String, Boolean>> deleteSmallSkill(
            @PathVariable long no) {
        return skillService.smallSkillDelete(no);
    }

}
