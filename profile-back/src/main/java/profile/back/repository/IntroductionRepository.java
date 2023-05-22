package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.Introduction;

public interface IntroductionRepository extends JpaRepository<Introduction, Long> {

}
