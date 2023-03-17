package profile.back.web.json;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.Project;
import profile.back.service.ProjectService;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @GetMapping("/")
    public List<Project> getProject() {
        return projectService.list();
    }

    @GetMapping("/{pno}")
    public ResponseEntity<Project> getOneProject(
            @PathVariable long pno) {
        return projectService.get(pno);
    }

    @PostMapping("/")
    public Project createProject(
            @RequestBody Project project) {
        return projectService.insert(project);
    }

    @PutMapping("/{pno}")
    public ResponseEntity<Project> updateProject(
            @PathVariable long pno, @RequestBody Project project) {
        return projectService.update(pno, project);
    }

    @DeleteMapping("/{pno}")
    public ResponseEntity<Map<String, Boolean>> deleteProject(
            @PathVariable long pno) {
        return projectService.delete(pno);
    }

}
