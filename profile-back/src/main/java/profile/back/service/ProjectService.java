package profile.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.Project;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.ProjectRepository;

@Service
public class ProjectService {
    @Autowired
    ProjectRepository projectRepository;

    public List<Project> list() {
        List<Project> projectList = projectRepository.findAll();

        // 날짜 포맷 지정
        for (int i = 0; i < projectList.size(); i++) {
            Project project = projectList.get(i);

            if (project.getStartDate() != null)
                project.setStartDate(project.getStartDate().substring(0, project.getStartDate().length() - 3));
            if (project.getEndDate() != null)
                project.setEndDate(project.getEndDate().substring(0, project.getEndDate().length() - 3));
            if (project.getStartRunning() != null)
                project.setStartRunning(project.getStartRunning().substring(0, project.getStartRunning().length() - 3));

            projectList.set(i, project);
        }
        return projectList;
    }

    public ResponseEntity<Project> get(long pno) {
        // TODO Auto-generated method stub
        Project project = projectRepository.findById(pno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Project Data by no : [" + pno + "]"));
        return ResponseEntity.ok(project);
    }

    public Project insert(Project project) {
        // TODO Auto-generated method stub
        // 날짜 형식 지정

        if (project.getStartDate() != null)
            project.setStartDate(project.getStartDate() + "-01");
        if (project.getEndDate() != null)
            project.setEndDate(project.getEndDate() + "-28");
        if (project.getStartRunning() != null)
            project.setStartRunning(project.getStartRunning() + "-01");
        return projectRepository.save(project);
    }

    // public ResponseEntity<Project> update(long pno, Project oldProject) {
    public ResponseEntity<Project> update(Project oldProject) {
        // TODO Auto-generated method stub
        Project project = projectRepository.findById(oldProject.getPno())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Not exist Project Data by no : [" + oldProject.getPno() + "]"));

        project.setPno(oldProject.getPno());
        project.setTitle(oldProject.getTitle());
        project.setImg(oldProject.getImg());
        project.setStartDate(oldProject.getStartDate() + "-01");
        project.setEndDate(oldProject.getEndDate() + "-28");
        project.setLink(oldProject.getLink());
        project.setStartRunning(oldProject.getStartRunning() + "-01");
        project.setSkills(oldProject.getSkills());
        project.setPeople(oldProject.getPeople());
        project.setDetail(oldProject.getDetail());
        project.setIsOperation(oldProject.getIsOperation());

        Project newProject = projectRepository.save(project);
        return ResponseEntity.ok(newProject);
    }

    public ResponseEntity<Map<String, Boolean>> delete(long pno) {
        // TODO Auto-generated method stub
        Project project = projectRepository.findById(pno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Project Data by no : [" + pno + "]"));

        projectRepository.delete(project);
        Map<String, Boolean> response = new HashMap<>();

        response.put("Deleted Project Data by id : [" + pno + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
