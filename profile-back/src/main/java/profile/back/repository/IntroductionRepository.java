package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.Introduction;

public interface IntroductionRepository extends JpaRepository<Introduction, Integer> {

}
