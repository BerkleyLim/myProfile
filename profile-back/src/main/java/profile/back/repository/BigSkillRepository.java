package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import profile.back.domain.entity.BigSkill;

public interface BigSkillRepository extends JpaRepository<BigSkill, Long> {
  // @Query(value = "select * from Bigskill where id = 1")
  // String findMaxUserid();
}
