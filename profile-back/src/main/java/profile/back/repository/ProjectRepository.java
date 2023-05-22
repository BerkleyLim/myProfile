package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
