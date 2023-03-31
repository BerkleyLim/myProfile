package profile.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.MediumSkill;

public interface MediumSkillRepository extends JpaRepository<MediumSkill, Long> {
  // @Query("select * from mediumskill m Orderby m.bigskill.no asc")
  // List<MediumSkill> findAllOrderby();

}
