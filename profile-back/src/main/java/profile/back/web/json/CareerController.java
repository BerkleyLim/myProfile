package profile.back.web.json;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/career")
public class CareerController {
    
    @GetMapping("/")
    void getCareer() {
        
    }
}
