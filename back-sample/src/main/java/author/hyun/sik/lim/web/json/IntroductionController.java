package author.hyun.sik.lim.web.json;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/introduction")
public class IntroductionController {
    
    @GetMapping("/")
    void getIntroduction() {
        
    }
}
