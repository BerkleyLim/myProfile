package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.project.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
