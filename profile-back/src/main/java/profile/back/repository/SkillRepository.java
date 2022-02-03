package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.Career;

public interface SkillRepository extends JpaRepository<Career, Long> {

}
