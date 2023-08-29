package profile.back.web.json;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.vo.project.NotionAPIAuth;
import profile.back.service.ProjectService;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @PostMapping("notion/database/connection")
    public Object notionProjectAPI(@RequestBody NotionAPIAuth notionAPIAuth) {
        return projectService.notionProjectAPI(notionAPIAuth);
    }

}
