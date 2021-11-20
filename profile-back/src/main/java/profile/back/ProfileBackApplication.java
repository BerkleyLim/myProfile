package profile.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@ServletComponentScan
@SpringBootApplication
public class ProfileBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfileBackApplication.class, args);
	}

	@RequestMapping("/")
    public String home() {
        return "hello worlld spring!";
    }
	
}
