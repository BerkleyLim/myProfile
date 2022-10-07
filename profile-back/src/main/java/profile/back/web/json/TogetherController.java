package profile.back.web.json;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.Together;
import profile.back.service.TogetherService;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/together")
public class TogetherController {
    
    @Autowired
    TogetherService togetherService;
    
    @GetMapping("/")
    public List<Together> getTogether() {
        return togetherService.list();
    }
}
