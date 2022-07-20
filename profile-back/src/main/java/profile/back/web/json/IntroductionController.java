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

import profile.back.domain.Introduction;
import profile.back.service.IntroductionService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/introduction")
public class IntroductionController {
    
    @Autowired
    IntroductionService introductionService;
    
    @GetMapping("/")
    public List<Introduction> getIntroduction() {
        return introductionService.list();
    }
    
    @GetMapping("/{ino}")
    public ResponseEntity<Introduction> getOneIntroduction(
            @PathVariable long ino) {
        return introductionService.get(ino);
    }
    
    @PostMapping("/")
    public Introduction createIntroduction(
            @RequestBody Introduction introduction) {
        return introductionService.insert(introduction);
    }
    
    @PutMapping("/{ino}")
    public ResponseEntity<Introduction> updateIntroduction(
            @PathVariable long ino, @RequestBody Introduction introduction) {
        return introductionService.update(ino, introduction);
    }
    
    @DeleteMapping("/{ino}") 
    public ResponseEntity<Map<String, Boolean>> deleteIntroduction(
            @PathVariable long ino) {
        return introductionService.delete(ino);
    }
    
}
