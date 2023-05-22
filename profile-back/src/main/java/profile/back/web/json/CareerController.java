package profile.back.web.json;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.entity.Career;
import profile.back.service.CareerService;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/career")
public class CareerController {
    @Autowired
    CareerService careerService;

    @GetMapping("/")
    public List<Career> getCareer() {
        return careerService.list();
    }

    @GetMapping("{cno}")
    public ResponseEntity<Career> getOneCareer(
            @PathVariable long cno) {
        return careerService.get(cno);
    }

    @PostMapping("/")
    public Career createCareer(
            @RequestBody Career career) {
        return careerService.insert(career);
    }

    // @PutMapping("{cno}")
    @PostMapping("/update")
    public ResponseEntity<Career> UpdateCareer(
            // @PathVariable long cno,
            @RequestBody Career career) {
        return careerService.update(career);
    }

    // @DeleteMapping("{cno}")
    @PostMapping("/delete/{cno}")
    public ResponseEntity<Map<String, Boolean>> deleteCareer(
            @PathVariable long cno) {
        return careerService.delete(cno);
    }

}
