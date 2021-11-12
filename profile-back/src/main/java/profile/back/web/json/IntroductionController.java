package profile.back.web.json;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
}
