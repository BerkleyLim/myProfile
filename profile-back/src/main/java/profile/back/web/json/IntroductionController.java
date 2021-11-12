package profile.back.web.json;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import profile.back.service.IntroductionService;

@CrossOrigin(origins="http://localhost:3000")
@Controller
@RequestMapping("/api/introduction")
public class IntroductionController {
    
    @Autowired
    IntroductionService introductionService;
    
    @GetMapping("/")
    void getIntroduction() {
        
    }
}
