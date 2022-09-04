package profile.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import profile.back.domain.Project;

public interface ProjectService {
    public List<Project> list();
    public ResponseEntity<Project> get(long ino);
    public Project insert(Project project);
    public ResponseEntity<Project> update(long pno, Project project);
    public ResponseEntity<Map<String, Boolean>> delete(long pno);
    
}
