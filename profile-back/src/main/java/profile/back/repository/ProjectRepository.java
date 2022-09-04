package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
